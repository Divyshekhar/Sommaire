"use client"
import { z } from "zod";
import { toast } from "sonner";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";

const schema = z.object({
    file: z.
        instanceof(File, { message: "invalid file" }).refine((file) => file.size <= 24 * 1024 * 1024, "File size must be less than 20MB")
        .refine((file) => file.type.startsWith("application/pdf"), "File must be a PDF")
});

export default function UploadForm() {
    const { startUpload, routeConfig } = useUploadThing('pdfUploader', {
        onClientUploadComplete: () => {
            console.log('uploaded successfully');
        },
        onUploadError: (err) => {
            console.error("Error occurred while uploading")
            toast("Error occurred while uploading", {
                description: err.message
            })
        },
        onUploadBegin: ({ file }) => {
            console.log("Upload has begun for", file)
        }
    },

    )

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log("Submitted");
        const formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;

        //validating the fields
        const validatedFields = schema.safeParse({ file });
        if (!validatedFields.success) {

            toast("❌ Something went wrong", {
                description: validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid File"
            })
            return
        }
        toast("📄 Uploading PDF...", {
            description: "We are uploading your PDF!"
        })
        //upload file to uploadthing
        const resp = await startUpload([file])
        if (!resp) {
            toast("Something went wrong", {
                description: "Please use a different file",
            })
        }
        toast("📄 Processing PDF", {
            description: "Hang tight! Our AI is reading though your document! ✨"
        })

        //parse the pdf using langchain
        //summarize the pdf using AI
        //save the summary to the database
        // redirect to the [id] summary page
    }
    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput onSubmit={handleSubmit} />
        </div>
    )
}