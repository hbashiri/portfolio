export function calculateBannerHeight(height, width) {
  var bannerHeight = height < width ? height > 900 ? 480 : height / 3 : width / 2;
  return bannerHeight > 300 ? bannerHeight : 300;
}
