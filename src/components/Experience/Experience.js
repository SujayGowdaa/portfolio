import classes from "./Experience.module.css";
import Container from "../UI/Container";
import CompanyTab from "./CompanyTab/CompanyTab";

export default function Experience() {
  return (
    <section id="Experience">
      <Container className="container-expereince container-child ">
        <h2 className={classes["secondary-heading"]}>Experience</h2>
        <div className={classes["tab-lists"]}>
          <CompanyTab />
        </div>
      </Container>
    </section>
  );
}
