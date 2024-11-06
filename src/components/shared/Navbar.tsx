"use client";

import { RootState } from "@/lib/redux/store";
import { logo } from "@/utils/exports/logos";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
    const cartItems = useSelector((state: RootState) => state.cart.products);
    const totalAmount = useSelector(
        (state: RootState) => state.cart.totalAmount
    );

    const menu = (
        <>
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            <li>
                <Link href={"/categories"}>Categoris</Link>
            </li>
            <li>
                <Link href={"/products"}>Products</Link>
            </li>
        </>
    );
    const profile = (
        <>
            <div className="flex-none">
                <div className="dropdown dropdown-end indicator">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg> */}
                            <FaShoppingCart size={30} />
                            {/* <span className="badge badge-sm indicator-item">
                                8
                            </span> */}
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[11] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">
                                <span className="mx-1">
                                    {cartItems?.length}
                                </span>
                                Items
                            </span>
                            <span className="text-primary text-xl">
                                Sub Total: ৳{totalAmount}
                            </span>
                            {totalAmount === 0 ? (
                                ""
                            ) : (
                                <div className="card-actions">
                                    <Link
                                        href={"/cart"}
                                        className="btn btn-primary btn-block">
                                        View Cart
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    {cartItems?.length > 0 && (
                        <span className="badge badge-sm indicator-item">
                            {cartItems?.length}
                        </span>
                    )}
                </div>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar">
                        {/*  <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            /> 
                        </div>*/}
                        <FaUserAlt size={30} className="text-secondary" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[11] mt-3 w-52 p-2 shadow space-y-3">
                        <li>
                            <Link
                                href={"/"}
                                className="btn btn-secondary btn-sm">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/admin/dashboard"}
                                className="btn btn-secondary btn-sm">
                                Admin Dashboard
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                to={"/"}
                                className="btn btn-error text-white btn-sm">
                                Logout
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    );
    return (
        <div>
            <div className="navbar bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <Image
                            src={logo}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                        <span>MeCommerce</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{menu}</ul>
                </div>
                <div className="navbar-end">
                    <div>{profile}</div>
                    <Link href="/admin" className="btn">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
