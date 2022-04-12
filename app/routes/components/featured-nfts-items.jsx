export default function FeaturedNFTsItems ({href, children}) {
  return(
    <Link to={href}>
      <div className='w-72 h-96 bg-gray-50 rounded-xl'>
        {children}
      </div>  
    </Link>
  )
}