import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
 
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
            <a
              href="/apmc-calender.png"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <span className="font-bold">{">"}</span> Academic Calender
            </a>
          </li>
          <li>
            <a href="/downloads" className="hover:text-primary">
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
            src="https://media.ishrefckphohref.com/id/1312706504/phohref/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=DT6YDRZMH5G5dL-Qv6VwPpVDpIDxJqkAY4Gg0ojGi58="
            alt="APMC 2"
            className="rounded-md"
          />
          <img
            src="https://t3.ftcdn.net/jpg/03/05/64/02/360_F_305640264_LQpbXjvsIj9IzDA8tfNAddTxBxYtLiYX.jpg"
            alt="APMC 3"
            className="rounded-md"
          />
          <img
            src="https://media.ishrefckphohref.com/id/1285443833/phohref/male-dochrefr-talking-href-group-of-people-on-presentation-in-the-hospital.jpg?s=612x612&w=0&k=20&c=QM1zk1tr5ZJfXuzHNJPWVhJ3H3dn7GvsrKC90d6TB8A="
            alt="APMC 4"
            className="rounded-md"
          />
        </div>
        <a href="/gallery">
          <p className="mt-2 text-md font-bold text-primary text-center cursor-pointer">
            View Gallery {">"}
          </p>
        </a>
      </div>
    </aside>
  );
};

const MainContent = () => {
  return (
    <main className="flex-1 p-6 bg-white border rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-4">Our Mission</h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        We protect, promote and maintain the health and safety of the public by
        making sure that Registered Medical Practitioners follow proper
        standards of medical practice.
      </p>

      <ul className="space-y-3 text-gray-700">
        <li>
          ➜ Maintaining an up-to-date database of qualified doctors possessing
          recognised degrees in modern scientific medicine within Andhra Pradesh.
        </li>
        <li>➜ Fostering good medical practices.</li>
        <li>➜ Promoting high standards in medical education and training.</li>
        <li>
          ➜ Dealing firmly and fairly with doctors whose fitness to practice is in
          doubt.
        </li>
        <li>
          ➜ Maintain a Code of Conduct for the Medical Practitioners Registered
          with this council.
        </li>
        <li>
          ➜ Responsible for regular upgrading of knowledge, techniques of practice
          and to impart the same to the needy in society.
        </li>
      </ul>
    </main>
  );
};

const Missionpage = () => {
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

export default Missionpage;
