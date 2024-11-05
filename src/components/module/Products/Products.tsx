'use client'

import { useGetProductsQuery } from '@/lib/redux/api/api';
import { TProduct } from '@/types/product.interface';
import React from 'react';

const Products = () => {
    const {data: productsData } = useGetProductsQuery("");
    console.log(productsData)
    // if (!isLoading) return <div>Loading...</div>
    return (
        <div>
            Products is loading
            <div>
                {
                    productsData?.data?.map((product: TProduct) => <div key={product.name}>
                        <div>{product.name}</div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;