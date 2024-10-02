import { useEffect, useState } from "react";
import TrafficNav from "./TrafficNav";

export default function Traffic() {
    // useState를 컴포넌트 최상위에서 호출
    const [tdata, setTdata] = useState([]);
    // const [tdata, setTdata] = useState();
    

    //  data fetch
    const getFetchData = () => {
        const apiKey = process.env.REACT_APP_KEY;
        const dt = 'page=1&perPage=18&serviceKey=';
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`;

        url = `${url}${dt}${apiKey}`;

        console.log(url);
        // 데이터 가져오기
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                //  console.log(data); // 데이터 확인을 위해 콘솔에 출력
                setTdata(data.data); // 데이터를 상태로 설정
            })
            .catch(err => console.log(err));
    };
    //맨처음 한번
    useEffect(() => {
        getFetchData();
    }, []);

    //tdata가 변경되었을때
    useEffect(() => {
        // if (!tdata) return; 
        console.log(tdata)
        // let tm = tdata.map( item => { return item['사고유형대분류'] });
        let tm = tdata.map( item => item['사고유형대분류']);
        tm = [...new Set(tm)];
        console.log('tm= ', tm)

    }, [tdata]);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <TrafficNav title='대분류' c={['1','2']}/>
            <TrafficNav title='중분류' c={['3','4']}/>
        </div>
    )
}
