import {
    ABOUT_ROUTE,
    CATALOG_ROUTE,
    CATEGORY_EKOSHPON_LIGHT_ROUTE,
    CATEGORY_EKOSHPON_ROUTE, CATEGORY_WHITE_ROUTE,
    CATEGORY_CLASSIC_ROUTE,
    CONTACTS_ROUTE,
    INDEX_ROUTE,
    CATEGORY_FURNITURE_DOORHANDLE_ROUTE, CATEGORY_EMAL_ROUTE
} from "./utils/consts";
import DoorPage from "./pages/DoorPage";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import CatalogFurniture from "./pages/CatalogFurniture";
import FurniturePage from "./pages/FurniturePage";

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
        path: CATEGORY_EKOSHPON_LIGHT_ROUTE,
        Component: <Catalog/>
    },
    {
        path: CATEGORY_EKOSHPON_ROUTE,
        Component: <Catalog/>
    },
    {
        path: CATEGORY_WHITE_ROUTE,
        Component: <Catalog/>
    },
    {
        path: CATEGORY_CLASSIC_ROUTE,
        Component: <Catalog />
    },
    {
        path: CATEGORY_EMAL_ROUTE,
        Component: <Catalog />
    },
     {
         path: CATEGORY_FURNITURE_DOORHANDLE_ROUTE,
         Component: <CatalogFurniture />
     },
    {
        path: CATEGORY_FURNITURE_DOORHANDLE_ROUTE + '/:id',
        Component: <FurniturePage />
    }
]