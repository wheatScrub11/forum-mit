
import "./Post.css"


const Post = () => {
  return (
    <div className="post">
      <div className="top">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCJpmc7wNF8Ti2Tuh_hcIRZUGOc23KBTx2A&s" alt="" />
        <p className="userName">wheatScrub11</p>
        <div className="postDate">12-23-12</div>
      </div>
      <div className="mid">
        <div className="postTitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, eaque obcaecati? Facere iste sequi eum necessitatibus maxime s illum.</div>
        <p className="main-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
          dolorum quas quaerat nobis eveniet aut, maiores itaque hic odio animi,
          nisi adipisci sint placeat sit quibusdam, numquam recusandae? Et,
          ipsum!
        </p>
      </div>
      <div className="bottom">
        <img className="commentsIcon" src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt="" />
        <button className="comments">Comentarios</button>
      </div>
    </div>
  );
};

export default Post;
