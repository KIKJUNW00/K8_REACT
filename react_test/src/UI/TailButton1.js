
export default function TailButton1({caption, color, ClickHandler, size}) {
    const btColor = {
      'blue': ' bg-sky-400',
      'orange': 'bg-orange-600',
      'lime' : 'bg-lime-800'
    };
  
    const btColorHover = {
      'blue': ' hover:bg-sky-800',
      'orange': 'hover:bg-orange-800',
      'lime' : 'hover:bg-lime-600',
      
    };
    return (
      <button className={`inline-flex justify-center items-center
                         p-3 mx-3
                         ${btColor[color]} text-gray-600 font-bold
                         ${btColorHover[color]} hover:text-white
                         rounded-md
                         ${size ? size : ''}
                         `}
              onClick={ClickHandler}>
            {caption}
      </button>
    )
  }
  