import "../components/styles/Dashboard.css";

import Navbar from "../components/organisms/Navbar";
import Measure from "../components/organisms/Measure";

function Home() {
    return ( 
         <div class="container">
            <Navbar/>
            <Measure/>
        </div>        
     );
}

export default Home;