import { transporter } from "@/config/nodeMailer";
import { resend, baseUrl } from "@/constants";

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${baseUrl}/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<p><a href="${confirmLink}">Click here</a> to confirm email.</p>`,
  });
};

// gmail smtp setup

export const sendVerificationEmailByGoogle = async (
  email: string,
  token: string
) => {
  const confirmationLink = `${baseUrl}/new-verification?token=${token}`;

  try {
    await transporter.sendMail({
      from: "indianexportwebmart8@gmail.com",
      to: email,
      subject: "Confirm your email",
      html: `<p><a href="${confirmationLink}">Click here</a> to confirm email.</p>`,
    });
  } catch (error) {
    return { error: "Email not Sent!" };
  }
};
