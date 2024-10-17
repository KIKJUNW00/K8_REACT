import TailButton1 from "../UI/TailButton1"
import { useEffect, useRef, useState } from "react"
import { AtomN, AtomN2 } from "./AtomN"; 
import { useRecoilState } from "recoil";


export default function Recoil3({x3, y3}) {

    const [x, setX] = useState(x3);
    const [y, setY] = useState(y3);
    const inRef = useRef();
    const [n, setN] = useRecoilState(AtomN); //아톰 사용하기
    const [n2, setN2] = useRecoilState(AtomN2) ;

    const handleUp = () => {
        // x를 변경하려면 setX로 변경
        setX(x+1);
        setN(n + 1);

    }

    const handleDown = () => {
        setX(x-1);
        setN(n - 1);

    }

    useEffect(()=>{
        setY(x * parseInt(inRef.current.value))
    },[x])

    useEffect(() =>{
        setN2( n * parseInt(inRef.current.value)) ;
      } , [n]);

    return (

        <div className="w-full h-4/5 
                        mt-16 p-5  
                        bg-red-300 text-gray-700 font-bold">
            <div className="w-full h-full
                          bg-red-50 text-gray-700 font-bold">
                Recoil2 (x={x}, y={y})


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold
                                justify-center items-center ">

                    <input type="number"
                           min = {2}  max={5}
                           ref={inRef}
                           defaultValue={2}
                           className="form-input"/>

                    <TailButton1 caption = '증가'
                                 color = 'blue'
                                 ClickHandler = {handleUp}
                                 size = 'w-10/12'/>
                    <TailButton1 caption = '감소'
                                 color = 'orange'
                                 ClickHandler = {handleDown}
                                 size = 'w-10/12'/>
                </div>
            </div>
        </div>
    )
}
