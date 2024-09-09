


// components/EmailVerificationTemplate.tsx
import { Html, Head, Preview, Body, Container, Heading, Text, Button, Hr, Tailwind } from "@react-email/components";

interface EmailVerificationProps {
    confirmationLink: string;
}

const EmailVerificationTemplate = ({ confirmationLink }: EmailVerificationProps) => (

    <Tailwind>

        <Html>
            <Head />
            <Preview>Email Verification</Preview> {/* Preview Text */}
            <Body style={main}>
                <Container>
                    <Heading className="font-bold text-2xl text-center">Verify Your Email</Heading>
                    <Text className="text-center text-md font-medium">
                        Thank you for signing up! Please confirm your email address by clicking the button below:
                    </Text>
                    <div className="flex justify-center">
                        <Button
                            href={confirmationLink}
                            className="bg-black text-white p-3 w-36 text-center rounded-lg"
                        >
                            Verify Email
                        </Button>
                    </div>
                    <Text className="font-sans text-center font-medium">
                        If you didn’t create an account, you can safely ignore this email.
                    </Text>
                    <Hr />
                    <Text style={footer}>Regards, <br /> Indian Export Web Mart.</Text>
                </Container>
            </Body>
        </Html>
    </Tailwind>
);

// Inline styles
const main = {
    backgroundColor: "#f6f9fc",
    padding: "20px",
    
};

const container = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "5px",
    border: "1px solid #eaeaea",
    maxWidth: "600px",
    margin: "0 auto",
};

const heading = {
    fontSize: "22px",
    color: "#333333",
};

const paragraph = {
    fontSize: "16px",
    color: "#555555",
};

const button = {
    backgroundColor: "#0070f3",
    color: "#ffffff",
    padding: "12px 24px",
    textDecoration: "none",
    borderRadius: "5px",
    display: "inline-block",
};

const footer = {
    fontSize: "14px",
    color: "#888888",
};


export default EmailVerificationTemplate