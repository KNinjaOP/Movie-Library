export default async function handler(req, res) {
  try {
    const apiKey = process.env.VITE_TMDB_KEY;
    const query = req.query.query || "";

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}&api_key=${apiKey}`
    );

    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: "Failed to search movies" });
  }
}
