import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Download,
  Scale,
  BookOpen,
  Gavel,
  Calendar,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface ActRule {
  id: string;
  title: string;
  shortTitle: string;
  category: "acts" | "regulations" | "guidelines" | "rules";
  year: string;
  description: string;
  sections: {
    title: string;
    content: string;
    points?: string[];
  }[];
  lastUpdated: string;
  status: "Active" | "Amended" | "Superseded";
  pdfUrl: string;
}

const ActsRules = () => {
  const [selectedAct, setSelectedAct] = useState<string>("nmmc-act");
  const [searchQuery, setSearchQuery] = useState("");

  const actsRulesData: ActRule[] = [
    {
      id: "nmmc-act",
      title: "NMMC Act",
      shortTitle: "NMMC Act",
      category: "acts",
      year: "—",
      description: "The NMMC Act provides the legal framework for the functioning and regulation of medical councils under the NMMC jurisdiction.",
      sections: [
        {
          title: "Objectives",
          content: "To regulate medical education and practice within the NMMC region ensuring quality and ethical standards.",
          points: [
            "Establish guidelines for institutions",
            "Monitor professional conduct",
            "Maintain registers of practitioners"
          ]
        },
        {
          title: "Implementation",
          content: "The Act is implemented through respective state medical councils under NMMC."
        }
      ],
      lastUpdated: "2024-01-01",
      status: "Active",
      pdfUrl: "https://apmc.ap.gov.in/pdf/ACTS%20AND%20RULES/NMC%20Act%202019.pdf",
    },
    {
      id: "nmmc-imc-2002",
      title: "NMMC/IMC Regulations 2002",
      shortTitle: "IMC Regulations 2002",
      category: "regulations",
      year: "2002",
      description: "Regulations framed under IMC Act for NMMC jurisdiction covering education standards and ethics.",
      sections: [
        {
          title: "Education Standards",
          content: "Detailed requirements for colleges under NMMC jurisdiction."
        },
        {
          title: "Professional Conduct",
          content: "Regulations governing ethical and professional behavior."
        }
      ],
      lastUpdated: "2024-01-01",
      status: "Active",
      pdfUrl: "https://apmc.ap.gov.in/pdf/ACTS%20AND%20RULES/IMC%20Regulations-2002.pdf",
    },
    {
      id: "ampr-1986",
      title: "AMPR Act 1986",
      shortTitle: "AMPR Act 1986",
      category: "acts",
      year: "1986",
      description: "Legislation for the regulation of agricultural produce markets in Andhra Pradesh.",
      sections: [
        {
          title: "Market Regulation",
          content: "Framework for regulation of agricultural markets."
        },
        {
          title: "Council Powers",
          content: "Defines powers of market committees under the Act."
        }
      ],
      lastUpdated: "2024-01-01",
      status: "Active",
      pdfUrl: " https://apmc.ap.gov.in/pdf/ACTS%20AND%20RULES/IMC%20Regulations-2002.pdf",
    },
    {
      id: "ampr-1968",
      title: "AMPR Act 1968",
      shortTitle: "AMPR Act 1968",
      category: "acts",
      year: "1968",
      description: "Earlier version of the Agricultural Produce Market Regulation Act.",
      sections: [
        {
          title: "Historical Context",
          content: "Provided foundation for later agricultural market regulations."
        }
      ],
      lastUpdated: "2024-01-01",
      status: "Superseded",
      pdfUrl: "https://apmc.ap.gov.in/pdf/ACTS%20AND%20RULES/IMC%20Regulations-2002.pdf",
    },
    {
      id: "apmr-rules-1978",
      title: "APMR Rules 1978",
      shortTitle: "APMR Rules 1978",
      category: "rules",
      year: "1978",
      description: "Detailed rules for the functioning of agricultural produce market committees.",
      sections: [
        {
          title: "Council Procedures",
          content: "Meetings, elections, and administrative setup."
        },
        {
          title: "Disciplinary Measures",
          content: "Procedures for addressing misconduct."
        }
      ],
      lastUpdated: "2024-01-01",
      status: "Active",
      pdfUrl: "https://apmc.ap.gov.in/pdf/ACTS%20AND%20RULES/APMC%20Rules%201978.pdf",
    },
    {
      id: "apmpr-amend-2013",
      title: "APMPR Amendment Act 2013",
      shortTitle: "APMPR Amendment 2013",
      category: "acts",
      year: "2013",
      description: "Amendment strengthening provisions of the APMPR Act.",
      sections: [
        {
          title: "Amendment Provisions",
          content: "Introduced updated policies for market regulation."
        }
      ],
      lastUpdated: "2024-01-01",
      status: "Amended",
      pdfUrl: "https://apmc.ap.gov.in/pdf/ACTS%20AND%20RULES/APMPR%20AMENDMENT%20ACT%202013.pdf",
    },
    {
      id: "rules-go-129-2013",
      title: "Rules G.O NO.129 Dated 08-08-2013",
      shortTitle: "GO 129 Rules",
      category: "rules",
      year: "2013",
      description: "Rules issued through G.O No.129, focusing on administrative reforms.",
      sections: [
        {
          title: "Key Rules",
          content: "Defines rules for market operations and administrative powers."
        }
      ],
      lastUpdated: "2024-01-01",
      status: "Active",
      pdfUrl: "https://apmc.ap.gov.in/pdf/ACTS%20AND%20RULES/APMPR%20Amended%20Act%202013%20-%20Rules.pdf",
    },
    {
      id: "apmpr-amend-2018",
      title: "APMPR Amendment Act 2018",
      shortTitle: "APMPR Amendment 2018",
      category: "acts",
      year: "2018",
      description: "Further amendments to the APMPR Act to modernize market practices.",
      sections: [
        {
          title: "Modernization",
          content: "Amendments aimed at digitalization and transparency."
        }
      ],
      lastUpdated: "2024-01-01",
      status: "Amended",
      pdfUrl: "https://apmc.ap.gov.in/pdf/ACTS%20AND%20RULES/APMPR%20AMENDED%20ACT%202018.pdf",
    },
    {
      id: "imc-1956",
      title: "IMC Act 1956",
      shortTitle: "IMC Act 1956",
      category: "acts",
      year: "1956",
      description: "Indian Medical Council Act regulating medical education and practice.",
      sections: [
        {
          title: "Framework",
          content: "Established Indian Medical Council structure."
        },
        {
          title: "Transition",
          content: "Transition provisions before NMC Act 2019."
        }
      ],
      lastUpdated: "2024-01-01",
      status: "Superseded",
      pdfUrl: "https://apmc.ap.gov.in/pdf/ACTS%20AND%20RULES/IMC%20ACT%201956.pdf",
    },
    {
      id: "imc-amend-1",
      title: "IMC Act Amendments-1",
      shortTitle: "IMC Amendments 1",
      category: "acts",
      year: "—",
      description: "First set of amendments to the IMC Act.",
      sections: [
        {
          title: "Amendment Details",
          content: "Introduced significant reforms in regulation."
        }
      ],
      lastUpdated: "2024-01-01",
      status: "Amended",
      pdfUrl: "https://apmc.ap.gov.in/pdf/ACTS%20AND%20RULES/IMC%20ACT%20Amendments-1.pdf",
    },
    {
      id: "icmr-guidelines",
      title: "I.C.M.R Guidelines",
      shortTitle: "ICMR Guidelines",
      category: "guidelines",
      year: "2017",
      description: "Guidelines issued by Indian Council of Medical Research for ethical medical research.",
      sections: [
        {
          title: "Research Ethics",
          content: "Framework for biomedical and health research."
        },
        {
          title: "Institutional Review Boards",
          content: "Standards for ethics committees and approvals."
        }
      ],
      lastUpdated: "2024-01-01",
      status: "Active",
      pdfUrl: "https://apmc.ap.gov.in/pdf/ACTS%20AND%20RULES/surrogacy%20act.pdf",
    },
    {
      id: "pandemic-act-1857",
      title: "Pandemic Act 1857",
      shortTitle: "Pandemic Act 1857",
      category: "acts",
      year: "1857",
      description: "Historical legislation related to managing pandemics.",
      sections: [
        {
          title: "Emergency Measures",
          content: "Provided framework for epidemic control."
        }
      ],
      lastUpdated: "2024-01-01",
      status: "Superseded",
      pdfUrl: "https://apmc.ap.gov.in/pdf/ACTS%20AND%20RULES/surrogacy%20act.pdf",
    },
    {
      id: "surrogacy-act",
      title: "Surrogacy Act",
      shortTitle: "Surrogacy Act",
      category: "acts",
      year: "—",
      description: "Central Act governing surrogacy practices in India.",
      sections: [
        {
          title: "Eligibility",
          content: "Defines eligibility criteria for intended parents and surrogates."
        },
        {
          title: "Regulation",
          content: "Regulations for clinics and legal provisions."
        }
      ],
      lastUpdated: "2024-01-01",
      status: "Active",
      pdfUrl: "https://apmc.ap.gov.in/pdf/ACTS%20AND%20RULES/surrogacy%20act.pdf",
    },
  ];

  const filteredActs = actsRulesData.filter(
    (act) =>
      act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedActData = actsRulesData.find((act) => act.id === selectedAct);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "acts":
        return Scale;
      case "regulations":
        return Gavel;
      case "guidelines":
        return BookOpen;
      case "rules":
        return FileText;
      default:
        return FileText;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "acts":
        return "bg-medical-teal/10 text-medical-teal";
      case "regulations":
        return "bg-medical-blue/10 text-medical-blue";
      case "guidelines":
        return "bg-medical-green/10 text-medical-green";
      case "rules":
        return "bg-medical-orange/10 text-medical-orange";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-medical-green/10 text-medical-green border-medical-green/20";
      case "Amended":
        return "bg-medical-orange/10 text-medical-orange border-medical-orange/20";
      case "Superseded":
        return "bg-muted/10 text-muted-foreground border-muted/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  function AppSidebar() {
    const { state } = useSidebar();
    const collapsed = state === "collapsed";

    return (
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-medical-teal font-semibold text-base "></SidebarGroupLabel>

            {!collapsed && (
              <div className="px-4 lg:mt-44">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search acts & rules..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 h-9 text-sm"
                  />
                </div>
              </div>
            )}

            <SidebarGroupContent>
              <SidebarMenu>
                {filteredActs.map((act) => {
                  const IconComponent = getCategoryIcon(act.category);
                  const isSelected = selectedAct === act.id;

                  return (
                    <SidebarMenuItem key={act.id}>
                      <SidebarMenuButton
                        onClick={() => setSelectedAct(act.id)}
                        className={`flex items-start gap-3 px-3 py-2 rounded-md text-sm ${isSelected
                            ? "bg-medical-teal/10 text-teal-700 border-l-4 border-teal-700 font-medium"
                            : "hover:bg-muted/50"
                          }`}
                      >
                        <IconComponent className="h-4 w-4 mt-0.5 flex-shrink-0 text-medical-teal" />
                        {!collapsed && (
                          <div className="flex-1 text-left">
                            <div className="font-medium text-sm">
                              {act.shortTitle}
                            </div>
                          </div>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Title Section */}
      <section className="bg-teal-700 text-white py-16   ">
        <div className="container mx-auto px-4 justify-center">
          <div className="max-w-4xl mx-auto text-center lg:ml-[22em]">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Acts & Rules</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Comprehensive collection of medical acts, regulations, and
              guidelines governing medical practice in Andhra Pradesh
            </p>
          </div>
        </div>
      </section>

      <SidebarProvider defaultOpen>
        <div className="container mx-auto px-4 py-8 flex-1">
          {/* Mobile trigger */}
          <div className="lg:hidden mb-4">
            <SidebarTrigger className="ml-8 border rounded-md" />
          </div>

          <div className="flex   w-full">
            <AppSidebar />

            {/* Main Content */}
            <main className="flex-1 ">
              {selectedActData && (
                <>
                  {/* Quick Actions */}
                  <Card className="mb-6 border border-border/50 shadow-card ">
                    <CardContent className="p-2 pl-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${getCategoryColor(
                              selectedActData.category
                            )}`}
                          >
                            {(() => {
                              const IconComponent = getCategoryIcon(
                                selectedActData.category
                              );
                              return <IconComponent className="h-6 w-6" />;
                            })()}
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-primary">
                              {selectedActData.title}
                            </h2>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge
                                variant="outline"
                                className={getCategoryColor(
                                  selectedActData.category
                                )}
                              >
                                {selectedActData.category.toUpperCase()}
                              </Badge>
                              <Badge
                                variant="outline"
                                className={getStatusColor(
                                  selectedActData.status
                                )}
                              >
                                {selectedActData.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {selectedActData.year}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {/* ✅ Download button wired to pdfUrl */}
                          <a href={selectedActData.pdfUrl} download>
                            <Button className="bg-medical-teal text-white hover:bg-medical-teal/90">
                              <Download className="w-4 h-4 mr-2" />
                              Download PDF
                            </Button>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Act Description */}
                  <Card className="mb-6 border border-border/50 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">
                        Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 leading-relaxed text-lg">
                        {selectedActData.description}
                      </p>
                      <div className="mt-4 p-4 bg-medical-teal/5 rounded-lg border-l-4 border-medical-teal">
                        <div className="text-sm text-foreground/80">
                          <strong>Last Updated:</strong>{" "}
                          {selectedActData.lastUpdated}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Act Sections */}
                  <div className="space-y-6">
                    {selectedActData.sections.map((section, index) => (
                      <Card
                        key={index}
                        className="border border-border/50 shadow-card hover:shadow-medical transition-shadow"
                      >
                        <CardHeader className="pb-4">
                          <CardTitle className="flex items-center gap-3 text-xl text-primary">
                            <div className="w-8 h-8 bg-medical-teal/10 rounded-lg flex items-center justify-center text-medical-teal font-bold text-sm">
                              {index + 1}
                            </div>
                            {section.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-foreground/80 leading-relaxed">
                            {section.content}
                          </p>
                          {section.points && (
                            <ul className="space-y-3 ml-4">
                              {section.points.map((point, pointIndex) => (
                                <li
                                  key={pointIndex}
                                  className="flex items-start gap-3 text-foreground/80"
                                >
                                  <div className="w-2 h-2 bg-medical-green rounded-full mt-2 flex-shrink-0" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Footer Notice */}
                  <Card className="mt-8 border border-medical-orange/20 bg-medical-orange/5">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-medical-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FileText className="w-3 h-3 text-medical-orange" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-medical-orange mb-2">
                            Important Notice
                          </h4>
                          <p className="text-sm text-foreground/80">
                            This is a reference copy. For official and legally
                            binding versions, please refer to the Government
                            Gazette notifications and official publications.
                            Always verify with the latest amendments and
                            notifications.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
              <Footer />

            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default ActsRules;
