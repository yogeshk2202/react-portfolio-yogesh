import logo from "../assets/yogeshlogo1.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; // Correct import for Twitter
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return( 
    <nav className="bg-black mb-0.5 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-25 w-40"/> 
      </div> 
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/yogesh-k-770a76233/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yogeshk2202" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/___yogexh._.k/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </nav>
  ); 
};

export default Navbar;
