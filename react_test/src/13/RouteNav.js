import TailButton1 from "../UI/TailButton1";
import { useNavigate } from "react-router-dom";

export default function RouteNav() {
  const navigate = useNavigate();

  return (
    <div className="w-full grid grid-cols-3 gap-2 mt-10">

        <TailButton1 caption = '홈'
                      color = 'blue'
                      ClickHandler = {() => navigate('/')} 
                      size = 'w-full'/>
        <TailButton1 caption = 'page1'
                      color = 'blue'
                      ClickHandler = {() => navigate('/p1')}  
                      size = 'w-full'/>
        <TailButton1 caption = 'page2'
                      color = 'blue'
                      ClickHandler = {() => navigate('/p2')} 
                      size = 'w-full'/>
    </div>
  )
}
