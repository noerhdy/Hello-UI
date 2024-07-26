import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      className="group"
      variant="default"
      size="icon"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <span className="relative flex h-4 w-4">
          <span className="relative inline-flex rounded-full h-4 w-4 bg-zinc-900 transition-transform duration-300 transform scale-100 group-hover:scale-110"></span>
        </span>
      ) : (
        <span className="relative flex h-4 w-4">
          <span className="absolute right-0 top-0 inline-flex rounded-full h-2.5 w-2.5 z-10 bg-zinc-800 group-hover:bg-zinc-800 transition-transform duration-100 transform scale-100 group-hover:scale-110"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500  transition-transform duration-300 transform scale-100 group-hover:scale-110"></span>
        </span>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
