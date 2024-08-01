"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/lib/animations";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
};

export default function TransitionLink({ href, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => pathname !== href && animatePageOut(href, router);

  return (
    <button
      className={cn("text-xl text-neutral-900 hover:text-neutral-700")}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
