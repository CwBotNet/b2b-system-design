
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";




const LogoutBtn = () => {
    const handleLogout = async () => {
        "use server"
        await signOut()
    }

    return (
        <form action={handleLogout}>

            <Button type="submit">
                logout
            </Button>
        </form>
    );
}

export default LogoutBtn;