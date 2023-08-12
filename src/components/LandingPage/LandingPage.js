import BannerImage from "../LandingPage/BannerImage/BannerImage";
import classes from "./LandingPage.module.css";
import BannerContent from "./BannerContent/BannerContent";

export default function LandingPage() {
  return (
    <section
      className={`${classes.section} ${classes["border-top"]} ${classes["border-bottom"]}`}
    >
      <div className={classes.container}>
        <BannerImage />
        <BannerContent />
      </div>
    </section>
  );
}
