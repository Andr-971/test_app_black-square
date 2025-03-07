
import styles from "./page.module.css";
import TitleH1 from "../components/TitleH1/TitleH1"


export default function Home() {
  return (
      <>
          <div className="g-container">
              <TitleH1 title="Чёрный квадрат"></TitleH1>
            <div className={styles.squareHolder}>
                  <div className={styles.square}></div>
            </div>
          </div>
      </>
  );
}
