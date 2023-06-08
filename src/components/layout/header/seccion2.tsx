import { FaPiggyBank } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { FaLock } from "react-icons/fa";

export default function Seccion2() {
  return (
    <div className="py-12 bg-[#505369] font-Lexend rounded-lg">
      <div className="mx-6">
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-white text-6xl">What is it?</h1>
          <h2 className="text-gray-400 text-4xl my-4">
            A quick introduction of our project...
          </h2>
        </div>
        <div className="flex flex-row justify-around items-center my-10 space-x-20 h-96">
          <div className="bg-[#13152B] text-center rounded-xl p-4 w-1/3 h-96 ">
          <div className="flex flex-col items-center">
            <FaPiggyBank className="text-white text-9xl hover:scale-125 transition-all duration-400 flex my-4" />
            <h1 className="font-bold text-white text-2xl my-4 flex">Helping the cause</h1>
            <h2 className="my-4 text-gray-300 flex text-xl">
            Donate for reforestation, restoration, and sustainable practices—creating a greener future.
            </h2>
            </div>
          </div>
          <div className="bg-[#13152B] text-center rounded-xl p-4 w-1/3 h-full">
          <div className="flex flex-col items-center my-4">
            <HiUserGroup className="text-white text-9xl hover:scale-125 transition-all duration-400 flex my-4" />
            <h1 className="font-bold text-white text-2xl flex my-4 ">
              Made by the community
            </h1>
            <h2 className=" text-gray-300 flex text-xl">
            Community-powered project driving environmental impact through collaborative co-creation. Join our movement!
            </h2>
            </div>
          </div>
          <div className="bg-[#13152B] text-center rounded-xl p-4 w-1/3 h-full">
            <div className="flex flex-col items-center my-4">
            <FaLock className="text-white text-9xl hover:scale-125 transition-all duration-400 flex my-4" />
            <h1 className="font-bold text-white text-2xl flex my-4">
              Safe transactions
            </h1>
            <h2 className="my-4 text-gray-300 flex text-xl">
            Secure, blockchain-based transactions prioritize trust and privacy for environmental conservation.
            </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
