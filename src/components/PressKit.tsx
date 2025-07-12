import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Sun, Moon, Home } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function PressKit() {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Navigation Buttons */}
      <div className="fixed top-4 right-4 z-10 flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate("/")}
          className="w-10 h-10"
        >
          <Home className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="w-10 h-10"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Logo Section */}
        <div className="text-center">
          <img
            src="/assets/images/horrorableredlogo.png"
            alt="Horrorable Band Logo"
            className="mx-auto h-32 w-auto object-contain"
          />
        </div>

        {/* Band Information Section */}
        <Card>
          <CardHeader>
            <CardTitle>About Horrorable</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Thank you for working with our band! We are Horrorable from Santa
              Rosa, CA. We are a five piece cover band formed in 2023, playing
              punk, rock, and metal hits from the 70s, 80s, and 90s, through
              today. We are wildly energetic and have nearly four hours of
              material.
            </p>
          </CardContent>
        </Card>

        {/* Social Media Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>Social Media Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2">Band Name Usage</h4>
                <p className="text-muted-foreground">
                  Our name is <strong>"Horrorable"</strong> (simply pronounced
                  "Horrible").
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Please use:</strong> "Horrorable"
                </p>
                <p className="text-sm text-destructive mt-2">
                  <strong>Please avoid:</strong> "The Horrorable",
                  "Horrorables", "Horrorable band"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Online Presence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Website</p>
                <p>horrorableband.com</p>
              </div>
              <Separator />
              <div>
                <a
                  href="https://www.instagram.com/horrorable_band/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <p>@horrorable_band</p>
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/@HorrorableBand/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-sm text-muted-foreground">Youtube</p>
                  <p>@HorrorableBand</p>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Booking &amp; Inquiries</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-sm text-muted-foreground">Contact</p>
                <p>Ben Perry (Bass)</p>
                <p className="text-muted-foreground">perry.ben@att.net</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Horrorable • Santa Rosa, CA • Formed 2023
          </p>
        </div>
      </div>
    </div>
  );
}
