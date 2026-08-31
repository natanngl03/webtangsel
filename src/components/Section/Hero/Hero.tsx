import WebsiteSVG from "../../svg/WebsiteSVG";

export default function Hero() {
   return (
      <header className="container-fluid bg-primary py-5 py-md-7">
         <div className="container">
            <div className="row g-5">
               <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                  <h1 className="text-white display-4 text-center text-md-start fw-bold mb-5">Website Murah Di Tangerang Selatan</h1>

                  <p className="text-white text-center text-md-start fs-5">
                     Punya website tidak harus mahal. Kami buatkan website professional yang sesuai kebutuhan bisnis Anda. Ayo, jangkau pelanggan Anda lebih luas dengan website harga terjangkau.
                  </p>
               </div>
               <div className="col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                  <div className="d-flex justify-content-center justify-content-md-end">
                     <WebsiteSVG width="80%" height="80%" />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}
