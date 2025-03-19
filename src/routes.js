import {
    ABOUT_ROUTE,
    CATALOG_ROUTE,
    CATEGORY_3D_ROUTE,
    CATEGORY_EKOSHPON_ROUTE,
    CATEGORY_WHITE_ROUTE,
    CATEGORY_CLASSIC_ROUTE,
    CONTACTS_ROUTE,
    INDEX_ROUTE,
    CATEGORY_FURNITURE_DOORHANDLE_ROUTE,
    CATEGORY_EMAL_ROUTE,
    CATEGORY_FURNITURE_LATCH_ROUTE,
    CATEGORY_EMALIT_ROUTE,
    PORTFOLIO_ROUTE,
    CATEGORY_SOSNA_ROUTE,
    CATEGORY_DUB_ROUTE,
    SEARCH,
    FAVORITES, CATEGORY_EKOSHPON_LIGHT_ROUTE, PRIVACY_POLICY, CATEGORY_GRAFFITI
} from "./utils/consts";
import DoorPage from "./pages/DoorPage";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import CatalogFurniture from "./pages/CatalogFurniture";
import FurniturePage from "./pages/FurniturePage";
import Portfolio from "./pages/Portfolio";
import FavoritesPage from "./pages/FavoritesPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export const publicRoutes = [
    {
        path: INDEX_ROUTE,
        Component: <Index/>
    },
    {
        path: CATALOG_ROUTE,
        Component: <Catalog/>,

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
        path: PRIVACY_POLICY,
        Component: <PrivacyPolicy/>
    },
    {
        path: CONTACTS_ROUTE,
        Component: <Contacts/>
    },
    {
        path: CATEGORY_3D_ROUTE,
        Component: <Catalog/>
    },
    {
        path: CATEGORY_EKOSHPON_ROUTE,
        Component: <Catalog/>
    },
    {
        path: CATEGORY_EKOSHPON_LIGHT_ROUTE,
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
        path: CATEGORY_EMALIT_ROUTE,
        Component: <Catalog />
    },
    {
        path: CATEGORY_SOSNA_ROUTE,
        Component: <Catalog />
    },
    {
        path: CATEGORY_DUB_ROUTE,
        Component: <Catalog />
    },
    {
        path: CATEGORY_GRAFFITI,
        Component: <Catalog />
    },
    {
         path: CATEGORY_FURNITURE_DOORHANDLE_ROUTE,
         Component: <CatalogFurniture />
    },
    {
        path: CATEGORY_FURNITURE_DOORHANDLE_ROUTE + '/:id',
        Component: <FurniturePage />
    },
    {
        path: CATEGORY_FURNITURE_LATCH_ROUTE,
        Component: <CatalogFurniture />
    },
    {
        path: CATEGORY_FURNITURE_LATCH_ROUTE + '/:id',
        Component: <FurniturePage />
    },
    {
        path: PORTFOLIO_ROUTE,
        Component: <Portfolio />
    },
    {
        path: SEARCH,
        Component: <Catalog />
    },
    {
        path: FAVORITES,
        Component: <FavoritesPage />
    }
]