import Head from 'next/head';
import React from 'react';
import firstPostData from "../../content/posts/1.json";
import secondPostData from "../../content/posts/2.json";
import thirdPostData from "../../content/posts/3.json";

export async function getServerSideProps({ params: { id } }) {

    console.log('[PostPage] getStaticProps():', id);
    const post = id === "1" ? firstPostData : id === "2" ? secondPostData : thirdPostData

    return {
        props: { post },
    };
}

const FirstPostPage = ({ post: { title, date, body } }) => {
    console.log("[FirstPostPage] render()");
    return (
        <div>
            <Head>
                <title>{title} - Single post page</title>
            </Head>
            <p>{date}</p>
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    )
}

export default FirstPostPage
