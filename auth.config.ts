// this config is for prisma edge commpatibality

import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

import { LoginSchema } from "@/schemas";
import { passwordHashCheck, saltAndHashPassword } from "./utils/password";
import { getUserFromDb } from "./data/user";

export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      authorize: async (credentials) => {
        let user;
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          // logic to verify if the user exists
          user = await getUserFromDb({
            email,
          });

          if (!user || !user.password) return null;

          const passwordMatch = await passwordHashCheck(
            password,
            user.password as string
          );

          if (passwordMatch) {
            // return user object with their profile data
            return user;
          }
          return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
