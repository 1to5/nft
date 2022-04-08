import { Link } from "remix";
import { useOptionalUser } from "~/utils";
import Nav from "./navbar.jsx";
import '../styles/index.css'

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative bg-blue-600 min-h-screen">
      <Nav />
      <HomePage/>
    </main>
  );
}

function HomePage() {
  return (
    <div className='bg-blue-600 max-w-screen-lg mx-auto'>
      <div className='relative flex mt-10'>
        <div className='flex-col my-auto items-center'>
          <h1 className='text-4xl font-bold font-quicksand text-gray-50'>
            Discover and Buy your own <br/> NFTs & Digital Properties
          </h1>
          <p className="text-lg pt-6 font-medium font-quicksand text-gray-50">
            Providing convenience to anyone <br/> 
            who wants to declare ownership on <br/> 
            their digital properties.
          </p>
          <div className="flex justify-center mt-10 w-80">
            <Link 
            to="/create" 
            className="relative ease-in duration-100 item-left mr-4 
            rounded-lg w-40 border-2 bg-blue-300 border-blue-300 
            hover:bg-blue-200 font-quicksand text-gray-100 text-center 
            hover:text-gray-50 py-2 font-bold">
              Create
            </Link>
            <Link 
            to="/explore" 
            className="ease-in duration-100 item-center rounded-lg
             w-40 border-blue-300 border-2 bg-gray-800 hover:bg-gray-700
              font-quicksand text-blue-400 py-2 text-center font-bold">
              Discover
            </Link>
          </div>
        </div>
        <div className="w-96 h-80 top-0 right-0 absolute rounded-xl bg-gray-50 ">
         
        </div>
      </div>
      <div>
        <FeaturedNFTs/>
      </div>
    </div>
  )
}

const FeaturedNFTs = () => {
  return(
    <div 
    className='mx-auto mt-32'>
      <div 
      className='text-center h-32 w-full'>
        <h1 
        className='text-2xl font-quicksand font-black text-gray-50 '>
          Today's Top NFTs
        </h1>
      </div>
      <div className='flex'>

      </div>
    </div>
  )
}


const FeaturedNFTsItems = () => {
  return(
    <div className='w-80 h-96'>

    </div>  
  )
}