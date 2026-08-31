import { waConsult } from "../../../utils/helper";

export default function Info() {
   return (
      <section className="container-fluid bg-primary text-white text-center py-6">
         <div className="container wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="mb-4">
               Kami Berlokasi Di Tangerang Selatan
               <br />
               Melayani Pembuatan Website Seluruh INDONESIA
            </h2>

            <a href={waConsult()} target="_blank" rel="noopener noreferrer" className="btn border text-white fw-bold">
               <div className="d-flex align-items-center">
                  <i className="fab fa-whatsapp fa-2x me-2"></i>
                  <span>Konsultasi Sekarang</span>
               </div>
            </a>
         </div>
      </section>
   );
}
