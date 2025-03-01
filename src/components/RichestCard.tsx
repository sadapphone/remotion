import React from "react";
import { TopPlayer } from "../types/schema";
import {
  FaCalendarAlt as CalendarDays,
  FaRuler as Ruler,
  FaMapMarkerAlt as MapPin,
  FaTrophy as Trophy,
  FaMoneyBillWave as Money,
  FaBuilding as Building,
  FaUser as User,
} from "react-icons/fa";

export const RichestCard: React.FC<{
  person: TopPlayer;
  style?: React.CSSProperties;
}> = ({ person, style }) => (
  <div className="flex justify-center p-0" style={style}>
    <div className="w-[600px] h-[800px] overflow-hidden rounded-xl shadow-2xl bg-white border border-gray-200 transform transition-all duration-300 hover:shadow-[0_15px_40px_-12px_rgba(0,0,0,0.35)] hover:scale-105">
      {/* Header - Gradient Background with Rank */}
      <div className="relative">
        <div className="absolute top-3 left-3 z-10 bg-black/80 backdrop-blur-md text-white font-bold text-xl rounded-full h-12 w-12 flex items-center justify-center border-2 border-yellow-400 shadow-lg">
          #{person.rank}
        </div>
        <div className="h-24 bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-900"></div>

        {/* Avatar - Overlapping Position */}
        <div className="flex justify-center -mt-12">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
            <img
              src={`https://i.pravatar.cc/400?img=${(person.rank % 70) + 1}`}
              alt={person.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://ui-avatars.com/api/?name=" +
                  encodeURIComponent(person.name) +
                  "&background=random&size=256";
              }}
            />
          </div>
        </div>
      </div>

      {/* Name Section */}
      <div className="px-4 pt-2 pb-2 text-center">
        <h1 className="text-xl font-bold text-gray-800 tracking-tight leading-tight">
          {person.jersey_name || person.name.split(" ").pop()}
        </h1>
        <p className="text-gray-500 text-sm mb-1 italic">{person.name}</p>
        <div className="flex justify-center my-1">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {person.country}{" "}
            {person.flag || "🌍"}
          </span>
        </div>
      </div>

      {/* Wealth Info */}
      <div className="px-4 py-3 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 text-white text-center">
        <p className="text-sm uppercase font-semibold tracking-wider opacity-90 mb-0.5">
          Net Worth
        </p>
        <div className="flex items-center justify-center gap-1">
          <Money className="w-5 h-5" />
          <span className="text-3xl font-extrabold">
            $
            {person.net_worth ||
              person.netWorth?.replace("$", "").replace("B", "") ||
              "0"}
            B
          </span>
        </div>
      </div>

      {/* Details Grid - Simplified */}
      <div className="grid grid-cols-2 gap-3 p-3 bg-gray-50">
        <div className="flex items-center gap-2 p-2 rounded-lg bg-white shadow-sm border border-gray-100">
          <CalendarDays className="h-5 w-5 text-blue-600 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Born
            </p>
            <p className="font-medium text-gray-800 text-sm">
              {person.birth_date || "N/A"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-lg bg-white shadow-sm border border-gray-100">
          <User className="h-5 w-5 text-indigo-500 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Age</p>
            <p className="font-medium text-gray-800 text-sm">
              {person.age || "N/A"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-lg bg-white shadow-sm border border-gray-100">
          <Trophy className="h-5 w-5 text-amber-500 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Source
            </p>
            <p className="font-medium text-gray-800 text-xs">
              {person.source || "Business"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-lg bg-white shadow-sm border border-gray-100">
          <Building className="h-5 w-5 text-emerald-600 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Company
            </p>
            <p className="font-medium text-gray-800 text-xs">
              {person.team || "N/A"}
            </p>
          </div>
        </div>

        <div className="col-span-2 flex items-center gap-2 p-2 rounded-lg bg-white shadow-sm border border-gray-100">
          <Ruler className="h-5 w-5 text-purple-500 flex-shrink-0" />
          <div className="w-full">
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Industry
            </p>
            <p className="font-medium text-gray-800 text-xs">
              {person.industry || person.position || "Technology"}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-2 py-1 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
        <div className="text-xxs text-gray-600 font-medium">
          Forbes 2024
        </div>
        <div className="flex space-x-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
        </div>
      </div>
    </div>
  </div>
);
