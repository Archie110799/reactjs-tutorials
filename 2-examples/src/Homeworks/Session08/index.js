import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function Session08() {
  return (
    <div>
      <BrowserRouter>
        {/* NAVIGATION */}
        <Navigation />

        {/* ROUTES SETTINGS */}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* CUSTOMER ROUTES */}
          <Route path="/customer" element={<Customer />}>
            <Route index element={<CustomerList />} />
            <Route path="/customer/list" element={<CustomerList />} />
            <Route path="/customer/detail/:id" element={<CustomerForm />} />
            <Route path="/customer/form" element={<CustomerForm />} />
            <Route path="/customer/edit/:id" element={<CustomerForm />} />
            <Route path="/customer/delete/:id"/>
          </Route>

          {/* Product ROUTES */}
          <Route path="/product" element={<Product />}>
            <Route index element={<ProductList />} />
            <Route path="/product/list" element={<ProductList />} />
            <Route path="/product/detail/:id" element={<ProductForm />} />
            <Route path="/product/form" element={<ProductForm />} />
            <Route path="/product/edit/:id" element={<ProductForm />} />
            <Route path="/product/delete/:id"/>
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
