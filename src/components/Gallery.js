import React, {useEffect} from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';


const Gallery = () => {
    const photo = [
        {
            src: 'images/portfolio/photo1.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/22'>Урбан Капучино</a></p>`
        },
        {
            src: 'images/portfolio/photo2.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/22'>Урбан Капучино</a></p>`
        },
        {
            src: 'images/portfolio/photo3.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/18'>Гранд Люкс Дуб крафт белый</a></p>`
        },
        {
            src: 'images/portfolio/photo4.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/18'>Гранд Люкс Дуб крафт белый</a></p>`
        },
        {
            src: 'images/portfolio/photo5.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/18'>Гранд Люкс Дуб крафт белый</a></p>`
        },
        {
            src: 'images/portfolio/photo6.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/18'>Гранд Люкс Дуб крафт белый</a></p>`
        },
        {
            src: 'images/portfolio/photo7.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/2'>Орион Капучино</a></p>`
        },
        {
            src: 'images/portfolio/photo8.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/2'>Орион Капучино</a></p>`
        },
        {
            src: 'images/portfolio/photo9.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/12'>Октава Белая</a></p>`
        },
        {
            src: 'images/portfolio/photo10.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/12'>Октава Белая</a></p>`
        },
        {
            src: 'images/portfolio/photo11.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - Массив сосны</p>`
        },
        {
            src: 'images/portfolio/photo12.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - Массив сосны</p>`
        },
        {
            src: 'images/portfolio/photo13.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/22'>Урбан Капучино</a></p>`
        },
        {
            src: 'images/portfolio/photo14.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/22'>Урбан Капучино</a></p>`
        },
        {
            src: 'images/portfolio/photo15.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/22'>Урбан Капучино</a></p>`
        },
        {
            src: 'images/portfolio/photo16.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/19'>Эмма Дуб Крафт Натуральный</a></p>`
        },
        {
            src: 'images/portfolio/photo17.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/19'>Эмма Дуб Крафт Натуральный</a></p>`
        },
        {
            src: 'images/portfolio/photo18.jpg',
            title: 'Дверь',
            subHtml: `<p> Дверь - <a href='/doors/19'>Эмма Дуб Крафт Натуральный</a></p>`
        },
    ]
    return (
        <div className="container mb-2 mt-2">
            <div className="bg-white p-2">
                <h2 className="text-uppercase">Портфолио</h2>
                <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
                    { photo.map((item) => (
                    <a
                    data-lg-size="960-960"
                    data-pinterest-text={item.title}
                    data-tweet-text={item.title}
                    className="gallery-item"
                    data-src={item.src}
                    data-sub-html={item.subHtml}
                    >
                    <img
                    className="img-responsive"
                    src={item.src}
                    />
                    </a>
                    )) }


                </LightGallery>
            </div>
        </div>
    );
};

export default Gallery;