import styles from "../styles/PriceRange.module.css";
import { useState } from "react";
const PriceRange = ({ min, max }) => {
  const [maxx, setMax] = useState("");
  const [minn, setMin] = useState("");
  return (
    <div className={styles.rangecontainer}>
      <div className={styles.pricerange}>
        <div className={styles.line1}></div>
        <label>
          Min:
          <div>
            <input
              value={minn}
              onChange={(e) => {
                setMin(e.target.value);
                min(minn);
              }}
            />
          </div>
        </label>
        <label>
          Max:
          <div>
            <input
              value={maxx}
              onChange={(e) => {
                setMax(e.target.value);
                max(maxx);
              }}
            />
          </div>
        </label>
        <div className={styles.line1}></div>
      </div>
    </div>
  );
};

export default PriceRange;
