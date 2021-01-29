import React from "react"
import defaultImage from "../assets/images/examplePoster.png"
import functions from "../functions"

const Image = ({ src, alt, className, defaultImage }) => <img
  src={functions.isImageLoadable(src) ? src : defaultImage}
  className={className}
  alt={alt}
/>

Image.defaultProps = {
  src: "",
  alt: "No alt given",
  className: "",
  defaultImage: defaultImage,
}

export default Image