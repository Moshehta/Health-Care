import React, { Fragment } from "react";
import Navbar from '../Nav/Navbar';
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <Fragment>
            <Navbar />
            <main>
                <Outlet/>
            </main>
        </Fragment>
    );
}
export default Layout;