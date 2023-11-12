import "../components/styles/Dashboard.css";

import Navbar from "../components/organisms/Navbar";
import Measure from "../components/organisms/Measure";
import DarkSection from "../components/organisms/DarkSection";
function Home() {
    return ( 
         <div class="container">
            <Navbar/>
            <Measure/>
            <DarkSection/>
        </div>        
     );
}

export default Home;