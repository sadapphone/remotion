
import React from "react";
import { TopPlayer } from "../types/schema";
import { FaCalendarAlt as CalendarDays, FaRuler as Ruler, FaMapMarkerAlt as MapPin, FaTrophy as Trophy, FaMoneyBillWave as Money } from "react-icons/fa";

export const RichestCard: React.FC<{
  person: TopPlayer;
  style?: React.CSSProperties;
}> = ({ person, style }) => (
  <div className="flex justify-center p-2" style={style}>
    <div className="w-full max-w-[400px] overflow-hidden rounded-xl shadow-2xl bg-white border border-gray-200 transform transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] hover:scale-105">
      {/* Header - Gradient Background with Rank */}
      <div className="relative">
        <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md text-white font-bold text-lg rounded-full h-12 w-12 flex items-center justify-center border-2 border-yellow-400">
          #{person.rank}
        </div>
        <div className="h-32 bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-900"></div>
        
        {/* Avatar - Overlapping Position */}
        <div className="flex justify-center -mt-16">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
            <img
              src={`https://i.pravatar.cc/300?img=${person.rank}`}
              alt={person.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(person.name) + '&background=random&size=128';
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Name Section */}
      <div className="px-6 pt-4 pb-3 text-center">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight leading-tight">{person.jersey_name || person.name.split(' ').pop()}</h1>
        <p className="text-gray-500 text-base mb-2 italic">{person.name}</p>
        <div className="flex justify-center my-3">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> {person.country} {person.flag || ''}
          </span>
        </div>
      </div>
      
      {/* Wealth Info */}
      <div className="px-6 py-4 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 text-white text-center">
        <p className="text-sm uppercase font-semibold tracking-wider opacity-90 mb-1">Net Worth</p>
        <div className="flex items-center justify-center gap-2">
          <Money className="w-5 h-5" />
          <span className="text-3xl font-extrabold">${person.net_worth || person.netWorth?.replace('$', '').replace('B', '') || '0'}B</span>
        </div>
      </div>
      
      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-3 p-5 bg-gray-50 text-sm">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm border border-gray-100">
          <CalendarDays className="h-5 w-5 text-blue-600 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500">Born</p>
            <p className="font-medium text-gray-800">{person.birth_date || 'N/A'}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm border border-gray-100">
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
