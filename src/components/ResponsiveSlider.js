import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../assets/deved.jpg'
import img2 from '../assets/freecodecamp.png'
import img3 from '../assets/harry.jpg'
import img4 from '../assets/kyle_cook.png'
import img5 from '../assets/mosh_hamedani.jpg'
// import img6 from '../assets/gr-stocks-Iq9SaJezkOE-unsplash.jpg'

const ResponsiveSlider = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [carouselItems, setCarouselItems] = useState([
        {
            image: img1,
            caption: 'Dev Ed'
        },
        {
            image: img2,
            caption: 'Free Code Camp'
        },
        {
            image: img3,
            caption: 'Code with Harry'
        },
        {
            image: img4,
            caption: 'Web dev simplified with Kyle Cook'
        },
        {
            image: img5,
            caption: 'Mosh Hamedani'
        },
    ]);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenWidth < 575) {
            const mobileDevice = carouselItems.splice(0, 1)
            setCarouselItems(mobileDevice)
        } else if (screenWidth <= 767) {
            const tabletDevice = carouselItems.splice(0, 2)
            setCarouselItems(tabletDevice)
        } else if (screenWidth <= 990) {
            const laptopDevice = carouselItems.splice(0, 3)
            setCarouselItems(laptopDevice)
        } else if (screenWidth <= 1240) {
            const desktopDevice = carouselItems.splice(0, 4)
            setCarouselItems(desktopDevice)
        } else if(screenWidth > 1240) {
            const biggerDevice = [...carouselItems]
            setCarouselItems(biggerDevice)
        }


        // switch (screenWidth) {
        //     case (screenWidth < 575):
        //         const mobileDevice = carouselItems.splice(0, 1)
        //         setCarouselItems(mobileDevice)
        //         break;
        //     case (screenWidth < 767):
        //         const tabletDevice = carouselItems.splice(0, 2)
        //         setCarouselItems(tabletDevice)
        //         break;
                
        //     case (screenWidth < 991):
        //         const laptopDevice = carouselItems.splice(0, 3)
        //         setCarouselItems(laptopDevice)
        //         break;
                
        //     case (screenWidth < 1240):
        //         const desktopDevice = carouselItems.splice(0, 4)
        //         setCarouselItems(desktopDevice)
        //         break;
            
        //     case (screenWidth > 1240):
        //         const biggerDevice = carouselItems.splice(0, 5)
        //         setCarouselItems(biggerDevice)
        //         break;
                
        //     default:
        //         const defaultScreen = carouselItems.splice(5, 6)
        //         setCarouselItems(defaultScreen)
        // }

    }, [screenWidth]);


    return (
        <div>
            <Carousel>
                {carouselItems.map(item => (
                    <div key={item.caption}>
                        <img
                            src={item.image} className='res-img'
                            alt={item.caption}
                        />
                        <p className="legend">{item.caption}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ResponsiveSlider;