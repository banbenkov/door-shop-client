import React, {useEffect, useState} from 'react';

const AdditionCat3 = ({soldCheckbox, door}) => {
    const [priceBox, setPriceBox] = useState(0);
    const [priceNalich, setPriceNalich] = useState(0);
    const [priceDobor, setPriceDobor] = useState(0);
    useEffect(() => {
        setPriceNalich(5000);
        setPriceBox(4000);
        setPriceDobor(1500);
    }, [door])
    return (
        <div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, priceBox, `Коробка ТЕЛЕСКОП с уплотнителем к/кт-${priceBox}₽`)}
                       type="checkbox"
                       className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" htmlFor="customCheck1">
                    Коробка ТЕЛЕСКОП с уплотнителем к/кт-{priceBox}₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, priceNalich, `Наличник ТЕЛЕСКОП (Г образный) к/кт(5шт)-${priceNalich}₽`)}
                       type="checkbox"
                       className="custom-control-input" id="customCheck2"/>
                <label className="custom-control-label" htmlFor="customCheck2">
                    Наличник ТЕЛЕСКОП (Г образный) к/кт(5шт)-{priceNalich}₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, priceDobor, `Добор ТЕЛЕСКОП 150мм-${priceDobor}₽`)} type="checkbox"
                       className="custom-control-input"
                       id="customCheck3"/>
                <label className="custom-control-label" htmlFor="customCheck3">
                    Добор ТЕЛЕСКОП 150мм-{priceDobor}₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input
                    onChange={e => soldCheckbox(e, 1000, 'Врезка фурнитуры (замок под ручку + петли + ответка)-1000₽')}
                    type="checkbox"
                    className="custom-control-input" id="customCheck4"/>
                <label className="custom-control-label" htmlFor="customCheck4">
                    Врезка фурнитуры (замок под ручку + петли + ответка)-1000₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input onChange={e => soldCheckbox(e, 1200, 'Ручка-1200₽')} type="checkbox"
                       className="custom-control-input" id="customCheck5"/>
                <label className="custom-control-label" htmlFor="customCheck5">
                    Ручка-1200₽
                </label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
                <input
                    onChange={e => soldCheckbox(e, 5000, 'Установка (монтаж)-5000₽')}
                    type="checkbox" className="custom-control-input"
                    id="customCheck6"/>
                <label className="custom-control-label" htmlFor="customCheck6">
                    Установка (монтаж)-5000₽
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