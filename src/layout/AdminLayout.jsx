import { Link, Outlet } from "react-router-dom"
import Logo from "../assets/image/logo.svg"
import  "./layout.css"
import {AiOutlineHome, AiOutlineUser, AiOutlineUserAdd, AiOutlineToTop, AiOutlineMail} from "react-icons/ai"
import { IoIosPaper } from "react-icons/io"
import {BiLogIn, BiSolidKey} from "react-icons/bi"
import Desk from "../assets/image/desk.jpg"

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
                        <AiOutlineUser size={25}/>
                        <p>User Profiles</p>
                    </div>
                </Link>
                <Link to="/" className="w-full p-[15px]  ">
                    <div className="flex gap-[15px]">
                        <AiOutlineUserAdd size={25}/>
                        <p>Add User</p>
                    </div>
                </Link>
                <Link to="/" className="w-full p-[15px]  ">
                    <div className="flex gap-[15px]">
                        <IoIosPaper size={25}/>
                        <p>View Results</p>
                    </div>
                </Link>
                <Link to="/" className="w-full p-[15px]  ">
                    <div className="flex gap-[15px]">
                        <AiOutlineToTop size={25}/>
                        <p>Promote Results</p>
                    </div>
                </Link>
                <Link to="/" className="w-full p-[15px]  ">
                    <div className="flex gap-[15px]">
                        <AiOutlineMail size={25}/>
                        <p>Broadcast Mail</p>
                    </div>
                </Link>
                <Link to="/" className="w-full p-[15px]  ">
                    <div className="flex gap-[15px]">
                        <BiSolidKey size={25}/>
                        <p>Reset Password</p>
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
        <div className="main w-full min-h-[100vh] bg-gradient-to-b from-opacity-60 via-black via-opacity-60 to-transparent gap-[20px] "
        style={{
            backgroundImage: `url(${Desk})`,
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
        >
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout