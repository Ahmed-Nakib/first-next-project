export default async function getPost(id: string | number) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return result.json();
}
