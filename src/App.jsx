import { SignUpProvider } from "./context/SignUpContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInProvider } from "./context/SignInContext";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import { SignOutProvider } from "./context/SignOutContext";

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
        <Route path="/adm/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
