import { headerLogo } from "../assets/images";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  
  const [nav,setNav] =useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <nav className=' text-black bg-[#fff] flex justify-between gap-18 p-6 items-center 
    '>

<a href="#">
          <img
              src={headerLogo}
              alt=""
              width={130}
              height={29}
              className="m-0 w-[105px] h-[29px] ml-[-5px]  left-[5%]  "
            />
          </a>

<ul className='hidden md:flex gap-5  relative right-[3%] '>
         {navLinks.map((item) => (
              <li key={item.label} className="justify-evenly">
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg hover:text-blue-300 "
                >
                  {item.label}
                </a>
              </li>
            ))}
                
            </ul>
            {/* <div className=" hidden  md:flex mr-8 text-xl leading-normal font-medium font-montserrat  tip ">
             <a href="/">Sign in</a>
             <span>/</span>
             <a href="/">Explore now</a>
           </div> */}

           <div className="md:hidden z-20 fixed left-[93%]
           " onClick={handleClick}>
{nav ? <IoCloseCircleOutline size={25} color='white ' className="right-[3px]" /> : <RiMenu3Fill size={25} /> }
</div>

           <ul className={`${
    nav ?  'text-white opacity-100 transform translate-x-0  ':'opacity-0 transform translate-y-full '} transition-transform fixed top-0 left-0 w-full h-[120vh] z-10 bg-zinc-900 flex flex-col justify-center items-center    `}  onClick={handleClick}>

{navLinks.map((item) => (
              <li key={item.label} className="p-3 hover:text-blue-300  " >
                <a
                  href={item.href}
                  onClick={handleClick}
                  className="font-montserrat leading-normal text-lg p-3 hover:text-blue-300  "
                >
                  {item.label}
                </a>
              </li>
            ))}
                

    </ul>
            
    </nav>
  );
};

export default Nav;
