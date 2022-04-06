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
        <div className='flex-col items-center'>
          <h1 className='text-4xl font-bold font-quicksand text-gray-50'>
            Discover and Buy your own <br/> NFTs and Digital Properties
          </h1>
          <p className="text-lg pt-6 font-medium font-quicksand text-gray-50">
            Providing convenience to anyone <br/> 
            who wants to declare ownership on <br/> 
            their digital properties.
          </p>
        </div>
        <div className="w-96 h-96 ml-8 rounded-lg bg-gray-50">
          
        </div>
      </div>
    </div>
  )
}
