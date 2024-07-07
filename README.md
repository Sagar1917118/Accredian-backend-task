# Accredian-backend-task
Accredian-backend-task using Nodejs, SQL, Prisma ORM

//install node modules: npm init
//creating bd using prisma orm:
INSTALL PRISMA CLI
npm install -g prisma

INSTALL Prisma Client in your project
npm install @prisma/client

Initialize Prisma
npx prisma init

Configure Prisma for MySql
prisma/schema.prisma

//create the database model
npx prisma generate

//create db schema
npx prisma migrate dev
//give a miragation name: accredianreferal

//start the server
node index.js or nodemon index.js

