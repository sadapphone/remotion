import React from "react";
import { TopPlayer } from "../types/schema";
import { FaCalendarAlt as CalendarDays, FaRuler as Ruler, FaMapMarkerAlt as MapPin, FaTrophy as Trophy } from "react-icons/fa";

export const RichestCard: React.FC<{
  person: TopPlayer;
  style?: React.CSSProperties;
}> = ({ person, style }) => (
  <div className="flex justify-center p-4" style={style}>
    <div className="w-full max-w-[256px] overflow-hidden shadow-md">
      <div className="flex bg-gradient-to-r from-sky-500 to-blue-600 p-2">
        <div className="flex-1">
          <h1 className="text-xl font-bold text-white">{person.jersey_name}</h1>
          <p className="text-white/90 text-xs">{person.name}</p>
          <div className="mt-1 bg-white/20 hover:bg-white/30 text-white text-xs inline-block p-1 rounded">
            {person.country} {person.flag}
          </div>
        </div>
        <div className="w-20 h-20 rounded-full bg-white/10 overflow-hidden border-2 border-white/50">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-blue-500" />
            <div>
              <p className="text-xs text-gray-500">Born</p>
              <p className="font-medium">{person.birth_date}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Ruler className="h-4 w-4 text-blue-500" />
            <div>
              <p className="text-xs text-gray-500">Height</p>
              <p className="font-medium">{person.height_cm} cm</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-500" />
            <div>
              <p className="text-xs text-gray-500">Position</p>
              <p className="font-medium">{person.position}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-blue-500" />
            <div>
              <p className="text-xs text-gray-500">Assists</p>
              <p className="font-medium">{person.assists}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-xs font-medium text-gray-500 mb-2">CLUB HISTORY</p>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium">{person.team}</span>
              <span className="text-xs text-gray-500 block">
                {person.joined_year}-{person.end_year ?? "Present"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
