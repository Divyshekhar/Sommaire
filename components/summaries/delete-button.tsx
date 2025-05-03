import { Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";

export default function DeleteButton() {
    return (
        <Button variant={'ghost'} size="icon" className=" bg-gray-50 border border-gray-200 hover:text-teal-600 hover:bg-teal-300 text-gray-400">
            <Trash2Icon className="w-4h-4" />
        </Button>
    )
}