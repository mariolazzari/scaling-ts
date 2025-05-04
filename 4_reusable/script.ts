import { Cities } from "./city";
import { fetchVideo, Video } from "./Video";

const city: Cities.City = {
  name: "New York",
  country: "USA",
};

console.log(Cities.displayCity(city)); // Output: New York, USA

(async () => {
  try {
    const video: Video = await fetchVideo(10);
    console.log(video); // Output: Video object
  } catch (error) {
    console.error(error);
  }
})();
