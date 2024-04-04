'use client'
import React from 'react'
import content from 'content.json'
import Navbar from 'app/components/Navbar/Navbar'
import Footer from 'app/components/Footer/Footer'
import styles from './Project.module.css'
import Space from 'app/components/Space/Space'
import BlueTextCta from 'app/components/BlueTextCta/BlueTextCta'
import BlueCircle from 'app/components/BlueCircle/BlueCircle'
import ImagesCarousel from 'app/components/ImagesCarousel/ImagesCarousel'
import TestimonialQuote from 'app/components/TestimonialQuote/TestimonialQuote'
import ImageWrapper from 'app/components/ImageWrapper/ImageWrapper'
import ProjectImageText from 'app/components/ProjectImageText/ProjectImageText'
import ManualSliderWrapper from 'app/components/manualSliderComponents/ManualSliderWrapper/ManualSliderWrapper'

interface ProjectPageProps {
  params: { project: string }
}

interface TestimonialQuotesType {
  name: string
  image: string
  description: string
  company: string
  quote: string
  link?: string
  linkLabel?: string
}

function Project({ params }: ProjectPageProps) {

  var project = content.progetti.projects.find((p) => p.link === params.project)

  return (
    <>
      <Navbar />
      <ImageWrapper width={1} height={1} className={styles.bannerImage} src={`${project?.details?.coverImage}`} backgroundColor={"#4e4e4e"} />
      <div className={styles.blueCircleWrapper}>
        <BlueCircle />
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{project?.details?.title}</div>
        </div>
      </div>
      <Space size={"big"} />
      <Space size={"big"} />
      {project?.details?.panelImage &&
        <ProjectImageText inverted image={project?.details?.panelImage} title={project?.details?.panelImageText} secondaryText={project?.details?.panelImageDesc} />
      }

      <Space size={"big"} maintainInMobile />
      <Space size={"big"} maintainInMobile />
      <BlueTextCta text={content.progetti.projectsInterested} label={content.progetti.projectsInterestedCta} link={content.progetti.projectsInterestedLink} />
      <Space size={"big"} maintainInMobile />
      <Space size={"big"} maintainInMobile />
      <ImagesCarousel className={styles.invisibleInMobile} slides={project?.details?.carousel} />
      <ManualSliderWrapper className={styles.visibleInMobile} slides={project?.details?.carousel.map((image, index) => (
        <ImageWrapper key={index} imagestyle={styles.carouselImage} src={image} backgroundColor={"#373737"} />
      )) ?? []} />
      <Space size={"big"} maintainInMobile />
      <Space size={"big"} maintainInMobile />
      {project?.details?.testimonialQuotes?.map((quote: TestimonialQuotesType, index) => (
        <TestimonialQuote key={index} imageSrc={quote.image} name={quote.name} description={quote.description} quote={quote.quote} link={quote.link} linkLabel={quote.linkLabel} company={quote.company} />
      ))}
      <Space size={"big"} />
      <Space size={"big"} />
      <Footer />
    </>
  )
}

export default Project