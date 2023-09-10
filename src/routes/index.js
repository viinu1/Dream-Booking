import Detail from "../pages/Detail/Detail";
// import { AdminLayout } from "../components/Layout";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Dashboard from "../Admin/Dashboard";
import { AdminLayout } from "../components/Layout";
import { listRoom } from "../Admin/Room";
import Customer from "../Admin/Customer";
import OrderRoom from "../pages/OrderRoom";
import Account from "../pages/Account";
import Hotel from "../Admin/Hotel/Hotel";
import Discount from "../Admin/Discount";
import RoomOrder from "../Admin/RoomOrder";
import About from "../pages/About";

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
        path: '/about',
        component: About,
    },
    {
        path: '/detail/:id',
        component: Detail,
    },
    {
        path: '/:idHotel/:id/order',
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
        path: '/admin/discount',
        component: Discount,
        layout: AdminLayout,
    },
    {
        path: '/admin/khachsan',
        component: Hotel,
        layout: AdminLayout,
    },
    {
        path: '/admin/order',
        component: RoomOrder,
        layout: AdminLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
