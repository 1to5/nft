import { Link } from 'remix';
export default function FeaturedNFTsItems ({href, children, id}) {
  return(
    <Link to={`${href}/${id}`}>
      <div className='w-72 h-96 shadow-xl bg-gray-50 dark:bg-gray-50 rounded-xl'>
        <p
        className='text-center pt-12'>{children}</p>
      </div>  
    </Link>
  )
}