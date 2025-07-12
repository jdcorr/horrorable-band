import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Sun, Moon, FileText, Instagram, Youtube } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Home() {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="w-10 h-10"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen space-y-6">
        {/* Logo Section */}
        <div className="text-center">
          <img
            src="/assets/images/horrorableredlogo.png"
            alt="Horrorable Band Logo"
            className="mx-auto h-48 md:h-64 lg:h-80 w-auto object-contain"
          />
        </div>

        {/* Navigation */}
        <div className="text-center space-y-6">
          <p className="text-muted-foreground">Santa Rosa, CA • Est. 2023</p>

          <Button onClick={() => navigate("/presskit")} className="gap-2">
            <FileText className="h-4 w-4" />
            View Press Kit
          </Button>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center space-x-6">
          <a
            href="https://www.instagram.com/horrorable_band/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="h-8 w-8" />
          </a>
          <a
            href="https://www.youtube.com/@HorrorableBand/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Youtube className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
