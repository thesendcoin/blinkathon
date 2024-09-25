export default function utilCropGH(url: string, hideUsername: boolean) {
  let match = url.match(/https:\/\/github\.com\/([^\/]+(?:\/[^\/]+)?)/);
  if (hideUsername) {
    match = url.match(/https:\/\/github\.com\/[^\/]+\/([^\/]+)/);
  }

  if (match) {
    console.log(match[1]);
  }
  return match ? match[1] || "" : "";
}
