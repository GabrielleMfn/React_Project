import React from 'react'
import {assets} from '../assets/assets'
import { Link , NavLink } from 'react-router-dom'

const Navbar = () => {

    const [visibility, setVisibility] = React.useState(false)

  return (

    <div className='flex items-center justify-between py-5 text-black border-b-[1px] border-gray-300 '> 

        <Link to='/'>
        <img src={assets.logo} className='w-36' alt="Logo du site" />
        </Link>

        <ul className='hidden sm:flex gap-5 text-sm text-black-600'>
            < NavLink className='flex flex-col items-center gap-1 hover:underline underline-offset-4' to='/Collection'>
                 <p>Shop</p>
                 <hr className='w-2/4 border-none bg-gray-700 hidden'/> 
            </NavLink>
            < NavLink className='flex flex-col items-center gap-1 hover:underline underline-offset-4'  to='/Onsale'>
                 <p>On Sale</p>
                 <hr className='w-2/4 border-none bg-gray-700 hidden'/> 
            </NavLink>
            < NavLink className='flex flex-col items-center gap-1 hover:underline underline-offset-4' to='/Product'>
                 <p>New Arrival</p>
                 <hr className='w-2/4 border-none bg-gray-700 hidden'/> 
            </NavLink>
            < NavLink className='flex flex-col items-center gap-1 hover:underline underline-offset-4' to='/Login'>
                 <p>Brands</p>
                 <hr className='w-2/4 border-none bg-gray-700 hidden'/> 
            </NavLink>

        </ul>

        <div className='flex gap-2 border-[1px] border-gray rounded-3xl p-2'>
        <label className='cursor-pointer' id='search-icon' htmlFor="search-bar">&#128269;</label>
        <input className='hidden lg:block w-[300px] border-none px-2' type="text" id='search-bar' placeholder='Search product'/>
        </div>

        <div className='flex gap-5'>

            <Link to='/cart'>
            <img className='cursor-pointer' src={assets.cart_icon} alt="cart" />
            {/* <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red text-white aspect square rounded-full text-[8px]'></p> */}
            </Link>

            <div className='group relative'>
                <img className='cursor-pointer' src={assets.profile_icon} alt="cart" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor pointer hover:text-black'>My Profile</p>
                            <p className='cursor pointer hover:text-black'>My Orders</p>
                            <p className='cursor pointer hover:text-black'>Logout</p>
                        </div>
                        
                    </div>

            </div>
            <img className='w-5 cursor-pointer sm:hidden' onClick={()=>setVisibility(true)} src={assets.menu_icon} alt="burger menu" />
        </div>
        <div className={`absolute top-0 right-0 bottom-0  overflow-hidden bg-white transition-all ${visibility ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-500'>
                <div onClick={()=>setVisibility(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="dropdown_icon" />
                    <p className='hover:text-gray-800'>Back</p>

                </div>
                <NavLink className='py-2 pl-6 border hover:text-gray-800' to='/'>Home</NavLink>
                <NavLink className='py-2 pl-6 border hover:text-gray-800' to='/collection'>Shop</NavLink>
                <NavLink className='py-2 pl-6 border hover:text-gray-800' to='/onsale'>On sales</NavLink>
                <NavLink className='py-2 pl-6 border hover:text-gray-800' to='/product'>New arrivals</NavLink>
                <NavLink className='py-2 pl-6 border hover:text-gray-800' to='/login'>Logout</NavLink>

            </div>
        </div>

    </div> 
   
  )
}

export default Navbar