import { AddCompany } from "@/components/company/add-company";
import { CompanyTableData } from "@/components/company/company-table";

const CompanysPage = () => {
    return (
        <div className="p-6 space-y-12">
            <div className="flex justify-end">
                <AddCompany />
            </div>
            <CompanyTableData />
        </div>
    );
}

export default CompanysPage;