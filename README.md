# Fruit Autocompletion App

A small Next.js based frontend application that performs autocompletion on a list of fruits that are coming from an API route that has a 3 second delay to simulate network latency. The app is built using React, Typescript, Tailwindcss, Mantine and React-Query. It also includes a few Cypress tests for the main functionality.

## Screenshots

<img src="https://imgur.com/4VnUh8a.png" alt="Desktop Screenshot 1" width="900"/>
<img src="https://imgur.com/LcMaSso.png" alt="Desktop Screenshot 2" width="900"/>
<img src="https://imgur.com/VG1YtnJ.png" alt="Mobile Screenshot 1" width="300"/>
<img src="https://imgur.com/qE7vXm2.png" alt="Mobile Screenshot 2" width="300"/>

## Tech Stack

Next.js, React, Typescript, Tailwindcss, React-Query, Mantine, Cypress

## Install & Run Locally

Clone the project

```bash
  git clone https://github.com/Theofilos-Chamalis/Fruit-Autocompletion-App.git
```

Go to the project directory

```bash
  cd Fruit-Autocompletion-App/
```

Install dependencies

```bash
  npm i
```

Start the server (opens the browser automatically)

```bash
  npm run dev
```

## E2E Testing

Run Cypress Tests interactively

```bash
  npm run cypress:open
```

Run Cypress Tests headlessly

```bash
  npm run cypress:run
```

## Deployment & Contribution

Deployment is done using Vercel and the app is hosted here: [https://fruit-autocompletion-app.vercel.app/](https://fruit-autocompletion-app.vercel.app/).

Any merges to the main branch are automatically deployed. Feel free to open an issue if you have any questions or suggestions and open a PR if you want to make a change!
