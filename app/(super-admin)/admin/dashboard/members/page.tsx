import { AddMembers } from "@/components/Member/add-members";
import MembersTable from "@/components/Member/MemberTable";


// TODO: pass api member data for db
const MembersPage = () => {
    return (
        <div className="space-y-4 p-4">
            <AddMembers />
            <MembersTable />
        </div>
    );
}

export default MembersPage;