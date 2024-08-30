"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"


const formSchema = z.object({
    Name: z.string().min(3).max(50),
    email: z.string().email(),
    Number: z.number().min(10).max(15),
    productDetails: z.string(),
    quantity: z.number().min(1),
    message: z.string().min(3)

})


const BuyForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Name: "",
            email: "",
            Number: undefined,
            productDetails: "",
            quantity: undefined,
            message: ""
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" p-2 space-y-2 pt-4 w-96">
                    <FormField
                        control={form.control}
                        name="Name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter your Email address
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter your phone number
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="productDetails"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Details</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the product details
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quentity</FormLabel>
                                <FormControl>
                                    <Input type="number"  {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the Quentity of product to sell
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </Form>
        </>
    );
}

export default BuyForm;
