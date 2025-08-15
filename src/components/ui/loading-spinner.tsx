import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

export function LoadingSpinner({
  size = "md",
  className,
  text,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-4 border-primary border-t-transparent",
          sizeClasses[size]
        )}
      />
      {text && <p className="text-muted-foreground text-center">{text}</p>}
    </div>
  );
}
