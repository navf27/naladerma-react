import React, { useEffect } from "react";
import AdminDashboardTemplate from "../../components/Template/AdminDashboardTemplate";
import Card from "../../components/atoms/Card";
import UserIcon from "../../assets/001-user.png";
import EventIcon from "../../assets/003-calendar-check.png";
import CustomerIcon from "../../assets/002-group.png";
import OrderIcon from "../../assets/004-shopping-bag.png";
import TicketIcon from "../../assets/005-ticket.png";
import { useAdminDashboardContext } from "../../context/AdminDashboardContext";
import DashboardCardSkeleton from "../../components/atoms/AdminPageAtoms/DashboardCardSkeleton";
import AdminOnlyRoute from "../../hoc/AdminOnlyRoute";

const AdminDashboard = () => {
  const { dashboardIndex, dataFetched, clearDataFetched } =
    useAdminDashboardContext();

  useEffect(() => {
    dashboardIndex();

    return () => {
      clearDataFetched();
    };
  }, []);

  return (
    <AdminDashboardTemplate>
      <div className="w-screen p-4">
        <div className="flex flex-col gap-4">
          {dataFetched ? (
            <>
              <Card>
                <div>
                  <img src={EventIcon} className="opacity-55 w-7 mt-1" alt="" />
                  <p className="text-dark text-2xl font-medium mt-4">
                    {dataFetched.events}
                  </p>
                  <p className="text-body-color text-base mt-1">Total Event</p>
                </div>
              </Card>
              <Card>
                <div>
                  <img src={EventIcon} className="opacity-55 w-7 mt-1" alt="" />
                  <p className="text-dark text-2xl font-medium mt-4">
                    {dataFetched.categories}
                  </p>
                  <p className="text-body-color text-base mt-1">
                    Total Kategori
                  </p>
                </div>
              </Card>
              <Card>
                <div>
                  <img src={UserIcon} className="opacity-55 w-7 mt-1" alt="" />
                  <p className="text-dark text-2xl font-medium mt-4">
                    {dataFetched.users}
                  </p>
                  <p className="text-body-color text-base mt-1">Total User</p>
                </div>
              </Card>
              <Card>
                <div>
                  <img
                    src={CustomerIcon}
                    className="opacity-55 w-7 mt-1"
                    alt=""
                  />
                  <p className="text-dark text-2xl font-medium mt-4">
                    {dataFetched.customers}
                  </p>
                  <p className="text-body-color text-base mt-1">
                    Total Customer
                  </p>
                </div>
              </Card>
              <Card>
                <div>
                  <img src={OrderIcon} className="opacity-55 w-7 mt-1" alt="" />
                  <p className="text-dark text-2xl font-medium mt-4">
                    {dataFetched.orders}
                  </p>
                  <p className="text-body-color text-base mt-1">Total Order</p>
                </div>
              </Card>
              <Card>
                <div>
                  <img
                    src={TicketIcon}
                    className="opacity-55 w-7 mt-1"
                    alt=""
                  />
                  <p className="text-dark text-2xl font-medium mt-4">
                    {dataFetched.tickets}
                  </p>
                  <p className="text-body-color text-base mt-1">Total Ticket</p>
                </div>
              </Card>
            </>
          ) : (
            <>
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
            </>
          )}
        </div>
      </div>
    </AdminDashboardTemplate>
  );
};

export default AdminOnlyRoute(AdminDashboard);
