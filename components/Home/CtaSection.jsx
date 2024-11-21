import React from "react";

const CtaSection = () => {
  return (
    <div>
      <section className="hb">
        <div className="a">
          <div className="pe vd e od z sg rf">
            <div className="xc fa nf">
              <h2 className="dh kh yg ok hh la">
                Want to work together and create amazing products with me?
              </h2>
              <form className="e yc fa">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bc td xd ee le oe we lf sf kh oh ph yh cj aj ai sg sm:text-left oa mj"
                />
                <button className="oe mh td fh ug sf sj pf bc oj jj v w">
                  Get a Quote
                </button>
              </form>
            </div>

            <div className="d k g q bc nn">
              <svg
                width="818"
                height="286"
                viewBox="0 0 818 286"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fa"
              >
                <circle
                  cx="409"
                  cy="409"
                  r="408.5"
                  stroke="url(#paint0_linear_0:1)"
                />
                <circle
                  cx="409"
                  cy="409"
                  r="349.5"
                  stroke="url(#paint1_linear_0:1)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0:1"
                    x1="-34.5"
                    y1="291.5"
                    x2="851"
                    y2="291.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.35" />
                    <stop offset="0.218415" stopColor="white" stopOpacity="0" />
                    <stop offset="0.728079" stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.35" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0:1"
                    x1="29.4768"
                    y1="308.45"
                    x2="787.24"
                    y2="308.45"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.35" />
                    <stop offset="0.218415" stopColor="white" stopOpacity="0" />
                    <stop offset="0.777261" stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.35" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CtaSection;
