import React, { ReactNode } from 'react';

const CoommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="min-h-screen">
                {children}
            </div>
        </div>
    );
};

export default CoommonLayout;