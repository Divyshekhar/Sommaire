import BgComponent from "@/components/common/bg-gradient";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <main className="min-h-screen">
            <BgComponent />
            <div className="container max-auto flex flex-col gap-4 ml-2">
                <div className="px-2 pt-12 sm:py-24">
                    <div className="flex gap-4 mb-8 justify-between">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl font-bold tracking-tight bg-linear-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent">Your Summaries</h1>
                            <p className="text-gray-600">Transform your PDFs into concise, actionable insights</p>
                        </div>
                        <Button variant={'link'} className="transform hover:scale-105 hover:no-underline w-full min-[400px] :w-auto bg-linear-to-r from-teal-800 to-teal-500 hover:from-teal-500 hover:mask-r-to-slate-900 hover:text-white text-white transition duration-350 flex items-center justify-center">
                            <Link href={"/upload"} className="flex text-white items-center"><Plus className="w-5 h-5 mr-2" />New Summary</Link>
                        </Button>
                    </div>
                    <div className="mb-6">
                        <div className="bg-teal-100 border border-teal-200 rounded-lg p-4 text-teal-800">
                        <p className="text-sm">You've reached the limit of 5 uploads on the Basic plan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}