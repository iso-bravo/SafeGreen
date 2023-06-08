import React, { useState } from "react";

export default function Auth() {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");



    return (
        <div className="bg-[#13152B] w-full h-screen p-20 flex justify-center font-Lexend
            first-letter">
            <div className="bg-[#25263E] w-2/5 justify-center rounded-2xl p-16">
            <form className="card-body w-96" 
            //</div>onSubmit={}
            >

                <h1 className="flex text-white text-5xl mb-5 font-extrabold justify-center">Log In</h1>
                <div className="flex flex-col gap-5">
                    <input
                        type="text"
                        className="px-6 py-8 h-14 w-full text-xl
                        bg-[#72758C] placeholder-white focus:outline-none block 
                        rounded-2xl focus:ring-1" placeholder="Username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <input
                        type="password"
                        className="px-6 py-8 h-14 w-full text-xl
                        bg-[#72758C] placeholder-white focus:outline-none block 
                        rounded-2xl focus:ring-1" placeholder="Password"
                        //value={}
                        onChange={(e) => {
                        }}
                    />
                    <button className="bg-[#661BE0] hover:bg-[#6a23dd] px-6 h-16 w-full text-3xl
                        text-white focus:outline-none block
                        rounded-2xl focus:ring-1" type="submit" >
                        Log In
                    </button>
                </div>
            </form>
            </div>
        </div>
    )
}