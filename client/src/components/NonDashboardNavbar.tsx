import { Bell, BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

const NonDashboardNavbar = () => {
  return (
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar__container">
        <div className="nondashboard-navbar__search">
          <Link href="/" className="nondashboard-navbar__brand">
            LMS
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Link
                href="/search"
                className="nondashboard-navbar__search-input"
              >
                {/* On smaller-than-small screens text will be hidden*/}
                <span className="hidden sm:inline"> Search Cources</span>
                <span className="sm:hidden">Search</span>
                <BookOpen className="nondashboard-navbar__search-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="nondashboard-navbar__actions">
        <button className="nondashboard-navbar__notification-button">
          <span className="nondashboard-navbar__notification-indictor" />
          <Bell className="nondashboard-navbar__notification-icon" />
        </button>
        {/*Sign In buttons */}
      </div>
    </nav>
  );
};

export default NonDashboardNavbar;
