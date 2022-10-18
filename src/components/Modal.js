import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchDoor} from "../actions/door";
import {sendOrder} from "../actions/order";

const Modal = ({order}) => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch({type: 'HIDE_MODAL'})
    }
    const createOrder = (order) => {
        order.name = name;
        order.phoneNumber = phone;
        order.width = order.width.value
        order.height = order.height.value
        dispatch(sendOrder(order))
        window.scrollTo(0, 0);
        dispatch({type: 'HIDE_MODAL'})
    }
    return (
        <div className="modal fade show" id="exampleModal-1" tabIndex="-1"
             aria-labelledby="exampleModalLabel" style={{display: 'block', paddingRight: '17px'}}
             aria-modal="true" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Заказать</h5>
                        <button onClick={closeModal} type="button" className="close" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>
                            Оставьте свой номер и мы вам перезвоним!
                        </p>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInput-1">Ваше имя</label>
                            <input value={name} onChange={e => setName(e.target.value)} id="exampleInput-1" className="form-control form-control-sm"
                                   type="text"  />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInput-1">Ваш номер</label>
                            <input value={phone} onChange={e => setPhone(e.target.value)} id="exampleInput-1" className="form-control form-control-sm"
                                   type="text" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="container-fluid">
                            <div className="row gutter-0">
                                <div className="col">
                                    <button onClick={closeModal} type="button" className="btn btn-block btn-secondary"
                                            data-dismiss="modal">Закрыть
                                    </button>
                                </div>
                                <div className="col">
                                    <button onClick={() => {createOrder(order)}} type="button" className="btn btn-block btn-primary">Заказать
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;