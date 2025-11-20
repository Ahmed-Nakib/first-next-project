import getPost from "@/lib/getPost";

async function PostDetails({ params }: { params: { id: string } }) {
    const {id} = params;
    const post = await getPost(id);
    return ( 
        <div>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
        </div>
     );
}

export default PostDetails;