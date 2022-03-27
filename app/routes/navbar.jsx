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
            <input 
            type="text" 
            placeholder="Search..." 
            className="h-12 w-full bg-blue-300 dark:bg-blue-600 text-blue-50 rounded-full focus:outline-none focus:shadow-outline"
            />
        </nav>
    );
}