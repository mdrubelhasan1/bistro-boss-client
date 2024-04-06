import banner2 from '../../../assets/home/chef-service.jpg'


const Banner2 = () => {
    return (
        <div style={{ position: 'relative' }}>
            <img src={banner2} alt="" />
            <div style={{
                position: ' absolute',
                // marginTop: '20px',
                // bottom: '20px',
                left:'150px',
                right: '150px',
                textAlign: 'center',
                marginTop: '-260px',
                backgroundColor: 'white',
                color: 'black',
               padding:'40px'
                }}>
            <h4 className='font-semibold'>BISTRO BOSS</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor sint laudantium repudiandae unde sit illo sunt quod veniam eum eius numquam ab labore earum, harum odit voluptates quasi, culpa beatae!</p>
        </div>
        </div >
    );
};

export default Banner2;