# React Monsters

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS](https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![fontawesome](https://img.shields.io/badge/font%20awesome-%23339AF0.svg?&style=for-the-badge&logo=font%20awesome&logoColor=white) ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

## Description

This project is a simple React app built with Vite that displays a list of monsters fetched from a JSONPlaceholder API. The purpose of the project is to help beginners get familiar with the basics of React, components, and hooks. It includes several components, such as the SearchBox, CardList, and Card, and uses useState and useEffect hooks to manage state and side effects. The app demonstrates how to filter and display data, handle user input, and render dynamic components.

Deployed link: https://react-monsters-hp.netlify.app/

![react-monsters-hp netlify app_](https://user-images.githubusercontent.com/106113692/220203520-7620b4b9-f282-4cc6-ad8a-57f71c76f053.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution and Attribution](#contribution-and-attribution)
- [Technologies](#technologies)
- [Questions](#questions)

## Installation

To get started with this project, first clone the repository and navigate to the project directory:
`https://github.com/HunterPadgett/react-monsters-roledex.git`

Next, install the dependencies:
`npm install`

To start the development server, run the following command:
`npm run dev`

## Usage

The React Monsters application displays a list of monsters that are fetched from the jsonplaceholder API. The application features a search box that allows users to filter the displayed monsters based on their name.

### Components

The application is built using three React components:

- **App**: This is the root component that is responsible for fetching the monster data and rendering the other components.

- **CardList**: This component renders a list of Card components, each representing a single monster.

- **Card**: This component renders a single monster card, including the monster's name, email address, and avatar image.

- **SearchBox**: This component renders a search box for users to filter the monsters by their name.

The **CardList** component is passed an array of monster data as a prop, and it maps over the array to render a Card component for each monster.

The **Card** component is passed an individual monster object as a prop, and it uses the data from that object to render the monster card.

The **SearchBox** component is passed a onChangeHandler, placeholder, and className prop. The onChangeHandler function is called when the user types in the search box, and it filters the monster list based on the user's input.

## Contribution and Attribution

This project was created by [Hunter Padgett](https://hunterpadgett.netlify.app/) and is based on a tutorial from [ZTM](https://zerotomastery.io/)

## Technologies

This app was built with React, a popular JavaScript library for building user interfaces. It uses modern React features such as hooks (useState, useEffect) to manage state and side effects.

## Questions

If you would like to see more of my work, checkout my [GitHub](https://github.com/HunterPadgett) repo and my [portfolio](https://hunterpadgett.netlify.app/). If you have any additional questions, please contact me directly at: hunterpadgett.dev@gmail.com
