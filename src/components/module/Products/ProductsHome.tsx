'use client'

import { useGetProductsQuery } from '@/lib/redux/api/api';
import { TProduct } from '@/types/product.interface';
import React from 'react';
import ProductCard from './ProductCard';

const ProductsHome = () => {
    const {data: productsData } = useGetProductsQuery("");
    console.log(productsData)
    // if (!isLoading) return <div>Loading...</div>
    return (
        <div>
            <div className='grid grid-cols-3'>
                {
                    productsData?.data?.slice(0,3).map((product: TProduct) => <div key={product.name}>
                        <ProductCard product={product} />
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProductsHome;