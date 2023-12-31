import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Login from './pages/login'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Products from './pages/Products'
import Orders from './pages/Orders'
import ViewCustomers from './pages/ViewCustomers'
import ViewProducts from './pages/ViewProducts'
import ViewOrders from './pages/ViewOrders'

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />

                <Route path="/layout" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="products" element={<Products />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="viewcustomers" element={<ViewCustomers />} />
                    <Route path="viewproducts" element={<ViewProducts />} />
                    <Route path="vieworders" element={<ViewOrders />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
