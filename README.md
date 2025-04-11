<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Reports for NestJS

A NestJS-based application for generating and managing reports in PDF format.
This project uses Docker, PostgreSQL, Prisma, and pdfmake for a full-featured, modern development environment.


### Features
- 🐘 PostgreSQL database via Docker
- 📄 PDF report generation with pdfmake
- 🧱 Prisma as ORM
- ⚙️ Ready-to-use SQL script to insert mock employee data
- 💡 Recommended usage with Insomnia for better PDF rendering in API responses

### Getting Started

1. Clone the Repository

2. install dependencies
```
npm install
```


3. Set up environment variables
```
cp .env.template .env
```


4. Use docker compose:
```
docker compose up -d
```

5. Generate the prisma client
```
npx prisma generate
```


6. Start the NestJS app in development mode
```
npm run start:dev
```

### Optional: Insert Sample Employee Data

If you want to test custom report generation with mock employees, you can run the raw SQL script located in ```queries/01-employees.sql```

