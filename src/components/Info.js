import React from 'react';

const Info = () => {
    return (
        <section className="py-lg-0 no-overflow vh-100">
            <div className="image image-scroll" style={{backgroundImage: `url(images/demo/contact-bg.jpg)`}}
                 data--100-bottom-top="transform: translateY(0%);"
                 data-top-bottom="transform: translateY(25%);"
                 ></div>
            <div className="container">
                <div className="row align-items-lg-center justify-content-center vh-100 gutter-1">
                    <div className="col-8 col-lg-4">
                        <div className="card card-tile">
                            <div className="equal bg-white">
                                <div className="card-body text-center">
                                    <i className="icon-phone-call fs-40 mb-4"></i>
                                    <h3 className="mb-1">Позвоните нам</h3>
                                    <span className="fs-18 text-dark">+7 (812) 985-94-58</span>
                                    <p className="mt-1">Понедельник - Пятница 8:00-21:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-lg-4">
                        <div className="card card-tile">
                            <div className="equal bg-white">
                                <div className="card-body text-center">
                                    <i className="icon-mail fs-40 mb-4"></i>
                                    <h3 className="mb-1">Напишите нам</h3>
                                    <a href="" className="fs-18 underlined">Отправить сообщение</a>
                                    <p className="mt-1">Мы ответим в течение 24 часов</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-lg-4">
                        <div className="card card-tile">
                            <div className="equal bg-white">

                                    <iframe className="card-body"
                                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A830b93b9cefa00090688734512d6b32d941509be6fa935184f0826667862f20c&amp;source=constructor"
                                        width="100%" height="100%" frameBorder="0"></iframe>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;