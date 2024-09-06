import { auth } from "@/auth";

const DashboardPage = async () => {
    const session = await auth()

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>protected route only for admin: {JSON.stringify(session)}</p>
        </div>
    );
}

export default DashboardPage;