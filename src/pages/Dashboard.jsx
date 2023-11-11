import "../components/styles/Dashboard.css";

import Navbar from "../components/organisms/Navbar";
import BodyDashboard from "../components/organisms/BodyDashboard";
import DarkSection from "../components/organisms/DarkSection";

function Dashboard() {
    return ( 

    <div class="container">

    <Navbar />
    <BodyDashboard />
    <DarkSection />
    
    </div>

    );
}

export default Dashboard;