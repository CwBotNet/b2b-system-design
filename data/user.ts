import { db } from "@/lib/db";
import { User } from "lucide-react";

interface User {
  id?: string;
  email?: string;
}

export const getUserFromDb = async ({ email }: User) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};

export const getUserById = async ({ id }: User) => {
  const user = await db.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};
