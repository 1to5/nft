import { Link } from "remix";
import { useOptionalUser } from "~/utils";
import Nav from "./navbar.jsx";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen">
      <Nav />
      <div className='bg-blue-600 h-screen'>

      </div>
    </main>
  );
}
