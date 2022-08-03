import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Navi from "./Navi";
import store from "./store";
import SupForm from "./SupForm";
import SupList from "./SupList";

export default function End() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navi/>
        
        <Routes>
          <Route path="/" element={<SupList />}></Route>
          <Route path="/form" element={<SupForm />}></Route>
          {/* NO MATCH ROUTE */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
