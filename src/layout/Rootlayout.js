import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function Rootlayout() {
    return (
        <div>
            <Navbar/>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}