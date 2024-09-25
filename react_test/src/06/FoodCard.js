import bank from './img/bank.png';
import market from './img/market.png';
import busan from './img/busan.png';

export default function FoodCard({ 사업장명, 운영주체명 }) {
    const obj = {
        "구분": "광역지원센터",
        "시군구": "부산시",
        "사업장명": "부산광역푸드뱅크",
        "신고기준": "당연",
        "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
        "연락처(대표번호)": "051-791-1377",
        "팩스번호": "051-714-3096",
        "운영주체 분류": "1. 사회복지법인",
        "운영주체명": "부산광역시사회복지협의회"
    }

    return (
        <div className='flex justify-center items-center 
                        w-full h-full 
                        border border-gray-300
                        m-5'>
            <div className='pr-5'>
                <img src={busan} alt="busan" />
            </div>

            <div className='h-full
                            flex-col'>
                
                    <div className='text-2xl font-bold pt-10'>
                        {obj["사업장명"]}
                    </div>

                    <div>
                        {obj["운영주체명"]}
                    </div>

                    <div>
                        {obj["사업장 소재지"]}
                    </div>

                    <div className='w-full h-7          
                                border border-gray-600 bg-gray-600'>

                    </div>
            </div>
        </div>
    )
}
