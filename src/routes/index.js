import Detail from "../pages/Detail/Detail";
// import { AdminLayout } from "../components/Layout";
import Home from "../pages/Home/Home";
import Search from "../pages/Search";
import Dashboard from "../Admin/Dashboard";
import { AdminLayout } from "../components/Layout";
import { addCustomer, listCustomer } from "../Admin/Customer";
import {  listService } from "../Admin/Services";
import { listRoom } from "../Admin/Room";


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
        path: '/detail/:id',
        component: Detail,
    },
    {
        path: '/admin',
        component: Dashboard,
        layout:AdminLayout,
       
    },
    {
        path: '/admin/customer',
        component: listCustomer,
        layout: AdminLayout,
    },
    {
        path: '/admin/customer/add',
        component: addCustomer,
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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
