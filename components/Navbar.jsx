"use client";
import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    console.log("Menu scroll script loaded");
    const pageLink = document.querySelectorAll(".menu-scroll");

    pageLink.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        console.log("Menu item clicked:", elem);

        e.preventDefault();
        document.querySelector(elem.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          offsetTop: 1 - 60,
        });
      });
    });

    const onScroll = () => {
      const sections = document.querySelectorAll(".menu-scroll");
      const scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      for (let i = 0; i < sections.length; i++) {
        const currLink = sections[i];
        const val = currLink.getAttribute("href");
        const refElement = document.querySelector(val);
        const scrollTopMinus = scrollPos + 73;

        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          document
            .querySelector(".menu-scroll.active")
            ?.classList.remove("active");
          currLink.classList.add("active");
        } else {
          currLink.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <header className="header me d f g y bc mb id ai">
        <div className="a">
          <div className="mb ca id ld e">
            <div className="df cc oc">
              <a href="/" className="header-logo bc kb ef xl">
                <img src="images/devfelz.svg" alt="logo" className="bc" />
              </a>
            </div>
            <div className="mb df ld id bc">
              <div>
                <button
                  id="navbarToggler"
                  name="navbarToggler"
                  aria-label="navbarToggler"
                  className="kb d h i/2 bd hl bj zh ff gf qd"
                >
                  <span className="e dc pb da kb ne"></span>
                  <span className="e dc pb da kb ne"></span>
                  <span className="e dc pb da kb ne"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className="d hf yl zl dn oe vl th qd pc bc rl il h j ob el sk pm"
                >
                  <ul className="ln fl">
                    {/* <li className="e dj">
                      <a
                        href="#home"
                        className="menu-scroll ug jh gj if _l gl am mb ea zk"
                      >
                        {" "}
                        Home{" "}
                      </a>
                    </li> */}
                    <li className="e dj">
                      <a
                        href="#about"
                        className="menu-scroll ug jh gj if _l gl am mb ea zk _k vm"
                      >
                        About
                      </a>
                    </li>
                    <li className="e dj">
                      <a
                        href="#services"
                        className="menu-scroll ug jh gj if _l gl am mb ea zk _k vm"
                      >
                        Services
                      </a>
                    </li>
                    <li className="e dj">
                      <a
                        href="#portfolio"
                        className="menu-scroll ug jh gj if _l gl am mb ea zk _k vm"
                      >
                        Projects
                      </a>
                    </li>
                    <li className="e dj">
                      <a
                        href="#education"
                        className="menu-scroll ug jh gj if _l gl am mb ea zk _k vm"
                      >
                        Experience
                      </a>
                    </li>
                    <li className="e dj">
                      <a
                        href="#contact"
                        className="menu-scroll ug jh gj if _l gl am mb ea zk _k vm"
                      >
                        Contact
                      </a>
                    </li>
                    {/* <li className="e dj submenu-item">
                      <a
                        href="javascript:void(0)"
                        className="ug jh gj if _l gl em fm mb ea zk _k vm e fi ki ji ni oi pi mi rm gi hi/2 li ii"
                      >
                        Pages
                      </a>
                      <div className="submenu ob e tk ec j uk g rd qm af el om rk ij sm tm oe bi ci">
                        <a
                          href="portfolio-details.html"
                          className="kb vg jh sd ui jf df"
                        >
                          {" "}
                          Portfolio Details Page{" "}
                        </a>

                        <a
                          href="blog-grids.html"
                          className="kb vg jh sd ui jf df"
                        >
                          {" "}
                          Blog Grids Page{" "}
                        </a>
                        <a
                          href="blog-details.html"
                          className="kb vg jh sd ui jf df"
                        >
                          {" "}
                          Blog Details Page{" "}
                        </a>
                      </div>
                    </li> */}
                  </ul>
                </nav>
              </div>
              <div className="nj jd ob xf gm">
                <a
                  href="/01Felicity_Cv.pdf"
                  className="ug dh kh pe td kf lf jk bm en yi si ai ei ci"
                  download="01Felicity_Cv.pdf"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
