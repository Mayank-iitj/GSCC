import { motion } from 'framer-motion';

export function StatsCard({ title, value, icon: Icon, color = "gaming-accent" }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-gaming-dark to-gaming-darker rounded-xl p-6 border border-gray-800"
      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.2)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className={`text-2xl font-bold text-${color} mt-1`}>{value}</p>
        </div>
        {Icon && (
          <div className={`p-3 bg-${color}/20 rounded-lg`}>
            <Icon className={`text-${color}`} size={24} />
          </div>
        )}
      </div>
    </motion.div>
  );
}