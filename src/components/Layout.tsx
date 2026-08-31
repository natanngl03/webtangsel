import { type ReactNode, Fragment, useEffect } from "react";
import Navbar from "./Section/Navbar/Navbar";
import Footer from "./Section/Footer";

export default function Layout({ children, is404 }: { children: ReactNode; is404?: boolean }) {
   useEffect(() => {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
   }, []);

   return (
      <Fragment>
         <Navbar is404={is404} />
         {children}
         <Footer />
      </Fragment>
   );
}
