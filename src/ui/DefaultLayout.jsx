
// import Tabs from "../components/Tabs";
import { Outlet, } from "react-router-dom";
import Navbar from "../components/navbar";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const DefaultLayout = () => {
    const { pathname } = useLocation();
    const isHome = pathname === '/home';
    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <Navbar>
                {!isHome && <Header />}
            </Navbar>
            <div className="p-4">
                <div className="flex h-screen overflow-hidden my-2">
                    <main className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden p-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>

    )
}

export default DefaultLayout