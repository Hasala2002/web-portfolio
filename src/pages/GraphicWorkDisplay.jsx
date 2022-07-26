import React, { useCallback, useState } from 'react'
import PageWrapper from '../utilities/PageWrapper'
import styles from "./styles/GraphicWorkDisplay.module.scss"
import { useNavigate, Link } from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from '../img/graphic/photos';

const GraphicWorkDisplay = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

  return (
    <PageWrapper>
    <div className={styles.workPage}>
        <h1><Link to="/work">[Selected] Work</Link> &gt; Graphic Design</h1>
        <div className={styles.notimp}>Cool stuff eh? (˃́ᗜ˂̀`)</div>
        <Gallery photos={photos} onClick={openLightbox} margin={4} />
        <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
</PageWrapper>
  )
}

export default GraphicWorkDisplay