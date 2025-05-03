import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatFileName(url: string): string {
  const fileName = url.split('/').pop() || '';
  return fileName
    .replace(/\.[^/.]+$/, '')                     // removes extension -> "divyshekhar_resume-v2"
    .replace(/[-_]/g, ' ')                        // replaces - and _ with space -> "divyshekhar resume v2"
    .split(' ')                                   // splits to ["divyshekhar", "resume", "v2"]
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // capitalizes each
    .join(' ')                                    // joins -> "Divyshekhar Resume V2"

}