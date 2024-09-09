import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const baseUrl = process.env.BASE_URL || "http://localhost:3000";
