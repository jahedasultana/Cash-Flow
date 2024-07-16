import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
           <div className="mx-auto max-w-2xl md:max-w-4xl">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;