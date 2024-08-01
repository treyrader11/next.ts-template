import { cn } from "@/lib/utils";
import TransitionLink from "./TransitionLink";

export default function Navigation() {
  return (
    <nav
      className={cn(
        "w-full",
        "p-5",
        "flex",
        "flex-row",
        // "place-items-center",
        "justify-between"
      )}
    >
      <h1 className="text-3xl tracking-tight font-bold text-neutral-900">
        Next Template
      </h1>
      <div className="flex gap-5">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/work" label="Work" />
        <TransitionLink href="/about" label="About" />
      </div>
    </nav>
  );
}
