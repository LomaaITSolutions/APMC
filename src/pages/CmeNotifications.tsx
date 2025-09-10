import React from "react";
import { FileText, Users, Book, Bell, UserPlus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CmeHeader from "@/components/ui/CmeHeader";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CMENotifications = () => {
  const notifications = [
    {
      title: "Instructions for CME/CPD Programmes",
      isNew: true,
      link: "#",
      color: "text-red-600",
    },
    {
      title:
        "For Online CMEs / Webinars / Conferences - 2 CME Credit Hours / Points will be awarded per day for 8 hrs duration henceforth in view of new NMC guidelines.",
      isNew: false,
      link: "#",
      color: "text-blue-700",
    },
  ];

    const menuItems = [
    { icon: <UserPlus className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "Organisation Registration", link: "/cme/registration" },
    { icon: <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "Re-Apply for Org. Register", sub: "(Provisional/Renewal)", link: "/cme/re-apply" },
    { icon: <Book className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "User Manual" },
    { icon: <Bell className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "Notifications", badge: "New", link: "/cme/notifications" },
    { icon: <Users className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "Upcoming CME", link: "/cme/programmes" },
  ];


  return (
    <>
     <Header />
       <CmeHeader />
    <div className="container mx-auto px-4 py-8">


      
      {/* Page Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8 flex items-center justify-center gap-2">
        <Bell className="w-6 h-6 text-primary" />
        CME Notifications
      </h2>


  <div className="container mx-auto px-4 py-8 md:py-2">
        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Left Sidebar - Hidden on Mobile */}
         <div className="hidden md:block w-72 space-y-3 max-h-[80vh] overflow-y">
            {menuItems.map((item, i) => (
              <Card key={i} className="bg-primary border-0 shadow-sm">
                <CardContent className="p-2 md:p-4">
                  {item.link ? (
                    <Link to={item.link}>
                      <Button className="w-full justify-start py-2 md:py-3 text-white text-sm md:text-base font-normal md:font-semibold">
                        {item.icon}
                        <div className="flex flex-col items-start">
                          <span className="leading-tight">{item.text}</span>
                          {item.sub && <p className="text-[10px] md:text-xs text-white mt-1">{item.sub}</p>}
                        </div>
                        {item.badge && (
                          <span className="bg-orange-500 text-[9px] md:text-xs px-2 py-[2px] rounded-full ml-2 animate-pulse">
                            {item.badge}
                          </span>
                        )}
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full justify-start py-2 md:py-3 text-white text-sm md:text-base font-normal md:font-semibold">
                      {item.icon}
                     <a href="https://online.apmc.ap.gov.in/cmeregistration/Images/apmc_cme_usermanual.pdf"> <span className="leading-tight">{item.text}</span></a> 
                      {item.badge && (
                        <span className="bg-orange-500 text-[9px] md:text-xs px-2 py-[2px] rounded-full ml-2 animate-pulse">
                          {item.badge}
                        </span>
                      )}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1">
         {/* Notifications Card */}
      <Card className="bg-white shadow-md rounded-2xl p-6 md:p-8">
        <ul className="space-y-4">
          {notifications.map((note, index) => (
            <li
              key={index}
              className="border-b last:border-b-0 pb-4 last:pb-0 hover:bg-gray-50 rounded-md p-2 transition-all duration-200"
            >
              <a
                href={note.link}
                className={`block ${note.color} font-medium text-sm md:text-base`}
              >
                {note.title}
                {note.isNew && (
                  <span className="ml-2 text-xs text-white bg-red-500 rounded-full px-2 py-0.5 animate-pulse">
                    NEW
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </Card>
          </div>
        </div>
       
      </div>
   
    </div>
      <Footer />
    </>
  );
};

export default CMENotifications;
