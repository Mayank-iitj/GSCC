import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

export function SearchBar({ 
  searchTerm, 
  onSearchChange, 
  selectedGenre, 
  onGenreChange, 
  genres,
  placeholder = "Search games..." 
}) {
  return (
    <motion.div 
      className="flex flex-col md:flex-row gap-4 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-gaming-dark border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-gaming-accent focus:ring-2 focus:ring-gaming-accent/20 transition-all duration-300"
        />
      </div>
      
      {genres && (
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <select
            value={selectedGenre}
            onChange={(e) => onGenreChange(e.target.value)}
            className="pl-10 pr-8 py-3 bg-gaming-dark border border-gray-700 rounded-xl text-white focus:border-gaming-accent focus:ring-2 focus:ring-gaming-accent/20 transition-all duration-300 appearance-none cursor-pointer min-w-[200px]"
          >
            <option value="">All Genres</option>
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
      )}
    </motion.div>
  );
}