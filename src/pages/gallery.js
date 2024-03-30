import Gallery from "../component/Gallery/Gallery"
import Slider from "../component/Slider/Slider"
import galleryImages from '../assets/data/gallery.json'

const GalleryPage = ()=>{
   return <div className="container mt-5">
      <h1>Photo Gallery</h1>
   {/* <Slider images={galleryImages} /> */}
   <Gallery images={galleryImages}/>
   </div>
}

export default GalleryPage

