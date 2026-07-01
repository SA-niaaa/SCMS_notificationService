import MainLayout from "../../layouts/MainLayout";
import DashboardCard from "../../components/DashboardCard";
import RecentActivity from "../../components/RecentActivity";
import { useEffect, useState } from "react";

import {
  getSupplierCount,
  getMaterialCount,
  getManufacturerCount,
  getEmployeeCount,
  getStoreCount,
} from "../../services/dashboardService";

function Dashboard() {
  const [supplierCount, setSupplierCount] =
    useState(0);

  const [materialCount, setMaterialCount] =
    useState(0);

  const [manufacturerCount, setManufacturerCount] =
    useState(0);

  const [employeeCount, setEmployeeCount] =
    useState(0);

  const [storeCount, setStoreCount] =
    useState(0);

  useEffect(() => {

  const loadCounts =
    async () => {

      setSupplierCount(
        await getSupplierCount()
      );

      setMaterialCount(
        await getMaterialCount()
      );

      setManufacturerCount(
        await getManufacturerCount()
      );

      setEmployeeCount(
        await getEmployeeCount()
      );

      setStoreCount(
        await getStoreCount()
      );

    };

  loadCounts();

  window.addEventListener(
    "activityUpdated",
    loadCounts
  );

  return () => {

    window.removeEventListener(
      "activityUpdated",
      loadCounts
    );

  };

}, []);

  return (
    <MainLayout>

      <div>

        {/* Header */}

        <div className="mb-8">

          <h1 className="text-3xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Welcome to Supply Chain
            Management System
          </p>

        </div>

        {/* Statistics Cards */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-5
          gap-6
          "
        >

          <DashboardCard
            title="Suppliers"
            value={supplierCount.toString()}
          />

          <DashboardCard
            title="Materials"
            value={materialCount.toString()}
          />

          <DashboardCard
            title="Manufacturers"
            value={manufacturerCount.toString()}
          />

          <DashboardCard
            title="Stores"
            value={storeCount.toString()}
          />

          <DashboardCard
            title="Employees"
            value={employeeCount.toString()}
          />

        </div>

        {/* Recent Activity */}

        <div className="mt-8">

          <RecentActivity />

        </div>

      </div>

    </MainLayout>
  );
}

export default Dashboard;