
import React from "react";
import { TopPlayer } from "../types/schema";
import { FaCalendarAlt as CalendarDays, FaRuler as Ruler, FaMapMarkerAlt as MapPin, FaTrophy as Trophy, FaMoneyBillWave as Money } from "react-icons/fa";

export const RichestCard: React.FC<{
  person: TopPlayer;
  style?: React.CSSProperties;
}> = ({ person, style }) => (
  <div className="flex justify-center p-4" style={style}>
    <div className="w-full max-w-[320px] overflow-hidden rounded-xl shadow-2xl bg-white border border-gray-200 transform transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] hover:scale-105">
      {/* Header - Gradient Background with Rank */}
      <div className="relative">
        <div className="absolute top-3 left-3 z-10 bg-black/75 backdrop-blur-md text-white font-bold text-lg rounded-full h-10 w-10 flex items-center justify-center border-2 border-yellow-400">
          #{person.rank}
        </div>
        <div className="h-24 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800"></div>
        
        {/* Avatar - Overlapping Position */}
        <div className="flex justify-center -mt-12">
          <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/112?text=Profile';
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Name Section */}
      <div className="px-4 pt-3 pb-2 text-center">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight leading-tight">{person.jersey_name}</h1>
        <p className="text-gray-500 text-sm mb-1 italic">{person.name}</p>
        <div className="flex justify-center my-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {person.country} {person.flag}
          </span>
        </div>
      </div>
      
      {/* Wealth Info */}
      <div className="px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center">
        <p className="text-xs uppercase font-semibold tracking-wider opacity-80">Net Worth</p>
        <div className="flex items-center justify-center gap-1">
          <Money className="w-4 h-4" />
          <span className="text-2xl font-extrabold">${person.net_worth}B</span>
        </div>
      </div>
      
      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-2 p-4 bg-gray-50 text-sm">
        <div className="flex items-center gap-2 p-2 rounded-lg bg-white shadow-sm border border-gray-100">
          <CalendarDays className="h-4 w-4 text-blue-500 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500">Born</p>
            <p className="font-medium text-gray-800">{person.birth_date}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 p-2 rounded-lg bg-white shadow-sm border border-gray-100">
          <Trophy className="h-4 w-4 text-amber-500 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500">Source</p>
            <p className="font-medium text-gray-800">{person.source}</p>
          </div>
        </div>
        
        <div className="col-span-2 flex items-center gap-2 p-2 rounded-lg bg-white shadow-sm border border-gray-100">
          <Ruler className="h-4 w-4 text-purple-500 flex-shrink-0" />
          <div className="w-full">
            <p className="text-xs text-gray-500">Industry</p>
            <p className="font-medium text-gray-800 truncate">{person.industry}</p>
          </div>
        </div>
      </div>
      
      {/* Social Proof */}
      <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
        <div className="text-xs text-gray-600">
          <span className="font-semibold">Age:</span> {person.age}
        </div>
        <div className="flex space-x-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
        </div>
      </div>
    </div>
  </div>
);
