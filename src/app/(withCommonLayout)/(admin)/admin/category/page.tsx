import Categories from '@/components/module/Category/Categories';
import AddCategoryForm from '@/components/module/Forms/AddCategoryForm';
import React from 'react';

const CategoryManagmentPage = () => {
    return (
        <div className="w-full h-full border-2 flex flex-col justify-start items-center">
            <div>
                <AddCategoryForm />
            </div>
            <Categories />
        </div>
    );
};

export default CategoryManagmentPage;