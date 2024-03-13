import React from "react";
import AdminDashboardTemplate from "../../components/Template/AdminDashboardTemplate";
import Card from "../../components/Atoms/Card";
import UserIcon from "../../assets/001-user.png";
import EventIcon from "../../assets/003-calendar-check.png";
import CustomerIcon from "../../assets/002-group.png";
import OrderIcon from "../../assets/004-shopping-bag.png";
import TicketIcon from "../../assets/005-ticket.png";

const AdminDashboard = () => {
  return (
    <AdminDashboardTemplate>
      <div className="w-screen p-4">
        <div className="flex flex-col gap-4">
          <Card className={"w-full p-5 drop-shadow-md rounded-lg"}>
            <div>
              <img src={EventIcon} className="opacity-55 w-7 mt-1" alt="" />
              <p className="text-dark text-2xl font-medium mt-4">12345</p>
              <p className="text-slate-500 text-base mt-1">Total Event</p>
            </div>
          </Card>
          <Card className={"w-full p-5 drop-shadow-md rounded-lg"}>
            <div>
              <img src={UserIcon} className="opacity-55 w-7 mt-1" alt="" />
              <p className="text-dark text-2xl font-medium mt-4">12345</p>
              <p className="text-slate-500 text-base mt-1">Total User</p>
            </div>
          </Card>
          <Card className={"w-full p-5 drop-shadow-md rounded-lg"}>
            <div>
              <img src={CustomerIcon} className="opacity-55 w-7 mt-1" alt="" />
              <p className="text-dark text-2xl font-medium mt-4">12345</p>
              <p className="text-slate-500 text-base mt-1">Total Customer</p>
            </div>
          </Card>
          <Card className={"w-full p-5 drop-shadow-md rounded-lg"}>
            <div>
              <img src={OrderIcon} className="opacity-55 w-7 mt-1" alt="" />
              <p className="text-dark text-2xl font-medium mt-4">12345</p>
              <p className="text-slate-500 text-base mt-1">Total Order</p>
            </div>
          </Card>
          <Card className={"w-full p-5 drop-shadow-md rounded-lg"}>
            <div>
              <img src={TicketIcon} className="opacity-55 w-7 mt-1" alt="" />
              <p className="text-dark text-2xl font-medium mt-4">12345</p>
              <p className="text-slate-500 text-base mt-1">Total Ticket</p>
            </div>
          </Card>
        </div>
      </div>
    </AdminDashboardTemplate>
  );
};

export default AdminDashboard;
