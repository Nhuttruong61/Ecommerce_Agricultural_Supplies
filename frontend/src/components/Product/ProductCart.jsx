import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCart(item) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/product/details/${e.item._id}`);
  };
  return (
    <div
      className=" shadow hover:shadow-[#5b5959]"
      onClick={() => handleClick(item)}
    >
      <div className="relative py-2">
        <div className=" lg:h-[38vh] sm:h-[16vh] md:h-[18vh]  flex justify-center">
          <img
            src={item.item.images[0].url}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </div>
        {item?.item?.distCount && (
          <div className="bg-yellow-500 z-1 w-[20%] absolute h-[22%] right-0 text-white top-0 flex flex-col justify-center text-center font-[600] ">
            <span className="md:text-[48%] text-[20%]">Giảm</span>
            <span className="md:text-[48%] text-[20%]">
              {item.item.distCount} %
            </span>
            <span
              className="absolute w-full"
              style={{
                borderWidth: "0  8px 6px",
                borderColor: "transparent  #eab308 transparent  #eab308",
                bottom: "-5px",
              }}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col my-[6%]  text-[10%] md:text-[100%]">
        <div className=" flex justify-center font-[500]  text-[50%] md:text-[80%]">
          <p>
            {item.item.name.length > 20
              ? item.item.name.slice(0, 20) + "..."
              : item.item.name}{" "}
          </p>
        </div>
        <div className="flex justify-between font-[500]  text-[10%] md:text-[80%] md:px-[10%]">
          <span className="text-red-600">
            {item.item.originPrice.toLocaleString()}đ
          </span>
          <span>Đã bán {item.item.sold_out}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
