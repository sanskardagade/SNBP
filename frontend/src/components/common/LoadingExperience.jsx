import { logoWebp } from "../../constants/assets.js";

export default function LoadingExperience() {
  return (
    <div className="loading-experience" role="status" aria-label="Loading SNBP University">
      <img src={logoWebp} alt="" />
      <p>SNBP University</p>
      <span className="loading-rule" aria-hidden="true" />
      <span className="sr-only">Loading university content…</span>
    </div>
  );
}
