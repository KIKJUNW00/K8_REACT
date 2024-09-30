
export default function BoxOfficeTr({handleClick,mv}) {
    return (
        <tr onClick={handleClick}
            className="bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {mv.rank}
            </th>
            <td className="px-6 py-4">
                {mv.movieNm}
            </td>
            <td className="px-6 py-4">
            {parseInt(mv.salesAmt).toLocaleString()}
            </td>
            <td className="px-6 py-4">
                {parseInt(mv.audiCnt).toLocaleString()}
            </td>
            <td className="px-6 py-4 text-right">
                {mv.rankInten > 0 ? <span className="text-red-600 pr-3">▲</span>:
                    mv.rankInten < 0 ? <span className="text-blue-600 pr-3">▼</span> : '-'}
            
            {mv.rankInten != 0 && Math.abs(mv.rankInten)}    
            </td>
        </tr>
    )
}
