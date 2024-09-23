import MyDiv33 from "./MyDiv33";


// export default function MyDiv21(props) {
export default function MyDiv21({dn1, dn2, dn3}) {
  return (
    <div className='w-6/12 h-3/6
                    flex flex-col justify-center items-center
                    bg-lime-700 text-white font-bold'>

      <div className='w-full flex justify-start items-center
               p-5 m-2'>
          {/* {`${props.dname1} > ${props.dname2}`} */}
          {`${dn1} > ${dn2}`}
      </div>
      <MyDiv33 dn1={dn1} dn2={dn2} dn3={dn3}/>
    </div>
  )
}
