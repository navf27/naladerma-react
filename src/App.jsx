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
import AdminCustomers from "./pages/AdminPages/AdminCustomers";
import AdminUsers from "./pages/AdminPages/AdminUsers";
import AdminEvents from "./pages/AdminPages/AdminEvents";
import AdminOrders from "./pages/AdminPages/AdminOrders";
import AdminTickets from "./pages/AdminPages/AdminTickets";
import AdminCategories from "./pages/AdminPages/AdminCategories";
import EventDetail from "./pages/EventDetail";
import AllEvent from "./pages/AllEvent";
import { EventDetailProvider } from "./context/EventDetailContext";
import { HomeProvider } from "./context/HomeContext";
import Payment from "./pages/Payment";
import TransactionPending from "./pages/TransactionPending";
import { TransactionPendingProvider } from "./context/TransactionPendingContext";
import UserDashboard from "./pages/UserDashboard";
import { UserDashboardProvider } from "./context/UserDashboardContext";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SignOutProvider>
              <HomeProvider>
                <Home />
              </HomeProvider>
            </SignOutProvider>
          }
        />
        <Route
          path="/event/:idE"
          element={
            <SignOutProvider>
              <EventDetailProvider>
                <EventDetail />
              </EventDetailProvider>
            </SignOutProvider>
          }
        />
        <Route
          path="/payment/:id"
          element={
            <SignOutProvider>
              <EventDetailProvider>
                <Payment />
              </EventDetailProvider>
            </SignOutProvider>
          }
        />
        <Route
          path="/all-events"
          element={
            <SignOutProvider>
              <HomeProvider>
                <AllEvent />
              </HomeProvider>
            </SignOutProvider>
          }
        />
        <Route
          path="/pending-transaction"
          element={
            <SignOutProvider>
              <TransactionPendingProvider>
                <TransactionPending />
              </TransactionPendingProvider>
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
            <SignOutProvider>
              <AdminDashboardProvider>
                <AdminDashboard />
              </AdminDashboardProvider>
            </SignOutProvider>
          }
        />
        <Route
          path="/dashboard"
          element={
            <SignOutProvider>
              <AdminDashboardProvider>
                <UserDashboardProvider>
                  <UserDashboard />
                </UserDashboardProvider>
              </AdminDashboardProvider>
            </SignOutProvider>
          }
        />
        <Route
          path="/adm/dashboard/events"
          element={
            <SignOutProvider>
              <AdminDashboardProvider>
                <AdminEvents />
              </AdminDashboardProvider>
            </SignOutProvider>
          }
        />
        <Route
          path="/adm/dashboard/categories"
          element={
            <SignOutProvider>
              <AdminDashboardProvider>
                <AdminCategories />
              </AdminDashboardProvider>
            </SignOutProvider>
          }
        />
        <Route
          path="/adm/dashboard/users"
          element={
            <SignOutProvider>
              <AdminDashboardProvider>
                <AdminUsers />
              </AdminDashboardProvider>
            </SignOutProvider>
          }
        />
        <Route
          path="/adm/dashboard/customers"
          element={
            <SignOutProvider>
              <AdminDashboardProvider>
                <AdminCustomers />
              </AdminDashboardProvider>
            </SignOutProvider>
          }
        />
        <Route
          path="/adm/dashboard/orders"
          element={
            <SignOutProvider>
              <AdminDashboardProvider>
                <AdminOrders />
              </AdminDashboardProvider>
            </SignOutProvider>
          }
        />
        <Route
          path="/adm/dashboard/tickets"
          element={
            <SignOutProvider>
              <AdminDashboardProvider>
                <AdminTickets />
              </AdminDashboardProvider>
            </SignOutProvider>
          }
        />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
