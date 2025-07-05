export const cpus = [
  // Intel CPUs
  { id: 1, brand: "Intel", model: "i3-2100", cores: 2, threads: 4, baseClock: 3.1, boostClock: 3.1, socket: "LGA1155", year: 2011, price: 120, performance: 3200 },
  { id: 2, brand: "Intel", model: "i3-3220", cores: 2, threads: 4, baseClock: 3.3, boostClock: 3.3, socket: "LGA1155", year: 2012, price: 130, performance: 3500 },
  { id: 3, brand: "Intel", model: "i3-4130", cores: 2, threads: 4, baseClock: 3.4, boostClock: 3.4, socket: "LGA1150", year: 2013, price: 140, performance: 3800 },
  { id: 4, brand: "Intel", model: "i3-6100", cores: 2, threads: 4, baseClock: 3.7, boostClock: 3.7, socket: "LGA1151", year: 2015, price: 120, performance: 4200 },
  { id: 5, brand: "Intel", model: "i3-8100", cores: 4, threads: 4, baseClock: 3.6, boostClock: 3.6, socket: "LGA1151", year: 2017, price: 120, performance: 5800 },
  { id: 6, brand: "Intel", model: "i3-10100", cores: 4, threads: 8, baseClock: 3.6, boostClock: 4.3, socket: "LGA1200", year: 2020, price: 130, performance: 7200 },
  { id: 7, brand: "Intel", model: "i3-12100", cores: 4, threads: 8, baseClock: 3.3, boostClock: 4.3, socket: "LGA1700", year: 2022, price: 140, performance: 8500 },
  
  { id: 8, brand: "Intel", model: "i5-2400", cores: 4, threads: 4, baseClock: 3.1, boostClock: 3.4, socket: "LGA1155", year: 2011, price: 190, performance: 4800 },
  { id: 9, brand: "Intel", model: "i5-2500K", cores: 4, threads: 4, baseClock: 3.3, boostClock: 3.7, socket: "LGA1155", year: 2011, price: 220, performance: 5200 },
  { id: 10, brand: "Intel", model: "i5-3570K", cores: 4, threads: 4, baseClock: 3.4, boostClock: 3.8, socket: "LGA1155", year: 2012, price: 230, performance: 5600 },
  { id: 11, brand: "Intel", model: "i5-4590", cores: 4, threads: 4, baseClock: 3.3, boostClock: 3.7, socket: "LGA1150", year: 2014, price: 200, performance: 6000 },
  { id: 12, brand: "Intel", model: "i5-6600K", cores: 4, threads: 4, baseClock: 3.5, boostClock: 3.9, socket: "LGA1151", year: 2015, price: 240, performance: 6800 },
  { id: 13, brand: "Intel", model: "i5-8400", cores: 6, threads: 6, baseClock: 2.8, boostClock: 4.0, socket: "LGA1151", year: 2017, price: 190, performance: 8200 },
  { id: 14, brand: "Intel", model: "i5-10600K", cores: 6, threads: 12, baseClock: 4.1, boostClock: 4.8, socket: "LGA1200", year: 2020, price: 270, performance: 10500 },
  { id: 15, brand: "Intel", model: "i5-12600K", cores: 10, threads: 16, baseClock: 3.7, boostClock: 4.9, socket: "LGA1700", year: 2021, price: 290, performance: 13200 },
  { id: 16, brand: "Intel", model: "i5-13600K", cores: 14, threads: 20, baseClock: 3.5, boostClock: 5.1, socket: "LGA1700", year: 2022, price: 320, performance: 15800 },
  
  { id: 17, brand: "Intel", model: "i7-2600K", cores: 4, threads: 8, baseClock: 3.4, boostClock: 3.8, socket: "LGA1155", year: 2011, price: 320, performance: 6500 },
  { id: 18, brand: "Intel", model: "i7-3770K", cores: 4, threads: 8, baseClock: 3.5, boostClock: 3.9, socket: "LGA1155", year: 2012, price: 330, performance: 7000 },
  { id: 19, brand: "Intel", model: "i7-4770K", cores: 4, threads: 8, baseClock: 3.5, boostClock: 3.9, socket: "LGA1150", year: 2013, price: 340, performance: 7500 },
  { id: 20, brand: "Intel", model: "i7-6700K", cores: 4, threads: 8, baseClock: 4.0, boostClock: 4.2, socket: "LGA1151", year: 2015, price: 350, performance: 8500 },
  { id: 21, brand: "Intel", model: "i7-8700K", cores: 6, threads: 12, baseClock: 3.7, boostClock: 4.7, socket: "LGA1151", year: 2017, price: 370, performance: 11200 },
  { id: 22, brand: "Intel", model: "i7-10700K", cores: 8, threads: 16, baseClock: 3.8, boostClock: 5.1, socket: "LGA1200", year: 2020, price: 380, performance: 13800 },
  { id: 23, brand: "Intel", model: "i7-12700K", cores: 12, threads: 20, baseClock: 3.6, boostClock: 5.0, socket: "LGA1700", year: 2021, price: 420, performance: 17500 },
  { id: 24, brand: "Intel", model: "i7-13700K", cores: 16, threads: 24, baseClock: 3.4, boostClock: 5.4, socket: "LGA1700", year: 2022, price: 450, performance: 20200 },
  
  { id: 25, brand: "Intel", model: "i9-9900K", cores: 8, threads: 16, baseClock: 3.6, boostClock: 5.0, socket: "LGA1151", year: 2018, price: 490, performance: 15200 },
  { id: 26, brand: "Intel", model: "i9-10900K", cores: 10, threads: 20, baseClock: 3.7, boostClock: 5.3, socket: "LGA1200", year: 2020, price: 530, performance: 17800 },
  { id: 27, brand: "Intel", model: "i9-12900K", cores: 16, threads: 24, baseClock: 3.2, boostClock: 5.2, socket: "LGA1700", year: 2021, price: 590, performance: 22500 },
  { id: 28, brand: "Intel", model: "i9-13900K", cores: 24, threads: 32, baseClock: 3.0, boostClock: 5.8, socket: "LGA1700", year: 2022, price: 650, performance: 28000 },
  
  // AMD CPUs
  { id: 29, brand: "AMD", model: "Ryzen 3 1200", cores: 4, threads: 4, baseClock: 3.1, boostClock: 3.4, socket: "AM4", year: 2017, price: 110, performance: 4500 },
  { id: 30, brand: "AMD", model: "Ryzen 3 2200G", cores: 4, threads: 4, baseClock: 3.5, boostClock: 3.7, socket: "AM4", year: 2018, price: 100, performance: 5200 },
  { id: 31, brand: "AMD", model: "Ryzen 3 3100", cores: 4, threads: 8, baseClock: 3.6, boostClock: 3.9, socket: "AM4", year: 2020, price: 100, performance: 6800 },
  { id: 32, brand: "AMD", model: "Ryzen 3 5300G", cores: 4, threads: 8, baseClock: 4.0, boostClock: 4.2, socket: "AM4", year: 2021, price: 130, performance: 8200 },
  
  { id: 33, brand: "AMD", model: "Ryzen 5 1600", cores: 6, threads: 12, baseClock: 3.2, boostClock: 3.6, socket: "AM4", year: 2017, price: 220, performance: 7200 },
  { id: 34, brand: "AMD", model: "Ryzen 5 2600", cores: 6, threads: 12, baseClock: 3.4, boostClock: 3.9, socket: "AM4", year: 2018, price: 200, performance: 8500 },
  { id: 35, brand: "AMD", model: "Ryzen 5 3600", cores: 6, threads: 12, baseClock: 3.6, boostClock: 4.2, socket: "AM4", year: 2019, price: 200, performance: 11200 },
  { id: 36, brand: "AMD", model: "Ryzen 5 5600X", cores: 6, threads: 12, baseClock: 3.7, boostClock: 4.6, socket: "AM4", year: 2020, price: 300, performance: 13800 },
  { id: 37, brand: "AMD", model: "Ryzen 5 7600X", cores: 6, threads: 12, baseClock: 4.7, boostClock: 5.3, socket: "AM5", year: 2022, price: 300, performance: 16500 },
  
  { id: 38, brand: "AMD", model: "Ryzen 7 1700", cores: 8, threads: 16, baseClock: 3.0, boostClock: 3.7, socket: "AM4", year: 2017, price: 330, performance: 9500 },
  { id: 39, brand: "AMD", model: "Ryzen 7 2700X", cores: 8, threads: 16, baseClock: 3.7, boostClock: 4.3, socket: "AM4", year: 2018, price: 330, performance: 11800 },
  { id: 40, brand: "AMD", model: "Ryzen 7 3700X", cores: 8, threads: 16, baseClock: 3.6, boostClock: 4.4, socket: "AM4", year: 2019, price: 330, performance: 14500 },
  { id: 41, brand: "AMD", model: "Ryzen 7 5700X", cores: 8, threads: 16, baseClock: 3.4, boostClock: 4.6, socket: "AM4", year: 2022, price: 300, performance: 16800 },
  { id: 42, brand: "AMD", model: "Ryzen 7 5800X3D", cores: 8, threads: 16, baseClock: 3.4, boostClock: 4.5, socket: "AM4", year: 2022, price: 450, performance: 18200 },
  { id: 43, brand: "AMD", model: "Ryzen 7 7700X", cores: 8, threads: 16, baseClock: 4.5, boostClock: 5.4, socket: "AM5", year: 2022, price: 400, performance: 20500 },
  
  { id: 44, brand: "AMD", model: "Ryzen 9 3900X", cores: 12, threads: 24, baseClock: 3.8, boostClock: 4.6, socket: "AM4", year: 2019, price: 500, performance: 19200 },
  { id: 45, brand: "AMD", model: "Ryzen 9 5900X", cores: 12, threads: 24, baseClock: 3.7, boostClock: 4.8, socket: "AM4", year: 2020, price: 550, performance: 22800 },
  { id: 46, brand: "AMD", model: "Ryzen 9 5950X", cores: 16, threads: 32, baseClock: 3.4, boostClock: 4.9, socket: "AM4", year: 2020, price: 800, performance: 28500 },
  { id: 47, brand: "AMD", model: "Ryzen 9 7900X", cores: 12, threads: 24, baseClock: 4.7, boostClock: 5.6, socket: "AM5", year: 2022, price: 550, performance: 26200 },
  { id: 48, brand: "AMD", model: "Ryzen 9 7950X", cores: 16, threads: 32, baseClock: 4.5, boostClock: 5.7, socket: "AM5", year: 2022, price: 700, performance: 32500 }
];

export const gpus = [
  // NVIDIA GPUs - GTX Series
  { id: 1, brand: "NVIDIA", model: "GTX 460", memory: 1, memoryType: "GDDR5", baseClock: 675, boostClock: 0, year: 2010, price: 200, performance: 2800, powerConsumption: 160 },
  { id: 2, brand: "NVIDIA", model: "GTX 560", memory: 1, memoryType: "GDDR5", baseClock: 810, boostClock: 0, year: 2011, price: 200, performance: 3500, powerConsumption: 150 },
  { id: 3, brand: "NVIDIA", model: "GTX 650", memory: 1, memoryType: "GDDR5", baseClock: 1058, boostClock: 0, year: 2012, price: 110, performance: 2200, powerConsumption: 64 },
  { id: 4, brand: "NVIDIA", model: "GTX 660", memory: 2, memoryType: "GDDR5", baseClock: 980, boostClock: 1033, year: 2012, price: 230, performance: 4200, powerConsumption: 140 },
  { id: 5, brand: "NVIDIA", model: "GTX 670", memory: 2, memoryType: "GDDR5", baseClock: 915, boostClock: 980, year: 2012, price: 400, performance: 5800, powerConsumption: 170 },
  { id: 6, brand: "NVIDIA", model: "GTX 680", memory: 2, memoryType: "GDDR5", baseClock: 1006, boostClock: 1058, year: 2012, price: 500, performance: 6200, powerConsumption: 195 },
  { id: 7, brand: "NVIDIA", model: "GTX 750 Ti", memory: 2, memoryType: "GDDR5", baseClock: 1020, boostClock: 1085, year: 2014, price: 150, performance: 3800, powerConsumption: 60 },
  { id: 8, brand: "NVIDIA", model: "GTX 760", memory: 2, memoryType: "GDDR5", baseClock: 980, boostClock: 1033, year: 2013, price: 250, performance: 4500, powerConsumption: 170 },
  { id: 9, brand: "NVIDIA", model: "GTX 770", memory: 2, memoryType: "GDDR5", baseClock: 1046, boostClock: 1085, year: 2013, price: 330, performance: 5500, powerConsumption: 230 },
  { id: 10, brand: "NVIDIA", model: "GTX 780", memory: 3, memoryType: "GDDR5", baseClock: 863, boostClock: 900, year: 2013, price: 500, performance: 6800, powerConsumption: 250 },
  { id: 11, brand: "NVIDIA", model: "GTX 780 Ti", memory: 3, memoryType: "GDDR5", baseClock: 875, boostClock: 928, year: 2013, price: 700, performance: 7500, powerConsumption: 250 },
  { id: 12, brand: "NVIDIA", model: "GTX 950", memory: 2, memoryType: "GDDR5", baseClock: 1024, boostClock: 1188, year: 2015, price: 160, performance: 4200, powerConsumption: 90 },
  { id: 13, brand: "NVIDIA", model: "GTX 960", memory: 2, memoryType: "GDDR5", baseClock: 1127, boostClock: 1178, year: 2015, price: 200, performance: 5200, powerConsumption: 120 },
  { id: 14, brand: "NVIDIA", model: "GTX 970", memory: 4, memoryType: "GDDR5", baseClock: 1050, boostClock: 1178, year: 2014, price: 330, performance: 8500, powerConsumption: 145 },
  { id: 15, brand: "NVIDIA", model: "GTX 980", memory: 4, memoryType: "GDDR5", baseClock: 1126, boostClock: 1216, year: 2014, price: 550, performance: 9800, powerConsumption: 165 },
  { id: 16, brand: "NVIDIA", model: "GTX 980 Ti", memory: 6, memoryType: "GDDR5", baseClock: 1000, boostClock: 1075, year: 2015, price: 650, performance: 12500, powerConsumption: 250 },
  { id: 17, brand: "NVIDIA", model: "GTX 1050", memory: 2, memoryType: "GDDR5", baseClock: 1354, boostClock: 1455, year: 2016, price: 110, performance: 4800, powerConsumption: 75 },
  { id: 18, brand: "NVIDIA", model: "GTX 1050 Ti", memory: 4, memoryType: "GDDR5", baseClock: 1290, boostClock: 1392, year: 2016, price: 140, performance: 5500, powerConsumption: 75 },
  { id: 19, brand: "NVIDIA", model: "GTX 1060", memory: 6, memoryType: "GDDR5", baseClock: 1506, boostClock: 1708, year: 2016, price: 250, performance: 8800, powerConsumption: 120 },
  { id: 20, brand: "NVIDIA", model: "GTX 1070", memory: 8, memoryType: "GDDR5", baseClock: 1506, boostClock: 1683, year: 2016, price: 380, performance: 12800, powerConsumption: 150 },
  { id: 21, brand: "NVIDIA", model: "GTX 1070 Ti", memory: 8, memoryType: "GDDR5", baseClock: 1607, boostClock: 1683, year: 2017, price: 450, performance: 14200, powerConsumption: 180 },
  { id: 22, brand: "NVIDIA", model: "GTX 1080", memory: 8, memoryType: "GDDR5X", baseClock: 1607, boostClock: 1733, year: 2016, price: 600, performance: 16500, powerConsumption: 180 },
  { id: 23, brand: "NVIDIA", model: "GTX 1080 Ti", memory: 11, memoryType: "GDDR5X", baseClock: 1480, boostClock: 1582, year: 2017, price: 700, performance: 19800, powerConsumption: 250 },
  { id: 24, brand: "NVIDIA", model: "GTX 1650", memory: 4, memoryType: "GDDR5", baseClock: 1485, boostClock: 1665, year: 2019, price: 150, performance: 5800, powerConsumption: 75 },
  { id: 25, brand: "NVIDIA", model: "GTX 1660", memory: 6, memoryType: "GDDR5", baseClock: 1530, boostClock: 1785, year: 2019, price: 220, performance: 8200, powerConsumption: 120 },
  { id: 26, brand: "NVIDIA", model: "GTX 1660 Ti", memory: 6, memoryType: "GDDR6", baseClock: 1500, boostClock: 1770, year: 2019, price: 280, performance: 9500, powerConsumption: 120 },
  
  // NVIDIA RTX Series
  { id: 27, brand: "NVIDIA", model: "RTX 2060", memory: 6, memoryType: "GDDR6", baseClock: 1365, boostClock: 1680, year: 2019, price: 350, performance: 11200, powerConsumption: 160 },
  { id: 28, brand: "NVIDIA", model: "RTX 2060 Super", memory: 8, memoryType: "GDDR6", baseClock: 1470, boostClock: 1650, year: 2019, price: 400, performance: 12800, powerConsumption: 175 },
  { id: 29, brand: "NVIDIA", model: "RTX 2070", memory: 8, memoryType: "GDDR6", baseClock: 1410, boostClock: 1620, year: 2018, price: 500, performance: 14500, powerConsumption: 175 },
  { id: 30, brand: "NVIDIA", model: "RTX 2070 Super", memory: 8, memoryType: "GDDR6", baseClock: 1605, boostClock: 1770, year: 2019, price: 500, performance: 16200, powerConsumption: 215 },
  { id: 31, brand: "NVIDIA", model: "RTX 2080", memory: 8, memoryType: "GDDR6", baseClock: 1515, boostClock: 1710, year: 2018, price: 700, performance: 17800, powerConsumption: 215 },
  { id: 32, brand: "NVIDIA", model: "RTX 2080 Super", memory: 8, memoryType: "GDDR6", baseClock: 1650, boostClock: 1815, year: 2019, price: 700, performance: 19500, powerConsumption: 250 },
  { id: 33, brand: "NVIDIA", model: "RTX 2080 Ti", memory: 11, memoryType: "GDDR6", baseClock: 1350, boostClock: 1545, year: 2018, price: 1200, performance: 23500, powerConsumption: 250 },
  { id: 34, brand: "NVIDIA", model: "RTX 3050", memory: 8, memoryType: "GDDR6", baseClock: 1552, boostClock: 1777, year: 2022, price: 250, performance: 8500, powerConsumption: 130 },
  { id: 35, brand: "NVIDIA", model: "RTX 3060", memory: 12, memoryType: "GDDR6", baseClock: 1320, boostClock: 1777, year: 2021, price: 330, performance: 12800, powerConsumption: 170 },
  { id: 36, brand: "NVIDIA", model: "RTX 3060 Ti", memory: 8, memoryType: "GDDR6", baseClock: 1410, boostClock: 1665, year: 2020, price: 400, performance: 16500, powerConsumption: 200 },
  { id: 37, brand: "NVIDIA", model: "RTX 3070", memory: 8, memoryType: "GDDR6", baseClock: 1500, boostClock: 1725, year: 2020, price: 500, performance: 20200, powerConsumption: 220 },
  { id: 38, brand: "NVIDIA", model: "RTX 3070 Ti", memory: 8, memoryType: "GDDR6X", baseClock: 1580, boostClock: 1770, year: 2021, price: 600, performance: 22500, powerConsumption: 290 },
  { id: 39, brand: "NVIDIA", model: "RTX 3080", memory: 10, memoryType: "GDDR6X", baseClock: 1440, boostClock: 1710, year: 2020, price: 700, performance: 28500, powerConsumption: 320 },
  { id: 40, brand: "NVIDIA", model: "RTX 3080 Ti", memory: 12, memoryType: "GDDR6X", baseClock: 1365, boostClock: 1665, year: 2021, price: 1200, performance: 32200, powerConsumption: 350 },
  { id: 41, brand: "NVIDIA", model: "RTX 3090", memory: 24, memoryType: "GDDR6X", baseClock: 1395, boostClock: 1695, year: 2020, price: 1500, performance: 35800, powerConsumption: 350 },
  { id: 42, brand: "NVIDIA", model: "RTX 4060", memory: 8, memoryType: "GDDR6", baseClock: 1830, boostClock: 2460, year: 2023, price: 300, performance: 15200, powerConsumption: 115 },
  { id: 43, brand: "NVIDIA", model: "RTX 4060 Ti", memory: 16, memoryType: "GDDR6", baseClock: 2310, boostClock: 2535, year: 2023, price: 500, performance: 19800, powerConsumption: 165 },
  { id: 44, brand: "NVIDIA", model: "RTX 4070", memory: 12, memoryType: "GDDR6X", baseClock: 1920, boostClock: 2475, year: 2023, price: 600, performance: 25500, powerConsumption: 200 },
  { id: 45, brand: "NVIDIA", model: "RTX 4070 Ti", memory: 12, memoryType: "GDDR6X", baseClock: 2310, boostClock: 2610, year: 2023, price: 800, performance: 32200, powerConsumption: 285 },
  { id: 46, brand: "NVIDIA", model: "RTX 4080", memory: 16, memoryType: "GDDR6X", baseClock: 2205, boostClock: 2505, year: 2022, price: 1200, performance: 42500, powerConsumption: 320 },
  { id: 47, brand: "NVIDIA", model: "RTX 4090", memory: 24, memoryType: "GDDR6X", baseClock: 2230, boostClock: 2520, year: 2022, price: 1600, performance: 58200, powerConsumption: 450 },
  
  // AMD GPUs - RX Series
  { id: 48, brand: "AMD", model: "RX 460", memory: 4, memoryType: "GDDR5", baseClock: 1090, boostClock: 1200, year: 2016, price: 120, performance: 3800, powerConsumption: 75 },
  { id: 49, brand: "AMD", model: "RX 470", memory: 4, memoryType: "GDDR5", baseClock: 926, boostClock: 1206, year: 2016, price: 180, performance: 6500, powerConsumption: 120 },
  { id: 50, brand: "AMD", model: "RX 480", memory: 8, memoryType: "GDDR5", baseClock: 1120, boostClock: 1266, year: 2016, price: 240, performance: 8200, powerConsumption: 150 },
  { id: 51, brand: "AMD", model: "RX 570", memory: 4, memoryType: "GDDR5", baseClock: 1168, boostClock: 1244, year: 2017, price: 170, performance: 7200, powerConsumption: 150 },
  { id: 52, brand: "AMD", model: "RX 580", memory: 8, memoryType: "GDDR5", baseClock: 1257, boostClock: 1340, year: 2017, price: 230, performance: 9500, powerConsumption: 185 },
  { id: 53, brand: "AMD", model: "RX 590", memory: 8, memoryType: "GDDR5", baseClock: 1469, boostClock: 1545, year: 2018, price: 280, performance: 10800, powerConsumption: 225 },
  { id: 54, brand: "AMD", model: "RX 5500 XT", memory: 8, memoryType: "GDDR6", baseClock: 1607, boostClock: 1845, year: 2019, price: 200, performance: 7800, powerConsumption: 130 },
  { id: 55, brand: "AMD", model: "RX 5600 XT", memory: 6, memoryType: "GDDR6", baseClock: 1375, boostClock: 1560, year: 2020, price: 280, performance: 11500, powerConsumption: 150 },
  { id: 56, brand: "AMD", model: "RX 5700", memory: 8, memoryType: "GDDR6", baseClock: 1465, boostClock: 1625, year: 2019, price: 350, performance: 14200, powerConsumption: 180 },
  { id: 57, brand: "AMD", model: "RX 5700 XT", memory: 8, memoryType: "GDDR6", baseClock: 1605, boostClock: 1905, year: 2019, price: 400, performance: 16800, powerConsumption: 225 },
  { id: 58, brand: "AMD", model: "RX 6500 XT", memory: 4, memoryType: "GDDR6", baseClock: 2310, boostClock: 2815, year: 2022, price: 200, performance: 6800, powerConsumption: 107 },
  { id: 59, brand: "AMD", model: "RX 6600", memory: 8, memoryType: "GDDR6", baseClock: 1968, boostClock: 2491, year: 2021, price: 330, performance: 12200, powerConsumption: 132 },
  { id: 60, brand: "AMD", model: "RX 6600 XT", memory: 8, memoryType: "GDDR6", baseClock: 2359, boostClock: 2589, year: 2021, price: 380, performance: 15500, powerConsumption: 160 },
  { id: 61, brand: "AMD", model: "RX 6700 XT", memory: 12, memoryType: "GDDR6", baseClock: 2321, boostClock: 2581, year: 2021, price: 480, performance: 19200, powerConsumption: 230 },
  { id: 62, brand: "AMD", model: "RX 6750 XT", memory: 12, memoryType: "GDDR6", baseClock: 2495, boostClock: 2600, year: 2022, price: 550, performance: 21500, powerConsumption: 250 },
  { id: 63, brand: "AMD", model: "RX 6800", memory: 16, memoryType: "GDDR6", baseClock: 1815, boostClock: 2105, year: 2020, price: 580, performance: 24800, powerConsumption: 250 },
  { id: 64, brand: "AMD", model: "RX 6800 XT", memory: 16, memoryType: "GDDR6", baseClock: 2015, boostClock: 2250, year: 2020, price: 650, performance: 28500, powerConsumption: 300 },
  { id: 65, brand: "AMD", model: "RX 6900 XT", memory: 16, memoryType: "GDDR6", baseClock: 2015, boostClock: 2250, year: 2020, price: 1000, performance: 32200, powerConsumption: 300 },
  { id: 66, brand: "AMD", model: "RX 7600", memory: 8, memoryType: "GDDR6", baseClock: 2250, boostClock: 2655, year: 2023, price: 270, performance: 14500, powerConsumption: 165 },
  { id: 67, brand: "AMD", model: "RX 7700 XT", memory: 12, memoryType: "GDDR6", baseClock: 2171, boostClock: 2544, year: 2023, price: 450, performance: 22800, powerConsumption: 245 },
  { id: 68, brand: "AMD", model: "RX 7800 XT", memory: 16, memoryType: "GDDR6", baseClock: 2124, boostClock: 2430, year: 2023, price: 500, performance: 28200, powerConsumption: 263 },
  { id: 69, brand: "AMD", model: "RX 7900 GRE", memory: 16, memoryType: "GDDR6", baseClock: 1880, boostClock: 2245, year: 2023, price: 550, performance: 32500, powerConsumption: 260 },
  { id: 70, brand: "AMD", model: "RX 7900 XT", memory: 20, memoryType: "GDDR6", baseClock: 1500, boostClock: 2400, year: 2022, price: 900, performance: 38500, powerConsumption: 315 },
  { id: 71, brand: "AMD", model: "RX 7900 XTX", memory: 24, memoryType: "GDDR6", baseClock: 1855, boostClock: 2500, year: 2022, price: 1000, performance: 45200, powerConsumption: 355 }
];

export const motherboards = [
  // Intel LGA1155
  { id: 1, brand: "ASUS", model: "P8Z68-V PRO", socket: "LGA1155", chipset: "Z68", memorySlots: 4, maxMemory: 32, price: 180, year: 2011 },
  { id: 2, brand: "MSI", model: "Z77A-G45", socket: "LGA1155", chipset: "Z77", memorySlots: 4, maxMemory: 32, price: 120, year: 2012 },
  { id: 3, brand: "Gigabyte", model: "GA-Z77X-UD3H", socket: "LGA1155", chipset: "Z77", memorySlots: 4, maxMemory: 32, price: 150, year: 2012 },
  
  // Intel LGA1150
  { id: 4, brand: "ASUS", model: "Z97-A", socket: "LGA1150", chipset: "Z97", memorySlots: 4, maxMemory: 32, price: 140, year: 2014 },
  { id: 5, brand: "MSI", model: "Z97 GAMING 5", socket: "LGA1150", chipset: "Z97", memorySlots: 4, maxMemory: 32, price: 160, year: 2014 },
  { id: 6, brand: "Gigabyte", model: "GA-Z97X-Gaming 3", socket: "LGA1150", chipset: "Z97", memorySlots: 4, maxMemory: 32, price: 130, year: 2014 },
  
  // Intel LGA1151
  { id: 7, brand: "ASUS", model: "Z170-A", socket: "LGA1151", chipset: "Z170", memorySlots: 4, maxMemory: 64, price: 150, year: 2015 },
  { id: 8, brand: "MSI", model: "Z270 GAMING PRO CARBON", socket: "LGA1151", chipset: "Z270", memorySlots: 4, maxMemory: 64, price: 180, year: 2017 },
  { id: 9, brand: "Gigabyte", model: "Z390 AORUS ELITE", socket: "LGA1151", chipset: "Z390", memorySlots: 4, maxMemory: 128, price: 170, year: 2018 },
  
  // Intel LGA1200
  { id: 10, brand: "ASUS", model: "ROG STRIX Z490-E", socket: "LGA1200", chipset: "Z490", memorySlots: 4, maxMemory: 128, price: 300, year: 2020 },
  { id: 11, brand: "MSI", model: "MAG Z490 TOMAHAWK", socket: "LGA1200", chipset: "Z490", memorySlots: 4, maxMemory: 128, price: 190, year: 2020 },
  { id: 12, brand: "Gigabyte", model: "Z590 AORUS ELITE", socket: "LGA1200", chipset: "Z590", memorySlots: 4, maxMemory: 128, price: 200, year: 2021 },
  
  // Intel LGA1700
  { id: 13, brand: "ASUS", model: "ROG STRIX Z690-E", socket: "LGA1700", chipset: "Z690", memorySlots: 4, maxMemory: 128, price: 400, year: 2021 },
  { id: 14, brand: "MSI", model: "MAG Z690 TOMAHAWK", socket: "LGA1700", chipset: "Z690", memorySlots: 4, maxMemory: 128, price: 250, year: 2021 },
  { id: 15, brand: "Gigabyte", model: "Z790 AORUS ELITE AX", socket: "LGA1700", chipset: "Z790", memorySlots: 4, maxMemory: 128, price: 280, year: 2022 },
  
  // AMD AM4
  { id: 16, brand: "ASUS", model: "ROG STRIX B450-F", socket: "AM4", chipset: "B450", memorySlots: 4, maxMemory: 128, price: 130, year: 2018 },
  { id: 17, brand: "MSI", model: "B450 TOMAHAWK MAX", socket: "AM4", chipset: "B450", memorySlots: 4, maxMemory: 128, price: 110, year: 2019 },
  { id: 18, brand: "Gigabyte", model: "B550 AORUS ELITE", socket: "AM4", chipset: "B550", memorySlots: 4, maxMemory: 128, price: 140, year: 2020 },
  { id: 19, brand: "ASUS", model: "ROG STRIX X570-E", socket: "AM4", chipset: "X570", memorySlots: 4, maxMemory: 128, price: 330, year: 2019 },
  { id: 20, brand: "MSI", model: "MAG X570S TOMAHAWK", socket: "AM4", chipset: "X570S", memorySlots: 4, maxMemory: 128, price: 220, year: 2021 },
  
  // AMD AM5
  { id: 21, brand: "ASUS", model: "ROG STRIX B650E-E", socket: "AM5", chipset: "B650E", memorySlots: 4, maxMemory: 128, price: 280, year: 2022 },
  { id: 22, brand: "MSI", model: "MAG B650 TOMAHAWK", socket: "AM5", chipset: "B650", memorySlots: 4, maxMemory: 128, price: 200, year: 2022 },
  { id: 23, brand: "Gigabyte", model: "X670 AORUS ELITE AX", socket: "AM5", chipset: "X670", memorySlots: 4, maxMemory: 128, price: 250, year: 2022 }
];

export const memory = [
  // DDR3
  { id: 1, brand: "Corsair", model: "Vengeance 8GB", type: "DDR3", speed: 1600, capacity: 8, kit: "1x8GB", price: 60, year: 2011 },
  { id: 2, brand: "G.Skill", model: "Ripjaws X 16GB", type: "DDR3", speed: 1600, capacity: 16, kit: "2x8GB", price: 120, year: 2012 },
  { id: 3, brand: "Kingston", model: "HyperX Fury 8GB", type: "DDR3", speed: 1866, capacity: 8, kit: "1x8GB", price: 55, year: 2013 },
  
  // DDR4
  { id: 4, brand: "Corsair", model: "Vengeance LPX 16GB", type: "DDR4", speed: 3200, capacity: 16, kit: "2x8GB", price: 80, year: 2015 },
  { id: 5, brand: "G.Skill", model: "Trident Z RGB 32GB", type: "DDR4", speed: 3600, capacity: 32, kit: "2x16GB", price: 160, year: 2017 },
  { id: 6, brand: "Kingston", model: "HyperX Predator 16GB", type: "DDR4", speed: 3200, capacity: 16, kit: "2x8GB", price: 90, year: 2016 },
  { id: 7, brand: "Crucial", model: "Ballistix 32GB", type: "DDR4", speed: 3600, capacity: 32, kit: "2x16GB", price: 140, year: 2019 },
  { id: 8, brand: "Team", model: "T-Force Delta RGB 16GB", type: "DDR4", speed: 3200, capacity: 16, kit: "2x8GB", price: 70, year: 2018 },
  
  // DDR5
  { id: 9, brand: "Corsair", model: "Dominator Platinum RGB 32GB", type: "DDR5", speed: 5600, capacity: 32, kit: "2x16GB", price: 280, year: 2021 },
  { id: 10, brand: "G.Skill", model: "Trident Z5 RGB 32GB", type: "DDR5", speed: 6000, capacity: 32, kit: "2x16GB", price: 300, year: 2022 },
  { id: 11, brand: "Kingston", model: "Fury Beast 16GB", type: "DDR5", speed: 5200, capacity: 16, kit: "2x8GB", price: 120, year: 2021 },
  { id: 12, brand: "Crucial", model: "DDR5-4800 32GB", type: "DDR5", speed: 4800, capacity: 32, kit: "2x16GB", price: 200, year: 2021 }
];

export const storage = [
  // HDDs
  { id: 1, brand: "Western Digital", model: "Blue 1TB", type: "HDD", capacity: 1000, interface: "SATA", speed: 7200, price: 50, year: 2015 },
  { id: 2, brand: "Seagate", model: "Barracuda 2TB", type: "HDD", capacity: 2000, interface: "SATA", speed: 7200, price: 60, year: 2016 },
  { id: 3, brand: "Western Digital", model: "Black 4TB", type: "HDD", capacity: 4000, interface: "SATA", speed: 7200, price: 180, year: 2018 },
  
  // SATA SSDs
  { id: 4, brand: "Samsung", model: "860 EVO 500GB", type: "SSD", capacity: 500, interface: "SATA", speed: 550, price: 70, year: 2018 },
  { id: 5, brand: "Crucial", model: "MX500 1TB", type: "SSD", capacity: 1000, interface: "SATA", speed: 560, price: 100, year: 2018 },
  { id: 6, brand: "Kingston", model: "A400 240GB", type: "SSD", capacity: 240, interface: "SATA", speed: 500, price: 30, year: 2017 },
  
  // NVMe SSDs
  { id: 7, brand: "Samsung", model: "980 PRO 1TB", type: "NVMe", capacity: 1000, interface: "PCIe 4.0", speed: 7000, price: 130, year: 2020 },
  { id: 8, brand: "Western Digital", model: "SN850 2TB", type: "NVMe", capacity: 2000, interface: "PCIe 4.0", speed: 7000, price: 250, year: 2021 },
  { id: 9, brand: "Crucial", model: "P5 Plus 500GB", type: "NVMe", capacity: 500, interface: "PCIe 4.0", speed: 6600, price: 60, year: 2021 },
  { id: 10, brand: "ADATA", model: "XPG SX8200 Pro 1TB", type: "NVMe", capacity: 1000, interface: "PCIe 3.0", speed: 3500, price: 90, year: 2019 }
];

export const powerSupplies = [
  { id: 1, brand: "Corsair", model: "RM750x", wattage: 750, efficiency: "80+ Gold", modular: true, price: 120, year: 2020 },
  { id: 2, brand: "EVGA", model: "SuperNOVA 850 G5", wattage: 850, efficiency: "80+ Gold", modular: true, price: 140, year: 2019 },
  { id: 3, brand: "Seasonic", model: "Focus GX-650", wattage: 650, efficiency: "80+ Gold", modular: true, price: 110, year: 2018 },
  { id: 4, brand: "Cooler Master", model: "MWE Gold 550", wattage: 550, efficiency: "80+ Gold", modular: false, price: 70, year: 2019 },
  { id: 5, brand: "be quiet!", model: "Straight Power 11 750W", wattage: 750, efficiency: "80+ Platinum", modular: true, price: 150, year: 2020 }
];