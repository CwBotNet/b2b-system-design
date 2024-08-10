"use client"

import { Button } from "@/components/ui/button"

export default function NoProduct() {
    return (
        <div
            className="flex items-center justify-center rounded-lg border border-dashed shadow-sm h-full m-12 "
        >
            <div className="flex justify-center items-center">

                <div className="flex flex-col items-center gap-1 text-center">
                    <h3 className="text-2xl font-bold tracking-tight">
                        You have no products
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        You can start selling as soon as you add a product.
                    </p>
                    <Button className="mt-4">Add Product</Button>
                </div>
            </div>
        </div>
    )
}
