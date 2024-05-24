import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
import { box } from "./constants/boxes";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <main className="bg-primary w-full overflow-hidden">
        <Navbar />
        <Hero />
        <section className={`${box.boxWidth} ${box.paddingX}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </section>
      </main>
    </>
  );
}
