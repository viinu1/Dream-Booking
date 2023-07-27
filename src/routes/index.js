import { AdminLayout, HeaderOnly } from "../components/Layout";
import { addCustomer, listCustomer } from "../pages/Admin/Customer";
import Dashboard from "../pages/Admin/Dashboard";
import { listRoom } from "../pages/Admin/Room";
import { listService } from "../pages/Admin/Services";
import Following from "../pages/Following";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Upload from "../pages/Upload";

//public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/admin',
        component: Dashboard,
        layout: AdminLayout,
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
