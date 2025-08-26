import React from 'react'
import "./review.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Review = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const Data = [
        {
            name: "dolly",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDE6uHXU6NL4pflHm0C-n-JPUnEPs_NM3SVw&s",
            id: 1,
            reviews: "lowknkjwnckjsnckjwkndwcwecfwefefefjbdjsdxjshdjsdjesdbfjehjfehjfdejdhfjkedjfhedjf"
        },
        {
            name: "dolly",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVLuRFtfvpb6GzFBP8ILqxISmz4iF9mQ1bQ&s",
            id: 1,
            reviews: "lowknkjwnckjsnckjwkndwcwecfwefefef"
        },
        {
            name: "dolly",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9mhD28E5_Su5bwOV3Y-98ob0OeVx64U1fXQ&s",
            id: 1,
            reviews: "lowknkjwnckjsnckjwkndwcwecfwefefef"
        },
        {
            name: "Mammooty",
            img: "data:image/jpeg;base64,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",
            id: 1,
            reviews: "lowknkjwnckjsnckjwkndwcwecfwefefef"
        }, {
            name: "Ronaldo",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfEaazsZEMmvUeas1a6sWV8H_-r2k5f6fTA&s",
            id: 1,
            reviews: "lowknkjwnckjsnckjwkndwcwecfwefefef"
        }
    ]

    return (
        <div className='reviewmain'>
            <Slider {...settings}>
                {
                    Data.map((datas) => (
                        <div className='card'>
                            <div className="img">
                                <img src={datas.img} alt="" />
                            </div>
                            <div className='text'>
                                <h1 style={{ color: "black" }}>{datas.name}</h1>
                                <p className='paragraph' style={{ width: "60%" }}>{datas.reviews}</p>
                            </div>
                        </div>
                    )
                    )
                }</Slider>
        </div>
    )
}

export default Review
