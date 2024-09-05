import * as z from "zod";

import { LoginSchema } from "@/schemas";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { passwordHashCheck, saltAndHashPassword } from "@/utils/password";
export const POST = async (req: Request, res: Response) => {
  const body: z.infer<typeof LoginSchema> = await req.json();

  const validatedFields = LoginSchema.safeParse(body);

  if (!validatedFields.success) {
    return NextResponse.json({ error: "Invalid fields" });
  }

  //exesting user check

  const existingUser = await db.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!existingUser) {
    return NextResponse.json({ error: "User dose not exists with this Email" });
  }

  // logic to login user
  const user = await db.user.findUnique({
    where: {
      email: body.email,
    },
  });
  const passwordMatch = await passwordHashCheck(
    body.password,
    user?.password as string
  );

  if (!passwordMatch) {
    return NextResponse.json({ error: "wrong password" });
  }
  
  return NextResponse.json({ success: true, message: "User Found", user });
};

