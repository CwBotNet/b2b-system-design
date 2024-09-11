"use client"
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";




const LogoutBtn = ({ className }: {
    className?: string
}) => {

    return (

        <button onClick={() => signOut()} className={cn("cursor-pointer", className)}>
            Logout
        </button>
    );
}

export default LogoutBtn;