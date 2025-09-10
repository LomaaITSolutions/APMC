import React from "react";

const ObLoginPage: React.FC = () => {
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
         <div className="md:ml-[36%] md:pt-20">
               <img src="/favicon.ico" alt="favicon"  className="h-20 w-20 rounded-full" />
               </div><br />
          <h2 className="text-2xl font-bold text-center text-primary mb-6">
           OBSERVER LOGIN
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-primary">Username:</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-lg outline-none border border-primary"
                placeholder="Enter OBSERVER ID"
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

export default ObLoginPage;