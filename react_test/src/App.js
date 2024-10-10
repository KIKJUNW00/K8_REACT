import './App.css';
import { FaHome } from "react-icons/fa";
// import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv11';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import FoodMain from './06/FoodMain';
// import BoxOffice from './07/BoxOffice';
// import Traffic from './09/Traffic';
// import MyRef from './10/MyRef';
// import Gallery from './11/Gallery';
import Festival from './12/Festival';

function App() {
  return (
    <div className="w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center">

      <header className="w-full h-20
                        flex justify-between items-center
                        bg-slate-200">
        <p className='text-2xl font-bold p-5'>
          K-DIGITAL 8th
        </p>
        <p className='text-4xl font-bold p-5'>
          <FaHome />
        </p>
      </header>
      <nav className=''>
      </nav>
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
        <Festival />

      </main>

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
