import React from "react";
import CountDown from "./CountDown";
import { useNavigate } from "react-router-dom";
function EventCard(item) {
  const navigate = useNavigate();
  const productPrice =
    item?.data?.product[0]?.originPrice *
    (1 - (item?.data?.product[0]?.distCount / 100 + item?.data.discount / 100));

  const handleNavigate = (item) => {
    navigate(`/product/details/${item.data.product[0]._id}`);
  };
  return (
    <div
      className="w-full rounded-lg md:flex p-2 shadow-lg cursor-pointer"
      onClick={() => handleNavigate(item)}
    >
      <div className="w-full md:w-[50%] m-auto justify-center items-center flex">
        <img
          className="w-[120px] md:w-[280px]"
          src={item?.data?.product[0].images[0].url}
          alt=""
        />
      </div>
      <div className="w-full md:[w-50%] flex flex-col justify-center pl-[4%]">
        <h1 className="font-[700]">{item?.data.name}</h1>
        <p>{item?.data.description} </p>
        <div className="flex justify-between">
          <div className="flex">
            <h5 className=" font-[500] text-red-500 pl-3 line-through">
              {item.data?.product[0]?.originPrice.toLocaleString()}đ
            </h5>
            <h5 className=" font-[500]  pl-3 ">
              {productPrice.toLocaleString()}đ
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[#4b8600] ">
            {item?.data?.product[0]?.sold_out} Đã bán
          </span>
        </div>
        <CountDown item={item} />
      </div>
    </div>
  );
}

export default EventCard;
