import PricingCard, { type PricingCardProps } from "../../element/PricingCard";
import Json from "./data.json";

const Data = Json as PricingCardProps[];

export default function Pricing() {
   return (
      <section className="container-fluid py-7" id="pricing">
         <h2 className="text-center display-5 mb-4 wow fadeInUp" data-wow-delay="0.1s">
            Pilih <span className="text-primary">Paket</span> Anda
         </h2>

         <p className="text-center mx-auto wow fadeInUp" style={{ maxWidth: "600px" }} data-wow-delay="0.2s">
            Tidak perlu mengeluarkan budget besar untuk memiliki website. Pilih paket yang sesuai dengan kebutuhan bisnis Anda dan mulai tampil lebih profesional di internet.
         </p>
         <div className="container">
            <div className="row g-4 pt-7">
               {Data.map((item, idx) => (
                  <div className="col-md-4 wow fadeInUp" data-wow-delay={`0.${idx + 1}s`} key={`pricingcard${idx}`}>
                     <PricingCard {...item} />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
