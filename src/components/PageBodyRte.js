import Link from "next/link";
import RichTextRenderer from "./richTextRenderer";

const PostBody = ({ blok }) => {
  const { body_rte } = blok;
  return (
    <article className="customRte post post_list style_2 post_details mb-0 wow fadeInDown">
      <RichTextRenderer data={body_rte} />

      {/* <div className="post_caption">

        <h3>
          <Link href="/blog-details">
            Nemo enim ipsam voluptatem quiaesy voluptas aspernatur aut odit aut
            fugit sed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt.
          </Link>
        </h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quiaesy voluptas aspernatur
          aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
          consectetur adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatu
        </p>
        <blockquote>
          <h4 className="quote_title">
            Cupidatat id consequat nulla ut non mollit dolore elit enim sint
            proident est excepteur. Amet laboris ad velit qui mollit ea minim
            labore excepteur non. Sint fugiat deserunt excepteur et ex laboris
            qui consectetur amet.
          </h4>
          <cite className="quote_author">Quote Author</cite>
        </blockquote>
        <h5>Ensure Your Design System Helps To Achieve Purpose </h5>
        <p>
          Est minim in ullamco magna aliquip deserunt dolor nostrud do sint sint
          anim fugiat amet. Pariatur occaecat aliquip incididunt Lorem et ea
          ullamco enim anim labore culpa reprehenderit non. Elit esse Lorem
          exercitation id anim velit magna officia ex anim do sint quis ad. Enim
          dolore aliqua pariatur mollit sunt do eiusmod nulla quis ut pariatur
          esse. Ea fugiat pariatur commodo esse ut ex irure sunt voluptate esse
          sunt esse anim. Irure aliquip cupidatat adipisicing elit veniam cillum
          ex laboris id est sit nisi nostrud commodo. Ullamco sit occaecat Lorem
          ea et nulla.
        </p>
      </div> */}
    </article>
  );
};

export default PostBody;
