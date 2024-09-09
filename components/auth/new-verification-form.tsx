"use client"

import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

import { Button } from "../ui/button"
import FormError from "@/components/form-error"
import FormSuccess from "../form-success"
import Link from "next/link"
import { newVerification } from "@/actions/new-verification"

export const NewVerificationForm = () => {

    const searchParams = useSearchParams()
    const [error, setError] = useState<string | undefined>("")
    const [sucess, setSuccess] = useState<string | undefined>("")

    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
        if (sucess || error) return;

        if (!token) {
            setError("Invalid token")
            return;
        }

        newVerification(token).then((data) => {
            setSuccess(data.success)
            setError(data.error)
        }).catch(() => {
            setError("Somthing went wrong!")
        })

    }, [token, sucess, error])

    useEffect(() => {
        onSubmit()
    }, [onSubmit])


    return (
        <div className="flex flex-col space-y-12 justify-center items-center h-full w-full">
            <h1 className="text-2xl font-medium">Email Verification</h1>
            {/* From Uiverse.io by Javierrocadev */}

            {!sucess && !error &&

                <div className="flex flex-row gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                </div>
            }
            <FormSuccess message={sucess} />
            {!sucess && <FormError message={error} />}
            <FormError message="" />
            <Button variant={"link"}>
                <Link href={"/sign-in"}>
                    Back to Login
                </Link>
            </Button>
        </div>
    )
} 