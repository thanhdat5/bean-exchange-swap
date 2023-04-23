import BeChangePasswordPage from "components/pages/auth/chang-password";
import BeLoginPage from "components/pages/auth/login";
import BeSignUpPage from "components/pages/auth/register";
import BeSwapPage from "components/pages/swap";
import BePrivateRoute from "components/routing/private-route";
import BePublicRoute from "components/routing/public-route";
import { Navigate, Route, Routes } from "react-router-dom";

export const router = <>
    <Routes>
        <Route path="/" element={<Navigate to="/app" />} />
        <Route path="/auth" element={<BePublicRoute />}>
            <Route element={<BeLoginPage />} index />
            <Route element={<BeSignUpPage />} index />
            <Route element={<BeChangePasswordPage />} index />
        </Route>
        <Route path="/app" element={<BePrivateRoute />}>
            <Route element={<BeSwapPage />} index />
        </Route>
    </Routes>
</>