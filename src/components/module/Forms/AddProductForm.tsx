"use client";

import { FormEvent, useState, useEffect } from "react";
import {
    useGetCategoriesQuery,
    useGetProductsQuery,
    usePostProductMutation,
} from "@/lib/redux/api/api";
import { TCategory } from "@/types/category.interface";
import { SuccessAlert } from "@/components/ui/Alerts/SuccessAlert";

export default function AddProductForm() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState<string>(""); // Initialize as an empty string
    const [quantity, setQuantity] = useState("");

    // Declare Axios instance
    // RTK
    const [
        postProduct,
        {
            data: postProductData,
            // isLoading
        },
    ] = usePostProductMutation();

    const {
        // data: categoryData,
        refetch: refetchProducts,
    } = useGetProductsQuery("");

    // Fetching categories
    const {
        data: categoryData,
        // refetch
    } = useGetCategoriesQuery("");

    // Set the first category as default when data is loaded
    useEffect(() => {
        if (categoryData?.data?.length && !category) {
            setCategory(""); // Initially, no category is selected
        }
    }, [categoryData, category]);

    // Find the selected category object by ID
    const selectedCategory = categoryData?.data?.find(
        (categoryObj: TCategory) => categoryObj?._id === category
    );

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = {
            name: title,
            price: parseFloat(price),
            images: image,
            description: description,
            category: selectedCategory,
            stockQuantity: parseFloat(quantity),
            // rating: parseFloat(rating),
        };
        // console.log("Form Data:", formData);

        // Send Data to server

        await postProduct(formData);

        console.log("postProductData:", postProductData);

        await refetchProducts()

        await SuccessAlert("Successful");

    };

    // if (isPendingCategory) return <p>Loading categories...</p>;
    // if (errorCategory) return <p>Error loading categories.</p>;

    return (
        <div className="w-full">
            <section className="w-full">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full border-0">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl w-full">
                            Add Product To Inventory
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="gap-y-2 gap-x-2 mb-2 w-full grid grid-cols-3">
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Title"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Price"
                                        value={price}
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="image"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Image URL
                                    </label>
                                    <input
                                        type="text"
                                        id="image"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Image"
                                        value={image}
                                        onChange={(e) =>
                                            setImage(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="description"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        id="description"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Description"
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="quantity"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Quantity
                                    </label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Quantity"
                                        value={quantity}
                                        onChange={(e) =>
                                            setQuantity(e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-medium text-gray-900 w-full">
                                        Category
                                    </label>
                                    <div>
                                        <select
                                            value={category}
                                            onChange={(e) =>
                                                setCategory(e.target.value)
                                            }
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5">
                                            <option value="" disabled>
                                                Select Category
                                            </option>
                                            {categoryData?.data?.map(
                                                (categoryObj: TCategory) => (
                                                    <option
                                                        key={categoryObj?._id}
                                                        value={
                                                            categoryObj?._id
                                                        }>
                                                        {categoryObj?.name}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                ADD
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
