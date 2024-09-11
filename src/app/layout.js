import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/page";
import Footer from "./_components/Footer/page";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { StrictMode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cheap Flights, Compare Flights & Airline Deals - in.Cheapflights.com",
  description: "Find the cheapest flight tickets with Skyfly! Compare prices effortlessly and book the best deals on flights through our advanced algorithm. Start saving on your next trip today",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <StrictMode>
      <html lang="en">
        <head>
          {/* All Plugins */}
          <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/assets/css/animation.css" rel="stylesheet" />
          <link href="/assets/css/dropzone.min.css" rel="stylesheet" />
          <link href="/assets/css/flatpickr.min.css" rel="stylesheet" />
          <link href="/assets/css/flickity.min.css" rel="stylesheet" />
          <link href="/assets/css/lightbox.min.css" rel="stylesheet" />
          <link href="/assets/css/magnifypopup.css" rel="stylesheet" />
          <link href="/assets/css/select2.min.css" rel="stylesheet" />
          <link href="/assets/css/rangeSlider.min.css" rel="stylesheet" />
          <link href="/assets/css/prism.css" rel="stylesheet" />
          {/* Font Awsome & Bootstrap css */}
          <link href="/assets/css/bootstrap-icons.css" rel="stylesheet" />
          <link href="/assets/css/fontawesome.css" rel="stylesheet" />
          {/* Google tag manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        (function(w, d, s, l, i) {
                            w[l] = w[l] || [];
                            w[l].push({
                                "gtm.start": new Date().getTime(),
                                event: "gtm.js"
                            });
                            var f = d.getElementsByTagName(s)[0],
                                j = d.createElement(s),
                                dl = l != "dataLayer" ? "&l=" + l : "";
                            j.async = true;
                            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                            f.parentNode.insertBefore(j, f);
                        })(window, document, "script", "dataLayer", "GTM-PR7RP7NQ");
                        `,
            }}
          />
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PR7RP7NQ"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

          <script src="assets/js/jquery.min.js" ></script>
          <script src="assets/js/popper.min.js"></script>
          <script src="assets/js/bootstrap.min.js"></script>
          <script src="assets/js/dropzone.min.js"></script>
          <script src="assets/js/flatpickr.js"></script>
          <script src="assets/js/lightbox.min.js"></script>
          <script src="assets/js/prism.js"></script>
          {/* End Google tag manager */}
          {/* Custom Css */}
          <link href="/assets/css/style.css" rel="stylesheet" />
        </head>
        <body className={inter.className}>
          <div id="main-wrapper" >
            <Navbar />
            <ToastContainer />
            <div className="clearfix"></div>
            {children}
            {/* <!-- All Jquery --> */}
            {/* <!-- ============================================================== --> */}
            {/* <Script src="assets/js/flickity.pkgd.min.js" strategy="lazyOnload" /> */}
            {/* <script src="assets/js/flickity.pkgd.min.js"></script> */}
            {/* <script src="assets/js/addadult.js"></script> */}
            {/* <script src="assets/js/custom.js"></script> */}
            {/* <!-- ============================================================== -->
  <!-- This page plugins -->
  <!-- ============================================================== --> */}
          </div>
          <a href="javascript:" id="SeersDoNotSell">Do Not Sell or Share My Personal Information</a>
          <Footer />
          <div className="main_info_ad" >
            <div className="info_container" >
              <div className="call_icon" >
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="number_container" >
                <p>Save time and get our best deals.</p>
                <a href="tel:+1(888)267-5955" > <h2>+1 (888) 267-5955 </h2></a>
              </div>
            </div>
          </div>
        </body>
      </html>
    </StrictMode >
  );
}
