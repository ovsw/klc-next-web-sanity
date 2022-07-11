import Link from "next/link";

const SidebarTags = () => {
  return (
    <div className="sidebar_widget wow fadeInUp">
      <h5 className="widget_title">Popular Tags</h5>
      <div className="tags">
        <Link href="/blog-grid">Business</Link>
        <Link href="/blog-grid">Corporate</Link>
        <Link href="/blog-grid">HTML</Link>
        <Link href="/blog-grid">Art</Link>
        <Link href="/blog-grid">Finance</Link>
        <Link href="/blog-grid">Investment</Link>
        <Link href="/blog-grid">CSS</Link>
        <Link href="/blog-grid">Coach</Link>
        <Link href="/blog-grid">Planing</Link>
        <Link href="/blog-grid">Creative</Link>
        <Link href="/blog-grid">Health</Link>
      </div>
    </div>
  );
};

export default SidebarTags;
