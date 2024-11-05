'use client'

import React from 'react';
import { useGetProductsByIdQuery } from "@/lib/redux/api/api";
import Image from "next/image";
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/redux/features/cartSlice/cartSlice';


const ProductDetails = ({ id }:{ id:string }) => {

    const {data:productData} = useGetProductsByIdQuery(id);
    // const {data:product} = productData;

    console.log("productData", productData)
    // console.log("product", product)

    const dispatch = useDispatch();

    return (
        <>
            <div className="card card-compact bg-base-100   my-auto min-w-full md:w-72 mx-auto shadow-md rounded-b-none flex flex-row py-20">
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
                <div className="card-body">
                    <Link
                        href={`/products/${productData?.data?._id}`}
                        className="cards-title flex justify-between items-center">
                        {productData?.data?.name}
                        <div className="">
                            BDT.{" "}
                            <span className="text-primary">{productData?.data?.price}</span>
                        </div>
                    </Link>
                    {/* <Link href={`/products/${productData?.data?._id}`}>
                    {productData?.data?.description}
                </Link> */}
                    <div className="flex justify-between">
                        <div className="card-actions  w-full">
                            {productData?.data?.stockQuantity ? (
                                <button
                                    className="btn btn-primary  w-full"
                                    onClick={() =>
                                        dispatch(
                                            addToCart({ ...productData?.data, quantity: 1 })
                                        )
                                    }>
                                    Order Now
                                </button>
                            ) : (
                                <button
                                    className="btn btn-primary w-full"
                                    onClick={() => alert("Shock Out")}>
                                    Order Now
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