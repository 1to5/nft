import {Link} from 'remix';

const NotFound = () => {
    return(
        <div className='align-center '>
            <h1 className='font-quicksand font-bold text-2xl'>404 | The Page that you were looking for was not found</h1>
            <Link to='/' className='text-blue-500 font-bold'>
                Return to Home
            </Link>
        </div>
    )
}

export default NotFound;