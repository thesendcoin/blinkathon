export default function utilCropGH(url: string) {
  const match = url.match(/https:\/\/github\.com\/([^\/]+(?:\/[^\/]+)?)/);

  if (match) {
    console.log(match[1]);
  }
  return match ? match[1] || "" : "";
}
