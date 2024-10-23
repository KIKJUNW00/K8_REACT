import TailButton1 from "../UI/TailButton1"
import { useEffect } from "react"
import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilState, useRecoilValue } from "recoil";


export default function Rdiv3() {
    const [x, setX] = useRecoilState(AtomN);
    // const [y, setY] = useRecoilState(AtomN);
    const y = useRecoilValue(AtomN2);


    const handleUp = () => {
        setX(x + 1);
    }

    const handleDown = () => {
        setX(x - 1);
    }

    useEffect (() => {
        if (!localStorage.getItem('x')) {
            setX(0);
        }
        else{
            setX(parseInt(localStorage.getItem('x')))
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('x', x);
    }, [x]);


    


    return (
        <div className="w-full h-4/5 
                        mt-16 p-5  
                        bg-red-300 text-gray-700 font-bold">

            <div className='w-full h-10 p-5
                             flex justify-start items-center'>
                RDiv3  x = {x} y = {y}
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 font-bold
                                justify-center items-center">

                <TailButton1
                    caption='증가'
                    color='blue'
                    ClickHandler={handleUp}
                    size='w-10/12' />

                <TailButton1
                    caption='감소'
                    color='orange'
                    ClickHandler={handleDown}
                    size='w-10/12' />
            </div>
        </div>
    )
}