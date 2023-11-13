import BlogMain from "@/components/blog/BlogMain";
import { client } from "@/lib/content/client";

const fetchBlog = async (id: string) => {
    const response = await client.getEntry(id);
    return response;
}

export default async function BlogPage({params} : {params: {blogId: string}}) {
    const blogData = await fetchBlog(params.blogId);

    return (
        <BlogMain post={blogData} slug={params.blogId} />
    )
}