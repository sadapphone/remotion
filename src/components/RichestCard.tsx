
import React from "react";
import { TopPlayer } from "../types/schema";
import { FaCalendarAlt as CalendarDays, FaRuler as Ruler, FaMapMarkerAlt as MapPin, FaTrophy as Trophy, FaMoneyBillWave as Money, FaBuilding as Building, FaUser as User } from "react-icons/fa";

export const RichestCard: React.FC<{
  person: TopPlayer;
  style?: React.CSSProperties;
}> = ({ person, style }) => (
  <div className="flex justify-center p-0" style={style}>
    <div className="w-full max-w-[850px] overflow-hidden rounded-xl shadow-2xl bg-white border border-gray-200 transform transition-all duration-300 hover:shadow-[0_25px_70px_-12px_rgba(0,0,0,0.35)] hover:scale-105">
      {/* Header - Gradient Background with Rank */}
      <div className="relative">
        <div className="absolute top-6 left-6 z-10 bg-black/80 backdrop-blur-md text-white font-bold text-3xl rounded-full h-20 w-20 flex items-center justify-center border-2 border-yellow-400 shadow-lg">
          #{person.rank}
        </div>
        <div className="h-52 bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-900"></div>
        
        {/* Avatar - Overlapping Position */}
        <div className="flex justify-center -mt-24">
          <div className="w-48 h-48 rounded-full border-6 border-white shadow-xl overflow-hidden bg-white">
            <img
              src={`https://randomuser.me/api/portraits/${person.rank % 2 === 0 ? 'women' : 'men'}/${(person.rank % 70) + 1}.jpg`}
              alt={person.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(person.name) + '&background=random&size=256';
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Name Section */}
      <div className="px-10 pt-8 pb-5 text-center">
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight leading-tight">{person.jersey_name || person.name.split(' ').pop()}</h1>
        <p className="text-gray-500 text-2xl mb-4 italic">{person.name}</p>
        <div className="flex justify-center my-4">
          <span className="bg-blue-100 text-blue-800 text-lg font-semibold px-6 py-2 rounded-full flex items-center gap-2.5">
            <MapPin className="h-5 w-5" /> {person.country} {person.flag || '🌍'}
          </span>
        </div>
      </div>
      
      {/* Wealth Info */}
      <div className="px-10 py-8 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 text-white text-center">
        <p className="text-xl uppercase font-semibold tracking-wider opacity-90 mb-3">Net Worth</p>
        <div className="flex items-center justify-center gap-4">
          <Money className="w-10 h-10" />
          <span className="text-6xl font-extrabold">${person.net_worth || person.netWorth?.replace('$', '').replace('B', '') || '0'}B</span>
        </div>
      </div>
      
      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-6 p-8 bg-gray-50">
        <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-md border border-gray-100">
          <CalendarDays className="h-7 w-7 text-blue-600 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">Born</p>
            <p className="font-medium text-gray-800 text-lg">{person.birth_date || 'N/A'}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-md border border-gray-100">
          <User className="h-6 w-6 text-indigo-500 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">Age</p>
            <p className="font-medium text-gray-800 text-lg">{person.age || 'N/A'}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-md border border-gray-100">
          <Trophy className="h-6 w-6 text-amber-500 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">Source</p>
            <p className="font-medium text-gray-800 text-lg">{person.source || 'Business'}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-md border border-gray-100">
          <Building className="h-6 w-6 text-emerald-600 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">Company</p>
            <p className="font-medium text-gray-800 text-lg">{person.team || 'N/A'}</p>
          </div>
        </div>
        
        <div className="col-span-2 flex items-center gap-4 p-4 rounded-lg bg-white shadow-md border border-gray-100">
          <Ruler className="h-6 w-6 text-purple-500 flex-shrink-0" />
          <div className="w-full">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Industry</p>
            <p className="font-medium text-gray-800 text-lg">{person.industry || person.position || 'Technology'}</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-8 py-5 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
        <div className="text-base text-gray-600 font-medium">
          Forbes Billionaires 2024
        </div>
        <div className="flex space-x-3">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span className="w-3 h-3 rounded-full bg-purple-500"></span>
        </div>
      </div>
    </div>
  </div>
);
