import React, { useState } from "react";

function Donate() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  return (
    <div
      className="bg-[#13152B] w-full h-screen p-20 flex justify-center font-Lexend
            first-letter"
    >
      <div className="bg-[#25263E] rounded-2xl p-16 text-center">
        <form
          className="card-body w-96"
          //</div>onSubmit={}
        >
          <h1 className="flex text-white text-5xl mb-5 font-extrabold justify-center">
            Donation
          </h1>
          <h2 className="flex text-gray-400 text-3xl mb-5 font-extrabold justify-center">
            Make a donation and make a difference! Your generous contribution
            supports our mission and helps Cembda continue their vital work!
          </h2>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              className="px-6 py-8 h-14 w-full text-xl
                        bg-[#72758C] placeholder-white focus:outline-none block 
                        rounded-2xl focus:ring-1"
              placeholder="Full Name"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              className="px-6 py-8 h-14 w-full text-xl
                        bg-[#72758C] placeholder-white focus:outline-none block 
                        rounded-2xl focus:ring-1"
              placeholder="Amount"
              //value={}
              onChange={(e) => {}}
            />
            <button
              className="bg-[#21D803] hover:bg-[#6aef55] px-6 h-16 w-full text-3xl
                        text-white focus:outline-none block
                        rounded-2xl focus:ring-1 my-16"
              type="submit"
            >
              Complete Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { Donate };
