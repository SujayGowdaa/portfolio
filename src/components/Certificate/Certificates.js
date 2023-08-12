import classes from "./Certificates.module.css";
import { TbCertificate } from "react-icons/tb";
import { MdOpenInNew } from "react-icons/md";
import Container from "../UI/Container";

const content = [
  {
    id: 1,
    icon: <TbCertificate className={classes["card-icon"]} />,
    title: "React Basics",
    courseProvider: (
      <p className={classes["course-provider"]}>
        <span>Coursera</span>
        <br />
        May 17, 2023
      </p>
    ),
    link: "https://www.coursera.org/account/accomplishments/verify/NXHPG4HHDCFZ",
  },
  {
    id: 2,
    icon: <TbCertificate className={classes["card-icon"]} />,
    title: "HTML & CSS in depth",
    courseProvider: (
      <p className={classes["course-provider"]}>
        <span>Coursera</span>
        <br />
        March 31, 2023
      </p>
    ),
    link: "https://www.coursera.org/account/accomplishments/verify/S6BHXLMUR6E5",
  },

  {
    id: 3,
    icon: <TbCertificate className={classes["card-icon"]} />,
    title: "Programming with JavaScript by Meta",
    courseProvider: (
      <p className={classes["course-provider"]}>
        <span>Coursera</span>
        <br />
        February 24, 2023
      </p>
    ),
    link: "https://www.coursera.org/account/accomplishments/verify/PXHLTJXD7KJW",
  },
  {
    id: 4,
    icon: <TbCertificate className={classes["card-icon"]} />,
    title: "Introduction to Front-End Development",
    courseProvider: (
      <p className={classes["course-provider"]}>
        <span>Coursera</span>
        <br />
        September 30, 2022
      </p>
    ),
    link: "https://www.coursera.org/account/accomplishments/verify/VBC93PBHPHXY",
  },
  {
    id: 5,
    icon: <TbCertificate className={classes["card-icon"]} />,
    title: "Real-World Websites with HTML & CSS",
    courseProvider: (
      <p className={classes["course-provider"]}>
        <span>Udemy</span>
        <br />
        March 21, 2023
      </p>
    ),
    link: "https://www.udemy.com/certificate/UC-02c8d049-1cdc-4256-8cb3-1c98330b6f7c/",
  },
  {
    id: 6,
    icon: <TbCertificate className={classes["card-icon"]} />,
    title: "Fundamentals Of Programming With C",
    courseProvider: (
      <p className={classes["course-provider"]}>
        <span>Coursera</span>
        <br />
        October 28, 2022
      </p>
    ),
    link: "https://www.coursera.org/account/accomplishments/verify/NZQW5NXH3C39/",
  },
  {
    id: 7,
    icon: <TbCertificate className={classes["card-icon"]} />,
    title: "3D Visualization with 3DS MAX",
    courseProvider: (
      <p className={classes["course-provider"]}>
        <span>Udemy</span>
        <br />
        May 09, 2022
      </p>
    ),
    link: "https://www.udemy.com/certificate/UC-09e5e791-b7d2-4432-87c6-2ca244794109/",
  },
];

export default function Certificates() {
  return (
    <section id="Certificates">
      <Container>
        <h2 className={classes["secondary-heading"]}>Certificates</h2>
        <div className={classes["grid"]}>
          {content.map((data) => {
            return (
              <div
                key={data.id}
                className={classes["card"]}
                onClick={() => {
                  window.open(data.link);
                }}
              >
                <div className={classes["icon-container"]}>{data.icon}</div>
                <div className={classes["content-container"]}>
                  <div>
                    <p className={classes["title"]}>{data.title}</p>
                    {data.courseProvider}
                  </div>
                  <div className={classes["container"]}>
                    <MdOpenInNew className={classes["icon"]} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
