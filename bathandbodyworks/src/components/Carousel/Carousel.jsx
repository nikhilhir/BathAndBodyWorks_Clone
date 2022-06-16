
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"
import Slider from "react-slick";

export const Carousel = () => {
    const Corosaldata = [
        {
            image:
              "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf97a6473/crop/026414639_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
            fragrance_type: "New Fragrance",
            title: "Butterfly",
            subtitle: "Fine Fragrance Mist",
            price: "$17.5",
            offers: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
          },
          {
            image:
              "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe52c7f04/crop/026403504_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
            fragrance_type: "New Fragrance",
            title: "Sandawood",
            subtitle: "Body Wash and Foam Bath",
            price: "$15.5",
            offers: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
          },
          {
            image:
              "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwff743235/crop/026438530_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
            fragrance_type: "New",
            title: "Cherry Blossom",
            subtitle: "Hydration Body Cream",
            price: "$16.5",
            offers: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
          },
          {
            image:
              "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwba77ffbc/crop/026267868_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
            fragrance_type: "",
            title: "Ocean",
            subtitle: "Body Spray",
            price: "$13.5",
            offers: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
          },
          {
            image:
              "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw81522767/crop/026401914_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
            fragrance_type: "",
            title: "Pineapple Lime",
            subtitle: "Essential Oil Mist",
            price: "$14",
            offers: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
          },
          {
            image:
              "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dweccfb026/crop/026451873_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
            fragrance_type: "New",
            title: "Buttercups & Berry Bellini",
            subtitle: "Fine Fragrance Mist",
            price: "$12",
            offers: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
          },
          {
            image:
              "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw65573859/crop/026451884_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
            fragrance_type: "New Fragrance",
            title: "Hibiscus Mandarin Violet",
            subtitle: "Hydration Body Cream",
            price: "$18",
            offers: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Frese",
          },
          {
            image:
              "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw50a09db0/crop/026395407_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
            fragrance_type: "New!",
            title: "Freshwater",
            subtitle: "Face & Body Wash",
            price: "$19",
            offers: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
          },
          {
            image:
              "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd097b2cd/crop/026451889_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
            fragrance_type: "New Fragrance",
            title: "Honeysuckle & Peach Spritz",
            subtitle: "Hydration Cream",
            price: "$9",
            offers: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
          }
      ];

      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }
      

      const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
      <div className='corosal-main-div'>
      <Slider {...settings}>
       {Corosaldata.map((e)=>(
            <div className='corosal-sub-div'>
                <div className='corosal-img-div'>  <img className='corosal-img' src={e.image} alt="" /></div>
                <h4 className='corosal-h-div'>{e.title}</h4>
                <p className='corosal-p1-div'>{e.subtitle}</p>
                <p className='corosal-p2-div'>{e.price}</p>
                <p className='corosal-p3-div'>{e.offers}</p>

            </div>
        ))}
       </Slider>
      </div>
    
    </>
  )
}