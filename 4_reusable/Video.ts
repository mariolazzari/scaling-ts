// orangevalleycaa.org/api/videos/10

export type Video = {
  id: string;
  video_url: string;
  name: string;
  description: string;
  duration: string;
  created_by: string;
  image: string;
  thumbnail: string;
  cropped: string;
  file_name_original: string;
  popularity: string;
  category_id: string;
  category: string;
  keywords: string;
};

export async function fetchVideo(id: number): Promise<Video> {
  const response = await fetch(`https://orangevalleycaa.org/api/videos/${id}`);
  if (!response.ok) {
    throw new Error(`Network response was not ok:${response.statusText}`);
  }
  const data: Video = await response.json();

  return data;
}
