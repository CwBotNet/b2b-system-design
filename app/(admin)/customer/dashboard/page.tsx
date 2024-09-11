import { auth } from "@/auth";
import LogoutBtn from "@/components/auth/logout-btn";
const UserDashboard = async () => {
    const session = await auth()

    return (
        <div>
            <h1>User Dashboard</h1>
            <p>user details: {JSON.stringify(session?.user)}</p>
            <LogoutBtn />
        </div>
    );
}

export default UserDashboard;