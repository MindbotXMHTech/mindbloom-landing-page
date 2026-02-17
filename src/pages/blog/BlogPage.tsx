import { useState } from "react";
import { Link } from "react-router-dom";
import { BlogList } from "../../constants/blogData";

type BlogCardProps = {
  id: string;
  title: string;
  image: string;
};

const BlogCard = ({ title, image, id }: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${id}`}
      className="group flex w-full h-full flex-col gap-4 p-4 rounded-2xl items-center"
    >
      <div className="w-full aspect-square overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <p className="rf-body text-center min-h-14">{title}</p>
    </Link>
  );
};

function BlogPage() {
  const total = BlogList.length;
  const desktopVisibleCount = 3;
  const desktopCardWidth = 293;

  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const desktopMaxIndex = Math.max(total - desktopVisibleCount, 0);
  const desktopPageCount = desktopMaxIndex + 1;

  return (
    <div className="mt-14.75 w-full max-w-245 px-4 sm:px-6 md:px-8 flex flex-col items-center">
      <h4 className="rf-h4">บทความ</h4>

      <div className="hidden lg:flex w-full mt-9.5 flex-col items-center">
        <div className="w-full max-w-219.75 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${desktopIndex * desktopCardWidth}px)`,
            }}
          >
            {BlogList.map((item, index) => (
              <div key={item.id} className="relative w-73.25 shrink-0">
                {index < BlogList.length - 1 && (
                  <div className="pointer-events-none absolute right-0 top-4 bottom-4 w-px bg-[#e4d8cd]" />
                )}
                <BlogCard title={item.title} id={item.id} image={item.image} />
              </div>
            ))}
          </div>
        </div>

        {total > desktopVisibleCount && (
          <div className="mt-4 flex items-center gap-2">
            {Array.from({ length: desktopPageCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setDesktopIndex(index)}
                aria-label={`Go to desktop slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === desktopIndex
                    ? "w-6 bg-[#bcc0aa]"
                    : "w-2.5 bg-[#d9d9d9]"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="w-full mt-9.5 lg:hidden flex flex-col items-center">
        <div className="w-full max-w-[24rem] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
          >
            {BlogList.map((item) => (
              <div key={item.id} className="w-full shrink-0">
                <BlogCard title={item.title} id={item.id} image={item.image} />
              </div>
            ))}
          </div>
        </div>

        {total > 1 && (
          <div className="mt-3 flex items-center gap-2">
            {BlogList.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setMobileIndex(index)}
                aria-label={`Go to blog ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === mobileIndex
                    ? "w-6 bg-[#bcc0aa]"
                    : "w-2.5 bg-[#d9d9d9]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
