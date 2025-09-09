import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

// Sidebar remains the same
const Sidebar = () => {
  return (
    <aside className="w-full md:w-64 bg-white border rounded-lg p-3">
      {/* Main Menu */}
      <div className="mb-4 border rounded-lg shadow-sm">
        <h2 className="bg-primary text-white px-3 py-2 rounded-t-lg font-semibold">
          Main Menu
        </h2>
        <ul className="p-3 space-y-2 text-sm">
          <li>
            <a href="#notifications" className="hover:text-primary">
              <span className="font-bold">{">"}</span> Notifications
            </a>
          </li>
          <li>
            <a href="#members" className="hover:text-primary">
              <span className="font-bold">{">"}</span> Members of APMC
            </a>
          </li>
          <li>
            <a href="/officers" className="hover:text-primary">
              <span className="font-bold">{">"}</span> Officers
            </a>
          </li>
          <li>
            <a href="/apmc-calender.png" className="hover:text-primary">
              <span className="font-bold">{">"}</span> Academic Calender
            </a>
          </li>
          <li>
            <a href="#downloads" className="hover:text-primary">
              <span className="font-bold">{">"}</span> Downloads
            </a>
          </li>
        </ul>
      </div>

      {/* Gallery */}
      <div className="border rounded-lg shadow-sm">
        <h2 className="bg-primary text-white px-3 py-2 rounded-t-lg font-semibold">
          Gallery
        </h2>
        <div className="p-3 grid grid-cols-2 gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAWqWqZD_Il3J51dUhJIsN0lFSv64cSwiZg&s"
            alt="APMC 1"
            className="rounded-md"
          />
          <img
            src="https://media.istockphoto.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=DT6YDRZMH5G5dL-Qv6VwPpVDpIDxJqkAY4Gg0ojGi58="
            alt="APMC 2"
            className="rounded-md"
          />
          <img
            src="https://t3.ftcdn.net/jpg/03/05/64/02/360_F_305640264_LQpbXjvsIj9IzDA8tfNAddTxBxYtLiYX.jpg"
            alt="APMC 3"
            className="rounded-md"
          />
          <img
            src="https://media.istockphoto.com/id/1285443833/photo/male-doctor-talking-to-group-of-people-on-presentation-in-the-hospital.jpg?s=612x612&w=0&k=20&c=QM1zk1tr5ZJfXuzHNJPWVhJ3H3dn7GvsrKC90d6TB8A="
            alt="APMC 4"
            className="rounded-md"
          />
        </div>
        <Link to="/gallery">
          <p className="mt-2 text-md font-bold text-primary text-center cursor-pointer">
            View Gallery {">"}
          </p>
        </Link>
      </div>
    </aside>
  );
};

// All Committee Members
const CommitteeMembers = () => {
  const executiveMembers = [
    { name: "Dr. Daggumati Sreehari Rao", role: "Chairman", img: "/chairman.jpg" },
    { name: "Dr. Ramesh Idimadakala", role: "Registrar", img: "/registrar.jpg" },
    { name: "Dr. Gogineni Sujatha", role: "Vice-Chairman", img: "https://ui-avatars.com/api/?name=Gogineni+Sujatha&background=E5E7EB&color=374151&size=128" },
    { name: "Dr. TVVP", role: "Commissioner & Member", img: "https://ui-avatars.com/api/?name=TVVP+Commissioner&background=E5E7EB&color=374151&size=128" },
    { name: "Dr. Kalavakallu Venkata Subha Naidu", role: "Professor", img: "https://ui-avatars.com/api/?name=Kalavakallu+Venkata+Subha+Naidu&background=E5E7EB&color=374151&size=128" },
    { name: "Dr. S.Kesava Rao", role: "President", img: "https://ui-avatars.com/api/?name=S+Kesava+Rao&background=E5E7EB&color=374151&size=128" },
    { name: "Dr. Chanduri Malliswari", role: "Member", img: "https://ui-avatars.com/api/?name=Chanduri+Malliswari&background=E5E7EB&color=374151&size=128" }
  ];

  const administrativeMembers = [
    { name: "Dr. xyz", role: "Chairman", img: "https://ui-avatars.com/api/?name=S+Anand&background=E5E7EB&color=374151&size=128" },
    { name: "Dr. B. xyz", role: "DME & Member", img: "https://ui-avatars.com/api/?name=B+Triveni&background=E5E7EB&color=374151&size=128" },
    { name: "Dr. Abc", role: "Member", img: "https://ui-avatars.com/api/?name=N+Krishna+Reddy&background=E5E7EB&color=374151&size=128" },
    { name: "Dr. Abcd", role: "Member", img: "https://ui-avatars.com/api/?name=D+Chandra+Reddy&background=E5E7EB&color=374151&size=128" },
    { name: "Dr. Xyz", role: "Member", img: "https://ui-avatars.com/api/?name=Syed+Khaja+Imran+Ali&background=E5E7EB&color=374151&size=128" },
    { name: "Dr. Vwx", role: "Member", img: "https://ui-avatars.com/api/?name=Vishnu+KUN&background=E5E7EB&color=374151&size=128" },
    { name: "Dr. Xyz", role: "Member", img: "https://ui-avatars.com/api/?name=Yeggana+Srinivas&background=E5E7EB&color=374151&size=128" },
    { name: "Dr. Abcd", role: "Co-opted Member", img: "https://ui-avatars.com/api/?name=Burma+Venkateshwar+Rao&background=E5E7EB&color=374151&size=128" },
    { name: "Dr. Xyz", role: "Co-opted Member", img: "https://ui-avatars.com/api/?name=Maragani+Praneeth&background=E5E7EB&color=374151&size=128" }
  ];

  const financeMembers = [...administrativeMembers]; // same data repeated
  const ethicsMembers = [...administrativeMembers];
  const cpdMembers = [...administrativeMembers];
  const buildingMembers = [...administrativeMembers];
  const legalMembers = [...administrativeMembers];
  const publicRelationMembers = [...administrativeMembers];
  const fmgMembers = [...administrativeMembers];

  const MemberCard = ({ name, role, img }: { name: string; role: string; img: string }) => (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <img src={img} alt={name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover bg-gray-200" />
      <h3 className="font-bold text-medical-dark-text mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </Card>
  );

  const renderSection = (title: string, members: typeof administrativeMembers) => (
    <section>
      <h2 className="text-2xl font-bold text-medical-dark-text mb-6 border-b-2 border-medical-teal pb-2">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <MemberCard key={index} name={member.name} role={member.role} img={member.img} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="space-y-12">
      {renderSection("EXECUTIVE COMMITTEE MEMBERS", executiveMembers)}
      {renderSection("ADMINISTRATIVE COMMITTEE MEMBERS", administrativeMembers)}
      {renderSection("FINANCE COMMITTEE MEMBERS", financeMembers)}
      {renderSection("ETHICS & MAL PRACTICES COMMITTEE MEMBERS", ethicsMembers)}
      {renderSection("CONTINUING PROFESSIONAL DEVELOPMENT COMMITTEE MEMBERS", cpdMembers)}
      {renderSection("BUILDING COMMITTEE MEMBERS", buildingMembers)}
      {renderSection("LEGAL & ANTI QUACKERY COMMITTEE MEMBERS", legalMembers)}
      {renderSection("PUBLIC RELATION COMMITTEE MEMBERS", publicRelationMembers)}
      {renderSection("FMG COMMITTEE MEMBERS", fmgMembers)}
    </div>
  );
};

// Page Layout
const Officer = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex justify-center">
        <div className="flex flex-col-reverse md:flex-row w-full max-w-7xl gap-6 p-6">
          <Sidebar />
          <main className="flex-1 p-6 bg-white border rounded-lg shadow-sm">
            <CommitteeMembers />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Officer;
