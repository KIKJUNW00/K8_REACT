import { useState } from "react";
export default function MyListItem({ imgUrl, title, content }) {

  const [n, setN] = useState(0)

  const likeClick = () => {
    setN(n + 1);
    console.log(n);
  }

  return (
    <div className='w-full h-full
                        border border-gray-300
                        flex justify-center items-center'>
      <div className='w-1/3 flex justify-start items-start '>
        <img src={imgUrl} alt={title} />
      </div>
      <div className='w-2/3 p-3 h-full flex flex-col justify-between items-center'>
        <div className="flex flex-col h-3/4">
          <div className="text-2xl font-bold mb-2">
            {title}
          </div>
          <div className="text-sm">
            {content}
          </div>
        </div>
        <div className="flex h-1/4 w-full
                          justify-end items-end">
          <span className="cursor-pointer  hover:bg-amber-200 active:bg-amber-600
                           rounded-full"
            onClick={likeClick}>
            ❤️
          </span>

          <span className="mx-2 font-bold">좋아요</span>
          <span>
            {n}
          </span>
        </div>
      </div>
    </div>
  )
}