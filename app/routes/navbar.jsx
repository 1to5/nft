import {Link} from "remix";
import  {RiAccountCircleLine, RiWallet3Line} from "react-icons/ri";

export default function Nav() {
    return(
        <nav 
        className=" relative w-full flex h-20 bg-blue-50 dark:bg-blue-900">
            <Link 
            to="/" 
            className="inline-flex ml-6 my-auto">
                <div 
                className=' flex-none h-12 w-12 bg-blue-600 dark:bg-blue-300 rounded-full '>
                    
                </div>
                <p 
                className='
                my-auto ml-3 text-xl font-bold font-quicksand text-gray-900 dark:text-blue-50'>
                    Undecided
                </p>
            </Link>
            {/* <label class="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                </span>
                <input className="placeholder:italic placeholder:text-blue-900 block bg-blue-100 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-auto" placeholder="Search..." type="text" name="search"/>
            </label> */}
            <input 
            type="text" 
            placeholder="Search..." 
            className="block ml-32 h-10 w-1/3 font-quicksand font-semibold 
            placeholder:dark:text-gray-50 placeholder:text-gray-900 border-2 dark:bg-blue-500 opacity-80 
            border-black py-2 pl-9 rounded-full focus:outline-none 
            focus:shadow-outline my-auto"
            />
            <div 
            className='absolute right-0 flex mr-16'>
                <LinkItem href="explore">
                    Explore
                </LinkItem>
                <LinkItem href="help">
                    Help
                </LinkItem>
                <LinkItem href="blog">
                    Blogs
                </LinkItem>
                <LinkItem href="create">
                    Create 
                </LinkItem>
                <div className=" my-auto lg:p-3 2xl:p-6 items-center">
                    <Link to="profile">
                        <RiAccountCircleLine className="h-8 w-8 dark:hover:fill-blue-500 dark:fill-blue-300 hover:fill-gray-800 fill-gray-600 " />
                    </Link>
                </div>
                <div 
                className=" my-auto lg:pl-3 2xl:p-6 items-center">
                    <Link 
                    to="wallet">
                        <RiWallet3Line 
                        className="h-8 w-8 dark:hover:fill-blue-500 hover:fill-gray-900 fill-gray-600 dark:fill-blue-300" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

const LinkItem = ({href, children}) => {
    return(
        <Link 
        to={href}
        className=" flex-1 py-6 lg:px-5 2xl:px-10 my-auto font-bold text-gray-600 hover:text-gray-900 dark:hover:text-blue-400 font-quicksand dark:text-blue-300 rounded-md">
            {children}
        </Link>
    )
}

