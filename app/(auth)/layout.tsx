
const AuthLayout = (
    {
        children
    }: {
        children: React.ReactNode,
    }
) => {
    return (
        <div className="flex items-center h-screen">
            {children}
        </div>
    );
}

export default AuthLayout;