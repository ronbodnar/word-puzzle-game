# Grid of Words

**Grid of Words** is a dynamic web application built with Node.js and JavaScript and inspired by Wordle. Enjoy a
customizable word puzzle experience with options for word length, number of attempts for a win, and choice of dictionary language.

### [Play the Demo](https://ronbodnar.com/grid-of-words)

## Table of Contents

1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Running with Docker](#running-with-docker)
6. [Contributing](#contributing)
7. [License](#license)

## Features

- **Single-Page Application (SPA)**: Built entirely with JavaScript, this SPA provides a seamless user experience, enabling dynamic interactions without page reloads.
- **Customizable Game Options**: Users can easily configure game settings, allowing word lengths from 4 to 8 characters and attempts ranging from 3 to 8. Supports English and Spanish dictionaries for broader accessibility.
- **Secure Authentication**: User sessions are protected using JWTs stored securely in HttpOnly cookies, ensuring robust identity verification.
- **Password Reset Functionality**: Implemented password resets following industry-standard practices, utilizing short-lived tokens for enhanced security.
- **Database Integration**: Data is managed seamlessly with MongoDB, offering robust querying capabilities and efficient data handling.
- **Extensive Word List**: Access to over 400,000 words from the Oxford English Dictionary enriches the game's vocabulary and enhances the user experience.
- **Error Logging**: Comprehensive error tracking and troubleshooting are facilitated through Winston, helping maintain application reliability.
- **Environment Configuration**: Secure management of secrets and configurations through a .env file makes it easy to customize settings for different environments.
- **Cross-Platform Compatibility**: Designed for smooth operation across various operating systems, minimizing setup requirements for developers.

## Technology Stack

- **Frontend**: JavaScript, HTML, CSS, Chart.js
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Installation

To set up and run Grid of Words locally, follow these steps:

1. **Clone the Repository**

   ```
   git clone git@github.com:ronbodnar/grid-of-words.git
   ```

2. **Navigate to the Project Directory**

   ```
   cd grid-of-words
   ```

3. **Install Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary
   dependencies:

   ```
   npm install
   ```

4. **Create Environment Files**

   Set up a `.env` file in the root directory for development or production settings.

   `development.env` or `production.env` are standard, and `example.env` is included in the root
   directory for reference.

5. **Start the Development Server**

   Run the server in development mode using `nodemon`:

   ```
   npm run dev
   ```

6. **Start the Production Server**

   For production mode, use:

   ```
   npm run prod
   ```

7. **Access the Application**

   The application will be available at `http://localhost:3000`. Open this URL in your web browser
   to start playing.

8. **Running Tests**

   There are currently no tests included. You can add and configure tests in the `package.json` file
   as needed.

For issues or questions, please refer to the
[issue tracker](https://github.com/ronbodnar/grid-of-words/issues) or
[contact the author](https://github.com/ronbodnar).

## Usage

Once the application is running, you can interact with it as follows:

1. **Play the Game**

   Navigate to `http://localhost:3000` in your web browser to start the game. Follow the on-screen
   instructions to play.

2. **Configuration**

   Access the Options menu from the main screen to adjust game modes and settings. Use the sliders
   to configure the game to your preference.

3. **Logging**

   Logs are managed with [Winston](https://github.com/winstonjs/winston) and are stored in the
   `logs` directory. Review these logs for any errors or important information.

For more details on configuration and extending the application, refer to the
[documentation](https://github.com/ronbodnar/grid-of-words#readme) or explore the code in the
repository.

## Running with Docker

To run Grid of Words using Docker, follow these steps:

1. **Build the Docker Images**

   Build the Docker images for development or production:

   ```
   docker-compose build
   ```

2. **Start the Services**

   Start the services defined in the `docker-compose.yml` file:

   ```
   docker-compose up
   ```

3. **Access the Application**

   The application will be available at `http://localhost:3000`. Open this URL in your web browser
   to start playing.

4. **Stop the Services**

   To stop the running services, use:

   ```
   docker-compose down
   ```

For more details on Docker setup and usage, refer to the
[Docker documentation](https://docs.docker.com/).

## Contributing

We welcome contributions! To suggest improvements or add new features, follow these steps:

1. **Fork the Repository**
2. **Create a New Branch**: `git checkout -b feature/your-feature`
3. **Commit Your Changes**: `git commit -am 'Add new feature'`
4. **Push to the Branch**: `git push origin feature/your-feature`
5. **Create a Pull Request**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
