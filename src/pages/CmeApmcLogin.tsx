import { useState } from "react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const APMCLoginPage: React.FC = () => {
     const [designation, setDesignation] = useState<string>("");
  return (
    <div className="flex h-screen">
      {/* Left side with background image */}
      <div
        className="w-full bg-cover bg-center relative hidden md:block"
        style={{
          backgroundImage:
            "url('/cmeLogin.png')",
        }}
      >
            <div className="w-full h-[100%] pl-[45%] flex justify-center items-center ">
        <div className="bg-slate-100 h-[70%] rounded-2xl shadow-lg p-8 w-96 ">
         <div className="md:ml-[36%] md:pt-10">
               <img src="/favicon.ico" alt="favicon"  className="h-20 w-20 rounded-full" />
               </div><br />
          <h2 className="text-2xl font-bold text-center text-primary mb-6">
           APMC LOGIN
          </h2>

          <form className="space-y-5">

         <div className="mb-4">
      <label
        htmlFor="designation"
        className="block text-lg font-semibold mb-2"
      >
        Designation
      </label>
      <Select onValueChange={setDesignation}>
        <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 text-primary focus:outline-none focus:ring-primary focus:border-primary">
          <SelectValue placeholder="-- Select Designation --" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg">
          <SelectItem
            value="CHAIRMAN"
            className="hover:bg-primary hover:text-white cursor-pointer px-3 py-2"
          >
            CHAIRMAN
          </SelectItem>
          <SelectItem
            value="REGISTRAR-APMC"
            className="hover:bg-primary hover:text-white cursor-pointer px-3 py-2"
          >
            REGISTRAR-APMC
          </SelectItem>
          <SelectItem
            value="VerificationOfficer-APMC"
            className="hover:bg-primary hover:text-white cursor-pointer px-3 py-2"
          >
            VerificationOfficer-APMC
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
            <div>
              <label className="block mb-1 text-primary">User ID :</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-lg outline-none border border-primary"
                placeholder="Enter User ID"
              />
            </div>

           
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-2 rounded-full mt-4 transition"
            >
              SIGN IN
            </button>
          </form>

          <p className="text-sm text-center text-primary mt-4">
            Don’t have an account?{" "}
            <a href="#" className="font-semibold underline">
              Register Now
            </a>
          </p>
        </div>
      </div>

      </div>

      {/* Right side with login form */}
    </div>
  );
};

export default APMCLoginPage;