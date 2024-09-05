import bcrypt from "bcryptjs";

export const saltAndHashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export const passwordHashCheck = async (password: string, userPass: string) => {
  return await bcrypt.compare(password, userPass);
};
