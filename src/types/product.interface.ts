
export type category = {
    name: string;
};

export interface TProduct {
    _id?: string;
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    category: string;
    images: string;
    isDeleted?: boolean;
}

// error solving for temporary 
// const obj : TProduct ={ 
//     _id:"1",
//     image: "1",
//     title: "1",
//     description: "1",
//     price: 1,
//     quantity: 1,
//     rating: "1",
//     isDeleted: false,
// }
