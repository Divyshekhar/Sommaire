import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";

type PriceType = {
    name: string;
    price: number;
    description: string;
    items: string[];
    id: string;
    paymentLink: string;
    priceId: string;
  };
const plans = [
    {
        id: "basic",
        name: "basic",
        price: 9,
        description: "Perfect for occasional use",
        items: [
            "5 PDF summaries per month",
            "Standard processing speed",
            "Email support",
        ],
        paymentLink: "",
        priceId: ""

    },
    {
        id: "pro",
        name: "Pro",
        price: 19,
        description: "For professionals and teams",
        items: ["Unlimited PDF summaries",
            "Priority processing",
            "24/7 priority support",
            "markdown Expport",
        ],
        paymentLink: "",
        priceId: ""
    }
];

const PricingCard = ({name, price, description, paymentLink, items, id} : PriceType) => {
    return (
        <div className="relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300">
            <div className={cn("relative flex flex-col h-full gap-4 lg:gap-8 rounded-xl border-[1px] z-10 p-8 border-gray-500/20", id==='pro' && 'border-teal-500 gap-5 border-2')}>
            <div className="flex justify-between items-center gap-4">
                <div>
                <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
                <p className="text-base-content/80 mt-2">{description}</p>    
                </div>
            </div>
            <div className="space-y-2.5 leading-relaxed text-base flex-1">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                        <CheckIcon size={18} />
                        <span>{item}</span>
                        {/* {item} */}
                    </li>
                ))}
            </div>
            <div className=" flex gap-2">
                <p className="text-5xl tracking-tight font-extrabold">${price}</p>
                <div className="flex justify-end flex-col mb-[4px]">
                    <p className="text-xs uppercase font-semibold">USD</p>
                    <p className="text-xs">/month</p>
                </div>
            </div>
            <div className="space-y-2 flex justify-center w-full">
                <Link href={paymentLink} className={cn("w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-teal-800 to-teal-500 hover:from-teal-500 hover:to-teal-800 text-white border-2 py-2 transition-colors duration-500", id==='pro'
                    ? 'border-teal-900'
                    : 'border-teal-100 from teal-400 to-teal-500'
                )}>Buy Now <ArrowRight size={18} />
                </Link>
            </div>
            </div>
        </div>
    )
}


export default function PricingSection() {
    return (
        <section className="relative overflow-hidden" id="pricing">
            <div className="py-12 lg:py-24 mx-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
                <div className="flex items-center justify-center w-full pb-12">
                    <h2 className="uppercase font-bold text-xl mb-8 text-teal-500">Pricing</h2>
                </div>
                <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
                    {plans.map((plan) => (
                        <PricingCard key={plan.id} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    )
}