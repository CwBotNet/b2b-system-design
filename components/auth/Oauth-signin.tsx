import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const OauthSignin = () => {

    const handelOauth = (provider: "google") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }

    return (
        <div>
            <Button onClick={() => handelOauth("google")} variant="outline" className="w-full">
                Login with Google
            </Button>
        </div>
    );
}

export default OauthSignin;