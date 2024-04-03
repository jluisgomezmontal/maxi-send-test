import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
