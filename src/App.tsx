import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "./components/element/Loader";

export default function App() {
   return (
      <Suspense fallback={<Loader />}>
         <Outlet />
      </Suspense>
   );
}
