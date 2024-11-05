import Link from "next/link";


const Sidebar = () => {
    const menu = (
        <>
            <li>
                <Link href={"/admin"}>Dashboard</Link>
            </li>
            <li>
                <Link href={"/admin/category"}>Categoris</Link>
            </li>
            <li>
                <Link href={"/admin/products"}>Products</Link>
            </li>
            <li>
                <Link href={"/"}>Logout</Link>
            </li>
        </>
    );
    return (
        <div className="h-full">
            <ul className="menu bg-base-200  w-56">{menu}</ul>
        </div>
    );
};

export default Sidebar;