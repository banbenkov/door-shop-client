import React, {useEffect, useState} from 'react';

const AdditionCat3 = ({soldCheckbox, door}) => {
    const [priceBox, setPriceBox] = useState(0);
    const [priceNalich, setPriceNalich] = useState(0);
    const [priceDobor, setPriceDobor] = useState(0);
    useEffect(() => {
        if (door.id === 95 || door.id === 102
            || door.id === 93 || door.id === 94) {
            setPriceBox(2500);
            setPriceNalich(2500);
            setPriceDobor(700);
        } else {
            setPriceBox(1500);
            setPriceNalich(1500);
            setPriceDobor(700);
        }
    }, [door]);
    return (
        <div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, priceBox, `Коробка комплект-${priceBox}₽`)}
                       type="checkbox"
                       className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" htmlFor="customCheck1">
                    Коробка комплект-{priceBox}₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, priceNalich, `Наличник комплект(5шт)-${priceNalich}₽`)}
                       type="checkbox"
                       className="custom-control-input" id="customCheck2"/>
                <label className="custom-control-label" htmlFor="customCheck2">
                    Наличник комплект(5шт)-{priceNalich}₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, priceDobor, `Добор-${priceDobor}₽`)} type="checkbox"
                       className="custom-control-input"
                       id="customCheck3"/>
                <label className="custom-control-label" htmlFor="customCheck3">
                    Добор-{priceDobor}₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input
                    onChange={e => soldCheckbox(e, 1500, 'Замок защелка с фиксацией "Avers" под ручку + петли(Бабочка 2шт)-1500₽')}
                    type="checkbox"
                    className="custom-control-input" id="customCheck4"/>
                <label className="custom-control-label" htmlFor="customCheck4">
                    Замок защелка с фиксацией "Avers" под ручку + петли(Бабочка 2шт)-1500₽
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
                <input
                    onChange={e => soldCheckbox(e, 1200, 'Ручка "PUNTO" (Испания) крепление на стяжках, не саморезы-1200₽')}
                    type="checkbox" className="custom-control-input"
                    id="customCheck6"/>
                <label className="custom-control-label" htmlFor="customCheck6">
                    Ручка "PUNTO" (Испания) крепление на стяжках, не саморезы-1200₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 800, 'Завертка сантехника "PUNTO" (Испания) на стяжках-800₽')}
                       type="checkbox" className="custom-control-input"
                       id="customCheck7"/>
                <label className="custom-control-label" htmlFor="customCheck7">
                    Завертка сантехника "PUNTO" (Испания) на стяжках-800₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 5000, 'Установка-5000₽')} type="checkbox"
                       className="custom-control-input" id="customCheck8"/>
                <label className="custom-control-label" htmlFor="customCheck8">
                    Установка-5000₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 500, 'Демонтаж-500₽')} type="checkbox"
                       className="custom-control-input"
                       id="customCheck9"/>
                <label className="custom-control-label" htmlFor="customCheck9">
                    Демонтаж-500₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 1500, 'Доставка по городу до парадной-1500₽')} type="checkbox"
                       className="custom-control-input" id="customCheck10"/>
                <label className="custom-control-label" htmlFor="customCheck10">
                    Доставка по городу до парадной-1500₽
                </label>
            </div>
        </div>
    );
};

export default AdditionCat3;