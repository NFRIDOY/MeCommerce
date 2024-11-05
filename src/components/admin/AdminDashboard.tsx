'use client'


// import PaginationDynamicBanner from "./../../components/layouts/Banners/PaginationDynamicBanner";
const AdminDashboard = () => {

    // const {
    //     isPending: isPendingProducts,
    //     error: errorProducts,
    //     data: statsData,
    //     refetch: refetchProducts,
    // } = useQuery({
    //     queryKey: ["stats"],
    //     queryFn: async () =>
    //         await axios.get(`/stats`).then((res) => {
    //             return res.data;
    //         }),
    // });
    // // const { totalProducts, totalCategory, totalOrders } = statsData.data;
    // // console.log(statsData);
    // if (isPendingProducts || errorProducts) {
    //     // console.log(isPending)
    //     // console.log(isError)
    //     <div>Loading....</div>;
    // }

    //     {
    //         name: "Products",
    //         uv: 4000,
    //         pv: statsData?.data?.totalProducts, // data
    //         amt: 2400,
    //     },
    //     {
    //         name: "Category",
    //         uv: 3000,
    //         pv: statsData?.data?.totalCategory,
    //         amt: 2210,
    //     },
    //     {
    //         name: "Orders",
    //         uv: 2000,
    //         pv: statsData?.data?.totalOrders,
    //         amt: 2290,
    //     },
    //     // {
    //     //     name: "Page D",
    //     //     uv: 2780,
    //     //     pv: 3908,
    //     //     amt: 2000,
    //     // },
    //     // {
    //     //     name: "Page E",
    //     //     uv: 1890,
    //     //     pv: 4800,
    //     //     amt: 2181,
    //     // },
    //     // {
    //     //     name: "Page F",
    //     //     uv: 2390,
    //     //     pv: 3800,
    //     //     amt: 2500,
    //     // },
    //     // {
    //     //     name: "Page G",
    //     //     uv: 3490,
    //     //     pv: 4300,
    //     //     amt: 2100,
    //     // },
    // ];

    // const getIntroOfPage = (label) => {
    //     if (label === "Products") {
    //         return "Products is about men's clothing";
    //     }
    //     if (label === "Category") {
    //         return "Category is about women's dress";
    //     }
    //     if (label === "Orders") {
    //         return "Orders is about women's bag";
    //     }
    //     if (label === "Page D") {
    //         return "Page D is about household goods";
    //     }
    //     if (label === "Page E") {
    //         return "Page E is about food";
    //     }
    //     if (label === "Page F") {
    //         return "Page F is about baby food";
    //     }
    //     return "";
    // };

    // const CustomTooltip = ({ active, payload, label }) => {
    //     if (active && payload && payload.length) {
    //         return (
    //             <div className="custom-tooltip">
    //                 <p className="label">{`${label} : ${payload[0].value}`}</p>
    //                 <p className="intro">{getIntroOfPage(label)}</p>
    //                 {/* <p className="desc">
    //                     Anything you want can be displayed here.
    //                 </p> */}
    //             </div>
    //         );
    //     }

    //     return null;
    // };
    return (
        <div className="h-full w-full bg-slate-100 ">
            <div className="h-1/2 flex flex-col lg:flex-row justify-between items-center w-fit border-0 mx-auto">
                <div className="w-full mt-10 ml-10">
                    {/* <AddProductForm /> */}
                </div>
                <div className="w-full mt-10 ml-10">
                    {/* <AddCategoryForm /> */}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
