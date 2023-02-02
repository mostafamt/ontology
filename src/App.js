import React from "react";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonAppBar from "./components/Appbar/ButtonAppBar";
import Home from "./pages/Home/Home";
import { store } from "./store/store";

const initialDomains = ["Physics", "Biology", "Mathematics"];

function App() {
  const [domains, setDomains] = React.useState(initialDomains);

  const updateDomains = (domain, id) => {
    const prevDomains = [...domains];
    prevDomains.splice(id, 1, domain);
    setDomains(prevDomains);
  };

  const deleteDomain = (id) => {
    const prevDomains = [...domains];
    prevDomains.splice(id, 1);
    setDomains(prevDomains);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home updateDomains={updateDomains} deleteDomain={deleteDomain} />
            }
          />
          {/* <Route path="/domains/:domain" element={<Domain />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
