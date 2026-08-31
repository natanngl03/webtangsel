import "./style.css";
import { waConsult } from "../../../utils/helper";

export default function WaButton() {
   return (
      <a className="btn text-white wa-btn d-lg-none" href={waConsult()} target="_blank" rel="noopener noreferrer" id="waBtn">
         <p className="m-0">Hubungi Kami</p>
         <i className="fab fa-whatsapp fa-2x"></i>
      </a>
   );
}
