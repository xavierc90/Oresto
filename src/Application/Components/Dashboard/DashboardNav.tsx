import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsListCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { CalendarShadcn } from "./CalendarShadcn";

export const DashboardNav = () => {
  const [dateSelected, setDateSelected] = useState<Date>(new Date());
  const location = useLocation();

  useEffect(() => {
    console.log(dateSelected.toLocaleDateString())
    // requête API avec la date sélectionnée
  }, [dateSelected]);

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? 'flex flex-col items-center text-red-500 transition duration-300'
      : 'flex flex-col items-center text-gray-600 hover:text-red-500 transition duration-300';
  };

  return (
    <div className='bg-light w-96 h-screen flex flex-col items-center shadow-2xl'>
      <div className="mt-12">
        <img src="../../../public/img/logo-oresto-red.png" width="230px" alt="Logo Oresto" />
      </div>
      
      {/* Recherche par date */}
      <div className="mt-12">
        <CalendarShadcn mode={"single"} selected={dateSelected} onSelect={setDateSelected} required />
      </div>

      {/* Recherche par nom */}
      <div className="flex flex-col justify-center mt-8">
        <label className="text-sm font-bold px-12 mb-4">Recherche par nom</label>
        <input type="text" name="search" placeholder="Saisir le nom du client" className="border-2 border-gray-300 p-2 mb-6 font-bold w-60 mx-12" />
      </div>
    
      <div className="grid grid-cols-2 gap-6 justify-items-center mt-4">
        {/* Premier Élément */}
        <Link
          to="/dashboard/bookings"
          className={getLinkClass('/dashboard/bookings')}>
          <BsListCheck size={30} className="mb-1" />
          <h2 className="text-xs font-bold">Réservations</h2>
        </Link>

        {/* Deuxième Élément */}
        <Link
          to="/dashboard/layouts"
          className={getLinkClass('/dashboard/layouts')}>
          <LuLayoutDashboard size={30} className="mb-1" />
          <h2 className="text-xs font-bold">Plan de tables</h2>
        </Link>

        {/* Troisième Élément */}
        <Link
          to="/dashboard/clients"
          className={getLinkClass('/dashboard/clients')}>
          <FaUsers size={30} className="mb-1" />
          <h2 className="text-xs font-bold">Gestion clients</h2>
        </Link>

        {/* Quatrième Élément */}
        <Link
          to="/dashboard/analytics"
          className={getLinkClass('/dashboard/analytics')}>
          <IoMdStats size={30} className="mb-1" />
          <h2 className="text-xs font-bold">Statistiques</h2>
        </Link>

        {/* Cinquième Élément */}
        <Link
          to="/dashboard/settings"
          className={getLinkClass('/dashboard/settings')}>
          <FaGear size={30} className="mb-1" />
          <h2 className="text-xs font-bold">Paramètres</h2>
        </Link>

        {/* Sixième Élément */}
        <Link
          to="/login"
          className="flex flex-col items-center text-gray-600 hover:text-red-500 focus:text-red-500 transition duration-300">
          <MdLogout size={30} className="mb-1" />
          <h2 className="text-xs font-bold">Se déconnecter</h2>
        </Link>
      </div>
    </div>
  );
};