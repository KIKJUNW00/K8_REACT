import TailButton1 from "../UI/TailButton1"
import TailBall from "./TailBall"

export default function Lotto() {

    const ClickHandler = () => {
        console.log('ClickHandler')

        let n = [];

        while (n.length < 7) {
            let Rnumber = Math.floor(Math.random() * 45) + 1;
            if (!n.includes(Rnumber)) {  // 배열에 없는 숫자만 추가
                n.push(Rnumber);
            }
        }
        console.log(n)
        
    }



    return (
        <div className="w-full">
            <div className="flex justify-center items-center mb-10 ">
            <TailBall n={1} />
            <TailBall n={12} />
            <TailBall n={21} />
            <TailBall n={12} />
            <TailBall n={41} />
            <TailBall n={12} />
            <TailBall n={13} />
            </div>

            <div className="w-full flex justify-center items-center mb-10">
                <TailButton1 caption='로또번호 생성' 
                             color='blue'
                             ClickHandler={ClickHandler}/>

                <TailButton1 caption='로또번호 지우기'
                             color='orange'
                             ClickHandler={ClickHandler}/>
            </div>
        </div>
    )
}
