import { Link, Outlet } from "react-router-dom";

function About() {
    return (
      <div className="container">
          <h1>About</h1>
          <p>This is demo website about react-router-dom library</p>
          <ul>
            <li><Link to='company'>Company</Link></li>
            <li><Link to='team'>Team</Link></li>
          </ul>
          <Outlet />
      </div>
    );
  }
  
  export default About;