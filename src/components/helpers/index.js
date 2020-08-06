export function imageFilter(image) {
    if (image.size > 1024 * 1024 * 2)
        return alert("Cannot upload image with size more than 2mb");
    const imageArray = image.name.split(".");
    const imageExtension = imageArray[imageArray.length - 1].toLowerCase();
    if (imageExtension !== "png" &&
        imageExtension !== "jpg" &&
        imageExtension !== "jpeg")
        return alert("Cannot upload file except image!");
}
export function parseDate(time) {
    let date = new Date(time);
    return (
      ("0" + date.getDate()).slice(-2) +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      date.getFullYear() +
      " " +
      ("0" + date.getHours()).slice(-2) +
      ":" +
      ("0" + date.getMinutes()).slice(-2)
    );
  }