import { Link } from "react-router-dom";

export default function Navbar() {

return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<div className="container">

<Link className="navbar-brand" to="/">
Resume Builder
</Link>

<div>

<Link className="btn btn-outline-light me-2" to="/">
Builder
</Link>

<Link className="btn btn-light" to="/resume">
Resume
</Link>

</div>

</div>

</nav>

);

}