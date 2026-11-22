import Image from "next/image";
import { UserRound } from "lucide-react";

type Props = { src: string | null; name: string };

/** Portrait with a gradient ring. Falls back to a gradient placeholder when no image is set. */
export function PortraitFrame({ src, name }: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-md">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-blue-500/40 via-indigo-500/20 to-purple-500/40 blur-2xl"
      />
      <div className="relative rounded-[2rem] bg-gradient-to-br from-blue-500/70 via-indigo-400/20 to-purple-500/70 p-px">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-1px)] bg-gradient-to-br from-[#14204a] via-[#0f1738] to-[#241648]">
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
              <div className="flex size-28 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-200/70 backdrop-blur sm:size-32">
                <UserRound className="size-14 sm:size-16" strokeWidth={1.25} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
