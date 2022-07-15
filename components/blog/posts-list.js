import PostCard from "components/blog/posts-card";

const PostList = ({
  posts,
  title = "[title here]",
  showEyeBrow = true,
  eyebrowText = "News & Blog",
}) => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title wow fadeInUp">
              {showEyeBrow && (
                <p className="subtitle">
                  <i className="fal fa-book" />
                  {eyebrowText}
                </p>
              )}
              <h3 className="title">{title}</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {posts?.map((post, i) => (
            <PostCard key={i} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostList;
