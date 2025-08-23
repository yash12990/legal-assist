import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <h1
      className={cn(
        "text-xl font-semibold bg-blue-700 rounded-xl px-2 py-1 text-white",
        className
      )}
    >
      LA
    </h1>
  );
}
