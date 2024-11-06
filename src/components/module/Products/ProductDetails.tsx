"use client";

import React from "react";
import { useGetProductsByIdQuery } from "@/lib/redux/api/api";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
    addToCart, 
} from "@/lib/redux/features/cartSlice/cartSlice";

const ProductDetails = ({ id }: { id: string }) => {
    const { isLoading, data: productData } = useGetProductsByIdQuery(id);
    // const {data:product} = productData;

    console.log("productData", productData);
    // console.log("product", product)

    
    // const { cart } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    if (isLoading) return <>Loading...</>;
    return (
        <>
            <div className="card card-compact bg-base-100 my-auto lg:min-h-96  lg:min-w-full md:w-72 mx-auto shadow-md rounded-b-none flex flex-row justify-between py-0">
                <figure>
                    <Image
                        src={productData?.data?.images}
                        alt={productData?.data?.name}
                        className="object-cover h-40 w-full rounded-2xl hover:scale-105 hover:transition-all hover:duration-200 hover:ease-in-out hover:delay-100"
                        width={1200}
                        height={1200}
                        layout="responsive"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </figure>
                <div className="card-body w-1/2 border-2">
                    <div className="cards-title flex justify-between items-center text-5xl">
                        {productData?.data?.name}
                        <div className="">
                            BDT.{" "}
                            <span className="text-primary">
                                {productData?.data?.price}
                            </span>
                        </div>
                    </div>
                    <div className="cards-title flex justify-between items-center my-10">
                        {productData?.data?.description}
                    </div>
                    <div className="flex justify-end ">
                        <div className="card-actions">
                            {productData?.data?.stockQuantity ? (
                                <button
                                    className="btn btn-primary  w-full"
                                    onClick={() =>
                                        dispatch(
                                            addToCart({
                                                ...productData?.data,
                                                quantity: 1,
                                            })
                                        )
                                    }>
                                    Add To Cart
                                </button>
                            ) : (
                                <button
                                    className="btn btn-error w-full"
                                    onClick={() => alert("Shock Out")}>
                                    Add To Cart
                                </button>
                            )}
                        </div>
                
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
