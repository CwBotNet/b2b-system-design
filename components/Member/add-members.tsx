
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


// TODO: ADD FORM LOGIC 

/**
 * 
 * form data
 * membership type
 * user
 */
export const AddMembers = () => {
    return (
        <div className="flex justify-end">
            <Dialog>
                <DialogTrigger>
                    <Button>
                        Add Member
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Add Members to primum</DialogTitle>
                        <div className="space-y-4 pt-2">
                            <Input />
                            <Input />
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Membership" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">basic</SelectItem>
                                    <SelectItem value="dark">primium</SelectItem>
                                    <SelectItem value="system">delux</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="space-x-4 flex justify-end">
                                <Button>Add</Button>
                                <Button variant={"ghost"}>cancel</Button>
                            </div>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}