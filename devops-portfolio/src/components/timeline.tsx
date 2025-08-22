import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  company?: string;
  date: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-10">
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 h-8 w-8 rounded-full border-4 border-background bg-primary flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-primary-foreground" />
            </div>
            
            {/* Content */}
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.company && (
                  <p className="text-sm text-muted-foreground font-medium">
                    {item.company}
                  </p>
                )}
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </div>
              
              <p className="text-muted-foreground">{item.description}</p>
              
              {item.achievements && item.achievements.length > 0 && (
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
              
              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}