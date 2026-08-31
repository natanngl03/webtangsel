import "./style.css";
import Data from "./data.json";

export default function Faq() {
   return (
      <section className="container-fluid bg-white py-7" id="faq">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-md-8">
                  <h2 className="mb-4 wow fadeInUp" data-wow-delay="0.2s">
                     Yang Sering Ditanyakan
                  </h2>
                  <div className="accordion" id="faqAccordion">
                     {Data.map((item, idx) => {
                        const animate = `0.${idx + 1}s`;

                        return (
                           <div className="accordion-item wow fadeInUp" data-wow-delay={animate} key={`faq${idx}`}>
                              <h3 className="accordion-header">
                                 <button
                                    className={`accordion-button ${idx > 0 && "collapsed"}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#faq${idx}`}
                                    aria-expanded={idx == 0}
                                    aria-controls={`faq${idx}`}
                                 >
                                    {item.question}
                                 </button>
                              </h3>
                              <div id={`faq${idx}`} className={`accordion-collapse collapse ${idx == 0 && "show"}`} data-bs-parent="#faqAccordion">
                                 <div className="accordion-body">{item.answer}</div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
