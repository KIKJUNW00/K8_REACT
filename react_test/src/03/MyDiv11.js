import MyDiv21 from './MyDiv21' ;

export default function MyDiv11() {
  const d1 = 'div1';
  const d2 = 'div2';
  const d3 = 'div3';
  return (
    <div className="w-9/12 h-4/5
                    flex flex-col justify-center items-center
                    bg-lime-900 text-white font-bold">
        <div className='w-full flex justify-start items-center
                        p-5 m-2'>
          {d1}
        </div>
        <MyDiv21 dn1 ={d1} dn2={d2} dn3={d3} />
    </div>
  )
}
