import { render } from "@react-email/components";

import { transporter } from "@/config/nodeMailer";
import { resend, baseUrl } from "@/constants";
import EmailVerificationTemplate from "@/react-email-starter/emails/email-verification";

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
    const emailHtml = await render(
      EmailVerificationTemplate({ confirmationLink })
    );
    const result = await transporter.sendMail({
      from: "rajsahaniofficial19@gmail.com",
      to: email,
      subject: "Confirm your email",
      html: emailHtml,
    });

  } catch (error: any) {
    return { error: "Email not Sent!" };
  }
};
