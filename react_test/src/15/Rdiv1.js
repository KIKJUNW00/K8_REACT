import Rdiv2 from "./Rdiv2";
import Rdiv3 from "./Rdiv3";
import { AtomN } from "./AtomN";
import { useRecoilValue } from "recoil";

export default function Rdiv1() {

    const x = useRecoilValue(AtomN);
   

    return (
        <div className="w-10/12 h-4/5 flex flex-col 
                        mt-16 p-5
                        bg-red-800 text-white font-bold">
            Rdiv1 : x={x}

            <div className='flex justify-center gap-1'>

                <Rdiv2 />
                <Rdiv2 />
            </div>

           
                <Rdiv3 />
            
        </div>
    )
}
