import { db } from "@/lib/db";

interface User {
  email: string;
}

export const getUserFromDb = async ({ email }: User) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};
