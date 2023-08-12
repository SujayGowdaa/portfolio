import classes from "./RoleResponsibilities.module.css";

const data = [
  {
    id: 1,
    company: "i4Sight",
    designation: "Front-end Developer",
    duration: "June 2023 - Present",
    description: ["This section yet to update"],
    link: (
      <a href="https://www.i4sight.net/" target="_blank" rel="noreferrer">
        @i4Sight
      </a>
    ),
  },

  {
    id: 2,
    company: "Snapchat",
    designation: "Data Labeller",
    duration: "January 2023 - June 2023",
    description: ["This section yet to update", "This section yet to update"],
    link: (
      <a href="https://www.snapchat.com/" target="_blank" rel="noreferrer">
        @Snapchat
      </a>
    ),
  },

  {
    id: 3,
    company: "Hudson's Bay",
    designation: "Image Editor",
    duration: "November 2022 - January 2023",
    description: [
      "Ensuring all vendor provided images are meeting the standards of the bay, to go live on the site.",
      "Retouching vendor provided images from scratch as per the bay guidelines.",
      "Retouching inhouse shot images from scratch and ensuring that all the images are fulfuiling the requirments & following the guidelines.",
      "Assuring quality of the images provided by the business partners.",
      "Documentation of the completion and pending tasks which have been assigned.",
      "After retouching uploading all the edited and quality assured images to the CyberDuck to go images live on site.",
    ],
    link: (
      <a href="https://www.thebay.com/" target="_blank" rel="noreferrer">
        @Hudson's Bay
      </a>
    ),
  },

  {
    id: 4,
    company: "Target",
    designation: "Digital Imager",
    duration: "March 2021 - October 2022",
    description: [
      "Responsible for retouching Products Apparel & Accessories On-Figure model images and still life CGI images for target.com, Weekly ads and other Target properties.",
      "Followed creative direction from Art director and senior artists and followed complex and detailed notes to create high-quality creative assets. And delivered daily targets without compromising overall image quality in a fast-paced, rapidly-changing environment under strict deadlines.",
      "As an independent contributor, I was responsible for taking creative decisions based on brand guidelines.",
      "Ensured that all digital images adhere to Target's photography style-guide and will collaborate with process owners/QA leads and work on revisions as required.",
    ],
    link: (
      <a href="https://www.target.com/" target="_blank" rel="noreferrer">
        @Target
      </a>
    ),
  },

  {
    id: 5,
    company: "Flipkart",
    designation: "Image Editor",
    duration: "August 2019 - March 2021",
    description: [
      "Analyzing photograph requirements from vendors to determine appropriate lighting, color, tone, and overall aesthetic prior to editing.",
      "Used digital editing programs to modify files to meet requirements for final product.",
      "Worked side by side with senior photo editor to modify & enhance photographs to meet project specifications set forth by managers & clients.",
      "Responsible for creating infographics for the products at flipkart.",
    ],
    link: (
      <a href="https://www.flipkart.com/" target="_blank" rel="noreferrer">
        @Flipkart
      </a>
    ),
  },
];

export default function RoleResponsibilities(props) {
  const index = props.index + 1;
  const roles = data[index - 1].description;

  const randomNum = Math.random();

  return (
    <div className={classes["content-container"]}>
      <div className={classes["company-roles-responsibilities"]}>
        {data.map((value) => {
          if (index === value.id) {
            return (
              <>
                <div
                  key={value.id}
                  id={value.id}
                  className={classes["company-role-container"]}
                >
                  <h3 className={classes["company-role-heading"]}>
                    {value.designation}
                    <span>{value.link}</span>
                  </h3>
                  <p className={classes["company-role-paragraph"]}>
                    {value.duration}
                  </p>
                </div>
                <ul>
                  {roles.map((data) => {
                    return (
                      <li key={randomNum} className={classes["list-style"]}>
                        <p className={classes["roles-paragraph"]}>{data}</p>
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
