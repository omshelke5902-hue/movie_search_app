# 🎬 Movie Search App

A simple, responsive web app that lets users search for movies and instantly view results — including poster, title, and release year — using the OMDb REST API.

## 🔗 Live Demo
[https://omshelke5902-hue.github.io/movie-search-app/](https://github.com/omshelke5902-hue/movie_search_app.git/)


## ✨ Features
- 🔍 Search for any movie by title
- 🎞️ Displays movie poster, title, and release year
- 🧱 Results shown in a responsive grid layout
- ⚡ Real-time data fetched from a live REST API
- ⚠️ Error handling for invalid or missing search results

## 🛠️ Built With
- **HTML5** – structure
- **CSS3** – styling & responsive layout
- **JavaScript (ES6+)** – logic & DOM manipulation
- **Fetch API** – asynchronous HTTP requests
- **OMDb REST API** – movie data (JSON)

## 📂 Project Structure
```
movie-search-app/
├── index.html      # Main HTML structure
├── style.css        # Styling and responsive design
├── script.js         # API calls and DOM logic
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- A free API key from [OMDb API](https://www.omdbapi.com/apikey.aspx)


## 🌐 How It Works
1. User types a movie title and clicks **Search**
2. The app sends a request to the OMDb API using the Fetch API
3. The JSON response is parsed to extract movie titles, years, and posters
4. Results are rendered dynamically into a grid of movie cards
5. If no movies are found, an error message is shown instead

## 📖 What I Learned
- Making asynchronous API calls with `fetch()` and `async/await`
- Parsing and rendering JSON data from a real-world REST API
- Dynamically generating multiple DOM elements from an array of results
- Handling errors and edge cases in network requests
- Deploying a static site using GitHub Pages

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author
**Om Shelke**
- GitHub: [@Om Shelke](https://github.com/omshelke5902-hue)