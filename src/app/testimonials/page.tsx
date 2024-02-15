import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import globalStyles from 'app/page.module.css'
import content from 'content.json'
import ScrollingText from 'app/components/ScrollingText/ScrollingText'
import TestimonialQuote from 'app/components/TestimonialQuote/TestimonialQuote'
import Space from 'app/components/Space/Space'

const Testimonials = () => {
  return (
    <>
      <Navbar />
      <div className={globalStyles.appBarSpace}>
        <Navbar invisible />
      </div>
      <ScrollingText text={content.testimonials.title} />
      <Space size='big' />
      {content.testimonials.people.map((person, index) => (
        <>
          <Space size='normal' />
          <TestimonialQuote key={index}
            imageSrc={person.image}
            name={person.name}
            description={person.position}
            quote={person.text} link={person.link}
            linkLabel={person.linkLabel}
            company={person.company}
            alt={person.alt} />
          <Space size='normal' />
        </>
      ))}
      <Space size='big' />
      <Space size='big' />
      <Footer />
    </>
  )
}

export default Testimonials