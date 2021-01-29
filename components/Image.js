import React from "react"
import defaultImage from "../assets/images/examplePoster.png"
import functions from "../functions"
import LazyLoad from "react-lazyload"

const Image = ({ src, alt, className, defaultImage }) => <LazyLoad height={200} once>
  <img src={functions.isImageLoadable(src) ? src : defaultImage} className={className} alt={alt} />
</LazyLoad>


Image.defaultProps = {
  src: "",
  alt: "No alt given",
  className: "",
  defaultImage: defaultImage,
}

export default Image