import Link from "next/link";

export const HomeMenu = () => (
  <>
    <li className="menu-item">
      <Link href="/">Home v1</Link>
    </li>
    <li className="menu-item">
      <Link href="/index-2">Home v2</Link>
    </li>
    <li className="menu-item">
      <Link href="/index-3">Home v3</Link>
    </li>
  </>
);
export const PageMenu = () => (
  <>
    <li className="menu-item">
      <Link href="/">Children Monthly Life Coaching</Link>
    </li>
    <li className="menu-item">
      <Link href="/">Teen Monthly Life Coaching</Link>
    </li>
    <li className="menu-item">
      <Link href="/">Single Life Coaching Session</Link>
    </li>
  </>
);

export const CoursesMenu = () => (
  <>
    <li className="menu-item">
      <Link href="/courses">Courses</Link>
    </li>
    <li className="menu-item">
      <Link href="/course-details">Course Details</Link>
    </li>
  </>
);
export const BlogMenu = () => (
  <>
    <li className="menu-item">
      <Link href="/">Blog Category 1</Link>
    </li>
    <li className="menu-item">
      <Link href="/">Blog Category 2</Link>
    </li>
    <li className="menu-item">
      <Link href="/">Blog Category 3</Link>
    </li>
  </>
);
export const PortfolioMenu = () => (
  <>
    <li className="menu-item">
      <Link href="/portfolio-grid">Portfolio Grid</Link>
    </li>
    <li className="menu-item">
      <Link href="/portfolio-gallery">Portfolio Gallery</Link>
    </li>
    <li className="menu-item">
      <Link href="/portfolio-masonry">Portfolio Masonry</Link>
    </li>
    <li className="menu-item">
      <Link href="/portfolio-details">Portfolio Details</Link>
    </li>
  </>
);
