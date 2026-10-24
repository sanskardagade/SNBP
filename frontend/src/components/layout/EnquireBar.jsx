import { Link } from "react-router-dom";

export default function EnquireBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold/30 bg-gold shadow-lg lg:hidden">
      <Link
        to="/admissions"
        className="flex min-h-[52px] items-center justify-center text-sm font-extrabold uppercase tracking-[.12em] text-purpledark"
      >
        Enquire Now
      </Link>
    </div>
  );
}
