import { motion } from 'framer-motion';
import { Gamepad2, Cpu, Monitor, Database } from 'lucide-react';

export function Navigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'games', label: 'Games Database', icon: Gamepad2 },
    { id: 'hardware', label: 'Hardware Specs', icon: Cpu },
    { id: 'compatibility', label: 'Compatibility Check', icon: Monitor },
    { id: 'builder', label: 'PC Builder', icon: Database }
  ];

  return (
    <motion.nav 
      className="bg-gaming-dark/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Gamepad2 className="text-gaming-accent" size={32} />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gaming-accent to-gaming-secondary bg-clip-text text-transparent">
              GameSpecs Pro
            </h1>
          </motion.div>
          
          <div className="flex space-x-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gaming-accent text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gaming-dark'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                  <span className="hidden md:inline font-medium">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}