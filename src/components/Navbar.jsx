import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-6 px-[5%] bg-black">
      <h1 className="logo text-white text-[2rem] font-bold cursor-pointer transition-all">
        DEROSA'S<span className="text-[#d4af37] ml-2">MOTORS</span>
      </h1>

      <nav>
        <ul className="flex list-none items-center gap-8">
          <li>
            <Link
              to="/"
              className="text-white text-lg hover:text-[#d4af37] hover:uppercase transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/carros"
              className="text-white text-lg hover:text-[#d4af37] hover:uppercase transition-all"
            >
              Carros
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
