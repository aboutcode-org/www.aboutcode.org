# www.aboutcode.org
Repository for the AboutCode public website - based on Docusaurus.

The current draft website is available at: https://aboutcode-org.github.io/www.aboutcode.org/.

## Development

### With Docker (Recommended)

**Development server with hot reload:**
```bash
docker-compose up dev
```
Access at http://localhost:3001/www.aboutcode.org/

**Production build:**
```bash
docker-compose up prod
```
Access at http://localhost:8080/www.aboutcode.org/

### Without Docker

Install dependencies and run:
```bash
cd website
npm install
npm start
```
Access at http://localhost:3000/www.aboutcode.org/

## Building

**Build static files:**
```bash
cd website
npm run build
```

**With Docker:**
```bash
docker build -t aboutcode-prod .
docker run -p 8080:80 aboutcode-prod
```

