import classes from "./BannerImage.module.css";
import bannerImage from "../../../assets/banner_image.jpg";

export default function BannerImage() {
  return (
    <div className={classes["image-container"]}>
      <img
        className={classes["banner-image"]}
        src={bannerImage}
        alt="sujay gowda"
      />
    </div>
  );
}
