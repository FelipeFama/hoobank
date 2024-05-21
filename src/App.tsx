import { Hero, Navbar } from "./components";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <main className="bg-primary w-full">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
