"use client"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react";
import Country from "../../../../lib/countryFlag.json";
import Link from "next/link";
import Cookies from 'js-cookie';
import Script from "next/script";



const Navbar = () => {
    const path = usePathname();
    const [country, setCountry] = useState("");
    const [error, setError] = useState(null);
    const [flagUrl, setFlagUrl] = useState("/assets/img/flag/united-states.png");
    const [currency, setCurrency] = useState("USD");

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                    const data = await response.json();
                    setCountry(data.countryName);
                    setFlagUrl(Country[data.countryName].flag);
                    setCurrency(Country[data.countryName].currency);
                    console.log({ countryObj: Country[data.countryName], countryName: data.countryName }, "IN NAV");
                    localStorage.setItem("country", JSON.stringify(Country[data.countryName]));
                    Cookies.set("country", JSON.stringify(Country[data.countryName], { expires: 1 }));
                },
                (error) => console.log(error)
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        };


        if (document) {
            const gtag = document.createElement("script");
            gtag.src = "https://www.googletagmanager.com/gtag/js?id=AW-16665917801";

            const inlineScript = document.createElement('script');
            inlineScript.innerHTML = `
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'AW-16665917801');`


            const jqueryScript = document.createElement("script");
            jqueryScript.src = "assets/js/jquery.min.js";
            const countrScript = document.createElement("script");
            countrScript.src = "assets/js/counterup.min.js";
            const customScript = document.createElement("script");
            customScript.src = "/assets/js/custom.js";

            document.head.appendChild(gtag);
            document.head.appendChild(inlineScript);
            document.head.appendChild(jqueryScript);
            document.head.appendChild(countrScript);
            document.head.appendChild(customScript);


            //talk to
            let tawktoScript = document.createElement("script");
            tawktoScript.type = "text/javascript";
            tawktoScript.innerHTML = `(function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/66bce0ce146b7af4a43a7218/1i58ssag4';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();
            `

            document.head.appendChild(tawktoScript);
            //end tawkTo

            //analytics script
            const analyticsScript = document.createElement("script");
            analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=G-60RXPVQX7D";
            const analyticsInline = document.createElement("script");
            analyticsInline.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-60RXPVQX7D');
            `;

            const clarityScript = document.createElement("script");
            clarityScript.innerHTML = `
                  (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "nrs7azjqz2");
            `

            document.head.appendChild(analyticsScript);
            document.head.appendChild(clarityScript);

            return () => {
                document.head.removeChild(gtag);
                document.head.removeChild(inlineScript);
                document.head.removeChild(jqueryScript);
                document.head.removeChild(countrScript);
                document.head.removeChild(analyticsScript);
                document.head.removeChild(clarityScript);
                // document.head.removeChild(conversionScript);

            };
        };

    }, []);
    return <>
        <Script src="assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="assets/js/counterup.min.js" strategy="beforeInteractive" />

        <div className={`header ${path === "/" ? 'header-transparent theme' : 'navbar-light'}`} >
            <div className="container" >
                <nav id="navigation" className="navigation navigation-landscape">
                    <div className="nav-header">
                        <a className="nav-brand static-show" href="#">
                            <img src="/assets/images/skyfly-logo.png" className="logo" alt="" /></a>
                        <a className="nav-brand mob-show" href="#">
                            <img src="/assets/images/skyfly-logo.png" className="logo" alt="" /></a>
                        <div className="nav-toggle"></div>
                        <div className="mobile_nav">
                            <ul>
                                <li className="currencyDropdown me-2">
                                    <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span
                                        className="fw-medium">{currency}</span></a>
                                </li>
                                <li className="languageDropdown me-2">
                                    <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal">
                                        <img src={flagUrl} className="img-fluid" width="17" alt="Country" /></a>
                                </li>
                                <li>
                                    <a href="#" className="bg-light-primary text-primary rounded" data-bs-toggle="modal"
                                        data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-menus-wrapper" style={{ transitionProperty: "none" }}>
                        <ul className="nav-menu">

                            <li><Link href="/">Home<span className="submenu-indicator"></span></Link>
                            </li>

                            <li><a href="JavaScript:Void(0);">About Us<span className="submenu-indicator"></span></a>

                            </li>

                            <li><a href="JavaScript:Void(0);">Pages<span className="submenu-indicator"></span></a>

                            </li>

                            <li><a href="JavaScript:Void(0);">Menu<span className="submenu-indicator"></span></a>

                            </li>

                            <li><a href="documantion/index.html" target="_blank">Docs</a></li>

                        </ul>

                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li className="currencyDropdown me-2">
                                <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span
                                    className="fw-medium">{currency}</span></a>
                            </li>
                            <li className="languageDropdown me-2">
                                <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal">
                                    <img src={flagUrl} className="img-fluid" width="17" alt="Country" /></a>
                            </li>
                            <li style={{ marginRight: "5px" }} className="list-buttons">
                                <a href="#" className="bg-primary" data-bs-toggle="modal" data-bs-target="#login"><i
                                    className="fa-regular fa-circle-user fs-6 me-2"></i>Sign In / Register</a>
                            </li>
                            <li className="list-buttons">
                                <a style={{ display: "flex", flexDirection: "column", fontSize: "18px" }} href="tel:+1 (888) 267-5955" className="bg-primary" data-bs-toggle="modal" data-bs-target="#login">
                                    <span style={{ fontSize: "8px" }} >Call 24/7 for our best deals</span>
                                    +1 (888) 267-5955
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </>
}


export default Navbar;