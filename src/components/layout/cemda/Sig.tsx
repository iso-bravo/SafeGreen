import { IoIosArrowForward } from "react-icons/io";

function Sig() {
    return (
            <div className="h-[30vh] flex flex-row justify-center p-24 cursor-pointer">
                <h1 className="text-4xl font-bold">Discover what you will get by donating</h1>
                <IoIosArrowForward size={40} className="mt-1 font-bold"/>
            </div>
    );
}

export { Sig };