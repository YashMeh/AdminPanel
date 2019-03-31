### Description
This is a project to implement senz Admin panel .


### Install frontend and backend dependencies using their respective readme

-   [Backend](/backend/README.md)
-   [Frontend](/frontend/README.md)

### Run using docker (Once dependencies are installed)

- Remove the 'dbURI' option from dev.json in the config directory 

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
