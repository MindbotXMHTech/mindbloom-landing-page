import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/utils";
import {
  loadPublicBlogPosts,
  type PublicBlogPost,
} from "../../lib/blogContent";

type BlogCardProps = {
  slug: string;
  title: string;
  image: string;
};

const BlogCard = ({ title, image, slug }: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${slug}`}
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
  const [posts, setPosts] = useState<PublicBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let active = true;

    const loadPosts = async () => {
      setLoading(true);
      const nextPosts = await loadPublicBlogPosts();

      if (active) {
        setPosts(nextPosts);
        setLoading(false);
      }
    };

    void loadPosts();

    return () => {
      active = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const list = posts.filter((item) =>
      getLocalizedText(item.title, language)
        .toLowerCase()
        .includes(searchText.toLowerCase()),
    );
    return sortOrder === "newest" ? [...list].reverse() : list;
  }, [language, posts, searchText, sortOrder]);

  const total = filtered.length;
  const hasSearch = searchText.trim().length > 0;

  const handleSearch = (value: string) => {
    setSearchText(value);
    mobileCarouselRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  const handleSort = (order: "newest" | "oldest") => {
    setSortOrder(order);
    setSortOpen(false);
    mobileCarouselRef.current?.scrollTo({ left: 0, behavior: "smooth" });
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
        className="flex w-full mt-9.5 flex-col items-center"
      >
        {!loading && total === 0 ? (
          <div className="panel w-full max-w-219.75 p-8 text-center">
            <h3 className="rf-h5">
              {hasSearch
                ? t({ th: "ไม่พบบทความที่ค้นหา", en: "No matching articles" })
                : t({ th: "ยังไม่มีบทความ", en: "No articles yet" })}
            </h3>
            <p className="rf-small text-neutral-grey mt-2">
              {hasSearch
                ? t({
                    th: "ลองล้างคำค้นหาหรือกลับมาตรวจอีกครั้งภายหลัง",
                    en: "Try clearing the search or check again later.",
                  })
                : t({
                    th: "ระบบกำลังรอข้อมูลบทความจาก Supabase",
                    en: "The blog is waiting for content from Supabase.",
                  })}
            </p>
            {hasSearch ? (
              <button
                type="button"
                className="button secondary mt-4"
                onClick={() => handleSearch("")}
              >
                {t({ th: "ล้างคำค้นหา", en: "Clear search" })}
              </button>
            ) : null}
          </div>
        ) : (
          <div className="w-full max-w-219.75">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-1 md:gap-x-2 gap-y-0 xl:gap-x-3 xl:gap-y-1">
              {filtered.map((item) => (
                <div key={item.id} className="min-w-0">
                  <BlogCard
                    title={getLocalizedText(item.title, language)}
                    slug={item.slug}
                    image={item.image}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default BlogPage;
