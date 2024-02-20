import styles from "./styles/Dash.module.scss"
import { IoTrendingUp, IoTrendingDown } from "react-icons/io5";
import chart from  "../../img/chart.png"
import HeroCardWrapper from "./HeroCardWrapper";

const Dash = () => {
  return (
    <HeroCardWrapper>
        <div className={styles.statBoxes}>
            <div className={styles.income}>
                <IoTrendingUp />
                <span>$ 25K</span>
                <p>45%</p>
                <div className={styles.title}>Total Income</div>
            </div>
            <div className={styles.expense}>
                <IoTrendingDown />
                <span>$ 5K</span>
                <p>5%</p>
                <div className={styles.title}>Total Expenses</div>
            </div>
        </div>
        <div className={styles.chartContainer}>
            <div className={styles.chartBox}>
                <img src={chart} alt="chart" />
            </div>
        </div>
    </HeroCardWrapper>
  )
}

export default Dash