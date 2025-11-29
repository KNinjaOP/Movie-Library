export default async function handler(req, res) {
  try {
    const apiKey = process.env.VITE_TMDB_KEY;

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );

    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: "Failed to load popular movies" });
  }
}
