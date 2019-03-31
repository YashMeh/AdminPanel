## Description
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
![test pic](https://raw.githubusercontent.com/YashMeh/AdminPanel/master/backend/test.png?token=AfyO9PiyFswFvAGoEz8sebcfEVmD2_lBks5cqjlgwA%3D%3D)

### Running

```bash
npm run dev
```

### Endpoints

BaseURL = http://localhost:8080

Registration = BaseURL/register

Login        =BaseURL/login

Project    =BaseURL/project

Device    =BaseURL/device




