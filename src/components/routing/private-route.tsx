import BePrivateLayout from "components/layouts/private-layput";
import { Navigate } from "react-router-dom";

const BePrivateRoute = () => {
    let auth = true;
    return auth ? <BePrivateLayout /> : <Navigate to="/login" />;
}
export default BePrivateRoute