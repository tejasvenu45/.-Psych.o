import Zoom from 'react-reveal/Zoom';


function Header() {
    return (

        <div className="flex flex-col justify-center items-center pt-4">
            <zoom>
            <div id="Navbar" className=" flex flex-row  items-center justify-center bg-gray-900 w-96 h-24 p-4 border-2 border-purple-900 rounded-3xl ">
                <button className="btn btn-info justify-center mr-4 w-20 text-xl hover:scale-150 ">Home</button>
                <button className="btn btn-success justify-center ml-2 w-24 mr-4 text-xl hover:scale-150">Events</button>
                <button className="btn btn-warning justify-end ml-2 text-xl hover:scale-150">Blogs</button>
             

            </div>
            </zoom>
        </div>  
    );
}

export default Header;