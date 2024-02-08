import PhotoSlider from "../Slider/PhotoSlider";
import { photoGallaryImg } from "../../shared/constants";

const GallarySection = () => {
    return (
        <section className="d-flex justify-content-between mt-5" style={{ background: '#053750' }}>
            <div className="container d-flex justify-content-between">
                <div className="d-flex flex-column text-center bg-light my-5" style={{ width: "48%", height: "333px" }}>
                    <h2>Photo Gallery</h2>
                    <PhotoSlider photos={photoGallaryImg} />
                </div>

                <div className="d-flex flex-column text-center bg-light my-5" style={{ width: "48%", height: "333px" }}>
                    <h2>Press Releases</h2>
                    <PhotoSlider photos={photoGallaryImg} />
                </div>
            </div>
        </section>
    );
}

export default GallarySection;
