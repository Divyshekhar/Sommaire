import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="bg-gray-50 py-12">
            <div className="py-12 lg:py-24 mx-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Save Hours of Reading Time?</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed dark:text-gray-400">
                            Transform lengthy documents into clear, actionable insights with our AI-powered summarizer
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-[20px]">
                        <div>
                            <Button variant={'link'} size="lg" className="w-full min-[400px] :w-auto bg-linear-to-r from-slate-900 to-teal-500 hover:from-teal-5000 hover:mask-r-to-slate-900 hover:text-white text-white transition-all duration-300 flex items-center justify-center">
                                <Link href={"/#pricing"} className="flex items-center justify-center"><span className="px-2">Get Started</span> <ArrowRight className="ml-2 h-4 w-4 animate-pulse" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}