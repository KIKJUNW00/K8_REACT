import TailButton from '../UI/TailButton1';
import { useEffect, useState } from 'react';

export default function TrafficNav({title, c}) {
    const [sel, setSel] = useState();


    const handleBtClick = (item) => {
        setSel(item);
    };


    // const c1 = ['차대사람', '차대차', '차량단독', '철길건널목']
    const bts = c.map(item => (<TailButton
                                key={item}
                                caption={item}
                                color= {item == sel ? 'orange' : 'blue'}
                                ClickHandler= {() => handleBtClick(item)}
                            />));
    // console.log('c1 ====',c1);
    useEffect(() =>{
        console.log(sel);
    },[sel]);


    return (
        <div className='w-5/6 bg-sky-200 p-2 m-2
                        flex  justify-between items-center'>
            
            <div className='w-1/5 text-2xl font-bold
                            flex justify-between items-center'>
                교통사고 {title}
            </div>
            <div className='flex justify-end items-center'>
                {bts}
            </div>

        </div>
    )
}
