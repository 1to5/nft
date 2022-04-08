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
      <div className='flex mt-10'>
        <div className='flex-col my-auto items-center'>
          <h1 className='text-4xl font-bold font-quicksand text-gray-50'>
            Discover and Buy your own <br/> NFTs and Digital Properties
          </h1>
          <p className="text-lg pt-6 font-medium font-quicksand text-gray-50">
            Providing convenience to anyone <br/> 
            who wants to declare ownership on <br/> 
            their digital properties.
          </p>
          <div className="flex justify-center rounded-lg w-48 bg-blue-300 font-quicksand text-gray-50 mt-10">
            <Link to="/register" className=" py-2 px-8 font-bold">
              Get Started
            </Link>
          </div>
        </div>
        <div className="w-96 h-80 ml-14 rounded-xl bg-gray-50">
          
        </div>
      </div>
    </div>
  )
}
