import Link from "next/link";
import React from "react";
// import AdminDashboard from '@/components/admin/AdminDashboard';

const Admin = () => {
    return (
        <div className="w-full h-full border-0 flex flex-col justify-center">
            {/* <AdminDashboard /> */}
            <h1 className="text-center w-full text-6xl my-10">
                Welcome To Admin Pannel
            </h1>
            <section className="text-center my-20">
                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
                    <li className="">
                        <Link href="/admin/category">
                            
                            Manage Category
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/products">
                            
                            Manage Products
                            
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/orders">
                            
                            Manage Orders
                            
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Admin;
