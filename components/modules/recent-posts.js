import PostCard from "components/postCard";

const PostList = ({ posts }) => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title wow fadeInUp">
              <p className="subtitle">
                <i className="fal fa-book" />
                News &amp; Blog
              </p>
              <h3 className="title">Get Coaching News, Articles &amp; Tips</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {posts.map((post, i) => (
            <PostCard key={i} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostList;
