import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/footer";
import Header from "./Components/header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <switch>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/add-expense" element={<AddExpense />} />
          </Routes>
        </switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
