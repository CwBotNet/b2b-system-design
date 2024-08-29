import { Card, CardContent, CardHeader } from "../ui/card";
import VerticalScroll from "../Animation/VerticalScroll";
import { domasticLeads, interNationLeads } from "@/app/utils";
import Image from "next/image";
const LeadScroller = () => {



    return (
        <>
            <div className="space-x-6 pb-24  flex flex-col justify-center items-center  gap-y-12">
                <h1 className="text-4xl font-bold tracking-wider">Leads</h1>
                <div className="md:flex gap-x-6">
                    <div>
                        <CardHeader
                            className="text-center  bg-none z-50">
                            <h1>Domastics leads</h1>

                        </CardHeader>
                        <Card className=" h-96 overflow-y-auto md:w-[40vw] scroll-smooth text-xs">

                            <CardContent className="">
                                <div className="flex flex-col gap-3 justify-center border-none p-2 rounded-md ">
                                    <VerticalScroll>

                                        {domasticLeads.map((item, idx) => (
                                            <div key={idx} className="flex p-3 mb-2 justify-between border rounded-sm items-center ">
                                                <span className="flex items-center gap-x-4">
                                                    <Image src={`https://flagcdn.com/h80/${item.flag}.png`} height={40} width={40} alt={item.country} className="rounded-full" />
                                                    {item.country}</span> |
                                                <p>{item.product}</p>|
                                                <p>₹ {item.price}</p>|
                                                <p>{item.date}</p>
                                            </div>

                                        ))}
                                    </VerticalScroll>
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <CardHeader
                            className="text-center  bg-none z-50">
                            <h1>International leads</h1>

                        </CardHeader>
                        <Card className=" h-96 overflow-y-auto md:w-[40vw] scroll-smooth text-xs">

                            <CardContent className="">
                                <div className="flex flex-col gap-3 justify-center border-none p-2 rounded-md">
                                    <VerticalScroll>

                                        {interNationLeads.map((item, idx) => (
                                            <div key={idx} className="flex p-3 mb-2 justify-between border rounded-sm items-center">
                                                <span className="flex items-center gap-x-4">
                                                    <Image src={`https://flagcdn.com/h80/${item.flag}.png`} height={40} width={40} alt={item.country} className="rounded-full" />
                                                    {item.country}</span> |
                                                <p>{item.product}</p>|
                                                <p>$ {item.price}</p>|
                                                <p>{item.date}</p>
                                            </div>

                                        ))}
                                    </VerticalScroll>
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div >
        </>
    );
}

export default LeadScroller;