import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import BlogItem from "./components/BlogItem/BlogItem";

const initialBlogList = [
  {
    id: 1,
    title: "Valiant Finance Funds Unveils Innovative Digital Mining Funds.",
    content:
      "Although the token might face some downside, CORE could end 2024 at $5.85. A lot of new projects. ",
  },
  {
    title: "Why Bitcoin's Halving Won't Save You if the Economy Goes Down.",
    content:
      "The post Why is the Crypto Market Down Today? appeared first on Coinpedia Fintech News.",
  },
  {
    title: "Why is the Crypto Market Down Today? | Altcoin Analysis.",
    content:
      "esla confirmed its laying off more than 10% of its global workforce following weak first quarter.",
  },
];

function App() {
  const [blogList, setBlogList] = useState(initialBlogList);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onPost = (event) => {
    event.preventDefault();

    if (!title || !content) {
      alert("Please Enter content");
    } else {
      let newPost = {
        id: uuidv4(),
        title: title,
        content: content,
      };
      setBlogList([...blogList, newPost]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <>
      <div className="bg-container">
        <h1>Post Your Blog</h1>
        <div className="container">
          <div className="post-container">
            <form className="form-container" onSubmit={onPost}>
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <br />
              <textarea
                value={content}
                maxlength="100"
                onChange={(event) => setContent(event.target.value)}
              />
              <br />
              <button type="submit" className="post-btn">
                Create Post
              </button>
            </form>
          </div>
        </div>
        <ul className="card-container">
          {blogList.map((eachItem) => (
            <BlogItem cardDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
