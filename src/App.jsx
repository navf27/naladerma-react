import { SignUpProvider } from "./context/SignUpContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInProvider } from "./context/SignInContext";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SignUpProvider>
              <SignUp />
            </SignUpProvider>
          }
        />
        <Route
          path="/login"
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
    // <>
    //   <SignUpProvider>
    //     <SignUp />
    //   </SignUpProvider>
    // </>
  );
}
