"use client";
import { useRouter } from 'next/router';

function PostPage() {
    const router = useRouter();
    const { slug } = router.query; // Get the dynamic "slug" value

    return (
        <div>
            <h1>Post: {slug}</h1>
            <p>This is dynamic post with slug: {slug}</p>
        </div>
    )
}

export default PostPage;
