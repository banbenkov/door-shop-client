import React from 'react';
import SideBar from "./SideBar";
import Content from "./Content";

const Listing = () => {
    return (
        <section className="pt-6 bg-white mb-2">
            <div className="container">

                <div className="row gutter-4">

                    {/*sidebar*/}
                    <SideBar />

                    {/*content*/}
                    <Content />

                </div>
            </div>
        </section>
    );
};

export default Listing;