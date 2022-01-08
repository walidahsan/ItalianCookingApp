import { Link } from "react-router-dom";
import "../../Css/Header.css";
import Home from "./Home";

function Navbar() {
  const navbarlinks = [
    {
      links: ["Home", "Menu", "OurStory", "Contact Us"],
    },
  ];

  //   const links = navbarlinks.map((link, id) => {
  //     return (
  //       <li key={id} className="ul_list">
  //         <Link to={link.links}>{link.links}</Link>
  //       </li>
  //     );
  //   });
  //   console.log(links);

  return (
    <div>
      <nav className="nav_bar">
        <ul className="ul">
          <li className="ul_list">
            <Link to={Home}>Home</Link>
          </li>
          <li className="ul_list">
            <Link to={Home}>Menu</Link>
          </li>{" "}
          <li className="ul_list">
            <Link to={Home}>Our Story</Link>
          </li>{" "}
          <li className="ul_list">
            <Link to={Home}>Contact Us</Link>
          </li>
          {/* {links} */}
        </ul>
        <div>
          <input placeholder="Search" className="Search_field" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
