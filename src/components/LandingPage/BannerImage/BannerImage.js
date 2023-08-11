import styles from "./BannerImage.module.css";
import bannerImage from "../../../assets/banner_image.jpg";

export default function BannerImage() {
  return (
    <div className={styles["image-container"]}>
      <img src={bannerImage} alt="sujay gowda" />
    </div>
  );
}
