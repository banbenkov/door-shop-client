import {ABOUT_ROUTE, CATALOG_ROUTE, CATEGORY_ROUTE, CONTACTS_ROUTE, INDEX_ROUTE} from "./utils/consts";
import DoorPage from "./pages/DoorPage";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

export const publicRoutes = [
    {
        path: INDEX_ROUTE,
        Component: <Index/>
    },
    {
        path: CATALOG_ROUTE,
        Component: <Catalog/>
    },
    {
        path: CATALOG_ROUTE + '/:id',
        Component: <DoorPage/>
    },
    {
        path: ABOUT_ROUTE,
        Component: <About/>
    },
    {
        path: CONTACTS_ROUTE,
        Component: <Contacts/>
    },
    {
        path: CATEGORY_ROUTE + '/:id',
        Component: <Catalog/>
    },
]