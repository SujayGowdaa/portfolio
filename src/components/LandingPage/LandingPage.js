import BannerImage from "../LandingPage/BannerImage/BannerImage";
import styles from "./LandingPage.module.css";
import BannerContent from "./BannerContent/BannerContent";

export default function LandingPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <BannerImage />
        <BannerContent />
      </div>
    </section>
  );
}
