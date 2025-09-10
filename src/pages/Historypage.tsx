import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Link } from "react-router-dom";

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
            <a href="/notifications" className="hover:text-primary">
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
        <Link to="/gallery">
    <p className="mt-2 text-md font-bold text-primary text-center cursor-pointer">
          View Gallery {">"}
        </p>    
        </Link>
          </div>
    </aside>
  );
};

const MainContent = () => {
  return (
    <main className="flex-1 p-6 bg-white border rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-4">Our History</h1>

      <ul className="space-y-3 text-gray-700">
        <li>
         ➜ Andhra Pradesh Medical Council is a Body corporate established by an
          Act of the State Legislature, vide Act No.23 of 1968, by integrating
          the hitherto Two State Medical Councils, i.e. Hyderabad State Medical
          Council and Andhra Medical Council.
        </li>
        <li>
         ➜ The Council was first constituted by a notification issued in
          G.O.Ms.No.662 on 19th December, 1991 and has been constituted from
          time to time as per the Act.
        </li>
        <li>
         ➜ Interim Medical Councils were constituted on 2.1.2012, vide
          G.O.Rt.No.08 HM & FW (E1) Department and on 28.12.2012, vide
          G.O.Rt. No.1839, HM & FW Department.
        </li>
        <li>
         ➜ The Council has an Executive Committee constituted under Section-11
          of the Act with Chairman, Vice Chairperson as ex-officio and three
          other members.
        </li>
        <li>
         ➜ Regularly constituted Committees exist under Section-12 of the Act,
          such as Ethics Committee, Administrative Committee, Finance
          Committee, CME Committee, and others.
        </li>
      </ul>

      <p className="mt-6 text-gray-700 leading-relaxed">
        The Andhra Pradesh Medical Council has been working to strengthen
        medical governance and ensure public safety by maintaining standards,
        monitoring practitioners, and providing a structured framework for
        medical education and practice throughout the state.
      </p>
    </main>
  );
};

const History = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen flex justify-center bg-gray-50 p-6">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl gap-6">
        <Sidebar />
        <MainContent />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default History;
