import { useEffect, useRef, useState } from "react";
import TailButton1 from "../UI/TailButton1";
import TailCard from "../UI/TailCard";

export default function Festival() {
    //전체 축제 데이터
    const [tdata, setTdata] = useState([]);
    //구 정보
    const [gunm, setGunm] = useState([]);
    //선택된 구정보
    const [selgu, setSelgu] = useState([]);

    // select box제어
    const gu = useRef();

    const getFetchData = async () => {
        const apikey = process.env.REACT_APP_API_KEY;

        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=40&_type=json`;

        console.log(url);

        // fetch(url)
        //   .then(resp => resp.json())
        //   .then(data => console.log(data))
        //   .catch(err => console.error(err)) ;

        const resp = await fetch(url);
        const data = await resp.json();
        console.log("getFetch:", data.getFestivalkr.item);
        setTdata(data.getFestivalkr.item);
    }

    useEffect(() => {
        getFetchData();
    }, []);
    
    //tdata가 채워지면 실행
    useEffect(() => {
       let tm = tdata.map(item => item.GUGUN_NM);
       tm = [...new Set(tm)].sort();
       console.log('tm: ',tm);

       tm = tm.map(item => <option key={item}
                                 value={item}>
                                 {item}
                                 </option>);
       setGunm(tm);
    }, [tdata]);

    return (
       <div className="w-full flex flex-col justify-center items-center">
        <div className="w-10/12 p-5 flex justify-center items-center">
            <select className="w-1/2 form-select"
                ref={gu}
                onChange={handleSelect}>
                <option value=''>-------구를 선택하세요-------</option>
                {gunm}
            </select>
        </div>
       </div>
    )
}
