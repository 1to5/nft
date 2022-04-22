
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
        <div className='flex mx-auto'>
          <button 
          onClick={handleClick}
          className='bg-blue-50 shadow-lg opacity-50 dark:bg-blue-500 rounded-xl h-64 w-64 '>
            UPLOAD UR SHIT
          </button>
        </div>
      </div>
    </main>
  );
}