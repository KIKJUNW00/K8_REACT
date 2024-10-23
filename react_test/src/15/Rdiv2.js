import Rdiv3 from "./Rdiv3"
import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilValue } from "recoil";

export default function Rdiv2() {

    const x = useRecoilValue(AtomN)
    const y = useRecoilValue(AtomN2)

    return (
        <div className='w-1/3 h-4/5 flex flex-col 
                        mt-16 p-5 mx-2
                        bg-red-500 text-white font-bold'>

            <div>

                Rdiv2: (x = {x} y = {y})
            </div>


        </div>
    )
}
