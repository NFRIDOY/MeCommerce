import Sidebar from '@/components/shared/Sidebar';
import React, { ReactNode } from 'react';

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex w-screen min-h-screen">
            <Sidebar />
            <div className="">
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;