'use client'

import { useGetCategoriesQuery } from '@/lib/redux/api/api';
import React from 'react';
import Link from 'next/link';
import { TCategory } from '@/types/category.interface';
import Image from 'next/image';

const Categories = () => {
    const {
        data: categoryData, 
     } = useGetCategoriesQuery("");
    console.log(categoryData)
    // if (!isLoading) return <div>Loading...</div>
    return (
        <div>
            
            <div className='grid grid-cols-6'>
                {
                    categoryData?.data?.map((category: TCategory) => <div key={category?._id}>
                        <Link
                            href={`/categories/${category?._id}`}
                            className="flex flex-col items-center gap-3 flex-wrap">
                            <div className="avatar">
                                <div className="mask mask-circle size-32">
                                    <Image
                                        src={category?.images}
                                        alt={category?.name}
                                        className="object-cover h-40 w-full rounded-2xl hover:scale-105 hover:transition-all hover:duration-200 hover:ease-in-out hover:delay-100"
                                        width={1200}
                                        height={1200}
                                        layout="responsive"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">
                                    {category?.name}
                                </div>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;