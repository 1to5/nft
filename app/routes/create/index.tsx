
export default function Create() {
  // if (!SignIn) {
  //   return(
  //     <Link>
  //       Sign In
  //     </Link>
  //   )
  // } else {

  // }
  function handleClick() {
    return(
      console.log("clickio LOL")
    )
  }
  return (
    
    <main>
      <div className='min-h-screen bg-blue-100 dark:bg-blue-600'>
        <h1 className='text-4xl pt-8 pl-24 text-gray-900 font-quicksand font-bold dark:text-gray-50 '>
          Create your Item
        </h1>
        <div className='flex mx-auto'>
          <div className='my-auto'>
             
          </div>
          {/* <button 
          onClick={handleClick}
          className='bg-blue-50 shadow-lg opacity-50 dark:bg-blue-500 rounded-xl h-64 w-64 '>
            UPLOAD UR SHIT
          </button> */}
        </div>
      </div>
    </main>
  );
}