import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Book, Bell, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { link } from 'fs';


const CmeSiderbar = () => {
  const menuItems = [
    { icon: <UserPlus className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "Organisation Registration", link: "/cme/registration" },
    { icon: <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "Re-Apply for Org. Register", sub: "(Provisional/Renewal)", link: "/cme/re-apply" },
    { icon: <Book className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "User Manual" },
    { icon: <Bell className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "Notifications", badge: "New", link: "/cme/notifications" },
    { icon: <Users className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "Upcoming CME", link: "/cme/programmes" },
  ];

  return (
    <div className="w-full md:w-72 space-y-3 lg:mt-[22%] max-h-[80vh] overflow-y-auto">
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
  );
};

export default CmeSiderbar;
