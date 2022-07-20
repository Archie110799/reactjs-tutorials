import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Customer from "./pages/Customer";
import CustomerForm from "./pages/Customer/pages/CustomerForm";
import CustomerList from "./pages/Customer/pages/CustomerList";
import CustomerDetail from "./pages/Customer/pages/CustomerDetail";

import Product from "./pages/Product";
import ProductForm from "./pages/Product/pages/ProductForm";
import ProductList from "./pages/Product/pages/ProductList";
import ProductDetail from "./pages/Product/pages/ProductDetail";

import Home from "./pages/Home";
import Navigation from "./components/Navigation";

const TOKEN = undefined;

function Session08() {
  return (
    <div>
      <BrowserRouter>
        {/* NAVIGATION */}
        <Navigation />

        {/* ROUTES SETTINGS (instead of "Switch" react-router) */}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* For react-router-dom v6, simply replace Redirect with Navigate */}
          <Route
            path="/auth"
            element={TOKEN ? <Navigate to="/" /> : "AuthPage"}
          />

          {/* CUSTOMER ROUTES */}
          <Route path="customer" element={<Customer />}>
            <Route index element={<CustomerList />} />
            {/* /customer/list */}
            <Route path="list" element={<CustomerList />} /> 
            <Route path="detail/:id" element={<CustomerForm />} />
            <Route path="form" element={<CustomerForm />} />
            <Route path="edit/:id" element={<CustomerForm />} />
            <Route path="delete/:id" />
          </Route>

          {/* Product ROUTES */}
          <Route path="product" element={<Product />}>
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="detail/:id" element={<ProductForm />} />
            <Route path="form" element={<ProductForm />} />
            <Route path="edit/:id" element={<ProductForm />} />
            <Route path="delete/:id" />
          </Route>

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
    </div>
  );
}

export default Session08;
