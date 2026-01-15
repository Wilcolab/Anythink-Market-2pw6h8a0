# Express Server Project

This is a simple Express server project that listens on port 8001. The server is set up to automatically restart on code changes using `nodemon`.

## Project Structure

```
express-server
├── src
│   └── server.js        # Entry point of the application
├── .dockerignore         # Files to ignore when building the Docker image
├── Dockerfile            # Instructions to build the Docker image
├── package.json          # npm configuration file
├── .gitignore            # Files to ignore in Git
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Docker installed on your machine (if you want to run the server in a Docker container).

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-2pw6h8a0.git
   cd Anythink-Market-2pw6h8a0/express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic restarts on code changes, use the following command:

```
yarn start
```

The server will be running on `http://localhost:8001`.

### Running with Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 express-server
   ```

The server will be accessible at `http://localhost:8001`.

### License

This project is licensed under the MIT License. See the LICENSE file for details.