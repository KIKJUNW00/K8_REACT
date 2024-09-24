
export default function TailBall({n}) {
    

    const ballcolor =  {
        'b0':'bg-red-800',
        'b1':'bg-green-800',
        'b2':'bg-blue-800',
        'b3':'bg-yellow-800',
        'b4':'bg-purple-800'
    }

    return (
        <div className={`w-12 h-12 m-2
                        flex justify-center items-center
                        rounded-full
                        ${ballcolor['b'+Math.floor(n / 10)]}
                        text-white font-bold text-2xl`}>
            {n}
        </div>
    )
}
