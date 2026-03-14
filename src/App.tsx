import { Routes, Route } from "react-router-dom";
import Builder from "../src/pages/Builder";
import Resume from "../src/pages/Resume";
import Navbar from "../src/components/Navbar";
import { ResumeProvider } from "./context/ResumeContext";

function App() {

return (

<ResumeProvider>

<Navbar/>

<Routes>

<Route path="/" element={<Builder />} />

<Route path="/resume" element={<Resume />} />

</Routes>

</ResumeProvider>

);


}

export default App;