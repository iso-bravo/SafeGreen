import { useCallback } from "react";
import isle from "../../../assets/images/isla.png";
import {useNavigate} from 'react-router-dom'

export function Seccion1() {
  const navigate = useNavigate()

  return (
    <div className="h-full w-full font-Lexend flex flex-row items-center justify-around">
      <div className="flex flex-col text-end">
        <h1 className="flex-col font-bold text-6xl text-end">
          Join the community!
        </h1>
        <h2 className="flex-col text-gray-400 font-bold text-2xl my-4 w-[500px] text-end ml-auto">Embrace nature, connect, and create. Join our app now!</h2>
        <button id="colaa" onClick={() => navigate('/cemda')}>
            Go!
          </button>
      </div>
      <div className="w-1/2">
        <img className="" src={isle} alt="isla" />
      </div>
    </div>
  );
}

export default Seccion1;
