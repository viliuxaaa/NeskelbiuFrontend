import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgUser } from "react-icons/cg";

function NavBar() {
    const hover = "hover:text-textHover transitions text-text";
    const Hover = ({isActive}) => (isActive ? "text-custom" : hover)
    return (
        <>
        <div className="bg-main shadow-md sticky top-0 z-50">
            <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
                {/* Logo */}
                <div className="grid grid-cols-2">
                    <div className="col-span-2 flex">
                        <Link to="/">
                            <img 
                            src="/images/logo.png" 
                            alt="logo" 
                            className="w-full h-12 object-contain" 
                            />
                        </Link>
                    </div>
                    {/* search Form */}
                    <div className="col-span-3">
                        <form  className="lg:w-full w-3/5 border border-text text-sm bg-background rounded flex-btn gap-4">
                            <button 
                                type="submit" 
                                className="bg-subMain w-12 flex-colo h-12 rounded text-text"
                            >
                                <FaSearch />  
                            </button>
                            <input
                                type="text" 
                                placeholder="Search Movie Name from here"
                                className="font-medium placeholder:text-text text-sm w-11/12 h-12 bg-transparent border-none px-2 text-text" 
                            />
                        </form>
                    </div>
                </div>
                {/* menus */}
                <div className="mx-10 col-span-3 font-semibold text-sm xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
                  <NavLink to="/upload" className={Hover}>Add Poster</NavLink>  
                  <NavLink to="/posters" className={Hover}>Skelbimai</NavLink>  
                  <NavLink to="/view" className={Hover}>Single</NavLink>
                  <NavLink to="/dashboard" className={Hover}>Dash</NavLink>   
                  <NavLink to="/login" className={Hover}>
                    <CgUser className="w-8 h-8" />
                  </NavLink> 
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar
