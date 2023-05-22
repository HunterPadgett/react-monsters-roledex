# React Monsters

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS](https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![fontawesome](https://img.shields.io/badge/font%20awesome-%23339AF0.svg?&style=for-the-badge&logo=font%20awesome&logoColor=white) ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

## Description

React Monsters is a simple React app built with Vite that displays a list of monsters fetched from a JSONPlaceholder API. It serves as a beginner-friendly project to learn the basics of React, components, and hooks. The app includes several components like SearchBox, CardList, and Card, utilizing useState and useEffect hooks for state management and side effects. It showcases filtering and displaying data, handling user input, and rendering dynamic components.


App.jsx of my React project with comments explaining how everything connects.
![Screenshot_20230220_054502](https://user-images.githubusercontent.com/106113692/220208965-409320c1-1ce8-4762-acff-e96e396613ae.png)
</br>
</br>
Folder structure and all of the relevant components that go along with App.jsx.
![Screenshot_20230220_054730](https://user-images.githubusercontent.com/106113692/220209055-476fe6f2-1c2b-42a5-bbfb-d3e3a24528c0.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Questions](#questions)

## Installation

Before getting started, make sure you have Node.js installed on your system. This project requires Node.js version 16 or higher. You can download the latest version of Node.js from the official website: [https://nodejs.org](https://nodejs.org)

## Usage

The React Monsters application displays a list of monsters fetched from the JSONPlaceholder API. The application features a search box that allows users to filter the displayed monsters based on their name.

### Components

The application is built using three React components:

- **App**: The root component responsible for fetching the monster data and rendering other components.

- **CardList**: Renders a list of Card components, each representing a single monster.

- **Card**: Renders a single monster card, including the monster's name, email address, and avatar image.

- **SearchBox**: Renders a search box for users to filter the monsters by their name.

The **CardList** component receives an array of monster data as a prop and maps over the array to render a Card component for each monster.

The **Card** component receives an individual monster object as a prop and uses the data to render the monster card.

The **SearchBox** component receives props such as onChangeHandler, placeholder, and className. The onChangeHandler function is called when the user types in the search box, filtering the monster list based on the input.

## Features

The React Monsters application offers the following features:

1. **Monster List**: Display a list of monsters fetched from the jsonplaceholder API.
2. **Search Functionality**: Filter the displayed monsters based on their name using the search box.
3. **Responsive Design**: The application is built with responsive design principles, ensuring a seamless experience across different devices and screen sizes.
4. **Component-Based Architecture**: Utilize the power of React's component-based architecture to create reusable and modular UI components.
5. **State Management**: Utilize React's `useState` hook to manage state within components.
6. **Side Effect Handling**: Use React's `useEffect` hook to handle side effects such as fetching data from an API.
7. **Modern JavaScript**: Built with modern JavaScript features, ensuring a clean and efficient codebase.
8. **Dynamic Rendering**: Render dynamic components based on user input and fetched data.
9. **Easy Customization**: Modify and extend the application by editing existing components or creating new ones.
10. **Deployment-ready**: The application is ready for deployment to various hosting platforms, such as Netlify, Vercel, or Heroku.

These features collectively create an engaging and interactive user experience, while also serving as a learning resource for beginners to understand the basics of React development.

## Demo

Deployed link: https://react-monsters-hp.netlify.app/

## Getting Started

To get started with this project, first clone the repository to your desktop and navigate to the project directory: <br/>
`cd Desktop/` <br/>
`git clone https://github.com/HunterPadgett/react-monsters-roledex.git` <br/>
`cd react-monsters-roledex/`

## Configuration

Install the dependencies:
`npm install`

To start the development server, run the following command:
`npm run dev`

## API Documentation

This project utilizes the JSONPlaceholder API to fetch the monster data. Specifically it uses the `/users` endpoint. You can find more information about the API and its endpoints [here](https://jsonplaceholder.typicode.com

## Testing

At the moment, no automated tests have been set up for the React Monsters application. However, implementing tests is an essential part of maintaining code quality and ensuring the reliability of your application.

Consider setting up test suites using popular testing frameworks such as Jest, React Testing Library, or Enzyme. These frameworks can help you write unit tests, integration tests, and end-to-end tests to cover different aspects of your application's functionality.

By establishing a comprehensive testing strategy, you can increase confidence in your codebase, catch bugs early, and facilitate future development and refactoring.

If you're new to testing in React, there are numerous online resources and tutorials available that can guide you through the process of setting up and writing tests. As your application grows in complexity, investing time in testing will prove invaluable in maintaining its stability and scalability.

Feel free to explore different testing approaches and frameworks that align with your development workflow and preferences. Remember to update this section in your README as you implement tests to provide relevant information about your testing strategy.

## Deployment

The React Monsters application can be easily deployed using Netlify, a popular platform for hosting static websites. Follow the steps below to deploy your application:

1. **Create a Netlify Account**: If you don't already have one, visit the [Netlify website](https://www.netlify.com/) and sign up for a free account.

2. **Build your Application**: Before deploying, make sure to build your React application by running the following command in your project directory:

`npm run build`

This command will generate the optimized and minified version of your application in the build directory.

3. **Deploy to Netlify**: Once your application is built, you can deploy it to Netlify by following these steps:

- Login to your Netlify account and click on the "New site from Git" button on the dashboard.
- Connect your Git repository (GitHub, GitLab, or Bitbucket) that contains your React Monsters project.
- Configure the build settings:
  - Set the build command to: `npm run build`
  - Set the publish directory to: `build`
- Click on the "Deploy site" button, and Netlify will initiate the deployment process.

4. **Access your Deployed Application**: After the deployment process completes, Netlify will provide you with a unique URL for your deployed application. You can access your React Monsters application by visiting this URL.

Congratulations! Your React Monsters application is now deployed and accessible to users. Netlify makes it easy to deploy updates to your application automatically whenever you push changes to your Git repository.

For more detailed instructions and advanced deployment options, refer to the [Netlify documentation](https://docs.netlify.com/)

## Contributing

Thank you for your interest in contributing to the React Monsters project! Contributions are welcome and greatly appreciated. To ensure a smooth collaboration, please follow these guidelines:

1. Fork the repository and create your branch from the `main` branch.
2. Make your changes, ensuring that the code adheres to the project's coding style.
3. Write clear and concise commit messages.
4. Test your changes thoroughly to ensure they don't introduce any issues.
5. Create a pull request, describing the changes you've made and the problem they solve.
6. Your pull request will be reviewed, and feedback or suggestions may be provided.
7. Once approved, your changes will be merged into the main repository.

By contributing to this project, you agree to release your contributions under the [MIT License](LICENSE).

If you have any questions or need further clarification, please feel free to reach out.

Happy contributing!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments

I would like to express my gratitude to the following individuals and resources for their contributions and inspiration:

- [Zero to Mastery](https://zerotomastery.io/) - Tutorial resource that provided guidance and inspiration for this project.

Their expertise and resources have been invaluable in the development of this project. I am grateful for their contributions and the knowledge they have shared.

## Questions

If you would like to see more of my work, checkout my [GitHub](https://github.com/HunterPadgett) repo and my [portfolio](https://hunterpadgett.netlify.app/). If you have any additional questions, please contact me directly at: hunterpadgett.dev@gmail.com

Feel free to customize the content and structure further based on your preferences and project specifics.
