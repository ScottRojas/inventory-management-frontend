import React, { useState } from 'react';
import Sidebar from "../header/Sidebar";
import Header from "../header/Header";

const Layout = ({ children }) => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const openSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    }

    return (
        <div className="grid-container">
            <Header openSidebar={openSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />

            <main className={"main-container"}>{children}</main>
        </div>
    );
};

export default Layout;