import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SellForm from "./Froms/SellForm";
import BuyForm from "./Froms/BuyForm";

const RequirementForm = () => {
    return (
        <>

            <Dialog>
                <DialogTrigger>
                    Post Requirement
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Post Requirement
                        </DialogTitle>
                        <DialogDescription>
                            Post your requirement
                        </DialogDescription>
                    </DialogHeader>
                    <Tabs defaultValue="Buy" className="w-[455px] flex justify-center flex-col items-center">
                        <TabsList>
                            <TabsTrigger value="Buy">Buy Requirement</TabsTrigger>
                            <TabsTrigger value="Sell">Sell Requirement</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Buy">
                            <BuyForm />
                        </TabsContent>
                        <TabsContent value="Sell">
                            <SellForm />
                        </TabsContent>
                    </Tabs>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default RequirementForm;