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
    alert("Just image with extension .png, .jpg, and .jpeg can be upload!");
    return null;
  }
}
export function parseDate(time) {
  let date = new Date(time);
  return (
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2) +
    " " +
    ("0" + date.getDate()).slice(-2) +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    date.getFullYear()
  );
}
