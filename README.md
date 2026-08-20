**Обзор**

&nbsp;&nbsp;&nbsp;&nbsp;PC-Builder — full-stack проект для сборки ПК на Next.js + React + TypeScript. Пользователь собирает конфигурацию из каталога комплектующих (CPU, GPU, RAM, материнская плата, SSD, БП, корпус, охлаждение), сохраняет билды (конкретная сборка компьютера, которую собрал пользователь) в личный кабинет, публикует их в общий раздел Explore и ставит лайки чужим сборкам.

**Доменная модел**

&nbsp;&nbsp;&nbsp;&nbsp; Вся доменная модель — User, Build, Component, BuildComponent, Like — описана через Prisma ORM со строгой типизацией и каскадными связями; составные @@unique-ключи гарантируют, что один компонент не попадёт в билд дважды, а один пользователь не поставит два лайка одному билду.

**Авторизация**

&nbsp;&nbsp;&nbsp;&nbsp;Авторизация построена на Auth.js (NextAuth v5) с Credentials-провайдером и JWT-сессиями: пароли хэшируются через bcryptjs и сверяются в серверном authorize()-колбэке — никакой пароль в открытом виде не покидает БД.

**База данных и инфраструктура**

&nbsp;&nbsp;&nbsp;&nbsp;Данные лежат в PostgreSQL 15, поднятом в Docker (docker-compose.yml с именованным volume для персистентности) — база разворачивается одной командой на любой машине. Настроен собственный CI/CD-пайплайн: на каждый push автоматически прогоняются линтер, тайп-чек и тесты, что исключает регрессии в мастере.

**Тестирование**

&nbsp;&nbsp;&nbsp;&nbsp;Ключевые бизнес-функции покрыты автотестами на Jest + @testing-library/react: чистые утилиты (cn, getTabValue), двухсторонние маппинги categoryId ↔ ComponentType, целостность справочника категорий и рендер UI-компонентов (role=alert, семантика). Тесты изолированы от БД и NextAuth — гоняются в jsdom за ~1 секунду, отдельный tsconfig.jest.json не тянет next-плагин.

**Стек**

&nbsp;&nbsp;&nbsp;&nbsp;TypeScript (strict), Next.js, React, Prisma ORM, PostgreSQL 15, Auth.js, bcryptjs, Tailwind CSS + shadcn/ui + Radix, Docker Compose, Jest + Testing Library, CI/CD-пайплайн. Многослойная архитектура (data → auth → server actions → UI), строгая типизация от схемы Prisma до React-компонентов, DevOps-часть развёрнута самостоятельно.
