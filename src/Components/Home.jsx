import CarouselSlide from "./CarouselSlide";
import CarRemote from "./CarRemote";
import CarWalks from "./CarWalk";
import Footer from "./Footer";
import TopSlide from "./TopSlide";
import Trial from "./Trial";

export default function Home()
{

    return(
        <div>

<TopSlide />
    
 {/* <Trial /> */}
    <CarouselSlide />
    
    <CarRemote />
    
    <CarWalks />
    {/* <CarWalk /> */}

<Footer />
        </div>
    )
}