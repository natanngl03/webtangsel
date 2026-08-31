import "./assets/scss/bootstrap.min.css";
import "./main.css";

import { ViteReactSSG } from "vite-react-ssg";
import PublicRoutes from "./routes/PublicRoutes";

const router = [...PublicRoutes];

export const createRoot = ViteReactSSG({ routes: router });
