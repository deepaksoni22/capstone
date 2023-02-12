
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import HeaderText from "./Components/HeaderText/HeaderText";
import "./App.css";
import MidTable from "./Components/MidTable/MidTable";
import Blocks from "./Components/Blocks/Blocks";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <div className="App-header">
          <NavBar />
        </div>
      </header>
      <section>
        <div className="mainPage-wrapper">
          {" "}
          <div>
            {" "}
            <HeaderText />
          </div>
          <div className="login-page-wrapper">
            {" "}
            <Login />
          </div>
          <div className="midTable">
            <MidTable />
          </div>
        </div>
        <div className="blocks-wrapper">
          <Blocks />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
