import React from 'react';

const Breadcrumbs = () => {
    return (
        <section className="breadcrumbs bg-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#!">Главная</a></li>
                                <li className="breadcrumb-item active"><a href="#!">Экошпон</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumbs;