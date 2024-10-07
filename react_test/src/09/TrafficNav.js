import TailButton from '../UI/TailButton1';

export default function TrafficNav({title, c, sel, setSel}) {
    // const [sel, setSel] = useState();


    const handleBtClick = (item) => {
        setSel(item);
    };


    // const c1 = ['차대사람', '차대차', '차량단독', '철길건널목']
    const bts = c.map(item => (<TailButton
                                key={item}
                                caption={item}
                                color= {item == sel ? 'orange' : 'blue'}
                                ClickHandler= {() => handleBtClick(item)}
                            />));



    return (
        <div className='w-full bg-sky-200 p-2 m-2
                        flex  justify-between items-center'>
            
            <div className='w-1/5 text-2xl font-bold
                            flex justify-between items-center'>
                교통사고 {title}
            </div>
            <div className='flex justify-end items-center'>
                {bts}
            </div>

        </div>
    )
}
