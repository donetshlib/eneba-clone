const BASE_URL = "http://localhost:5174";

export async function fetchGames(search) {
  const url = search?.trim()
    ? `${BASE_URL}/list?search=${encodeURIComponent(search.trim())}`
    : `${BASE_URL}/list`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("API request failed");
  return await res.json();
}
