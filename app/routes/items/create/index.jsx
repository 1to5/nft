
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
    
    <main className='min-h-screen bg-blue-100 dark:bg-blue-600'>
      <div className='max-w-screen-lg mx-auto pt-10'>
        <HeadSection/>
        <TopSection/>
      </div>
    </main>
  );
}

function HeadSection() {
  return(
    <div>
      <h1 className='text-4xl  text-gray-900 font-quicksand font-bold dark:text-gray-50 '>
        Create your Item
      </h1>
      <p className='text-sm text-gray-700 pt-4 font-quicksand font-light dark:text-gray-100'>
        <span className='text-l pt-1 text-gray-900 dark:text-gray-50 font-bold'>
          *
        </span>
        Required  
      </p>
    </div>
  )
}

function TopSection() {
  return(
    <div className='flex relative mx-auto mt-12'>
      <div className=''>
        <div className='w-[32rem] mb-8'>
          <label 
          for="name" 
          className='dark:text-gray-50 text-gray-900 font-quicksand font-bold'
          >
            <span 
            className='text-lg pr-1 pt-1 text-red-500 
            dark:text-gray-50 font-quicksand font-bold'>
              *
            </span>
            Name
          </label>
          <input 
          type='text' 
          className='w-full p-2 border-2 border-gray-300 dark:border-gray-700 
          rounded-lg focus:outline-none ease-in duration-200 focus:border-blue-500' 
          
          placeholder='Item Name' 
          id="name"/>
        </div>
        <div className=''>
          <label 
          for="description" 
          className='dark:text-gray-50 text-gray-900 font-quicksand font-bold'
          >
            <span 
            className='text-lg pr-1 pt-1 text-red-500 
            dark:text-gray-50 font-quicksand font-bold'
            >
              *
            </span>
            Description
          </label>
          <input 
          type='text' 

          className='w-full p-2 border-2 border-gray-300 
          dark:border-gray-700 rounded-lg focus:outline-none 
          ease-in duration-200 focus:border-blue-500'

          placeholder='Item Description' 
          id="description"
          />
        </div>
      </div>
      <form className='mt-32 absolute lg:mr-20 right-0'>
        <input
        type="file"
        id="file-upload" hidden
        />
        <label for="file-upload"
        className='bg-blue-50 shadow-lg border-2 border-dotted 
        duration-100 ease-in opacity-50 hover:bg-blue-100 rounded-xl p-32'
        >
          Upload
        </label>
      </form>
    </div>
  )
}



