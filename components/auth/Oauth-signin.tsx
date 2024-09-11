import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const OauthSignin = ({ method, disabled }: { method: "Sign Up" | "Login", disabled: boolean }) => {

    const handelOauth = (provider: "google") => {
        signIn(provider)
    }

    return (
        <div>
            <Button disabled={disabled} onClick={() => handelOauth("google")} variant="outline" className="w-full">
                {method} with Google
            </Button>
        </div>
    );
}

export default OauthSignin;