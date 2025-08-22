import { cn } from "@/lib/utils";

interface TechLogoProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

export function TechLogo({ name, icon, className }: TechLogoProps) {
  return (
    <div className={cn(
      "flex items-center space-x-2 px-3 py-2 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-colors",
      className
    )}>
      {icon && (
        <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
          {icon}
        </div>
      )}
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

interface TechLogoStripProps {
  technologies: Array<{
    name: string;
    icon?: React.ReactNode;
  }>;
  className?: string;
}

export function TechLogoStrip({ technologies, className }: TechLogoStripProps) {
  return (
    <div className={cn(
      "flex flex-wrap gap-3 justify-center",
      className
    )}>
      {technologies.map((tech, index) => (
        <TechLogo
          key={index}
          name={tech.name}
          icon={tech.icon}
        />
      ))}
    </div>
  );
}