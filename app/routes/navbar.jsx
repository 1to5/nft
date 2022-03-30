import {Link} from "remix";

export default function Nav() {
    return(
        <nav 
        className="flex h-20 bg-blue-600 dark:bg-blue-300">
            <Link 
            to="/" 
            className="inline-flex ml-6 my-auto">
                <div 
                className=' flex-none h-12 w-12 bg-blue-300 rounded-full '>
                    
                </div>
                <p 
                className='
                my-auto ml-3 text-xl font-bold font-quicksand text-blue-50'>
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
            className="block ml-32 h-10 w-1/3 font-quicksand placeholder:text-gray-50 bg-blue-500 border-black text-[#FFFFFF] py-2 pl-9 rounded-full focus:outline-none focus:shadow-outline my-auto"
            />
        </nav>
    );
}