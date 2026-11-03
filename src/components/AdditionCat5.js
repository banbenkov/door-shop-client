import React, {useEffect, useState} from 'react';

const AdditionCat3 = ({soldCheckbox, door}) => {
    const [priceBox, setPriceBox] = useState(0);
    const [priceNalich, setPriceNalich] = useState(0);
    const [priceDobor80, setPriceDobor80] = useState(0);
    const [priceDobor125, setPriceDobor125] = useState(0);
    useEffect(() => {
        setPriceNalich(7000);
        setPriceBox(5000);
        setPriceDobor80(1500);
        setPriceDobor125(2500);
    }, [door])
    return (
        <div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, priceBox, `Коробка комплект: ${priceBox}₽`)}
                       type="checkbox"
                       className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" htmlFor="customCheck1">
                    Коробка комплект: {priceBox}₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, priceNalich, `Наличник комплект: ${priceNalich}₽`)}
                       type="checkbox"
                       className="custom-control-input" id="customCheck2"/>
                <label className="custom-control-label" htmlFor="customCheck2">
                    Наличник комплект: {priceNalich}₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, priceDobor80, `Добор 80мм: ${priceDobor80}₽`)} type="checkbox"
                       className="custom-control-input"
                       id="customCheck3"/>
                <label className="custom-control-label" htmlFor="customCheck3">
                    Добор 80мм: {priceDobor80}₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, priceDobor125, `Добор 125мм: ${priceDobor125}₽`)} type="checkbox"
                       className="custom-control-input"
                       id="customCheck11"/>
                <label className="custom-control-label" htmlFor="customCheck11">
                    Добор 125мм: {priceDobor125}₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input
                    onChange={e => soldCheckbox(e, 1500, 'Замок защелка с фиксацией "Morelli" под ручку + петли(Бабочка 2шт): 1500₽')}
                    type="checkbox"
                    className="custom-control-input" id="customCheck4"/>
                <label className="custom-control-label" htmlFor="customCheck4">
                    Замок защелка с фиксацией "Morelli" под ручку + петли(Бабочка 2шт): 1500₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 900, 'Ручка "RUCETTI" (Испания) крепление на стяжках, не саморезы: 900₽')} type="checkbox"
                       className="custom-control-input" id="customCheck5"/>
                <label className="custom-control-label" htmlFor="customCheck5">
                    Ручка "RUCETTI" (Испания) крепление на стяжках, не саморезы: 900₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input
                    onChange={e => soldCheckbox(e, 800, 'Завертка сантехника "RUCETTI" (Испания) на стяжках: 800₽')}
                    type="checkbox" className="custom-control-input"
                    id="customCheck6"/>
                <label className="custom-control-label" htmlFor="customCheck6">
                    Завертка сантехника "RUCETTI" (Испания) на стяжках: 800₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 1000, 'Сборка в блок: 1000₽')} type="checkbox"
                       className="custom-control-input"
                       id="customCheck7"/>
                <label className="custom-control-label" htmlFor="customCheck7">
                    Сборка в блок: 1000₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 7000, 'Установка: 7000₽')} type="checkbox"
                       className="custom-control-input"
                       id="customCheck8"/>
                <label className="custom-control-label" htmlFor="customCheck8">
                    Установка: 7000₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 1000, 'Демонтаж: 1000₽')} type="checkbox"
                       className="custom-control-input"
                       id="customCheck9"/>
                <label className="custom-control-label" htmlFor="customCheck9">
                    Демонтаж: 1000₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 3000, 'Доставка по городу до парадной: 3000₽')} type="checkbox"
                       className="custom-control-input" id="customCheck10"/>
                <label className="custom-control-label" htmlFor="customCheck10">
                    Доставка по городу до парадной: 3000₽
                </label>
            </div>
        </div>
    );
};

export default AdditionCat3;