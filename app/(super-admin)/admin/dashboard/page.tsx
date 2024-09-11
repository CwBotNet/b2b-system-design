import { auth } from "@/auth";
import LogoutBtn from "@/components/auth/logout-btn";
import AdminNav, { UserDataInterface } from "@/components/Nav/AdminNav";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
    const session = await auth()

    if (session?.user.role !== "SUPERADMIN") redirect("/user/admin/dashboard")


    return (
        <div>
            {/* <AdminNav name={data?.name as string} image={data?.image || ""} role={data?.role as string} /> */}
            <h1>Admin Dashboard</h1>
            <p>protected route only for admin: {JSON.stringify(session)}</p>
            <LogoutBtn className="bg-neutral-950 text-white p-3 rounded-lg" />
        </div>
    );
}

export default DashboardPage;