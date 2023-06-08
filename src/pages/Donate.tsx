import React, { useState } from "react";
import { TransferButton } from "./Transfer";

function Donate() {
    const [username, setUsername] = useState("");
    const [amount, setAmount] = useState(0);

    return (
        <div
        className="bg-[#13152B] w-full h-screen p-18 flex justify-center font-Lexend
            first-letter">
        <div className="bg-[#25263E] rounded-2xl p-16 text-center w-2/5 flex justify-center">
            <form className="card-body "
          //</div>onSubmit={} 
          >
            <h1 className="flex text-white text-5xl mb-5 font-extrabold justify-center">
                Donation
            </h1>
            <h2 className="flex text-white text-xl mb-5 font-semibold justify-center w-full">
            Discover the power of donating with blockchain: transparency, security and real impact! Your generous contribution
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
                value={amount}
                onChange={(e) => {
                    setAmount(Number(e.target.value));
                }}
                />
                <TransferButton amount={amount} />
                
            </div>
            </form>
        </div>
        </div>
    );
}

export { Donate };
