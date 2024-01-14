import React from 'react'
import Footer from '../components/Footer/Footer'
import ImageText from '../components/ImageText/ImageText'
import Navbar from '../components/Navbar/Navbar'

const Progetti = () => {
    return (
        <>
            <Navbar />
            <div>
                <ImageText
                    image="/assets/projects/mose.jpg"
                    title="MOSE VENEZIA"
                    text={
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
                    }
                />
                <ImageText
                    image="/assets/projects/venezia-lavori.jpg"
                    title="PIAZZA SAN MARCO VENEZIA"
                    text={
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
                    }
                    invertOrder={true}
                />
            </div>
            <Footer />
        </>
    )
}

export default Progetti