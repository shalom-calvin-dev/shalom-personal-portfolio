import type { SocialLink } from "@/lib/contact";
import { GithubIcon, LinkedinIcon } from "./icons";

export function SocialIcon({ id, className }: { id: SocialLink["id"]; className?: string }) {
  return id === "github" ? (
    <GithubIcon className={className} />
  ) : (
    <LinkedinIcon className={className} />
  );
}
