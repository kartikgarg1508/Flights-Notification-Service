This is a basic NodeJS project template consisting of most of the important folders and configurations which should be created keeping in mind the code principles.

`src` -> all the source code regarding the project setup. This is to seperate out tests.

Coming inside the `src` folder we have the following folders:

- `config` -> consists the setup of configurations/library/module. for e.g setting up of dotenv so that environment variables can be accessesd in cleaner manner. We have also done the setup of logging library here to produce meaningful logs.

- `routes` -> in this we register a route and corresponding controller/middlewares.

- `middlewares` -> to intercept the incoming request where we can write our authenticators/validators etc.

- `controllers` -> they are last middlewares as after them we call the buisness layer to execute the buisness logic. In controllers we recieve the incoming request and pass on to buisness layer and after recieving output from business layer, we structure the resposne and send the output.

- `repositories` -> contains all the logic using which we interact with db by writing raw queries/ ORM queries.

- `services` -> contains the buisness logic and intercats with repositories for accessing data from db.

- `utils` -> contains the helper methods.

### Setting up the project:

- Clone this repository.

- In the root directory create a .env file and add the following environment variables:

  ```
  PORT = <port number of your choice>
  ```

- To run the server execute the command :

  ```
  npm start
  ```
