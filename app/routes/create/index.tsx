
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
      <div className='min-h-screen bg-blue-600'>
        <div className='flex mx-auto'>
          <button 
          onClick={handleClick}
          className='bg-blue-500 rounded-xl h-96 w-96 '>
            
          </button>
        </div>
      </div>
    </main>
  );
}