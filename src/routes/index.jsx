import { Route, Routes } from "react-router-dom";
import { Cart, Menu, Register, Home, Login, CompletePayment, Checkout,  Orders, NewProduct, EditProduct, Products } from "../containers";


import { UserLayout } from '../layouts/UserLayout'
import { AdminLayout } from "../layouts/AdminLayout";


export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/pedidos" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete" element={<CompletePayment />} />
      </Route>


      <Route path="/Admin" element={<AdminLayout />}>
      <Route path="/Admin/pedido" element={<Orders />} /> 
      <Route path="/Admin/novo-produto" element={<NewProduct />} /> 
      <Route path="/Admin/editar-produto" element={<EditProduct />} /> 
      <Route path="/Admin/produtos" element={<Products />} /> 
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />


    </Routes>

  );
};
