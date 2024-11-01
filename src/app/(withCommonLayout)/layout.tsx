import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React, { ReactNode } from 'react';

const CoommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default CoommonLayout;