import { auth } from "@/auth";
import LogoutBtn from "@/components/auth/logout-btn";
import { redirect } from "next/navigation";

const UserDashboard = async () => {
    const session = await auth()

    if (session?.user.role === "SUPERADMIN") redirect("/admin/dashboard")

    return (
        <div>
            <h1>User Dashboard</h1>
            <p>user details: {JSON.stringify(session?.user)}</p>
            <LogoutBtn />
        </div>
    );
}

export default UserDashboard;