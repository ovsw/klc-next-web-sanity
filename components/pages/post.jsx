import Link from "next/link";

import ProsableText from "components/prosable-text";

import PageTitleBanner from "src/components/PageTitleBanner";
import PostComments from "components/blog/post-comments";
import PostCommentsForm from "components/blog/post-comments-form";
import BlogSidebar from "components/blog/sidebar";
import Author from "components/blog/post-author";
import NavPrevNext from "components/blog/post-nav-prev-next";
import PostTagsAndShare from "components/blog/post-tag-share";
import PostMetaHeader from "components/blog/post-meta";
import PostImage from "components/blog/post-image";

const PostPage = ({ data }) => {
  // console.log("BLOG PAGE DATA:", pageData);
  const { page, site } = data;
  return (
    <>
      <PageTitleBanner pageName={page?.title} title={page?.title} />
      <div className="section-padding">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 mb-md-80">
              {/* post details */}
              <article className="post post_list style_2 post_details mb-0 wow fadeInDown">
                <PostImage image={page.mainImage} />

                <div className="post_caption">
                  <PostMetaHeader
                    author={page?.author.name}
                    date={new Date(page?.publishedAt).toLocaleDateString(
                      "en-US",
                      {
                        // weekday: "long",
                        // year: "none",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  />
                  {/* ========== MAIN CONTENT START ========== */}
                  <ProsableText value={page?.rteBody} />
                  {/* <h4 className="post_title">
                    <Link href="/blog-details">
                      Writing Multiplayer Text Adventure Engine In Node Game
                      Engine Server Design Optimizing For Mobile
                    </Link>
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quiaesy voluptas aspernatur aut odit aut
                    fugit sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est qui
                    dolorem ipsum quia dolor sit amet consectetur adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatu
                  </p>
                  <blockquote>
                    <h4 className="quote_title">
                      Smashing Podcast Episode With Paul Boag What Is Conversion
                      Optimization Inspired Design Decisions
                    </h4>
                    <cite className="quote_author">Bailey Dobson</cite>
                  </blockquote>
                  <h5>Ensure Your Design System Helps To Achieve Purpose </h5>
                  <p>
                    No one rejects, dislikes, or avoids pleasure itself, because
                    it is pleasure, but because those who do not know how to
                    pursue pleasure rationally encounter consequences that are
                    extremely painful. Nor again is there anyone who loves or
                    pursues or desires to obtain pain of itself, because it is
                    pain, but because occasionally circumstances occur in which
                    toil and pain can procure him some great pleasure.
                  </p> */}
                  {/* ========== MAIN CONTENT END ========== */}
                </div>

                <PostTagsAndShare tags={page?.categories} />

                <Author />

                <NavPrevNext
                  previousPost={page?.previousPost}
                  nextPost={page?.nextPost}
                />
              </article>

              {/* <PostComments /> */}
              {/* <PostCommentsForm /> */}
              {/* post details */}
            </div>
            <BlogSidebar site={site} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
