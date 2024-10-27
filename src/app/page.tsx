import NewsCard, { INewsCardProps } from "@/components/NewsCard";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: INewsCardProps[] = await res.json();

  return (
    <div className="h-screen w-full p-10 flex flex-col gap-10">
      <h1 className="text-[2rem] font-medium text-center">Big News</h1>

      <section className="grid grid-cols-4 gap-4">
        {data?.map((postUnit) => {
          return <NewsCard key={postUnit?.id} post={postUnit} />;
        })}
      </section>
    </div>
  );
}
