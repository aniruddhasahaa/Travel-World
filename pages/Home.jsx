import React from 'react'
import '../styles/home.css'
import { Container, Row, Col  } from 'reactstrap'

import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/Subtitle'

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGalley from '../components/Image-gallery/MasonryImagesGalley'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return <>
  
  {/* === hero section start === */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='hero_content'>
            <div className="hero_subtitle d-flex align-items-center">
              
              <h5 className='hero_content_subtitle'>Know Before You Go</h5>
              <img src={worldImg} alt="" />  
            </div>
            <h1>Traveling opens the door to creating  
              <span className="highlight"> Memories</span></h1>
              <p>Traveling opens your mind to new cultures, experiences, 
                and perspectives, offering a chance to explore the world 
                beyond your everyday routine. It enriches your life with 
                unforgettable memories and personal growth.</p>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box mt-4">
            <video src={heroVideo} alt="" controls />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col>
        <SearchBar/>
      </Row>
    </Container>
  </section>
  {/* === hero section start === */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
          <h5 className='services_subtitle'>What We Service</h5>
          <h2 className='services_title'>We offer our best service</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
    {/* === featured tour section start === */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
          <h5 className='featured_tour_subtitle'>Explore</h5>
          <h2 className='featured_tour_title'>Our Featured Tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row> 
      </Container>
    </section>

    {/* === experience section start === */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience-content">
            <h5 className='featured_tour_subtitle'>Experience</h5>
              {/* <Subtitle subtitle={"Experience"}/> */}

              <h2>With our all experience <br /> we will serve you</h2>
              <p>Effortlessly plan your next adventure with our tourist <br />
              booking website, offering easy access to the best deals on tours, accommodations, and experiences</p>
            </div>
            <div className="counter_wrapper d-flex align-items-center gap-5">
              <div className="counter_box">
                <span>120+</span>
                <h6>Successfull Trip</h6>
              </div>
              <div className="counter_box">
                <span>10+</span>
                <h6>Regular Client</h6>
              </div>
              <div className="counter_box">
                <span>2+</span>
                <h6>Years Experience</h6>
              </div>
            </div>
            </Col>
            <Col lg='6'>
            <div className="experience_img">
              <img src={experienceImg} alt="" />
            </div>
            </Col>
          
        </Row> 
      </Container>
    </section>

    {/* === Gallary section start === */}

    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <h5 className='featured_tour_subtitle'>Gallery</h5>
          <h2 className="gallery_title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGalley/>
          </Col>
        </Row>
      </Container>
    </section>

    {/* === testimonial section start === */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <h5 className='featured_tour_subtitle'>Fan's Love</h5>
          <h2 className="testimonial_title"> What our fan's say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>

    <Newsletter />

  </>
}

export default Home
