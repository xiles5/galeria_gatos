function Post({ post }) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          {post.title}
        </h2>

        <p className="text-gray-600 mb-4">
          {post.description}
        </p>
<p className="text-gray-600 mb-4">
          {post.content}
        </p>
        <small className="text-gray-400">
          {post.created_at}
        </small>
      </div>

    </article>
  );
}

function App() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Galería de Gatos
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {postsData.map((post) => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
      </section>

    </main>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);