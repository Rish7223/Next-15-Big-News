import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface INewsCardProps {
  id: string;
  title: string;
  link: string;
  creator: null;
  description: string;
  content: string;
  pubDate: string;
  image: string;
  category: string;
}

const placeholderImage =
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg";

function NewsCard({ post }: { post: INewsCardProps }) {
  return (
    <div className="flex flex-col gap-2l p-1 ring-1 ring-gray-300 rounded-md">
      <section className="h-40 ">
        <Image
          src={post.image || placeholderImage}
          alt={post.title}
          width={100}
          height={100}
          className="w-full h-full object-contain rounded-mds"
        />
      </section>
      <section className="p-2">
        <h1 className="text-sm font-medium text-gray-900">{post.title}</h1>
      </section>
      <Link href={`/news/${post.id}`}>Read More</Link>
    </div>
  );
}

export default NewsCard;
