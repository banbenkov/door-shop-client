import React, {useEffect, useState} from 'react';
import Content from "./Content";
import SideBarFurniture from "./SideBarFurniture";
import ContentFurniture from "./ContentFurniture";

const ListingFurniture = () => {
    return (
        <section className="pt-6 bg-white mb-2">
            <div className="container">

                <div className="row gutter-4">

                    {/*sidebar*/}
                    <SideBarFurniture />

                    {/*content*/}
                    <ContentFurniture />

                </div>
            </div>
        </section>
    );
};

export default ListingFurniture;