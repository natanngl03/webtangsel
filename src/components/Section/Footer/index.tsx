import "./style.css";
import { waConsult } from "../../../utils/helper";
import WaButton from "../../element/WaButton";

export default function Footer() {
   return (
      <footer>
         <div className="container-fluid footer py-7 wow fadeIn" data-wow-delay="0.2s">
            <div className="container">
               <div className="row g-5">
                  <div className="col-xl-4 ">
                     <div className="footer-item d-flex flex-column">
                        <div className="footer-item text-white">
                           <h2 className="text-white mb-4 fs-4">WEBTANGSEL</h2>
                           <p className="mb-3">Wujudkan website impian Anda dengan harga terjangkau. Cocok untuk bisnis, UMKM, profile bisnis, dan kebutuhan profesional.</p>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-4 d-md-flex justify-content-lg-center">
                     <div className="footer-item d-flex flex-column">
                        <h2 className="text-white mb-4 fs-4">Jam Operasional</h2>
                        <div className="mb-3">
                           <p className="text-muted mb-0">Senin - Sabtu:</p>
                           <p className="text-white mb-0">09:00 - 20:00</p>
                        </div>
                        <div className="mb-3">
                           <p className="text-muted mb-0">Minggu/Merah:</p>
                           <p className="text-white mb-0">Libur</p>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-4 text-white">
                     <div className="footer-item d-flex flex-column text-lg-end">
                        <h2 className="mb-4 fs-4">Kontak Info</h2>
                        <span>
                           <i className="fa fa-map-marker-alt me-2"></i> Perumahan Griya Asri B3/10, Jelupang, Tangerang Selatan
                        </span>

                        <a href={waConsult()} target="_blank" rel="noopener noreferrer">
                           <i className="fab fa-whatsapp me-2"></i> {`0857 8753 5301 (WA Only)`}
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Footer Selesai */}

         {/* Copyright Mulai */}
         <div className="copyright py-4">
            <p className="text-white text-center">
               Copyright © {new Date().getFullYear()} - Made With <i className="fas fa-heart text-danger"></i>
            </p>
         </div>
         {/* Copyright Selesai */}

         <WaButton />
      </footer>
   );
}
