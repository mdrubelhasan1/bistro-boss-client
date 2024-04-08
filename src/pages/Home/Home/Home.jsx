import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Banner2></Banner2>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;