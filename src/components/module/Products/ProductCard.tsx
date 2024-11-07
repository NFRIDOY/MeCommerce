import { useDispatch } from "react-redux";
import Link from "next/link";
import { TProduct } from "@/types/product.interface";
import Image from "next/image";
import { addToCart } from "@/lib/redux/features/cartSlice/cartSlice";

export interface ProductCardProps {
    product: TProduct; // Define the type of product here
}
const ProductCard = ({ product }: ProductCardProps) => {
    // what is the prb?
    const dispatch = useDispatch();
    // const handleAddToCart = (product: TProduct) => {
    //     dispatch(addToCart({...product, quantity: 1}))
    //     // console.log("product added")
    // }

    return (
        <Link href={`/products/${product?._id}`}>
            <div className="card card-compact bg-base-100  max-h-96 my-auto w-48 md:w-72 mx-auto shadow-md rounded-b-none hover:border-0 border-b-primary">
                <figure>
                    <Image
                        src={product?.images}
                        alt={product?.name}
                        className="object-cover h-40 w-full rounded-2xl hover:scale-105 hover:transition-all hover:duration-200 hover:ease-in-out hover:delay-100"
                        width={1200}
                        height={1200}
                        layout="responsive"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </figure>
                <div className="card-body">
                    <Link
                        href={`/products/${product?._id}`}
                        className="cards-title flex justify-between items-center">
                        {product?.name}
                        <div className="">
                            BDT.{" "}
                            <span className="text-primary">{product?.price}</span>
                        </div>
                    </Link>
                    {/* <Link href={`/products/${product?._id}`}>
                    {product?.description}
                </Link> */}
                    <div className="flex justify-between">
                        <div className="card-actions  w-full">
                            {/* <button className="btn btn-accent" onClick={() => handleAddToCart(product)}>Order Now</button> */}
                            {product?.stockQuantity ? (
                                <Link href="/cart" 
                                    className="btn btn-accent  w-full"
                                    onClick={() =>
                                        dispatch(
                                            addToCart({ ...product, quantity: 1 })
                                        )
                                    }>
                                    Order Now
                                </Link>
                            ) : (
                                <button
                                    className="btn btn-accent w-full"
                                    onClick={() => alert("Shock Out")}>
                                    Order Now
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
