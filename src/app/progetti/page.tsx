import React from "react";
import Footer from "../components/Footer/Footer";
import ImageText from "../components/ImageText/ImageText";
import Navbar from "../components/Navbar/Navbar";
import content from "content.json";
import globalStyles from "app/page.module.css";
import Space from "app/components/Space/Space";
import ScrollingText from "app/components/ScrollingText/ScrollingText";

export interface ProjectProps {
  image: string;
  title?: String;
  text: string;
  firstMetric?: string;
  secondMetric?: string;
  secondaryText?: string;
  smallPrintBottomText?: boolean;
  tinyLogos?: string[];
  link?: string;
  linkLabel?: string;
  inverted?: String | Boolean;
  details?: Object;
  blueCircle?: Boolean;
}

/** Slug → /progetti/slug; static assets and absolute URLs open as-is (typically in a new tab). */
function projectCtaHref(info: ProjectProps): {
  href: string;
  linkRemainsInPage: boolean;
} {
  const raw = info.link?.trim();
  if (!raw) {
    return { href: "", linkRemainsInPage: true };
  }
  if (
    raw.startsWith("/assets/") ||
    raw.startsWith("http://") ||
    raw.startsWith("https://")
  ) {
    return { href: raw, linkRemainsInPage: false };
  }
  return { href: `/progetti/${raw}`, linkRemainsInPage: true };
}

const Progetti = () => {
  var projects = content.progetti.projects as [];
  return (
    <>
      <Navbar />
      <div className={globalStyles.appBarSpace}>
        <Navbar invisible />
      </div>
      <ScrollingText text={content.progetti.title} />
      <Space size="big" maintainInMobile />
      <div>
        {projects.map((info: ProjectProps, index) => {
          const { href, linkRemainsInPage } = projectCtaHref(info);
          return (
          <React.Fragment key={index}>
            <ImageText
              image={info.image}
              title={info.title}
              text={info.text}
              inverted={info.inverted ? info.inverted == "true" : false}
              firstMetric={`${info.firstMetric ? info.firstMetric : ""}`}
              secondMetric={`${info.secondMetric ? info.secondMetric : ""}`}
              secondaryText={info.secondaryText}
              smallPrintBottomText={info.smallPrintBottomText}
              tinyLogos={info.tinyLogos}
              link={href}
              linkLabel={
                info.linkLabel ?? content.progetti.linksLabel ?? undefined
              }
              linkRemainsInPage={linkRemainsInPage}
            />
            <Space />
          </React.Fragment>
          );
        })}
      </div>
      <Space size={"big"} maintainInMobile />
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
  );
};

export default Progetti;
