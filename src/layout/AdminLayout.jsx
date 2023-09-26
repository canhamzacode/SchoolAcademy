import { Link, Outlet } from "react-router-dom"
import Logo from "../assets/image/logo.svg"
import  "./layout.css"
import {AiOutlineHome} from "react-icons/ai"
import {BiLogIn} from "react-icons/bi"

const AdminLayout = () => {
  return (
    <div className='grid-container'>
        <div className="sidebar py-[20px] flex flex-col gap-[30px] h-[100vh] bg-red-300 relative">
            <div className="w-[100px] h-[100px] bg-white mx-auto rounded-[50%]">
                <img src={Logo} alt="logo" className="w-full h-full" />
            </div>
            <div className="grid bg-slate-300 gap-[10px]">
                <Link to="/" className="w-full p-[15px] bg-slate-600 border border-r-[4px] border-r-black">
                    <div className="flex gap-[15px]">
                        <AiOutlineHome size={25}/>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="/" className="w-full p-[15px]  ">
                    <div className="flex gap-[15px]">
                        <AiOutlineHome size={25}/>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="/" className="w-full p-[15px]  ">
                    <div className="flex gap-[15px]">
                        <AiOutlineHome size={25}/>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="/" className="w-full p-[15px]  ">
                    <div className="flex gap-[15px]">
                        <AiOutlineHome size={25}/>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="/" className="w-full p-[15px]  ">
                    <div className="flex gap-[15px]">
                        <AiOutlineHome size={25}/>
                        <p>Home</p>
                    </div>
                </Link>
            </div>
            <div className="absolute bottom-[20px] left-[20px]">
            <div className="flex gap-[15px]">
                    <BiLogIn size={25}/>
                    <p>Log Out</p>
                </div>
            </div>
        </div>
        <div className="main p-[20px]">
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout