import React from "react";

const ContactSection = () => {
  return (
    <div>
      <section id="contact" className="vf">
        <div className="a">
          <div className="mb hd ca">
            <div className="bc df">
              <div className="vc fa sg gb">
                <span className="fh _g mh kb ta"> Contact With Me </span>
                <h2 className="dh jh wg wj kk oa">Have an Project in Mind?</h2>
                <p className="eh _g lh">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="mb kd ga">
            <div className="bc ql/12 df">
              <form>
                <div className="mb hd ga">
                  <div className="bc ek/2 df">
                    <div className="eb">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div className="bc ek/2 df">
                    <div className="eb">
                      <input
                        type="text"
                        placeholder="Company (Optional)"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div className="bc ek/2 df">
                    <div className="eb">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div className="bc ek/2 df">
                    <div className="eb">
                      <input
                        type="text"
                        placeholder="Phone number"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div className="bc df">
                    <div className="eb">
                      <textarea
                        rows="4"
                        placeholder="Tell me about your project"
                        className="input-field ed"
                      ></textarea>
                    </div>
                  </div>
                  <div className="bc df">
                    <div className="pg sg">
                      <button className="nb kd id sf tf td fh kh pe fa ai ci ei yi si">
                        Contact Me
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
