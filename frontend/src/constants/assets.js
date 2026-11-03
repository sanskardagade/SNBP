/** Official SNBP University static assets (same origin as the live site). */
export const SNBP_ORIGIN = "https://snbpuniversity.com";

export function asset(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${SNBP_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export const logoWebp = asset("/assets/golden%20logo-BS4muviq.webp");
export const wordmarkBanner = asset("/assets/snbp-wordmark-banner-CJHOVqyv.webp");
export const heroIntroVideo = asset("/assets/SNBP-INTRO-3-optimized-9eCBg4Jd.mp4");
export const heroIntroGif = asset("/assets/SNBP-INTRO-6-C8yC5Nx3.gif");
export const aboutCampusImage = asset("/assets/SNBP%20Hero%20Image%20Mobile%202%20copy%202.jpg-DuRFS0g_.jpeg");
export const leaderBhosale = asset("/assets/Picture2-BWRKKp2H.jpg");
export const leaderVrushali = asset("/assets/Vrushali-Bhosale-2-DOGrwdu3.png");
export const recognitionTrophy = asset("/assets/recognition-trophy-DBhSOfP0.png");
export const favicon = asset("/favicon.png");
