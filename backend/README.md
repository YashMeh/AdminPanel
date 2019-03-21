## Description
This is the backend part of the senz admin panel built using NodeJS.
It uses JWT for authentication,morgan for logging,helmet for security and express as a framework.

### Installation

```bash
cd backend
npm install
```
### Pre Running Step

- Create a .env file in the /backend directory and add.

```javascript
secretKey='YOUR_SECRET_KEY'
URI      ='YOUR_MONGODB_URI' //Ignore if using Docker
```

### Running

```bash
npm run dev
```

### Endpoints

BaseURL = http://localhost:8080

Registration = BaseURL/register

Login        =BaseURL/login

Dashboard    =BaseURL/dashboard





