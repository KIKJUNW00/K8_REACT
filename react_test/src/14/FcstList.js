import { useSearchParams } from 'react-router-dom'
import getcode from '../14/getcode.json';
import { useState, useEffect, useRef } from 'react';

export default function FcstList() {
    const [sParams] = useSearchParams();


    const gubun = sParams.get('gubun');
    const dt = sParams.get('dt');
    const x = sParams.get('x');
    const y = sParams.get('y');
    const area = sParams.get('area');
    // console.log(dt)

    //목록
    const [ops, setOps] = useState();

    //전체데이터
    const [tdata, setTdata] = useState([]);

    // 선택항목 테이블 데이터
    const [trs,setTrs] = useState([]);

    //form 값을 참조하기 위한 ref변수
    const selRef = useRef();

    //select가 선택되었을때
    const handleSelect = () => {
        console.log(selRef.current.value);
        if (!tdata) return;

        const code = getcode.filter(item => item['항목값'] === selRef.current.value)[0];

        const tm = tdata.filter(item => item['category'] === selRef.current.value)
                        .map(item => <tr className='p-10' key={item.category +item.fcstDate +item.fcstTime}>
                                        <td>{code.항목명}({item.category})</td>
                                        <td>
                                         {item.fcstDate.slice(0,4)}.{item.fcstDate.slice(4,6)}.{item.fcstDate.slice(6,8)}
                                       </td>
                                        <td>{item.fcstTime.slice(0,2)}:{item.fcstTime.slice(2,4)}</td>
                                        <td>{item.fcstValue}{code.단위}</td>
                                    </tr>);

        setTrs(tm);
    }

    //데이터 가져오기
    const getFetchData = async(url) => {
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data.response.body.items.item);
        setTdata(data.response.body.items.item);
    }


    //컴포넌트 생성시
    useEffect(() => {
        const tm = getcode.filter(item => item.예보구분 === gubun)
            .map(item => <option key={item.항목값}
                value={item.항목값}>
                {item.항목명}({item.항목값})
            </option>)
        setOps(tm)

        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0';
        if (gubun === '단기예보') {
            url = url + `/getVilageFcst?serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=1000&dataType=json`;
            url = url + `&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`
        }
        else {
            url = url + `/getUltraSrtFcst?serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=1000&dataType=json`;
            url = url + `&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`
        }

        console.log(url);
        getFetchData(url);
    }, []);


    return (
        <div className='w-full flex flex-col justify-start items-center'>
            <div className='w-10/12 p-5 grid grid-cols-2 md:grid-flow-col-2 gap-4'>
                <div className='w-full text-left text-2xl font-bold'>
                    {gubun} {area} ({dt.slice(0, 4)}-{dt.slice(4, 6)}-{dt.slice(6, 8)})
                </div>
                <select className='form-select'
                    ref={selRef}
                    onChange={handleSelect}>
                    <option>
                        ---항목을 선택하세요---
                    </option>
                    {ops}
                </select>
            </div>

            <table className="w-10/12 text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead className='text-xl text-gray-50  bg-slate-950 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th>항목명</th>
                        <th>예측날짜</th>
                        <th>예측시간</th>
                        <th>항목값</th>
                    </tr>
                </thead>
                <tbody className='text-base text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    {trs}
                </tbody>
            </table>
        </div>
    )
}
