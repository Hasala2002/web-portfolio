import { useState } from 'react'
import PageWrapper from '../utilities/PageWrapper'
import styles from "./styles/GraphicWorkDisplay.module.scss"
import { Link } from "react-router-dom";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from '../img/graphic/photos';
import PhotoAlbum from 'react-photo-album';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const GraphicWorkDisplay = () => {

  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };

  return (
    <PageWrapper>
      <div className={styles.workPage}>
        <h1><Link to="/work">[Selected] Work</Link> &gt; Graphic Design</h1>
        <div className={styles.notimp}>Cool stuff eh? (˃́ᗜ˂̀`)</div>
        <PhotoAlbum photos={photos} layout="rows" targetRowHeight={400}
          onClick={({ index }) => setIndex(index)} />

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </PageWrapper>
  )
}

export default GraphicWorkDisplay