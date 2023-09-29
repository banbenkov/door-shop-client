import React, {useState} from 'react';
import CatalogMenu from "./CatalogMenu";

const SideBarFurniture = () => {

    return (
        <aside className="col-lg-3 sidebar">
            <CatalogMenu />
        </aside>
    );
};

export default SideBarFurniture;