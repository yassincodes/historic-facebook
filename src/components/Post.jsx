import { Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Post({ pic, name, username, text, image, hashtag, hashtagLink }) {
  return (
    <div className="post-container">
      <div className="post">
        <Link to={`/${username}`} className="post-header">
          <div>
            <Avatar src={pic} status="available" size="md" />
          </div>
          <div className="post-character-name">{name}</div>
        </Link>
        <div className="post-content">
          {text}{" "}
          <Link
            to={`/${hashtagLink}`}
            style={{
              color: "#1877f2",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            #{hashtag}
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "80vw", padding: "20px" }} src={image} />
          </div>
        </div>
        <div className="post-like-comment">
          <div className="post-like">
            <div>الإعجاب</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-thumb-up"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
              </svg>
            </div>
          </div>
          <div className="post-comment">
            <div>التعليق</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-message-dots"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                <line x1="12" y1="11" x2="12" y2="11.01" />
                <line x1="8" y1="11" x2="8" y2="11.01" />
                <line x1="16" y1="11" x2="16" y2="11.01" />
              </svg>
            </div>
          </div>
          <div className="post-share">
            <div>مشاركة</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-share-3"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
