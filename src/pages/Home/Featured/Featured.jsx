import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white">
            <SectionTitle subHeading='Check it out' heading='Featured item'></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-30 py-20 px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nisi placeat, ipsum nulla, eligendi a omnis inventore nam similique eius, quibusdam dolores voluptatum voluptate nostrum iusto eveniet minus perspiciatis corporis ut consequuntur veritatis atque quisquam. Architecto perferendis vitae ipsa nulla praesentium quam itaque officia aspernatur. Animi voluptas aspernatur dolorum cum!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;