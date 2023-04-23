import { Navigate, Outlet } from "react-router-dom";

const BePublicRoute = () => {
    let auth = true;
    return auth ? <><Outlet /></> : <Navigate to="/" />;
}
export default BePublicRoute