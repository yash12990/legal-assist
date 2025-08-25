type StatsCardProps = {
  title: string;
  value: string | number;
};

const StatsCard = ({ title, value }: StatsCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition-shadow duration-200">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold text-indigo-600 mt-2">{value}</h3>
    </div>
  );
};

export default StatsCard;
