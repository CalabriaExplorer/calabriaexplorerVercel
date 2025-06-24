import { useParams } from "react-router-dom";
import blogPosts from "../data/blogPosts";

function BlogPostPage() {
  const { slug } = useParams();

  // Получаем текущий язык ('en' или 'ru')
  const locale = navigator.language.startsWith("ru") ? "ru" : "en";

  const post = blogPosts[locale]?.[slug];

  if (!post) {
    return <div style={{ padding: "2rem" }}>❌ Статья не найдена.</div>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1>{post.title}</h1>

      {post.images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`le-castella-${index + 1}`}
          style={{ width: "100%", marginBottom: "1rem", borderRadius: "8px" }}
        />
      ))}

      <div
        style={{
          whiteSpace: "pre-wrap",
          lineHeight: "1.6",
          fontSize: "1.1rem",
        }}
      >
        {post.content}
      </div>
    </div>
  );
}

export default BlogPostPage;
