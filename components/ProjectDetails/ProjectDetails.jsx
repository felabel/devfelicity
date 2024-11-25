import React from "react";

const ProjectDetails = ({ project }) => {
  const { solutions, tags, date, myRole } = project;
  const solutionsArray = solutions.split("\n").map((item) => item.trim());
  const roleArray = myRole.split("\n").map((item) => item.trim());

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  console.log("title", solutionsArray);

  return (
    <div>
      <section className="e z yf dg za od">
        <div className="a">
          <div className="mb hd id ca">
            <div className="bc fk/12 nl/12 df">
              <div className="sc _a dk">
                <h1 className="dh jh yg zj oa">{project.name}</h1>
                <p className="eh ug lh ih">{project.shortDescription}</p>
              </div>
            </div>
            <div className="bc gk/12 ol/12 df">
              <div className="tg">
                <ul className="mb id hk">
                  <li className="mb id">
                    <a href="index.html" className="eh ug lh eg ui">
                      {" "}
                      Home{" "}
                    </a>
                    <span className="kb jc wb be ce fe cd sa"></span>
                  </li>
                  <li className="eh ug mh">Portfolio Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="d k g aa">
            <svg
              width="730"
              height="206"
              viewBox="0 0 730 206"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.08"
                width="136.991"
                height="563.705"
                transform="matrix(0.632736 0.774368 0.774368 -0.632736 -201.278 330.677)"
                fill="url(#paint0_linear_0:1)"
              />
              <rect
                opacity="0.05"
                width="345.355"
                height="563.705"
                transform="matrix(0.632736 0.774368 0.774368 -0.632736 74 330.677)"
                fill="url(#paint1_linear_0:1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="68.4956"
                  y1="0"
                  x2="68.4956"
                  y2="563.705"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6E2FE3" />
                  <stop offset="1" stopColor="#6E2FE3" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="172.678"
                  y1="0"
                  x2="172.678"
                  y2="563.705"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6E2FE3" />
                  <stop offset="1" stopColor="#6E2FE3" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="d f q aa">
            <svg
              width="405"
              height="206"
              viewBox="0 0 405 206"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.08"
                width="289.718"
                height="563.705"
                transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 603.461 -125.138)"
                fill="url(#paint0_linear_54:595)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_54:595"
                  x1="144.859"
                  y1="0"
                  x2="144.859"
                  y2="563.705"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6E2FE3" />
                  <stop offset="1" stopColor="#6E2FE3" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </section>

      <section className="fg">
        <div className="a">
          <div className="mb hd ka">
            <div className="bc jl/12 pf">
              <div>
                {/* carousel */}
                <div className="rd ma">
                  <img
                    src={project.thumbnail?.fields?.file?.url}
                    alt="image"
                    className="bc ze _e"
                  />
                </div>
                {/* <Carousel gallery={project.gallery} /> */}
                <h3 className="dh jh yg wj lm jb">About the {project.name}</h3>
                {/* <p className="ug xj jm hn lh ma">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p> */}
                <p className="ug xj jm hn lh la">{project.about}</p>
                <h4 className="dh zg yj km in jh ma">
                  <span className="mh">01.</span>Solutions
                </h4>
                <p className="ug xj jm hn lh la">
                  These are the values and solutions that {project.name}{" "}
                  provides;
                </p>
                <ul className="qn fd gd jb">
                  {solutionsArray.map((solution, index) => (
                    <li className="ug xj jm hn mh ua" key={index}>
                      <span className="lh"> {solution} </span>
                    </li>
                  ))}
                </ul>

                <h4 className="dh zg yj km in jh ma">
                  <span className="mh">02.</span> My Role
                </h4>
                {/* <p className="ug xj jm hn lh ma">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis enim lobortis scelerisque fermentum. Neque sodales ut
                  etiam sit door telium sieat amet.
                </p> */}
                <ul className="qn fd gd jb">
                  {roleArray.map((role, index) => (
                    <li className="ug xj jm hn mh ua" key={index}>
                      <span className="lh"> {role} </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bc kl/12 pf">
              <div className="ue xd je wf nf qj dm fn rd la">
                <h3 className="dh mh ch jb">Project Info</h3>
                <ul>
                  <li className="mb ul bn ua">
                    <span className="ad bc eh jh ug mb ld">
                      Category
                      <span className="lh">:</span>
                    </span>
                    <span className="bc eh lh ug qg em gn">
                      <span>{project.category}</span>
                    </span>
                  </li>
                  <li className="mb ul bn ua">
                    <span className="ad bc eh jh ug mb ld">
                      Date
                      <span className="lh">:</span>
                    </span>
                    <span className="bc eh lh ug qg em gn">
                      {" "}
                      {/* June, 21, 2024{" "} */}
                      {formattedDate}
                    </span>
                  </li>
                  <li className="mb ul bn ua">
                    <span className="ad bc eh jh ug mb ld">
                      Tags
                      <span className="lh">:</span>
                    </span>
                    <span className="bc eh lh ug qg em gn">
                      {" "}
                      {tags.map((tag, index) => (
                        <span key={index}>
                          {tag}
                          {index < tags.length - 1 && ", "}{" "}
                        </span>
                      ))}
                    </span>
                  </li>
                  <li className="mb ul bn ua">
                    <span className="ad bc eh jh ug mb ld">
                      Website
                      <span className="lh">:</span>
                    </span>
                    <span className="bc eh lh ug qg em gn">
                      {" "}
                      <a href={project.projectLink} target="_blank">
                        {project.companyLink}
                      </a>
                    </span>
                  </li>
                  <li className="mb ul bn">
                    <span className="ad bc eh jh ug mb ld">
                      Location
                      <span className="lh">:</span>
                    </span>
                    <span className="bc eh lh ug qg em gn">
                      {" "}
                      {project.address}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="ue xd je wf nf qj dm fn rd la">
                <h3 className="dh mh ch jb">Technical Skills</h3>
                <ul className="qn fd gd jb">
                  {project.skills.map((skill, index) => (
                    <li className="ug xj jm hn mh ua" key={index}>
                      <span className="lh"> {skill} </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
