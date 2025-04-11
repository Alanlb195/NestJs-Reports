<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Reports for NestJS

A NestJS-based application for generating and managing reports. This project uses Docker and Prisma for streamlined development and database management.


### Follow the steps below to run the application in development mode:

1. Clone the Repository

2. install dependencies
```
npm install
```


3. Set Up the Environment Variables, copy the example environment file and rename it:
```
cp .env.template .env
```


4. Use docker compose:
```
docker compose up -d
```

5. Start Docker Services

```
npm run start:dev
```


6. Generate the prisma client
```
npx prisma generate
```