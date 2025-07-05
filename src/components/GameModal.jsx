import { motion, AnimatePresence } from 'framer-motion';
import { X, Monitor, HardDrive, Cpu, MemoryStick } from 'lucide-react';

export function GameModal({ game, isOpen, onClose }) {
  if (!game) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gradient-to-br from-gaming-dark to-gaming-darker rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gaming-accent/30 shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={game.image} 
                alt={game.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark to-transparent rounded-t-2xl" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-gaming-dark/80 hover:bg-gaming-accent text-white p-2 rounded-full transition-colors duration-300"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-4 left-6">
                <h2 className="text-3xl font-bold text-white mb-2">{game.name}</h2>
                <div className="flex items-center space-x-4">
                  <span className="bg-gaming-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                    {game.rating}★
                  </span>
                  <span className="text-gaming-secondary font-medium">{game.genre}</span>
                  <span className="text-gray-300">{game.year}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  className="bg-gaming-darker/50 rounded-xl p-6 border border-gray-800"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-gaming-accent mb-4 flex items-center">
                    <Monitor className="mr-2" size={20} />
                    Minimum Requirements
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center">
                        <Cpu className="mr-2" size={16} />
                        CPU:
                      </span>
                      <span className="text-white font-medium">{game.minCpu}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center">
                        <Monitor className="mr-2" size={16} />
                        GPU:
                      </span>
                      <span className="text-white font-medium">{game.minGpu}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center">
                        <MemoryStick className="mr-2" size={16} />
                        RAM:
                      </span>
                      <span className="text-white font-medium">{game.minRam} GB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center">
                        <HardDrive className="mr-2" size={16} />
                        Storage:
                      </span>
                      <span className="text-white font-medium">{game.storage} GB</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gaming-darker/50 rounded-xl p-6 border border-gray-800"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-gaming-secondary mb-4 flex items-center">
                    <Monitor className="mr-2" size={20} />
                    Recommended Requirements
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center">
                        <Cpu className="mr-2" size={16} />
                        CPU:
                      </span>
                      <span className="text-white font-medium">{game.recCpu}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center">
                        <Monitor className="mr-2" size={16} />
                        GPU:
                      </span>
                      <span className="text-white font-medium">{game.recGpu}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center">
                        <MemoryStick className="mr-2" size={16} />
                        RAM:
                      </span>
                      <span className="text-white font-medium">{game.recRam} GB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center">
                        <HardDrive className="mr-2" size={16} />
                        Storage:
                      </span>
                      <span className="text-white font-medium">{game.storage} GB</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-6 bg-gradient-to-r from-gaming-accent/20 to-gaming-secondary/20 rounded-xl p-6 border border-gaming-accent/30"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-bold text-white mb-3">Performance Tips</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="text-gaming-accent font-medium mb-2">For Better Performance:</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Close unnecessary background applications</li>
                      <li>• Update your graphics drivers</li>
                      <li>• Consider lowering graphics settings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gaming-secondary font-medium mb-2">Hardware Upgrade Priority:</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• GPU upgrade provides biggest impact</li>
                      <li>• Ensure adequate RAM capacity</li>
                      <li>• SSD improves loading times significantly</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}