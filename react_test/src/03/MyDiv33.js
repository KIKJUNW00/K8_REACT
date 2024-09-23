
// export default function MyDiv33(props) {
export default function MyDiv33({dn1, dn2, dn3}) {
    return (
      <div className="w-6/12 h-2/5
                      flex flex-col justify-center items-center
                      bg-lime-400 text-white font-bold">
        <div className='w-full flex justify-start items-center
                          p-5'>
           {/* {`${props.dname1} > ${props.dname2} > ${props.dname3}`} */}
           {`${dn1} > ${dn2} > ${dn3}`}
        </div>
      </div>
    )
  }
  