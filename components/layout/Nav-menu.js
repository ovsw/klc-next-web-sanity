import Link from "next/link";
import Icon from "components/dynamic-icon";

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
export const BlogMenuOld = () => (
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

export const JourneyMenu = () => (
  <>
    <li className="menu-item">
      <Link href="/the-journey">Overview</Link>
    </li>
    <li className="menu-item">
      <Link href="/the-journey/planning-your-journey">
        1. Planning Your Journey
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/the-journey/packing-your-backpack">
        2. Packing Your Backpack
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/the-journey/tools-for-the-climb">
        3. Tools for the Climb
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/the-journey/reaching-the-peak">4. Reaching the Peak</Link>
    </li>
  </>
);
export const BlogMenu = () => (
  <>
    <li className="menu-item">
      <Link href="/tags/goal-setting">
        <a>
          <Icon name="FaCompass" size={"1.4em"} /> Goal Setting
        </a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/tags/inspiration">
        <a>
          <Icon name="FaSpa" size={"1.4em"} />
          Inspiration
        </a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/tags/motivation">
        <a>
          <Icon name="FaMountain" size={"1.4em"} />
          Motivation
        </a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/tags/finding-your-purpose">
        <a>
          <Icon name="FaRoute" size={"1.4em"} />
          Finding your Purpose
        </a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/tags/taking-responsibility">
        <a>
          <Icon name="FaUser" size={"1.4em"} />
          Taking Responsibility
        </a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/tags/staying-safe">
        <a>
          <Icon name="FaShieldAlt" size={"1.4em"} />
          Staying Safe
        </a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/tags/journaling">
        <a>
          <Icon name="FaFeatherAlt" size={"1.4em"} />
          Journaling
        </a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/tags/physical-fitness">
        <a>
          <Icon name="FaRunning" size={"1.4em"} />
          Physical Fitness
        </a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/tags/building-confidence">
        <a>
          <Icon name="FaFlag" size={"1.4em"} />
          Building Confidence
        </a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/tags/milestones">
        <a>
          <Icon name="FaMapMarkerAlt" size={"1.4em"} />
          Milestones
        </a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/tags/social-success">
        <a>
          <Icon name="FaStar" size={"1.4em"} />
          Social Success
        </a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/tags/working-with-others">
        <a>
          <Icon name="FaUsers" size={"1.4em"} />
          Working with Others
        </a>
      </Link>
    </li>
  </>
);
