import MyListData from './MyListData.json'
import MyListItem from './MyListItem'

export default function MyList() {

    const tags = MyListData.map( item => <MyListItem 
                                        key={item.title}
                                        imgUrl={item.imgUrl}
                                        title = {item.title}
                                        content = {item.content} />);

    return (
        <div className="w-10/12 h-2/3 grid grid-cols-1 lg:grid-cols-2 gap-4">
           {tags}
        </div >
    )
}
