import { SignUpProvider } from "./context/SignUpContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInProvider } from "./context/SignInContext";
import { SignOutProvider } from "./context/SignOutContext";
import { AdminDashboardProvider } from "./context/AdminDashboardContext";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AdminDashboardTemplate from "./components/Template/AdminDashboardTemplate";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import AdminDashboard from "./pages/AdminPages/AdminDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SignOutProvider>
              <Home />
            </SignOutProvider>
          }
        />
        <Route
          path="/sign-up"
          element={
            <SignUpProvider>
              <SignUp />
            </SignUpProvider>
          }
        />
        <Route
          path="/sign-in"
          element={
            <SignUpProvider>
              <SignInProvider>
                <SignIn />
              </SignInProvider>
            </SignUpProvider>
          }
        />
        <Route
          path="/adm/dashboard"
          element={
            <AdminDashboardProvider>
              <AdminDashboard />
            </AdminDashboardProvider>
          }
        />
        <Route
          path="/adm/dashboard/users"
          element={
            <AdminDashboardProvider>
              <AdminDashboardTemplate />
            </AdminDashboardProvider>
          }
        />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
