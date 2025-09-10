import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sidebar for navigation
const Sidebar = () => {
  return (
    <aside className="w-full md:w-64 bg-white border rounded-lg p-3">
      <div className="mb-4 border rounded-lg shadow-sm">
        <h2 className="bg-primary text-white px-3 py-2 rounded-t-lg font-semibold">
          Main Menu
        </h2>
        <ul className="p-3 space-y-2 text-sm">
          <li>
            <a href="/notifications" className="hover:text-primary">
              <span className="font-bold">{">"}</span> Notifications
            </a>
          </li>
          <li>
            <a href="/members" className="hover:text-primary">
              <span className="font-bold">{">"}</span> Members of APMC
            </a>
          </li>
          <li>
            <a href="/officers" className="hover:text-primary">
              <span className="font-bold">{">"}</span> Officers
            </a>
          </li>
          <li>
            <a href="/services/downloads" className="hover:text-primary">
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
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAWqWqZD_Il3J51dUhJIsN0lFSv64cSwiZg&s" alt="APMC 1" className="rounded-md" />
              <img src="https://media.istockphoto.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=DT6YDRZMH5G5dL-Qv6VwPpVDpIDxJqkAY4Gg0ojGi58=" alt="APMC 2" className="rounded-md" />
              <img src="https://t3.ftcdn.net/jpg/03/05/64/02/360_F_305640264_LQpbXjvsIj9IzDA8tfNAddTxBxYtLiYX.jpg" alt="APMC 3" className="rounded-md" />
              <img src="https://media.istockphoto.com/id/1285443833/photo/male-doctor-talking-to-group-of-people-on-presentation-in-the-hospital.jpg?s=612x612&w=0&k=20&c=QM1zk1tr5ZJfXuzHNJPWVhJ3H3dn7GvsrKC90d6TB8A=" alt="APMC 4" className="rounded-md" />
            </div>
            <p className="mt-2 text-md font-bold text-primary text-center cursor-pointer">
              View Gallery {">"}
            </p>    
           
        </div>
    


    </aside>
  );
};

// Section Component with images
interface Member {
  name: string;
  img: string;
}

const Section = ({ title, members }: { title: string; members: Member[] }) => (
  <div className="mb-10">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-lg p-4 text-sm text-gray-800 w-56 h-20 flex items-center gap-3"
        >
          {/* Left Side Image */}
          <img
            src={member.img}
            alt={member.name}
            className="w-10 h-10 rounded-full object-cover"
          />

          {/* Right Side Text */}
          <span>{member.name}</span>
        </div>
      ))}
    </div>
  </div>
);

// Renewal Page
const Renewal = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex justify-center bg-gray-50">
        <div className="flex flex-col-reverse md:flex-row w-full max-w-7xl gap-6 p-6">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 p-6 bg-white border rounded-lg shadow-sm">
            <Section
              title="Elected Members of APMC"
              members={[
                {
                  name: "Dr. Daggumati Sreehari Rao (Chairman - APMC)",
                  img: "/chairman.jpg",
                },
                {
                  name: "Dr. Gogineni Sujatha (Vice Chairman)",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s",
                },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
              ]}
            />

            <Section
              title="Govt. Nominated Members of APMC"
              members={[
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
              ]}
            />

            <Section
              title="University Nominees"
              members={[
                {
                  name: "Dr. M Seshu Madhav",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s",
                },
                {
                  name: "Dr. B Satish Kumar",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s",
                },
              ]}
            />

            <Section
              title="Ex-Officio Members"
              members={[
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
                { name: "Dr. xyz", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4-oYDBO8dLXBoo9FVIMwuey9mk1EAE8HWA&s" },
              ]}
            />

            <Section
              title="Registrar"
              members={[
                {
                  name: "Dr. Ramesh Idimadakala",
                  img: "/registrar.jpg",
                },
              ]}
            />

            {/* Our Role */}
            <div className="mt-10 bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-bold mb-3">Our Role</h2>
              <p className="text-gray-700 text-sm mb-3 leading-relaxed">
               The Andhra Pradesh Medical Council (APMC) is responsible for registering and renewing doctors in the state, ensuring ethical medical practice, maintaining standards in medical education, addressing complaints and disciplinary matters, and safeguarding patient safety and rights.
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li>Put patient safety first</li>
                <li>Support good medical practice</li>
                <li>Promote fairness and equality and value diversity</li>
                <li>
                  Respect the principles of good regulation: proportionality,
                  accountability, consistency, transparency and targeting.
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Renewal;
