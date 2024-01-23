import React from 'react'
import Footer from '../components/Footer/Footer'
import ImageText from '../components/ImageText/ImageText'
import Navbar from '../components/Navbar/Navbar'
import content from 'content.json'

const Progetti = () => {

    var projects = content.progetti.projects as []
    return (
        <>
            <Navbar />
            <div>
                {projects.map((content, index) => (
                    <ImageText
                        image={content.image}
                        title={content.title}
                        text={content.text}
                        invertOrder={`${content.inverted ? content.inverted == "true" : ''}`}
                        days={`${content.days ? content.days : ''}`}
                        hours={`${content.hours ? content.hours : ''}`}
                        moreInfoLink={`${content.link ? content.link : ''}`}
                    />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default Progetti