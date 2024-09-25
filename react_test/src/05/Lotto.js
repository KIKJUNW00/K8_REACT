import TailButton1 from "../UI/TailButton1"
import TailBall from "./TailBall"

import { useState } from "react"

export default function Lotto() {
    // state변수는 useState Hook으로 만듬
    const [tags, setTags] = useState();

    const ClickHandler = () => {
        console.log('ClickHandler')

        let arr = [];

        while (arr.length<7){
            let n = Math.floor(Math.random() * 45) + 1;
            
            if(!arr.includes(n)) arr.push(n);
        }
        
        //보너스 번호
        const bonus = arr.splice(-1)
        //번호정렬
        arr.sort((a,b) => a - b)

        // 보너스 번호 추가
        arr = arr.concat(bonus)

        //볼만들기
        let tm = arr.map( item => <TailBall key={'b'+item}
                                            n={item}/>);
                                            
        
        //plus기호 넣기
        tm.splice(6,0, <div className="text-3xl mx-2 font-bold" key='sp'>+</div>)

        console.log(arr)
        setTags(tm)
        // setTags(<h1 className="text-3xl">{arr}</h1>);
        
    }

    const RemoveBt = () => {
        setTags(null);
    }


    return (
        <div className="w-full">
            <div className="flex justify-center items-center mb-10 ">
             {tags}
            </div>

            <div className="w-full flex justify-center items-center mb-10">
                <TailButton1 caption='로또번호 생성' 
                             color='blue'
                             ClickHandler={ClickHandler}/>

                <TailButton1 caption='로또번호 지우기'
                             color='orange'
                             ClickHandler={RemoveBt}/>
            </div>
        </div>
    )
}
