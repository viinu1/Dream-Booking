import Detail from "../pages/Detail/Detail";
// import { AdminLayout } from "../components/Layout";
import Home from "../pages/Home/Home";
import Search from "../pages/Search";
import Dashboard from "../Admin/Dashboard";
import { AdminLayout } from "../components/Layout";
import {  listService } from "../Admin/Services";
import { listRoom } from "../Admin/Room";
import Customer from "../Admin/Customer/Customer";
import OrderRoom from "../pages/OrderRoom";
import Account from "../pages/Account";
import Hotel from "../Admin/Hotel/Hotel";

//public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/account',
        component: Account,
    },
    {
        path: '/detail/:id',
        component: Detail,
    },
    {
        path: '/detail/:id/order',
        component: OrderRoom,
    },
    {
        path: '/admin',
        component: Dashboard,
        layout:AdminLayout,
       
    },
    {
        path: '/admin/customer',
        component: Customer,
        layout: AdminLayout,
    },
    
    {
        path: '/admin/room',
        component: listRoom,
        layout: AdminLayout,
    },
    {
        path: '/admin/service',
        component: listService,
        layout: AdminLayout,
    },
    {
        path: '/admin/khachsan',
        component: Hotel,
        layout: AdminLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
