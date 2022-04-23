
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
          <div className='flex relative mx-auto mt-36'>
            <div className='grid my-auto gap-y-16'>
              <div className='grid grid-cols-1 gap-y-8'>
                <div className='col-span-1'>
                  <label className='text-sm text-gray-700 font-quicksand font-light dark:text-gray-100'>
                    <span className='text-l pt-1 text-gray-900 dark:text-gray-50 font-bold'>
                      *
                    </span>
                    Item Name
                  </label>
                  <input className='w-full py-2 px-3 text-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-gray-500 dark:focus:border-gray-600' type='text' placeholder='Item Name' />
                </div>
                <div className='col-span-1'>
                  <label className='text-sm text-gray-700 font-quicksand font-light dark:text-gray-100'>
                    <span className='text-l pt-1 text-gray-900 dark:text-gray-50 font-bold'>
                      *
                    </span>
                    Item Description
                  </label>
                  <input className='w-full py-2 px-3 text-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-gray-500 dark:focus:border-gray-600' type='text' placeholder='Item Description' />
                </div>
                <div className='col-span-1'>
                  <label className='text-sm text-gray-700 font-quicksand font-light dark:text-gray-100'>
                    <span className='text-l pt-1 text-gray-900 dark:text-gray-50 font-bold'>
                      *
                    </span>
                    Item Price
                  </label>
                  <input className='w-full py-2 px-3 text-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-gray-500 dark:focus:border-gray-600' type='text' placeholder='Item Price' />
                </div>
              {/* <input type='text' className='w-96 p-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500' placeholder='Item Name'/>
              <input type='text' className='w-[30rem] p-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500' placeholder='External Links'/> */}
            </div>
            <div className='mt-16 absolute lg:mr-20 right-0'>
              <input
              type="file"
              id="file-upload" hidden
              />
              <label for="file-upload"
              className='bg-blue-50 shadow-lg border-2 border-dotted opacity-50 dark:bg-blue-500 rounded-xl p-32'
              >Upload</label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}