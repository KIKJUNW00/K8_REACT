import { useEffect, useState } from "react";
import BoxOfficeTr from "./BoxOfficeTr";

export default function BoxOffice() {
    const [tdata, setTdata] = useState();
    const [trs, setTrs] = useState();

    const getFetchData = () => {
        const apiKey = process.env.REACT_APP_MV_KEY;
        const dt = '20240929';

        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
        url = `${url}key=${apiKey}&targetDt=${dt}`;

        //데이터 가져오기
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
            .catch(err => console.log(err))
            ;

        console.log('apiKey=', apiKey);
        console.log(url);
    }

    const handleTrClick = (item) => {
        console.log(item);
    }

    //맨처음 한번 실행
    useEffect(() => {
        getFetchData();

    }, []);

    //fetch 데이터가 채워지면 
    useEffect(() => {
                    if (!tdata) return;
                    console.log('tdata=', tdata);
                    let tm = tdata.map(item => <BoxOfficeTr
                        handleClick={() => handleTrClick(item)}
                        mv={item}
                        key={item.movieCd} />)
                    setTrs(tm);
    }, [tdata]);

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-md font-bold 
                                     text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                순위
                            </th>
                            <th scope="col" className="px-6 py-3">
                                영화명
                            </th>
                            <th scope="col" className="px-6 py-3">
                                매출액
                            </th>
                            <th scope="col" className="px-6 py-3">
                                관객수
                            </th>
                            <th scope="col" className="px-6 py-3">
                                증감율
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {trs}
                    </tbody>
                </table>
            </div>

        </div>
    )
}