
import ProductDetails from "@/components/module/Products/ProductDetails";
import React from "react";

interface TProps {
    params: {
        id: string;
    };
}

const ProductDetailsPage = ({ params: { id } }: TProps) => {

    

    return (
        <ProductDetails id={id} />
    )
};

export default ProductDetailsPage;
