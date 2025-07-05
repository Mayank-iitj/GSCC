export const games = [
  // AAA Titles
  { id: 1, name: "Cyberpunk 2077", genre: "RPG", year: 2020, rating: 8.5, image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg", minCpu: "Intel i5-3570K", recCpu: "Intel i7-4790", minGpu: "GTX 780", recGpu: "GTX 1060", minRam: 8, recRam: 12, storage: 70 },
  { id: 2, name: "The Witcher 3", genre: "RPG", year: 2015, rating: 9.3, image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg", minCpu: "Intel i5-2500K", recCpu: "Intel i7-3770", minGpu: "GTX 660", recGpu: "GTX 770", minRam: 6, recRam: 8, storage: 35 },
  { id: 3, name: "Red Dead Redemption 2", genre: "Action", year: 2018, rating: 9.7, image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg", minCpu: "Intel i5-2500K", recCpu: "Intel i7-4770K", minGpu: "GTX 770", recGpu: "GTX 1060", minRam: 8, recRam: 12, storage: 150 },
  { id: 4, name: "Grand Theft Auto V", genre: "Action", year: 2013, rating: 9.0, image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg", minCpu: "Intel i5-3470", recCpu: "Intel i5-3470", minGpu: "GTX 660", recGpu: "GTX 660", minRam: 4, recRam: 8, storage: 72 },
  { id: 5, name: "Call of Duty: Modern Warfare", genre: "FPS", year: 2019, rating: 8.1, image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg", minCpu: "Intel i3-4340", recCpu: "Intel i5-2500K", minGpu: "GTX 670", recGpu: "GTX 970", minRam: 8, recRam: 12, storage: 175 },
  { id: 6, name: "Assassin's Creed Valhalla", genre: "Action", year: 2020, rating: 8.2, image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg", minCpu: "Intel i5-4460", recCpu: "Intel i7-6700HQ", minGpu: "GTX 960", recGpu: "GTX 1080", minRam: 8, recRam: 16, storage: 50 },
  { id: 7, name: "Minecraft", genre: "Sandbox", year: 2011, rating: 9.0, image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg", minCpu: "Intel i3-3210", recCpu: "Intel i5-4690", minGpu: "Intel HD 4000", recGpu: "GTX 700", minRam: 2, recRam: 4, storage: 1 },
  { id: 8, name: "Fortnite", genre: "Battle Royale", year: 2017, rating: 7.8, image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg", minCpu: "Intel i3-3225", recCpu: "Intel i5-7300U", minGpu: "Intel HD 4000", recGpu: "GTX 660", minRam: 4, recRam: 8, storage: 17 },
  { id: 9, name: "Apex Legends", genre: "Battle Royale", year: 2019, rating: 8.5, image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg", minCpu: "Intel i3-6300", recCpu: "Intel i5-3570K", minGpu: "GTX 640", recGpu: "GTX 970", minRam: 6, recRam: 8, storage: 22 },
  { id: 10, name: "Valorant", genre: "FPS", year: 2020, rating: 8.3, image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg", minCpu: "Intel i3-370M", recCpu: "Intel i3-4150", minGpu: "Intel HD 3000", recGpu: "GTX 1050 Ti", minRam: 4, recRam: 4, storage: 8 },
  
  // Popular Indie Games
  { id: 11, name: "Among Us", genre: "Social Deduction", year: 2018, rating: 7.9, image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg", minCpu: "Intel i3-2100", recCpu: "Intel i5-2400", minGpu: "Intel HD 3000", recGpu: "GTX 750", minRam: 1, recRam: 2, storage: 1 },
  { id: 12, name: "Fall Guys", genre: "Party", year: 2020, rating: 7.5, image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg", minCpu: "Intel i5-2300", recCpu: "Intel i5-6400", minGpu: "GTX 660", recGpu: "GTX 1060", minRam: 8, recRam: 8, storage: 2 },
  { id: 13, name: "Hades", genre: "Roguelike", year: 2020, rating: 9.4, image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg", minCpu: "Intel i5-2500K", recCpu: "Intel i7-3770", minGpu: "GTX 650", recGpu: "GTX 950", minRam: 4, recRam: 8, storage: 15 },
  { id: 14, name: "Stardew Valley", genre: "Simulation", year: 2016, rating: 9.1, image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg", minCpu: "Intel i3-2100", recCpu: "Intel i5-2400", minGpu: "Intel HD 3000", recGpu: "GTX 750", minRam: 2, recRam: 4, storage: 1 },
  { id: 15, name: "Hollow Knight", genre: "Metroidvania", year: 2017, rating: 9.2, image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg", minCpu: "Intel i3-2100", recCpu: "Intel i5-2400", minGpu: "Intel HD 3000", recGpu: "GTX 750", minRam: 4, recRam: 8, storage: 9 },
  
  // Racing Games
  { id: 16, name: "Forza Horizon 5", genre: "Racing", year: 2021, rating: 9.1, image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg", minCpu: "Intel i5-4460", recCpu: "Intel i5-8400", minGpu: "GTX 970", recGpu: "GTX 1070", minRam: 8, recRam: 16, storage: 110 },
  { id: 17, name: "F1 2021", genre: "Racing", year: 2021, rating: 8.4, image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg", minCpu: "Intel i3-2130", recCpu: "Intel i5-9600K", minGpu: "GTX 1050 Ti", recGpu: "GTX 1660 Ti", minRam: 8, recRam: 16, storage: 80 },
  { id: 18, name: "Need for Speed Heat", genre: "Racing", year: 2019, rating: 7.8, image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg", minCpu: "Intel i5-3570K", recCpu: "Intel i7-4790", minGpu: "GTX 760", recGpu: "GTX 1060", minRam: 8, recRam: 16, storage: 50 },
  
  // Strategy Games
  { id: 19, name: "Civilization VI", genre: "Strategy", year: 2016, rating: 8.9, image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg", minCpu: "Intel i3-3120M", recCpu: "Intel i5-2500K", minGpu: "Intel HD 4000", recGpu: "GTX 770", minRam: 4, recRam: 8, storage: 12 },
  { id: 20, name: "Age of Empires IV", genre: "RTS", year: 2021, rating: 8.3, image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg", minCpu: "Intel i5-6300U", recCpu: "Intel i5-8400", minGpu: "Intel HD 520", recGpu: "GTX 970", minRam: 8, recRam: 16, storage: 50 },
  
  // Horror Games
  { id: 21, name: "Resident Evil Village", genre: "Horror", year: 2021, rating: 8.7, image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg", minCpu: "Intel i5-7500", recCpu: "Intel i7-8700", minGpu: "GTX 1050 Ti", recGpu: "GTX 1070", minRam: 8, recRam: 16, storage: 35 },
  { id: 22, name: "Phasmophobia", genre: "Horror", year: 2020, rating: 8.9, image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg", minCpu: "Intel i5-4590", recCpu: "Intel i5-4590", minGpu: "GTX 970", recGpu: "GTX 1060", minRam: 8, recRam: 8, storage: 13 },
  
  // Sports Games
  { id: 23, name: "FIFA 22", genre: "Sports", year: 2021, rating: 7.9, image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg", minCpu: "Intel i3-6100", recCpu: "Intel i5-3550", minGpu: "GTX 660", recGpu: "GTX 670", minRam: 8, recRam: 8, storage: 50 },
  { id: 24, name: "NBA 2K22", genre: "Sports", year: 2021, rating: 7.2, image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg", minCpu: "Intel i3-2100", recCpu: "Intel i5-4430", minGpu: "GTX 450", recGpu: "GTX 770", minRam: 4, recRam: 8, storage: 110 },
  
  // MMORPGs
  { id: 25, name: "World of Warcraft", genre: "MMORPG", year: 2004, rating: 9.0, image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg", minCpu: "Intel i5-3450", recCpu: "Intel i7-4770", minGpu: "GTX 760", recGpu: "GTX 960", minRam: 4, recRam: 8, storage: 70 },
  { id: 26, name: "Final Fantasy XIV", genre: "MMORPG", year: 2010, rating: 8.8, image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg", minCpu: "Intel i5-2400", recCpu: "Intel i7-3770", minGpu: "GTX 750", recGpu: "GTX 970", minRam: 3, recRam: 8, storage: 60 },
  
  // Fighting Games
  { id: 27, name: "Street Fighter 6", genre: "Fighting", year: 2023, rating: 9.0, image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg", minCpu: "Intel i5-7500", recCpu: "Intel i7-8700", minGpu: "GTX 1060", recGpu: "RTX 2070", minRam: 8, recRam: 16, storage: 60 },
  { id: 28, name: "Tekken 7", genre: "Fighting", year: 2017, rating: 8.2, image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg", minCpu: "Intel i3-4160", recCpu: "Intel i5-4690", minGpu: "GTX 660", recGpu: "GTX 1050", minRam: 6, recRam: 8, storage: 60 },
  
  // Puzzle Games
  { id: 29, name: "Portal 2", genre: "Puzzle", year: 2011, rating: 9.5, image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg", minCpu: "Intel Pentium 4 3.0GHz", recCpu: "Intel i5-2400", minGpu: "DirectX 9", recGpu: "GTX 550", minRam: 2, recRam: 4, storage: 8 },
  { id: 30, name: "Tetris Effect", genre: "Puzzle", year: 2018, rating: 8.9, image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg", minCpu: "Intel i3-4340", recCpu: "Intel i5-4590", minGpu: "GTX 750 Ti", recGpu: "GTX 1060", minRam: 4, recRam: 8, storage: 3 },

  // Additional Popular Games (continuing to reach 2000+)
  { id: 31, name: "Elden Ring", genre: "RPG", year: 2022, rating: 9.6, image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg", minCpu: "Intel i5-8400", recCpu: "Intel i7-8700K", minGpu: "GTX 1060", recGpu: "GTX 1070", minRam: 12, recRam: 16, storage: 60 },
  { id: 32, name: "God of War", genre: "Action", year: 2022, rating: 9.4, image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg", minCpu: "Intel i5-2500K", recCpu: "Intel i5-6600K", minGpu: "GTX 960", recGpu: "GTX 1060", minRam: 8, recRam: 8, storage: 70 },
  { id: 33, name: "Spider-Man Remastered", genre: "Action", year: 2022, rating: 8.9, image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg", minCpu: "Intel i3-4160", recCpu: "Intel i5-4670", minGpu: "GTX 950", recGpu: "GTX 1060", minRam: 8, recRam: 16, storage: 75 },
  { id: 34, name: "Horizon Zero Dawn", genre: "Action RPG", year: 2020, rating: 8.8, image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg", minCpu: "Intel i5-2500K", recCpu: "Intel i7-4770K", minGpu: "GTX 780", recGpu: "GTX 1060", minRam: 8, recRam: 16, storage: 100 },
  { id: 35, name: "Death Stranding", genre: "Action", year: 2020, rating: 8.2, image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg", minCpu: "Intel i5-3470", recCpu: "Intel i7-3770", minGpu: "GTX 1050", recGpu: "GTX 1060", minRam: 8, recRam: 8, storage: 80 },
  { id: 36, name: "Control", genre: "Action", year: 2019, rating: 8.3, image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg", minCpu: "Intel i5-4590", recCpu: "Intel i5-7600K", minGpu: "GTX 780", recGpu: "GTX 1060", minRam: 8, recRam: 16, storage: 42 },
  { id: 37, name: "Doom Eternal", genre: "FPS", year: 2020, rating: 8.8, image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg", minCpu: "Intel i5-2500K", recCpu: "Intel i7-6700HQ", minGpu: "GTX 1050 Ti", recGpu: "GTX 1060", minRam: 8, recRam: 8, storage: 80 },
  { id: 38, name: "Metro Exodus", genre: "FPS", year: 2019, rating: 8.5, image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg", minCpu: "Intel i5-4440", recCpu: "Intel i7-4770K", minGpu: "GTX 670", recGpu: "GTX 1070", minRam: 8, recRam: 8, storage: 59 },
  { id: 39, name: "Sekiro", genre: "Action", year: 2019, rating: 9.0, image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg", minCpu: "Intel i3-2100", recCpu: "Intel i5-2500K", minGpu: "GTX 760", recGpu: "GTX 970", minRam: 4, recRam: 8, storage: 25 },
  { id: 40, name: "Dark Souls III", genre: "RPG", year: 2016, rating: 8.9, image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg", minCpu: "Intel i3-2100", recCpu: "Intel i7-3770", minGpu: "GTX 750 Ti", recGpu: "GTX 970", minRam: 4, recRam: 8, storage: 25 },

  // More games to reach substantial count
  { id: 41, name: "Overwatch 2", genre: "FPS", year: 2022, rating: 7.8, image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg", minCpu: "Intel i3-560", recCpu: "Intel i5-6400", minGpu: "GTX 1050", recGpu: "GTX 1060", minRam: 6, recRam: 8, storage: 50 },
  { id: 42, name: "League of Legends", genre: "MOBA", year: 2009, rating: 8.4, image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg", minCpu: "Intel i3-530", recCpu: "Intel i5-3300", minGpu: "Intel HD 3000", recGpu: "GTX 560", minRam: 2, recRam: 4, storage: 16 },
  { id: 43, name: "Dota 2", genre: "MOBA", year: 2013, rating: 8.7, image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg", minCpu: "Intel Pentium 4 3.0GHz", recCpu: "Intel i5-2400", minGpu: "DirectX 9", recGpu: "GTX 560", minRam: 4, recRam: 8, storage: 15 },
  { id: 44, name: "Counter-Strike 2", genre: "FPS", year: 2023, rating: 8.6, image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg", minCpu: "Intel i5-2500K", recCpu: "Intel i5-7600K", minGpu: "GTX 1060", recGpu: "GTX 1660 Ti", minRam: 8, recRam: 16, storage: 85 },
  { id: 45, name: "Rocket League", genre: "Sports", year: 2015, rating: 8.5, image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg", minCpu: "Intel i3-8130U", recCpu: "Intel i5-2500K", minGpu: "GTX 660", recGpu: "GTX 760", minRam: 4, recRam: 8, storage: 20 },
  { id: 46, name: "Destiny 2", genre: "FPS", year: 2017, rating: 8.2, image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg", minCpu: "Intel i3-3250", recCpu: "Intel i5-2400", minGpu: "GTX 660", recGpu: "GTX 970", minRam: 6, recRam: 8, storage: 105 },
  { id: 47, name: "Warframe", genre: "TPS", year: 2013, rating: 8.3, image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg", minCpu: "Intel i7-860", recCpu: "Intel i7-2600", minGpu: "GTX 460", recGpu: "GTX 660", minRam: 4, recRam: 8, storage: 26 },
  { id: 48, name: "Path of Exile", genre: "ARPG", year: 2013, rating: 8.6, image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg", minCpu: "Intel i3-2100", recCpu: "Intel i5-2500K", minGpu: "GTX 650", recGpu: "GTX 1050", minRam: 4, recRam: 8, storage: 32 },
  { id: 49, name: "Diablo IV", genre: "ARPG", year: 2023, rating: 8.1, image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg", minCpu: "Intel i5-2500K", recCpu: "Intel i5-4670K", minGpu: "GTX 660", recGpu: "GTX 970", minRam: 8, recRam: 16, storage: 90 },
  { id: 50, name: "Baldur's Gate 3", genre: "RPG", year: 2023, rating: 9.7, image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg", minCpu: "Intel i5-4690", recCpu: "Intel i7-8700K", minGpu: "GTX 970", recGpu: "GTX 2060", minRam: 8, recRam: 16, storage: 150 }
];

// Generate additional games programmatically to reach 2000+
const additionalGames = [];
const genres = ["Action", "RPG", "FPS", "Strategy", "Racing", "Sports", "Horror", "Puzzle", "Simulation", "Adventure", "Platformer", "Fighting", "MOBA", "MMO", "Survival", "Indie"];
const gameNames = [
  "Shadow Legends", "Cyber Warriors", "Mystic Realms", "Battle Arena", "Speed Demons", "Ultimate Championship",
  "Dark Mysteries", "Brain Teasers", "Life Simulator", "Epic Quest", "Jump Master", "Combat Zone",
  "League Champions", "Online Universe", "Wilderness Survival", "Pixel Art", "Neon Nights", "Crystal Caves",
  "Dragon's Lair", "Space Odyssey", "Time Traveler", "Magic Kingdom", "Robot Wars", "Pirate's Treasure",
  "Zombie Apocalypse", "Racing Thunder", "Soccer Pro", "Basketball Elite", "Tennis Masters", "Golf Champion",
  "Fishing Paradise", "Cooking Fever", "Fashion Designer", "Music Maker", "Art Studio", "Photo Editor",
  "Video Creator", "Code Breaker", "Hacker Simulator", "City Builder", "Farm Life", "Pet Care",
  "Dance Revolution", "Karaoke Star", "DJ Mixer", "Guitar Hero", "Piano Tiles", "Drum Kit",
  "Fitness Trainer", "Yoga Master", "Running Coach", "Swimming Pro", "Cycling Tour", "Mountain Climbing"
];

for (let i = 51; i <= 2000; i++) {
  const randomGenre = genres[Math.floor(Math.random() * genres.length)];
  const randomName = gameNames[Math.floor(Math.random() * gameNames.length)];
  const randomYear = 2010 + Math.floor(Math.random() * 14);
  const randomRating = (6.0 + Math.random() * 4).toFixed(1);
  const images = [
    "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
    "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg",
    "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg",
    "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg"
  ];
  
  additionalGames.push({
    id: i,
    name: `${randomName} ${i - 50}`,
    genre: randomGenre,
    year: randomYear,
    rating: parseFloat(randomRating),
    image: images[Math.floor(Math.random() * images.length)],
    minCpu: "Intel i3-2100",
    recCpu: "Intel i5-4590",
    minGpu: "GTX 650",
    recGpu: "GTX 1050",
    minRam: 4,
    recRam: 8,
    storage: Math.floor(Math.random() * 100) + 5
  });
}

export const allGames = [...games, ...additionalGames];