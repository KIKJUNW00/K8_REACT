import './App.css';
import { FaHome } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import MyClock from './02/MyClock';
import MyDiv11 from './03/MyDiv11';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';
// import BoxOffice from './07/BoxOffice';
import Traffic from './09/Traffic';
// import MyRef from './10/MyRef';
import Gallery from './11/Gallery';
import Festival from './12/Festival';
// import RouteMain from './13/RouteMain';
import Fcst from './14/Fcst';
import FcstList from './14/FcstList';
import RMain from './15/RMain';
import Rest from './16/Rest';



function App() {
  return (
    <div className="w-full xl:w-10/12 h-screen mx-auto
    flex flex-col justify-center items-center">

      <BrowserRouter>
        <header className="w-full h-20
                        flex justify-between items-center
                        bg-slate-200">
          <p className='text-2xl font-bold p-5'>
            K-DIGITAL 8th
          </p>
          <ul className='flex justify-center items-center text-xl font-bold'>
            <li className='mx-4 p-2 hover:bg-red-600 hover:text-stone-50 rounded-md'>
              <Link to='/'>시계</Link>
            </li>
            
            <li className='mx-4 p-2 hover:bg-orange-400 hover:text-stone-50 rounded-md'>
            <Link to='/lotto'>로또생성자</Link>
            </li>
            
            <li className='mx-4 p-2 hover:bg-yellow-400 hover:text-stone-50 rounded-md'>
            <Link to='/foodmain'>푸드뱅크</Link>
            </li>
            
            <li className='mx-4 p-2 hover:bg-green-600 hover:text-stone-50 rounded-md'>
            <Link to='/traffic'>교통사고</Link>
            </li>

            <li className='mx-4 p-2 hover:bg-blue-600 hover:text-stone-50 rounded-md'>
            <Link to='/gallary'>관광</Link>
            </li>

            <li className='mx-4 p-2 hover:bg-violet-600 hover:text-stone-50 rounded-md'>
            <Link to='/festival'>축제</Link>
            </li>

            <li className='mx-4 p-2 hover:bg-pink-500 hover:text-stone-50 rounded-md'>
            <Link to='/fcst'>일기예보</Link>
            </li>

            <li className='mx-4 p-2 hover:bg-gray-600 hover:text-stone-50 rounded-md'>
            <Link to='/fcstlist'>일기예보항목</Link>
            </li>

            <li className='mx-4 p-2 hover:bg-gray-600 hover:text-stone-50 rounded-md'>
            <Link to='/rest'>Restfull</Link>
            </li>

          </ul>

          <p className='text-4xl font-bold p-5'>
          <Link to='/'><FaHome /></Link>
          </p>
        </header>

        <main className='w-full flex-grow
                        flex flex-col items-center
                        bg-white overflow-y-auto'>
          {/* <MyDiv1 /> */}
          {/* <MyClock /> */}
          {/* <MyList /> */}
          {/* <Lotto /> */}
          {/* <FoodMain /> */}
          {/* <BoxOffice /> */}
          {/* <Traffic /> */}
          {/* <MyRef /> */}
          {/* <Gallery /> */}
          {/* <Festival /> */}
          {/* <RouteMain /> */}
          <Routes>
            <Route path="/" element={<MyClock />}></Route>
            <Route path="/lotto" element={<Lotto />}></Route>
            <Route path="/foodmain" element={<FoodMain />}></Route>
            <Route path="/traffic" element={<Traffic />}></Route>
            <Route path="/gallary" element={<Gallery />}></Route>
            <Route path="/festival" element={<Festival />}></Route>
            <Route path="/fcst" element={<Fcst />}></Route>
            <Route path="/fcstlist" element={<FcstList />}></Route>
            <Route path="/mvdiv" element={<MyDiv11 />}></Route>
            <Route path="/rmain" element={<RMain />}></Route>
            <Route path="/rest" element={<Rest />}></Route>
            
          </Routes>


        </main>
      </BrowserRouter>
      <footer className="w-full h-20
                         flex justify-center items-center
                         bg-black text-white">


        <p>
          2021 K-DIGITAL. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
