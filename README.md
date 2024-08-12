# Word Puzzle Game 🧩🕵️‍♂️

**Word Puzzle Game** is a dynamic Node.js and JavaScript implementation inspired by Wordle. Enjoy a customizable word puzzle experience with various word lengths and attempt limits. This is a modern single-page application (SPA) built entirely with JavaScript.

### [Explore the Demo 🎮](https://games.ronbodnar.com)

<!-- ## Table of Contents

1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license) -->

## Features 🚀

- **Single-Page Application**: Enjoy a seamless user experience with this modern SPA built entirely with JavaScript.
- **Game Options**: Challenge yourself with word lengths ranging from 4 to 8 characters, and set up to 8 attempts per game.
- **Secure Authentication**: Protect user sessions with HttpOnly cookies and JWTs to ensure secure identity verification.
- **Password Reset**: Implement password resets with industry-standard practices and short-lived tokens.
- **Database Integration**: Seamlessly load data into a MySQL database for robust management and querying.
- **Extensive Word List**: Access over 400,000 words from the Oxford English Dictionary for a rich and varied gameplay experience.
- **Error Logging**: Track and troubleshoot issues with comprehensive error logging using [Winston](https://github.com/winstonjs/winston).
- **Environment Configuration**: Manage secrets and configurations securely with a `.env` file.
- **Cross-Platform Compatibility**: Designed to work smoothly across different operating systems with minimal setup.

## Technology Stack 🖥️

- **Frontend**: JavaScript, HTML, CSS
- **Backend**: Node.js, Express
- **Database**: MySQL

## Installation 🛠️

To set up and run the Word Puzzle Game locally, follow these steps:

1. **Clone the Repository**

   ```
   git clone git@github.com:ronbodnar/word-puzzle-game.git
   ```

2. **Navigate to the Project Directory**

   ```
   cd word-puzzle-game
   ```

3. **Install Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary dependencies:

   ```
   npm install
   ```

4. **Create Environment Files**

   Set up a `.env` file in the root directory for development or production settings.

   `development.env` or `production.env` are standard, and `example.env` is included in the root directory for reference.

6. **Start the Development Server**

   Run the server in development mode using `nodemon`:

   ```
   npm run dev
   ```

7. **Start the Production Server**

   For production mode, use:

   ```
   npm run prod
   ```

8. **Access the Application**

   The application will be available at `http://localhost:3000`. Open this URL in your web browser to start playing.

9. **Running Tests**

   There are currently no tests included. You can add and configure tests in the `package.json` file as needed.

For issues or questions, please refer to the [issue tracker](https://github.com/ronbodnar/word-puzzle-game/issues) or [contact the author](https://github.com/ronbodnar).

## Usage 📝

Once the application is running, you can interact with it as follows:

1. **Play the Game**

   Navigate to `http://localhost:3000` in your web browser to start the game. Follow the on-screen instructions to play.

2. **Configuration**

   Access the Options menu from the main screen to adjust game modes and settings. Use the sliders to configure the game to your preference.

3. **Logging**

   Logs are managed with [Winston](https://github.com/winstonjs/winston) and are stored in the `logs` directory. Review these logs for any errors or important information.

For more details on configuration and extending the application, refer to the [documentation](https://github.com/ronbodnar/word-puzzle-game#readme) or explore the code in the repository.

## Contributing 🤝

We welcome contributions! To suggest improvements or add new features, follow these steps:

1. **Fork the Repository**
2. **Create a New Branch**: `git checkout -b feature/your-feature`
3. **Commit Your Changes**: `git commit -am 'Add new feature'`
4. **Push to the Branch**: `git push origin feature/your-feature`
5. **Create a Pull Request**

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author 👤

- **Ron Bodnar**: Creator and developer of the Word Puzzle Game. [GitHub Profile](https://github.com/ronbodnar)