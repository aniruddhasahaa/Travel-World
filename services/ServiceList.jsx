import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc:"Stay prepared for your journey with real-time weather updates on our tour website, ensuring you make the most of every destination.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc:"Experience seamless exploration with our expert tour guide feature, offering personalized recommendations and in-depth insights for every destination.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc:"Tailor your perfect adventure with our tour customization feature, allowing you to create personalized itineraries that match your interests and schedule.",
    }
]

const ServiceList = () => {
  return (
    <>
    {serviceData.map((item,index)=> (
            <Col lg='3' key={index}>
                <ServiceCard item={item} />
            </Col>
        ))}
    </>
  )
}

export default ServiceList
