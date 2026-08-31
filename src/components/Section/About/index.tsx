import "./style.css";
import ForWhoIMG from "../../../assets/img/forwho.jpg";

export default function About() {
   return (
      <section className="container-fluid feature py-7" id="about">
         <div className="container">
            <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
               <h2 className="display-5 text-capitalize mb-3">
                  Punya Bisnis, Saatnya Punya <span className="text-primary">Website</span>
               </h2>
               <p className="mb-0">
                  <span className="fw-bold">Budget terbatas tapi ingin bisnis terlihat lebih profesional?</span> <br />
                  <br /> Kami menyediakan jasa pembuatan website harga terjangkau untuk membantu bisnis Anda tampil lebih profesional di internet. Website dibuat fokus pada menampilkan bisnis, produk
                  atau jasa, dan informasi penting agar calon pelanggan lebih mudah mengenal dan tertarik dengan bisnis Anda.
                  <br />
                  <span>Dengan website, bisnis Anda bisa:</span>
               </p>
            </div>
            <div className="row g-4 align-items-center">
               <div className="col-xl-4">
                  <div className="row gy-4 gx-0">
                     <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item">
                           <div className="feature-icon">
                              <span className="fa fa-trophy fa-2x"></span>
                           </div>
                           <div className="ms-4">
                              <p className="mb-0 fw-bold">Menjangkau calon pelanggan lebih luas</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item">
                           <div className="feature-icon">
                              <span className="fa fa-road fa-2x"></span>
                           </div>
                           <div className="ms-4">
                              <p className="mb-0 fw-bold">Terlihat lebih profesional dan terpercaya</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                  <img src={ForWhoIMG} className="img-fluid w-100 rounded-2" style={{ objectFit: "cover" }} alt="Img" />
               </div>
               <div className="col-xl-4">
                  <div className="row gy-4 gx-0">
                     <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item justify-content-end">
                           <div className="text-end me-4">
                              <p className="mb-0 fw-bold">Memudahkan pelanggan menemukan informasi bisnis</p>
                           </div>
                           <div className="feature-icon">
                              <span className="fa fa-tag fa-2x"></span>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item justify-content-end">
                           <div className="text-end me-4">
                              <p className="mb-0 fw-bold">Memberikan kesan lebih meyakinkan saat menawarkan produk atau jasa</p>
                           </div>
                           <div className="feature-icon">
                              <span className="fa fa-map-pin fa-2x"></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
