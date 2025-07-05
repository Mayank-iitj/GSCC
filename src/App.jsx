import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import { GameCard } from './components/GameCard.jsx';
import { GameModal } from './components/GameModal.jsx';
import { HardwareCard } from './components/HardwareCard.jsx';
import { LoadingSpinner } from './components/LoadingSpinner.jsx';
import { StatsCard } from './components/StatsCard.jsx';
import { allGames } from './data/games';
import { cpus, gpus, motherboards, memory, storage, powerSupplies } from './data/hardware';
import { Gamepad2, Cpu, Monitor, HardDrive, MemoryStick, Zap } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('games');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hardwareCategory, setHardwareCategory] = useState('cpu');
  const [isLoading, setIsLoading] = useState(false);

  // Get unique genres
  const genres = useMemo(() => {
    return [...new Set(allGames.map(game => game.genre))].sort();
  }, []);

  // Filter games
  const filteredGames = useMemo(() => {
    return allGames.filter(game => {
      const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           game.genre.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = !selectedGenre || game.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    });
  }, [searchTerm, selectedGenre]);

  // Get hardware data based on category
  const getHardwareData = () => {
    switch(hardwareCategory) {
      case 'cpu': return cpus;
      case 'gpu': return gpus;
      case 'motherboard': return motherboards;
      case 'memory': return memory;
      case 'storage': return storage;
      case 'psu': return powerSupplies;
      default: return cpus;
    }
  };

  const filteredHardware = useMemo(() => {
    const hardware = getHardwareData();
    return hardware.filter(item => {
      const searchFields = [item.brand, item.model, item.socket, item.chipset].filter(Boolean);
      return searchFields.some(field => 
        field.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [searchTerm, hardwareCategory]);

  const handleGameClick = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const handleTabChange = (tab) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setSearchTerm('');
      setSelectedGenre('');
      setIsLoading(false);
    }, 300);
  };

  const renderGamesTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatsCard 
          title="Total Games" 
          value={allGames.length.toLocaleString()} 
          icon={Gamepad2}
          color="gaming-accent"
        />
        <StatsCard 
          title="Genres" 
          value={genres.length} 
          icon={Monitor}
          color="gaming-secondary"
        />
        <StatsCard 
          title="Filtered Results" 
          value={filteredGames.length.toLocaleString()} 
          icon={HardDrive}
          color="gaming-purple"
        />
        <StatsCard 
          title="Avg Rating" 
          value={`${(allGames.reduce((acc, game) => acc + game.rating, 0) / allGames.length).toFixed(1)}★`} 
          icon={Cpu}
          color="gaming-gold"
        />
      </div>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        genres={genres}
        placeholder="Search games by name or genre..."
      />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onClick={handleGameClick}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredGames.length === 0 && (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Gamepad2 className="mx-auto text-gray-600 mb-4" size={64} />
          <h3 className="text-xl font-bold text-gray-400 mb-2">No games found</h3>
          <p className="text-gray-500">Try adjusting your search criteria</p>
        </motion.div>
      )}
    </div>
  );

  const renderHardwareTab = () => {
    const hardwareCategories = [
      { id: 'cpu', label: 'CPUs', icon: Cpu },
      { id: 'gpu', label: 'GPUs', icon: Monitor },
      { id: 'motherboard', label: 'Motherboards', icon: HardDrive },
      { id: 'memory', label: 'Memory', icon: MemoryStick },
      { id: 'storage', label: 'Storage', icon: HardDrive },
      { id: 'psu', label: 'Power Supplies', icon: Zap }
    ];

    return (
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {hardwareCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setHardwareCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  hardwareCategory === category.id
                    ? 'bg-gaming-accent text-white shadow-lg'
                    : 'bg-gaming-dark text-gray-300 hover:text-white hover:bg-gaming-darker border border-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
                <span className="font-medium">{category.label}</span>
              </motion.button>
            );
          })}
        </div>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder={`Search ${hardwareCategory}s...`}
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          layout
        >
          <AnimatePresence>
            {filteredHardware.map((item) => (
              <HardwareCard
                key={item.id}
                item={item}
                type={hardwareCategory}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredHardware.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Cpu className="mx-auto text-gray-600 mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-400 mb-2">No hardware found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </motion.div>
        )}
      </div>
    );
  };

  const renderCompatibilityTab = () => (
    <motion.div 
      className="text-center py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Monitor className="mx-auto text-gaming-accent mb-6" size={80} />
      <h2 className="text-3xl font-bold text-white mb-4">Compatibility Checker</h2>
      <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
        Check if your system can run specific games and get optimization recommendations.
      </p>
      <motion.div 
        className="bg-gaming-dark/50 rounded-xl p-8 max-w-md mx-auto border border-gray-800"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-xl font-bold text-gaming-accent mb-4">Coming Soon!</h3>
        <p className="text-gray-300">
          Advanced compatibility checking and performance prediction tools are in development.
        </p>
      </motion.div>
    </motion.div>
  );

  const renderBuilderTab = () => (
    <motion.div 
      className="text-center py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Cpu className="mx-auto text-gaming-secondary mb-6" size={80} />
      <h2 className="text-3xl font-bold text-white mb-4">PC Builder</h2>
      <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
        Build your perfect gaming PC with our intelligent component selection and compatibility checking.
      </p>
      <motion.div 
        className="bg-gaming-dark/50 rounded-xl p-8 max-w-md mx-auto border border-gray-800"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-xl font-bold text-gaming-secondary mb-4">Coming Soon!</h3>
        <p className="text-gray-300">
          Interactive PC building tools with real-time compatibility and performance analysis.
        </p>
      </motion.div>
    </motion.div>
  );

  const renderContent = () => {
    if (isLoading) return <LoadingSpinner />;
    
    switch(activeTab) {
      case 'games': return renderGamesTab();
      case 'hardware': return renderHardwareTab();
      case 'compatibility': return renderCompatibilityTab();
      case 'builder': return renderBuilderTab();
      default: return renderGamesTab();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-darker via-gaming-dark to-gaming-darker">
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <GameModal
        game={selectedGame}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Floating particles background effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gaming-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;