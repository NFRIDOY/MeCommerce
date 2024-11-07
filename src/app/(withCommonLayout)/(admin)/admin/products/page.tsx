import AddProductForm from '@/components/module/Forms/AddProductForm';
import Products from '@/components/module/Products/Products';
import React from 'react';

const ProductManagmentPage = () => {
    return (
        <div className="w-full h-full border-2 flex flex-col justify-start items-center">
            <div>
            <AddProductForm />
            </div>
            <Products />
        </div>
    );
};

export default ProductManagmentPage;