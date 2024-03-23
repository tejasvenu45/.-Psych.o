import Zoom from 'react-reveal/Zoom';
import { Outlet, Link } from "react-router-dom";

import MainLogo from "./icons/MainLogo.svg"
function Header() {
    return (
        <>
            <div className='flex flex-row gap-96'>
                <div className='border-2 w-18 h-20 border-blue-600 bg-purple-700 flex flex-col items-center justify-center m-10 mr-48'>
                    <img src={MainLogo} alt="MainLogo" className='w-16 h-18' />
                </div>
                <div className="flex flex-row justify-center items-center pt-4">
                    <Zoom>

                        <div id="Navbar" className="flex flex-row items-center justify-center bg-gray-900 w-96 h-24 p-4 border-2 border-purple-900 rounded-3xl ">
                            <div className="flex-grow"></div>
                            <button className="btn btn-info justify-center ml mr-12 w-20 text-xl hover:scale-150 ">Home</button>
                            <button className="btn btn-success justify- w-24 mr-8 text-xl hover:scale-150">Events</button>
                            <button className="btn btn-warning justify-end ml-2 text-xl hover:scale-150">Blogs</button>
                        </div>
                    </Zoom>
                </div>
                <div className="flex flex-row justify-center items-center pt-4">
                    <Zoom>

                        <div id="Navbar" className="flex flex-row items-center justify-center bg-gray-900 w-64 h-24 p-4 border-2 border-purple-900 rounded-3xl ">
                            <button className="btn btn-active btn-primary mr-8 text-xl hover:scale-150"> Login</button>
                            <button className="btn btn-active btn-secondary text-xl hover:scale-150">Signup</button>

                        </div>
                    </Zoom>
                </div>
            </div>
        </>
    );
}

export default Header;