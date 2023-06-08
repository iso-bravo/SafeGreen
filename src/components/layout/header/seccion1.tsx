import { useCallback } from "react";
import isle from "../../../assets/images/isla.png";

export function Seccion1() {
  return (
    <div className="h-full w-full font-Lexend flex flex-row items-center justify-around">
      <div className="flex flex-col border">
        <h1 className="flex-col font-bold text-5xl w-full">
          Join the community!
        </h1>
        <h2 className="flex-col  font-bold text-xl w-full my-4">Embrace nature, connect, and create. Join our app now!</h2>
      </div>
      <div className="w-1/2">
        <img className="" src={isle} alt="isla" />
      </div>
    </div>
  );
}

export default Seccion1;
