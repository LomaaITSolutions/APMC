"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedButton } from "../components/Button/AnimatedButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const FAQ_ITEMS = [
  {
    id: "1",
    question: "Who can register with Andhra Pradesh Medical Council (APMC)?",
    answer:
      "Any doctor holding a recognized MBBS degree or higher medical qualification from a university approved by the National Medical Commission (NMC) is eligible to register with APMC.",
  },
  {
    id: "2",
    question: "How do I apply for new registration with APMC?",
    answer:
      "You need to fill out the online application form on the APMC website, upload the required documents, and pay the applicable registration fee. After verification, your registration certificate will be issued.",
  },
  {
    id: "3",
    question: "What documents are required for registration?",
    answer:
      "Typically, you will need your MBBS degree certificate, provisional certificate, internship completion certificate, Aadhaar card, passport-size photograph, and fee receipt. Additional documents may be requested if required.",
  },
  {
    id: "4",
    question: "How can I renew my medical registration?",
    answer:
      "Doctors must renew their registration every 5 years. You can apply for renewal online by logging into the APMC portal, uploading the necessary documents, and paying the renewal fee.",
  },
  {
    id: "5",
    question: "What is the difference between permanent and provisional registration?",
    answer:
      "Provisional registration is granted to medical graduates to complete their compulsory internship. Permanent registration is granted after successful completion of the internship and submission of required documents.",
  },
  {
    id: "6",
    question: "How do I apply for Good Standing Certificate (GSC)?",
    answer:
      "Doctors planning to work abroad can apply for a Good Standing Certificate through the APMC portal by submitting an application along with the required documents and prescribed fee.",
  },
  {
    id: "7",
    question: "What should I do if I lose my registration certificate?",
    answer:
      "In case of loss or damage, you can apply online for a duplicate certificate by submitting a police complaint copy, ID proof, and paying the duplicate certificate fee.",
  },
  {
    id: "8",
    question: "Can I transfer my registration from another state medical council to APMC?",
    answer:
      "Yes, doctors already registered in another state can apply for transfer to APMC by submitting a No Objection Certificate (NOC) from the previous council along with the required documents and fees.",
  },
  {
    id: "9",
    question: "How can I check the status of my registration application?",
    answer:
      "You can log in to the APMC online portal using your registered credentials and track the application status under 'My Applications'.",
  },
  {
    id: "10",
    question: "Is Continuing Medical Education (CME) mandatory for renewal?",
    answer:
      "Yes. As per NMC/APMC guidelines, doctors must submit proof of CME credits earned during the registration period for successful renewal.",
  },
];


const Component = () => {
  return (
    <>
    <Header />
        <section className="relative z-10 bg-white py-10">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid md:grid-cols-2 md:gap-12 xl:gap-16">
          <div className="flex flex-col gap-y-4 items-start h-full">
            <div className="flex-1 sticky top-[6.25rem] h-fit">
        <h4 className="font-semibold text-xl md:text-4xl dark:text-white text-black tracking-tighter mb-2 max-w-xl text-left">
            Got doubts about your registration?{" "}
            <span className="text-teal-700">We’re here to help.</span>
                </h4>
              <p className="text-md text-neutral-500 pb-4 max-w-lg">
                Need help with something? Here are our most frequently asked
                questions.
              </p>
            </div>

          <div className="bg-gray-50 rounded-[1.75rem] p-[1.75rem] flex flex-col gap-5 w-full items-start relative mt-6">
  <div className="flex flex-col gap-2 ">
    <span className="text-md font-medium">
      Can't find your answer?
    </span>
    <span className="text-xs text-neutral-500">
      Get in touch with our support team, they are friendly!
    </span>
  </div>
  <AnimatedButton text="Contact us" />
</div>

          </div>
          <Accordion type="multiple" className="w-full">
            {FAQ_ITEMS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Component;
