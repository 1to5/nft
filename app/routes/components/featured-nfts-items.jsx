import { Link } from 'remix';
export default function FeaturedNFTsItems ({href, children}) {
  return(
    <Link to={href}>
      <div className='w-72 h-96 shadow-xl bg-gray-300 dark:bg-gray-50 rounded-xl'>
        <p
        className='text-center '>{children}</p>
      </div>  
    </Link>
  )
}