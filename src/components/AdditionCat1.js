import React, {useEffect, useState} from 'react';

const AdditionCat1 = ({soldCheckbox, door}) => {
    const [priceBox, setPriceBox] = useState(0);
    const [priceNalich, setPriceNalich] = useState(0);
    useEffect(() => {
        switch (door.category) {
            case '1' || '4':
                setPriceBox(1000);
                setPriceNalich(1000);
                break
            case '5':
                setPriceBox(2300);
                setPriceNalich(2300);
                if (door.id >= 50 || door.id <= 55) {
                    setPriceBox(2500);
                    setPriceNalich(2500);
                }
                break
            default:
                setPriceBox(1000);
                setPriceNalich(1000);
        }
    }, [])

    return (
        <div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, priceBox, `Коробка комплект(2,5шт)-${priceBox}₽`)} type="checkbox"
                       className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" htmlFor="customCheck1">
                    Коробка комплект(2,5шт)-{priceBox}₽
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
                <input onChange={e => soldCheckbox(e, 300, 'Добор-300Р')} type="checkbox"
                       className="custom-control-input"
                       id="customCheck3"/>
                <label className="custom-control-label" htmlFor="customCheck3">
                    Добор-300₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input
                    onChange={e => soldCheckbox(e, 1000, 'Замок защелка с фиксацией "Avers" под ручку + петли(Бабочка 2шт)-1000₽')}
                    type="checkbox"
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
                <input
                    onChange={e => soldCheckbox(e, 700, 'Ручка "Code Deco" (Испания) крепление на стяжках, не саморезы-900₽')}
                    type="checkbox" className="custom-control-input"
                    id="customCheck6"/>
                <label className="custom-control-label" htmlFor="customCheck6">
                    Ручка "Code Deco" (Испания) крепление на стяжках, не саморезы-700₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 600, 'Завертка сантехника "Code Deco" (Испания) на стяжках-600₽')}
                       type="checkbox" className="custom-control-input"
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
                <input onChange={e => soldCheckbox(e, 500, 'Демонтаж-500Р')} type="checkbox"
                       className="custom-control-input"
                       id="customCheck9"/>
                <label className="custom-control-label" htmlFor="customCheck9">
                    Демонтаж-500₽
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

export default AdditionCat1;