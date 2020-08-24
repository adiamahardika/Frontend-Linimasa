export function imageFilter(image) {
  if (image.size > 1024 * 1024 * 2) {
    alert("Cannot upload image with size more than 2mb");
    return null;
  }
  const imageType = image.type;
  if (
    imageType !== "image/png" &&
    imageType !== "image/jpg" &&
    imageType !== "image/jpeg"
  ) {
    alert("Only image with extension .png, .jpg, and .jpeg can be upload!");
    return null;
  }
}
export function videoFilter(video) {
  if (video.size > 1024 * 1024 * 12) {
    alert("Cannot upload video with size more than 12mb");
    return null;
  }
  const videoType = video.type;
  if (videoType !== "video/mp4") {
    alert("Only video with extension .mp4 can be upload!");
    return null;
  }
}
export function parseDate(time) {
  let date = new Date(time);
  return (
    ("0" + date.getDate()).slice(-2) +
    "/" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    date.getFullYear() +
    ", " +
    ("0" + date.getHours()).slice(-2) +
    "." +
    ("0" + date.getMinutes()).slice(-2) +
    " WIB"
  );
}
