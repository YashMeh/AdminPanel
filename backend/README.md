## Description
[![API](https://img.shields.io/badge/API-documentation-success.svg?style=for-the-badge&logo=appveyor)](https://senzadmin.herokuapp.com/apidoc/) ![Tests](https://img.shields.io/badge/tests-6%20passing-red.svg) ![NodeV](https://img.shields.io/badge/node-v11.8.0-brightgreen.svg) ![npmV](https://img.shields.io/badge/npm-6.8.0-brightgreen.svg)

This is the backend part of the senz admin panel built using NodeJS.
It uses JWT for authentication,morgan for logging,helmet for security and express as a framework.

### Installation

```bash
cd backend
npm install
```
### Pre Running Step

- Modify the dev.json,test.json and production.json in the config directory.

```javascript
secretKey='YOUR_SECRET_KEY'
dbURI      ='YOUR_MONGODB_URI' //Ignore if using Docker,
port:8080
```

### Testing

```bash
npm test
```

### Running

```bash
npm run dev
```

### Documentation
API Documentation - https://senzadmin.herokuapp.com/apidoc/
