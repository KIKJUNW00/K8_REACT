import bank from './img/bank.png';
import market from './img/market.png';
import busan from './img/busan.png';

import { useState } from 'react';

export default function FoodCard({obj}) {
    const [IsShow, setIsShow] = useState(false);

    const objImg ={
        "광역지원센터" : busan,
        "기초푸드뱅크" : bank,
        "기초푸드마켓" : market
    }

    const handleClick = () => {
        setIsShow(!IsShow);
    }

    return (
        <div className='flex justify-center items-center 
                        w-full h-full 
                        border border-gray-500 
                        rounded-md p-5'>
            <div className='mr-5'>
                {/* <img src={obj["구분"] === '광역지원센터' ? busan :
                          obj["구분"] === '기초푸드뱅크' ? bank : market}
                      alt = {obj["구분"]}/> */}
                <img src = {objImg[obj["구분"]]}
                alt = {obj["구분"]} />
                
            </div>

            <div className='h-full w-full
                            flex flex-col justify-between items-start'>
                    <div>
                        <div className='text-3xl text-slate-900 font-bold'>
                            {obj["사업장명"]}
                        </div>

                        <div className='text-2xl text-slate-900 font-bold'>
                            {obj["운영주체명"]}
                        </div>
                        <div>
                            {obj["사업장 소재지"]}
                        </div>
                    </div>           

                    <div className='flex justify-end items text-white font-bold
                                    w-full h-8 p-2      
                                    bg-slate-600'
                        onClick={handleClick}>
                        {/* {IsShow ? obj["연락처(대표번호)"] : ''} */}
                        {IsShow && obj["연락처(대표번호)"]}
                    </div>
            </div>
        </div>
    )
}
