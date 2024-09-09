import * as z from "zod";

import { RegisterSchema } from "@/schemas";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { saltAndHashPassword } from "@/utils/password";
import { genrateVerificationToken } from "@/lib/token";
import {
  sendVerificationEmail,
  sendVerificationEmailByGoogle,
} from "@/lib/mail";
export const POST = async (req: Request, res: Response) => {
  const body: z.infer<typeof RegisterSchema> = await req.json();

  const validatedFields = RegisterSchema.safeParse(body);

  if (!validatedFields.success) {
    return NextResponse.json({ error: "Invalid fields" });
  }

  //exesting user check

  const existingUser = await db.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (existingUser) {
    return NextResponse.json({ error: "User already exists with this Email" });
  }

  const hashedPassword = await saltAndHashPassword(body.password);

  // logic to register the user

  const user = await db.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: hashedPassword,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  // TODO: Send verification token email

  const verificationToken = await genrateVerificationToken(body.email);

  // send verification by resend
  // const result = await sendVerificationEmail(
  //   verificationToken.email,
  //   verificationToken.token
  // );

  // send verification by gmail

  const resultGmail = await sendVerificationEmailByGoogle(
    verificationToken.email,
    verificationToken.token
  );


  return NextResponse.json({
    success: "Email verification sent. 👍",
    message: "User Created",
    user,
  });
};
