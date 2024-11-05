import React from 'react';

interface TProps {
    params: {
      id: string;
    };
  }

const ProductDetailsPage = ({params : {id}}: TProps) => {
    return (
        <div>
            details
            {id}
        </div>
    );
};

export default ProductDetailsPage;