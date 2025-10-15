import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

// Dummy data (có thể lấy từ client/src/assets/assets.js)
const movies = [
  {
    id: 324544,
    title: "In the Lost Lands",
    overview: "A queen sends the powerful and feared sorceress Gray Alys...",
    poster_path: "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
    release_date: "2025-02-27",
    vote_average: 6.4,
    runtime: 102,
    genres: [{ id: 28, name: "Action" }, { id: 14, name: "Fantasy" }]
  },
  // ...thêm các phim khác
]

// API lấy danh sách phim
app.get('/api/movies', (req, res) => {
  res.json(movies)
})

// API lấy chi tiết phim theo id
app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id == req.params.id)
  if (movie) res.json(movie)
  else res.status(404).json({ error: 'Movie not found' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`)
})