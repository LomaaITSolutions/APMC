import React, { useState, useRef } from "react";

const slotTypes = [
  { value: "", label: "--SELECT--" },
  { value: "morning", label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "evening", label: "Evening" },
];

export default function Slot() {
  const [date, setDate] = useState("");
  const [slotType, setSlotType] = useState("");
  const scrollRef = useRef(null);

  return (
    <div className="border border-gray-200 rounded-lg m-2 mt-4">
      <div className="bg-teal-700 text-white py-1 text-center rounded-t-lg text-2xl font-semibold">
        Check Slot Availability
      </div>

      {/* Form */}
      <form className="flex flex-col items-center py-8">
        <div className="flex gap-8 w-4/6 justify-center mb-8">
          {/* Date */}
          <div className="flex-1">
            <label className="font-semibold text-lg block text-center mb-2">
              Select Date
            </label>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="DD-MM-YYYY"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-2.5 text-base border border-gray-300 rounded-md outline-none w-full"
              />
            </div>
          </div>

          {/* Slot Type */}
          <div className="flex-1">
            <label className="font-semibold text-lg block text-center mb-2">
              Slot Type
            </label>
            <select
              value={slotType}
              onChange={(e) => setSlotType(e.target.value)}
              className="w-full p-2.5 text-base border border-gray-300 rounded outline-none bg-white"
            >
              {slotTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Button */}
        <button
          type="button"
          className="bg-blue-700 text-white border-none rounded-xl px-7 py-3 text-xl font-medium cursor-pointer mt-3"
          onClick={() => {
            if (!date || !slotType) {
              alert("Please complete all required fields");
              return;
            }
            const table = document.getElementById("slot-table");
            if (table) table.style.display = "block"; // ✅ fix: show block, not table
          }}
        >
          Check Availability
        </button>
      </form>

      {/* Slot Table */}
      <div
        id="slot-table"
        style={{ display: "none", marginTop: "2rem" }}
        className="md:hidden w-full overflow-x-auto mt-6"
        ref={scrollRef}
      >
        <div
          style={{ maxHeight: "400px", overflowY: "auto" }}
          className="inline-block min-w-full align-middle"
        >
          <table className="min-w-full border border-gray-300 text-xs sm:text-sm md:text-base">
            <thead>
              <tr>
                <th className="border px-1 py-1 sm:px-2 sm:py-1 text-xs sm:text-sm md:text-base whitespace-nowrap">
                  Slot Range - Slot Time
                </th>
                {Array.from({ length: 14 }, (_, i) => (
                  <th
                    key={i}
                    className="border px-1 py-1 sm:px-2 sm:py-1 text-xs sm:text-sm md:text-base whitespace-nowrap"
                  >
                    {`14:${(i * 2 + 2).toString().padStart(2, "0")}`}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { range: "10:00 AM - 10:30 AM", status: Array(14).fill("Available") },
                {
                  range: "10:30 AM - 11:00 AM",
                  status: [
                    "Booked", "Available", "Booked", "Available", "Booked", "Available", "Booked",
                    "Available", "Booked", "Available", "Booked", "Available", "Booked", "Available",
                  ],
                },
                {
                  range: "11:00 AM - 11:30 AM",
                  status: [
                    "Available", "Booked", "Available", "Booked", "Available", "Booked", "Available",
                    "Booked", "Available", "Booked", "Available", "Booked", "Available", "Booked",
                  ],
                },
                { range: "11:30 AM - 12:00 PM", status: Array(14).fill("Available") },
                {
                  range: "12:00 PM - 12:30 PM",
                  status: [
                    "Booked", "Booked", "Available", "Available", "Booked", "Booked", "Available",
                    "Available", "Booked", "Booked", "Available", "Available", "Booked", "Booked",
                  ],
                },
              ].map((row, idx) => (
                <tr key={idx}>
                  <td className="border px-1 py-1 sm:px-2 sm:py-4 font-semibold bg-gray-100 text-xs sm:text-sm md:text-base whitespace-nowrap">
                    {row.range}
                  </td>
                  {row.status.map((s, i) => (
                    <td
                      key={i}
                      className={`border px-1 py-1 sm:px-2 sm:py-1 text-center font-medium text-xs sm:text-sm md:text-base ${
                        s === "Booked" ? "bg-red-400 text-white" : "bg-green-200 text-green-900"
                      }`}
                    >
                      {s}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
