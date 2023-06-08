import eco from "../../../assets/images/eco.png";


function Texto() {


    return (
        <div className="bg-[#25263E] w-full h-screen flex flex-row">
            <div className="w-2/3">
                <img src={eco} className="w-full h-full object-cover"/>
            </div>
            <div className="w-2/5 py-32 px-24">
                <h2 className=" text-3xl text-justify mb-8">CEMDA is a non-governmental, apolitical and non-profit organization that has been working for the defense of the environment and natural resources for 29 years. 
It is one of the main environmental civil society organizations in Mexico.</h2>
                <a href="https://www.cemda.org.mx/">
                <button  className="bg-[#21D803] px-10 py-4 text-2xl font-semibold rounded-2xl w-full hover:bg-[#3de623]">Visit official site</button>
                </a>
            </div>
        </div>
    );
}

export { Texto };