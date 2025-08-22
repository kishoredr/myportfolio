import { cn } from "@/lib/utils";
import { HoverLift, Counter } from "@/components/animations";

interface StatBadgeProps {
  value: string | number;
  label: string;
  description?: string;
  className?: string;
  animated?: boolean;
}

export function StatBadge({ value, label, description, className, animated = true }: StatBadgeProps) {
  const numericValue = typeof value === 'string' ? parseInt(value.replace(/[^\d]/g, '')) : value;
  const suffix = typeof value === 'string' ? value.replace(/[\d]/g, '') : '';
  
  return (
    <HoverLift className={cn(
      "glass-effect rounded-lg p-4 text-center",
      className
    )}>
      <div className="text-2xl font-bold text-gradient mb-1">
        {animated && !isNaN(numericValue) ? (
          <Counter from={0} to={numericValue} suffix={suffix} />
        ) : (
          value
        )}
      </div>
      <div className="text-sm font-medium text-foreground mb-1">
        {label}
      </div>
      {description && (
        <div className="text-xs text-muted-foreground">
          {description}
        </div>
      )}
    </HoverLift>
  );
}