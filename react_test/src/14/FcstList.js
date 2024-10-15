import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function FcstList() {
    const [sParams] = useSearchParams();

    const gubun = sParams.get('gubun');
    const dt = sParams.get('dt');
    const x = sParams.get('x');
    const y = sParams.get('y');
    const area = sParams.get('area');
    console.log(x)


    return (
        <div className='w-10/12 p-5'>

            <div className='w-full p-5 grid grid-cols-2 md:grid-flow-col-2 gap-4'> 
                <div className='text-2xl font-bold'>
                    초단기 예보
                </div>
                <select className='form-select'>
                    <option >
                        하늘상태(SKY)
                    </option>
                </select>
            </div>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className='text-xl text-gray-50 uppercase bg-slate-950 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th>항목명</th>
                        <th>예측시간</th>
                        <th>항목값</th>
                    </tr>
                </thead>
                <tbody className='text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
