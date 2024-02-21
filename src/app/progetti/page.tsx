import React from 'react'
import Footer from '../components/Footer/Footer'
import ImageText from '../components/ImageText/ImageText'
import Navbar from '../components/Navbar/Navbar'
import content from 'content.json'
import globalStyles from 'app/page.module.css'
import ScrollingText from 'app/components/ScrollingText/ScrollingText'
import Space from 'app/components/Space/Space'
import BlueTextCta from 'app/components/BlueTextCta/BlueTextCta'

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
            <ScrollingText text={content.progetti.title} />
            <Space />
            <div>
                {projects.map((info: ProjectProps, index) => (
                    <>
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
                        <Space />
                    </>
                ))}
            </div>
            <Space size={"big"} />
            <Space size={"big"} />
            {/*
            can be restored setting:
            
            "moreInfo": "VUOI VISUALIZZARE\nPIÙ PROGETTI?",
            "moreInfoCta": "CARICA",
            "moreInfoLink": "/prova",
            
            under "progetti" object in content.json
        
            <BlueTextCta text={content.progetti.moreInfo} label={content.progetti.moreInfoCta} link={content.progetti.moreInfoLink} />
            <Space size={"big"} />
            <Space size={"big"} /> */}
            <Space size={"big"} />
            <Footer />
        </>
    )
}

export default Progetti