import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplayspeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slideToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slideToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    }

  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>Booking my dream vacation was a breeze with this website! 
            The user-friendly interface and great deals made planning 
            everything stress-free and enjoyable. I loved the customization 
            options and seamless booking process. Thanks to this site, I had 
            the perfect itinerary tailored to my preferences!</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h5 className="mb-0 mt-03">Dibakor Roy</h5>
                    <p>Customer</p>
                </div>
            </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Booking my dream vacation was a breeze with this website! 
            The user-friendly interface and great deals made planning 
            everything stress-free and enjoyable. </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h5 className="mb-0 mt-03">ECE 20 boys</h5>
                    <p>Customer</p>
                </div>
            </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>I loved the customization options and seamless booking process. 
            Thanks to this site, I had the perfect itinerary tailored to my preferences!</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h5 className="mb-0 mt-03">Syndicate of ECE</h5>
                    <p>Customer</p>
                </div>
            </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>Booking my dream vacation was a breeze with this website! 
            The user-friendly interface and great deals made planning 
            everything stress-free and enjoyable. I loved the customization 
            options and seamless booking process. Thanks to this site, I had 
            the perfect itinerary tailored to my preferences!</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h5 className="mb-0 mt-03">Tajim Dong Dong</h5>
                    <p>Customer</p>
                </div>
            </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Booking my dream vacation was a breeze with this website! 
            The user-friendly interface and great deals made planning 
            everything stress-free and enjoyable. </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h5 className="mb-0 mt-03">ECE 20 boys</h5>
                    <p>Customer</p>
                </div>
            </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>I loved the customization options and seamless booking process. 
            Thanks to this site, I had the perfect itinerary tailored to my preferences!</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h5 className="mb-0 mt-03">Syndicate of ECE</h5>
                    <p>Customer</p>
                </div>
            </div>
    </div>
  </Slider>
}

export default Testimonials
