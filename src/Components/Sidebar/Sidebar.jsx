import "./Sidebar.css"
import Logo from "../../assets/Logo.svg"

function Sidebar() {
    return (
        <div className="bg-gray-900 h-screen w-80 shadow-md">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="nav-section">
            <ul className="pt-3">
               <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-4 hover:bg-gray-500 rounded-md mt-4 mb-4"><span><i className="bi bi-house"></i></span><span>Home</span></li> 
               <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-4 hover:bg-gray-500 rounded-md mt-4 mb-4"><span><i className="bi bi-house"></i></span><span>Profile</span></li> 
               <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-4 hover:bg-gray-500 rounded-md mt-4 mb-4"><span><i className="bi bi-house"></i></span><span>Settings</span></li> 
               <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-4 hover:bg-gray-500 rounded-md mt-4 mb-4"><span><i className="bi bi-house"></i></span><span>Transactions</span></li> 
               <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-4 hover:bg-gray-500 rounded-md mt-4 mb-4"><span><i className="bi bi-house"></i></span><span>About</span></li> 
            </ul>
            </div>
        </div>);
}

export default Sidebar