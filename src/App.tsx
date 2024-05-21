import { box } from "./constants/boxes";
import "./styles/global.css";

function App() {
  return (
    <>
      <main className="bg-primary w-full">
        <header className={`${box.paddingX} ${box.flexCenter}`}></header>
      </main>
    </>
  );
}

export default App;
