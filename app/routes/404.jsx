import {Link} from 'remix';
import Nav from './navbar.jsx'

export default function NotFound () {
    return(
        <div className='align-center '>
            <Nav/>
            <h1 className='font-quicksand font-bold text-2xl'>404 | Page Not Found</h1>
            <Link to='/' className='text-blue-500 font-bold no-underline bg-blue-300 rounded-lg'>
                Return to Home
            </Link>
        </div>
    )
}

