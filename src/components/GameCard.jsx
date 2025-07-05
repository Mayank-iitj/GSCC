import { motion } from 'framer-motion';

export function GameCard({ game, onClick }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-gaming-dark to-gaming-darker rounded-xl overflow-hidden shadow-2xl border border-gray-800 hover:border-gaming-accent transition-all duration-300 cursor-pointer group"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(255, 107, 53, 0.3)"
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(game)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={game.image} 
          alt={game.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3">
          <span className="bg-gaming-accent text-white px-2 py-1 rounded-full text-xs font-bold">
            {game.rating}★
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gaming-accent transition-colors duration-300">
          {game.name}
        </h3>
        <div className="flex justify-between items-center mb-3">
          <span className="text-gaming-secondary text-sm font-medium">
            {game.genre}
          </span>
          <span className="text-gray-400 text-sm">
            {game.year}
          </span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Min CPU:</span>
            <span className="text-white">{game.minCpu}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Min GPU:</span>
            <span className="text-white">{game.minGpu}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Storage:</span>
            <span className="text-white">{game.storage} GB</span>
          </div>
        </div>
        
        <motion.div 
          className="mt-4 bg-gaming-accent/20 rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ height: 0 }}
          whileHover={{ height: "auto" }}
        >
          <p className="text-gaming-accent text-xs text-center font-medium">
            Click for detailed specs
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}