import Container from "../UI/Container";
import classes from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="Projects">
      <Container>
        <h2 className={classes["secondary-heading"]}>Projects</h2>
        <p className={classes.msg}>This Section Still Under Construction...</p>
      </Container>
    </section>
  );
}
