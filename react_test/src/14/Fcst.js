import TailButton1 from '../UI/TailButton1';
import getxy from '../14/getxy.json';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Fcst() {

    const sido = getxy.map(item => item['1단계'])
        .map(item => <option key={item} value={item}>
            {item}
        </option>)

    // let sido =[]
    // for(let i = 0 ; i<getxy.length ; i++){
    //     sido.push(getxy[i]["1단계"]);
    // }

    const navigate = useNavigate();

    //버튼이 눌러졌을때 
    const handleOk = (gubun) => {
        if (txtDt.current.value === '') {
            alert("날짜를 선택하세요")
            txtDt.current.focus();
            return;
        }
        console.log(gubun)
        const dt = txtDt.current.value.replaceAll('-','');
        const loc = getxy.filter(item =>item["1단계"] === txtArea.current.value)[0];
        const x = loc["격자 X"]
        const y = loc["격자 Y"]
        
        navigate(`/fcstlist?gubun=${gubun}&dt=${dt}&x=${x}&y=${y}`);
    }

    //날짜
    const txtDt = useRef();
    //지역
    const txtArea = useRef();

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='w-full text-center text-3xl my-10 font-bold'>
                일기예보 선택
            </h1>

            <div className="w-10/12 p-5 grid grid-cols-2 md:grid-flow-col-2 gap-4">

                <input type='date'
                       ref={txtDt}
                       className='form-input w-full'
                       id="txt1" />

                <select className="form-select w-full"
                        ref={txtArea}>

                    <option>지역을 선택하세요</option>
                    {sido}

                </select>


                <TailButton1 caption='초단기예보'
                    color='blue'
                    ClickHandler={() => handleOk('초단기예보')}
                    size='w-full' />

                <TailButton1 caption='단기예보'
                    color='blue'
                    ClickHandler={() => handleOk('단기예보')}
                    size='w-full' />
            </div>
        </div>
    )
}
