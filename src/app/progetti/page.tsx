import React from 'react'
import Footer from '../components/Footer/Footer'
import ImageText from '../components/ImageText/ImageText'
import Navbar from '../components/Navbar/Navbar'
import content from 'content.json'
import globalStyles from 'app/page.module.css'

export interface ProjectProps {
    image: string,
    title?: String,
    text: string,
    duration1?: string,
    duration2?: string,
    link?: string,
    linkLabel?: string,
    inverted?: String | Boolean,
    blueCircle?: Boolean
}

const Progetti = () => {

    var projects = content.progetti.projects as []
    return (
        <>
            <Navbar />
            <div className={globalStyles.appBarSpace}>
                <Navbar invisible />
            </div>
            <div>
                {projects.map((info: ProjectProps, index) => (
                    <ImageText
                        key={index}
                        image={info.image}
                        title={info.title}
                        text={info.text}
                        inverted={info.inverted ? info.inverted == "true" : false}
                        duration1={`${info.duration1 ? info.duration1 : ''}`}
                        duration2={`${info.duration2 ? info.duration2 : ''}`}
                        link={`${info.link ? '/progetti/' + info.link : ''}`}
                        linkLabel={`${content.progetti.linksLabel ? content.progetti.linksLabel : ''}`}
                    />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default Progetti