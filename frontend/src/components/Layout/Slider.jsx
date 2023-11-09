import React, { memo, useEffect, useState } from "react";
import { Carousel } from "antd";
import { getAllSlider } from "../../service/sliderService";
const SliderComponet = () => {
  const [dataSlider, setDataSlider] = useState(null);
  const getAllSlides = async () => {
    const res = await getAllSlider();
    setDataSlider(res);
  };

  useEffect(() => {
    getAllSlides();
  }, []);
  return (
    <Carousel className="w-full" autoplay>
      {dataSlider?.slider?.map((item) =>
        item?.images?.map((i) => (
          <div key={i.id} className=" w-full  flex items-center justify-center">
            <img src={i.url} alt="" className="object-contain w-full  " />
          </div>
        ))
      )}
    </Carousel>
  );
};
export default memo(SliderComponet);
