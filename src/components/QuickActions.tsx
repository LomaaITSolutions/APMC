import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  FileText,
  Bell,
  Calendar,
  ExternalLink,
  Download,
  Phone,
  Clock,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Please enter a registration number",
        description: "Enter a valid registration number to search",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Searching...",
      description: `Looking up registration: ${searchQuery}`,
    });

    // Simulate search functionality
    setTimeout(() => {
      toast({
        title: "Search Complete",
        description: "Registration details found and verified",
      });
    }, 2000);
  };

  const announcements = [
    {
      title: "District-level Registration Services Launched",
      date: "2024-01-15",
      type: "New Service",
      urgent: false,
    },
    {
      title: "CME Credit Requirements Updated",
      date: "2024-01-10",
      type: "Important",
      urgent: true,
    },
    {
      title: "Foreign Medical Graduate Guidelines Revised",
      date: "2024-01-05",
      type: "Update",
      urgent: false,
    },
  ];

  const quickLinks = [
    { title: "Application Forms", icon: FileText, url: "/downloads" },
    { title: "Fee Structure", icon: FileText, url: "/downloads" },
    { title: "Guidelines & Rules", icon: Download, url: "/downloads" },
    { title: "Contact Directory", icon: Phone, url: "/contact" },
    { title: "Office Hours", icon: Clock, url: "/contact" },
    { title: "Complaint Portal", icon: ExternalLink, url: "/contact" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Search */}
          <div className="lg:col-span-1">
            <Card className="shadow-card-custom">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  Quick Verification
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Registration Number
                    </label>
                    <Input
                      placeholder="Enter registration number (e.g., APMC/12345)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                    />
                  </div>
                  <Button
                    onClick={handleSearch}
                    className="w-full shadow-button-custom hover:scale-105 transition-all"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Verify License
                  </Button>
                  <div className="text-xs text-muted-foreground text-center">
                    Enter your registration number to verify status
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="shadow-card-custom mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="justify-start h-auto p-3 hover:bg-primary hover:text-primary-foreground transition-all"
                      onClick={() => navigate(link.url)}
                    >
                      <link.icon className="h-4 w-4 mr-2" />
                      <span className="text-xs">{link.title}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Announcements */}
          <div className="lg:col-span-2">
            <Card className="shadow-card-custom">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    Latest Announcements
                  </h3>
                  <Button variant="outline" size="sm">
                    View All
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg border hover:bg-accent transition-colors cursor-pointer"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="font-medium mb-1">
                              {announcement.title}
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{announcement.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {announcement.urgent && (
                              <Badge variant="destructive" className="text-xs">
                                Urgent
                              </Badge>
                            )}
                            <Badge variant="secondary" className="text-xs">
                              {announcement.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Bell className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Stay Updated</h4>
                      <p className="text-sm text-muted-foreground">
                        Subscribe to get notifications about important updates,
                        new services, and regulatory changes.
                      </p>
                      <Button size="sm" className="mt-3">
                        Subscribe to Updates
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
