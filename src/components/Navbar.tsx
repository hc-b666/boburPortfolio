import { Link, NavLink } from "react-router-dom";
import { TbBrandGithub, TbBrandLinkedin, TbBrandLeetcode, TbSun, TbMoonStars } from "react-icons/tb";
import { useTheme } from "../context/ThemeProvider";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <nav className="container text-slate-700 w-full py-5 flex items-center justify-between bg-white dark:bg-black">
    
      <NavLink to="/">
        <h2 className="dark:hover:text-white duration-500 text-xl">&lt;bobur/&gt;</h2>
      </NavLink>
    
      <div className="flex items-center gap-5">

        <NavLink to="/projects" className="dark:hover:text-white hover:underline duration-500">
          Projects
        </NavLink>
        
        <Link to="https://github.com/hc-b666">
          <TbBrandGithub className="dark:hover:text-white duration-500 text-4xl w-6 h-6" />          
        </Link>
        
        <Link to="https://leetcode.com/u/hc-b666/">
          <TbBrandLeetcode className="dark:hover:text-white duration-500 text-4xl w-6 h-6" />          
        </Link>

        <Link to="https://www.linkedin.com/in/muhammadbobur-abdukarimov-131362243/">
          <TbBrandLinkedin className="dark:hover:text-white duration-500 text-4xl w-6 h-6" />          
        </Link>

        <button onClick={toggleTheme}>
          {theme === "dark" ? (
            <TbSun className="dark:hover:text-white duration-500 text-4xl w-6 h-6" />
          ) : (
            <TbMoonStars className="dark:hover:text-white duration-500 text-4xl w-6 h-6" />
          )}
        </button>
      
      </div>
    
    </nav>
  );
};
