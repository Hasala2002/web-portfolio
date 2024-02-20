import styles from "./styles/Shop.module.scss"
import product from "../../img/product.png"
import { TiStarFullOutline } from "react-icons/ti";
import HeroCardWrapper from "./HeroCardWrapper";

const Shop = () => {
  return (
    <HeroCardWrapper>
    <div className={styles.shop}>
        <div className={styles.productImg}>
            <img src={product} alt="product" />
        </div>
        <div className={styles.carousel}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={styles.productInfo}>
            <div className={styles.productTitle}>Wireless Headphones</div>
            <div className={styles.productPrice}>$ 300</div>
        </div>
        <div className={styles.starsSection}>
            <div className={styles.stars}>
               <div className={styles.star}><TiStarFullOutline /></div> 
               <div className={styles.star}><TiStarFullOutline /></div> 
               <div className={styles.star}><TiStarFullOutline /></div> 
               <div className={styles.star}><TiStarFullOutline /></div> 
               <div className={styles.star}><TiStarFullOutline /></div> 
            </div>
            <div className={styles.reviews}>4/5 (13)</div>
        </div>
        <div className={styles.productDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, eveniet iusto.
        </div>
        <div className={styles.buttonsAndTags}>
            <div className={styles.tags}>
                <div className={styles.tag}>Noice Cancelling</div>
                <div className={styles.tag}>BT 3.0</div>
            </div>
            <button>Add to cart</button>
        </div>
    </div>
    </HeroCardWrapper>
  )
}

export default Shop