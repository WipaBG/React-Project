import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};


export default function About() {
    return (
        <section className="about">
            <div className='info'>
                <h1>Villa Alexa</h1>
                <p>Villa Alexa offers apartaments and studio with free WiFi and private parking
                    All the apartaments and studio have a balcony, AC, flat-screen TV, bathroom and free bathroom applicances
                    A fully equiped kitchen box with a fridge and eletric jug</p>

            </div>
            <div className='carousel'>
                <Slider {...settings}>
                    <div><img src="../../../public/img/vase.png" alt="1" /></div>
                    <div><img src="../../../public/img/sofa.png" alt="2" /></div>
                    <div><img src="../../../public/img/sofa2.jpg" alt="3" /></div>
                    <div><img src="../../../public/img/garden.png" alt="4" /></div>
                    <div><img src="../../../public/img/door.jpg" alt="5" /></div>
                    <div><img src="../../../public/img/kiss2.png" alt="6" /></div>
                </Slider>
            </div>
        </section>
    )
}