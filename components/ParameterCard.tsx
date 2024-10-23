// components/common/ParameterCard.js
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const ParameterCard = ({ title, value, unit, change, icon: Icon }: any) => {
  const isPositiveChange = change >= 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        {Icon && <Icon className="text-gray-400" size={24} />}
      </div>
      <div className="flex items-baseline">
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        {unit && <span className="ml-2 text-gray-500">{unit}</span>}
      </div>
      {change !== undefined && (
        <div className={`mt-2 flex items-center ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
          {isPositiveChange ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          <span className="ml-1 text-sm font-medium">{Math.abs(change)}%</span>
          <span className="ml-2 text-sm text-gray-500">from last period</span>
        </div>
      )}
    </div>
  );
};

export default ParameterCard;