import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Cloudflare email decoding script */}
          <script
            data-cfasync="false"
            src="https://cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
          ></script>
          <script src="/js/bundle.js" defer />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Add the script for menu scroll directly here */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // For menu scroll functionality
                const pageLink = document.querySelectorAll('.menu-scroll');
                pageLink.forEach((elem) => {
                  elem.addEventListener('click', (e) => {
                        console.log('Menu item clicked:', elem);

                    e.preventDefault();
                    document.querySelector(elem.getAttribute('href')).scrollIntoView({
                      behavior: 'smooth',
                      offsetTop: 1 - 60,
                    });
                  });
                });

                // Section menu active on scroll
                function onScroll(event) {
                  const sections = document.querySelectorAll('.menu-scroll');
                  const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

                  for (let i = 0; i < sections.length; i++) {
                    const currLink = sections[i];
                    const val = currLink.getAttribute('href');
                    const refElement = document.querySelector(val);
                    const scrollTopMinus = scrollPos + 73;
                    if (refElement.offsetTop <= scrollTopMinus && refElement.offsetTop + refElement.offsetHeight > scrollTopMinus) {
                      document.querySelector('.menu-scroll').classList.remove('active');
                      currLink.classList.add('active');
                    } else {
                      currLink.classList.remove('active');
                    }
                  }
                }

                window.document.addEventListener('scroll', onScroll);
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
