import { motion } from 'framer-motion';
import { Cpu, Monitor, HardDrive, Zap, MemoryStick, Clapperboard as Motherboard } from 'lucide-react';

const iconMap = {
  cpu: Cpu,
  gpu: Monitor,
  motherboard: Motherboard,
  memory: MemoryStick,
  storage: HardDrive,
  psu: Zap
};

export function HardwareCard({ item, type, onClick }) {
  const Icon = iconMap[type] || Cpu;
  
  const getTypeColor = (type) => {
    const colors = {
      cpu: 'from-blue-500 to-blue-600',
      gpu: 'from-green-500 to-green-600',
      motherboard: 'from-purple-500 to-purple-600',
      memory: 'from-yellow-500 to-yellow-600',
      storage: 'from-red-500 to-red-600',
      psu: 'from-orange-500 to-orange-600'
    };
    return colors[type] || 'from-gray-500 to-gray-600';
  };

  const renderSpecs = () => {
    switch(type) {
      case 'cpu':
        return (
          <>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Cores/Threads:</span>
              <span className="text-white">{item.cores}/{item.threads}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Base Clock:</span>
              <span className="text-white">{item.baseClock} GHz</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Socket:</span>
              <span className="text-white">{item.socket}</span>
            </div>
          </>
        );
      case 'gpu':
        return (
          <>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Memory:</span>
              <span className="text-white">{item.memory} GB {item.memoryType}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Base Clock:</span>
              <span className="text-white">{item.baseClock} MHz</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Power:</span>
              <span className="text-white">{item.powerConsumption}W</span>
            </div>
          </>
        );
      case 'motherboard':
        return (
          <>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Socket:</span>
              <span className="text-white">{item.socket}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Chipset:</span>
              <span className="text-white">{item.chipset}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Max RAM:</span>
              <span className="text-white">{item.maxMemory} GB</span>
            </div>
          </>
        );
      case 'memory':
        return (
          <>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Type:</span>
              <span className="text-white">{item.type}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Speed:</span>
              <span className="text-white">{item.speed} MHz</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Capacity:</span>
              <span className="text-white">{item.capacity} GB</span>
            </div>
          </>
        );
      case 'storage':
        return (
          <>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Type:</span>
              <span className="text-white">{item.type}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Capacity:</span>
              <span className="text-white">{item.capacity} GB</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Interface:</span>
              <span className="text-white">{item.interface}</span>
            </div>
          </>
        );
      case 'psu':
        return (
          <>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Wattage:</span>
              <span className="text-white">{item.wattage}W</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Efficiency:</span>
              <span className="text-white">{item.efficiency}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Modular:</span>
              <span className="text-white">{item.modular ? 'Yes' : 'No'}</span>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gaming-dark to-gaming-darker rounded-xl p-4 border border-gray-800 hover:border-gaming-accent transition-all duration-300 cursor-pointer group"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(255, 107, 53, 0.2)"
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick && onClick(item)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-3">
        <div className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(type)} mr-3`}>
          <Icon size={20} className="text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-sm group-hover:text-gaming-accent transition-colors duration-300">
            {item.brand} {item.model}
          </h3>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs">{item.year}</span>
            <span className="text-gaming-accent font-bold text-sm">${item.price}</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        {renderSpecs()}
      </div>
      
      {item.performance && (
        <div className="mt-3 pt-3 border-t border-gray-700">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Performance Score:</span>
            <span className="text-gaming-secondary font-bold">{item.performance.toLocaleString()}</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}