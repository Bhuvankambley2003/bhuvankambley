import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils"; // Utility for conditional classNames

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 dark:bg-muted/30">
      <Sun size={18} className={cn("transition-all", theme === "dark" ? "text-foreground/50" : "text-yellow-500")} />
      <Switch
        className="h-6 w-11 transition-all"
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <Moon size={18} className={cn("transition-all", theme === "dark" ? "text-blue-400" : "text-foreground/50")} />
    </div>
  );
}
