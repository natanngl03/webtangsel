import { waOrder } from "../../utils/helper";

export type PricingCardProps = {
   plan: string;
   price: string;
   desc: string;
   isPopular: boolean;
   items: Array<{ icon: string; label: string }>;
};

export default function PricingCard(props: PricingCardProps) {
   const bgColor = props.plan?.toLowerCase() === "paket umkm" ? "bg-secondary" : props.plan?.toLowerCase() === "paket regular" ? "bg-success" : "bg-primary";

   return (
      <div className={`pricing-card`}>
         {props.isPopular && (
            <div className="ribbon ribbon-top-right">
               <span>Terlaris</span>
            </div>
         )}
         <div className={`ps-4 py-3 ${bgColor}`}>
            <h3 className="text-white fs-4">{props.plan}</h3>
         </div>
         <div className="card-body p-4">
            <p className="fs-3 fw-bold mb-4">{props.price}</p>
            <ul className="features">
               {props.items &&
                  props.items.map((item, idx) => (
                     <li key={`priceitem${idx}`}>
                        <i className={`me-2 ${item.icon === "check" ? "fas fa-check-circle text-success" : "fas fa-times-circle text-danger"}`}></i> <span>{item.label}</span>
                     </li>
                  ))}
            </ul>
            <a href={waOrder(props.plan)} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">
               <i className="fab fa-whatsapp me-2"></i> Pesan
            </a>
         </div>
      </div>
   );
}
