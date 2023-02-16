import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonAppBar from "./components/Appbar/ButtonAppBar";
import Domain from "./pages/Domain/Domain";
import Home from "./pages/Home/Home";
import TreeUI from "./pages/TreeUI/TreeUI";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/domains/:id" element={<Domain />} />
          <Route path="/tree-ui" element={<TreeUI />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
