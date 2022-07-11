import Link from "next/link";

const PostBody = ({ blok }) => {
  return (
    <article className="post post_list style_2 post_details mb-0 wow fadeInDown">
      <div className="post_img">
        <img
          src="/assets/images/blog/list/1.jpg"
          alt="img"
          className="image-fit"
        />
      </div>
      <div className="post_caption">
        <ul className="post_meta">
          <li>
            <i className="fal fa-user" />
            Sheila Jones
          </li>
          <li>
            <i className="fal fa-calendar-alt" />
            25 Mar 2021
          </li>
          {/* <li>
            <i className="fal fa-comment-lines" />
            Comments (05)
          </li> */}
        </ul>
        <h4 className="post_title">
          <Link href="/blog-details">
            Writing Multiplayer Text Adventure Engine In Node Game Engine Server
            Design Optimizing For Mobile
          </Link>
        </h4>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quiaesy voluptas aspernatur
          aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum
          quia dolor sit amet consectetur adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatu
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
          No one rejects, dislikes, or avoids pleasure itself, because it is
          pleasure, but because those who do not know how to pursue pleasure
          rationally encounter consequences that are extremely painful. Nor
          again is there anyone who loves or pursues or desires to obtain pain
          of itself, because it is pain, but because occasionally circumstances
          occur in which toil and pain can procure him some great pleasure.
        </p>
      </div>
      {/* Post Tags & Share Start */}
      <div className="post_tags_share">
        <div className="post_tags">
          <h6>Popular Tags: </h6>
          <div className="tags">
            <Link href="/blog-grid">Cleaning</Link>
            <Link href="/blog-grid">House</Link>
            <Link href="/blog-grid">Office</Link>
            <Link href="/blog-grid">Kitchen</Link>
          </div>
        </div>
        <div className="post_share">
          <h6>Share: </h6>
          <ul className="social">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-behance" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Post Tags & Share End */}
      {/* Post Author Start */}
      <div className="post_author">
        <img
          src="/assets/images/blog/author.jpg"
          alt="img"
          className="image-fit"
        />
        <div className="text">
          <h5 className="mb-2">Nathan George</h5>
          <p className="mb-2">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatu vel illum qui dolorem eum fugiat quo
            voluptas nulla pariano one rejects, dislikes, or avoids pleasure
            itself, because
          </p>
          <ul className="social">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-behance" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Post Author End */}
      {/* Post Navigation Start */}
      <ul className="post_navigation">
        <li>
          <div className="image">
            <img
              src="/assets/images/blog/1.jpg"
              alt="img"
              className="image-fit"
            />
          </div>
          <div className="text">
            <h6 className="mb-0">
              <Link href="/blog-details">
                Build Seamless Spreadshet Import Experience
              </Link>
            </h6>
            <p className="mb-0">
              <strong>
                <i className="fal fa-calendar-alt" />{" "}
              </strong>
              <Link href="/blog-grid">25 May 2021</Link>
            </p>
          </div>
        </li>
        <li>
          <div className="image">
            <img
              src="/assets/images/blog/2.jpg"
              alt="img"
              className="image-fit"
            />
          </div>
          <div className="text">
            <h6 className="mb-0">
              <Link href="/blog-details">
                Creating Online Environme Work Well Older
              </Link>
            </h6>
            <p className="mb-0">
              <strong>
                <i className="fal fa-calendar-alt" />{" "}
              </strong>
              <Link href="/blog-grid">25 May 2021</Link>
            </p>
          </div>
        </li>
      </ul>
      {/* Post Navigation End */}
    </article>
  );
};

export default PostBody;
