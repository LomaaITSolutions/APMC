import React from "react";
import { Download } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface DocumentItem {
  title: string;
  subtitle?: string;
  href: string;
  highlight?: boolean;
}

const documents: DocumentItem[] = [
  { title: "APPLICATION FORM", href: "https://apmc.ap.gov.in/pdf/Application_Proformas/APPLICATION%20FORM.pdf" },
  { title: "CHECKLIST", href: "https://apmc.ap.gov.in/pdf/Application_Proformas/REQUIREMENTS.pdf", highlight: true },
  {
    title: "ENCLOSURES FOR SUBMISSION WITH THE APPLICATION FORM FOR INDIAN MEDICAL GRADUATES & FOREIGN MEDICAL GRADUATES",
    href: "https://apmc.ap.gov.in/pdf/Application_Proformas/REQUIREMENTS.pdf",
  },
  { title: "FEE STRUCTURE", href: "https://apmc.ap.gov.in/pdf/Application_Proformas/FEE%20STRUCTURE.pdf", highlight: true },
  {
    title: "PROFORMA - A",
    subtitle: "DELAY AFFIDAVIT PROFORMA FOR M.B.B.S STUDENTS (PROVISIONAL & FINAL)",
    href: "https://apmc.ap.gov.in/pdf/Application_Proformas/PROFORMA%20-%20A.pdf",
    highlight: true,
  },
  {
    title: "PROFORMA - B",
    subtitle: "AFFIDAVIT PROFORMA FOR DUPLICATE REGISTRATION CERTIFICATES",
    href: "https://apmc.ap.gov.in/pdf/Application_Proformas/PROFORMA%20-%20B.pdf",
    highlight: true,
  },
  {
    title: "PROFORMA - C",
    subtitle: "AFFIDAVIT PROFORMA FOR ADDITIONAL QUALIFICATION REGISTRATION",
    href: "https://apmc.ap.gov.in/pdf/Application_Proformas/PROFORMA%20-%20C.pdf",
    highlight: true,
  },
  {
    title: "PROFORMA - D",
    subtitle: "AFFIDAVIT PROFORMA FOR RE-REGISTRATION",
    href: "https://apmc.ap.gov.in/pdf/Application_Proformas/PROFORMA%20-%20D.pdf",
    highlight: true,
  },
  {
    title: "PROFORMA - E",
    subtitle:
      "CHECKLIST OF ENCLOSURES FOR PROVISIONAL / FINAL REGISTRATION OF FOREIGN MEDICAL GRADUATES",
    href: "https://apmc.ap.gov.in/pdf/Application_Proformas/PROFORMA%20-%20E%20(FMG).pdf",
    highlight: true,
  },
  {
    title: "PROFORMA - F",
    subtitle: "AFFIDAVIT PROFORMA FOR FOREIGN MEDICAL GRADUATES",
    href: "https://apmc.ap.gov.in/pdf/Application_Proformas/PROFORMA%20-%20F.pdf",
    highlight: true,
  },
  {
    title: "PROFORMA - G",
    subtitle: "DETAILS OF VISA ENTRIES IN THE PASSPORT FOR FOREIGN MEDICAL GRADUATES",
    href: "https://apmc.ap.gov.in/pdf/Application_Proformas/FMGs%20-%20VISA%20ENTRIES%20FORM.pdf",
    highlight: true,
  },
  {
    title: "PROFORMA - H",
    subtitle: "FOREIGN MEDICAL GRADUATES PROFORMA TO BE SUBMITTED WITH THE APPLICATION",
    href: "https://apmc.ap.gov.in/pdf/Application_Proformas/PROFORMA%20-%20H.pdf",
    highlight: true,
  },
  {
    title: "PROFORMA - I",
    subtitle:
      "AFFIDAVIT PROFORMA FOR REVALIDATION OF PROVISIONAL MEDICAL REGISTRATION",
    href: "https://apmc.ap.gov.in/pdf/Application_Proformas/PROFORMA%20-%20I.pdf",
    highlight: true,
  },
];

export default function DownloadInfo() {
  return (
    <main>
    <Header />
    <div className="max-w-5xl mx-auto mt-10 border text-sm border-gray-300">
      {documents.map((doc, idx) => (
        <div
          key={idx}
          className={`flex justify-between items-center px-4 py-3 border-b text-xs border-gray-200 ${doc.highlight ? "text-red-600 font-semibold" : "text-gray-800"
            } ${idx % 2 === 0 ? "bg-white" : "bg-blue-50"} hover:bg-blue-100`}
        >
          <a
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col hover:underline"
          >
            <span>{doc.title}</span>
            {doc.subtitle && (
              <span className="text-xs text-gray-700 font-normal mt-4">
                {doc.subtitle}
              </span>
            )}
          </a>

          <a
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-600 hover:underline"
          >
            <Download size={18} />
          </a>
        </div>
      ))}
    </div>
    <br />
    <Footer />
    </main>
  );
}
