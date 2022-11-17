import React from 'react';

const AccordionDoorhandle = ({collapse1, collapse2, furniture, openTab1, openTab2}) => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="accordion" id="accordion-1">
                        <div className="card active">
                            <div className="card-header" id="heading-1-1">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse"
                                            data-target="#collapse-1-1"
                                            aria-expanded={`${collapse1 ? 'true' : 'false'}`}
                                            aria-controls="collapse-1-1" onClick={openTab1}>
                                        Характеристики
                                    </button>
                                </h5>
                            </div>

                            <div id="collapse-1-1" className={`collapse ${collapse1 ? 'show' : ''}`}
                                 aria-labelledby="heading-1-1"
                                 data-parent="#accordion-1">
                                <div className="card-body">
                                    <ul className="list list--unordered">
                                        <li>Производитель: {furniture.manufacturer}</li>
                                        <li>Страна: {furniture.country}</li>
                                        <li>Вес: {furniture.weight} г</li>
                                        <li>Габариты инд уп-ки (ШхГхВ): {furniture.dimensionsPack} мм</li>
                                        <li>Материал: {furniture.material}</li>
                                        <li>Тип дверей: {furniture.typeDoor}</li>
                                        <li>Толщина двери: {furniture.weightDoor}</li>
                                        <li>Серия: {furniture.series}</li>
                                        <li>Способ установки: {furniture.installMethod}</li>
                                        <li>Диаметр розетки (основания): {furniture.diameter} мм</li>
                                        <li>Тип крепления ручки: {furniture.mountType}</li>
                                        <li>Покрытие: {furniture.coating}</li>
                                        <li>Форма основания: {furniture.baseShape}</li>
                                        <li>Фиксация декоративного кольца: {furniture.fixation}</li>
                                        <li>Длина квадрата: {furniture.csquareLength}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="heading-1-2">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button"
                                            data-toggle="collapse" data-target="#collapse-1-2"
                                            aria-expanded={`${collapse2 ? 'true' : 'false'}`}
                                            aria-controls="collapse-1-2"
                                            onClick={openTab2}>
                                        Описание
                                    </button>
                                </h5>
                            </div>
                            <div id="collapse-1-2" className={`collapse ${collapse2 ? 'show' : ''}`}
                                 aria-labelledby="heading-1-2"
                                 data-parent="#accordion-1">
                                <div className="card-body">
                                    <p>{furniture.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionDoorhandle;