import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

interface ActRule {
  id: number;
  title: string;
  pdfUrl?: string;
  content?: string;
}

const actsRulesData: ActRule[] = [
  { id: 1, title: "NMC Act", content: "Detailed information about NMC Act..." },
  { id: 2, title: "NMC Act 2019", pdfUrl: "/NMC Act 2019.pdf" },
  { id: 3, title: "NMC/IMC Regulations 2002", pdfUrl: "/IMC Regulations.pdf" },
  { id: 4, title: "APMPR Act 1986", content: "Details about APMPR Act 1986..." },
  { id: 5, title: "APMPR Act 1968", content: "Details about APMPR Act 1968..." },
  { id: 6, title: "APMC Rules 1978", pdfUrl: "/APMC Rules 1978.pdf" },
  { id: 7, title: "APMPR Amendment Act 2013", content: "Details about the amendment 2013..." },
  { id: 8, title: "Rules G.O NO.129 Dated 08-08-2013", pdfUrl: "/APMPR Amended Act 2013 - Rules.pdf" },
  { id: 9, title: "APMPR Amendment Act 2018", pdfUrl: "/APMPR AMENDED ACT 2018.pdf" },
  { id: 10, title: "IMC Act 1956", pdfUrl: "/IMC ACT 1956.pdf" },
  { id: 11, title: "IMC Act Amendments-1", pdfUrl: "/IMC ACT Amendments-1.pdf" },
  { id: 12, title: "I.C.M.R Guidelines", content: "I.C.M.R guidelines details..." },
  { id: 13, title: "Pandemic Act 1857", content: "Details about Pandemic Act 1857..." },
  { id: 14, title: "Surrogacy Act", pdfUrl: "/surrogacy act.pdf" },
];

const ActsRules: React.FC = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number>(actsRulesData[0].id);
  const selectedItem = actsRulesData.find((item) => item.id === selectedId);

  return (
    <main>
        <Header />
    <div className="flex min-h-screen bg-white">
        
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 border-r overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Acts / Rules</h2>
        <ul className="space-y-2">
          {actsRulesData.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setSelectedId(item.id)}
                className={`w-full text-left px-3 py-2 rounded-md ${
                  selectedId === item.id
                    ? "bg-teal-600 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        {/* Simple Back Home link */}
        <button
          onClick={() => navigate("/")} // navigate to home
          className="mt-4 w-full px-3 py-2 rounded-md bg-gray-300 hover:bg-gray-400 text-center"
        >
          Back to Home
        </button>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-6">
        {selectedItem ? (
          selectedItem.pdfUrl ? (
            <div className="w-full h-screen border rounded-md shadow-sm">
              <iframe
                src={selectedItem.pdfUrl}
                title={selectedItem.title}
                className="w-full h-full"
              />
            </div>
          ) : (
            <div className="p-4 border rounded-md shadow-sm bg-gray-50 h-screen overflow-y-auto">
              <h3 className="text-2xl font-bold mb-4">{selectedItem.title}</h3>
              <p className="text-gray-700">{selectedItem.content}</p>
            </div>
          )
        ) : (
          <p className="text-gray-500">
            Select an item from the left to view details.
          </p>
        )}
      </div>
    </div>
    </main>
  );
};

export default ActsRules;
