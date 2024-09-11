"use server";

import { signIn } from "@/auth";
import { getUserFromDb } from "@/data/user";
import {
  sendVerificationEmail,
  sendVerificationEmailByGoogle,
} from "@/lib/mail";
import { genrateVerificationToken } from "@/lib/token";

import { ADMIN_LOGIN_ROUTE, DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { email, password, code } = validateFields.data;
  const existingUser = await getUserFromDb({ email });

  if (!existingUser?.emailVerified) {
    const verificationToken = await genrateVerificationToken(
      existingUser?.email as string
    );

    // resend method
    // await sendVerificationEmail(
    //   verificationToken.email,
    //   verificationToken.token
    // );

    // gmail smtp method
    const resultGmail = await sendVerificationEmailByGoogle(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Confirmation email sent. 👍" };
  }

  let route = DEFAULT_LOGIN_REDIRECT;

  if (existingUser.role === "SUPERADMIN") {
    route = ADMIN_LOGIN_ROUTE;
  }

  console.log({ route: route });

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: route,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
