import React from "react";

const AboutSection = () => {
  return (
    <div>
      <section id="about" className="hg zf e z">
        <div className="a">
          <div className="mb hd ca">
            <div className="bc pl/2 xm/12 df ma bl">
              <span className="dh mh _g lk ua"> ABOUT ME </span>
              <h2 className="uc dh jh wg wj mk hh ak qk oa">
                Crafting Solutions, Enhancing Experiences
              </h2>
              <p className="sc eh ug lh">
                I’m passionate about building clean, efficient, and user-focused
                software solutions. With a commitment to innovation and
                attention to detail, I strive to create applications that not
                only perform seamlessly but also deliver exceptional user
                experiences. Let’s bring ideas to life through the power of
                code!
              </p>
            </div>
            <div className="bc pl/2 ym/12 df">
              <h3 className="fh jh yg mk eb">Connect With Me</h3>
              <p className="eh ug lh la">
                Looking to collaborate, share ideas, or discuss exciting
                opportunities? I’m just a message away! Let’s connect and bring
                your vision to life.
              </p>
              <div className="mb id">
                {/* <a
                  href="javascript:void(0)"
                  className="fc sb sa td mb id kd xd ge lh ri qi vi"
                  aria-label="social-link"
                  name="social-link"
                >
                  <svg width="7" height="14" viewBox="0 0 7 14" className="ye">
                    <path d="M6.50914 5.6H5.42429H5.03684V5.14839V3.74839V3.29677H5.42429H6.23793C6.45103 3.29677 6.62538 3.11613 6.62538 2.84516V0.451613C6.62538 0.203226 6.4704 0 6.23793 0H4.82374C3.29332 0 2.22783 1.26452 2.22783 3.13871V5.10323V5.55484H1.84038H0.523056C0.251842 5.55484 0 5.80323 0 6.16452V7.79032C0 8.10645 0.213097 8.4 0.523056 8.4H1.80164H2.18909V8.85161V13.3903C2.18909 13.7065 2.40218 14 2.71214 14H4.53315C4.64939 14 4.74625 13.9323 4.82374 13.8419C4.90123 13.7516 4.95935 13.5935 4.95935 13.4581V8.87419V8.42258H5.36617H6.23793C6.48977 8.42258 6.6835 8.24194 6.72224 7.97097V7.94839V7.92581L6.99346 6.36774C7.01283 6.20968 6.99345 6.02903 6.87722 5.84839C6.83848 5.73548 6.66412 5.62258 6.50914 5.6Z" />
                  </svg>
                </a> */}
                <a
                  href="https://x.com/dev_felz"
                  target="_blank"
                  className="fc sb sa td mb id kd xd ge lh ri qi vi"
                  aria-label="social-link"
                  name="social-link"
                >
                  <svg
                    width="19"
                    height="14"
                    viewBox="0 0 19 14"
                    className="ye"
                  >
                    <path d="M16.5892 2.41096L17.7333 1.09589C18.0645 0.739726 18.1548 0.465753 18.1849 0.328767C17.2817 0.821918 16.4387 0.986301 15.8968 0.986301H15.686L15.5656 0.876712C14.843 0.30137 13.9398 0 12.9763 0C10.8688 0 9.2129 1.58904 9.2129 3.42466C9.2129 3.53425 9.2129 3.69863 9.24301 3.80822L9.33333 4.35616L8.70107 4.32877C4.84731 4.21918 1.68602 1.20548 1.17419 0.684932C0.331183 2.05479 0.812903 3.36986 1.32473 4.19178L2.34839 5.72603L0.722581 4.90411C0.752688 6.05479 1.23441 6.9589 2.16774 7.61644L2.98064 8.16438L2.16774 8.46575C2.67957 9.86301 3.82366 10.4384 4.66667 10.6575L5.78064 10.9315L4.72688 11.589C3.04086 12.6849 0.933333 12.6027 0 12.5205C1.89677 13.726 4.15484 14 5.72043 14C6.89462 14 7.76774 13.8904 7.97849 13.8082C16.4086 12 16.8 5.15068 16.8 3.78082V3.58904L16.9806 3.47945C18.0043 2.60274 18.4258 2.13699 18.6667 1.86301C18.5763 1.89041 18.4559 1.94521 18.3355 1.9726L16.5892 2.41096Z" />
                  </svg>
                </a>
                {/* <a
                  href="javascript:void(0)"
                  className="fc sb sa td mb id kd xd ge lh ri qi vi"
                  aria-label="social-link"
                  name="social-link"
                >
                  <svg
                    width="19"
                    height="14"
                    viewBox="0 0 19 14"
                    className="ye"
                  >
                    <path d="M18.2753 2.19355C18.0645 1.32258 17.4323 0.645161 16.6194 0.419355C15.1742 7.69092e-08 9.33333 0 9.33333 0C9.33333 0 3.49247 7.69092e-08 2.04731 0.419355C1.23441 0.645161 0.60215 1.32258 0.391398 2.19355C0 3.77419 0 7 0 7C0 7 0 10.2581 0.391398 11.8065C0.60215 12.6774 1.23441 13.3548 2.04731 13.5806C3.49247 14 9.33333 14 9.33333 14C9.33333 14 15.1742 14 16.6194 13.5806C17.4323 13.3548 18.0645 12.6774 18.2753 11.8065C18.6667 10.2581 18.6667 7 18.6667 7C18.6667 7 18.6667 3.77419 18.2753 2.19355ZM7.46667 10V4L12.314 7L7.46667 10Z" />
                  </svg>
                </a> */}
                <a
                  href="https://www.linkedin.com/in/devfelicity/"
                  className="fc sb sa td mb id kd xd ge lh ri qi vi"
                  aria-label="social-link"
                  name="social-link"
                  target="_blank"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    className="ye"
                  >
                    <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60322V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d q i/2 -translate-y-1/2">
          <svg
            width="60"
            height="120"
            viewBox="0 0 60 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="60" fill="url(#paint0_radial_18:24)" />
            <defs>
              <radialGradient
                id="paint0_radial_18:24"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(60) rotate(90) scale(120)"
              >
                <stop stopColor="white" />
                <stop offset="0.569" stopColor="#F0F4FD" />
                <stop offset="0.993" stopColor="#D9E0F0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
