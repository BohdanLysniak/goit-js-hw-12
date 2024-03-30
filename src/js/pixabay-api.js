import axios from "axios";
export async function getImage(query) {
  const BASE_URL = "https://pixabay.com/api/"
  const params = {
    key: "43011845-ca4f94d8d544ea7c100ad449b",
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  const res = await axios.get(BASE_URL, { params });
  return res.data;
};