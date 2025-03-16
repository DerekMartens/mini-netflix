## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Mini Netflix

### Description

This is an exercise to demonstrate that one has a working knowledge of HTML, CSS, and JavaScript (NextJS).

### Requirements

- Build a minimal two-page using NextJS
- The first page will contain a list of movie poster thumbnails.
- When a poster thumbnail is clicked, it will redirect to a “movie details” page.
- On the movie details page, the user should see a poster, title, description, and rating for the movie.
- When this page is first loaded, fetch the movie data from an external API.
- You should be able to load different movies by updating the URL. For example, typing `http://localhost:8080/movie/details/123` or `http://localhost:8080/movie/details?movieId=123` in your browser bar should load the movie details for the movie with ID #123.
- Please include at least 5 different movies.
- ES6+ JavaScript (NextJS or Angular)
- SCSS or Tailwind
- No CSS framework should be used (no bootstrap, etc., show us your SCSS or Tailwind skills)
- Semantic HTML
- Responsive
- WCAG Accessible (as much as possible, don’t spend too much time)
- Google Chrome support (no need to test other browsers for this exercise)
- Build Process (Gulp, Grunt, Webpack, etc)
