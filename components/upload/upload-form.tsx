"use client";

import { z } from "zod";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { generatePdfSummary, storePdfSummaryAction } from "@/actions/upload-actions";
import type { ourFileRouter } from '@/app/api/uploadthing/core'
import { ClientUploadedFileData } from "uploadthing/types";


const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid File" })
    .refine((file) => file.size <= 20 * 1024 * 1024, "File must be < 20MB")
    .refine((file) => file.type === "application/pdf", "File must be a PDF"),
});

const UploadForm = () => {
  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      toast.success("Uploaded successfully!");
    },
    onUploadError: (err) => {
      console.error("Upload error", err);
      toast.error("Upload failed", {
        description: err.message,
      });
    },
    // onUploadBegin: ({ file }) => {
    //   console.log("Uploading file:", file.name);
    // },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    const validation = schema.safeParse({ file });
    if (!validation.success) {
      toast.error("Invalid file", {
        description:
          validation.error.flatten().fieldErrors.file?.[0] ?? "Invalid file",
      });
      return;
    }

    toast("Uploading PDF...", {
      description: "Please wait while we upload your file.",
    });

    const uploadResponse = await startUpload([file]);
    if (!uploadResponse) {
      toast.error("Upload failed", {
        description: "Please try again with a different file.",
      });
      return;
    }

    toast("Processing PDF...", {
      description: "Hang tight! We are analyzing your document.",
    });

    const result = await generatePdfSummary(
      uploadResponse as ClientUploadedFileData<ourFileRouter>[]
    );
    console.log("this is result", result);

    const { success, data, message } = result;

    if (success && data) {
      toast.success("📄 Summary generated!", {
        description: "Saving your summary now...",
      });
      console.log("This is result", result);
      console.log("this is data", data);
      if(data.summary){
        await storePdfSummaryAction({
          summary: data.summary,
          fileUrl: data.fileUrl,
          title: data.title,
          fileName: data.fileName,
        })
      }

    // TODO: Save summary to database
    // TODO: Redirect to summary page

    } else {
      toast.error("Summary generation failed", {
        description: message ?? "Unknown error occurred.",
      });
  }
}


  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}



export default UploadForm;
