import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BlogList } from "../../constants/blogData";
import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/utils";

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
  const { language, t } = useLanguage();
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => {
    const list = BlogList.filter((item) =>
      getLocalizedText(item.title, language)
        .toLowerCase()
        .includes(searchText.toLowerCase()),
    );
    return sortOrder === "newest" ? [...list].reverse() : list;
  }, [language, searchText, sortOrder]);

  const total = filtered.length;
  const desktopVisibleCount = 3;
  const desktopCardWidth = 293;
  const desktopMaxIndex = Math.max(total - desktopVisibleCount, 0);
  const desktopPageCount = desktopMaxIndex + 1;

  const handleSearch = (value: string) => {
    setSearchText(value);
    setDesktopIndex(0);
    setMobileIndex(0);
    mobileCarouselRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  const handleSort = (order: "newest" | "oldest") => {
    setSortOrder(order);
    setSortOpen(false);
    setDesktopIndex(0);
    setMobileIndex(0);
    mobileCarouselRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  const handleMobileScroll = () => {
    const container = mobileCarouselRef.current;

    if (!container) {
      return;
    }

    const nextIndex = Math.round(container.scrollLeft / container.clientWidth);

    if (nextIndex !== mobileIndex) {
      setMobileIndex(nextIndex);
    }
  };

  const scrollToMobileCard = (index: number) => {
    const container = mobileCarouselRef.current;

    if (!container) {
      return;
    }

    container.scrollTo({
      left: container.clientWidth * index,
      behavior: "smooth",
    });
    setMobileIndex(index);
  };

  return (
    <div className="mt-14.75 w-full max-w-245 px-4 sm:px-6 md:px-8 flex flex-col items-center">
      <motion.h4
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rf-h4"
      >
        {t({ th: "บทความ", en: "Blog" })}
      </motion.h4>

      {/* Search & Sort */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="flex gap-3 w-full max-w-219.75 mt-6 px-4 md:px-0"
      >
        <div className="flex items-center w-full md:w-45 gap-2 border border-[#E5DACF] rounded-full px-4 py-2 bg-white">
          <svg
            className="w-4 h-4 text-neutral-grey shrink-0"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M20 20L16.5 16.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={t({ th: "ค้นหาบทความ", en: "Search articles" })}
            className="outline-none bg-transparent rf-small text-neutral-grey w-full"
          />
        </div>
        <div className="relative">
          <button
            type="button"
            onClick={() => setSortOpen((o) => !o)}
            className={`flex items-center gap-2  rounded-full px-4 py-2 rf-small transition-colors ${
              sortOpen
                ? "border-[#CACFC3] bg-[#CACFC3] text-white border"
                : "border-none"
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6H20M7 12H17M10 18H14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            {/* {sortOrder === "newest" ? "ใหม่สุด - เก่าสุด" : "เก่าสุด - ใหม่สุด"} */}
          </button>
          {sortOpen && (
            <div className="absolute right-0 top-full mt-2 w-44 bg-white border border-[#E5DACF] rounded-2xl overflow-hidden shadow-md z-10">
              <button
                type="button"
                onClick={() => handleSort("newest")}
                className={`w-full text-left px-4 py-3 rf-small hover:bg-[#F5EDE6] transition-colors ${sortOrder === "newest" ? "text-[#CACFC3] font-semibold" : "text-neutral-grey"}`}
              >
                {t({ th: "ใหม่สุด - เก่าสุด", en: "Newest - Oldest" })}
              </button>
              <div className="h-px bg-[#E5DACF]" />
              <button
                type="button"
                onClick={() => handleSort("oldest")}
                className={`w-full text-left px-4 py-3 rf-small hover:bg-[#F5EDE6] transition-colors ${sortOrder === "oldest" ? "text-[#CACFC3] font-semibold" : "text-neutral-grey"}`}
              >
                {t({ th: "เก่าสุด - ใหม่สุด", en: "Oldest - Newest" })}
              </button>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        className="hidden lg:flex w-full mt-9.5 flex-col items-center"
      >
        <div className="w-full max-w-219.75 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${desktopIndex * desktopCardWidth}px)`,
            }}
          >
            {filtered.map((item, index) => (
              <div key={item.id} className="relative w-73.25 shrink-0">
                {index < filtered.length - 1 && (
                  <div className="pointer-events-none absolute right-0 top-4 bottom-4 w-px bg-[#e4d8cd]" />
                )}
                <BlogCard
                  title={getLocalizedText(item.title, language)}
                  id={item.id}
                  image={item.image}
                />
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
                aria-label={t({
                  th: `ไปยังสไลด์เดสก์ท็อป ${index + 1}`,
                  en: `Go to desktop slide ${index + 1}`,
                })}
                className={`h-2.5 rounded-full transition-all ${
                  index === desktopIndex
                    ? "w-6 bg-[#bcc0aa]"
                    : "w-2.5 bg-[#d9d9d9]"
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        className="w-full mt-9.5 lg:hidden flex flex-col items-center"
      >
        {/* <div
          ref={mobileCarouselRef}
          onScroll={handleMobileScroll}
          className="w-full max-w-[24rem] overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        > */}
        <div
          ref={mobileCarouselRef}
          onScroll={handleMobileScroll}
          className="w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex">
            {filtered.map((item) => (
              <div key={item.id} className="w-full shrink-0 snap-center">
                <BlogCard
                  title={getLocalizedText(item.title, language)}
                  id={item.id}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>

        {total > 1 && (
          <div className="mt-3 flex items-center gap-2">
            {filtered.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToMobileCard(index)}
                aria-label={t({
                  th: `ไปยังบทความ ${index + 1}`,
                  en: `Go to blog ${index + 1}`,
                })}
                className={`h-2.5 rounded-full transition-all ${
                  index === mobileIndex
                    ? "w-6 bg-[#bcc0aa]"
                    : "w-2.5 bg-[#d9d9d9]"
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default BlogPage;
