import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const buttonVariants = {
  default:
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:opacity-90",
  outline:
    "inline-flex items-center justify-center whitespace-nowrap rounded-md border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
  ghost:
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",
};

export const Button = forwardRef(function Button(
  { className, variant = "default", type = "button", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn("h-9 px-4 py-2", buttonVariants[variant], className)}
      {...props}
    />
  );
});
