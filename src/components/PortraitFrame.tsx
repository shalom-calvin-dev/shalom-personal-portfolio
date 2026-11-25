import Image from "next/image";
import { UserRound } from "lucide-react";

type Props = { src: string | null; name: string };

/** Portrait in a plain 1px neutral frame. Falls back to a flat placeholder when no image is set. */
export function PortraitFrame({ src, name }: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-md">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line-strong bg-card">
        {src ? (
          <Image
            src={src}
            alt={`Portrait of ${name}`}
            fill
            preload
            sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 19rem"
            className="object-cover object-top"
          />
        ) : (
          <div
            role="img"
            aria-label={`Portrait placeholder for ${name}`}
            className="flex h-full w-full items-center justify-center"
          >
            <div className="flex size-28 items-center justify-center rounded-full border border-line bg-white/5 text-accent sm:size-32">
              <UserRound className="size-14 sm:size-16" strokeWidth={1.25} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
