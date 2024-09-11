import AdminNav from "@/components/Nav/AdminNav";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <AdminNav />
            <div>
                {children}
            </div>
        </>
    );
}

export default AdminLayout;