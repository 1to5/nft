const GridItem = ({href, children, thumbnail, title}) => {
    return(
        <Link
        to={href}
        className='align-center'>
            <div className='cursor-pointer'>
                <img
                src={thumbnail}
                alt={title}
                className='w-full h-64 object-cover rounded-lg'
                />
                <p className='text-xl font-bold font-quicksand text-blue-50'>
                    {title}
                </p>
                <p className='text-sm font-quicksand text-gray-50'>
                    {children}
                </p>
            </div>
        </Link>
    )
}

const BlogGridItem = ({id, title, children, thumbnail}) => {
    return(
        <Link
        to={`/blog/${id}`}
        className='align-center'>
           <img src={thumbnail} /> 
        </Link>
    )
}