"use server";

import { generateSummaryFromGemini } from "@/lib/geminiai";
import { fetchAndExtractPdfText } from "@/lib/langchain";

export async function generatePdfSummary(
  uploadResponse: [
    {
      serverData: {
        userId: string;
        file: {
          url: string;
          name: string;
        };
      };
    }
  ]
) {
  if (!uploadResponse) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }
  const {
    serverData: {
      userId,
      file: { url: pdfUrl, name: fileName },
    },
  } = uploadResponse[0];
  if (!pdfUrl) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractPdfText(pdfUrl);
    console.log("this is pdf text")
    console.log({ pdfText });
    let summary;
    try {
      summary = await generateSummaryFromGemini(pdfText);
      console.log(summary)
    } catch (geminiError) {
      console.error('Gemini API failed', geminiError)
    }
    if (!summary) {
      return {
        success: false,
        message: "File upload failed",
        data: null,
      }
    }

  } catch (err) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }
}