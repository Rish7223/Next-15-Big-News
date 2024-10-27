import { INewsCardProps } from "@/components/NewsCard";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );

  return posts?.map((postUnit: INewsCardProps) => ({
    slug: String(postUnit?.id),
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function page({ params }: { params: any }) {
  const { slug } = await params;
  const post = await fetch(`https://fakestoreapi.com/products/${slug}`);
  const data: INewsCardProps = await post.json();

  if (!data) {
    return <>data Loading...</>;
  }

  return (
    <div className=" h-screen w-full p-10 flex flex-col gap-4 ">
      <p className="text-blue-700"> Go back</p>
      <section className="w-96">
        <Image src={data.image} width={500} height={200} alt={data?.title} />
      </section>
      <section>
        <p>{data?.title}</p>
        <p>{data?.description}</p>
      </section>
    </div>
  );
}

export default page;
