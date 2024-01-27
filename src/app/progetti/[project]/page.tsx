'use client'
import React from 'react'
import content from 'content.json'
import Navbar from 'app/components/Navbar/Navbar'
import Footer from 'app/components/Footer/Footer'
import Image from 'next/image'
import style from './Project.module.css'
import globalStyles from 'app/page.module.css'

interface ProjectPageProps {
  params: { project: string }
}

function Project({ params }: ProjectPageProps) {

  var project = content.progetti.projects.find((p) => p.link === params.project)

  return (
    <>
      <Navbar />
      <div className={globalStyles.appBarSpace}>
        <Navbar invisible />
      </div>
      <Image width={1} height={1} className={style.image} src={`${project?.details?.image}`} alt={`Image`} unoptimized={true} />
      <Footer />
    </>
  );
}

export default Project;