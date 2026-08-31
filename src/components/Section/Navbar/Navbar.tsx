import { Fragment, useEffect, useState } from "react";
import Logo from "../../../assets/img/logo4.png";
import { waConsult } from "../../../utils/helper";

const NavItems = [
   { id: "", label: "Beranda" },
   { id: "about", label: "Tentang" },
   { id: "pricing", label: "Harga" },
   { id: "faq", label: "Pertanyaan" },
];

export default function Navbar({ is404 }: { is404?: boolean }) {
   const [activeSection, setActiveSection] = useState("home");

   const handleOnNavigate = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
      event.preventDefault();

      if (!sectionId) {
         window.scrollTo({
            top: -30,
            behavior: "smooth",
         });
      } else {
         const element = document.getElementById(sectionId);

         element?.scrollIntoView({
            behavior: "smooth",
            block: "start",
         });
      }
   };

   // useEffect(() => {
   //    const sections = document.querySelectorAll("section[id]");

   //    const observer = new IntersectionObserver(
   //       (entries) => {
   //          entries.forEach((entry) => {
   //             if (entry.isIntersecting) {
   //                setActiveSection(entry.target.id);
   //             }
   //          });
   //       },
   //       {
   //          rootMargin: "-20% 0px -60% 0px",
   //          threshold: 0,
   //       },
   //    );

   //    sections.forEach((section) => observer.observe(section));

   //    return () => {
   //       sections.forEach((section) => observer.unobserve(section));
   //    };
   // }, []);

   useEffect(() => {
      const sections = document.querySelectorAll("section[id]");

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setActiveSection(entry.target.id);
               }
            });
         },
         {
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0,
         },
      );

      const handleScroll = () => {
         if (window.scrollY === 0) {
            setActiveSection("home");
         }
      };

      sections.forEach((section) => observer.observe(section));
      window.addEventListener("scroll", handleScroll);

      handleScroll();

      return () => {
         sections.forEach((section) => observer.unobserve(section));
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <nav className="container-fluid nav-bar sticky-top">
         <div className="container py-2">
            <div className="navbar navbar-expand-lg navbar-light">
               <a href="/" className="navbar-brand p-0">
                  <img src={Logo} alt="Logo" width="100%" style={{ maxWidth: "200px" }} />
               </a>

               {!is404 && (
                  <Fragment>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                     </button>

                     <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                           {NavItems.map((item, idx) => (
                              // <a href={`#${item.id}`} className={`nav-item nav-link ${activeSection === item.id && "active"}`} onClick={(e) => handleOnNavigate(e, item.id)} key={`navitem${idx}`}>
                              //    {item.label}
                              // </a>
                              <a
                                 href={`#${item.id}`}
                                 className={`nav-item nav-link ${idx == 0 && activeSection == "home" ? "active" : activeSection === item.id ? "active" : ""}`}
                                 onClick={(e) => handleOnNavigate(e, item.id)}
                                 key={`navitem${idx}`}
                              >
                                 {item.label}
                              </a>
                           ))}
                        </div>

                        <a href={waConsult()} target="_blank" rel="noopener noreferrer" className="btn btn-success rounded-pill py-2 px-4 flex-shrink-0">
                           <div className="d-flex align-items-center text-white">
                              <i className="fab fa-whatsapp fa-2x me-2"></i>
                              <span className="fw-bold">Hubungi Kami</span>
                           </div>
                        </a>
                     </div>
                  </Fragment>
               )}
            </div>
         </div>
      </nav>
   );
}
