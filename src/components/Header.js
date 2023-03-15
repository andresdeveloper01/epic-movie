import Search from "./Search"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className=" bg-neutral-900 sticky top-0 w-full">
      <div className="max-w-[1200px] mx-auto flex items-center" >
        <Link to="/">
          <img className="w-16" src={logo} alt="logo de epic movie" />
        </Link>
        <Search />
      </div>
    </div>
  )
}

export default Header