import * as React from "react";
import { cn } from "../../lib/utils";




export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl bg-neutral-900 border border-cyan-800/40 shadow-lg p-6",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";




export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-0", className)}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";
