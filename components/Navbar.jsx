"use client";
import { useRouter } from "next/navigation"; // Import from next/navigation
import { useEffect } from "react";
const Navbar = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("Menu scroll script loaded");
    const pageLink = document.querySelectorAll(".menu-scroll");

    pageLink.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();

        const target = elem.getAttribute("href"); // e.g., "#about"
        const targetSection = document.querySelector(target);

        if (targetSection) {
          // If the section exists on the current page, scroll to it
          targetSection.scrollIntoView({
            behavior: "smooth",
            offsetTop: 1 - 60,
          });
        } else {
          // If the section doesn't exist, navigate to the homepage with a query parameter
          console.log("Navigating to homepage for:", target);
          router.push(`/${target}`);
        }
      });
    });

    return () => {
      pageLink.forEach((elem) => elem.removeEventListener("click", () => {}));
    };
  }, [router]);

  return (
    <div>
      <header className="header me d f g y bc mb id ai">
        <div className="a">
          <div className="mb ca id ld e">
            <div className="df cc oc">
              <a href="/" className="header-logo bc kb ef xl">
                <img src="/images/devfelz.svg" alt="logo" className="bc" />
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
