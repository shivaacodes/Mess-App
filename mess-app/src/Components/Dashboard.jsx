import React from "react";

export default function Dashboard() {
  return (
    <div className="px-10 py-10 flex h-screen bg-gray-100 relative">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-6">Welcome, Shiva!</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg w-[32rem] h-full relative">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center text-left">
              <img src="" alt="Profile" className="rounded-full" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold">Shiva Sajay</h2>

            <div className="mt-8 text-lg space-y-2">
              <p>
                <strong>Branch:</strong> IT
              </p>
              <p>
                <strong>Semester:</strong> 2
              </p>
              <p>
                <strong>Mess:</strong> Sahara
              </p>
              <p>
                <strong>Mess Cuts Left:</strong> 9
              </p>
              <p>
                <strong>Validity:</strong> 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        <button className="bg-black text-white py-3 px-6 rounded-md shadow-md hover:bg-gray-800 transition duration-300 w-48">
          Profile
        </button>
        <button className="bg-black text-white py-3 px-6 rounded-md shadow-md hover:bg-gray-800 transition duration-300 w-48">
          Mess Cuts
        </button>
        <button className="bg-black text-white py-3 px-6 rounded-md shadow-md hover:bg-gray-800 transition duration-300 w-48">
          Fee
        </button>
      </div>
    </div>
  );
}
