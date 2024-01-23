import React from 'react'
import Footer from '../components/Footer/Footer'
import ImageText from '../components/ImageText/ImageText'
import Navbar from '../components/Navbar/Navbar'
import content from 'content.json'

interface ImageTextProps {
    image: string,
    title?: String,
    text: string,
    days?: string,
    hours?: string,
    link?: string,
    inverted?: String | Boolean,
    blueCircle?: Boolean
  }

const Progetti = () => {

    var projects = content.progetti.projects as []
    return (
        <>
            <Navbar />
            <div>
                {projects.map((content: ImageTextProps, index) => (
                    <ImageText
                        key={index}
                        image={content.image}
                        title={content.title}
                        text={content.text}
                        inverted={content.inverted ? content.inverted == "true" : false}
                        days={`${content.days ? content.days : ''}`}
                        hours={`${content.hours ? content.hours : ''}`}
                        link={`${content.link ? content.link : ''}`}
                    />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default Progetti