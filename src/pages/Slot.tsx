import React, { useState } from "react";

const slotTypes = [
    { value: "", label: "--SELECT--" },
    { value: "morning", label: "Morning" },
    { value: "afternoon", label: "Afternoon" },
    { value: "evening", label: "Evening" },
];

export default function Slot() {
    const [date, setDate] = useState("");
    const [slotType, setSlotType] = useState("");

    return (
        <div className="border border-gray-200 rounded-lg m-2 mt-4">
            <div className="bg-teal-700 text-white py-1 text-center rounded-t-lg text-2xl font-semibold">
                Check Slot Availability
            </div>
            <form className="flex flex-col items-center py-8">
                <div className="flex gap-8 w-4/6 justify-center mb-8">
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
                                className="p-2.5 text-base border border-gray-300 rounded-l-md outline-none w-full"
                            />
                           
                        </div>
                    </div>
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
                <button
                    type="button"
                    className="bg-blue-700 text-white border-none rounded-xl px-7 py-3 text-xl font-medium cursor-pointer mt-3"
                    onClick={() => {
                        if (!date || !slotType) {
                            // Show modal for missing information
                            const modal = document.createElement("div");
                            modal.style.position = "fixed";
                            modal.style.top = "0";
                            modal.style.left = "0";
                            modal.style.width = "100vw";
                            modal.style.height = "100vh";
                            modal.style.background = "rgba(0,0,0,0.4)";
                            modal.style.zIndex = "9999";
                            modal.style.display = "flex";
                            modal.style.alignItems = "center";
                            modal.style.justifyContent = "center";

                            modal.innerHTML = `
                                <div style="background:white;padding:2rem 3rem;border-radius:1rem;box-shadow:0 2px 16px rgba(0,0,0,0.2);text-align:center;max-width:400px;">
                                    <div style="margin-bottom:1rem; align-items:center; justify-content:center; display:flex;">
                                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" stroke="#e53e3e" stroke-width="2" fill="#fff"/>
                                            <line x1="8" y1="8" x2="16" y2="16" stroke="#e53e3e" stroke-width="2"/>
                                            <line x1="16" y1="8" x2="8" y2="16" stroke="#e53e3e" stroke-width="2"/>
                                        </svg>
                                    </div>
                                    <div style="font-size:1.5rem;font-weight:600;color:#444;margin-bottom:0.5rem;">Missing Information</div>
                                    <div style="color:#555;margin-bottom:1.5rem;">Please complete all required fields</div>
                                    <button style="background:#e53e3e;color:white;padding:0.5rem 2rem;border:none;border-radius:0.5rem;font-size:1rem;font-weight:500;cursor:pointer;" id="modal-ok-btn">OK</button>
                                </div>
                            `;
                            document.body.appendChild(modal);
                            document.getElementById("modal-ok-btn")?.addEventListener("click", () => {
                                document.body.removeChild(modal);
                            });
                            return;
                        }
                        const table = document.getElementById("slot-table");
                        if (table) table.style.display = "table";
                    }}
                >
                    Check Availability
                </button>
                <div id="slot-table" style={{ display: "none", marginTop: "2rem", overflowX: "auto" }}>
                    <table className="min-w-full min-h-full border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border px-2 py-1">Slot Range - Slot Time</th>
                                {Array.from({ length: 14 }, (_, i) => (
                                    <th key={i} className="border px-2 py-1">{`14:${(i * 2 + 2).toString().padStart(2, "0")}`}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { range: "10:00 AM - 10:30 AM", status: Array(14).fill("Available") },
                                { range: "10:30 AM - 11:00 AM", status: ["Booked", "Available", "Booked", "Available", "Booked", "Available", "Booked", "Available", "Booked", "Available", "Booked", "Available", "Booked", "Available"] },
                                { range: "11:00 AM - 11:30 AM", status: ["Available", "Booked", "Available", "Booked", "Available", "Booked", "Available", "Booked", "Available", "Booked", "Available", "Booked", "Available", "Booked"] },
                                { range: "11:30 AM - 12:00 PM", status: Array(14).fill("Available") },
                                { range: "12:00 PM - 12:30 PM", status: ["Booked", "Booked", "Available", "Available", "Booked", "Booked", "Available", "Available", "Booked", "Booked", "Available", "Available", "Booked", "Booked"] },
                                { range: "12:30 PM - 01:00 PM", status: Array(14).fill("Available") },
                                { range: "01:00 PM - 01:30 PM", status: ["Available", "Available", "Booked", "Booked", "Available", "Available", "Booked", "Booked", "Available", "Available", "Booked", "Booked", "Available", "Available"] },
                                { range: "01:30 PM - 02:00 PM", status: Array(14).fill("Available") },
                                { range: "02:00 PM - 02:30 PM", status: Array(14).fill("Booked") },
                                { range: "02:30 PM - 03:00 PM", status: ["Booked", "Booked", "Booked", "Available", "Available", "Booked", "Available", "Booked", "Booked", "Available", "Booked", "Available", "Booked", "Booked"] },
                                { range: "03:00 PM - 03:30 PM", status: ["Available", "Available", "Available", "Booked", "Available", "Booked", "Booked", "Booked", "Available", "Available", "Available", "Booked", "Booked", "Available"] },
                                { range: "03:30 PM - 04:00 PM", status: ["Available", "Available", "Available", "Available", "Booked", "Available", "Available", "Available", "Available", "Available", "Available", "Available", "Available", "Available"] },
                                { range: "04:00 PM - 04:30 PM", status: ["Available", "Available", "Available", "Available", "Available", "Available", "Available", "Available", "Available", "Available", "Booked", "Booked", "Available", "Available"] },
                            ].map((row, idx) => (
                                <tr key={idx}>
                                    <td className="border px-2 py-1 font-semibold bg-gray-100">{row.range}</td>
                                    {row.status.map((s, i) => (
                                        <td
                                            key={i}
                                            className={`border px-2 py-1 text-center font-medium ${s === "Booked" ? "bg-red-400 text-white" : "bg-green-200 text-green-900"}`}
                                        >
                                            {s}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
}
