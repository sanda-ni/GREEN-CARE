import React from "react";
import StockManagerRoutes from './routes/stock_manager_routes';
import DoctorRoutes from './routes/doctor_routes';
import MyFunction  from "./views/doctor/learnMoreView";

export default function Router() {
  return (
    <div>
      <StockManagerRoutes />
      <DoctorRoutes />
      <MyFunction />
    </div>
  );
}
