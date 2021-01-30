import React from "react"
import examplePoster from "../assets/images/examplePoster.png"
import Link from "next/link"


const Poster = ({ pinColor, pinEffect, borderVisible, borderColor, borderEffect, pinText, hiddenText, url, image_web, image_tv, forceHover, isTv, scale }) => {
  const backgroundImage = isTv ? image_tv : image_web

  const data = (
    <div
      className={`poster-wrapper ${forceHover ? "hover" : "nohover"} ${isTv ? "tv" : "nontv"}`}
      style={{ transform: `scale(${scale})` }}
    >
      <div
        className={`poster-inner-wrapper effect-${borderEffect}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          border: borderVisible ? `1px solid ${borderColor}` : "1px solid transparent",
        }}
      >
        <div className={`poster-pin effect-${pinEffect}`} style={{ backgroundColor: pinColor }}>
          <div className='poster-text'>
            {pinText}
          </div>
        </div>
        <div className='poster-hidden'>
          <div className='poster-text'>
            {hiddenText}
          </div>
        </div>
      </div>
    </div>
  )

  return url ? <Link href={url}>{data}</Link> : data
}

Poster.defaultProps = {
  pinColor: "#4169e1",
  pinEffect: null,
  borderVisible: false,
  borderColor: null,
  borderEffect: null,
  pinText: "Example",
  hiddenText: "Example",
  url: null,
  image_web: examplePoster,
  image_tv: examplePoster,
  forceHover: false,
  isTv: false,
  scale: 1,
}

export default Poster
