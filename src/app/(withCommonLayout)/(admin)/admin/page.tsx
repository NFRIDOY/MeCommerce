import React from "react";
// import AdminDashboard from '@/components/admin/AdminDashboard';

const Admin = () => {
    return (
        <div className="w-full">
            {/* <AdminDashboard /> */}
            <h1 className="text-center w-full text-6xl my-10">
                Welcome To Admin Pannel
            </h1>
            <section className="text-center my-20">
                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
                    <li>
                        <a>
                            
                            Manage Category
                        </a>
                    </li>
                    <li>
                        <a>
                            
                            Manage Products
                            
                        </a>
                    </li>
                    <li>
                        <a>
                            
                            Manage Orders
                            
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Admin;
