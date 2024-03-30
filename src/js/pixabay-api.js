export function getImage(query) {
  const BASE_URL = "https://pixabay.com/api/"
  const params = new URLSearchParams({
    key: "43011845-ca4f94d8d544ea7c100ad449b",
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  })

  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}