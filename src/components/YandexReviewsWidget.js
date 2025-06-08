import React from 'react';

const YandexReviewsWidget = () => {
    return (
        <div style={{
            maxWidth: '760px',
            width: '100%',
            height: '800px',
            margin: '0 auto',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: '#fff',
            fontFamily: 'Arial, sans-serif'
        }}>
            <iframe
                title="Yandex Reviews"
                src="https://yandex.ru/maps-reviews-widget/1785214464?comments"
                style={{
                    width: '100%',
                    height: '800px',
                    border: 'none'
                }}
            ></iframe>
            <a
                href="https://yandex.ru/maps/org/arsenalstroy/1785214464/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    fontSize: '12px',
                    color: '#999',
                    textDecoration: 'none',
                    backgroundColor: '#f9f9f9',
                    borderTop: '1px solid #eee',
                    transition: 'color 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#555'}
                onMouseLeave={e => e.currentTarget.style.color = '#999'}
            >
                АрсеналСтрой на карте Санкт‑Петербурга — Яндекс Карты
            </a>
        </div>
    );
};

export default YandexReviewsWidget;