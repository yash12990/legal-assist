import { cn } from "@/lib/utils";
import type { JSX } from "react";

type StatsCardProps = {
  title: string;
  value: string | number;
  icon: JSX.Element;
  className?: string;
};

const StatsCard = ({ title, value, icon, className }: StatsCardProps) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl shadow-md border border-indigo-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group",
        className
      )}
    >
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-500 group-hover:text-indigo-600 transition-colors duration-300">
            {title}
          </p>
          <h3 className="text-3xl font-bold text-gray-800 mt-1 group-hover:text-indigo-700 transition-colors duration-300">
            {value}
          </h3>
        </div>

        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow">
          {icon}
        </div>
      </div>

      {/* Decorative Progress Bar */}
      <div className="mt-5 w-full bg-indigo-100 rounded-full h-2 overflow-hidden">
        <div className="bg-indigo-500 h-full rounded-full w-[70%] group-hover:w-full transition-all duration-700"></div>
      </div>
    </div>
  );
};

export default StatsCard;
