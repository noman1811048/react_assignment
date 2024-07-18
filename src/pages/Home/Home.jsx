import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HostProfile from "../../components/HostProfile/HostProfile";
import ListingOverview from "../../components/Listing Overview/ListingOverview";
import Map from "../../components/Map/Map";
import ReviewSection from "../../components/ReviewSection/ReviewSection";



const Home = () => {
    return (
        <div className="container">
            <Header/>
            <div className="nav-divider"></div>
            <ListingOverview/>
            <hr />
            <Map/>
            <hr />
            <ReviewSection/>
            <hr/>
            <HostProfile/>
            <hr/>
            <Footer/>
        </div>
    );
};

export default Home;