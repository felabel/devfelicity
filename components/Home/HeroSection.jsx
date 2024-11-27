const HeroSection = () => {
  return (
    <section id="home" className="e z yf hm 2xl:ud-flex id 2xl:ud-h-[700px]">
      <div className="a">
        <div className="mb hd ca">
          <div className="bc pl/2 nd df">
            <div>
              <h1 className="ug fh mh ua">
                Hey There 👋 I am
                <span className="dh jh wg zj kk hh ak pk kb bb">
                  {" "}
                  Felicity Essien{" "}
                </span>
              </h1>
              <h2 className="eh lh _g lk oa">
                Professional
                <span className="jh"> Software Engineer </span>
              </h2>
              <p className="tc eh lh ug ih cb">
                Innovating with Simplicity, Designing with Precision, and
                Solving Problems that Matter. Your Vision, My Code — Together,
                We Create Magic.
              </p>
              <div className="mb id">
                <a
                  href="/#contact"
                  className="ug fh kh pe kf lf pa yi si td ai ci ei"
                >
                  Contact Me
                </a>
                <a
                  href="javascript:void(0)"
                  className="ug fh kh qe kf lf yi si td ai ci ei"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="bc pl/2 md df">
            <div className="e db al z 2xl:ud-absolute 2xl:ud-bottom-0 2xl:ud-right-40">
              <img src="images/author1.png" alt="image" className="oc fa" />
              <span className="d pn r nn">
                <svg
                  width="40"
                  height="38"
                  viewBox="0 0 40 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.31451 3.18282L32.4926 6.24789C36.3084 6.75249 38.147 11.1986 35.8021 14.2508L21.5587 32.7911C19.2138 35.8434 14.444 35.2126 12.9731 31.6558L4.03852 10.0504C2.56762 6.49355 5.49873 2.67822 9.31451 3.18282Z"
                    stroke="#6E2FE3"
                    strokeWidth="6"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="d g s nn" style={{ zIndex: -1 }}>
          <svg
            width="48"
            height="95"
            viewBox="0 0 48 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="0.5"
              cy="47.5"
              r="47.5"
              fill="url(#paint0_radial_6:121)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_6:121"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(0.5) rotate(90) scale(95)"
              >
                <stop stopColor="white" />
                <stop offset="0.569" stopColor="#F0F4FD" />
                <stop offset="0.993" stopColor="#D9E0F0" />
              </radialGradient>
            </defs>
          </svg>
        </span>
        <span className="d q k nn">
          <svg
            width="491"
            height="490"
            viewBox="0 0 491 490"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="356.5"
              cy="356.5"
              r="356.5"
              fill="url(#paint0_linear_6:37)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6:37"
                x1="356.5"
                y1="0"
                x2="356.5"
                y2="713"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6E2FE3" />
                <stop offset="1" stopColor="#1E3BB3" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
