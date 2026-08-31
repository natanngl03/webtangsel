import Hero from "../components/Section/Hero/Hero";
import Layout from "../components/Layout";
import Faq from "../components/Section/Faq";
import About from "../components/Section/About";
import Info from "../components/Section/Info";
import Pricing from "../components/Section/Pricing";

export default function Home() {
   return (
      <Layout>
         <Hero />

         <main>
            <About />
            <Pricing />
            <Info />
            <Faq />
         </main>
      </Layout>
   );
}
