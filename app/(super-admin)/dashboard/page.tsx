import { auth } from "@/auth";
import LogoutBtn from "@/components/auth/logout-btn";

const DashboardPage = async () => {
    const session = await auth()

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>protected route only for admin: {JSON.stringify(session)}</p>
            <LogoutBtn />
        </div>
    );
}

export default DashboardPage;