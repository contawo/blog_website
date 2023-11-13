import Banner from "@/components/blog/Banner";
import BlogList from "@/components/blog/BlogList";
import Header from "@/components/blog/Header";
import PageTitle from "@/components/utils/PageTitle";
import { client } from "@/lib/content/client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contawo | Blogs',
    description: 'Welcome to the Contawo Blog - Where Curiosity and a Dash of Humor Collide! Dive into Engaging Articles, Expert Insights, and Captivating Stories on Technology, Development, Projects, Lifestyle, and More. Join our Friendly Community of Thinkers and Embark on a Journey of Intellectual Exploration. No Boring Stuff Allowed - Prepare to Laugh, Learn, and Unleash Your Inner Curiosity!',
    metadataBase: new URL("https://www.contawo.com"),
    keywords: ["JavaScript", "Next.js", "HTML5", "CSS3", "React.js", "blogs", "lifestyle", "Typescript"],
    authors: {
      name: "Awonke Mnotoza",
      url: "link.com"
    },
    creator: "Awonke Mnotoza",
    publisher: "Awonke Mnotoza",
    robots: {
      nosnippet: false,
      notranslate: false,
      noimageindex: true,
      noarchive: true,
      "max-image-preview": "none",
      "max-video-preview": -1,
      "max-snippet": -1
    },
    openGraph: {
      title: "Contawo Blogs",
      description: "Contawo is blog website that is your one stop shop for increasing your programming skills with the best practices."
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contawo',
      description: 'Contawo is a go-to destination for anyone who is interested in programming. Contawo is designed to cater to beginners, intermediate and advanced learners. Contawo also features a vibrant community of programmers who engage in discussions, share ideas, and collaborate on projects. Whether you are looking to learn a new programming language, sharpen your skills, or explore new programming concepts, we have something for everyone.',
      creator: 'Awonke Mnotoza',
      images: ['https://nextjs.org/og.png'],
    }
}

const fetchBlogs = async () => {
    const response = await client.getEntries({content_type: 'blogPost'})
    return response.items;
}

export default async function Blogs() {
    const blogPosts = await fetchBlogs();

    return (
        <main>
            <Header />
            <PageTitle title="The articles" />
            <Banner />
            <BlogList posts={blogPosts} />
        </main>
    )
}