import cemda from "../../../assets/images/cemda.png";
import {useNavigate} from 'react-router-dom'

function Nombre() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#13152B] w-full h-[79vh]">
            <div className="flex flex-row justify-center align-middle gap-8">
                <h2 className="font-lexend text-end text-4xl w-[20rem] mt-32">
                    Every little donation counts,
                </h2>
                <img src={cemda} className="w-[25%]"/>
                <h2 className="font-lexend text-4xl  w-[22rem] mt-32">
                    together we can protect our home.
                </h2>
            </div>
            <div>
                <button className="flex justify-center bg-[#21D803] ml-[39rem] my-12 px-8 py-3 text-2xl rounded-2xl font-semibold hover:bg-[#3de623]" onClick={() => navigate('/donate')}>Donate</button>
            </div>
        </div>
    );
}

export { Nombre };