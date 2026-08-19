 import 'dotenv/config'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient, ComponentType } from '../lib/generated/prisma/client'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Начинаем заполнение базы данных...')

  // Очищаем существующие данные
  console.log('Очищаем старые данные...')
  await prisma.like.deleteMany()
  await prisma.buildComponent.deleteMany()
  await prisma.build.deleteMany()
  await prisma.component.deleteMany()
  await prisma.user.deleteMany()

  console.log('Добавляем компоненты...')

  // ========== ПРОЦЕССОРЫ (CPU) ==========
  await prisma.component.createMany({
    data: [
      // Intel
      {
        type: ComponentType.cpu,
        name: 'Intel Core i5-13600K',
        price: 25990,
        socket: 'LGA1700'
      },
      {
        type: ComponentType.cpu,
        name: 'Intel Core i7-13700K',
        price: 38990,
        socket: 'LGA1700'
      },
      {
        type: ComponentType.cpu,
        name: 'Intel Core i9-13900K',
        price: 59990,
        socket: 'LGA1700'
      },
      {
        type: ComponentType.cpu,
        name: 'Intel Core i5-12400F',
        price: 15990,
        socket: 'LGA1700'
      },
      {
        type: ComponentType.cpu,
        name: 'Intel Core i3-12100F',
        price: 8990,
        socket: 'LGA1700'
      },
      
      // AMD
      {
        type: ComponentType.cpu,
        name: 'AMD Ryzen 5 7600X',
        price: 23500,
        socket: 'AM5'
      },
      {
        type: ComponentType.cpu,
        name: 'AMD Ryzen 7 7800X3D',
        price: 39990,
        socket: 'AM5'
      },
      {
        type: ComponentType.cpu,
        name: 'AMD Ryzen 9 7950X',
        price: 54990,
        socket: 'AM5'
      },
      {
        type: ComponentType.cpu,
        name: 'AMD Ryzen 5 5600X',
        price: 15990,
        socket: 'AM4'
      },
      {
        type: ComponentType.cpu,
        name: 'AMD Ryzen 7 5800X3D',
        price: 29990,
        socket: 'AM4'
      }
    ]
  })

  // ========== ВИДЕОКАРТЫ (GPU) ==========
  await prisma.component.createMany({
    data: [
      {
        type: ComponentType.gpu,
        name: 'NVIDIA RTX 4070 Ti',
        price: 85990,
        socket: null
      },
      {
        type: ComponentType.gpu,
        name: 'NVIDIA RTX 4080',
        price: 119990,
        socket: null
      },
      {
        type: ComponentType.gpu,
        name: 'NVIDIA RTX 4090',
        price: 169990,
        socket: null
      },
      {
        type: ComponentType.gpu,
        name: 'NVIDIA RTX 4060 Ti',
        price: 45990,
        socket: null
      },
      {
        type: ComponentType.gpu,
        name: 'NVIDIA RTX 3060',
        price: 32990,
        socket: null
      },
      {
        type: ComponentType.gpu,
        name: 'AMD RX 7900 XTX',
        price: 99990,
        socket: null
      },
      {
        type: ComponentType.gpu,
        name: 'AMD RX 7800 XT',
        price: 59990,
        socket: null
      },
      {
        type: ComponentType.gpu,
        name: 'AMD RX 7700 XT',
        price: 45990,
        socket: null
      },
      {
        type: ComponentType.gpu,
        name: 'AMD RX 6800',
        price: 39990,
        socket: null
      }
    ]
  })

  // ========== МАТЕРИНСКИЕ ПЛАТЫ ==========
  await prisma.component.createMany({
    data: [
      {
        type: ComponentType.motherboard,
        name: 'ASUS PRIME Z790-P',
        price: 22990,
        socket: 'LGA1700'
      },
      {
        type: ComponentType.motherboard,
        name: 'MSI B760 GAMING PLUS',
        price: 17990,
        socket: 'LGA1700'
      },
      {
        type: ComponentType.motherboard,
        name: 'GIGABYTE B760 DS3H',
        price: 14990,
        socket: 'LGA1700'
      },
      {
        type: ComponentType.motherboard,
        name: 'ASUS TUF GAMING B650-PLUS',
        price: 19990,
        socket: 'AM5'
      },
      {
        type: ComponentType.motherboard,
        name: 'MSI B650 GAMING PLUS',
        price: 18990,
        socket: 'AM5'
      },
      {
        type: ComponentType.motherboard,
        name: 'MSI B550 GAMING GEN3',
        price: 11990,
        socket: 'AM4'
      },
      {
        type: ComponentType.motherboard,
        name: 'ASUS PRIME B450-PLUS',
        price: 8990,
        socket: 'AM4'
      }
    ]
  })

  // ========== ОПЕРАТИВНАЯ ПАМЯТЬ (RAM) ==========
  await prisma.component.createMany({
    data: [
      {
        type: ComponentType.ram,
        name: 'Kingston Fury 16GB DDR4',
        price: 5990,
        socket: null
      },
      {
        type: ComponentType.ram,
        name: 'Kingston Fury 32GB DDR4',
        price: 10990,
        socket: null
      },
      {
        type: ComponentType.ram,
        name: 'Corsair Vengeance 16GB DDR5',
        price: 8990,
        socket: null
      },
      {
        type: ComponentType.ram,
        name: 'Corsair Vengeance 32GB DDR5',
        price: 15990,
        socket: null
      },
      {
        type: ComponentType.ram,
        name: 'Samsung 16GB DDR4',
        price: 4990,
        socket: null
      },
      {
        type: ComponentType.ram,
        name: 'G.Skill Trident Z5 32GB DDR5',
        price: 18990,
        socket: null
      }
    ]
  })

  // ========== НАКОПИТЕЛИ (SSD) ==========
  await prisma.component.createMany({
    data: [
      {
        type: ComponentType.ssd,
        name: 'Samsung 980 500GB NVMe',
        price: 5990,
        socket: null
      },
      {
        type: ComponentType.ssd,
        name: 'Samsung 980 1TB NVMe',
        price: 8990,
        socket: null
      },
      {
        type: ComponentType.ssd,
        name: 'Samsung 980 Pro 1TB NVMe',
        price: 11990,
        socket: null
      },
      {
        type: ComponentType.ssd,
        name: 'WD Blue 1TB SATA SSD',
        price: 6990,
        socket: null
      },
      {
        type: ComponentType.ssd,
        name: 'Kingston NV2 1TB NVMe',
        price: 5990,
        socket: null
      },
      {
        type: ComponentType.ssd,
        name: 'Kingston NV2 2TB NVMe',
        price: 10990,
        socket: null
      },
      {
        type: ComponentType.ssd,
        name: 'Seagate BarraCuda 1TB HDD',
        price: 3990,
        socket: null
      },
      {
        type: ComponentType.ssd,
        name: 'WD Blue 2TB HDD',
        price: 5990,
        socket: null
      }
    ]
  })

  // ========== БЛОКИ ПИТАНИЯ (PSU) ==========
  await prisma.component.createMany({
    data: [
      {
        type: ComponentType.psu,
        name: 'be quiet! 550W Bronze',
        price: 5990,
        socket: null
      },
      {
        type: ComponentType.psu,
        name: 'be quiet! 650W Gold',
        price: 8990,
        socket: null
      },
      {
        type: ComponentType.psu,
        name: 'be quiet! 750W Gold',
        price: 10990,
        socket: null
      },
      {
        type: ComponentType.psu,
        name: 'Corsair 650W Bronze',
        price: 6990,
        socket: null
      },
      {
        type: ComponentType.psu,
        name: 'Corsair 850W Gold',
        price: 12990,
        socket: null
      },
      {
        type: ComponentType.psu,
        name: 'DeepCool 500W',
        price: 3990,
        socket: null
      },
      {
        type: ComponentType.psu,
        name: 'DeepCool 750W Gold',
        price: 8990,
        socket: null
      }
    ]
  })

  // ========== КОРПУСА (CASE) ==========
  await prisma.component.createMany({
    data: [
      {
        type: ComponentType.case,
        name: 'DeepCool CC560',
        price: 3990,
        socket: null
      },
      {
        type: ComponentType.case,
        name: 'DeepCool CH370',
        price: 4990,
        socket: null
      },
      {
        type: ComponentType.case,
        name: 'Zalman S2',
        price: 3290,
        socket: null
      },
      {
        type: ComponentType.case,
        name: 'Corsair 4000D Airflow',
        price: 8990,
        socket: null
      },
      {
        type: ComponentType.case,
        name: 'NZXT H5 Flow',
        price: 8990,
        socket: null
      },
      {
        type: ComponentType.case,
        name: 'Lian Li Lancool 216',
        price: 9990,
        socket: null
      },
      {
        type: ComponentType.case,
        name: 'be quiet! Pure Base 500DX',
        price: 10990,
        socket: null
      }
    ]
  })

  // ========== ОХЛАЖДЕНИЕ (COOLER) ==========
  await prisma.component.createMany({
    data: [
      {
        type: ComponentType.cooler,
        name: 'DeepCool AK400',
        price: 2990,
        socket: null
      },
      {
        type: ComponentType.cooler,
        name: 'DeepCool AK620',
        price: 5990,
        socket: null
      },
      {
        type: ComponentType.cooler,
        name: 'be quiet! Pure Rock 2',
        price: 3990,
        socket: null
      },
      {
        type: ComponentType.cooler,
        name: 'Noctua NH-D15',
        price: 9990,
        socket: null
      },
      {
        type: ComponentType.cooler,
        name: 'DeepCool LS520 SE 240мм',
        price: 6990,
        socket: null
      },
      {
        type: ComponentType.cooler,
        name: 'DeepCool LS720 360мм',
        price: 10990,
        socket: null
      },
      {
        type: ComponentType.cooler,
        name: 'Arctic Liquid Freezer II 240',
        price: 7990,
        socket: null
      },
      {
        type: ComponentType.cooler,
        name: 'Arctic Liquid Freezer II 360',
        price: 11990,
        socket: null
      },
      {
        type: ComponentType.cooler,
        name: 'MSI MAG CoreLiquid 240R',
        price: 8990,
        socket: null
      }
    ]
  })

  // Создаем тестового пользователя
  console.log('Добавляем тестового пользователя...')
  await prisma.user.create({
    data: {
      email: 'test@test.com',
      name: 'Тестовый Пользователь',
      password: '123456'
    }
  })

  const componentsCount = await prisma.component.count()
  const usersCount = await prisma.user.count()
  
  console.log(`✅ Готово! Добавлено:`)
  console.log(`   - ${componentsCount} компонентов`)
  console.log(`   - ${usersCount} пользователей`)
}

main()
  .catch((e) => {
    console.error('❌ Ошибка:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })