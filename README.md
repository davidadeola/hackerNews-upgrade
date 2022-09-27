## Getting Started

This is a HackerNews website upgrade. With this web app you are able to see recent posts from different people, on discussions in Tech. It was built using the HackerNews API.

## Project Description:

This web app gives you the leverage to search for Posts from people using the search bar. Furtheremore, you would be able to go directly to the origin of the posts to see more about the Story that was posted by the author, this gives a better fluidity, in the way searches are narrowed for the end user.

## Reason for Technologies

This App was built using Reactjs with Nextjs as a wrapper Framework, this is because Next.js, is good for Server Side Rendering (SSR) and Search Engine Optimization (SEO). Thereby making it more user friendly, as well as providing much better performance by making the entire application faster.
Moreover, I used SASS, for styling it's lighter and very powerful to use, especially when you use it as a module ("style.module.sass"). Also used regular CSS for the global styling.

## Challengies faced

I faced some difficulties, where I wasn't able to get the API-Endpoints to new posts. This made me fetch posts with only URL's because the naming for the API posts is "Story".
However, after carefully reading the entire documentation, i saw at the button the API endpoint specific to new posts only, then I was now able to use it effectively according to the task given.

The reason for this error, was because I failed to realize at first glance that the documentation was not meant for the assignment purpose originally.

## Table of Contents:

- How to Build and run the project:
- How to use the Project:
- Roadmap
- Deployment
- License

## How to Build and run the project:

First, install all packages needed

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://github.com/HackerNews/API). This endpoint can be edited in `utils/dataHandler.js`.

## Development Roadmap

dataHandler: # data from the API
index: # Takes in the Major App components.
Posts: # This is the render components for all posts from the dataHandler
styles: # Folder for All styles in SASS and CSS

## How to use the project

This web app is very easy to use.

Step-1: # Open the Web app
Step-2: # Scroll down to view later posts
Step-3: # Click on any post of choice, it takes you to a new Tab.
Step-4: # Search for desired post at the search bar.
Step-5: # Thank you!

## Deployed on Vercel

Check out the app [HackerNews](https://hackernews-upgrade.herokuapp.com/) for more details.

## LICENSE

Copyright (c) 2022 David Adeola
Licensed MT
