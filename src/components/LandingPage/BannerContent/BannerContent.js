import styles from "./BannerContent.module.css";
import Navbar from "./Navbar/Navbar";
import Title from "./Title/Title";
import SocialLinks from "./SocialLinks/SocialLinks";

export default function BannerContent() {
  return (
    <div className={styles["content-container"]}>
      <Navbar />
      <Title />
      <SocialLinks />
    </div>
  );
}
