import { Github, Twitter, Instagram, Linkedin, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode
}

function SocialLink({ children, className, ...props }: SocialLinkProps) {
  return (
    <a 
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background/50 hover:bg-accent hover:text-accent-foreground transition-colors",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}

export function SocialLinks() {
  return (
    <div className="flex gap-2">
      <SocialLink href="https://x.com/DivyshekharSin">
        <X className="h-4 w-4" />
        <span className="sr-only">Twitter</span>
      </SocialLink>
      <SocialLink href="https://github.com/Divyshekhar">
        <Github className="h-4 w-4" />
        <span className="sr-only">GitHub</span>
      </SocialLink>
      <SocialLink href="https://instagram.com/divyshekhar_sinha">
        <Instagram className="h-4 w-4" />
        <span className="sr-only">Instagram</span>
      </SocialLink>
      <SocialLink href="https://linkedin.com/divyshekhar-sinha">
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">LinkedIn</span>
      </SocialLink>
    </div>
  )
}