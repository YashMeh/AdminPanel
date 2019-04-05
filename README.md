### SenZ Admin Panel
This is the admin panel for the senz server, dedicated to ease device managemanet on the senz server.

[![API](https://img.shields.io/badge/API-documentation-success.svg?style=for-the-badge&logo=appveyor)](https://senzadmin.herokuapp.com/apidoc/) [![linkedIn](https://img.shields.io/badge/contact%20me-linkedIn-green.svg?style=for-the-badge&logo=appveyor)](https://www.linkedin.com/in/yash-mehrotra-ab2573154/) ![Docker](https://img.shields.io/badge/image%20size-397%20MB-blue.svg) ![Tests](https://img.shields.io/badge/tests-8%20passing-red.svg) ![NodeV](https://img.shields.io/badge/node-v11.8.0-brightgreen.svg) ![npmV](https://img.shields.io/badge/npm-6.8.0-brightgreen.svg) ![react](https://img.shields.io/badge/react-v16.8.2-brightgreen.svg)


### Install frontend and backend dependencies using their respective readme

-   [Backend](/backend/README.md)
-   [Frontend](/frontend/README.md)

### Run using docker (Once dependencies are installed)

- Remove the 'dbURI' option from dev.json in the config directory. 

- Attach to containers using

```bash
docker-compose build
```

- Run containers using

```bash
docker-compose up
```

- Remove containers using

```bash
docker-compose down
```

### Run without docker

- Run the backend part.(PORT=8080)
- Run the frontend part.(PORT=3000)
