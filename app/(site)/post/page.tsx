import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function GetAllPosts() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Latest Blog Posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((item: any) => (
          <div
            key={item.id}
            className="bg-white shadow-xl rounded-3xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 line-clamp-2">
              {item.title}
            </h2>

            <p className="text-gray-600 mb-6 line-clamp-3">
              {item.body}
            </p>

            <Link
              href={`/post/${item.id}`}
              className="mt-auto inline-block bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
