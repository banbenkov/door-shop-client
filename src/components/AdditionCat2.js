import React from 'react';

const AdditionCat2 = ({soldCheckbox}) => {
    return (
        <div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 2000, 'Коробка телескоп комплект(2,5шт)-2000₽')} type="checkbox"
                       className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" htmlFor="customCheck1">
                    Коробка телескоп комплект(2,5шт)-2000₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 2000, 'Наличник телескоп комплект(5шт)-2000₽')} type="checkbox"
                       className="custom-control-input" id="customCheck2"/>
                <label className="custom-control-label" htmlFor="customCheck2">
                    Наличник телескоп комплект(5шт)-2000₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 700, 'Добор телескоп-700Р')} type="checkbox" className="custom-control-input"
                       id="customCheck3"/>
                <label className="custom-control-label" htmlFor="customCheck3">
                    Добор телескоп-700Р
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 1000, 'Замок защелка с фиксацией "Avers" под ручку + петли(Бабочка 2шт)-1000₽')} type="checkbox"
                       className="custom-control-input" id="customCheck4"/>
                <label className="custom-control-label" htmlFor="customCheck4">
                    Замок защелка с фиксацией "Avers" под ручку + петли(Бабочка 2шт)-1000₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 1000, 'Сборка в блок-1000₽')} type="checkbox"
                       className="custom-control-input" id="customCheck5"/>
                <label className="custom-control-label" htmlFor="customCheck5">
                    Сборка в блок-1000₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 700, 'Ручка "Code Deco" (Испания) крепление на стяжках, не саморезы-900₽')} type="checkbox" className="custom-control-input"
                       id="customCheck6"/>
                <label className="custom-control-label" htmlFor="customCheck6">
                    Ручка "Code Deco" (Испания) крепление на стяжках, не саморезы-700₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 600, 'Завертка сантехника "Code Deco" (Испания) на стяжках-600₽')} type="checkbox" className="custom-control-input"
                       id="customCheck7"/>
                <label className="custom-control-label" htmlFor="customCheck7">
                    Завертка сантехника "Code Deco" (Испания) на стяжках-600₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 3500, 'Установка-3500₽')} type="checkbox"
                       className="custom-control-input" id="customCheck8"/>
                <label className="custom-control-label" htmlFor="customCheck8">
                    Установка-3500₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 500, 'Демонтаж-500Р')} type="checkbox" className="custom-control-input"
                       id="customCheck9"/>
                <label className="custom-control-label" htmlFor="customCheck9">
                    Демонтаж-500Р
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 1400, 'Доставка по городу до парадной-1400₽')} type="checkbox"
                       className="custom-control-input" id="customCheck10"/>
                <label className="custom-control-label" htmlFor="customCheck10">
                    Доставка по городу до парадной-1400₽
                </label>
            </div>
        </div>
    );
};

export default AdditionCat2;