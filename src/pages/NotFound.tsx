import { IoIosCloseCircle } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import Layout from "../components/Layout";

export default function NotFound() {
   return (
      <Layout is404>
         <div
            className="shadow p-7 rounded-2 text-center"
            style={{
               display: "flex",
               flexDirection: "column",
               gap: 10,
               alignItems: "center",
            }}
         >
            <IoIosCloseCircle size={100} className="text-danger" />
            <p className="fw-bold display-6">Ooopps...</p>
            <p className="fs-4">Halaman Tidak Ditemukan</p>
            <a href="/" className="btn btn-primary">
               <FaHome className="me-2" /> Kembali
            </a>
         </div>
      </Layout>
   );
}
