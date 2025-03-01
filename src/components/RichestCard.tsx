import React from "react";
import { TopPlayer } from "../types/schema";
import {
  FaCalendarAlt as CalendarDays,
  FaRuler as Ruler,
  FaMapMarkerAlt as MapPin,
  FaTrophy as Trophy,
  FaFutbol as Football,
  FaShieldAlt as Team,
  FaUser as User,
} from "react-icons/fa";

export const RichestCard: React.FC<{
  person: TopPlayer;
  style?: React.CSSProperties;
}> = ({ person, style }) => (
  <div className="flex justify-center p-0" style={style}>
    <div className="w-[600px] h-[1000px] overflow-hidden rounded-xl shadow-2xl bg-white border border-gray-200 transform transition-all duration-300 hover:shadow-[0_15px_40px_-12px_rgba(0,0,0,0.35)] hover:scale-105">
      {/* Header - Gradient Background with Rank */}
      <div className="relative">
        <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md text-white font-bold text-3xl rounded-full h-16 w-16 flex items-center justify-center border-3 border-yellow-500 shadow-xl">
          #{person.rank}
        </div>
        <div className="h-32 bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-900"></div>

        {/* Avatar - Overlapping Position */}
        <div className="flex justify-center -mt-16">
          <div className="w-40 h-40 rounded-full border-6 border-white shadow-xl overflow-hidden bg-white">
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
      <div className="px-4 pt-4 pb-3 text-center">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight leading-tight mb-2">
          {person.jersey_name || person.name.split(" ").pop()}
        </h1>
        <p className="text-gray-500 text-lg mb-2 italic">{person.name}</p>
        <div className="flex justify-center my-2">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <MapPin className="h-4 w-4" /> {person.country}{" "}
            {person.flag || "🌍"}
          </span>
        </div>
      </div>

      {/* Assists Info */}
      <div className="px-4 py-5 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 text-white text-center">
        <p className="text-lg uppercase font-semibold tracking-wider opacity-90 mb-1">
          Top Assists
        </p>
        <div className="flex items-center justify-center gap-2">
          <Football className="w-8 h-8" />
          <span className="text-5xl font-extrabold">
            {person.assists || 0}
          </span>
        </div>
      </div>

      {/* Details Grid - Simplified */}
      <div className="grid grid-cols-2 gap-4 p-6 bg-gray-50">
        <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-gray-100">
          <CalendarDays className="h-7 w-7 text-blue-600 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
              Born
            </p>
            <p className="font-medium text-gray-800 text-base">
              {person.birth_date || "N/A"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-gray-100">
          <User className="h-7 w-7 text-indigo-500 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
              Age
            </p>
            <p className="font-medium text-gray-800 text-base">
              {person.age || "N/A"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-gray-100">
          <Trophy className="h-7 w-7 text-amber-500 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
              Position
            </p>
            <p className="font-medium text-gray-800 text-base">
              {person.position || "Midfielder"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-gray-100">
          <Team className="h-7 w-7 text-emerald-600 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
              Team
            </p>
            <p className="font-medium text-gray-800 text-base">
              {person.team || "N/A"}
            </p>
          </div>
        </div>

        <div className="col-span-2 flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-gray-100">
          <Ruler className="h-7 w-7 text-purple-500 flex-shrink-0" />
          <div className="w-full">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
              Height
            </p>
            <p className="font-medium text-gray-800 text-base">
              {person.height_cm ? `${person.height_cm} cm` : "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 flex justify-between items-center mt-auto">
        <div className="text-sm text-gray-600 font-medium">
          Top Football Assists 2024
        </div>
        <div className="flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span className="w-3 h-3 rounded-full bg-purple-500"></span>
        </div>
      </div>
    </div>
  </div>
);
