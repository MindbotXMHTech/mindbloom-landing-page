import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import Snackbar from "@mui/material/Snackbar";
import { svgs } from "../../constants/svgs";
import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/utils";
import { loadPublicBlogPost, type PublicBlogPost } from "../../lib/blogContent";

const PUBLIC_SITE_URL = (
  import.meta.env.VITE_PUBLIC_SITE_URL || "https://www.mindbloom-wellness.com"
).replace(/\/+$/, "");

function isLocalHost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1" ||
    hostname.endsWith(".local")
  );
}

function getYouTubeVideoId(input?: string) {
  if (!input) return "";

  const raw = input.trim();
  if (!raw) return "";

  if (!raw.startsWith("http")) return raw;

  try {
    const url = new URL(raw);
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.replace("/", "");
    }

    if (url.hostname.includes("youtube.com")) {
      if (url.pathname.startsWith("/shorts/")) {
        return url.pathname.split("/")[2] || "";
      }
      return url.searchParams.get("v") || "";
    }
  } catch {
    return "";
  }

  return "";
}

function BlogDetailPage() {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const [blog, setBlog] = useState<PublicBlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    let active = true;

    const loadBlog = async () => {
      setLoading(true);
      const nextBlog = await loadPublicBlogPost(slug ?? "");

      if (active) {
        setBlog(nextBlog);
        setLoading(false);
      }
    };

    void loadBlog();

    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="mt-14.75 w-full l:max-w-212.5 px-4 sm:px-6 md:px-8 mx-auto">
        <h1 className="rf-h4 text-center">Loading...</h1>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="mt-14.75 w-full l:max-w-212.5 px-4 sm:px-6 md:px-8 mx-auto">
        <h1 className="rf-h4 text-center">{t({ th: "ไม่พบข้อมูล", en: "No data" })}</h1>
      </div>
    );
  }

  const videoId = getYouTubeVideoId(blog.youtubeId);
  const youtubeEmbedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    : "";
  const youtubeThumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "";

  const getSharePayload = () => {
    const articlePath = `/blog/${blog.slug}`;
    const url =
      typeof window !== "undefined"
        ? new URL(
            articlePath,
            isLocalHost(window.location.hostname)
              ? PUBLIC_SITE_URL
              : window.location.origin,
          ).toString()
        : `${PUBLIC_SITE_URL}${articlePath}`;
    const title = getLocalizedText(blog.title, language);
    const text = `${getLocalizedText(blog.title, language)} | MindBloom`;
    return { url, title, text };
  };

  const openSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleFacebookShare = () => {
    const { title, url } = getSharePayload();
    if (!url) return;

    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`;
    window.open(fbUrl, "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    const { url } = getSharePayload();
    if (!url) return false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        return true;
      }
    } catch {
      // Fallback below
    }

    try {
      const tempInput = document.createElement("textarea");
      tempInput.value = url;
      tempInput.style.position = "fixed";
      tempInput.style.opacity = "0";
      document.body.appendChild(tempInput);
      tempInput.focus();
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      return true;
    } catch {
      return false;
    }
  };

  const handleCopyLink = async () => {
    const ok = await copyLink();
    openSnackbar(
      ok
        ? t({ th: "คัดลอกลิงก์แล้ว", en: "Link copied" })
        : t({ th: "คัดลอกลิงก์ไม่สำเร็จ", en: "Copy failed" }),
    );
  };

  const handleShare = async () => {
    const { url, text, title } = getSharePayload();

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        // fall through to copy link
      }
    }

    const ok = await copyLink();
    openSnackbar(
      ok
        ? t({ th: "คัดลอกลิงก์แล้ว", en: "Link copied" })
        : t({ th: "คัดลอกลิงก์ไม่สำเร็จ", en: "Copy failed" }),
    );
  };

  return (
    <div className="lg:mt-14.75 w-full max-w-216 px-4 sm:px-6 md:px-8 mx-auto mb-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-4 justify-center mb-4"
      >
        <Link to={"/blog"}>
          <p className="text-body text-neutral-black">
            {t({ th: "บทความ", en: "Blog" })}
          </p>
        </Link>
        <p className="text-body text-neutral-grey">
          / {getLocalizedText(blog.title, language)}
        </p>
      </motion.div>

      <article className="w-full flex flex-col items-center mx-auto">
        <motion.img
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          src={blog.image}
          alt={getLocalizedText(blog.title, language)}
          className="w-full rounded-3xl object-cover max-w-81.5"
        />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          className="mt-4 flex justify-center items-center gap-2"
        >
          <p className="rf-small">
            {blog.date ? getLocalizedText(blog.date, language) : ""}
          </p>
          <p className="rf-small">{t({ th: "โดย", en: "By" })}</p>
          <p className="rf-small text-main-pink">Mind Bloom</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          className="flex justify-center items-center gap-2 mt-4"
        >
          <p className="rf-small">{t({ th: "แชร์บน", en: "Share on" })}</p>

          <button
            type="button"
            onClick={handleFacebookShare}
            aria-label={t({
              th: "แชร์บน Facebook",
              en: "Share on Facebook",
            })}
            className="inline-flex h-6 w-6 items-center justify-center"
          >
            <img
              src={svgs.facebookIcon}
              alt="share facebook"
              className="w-4 h-4"
            />
          </button>

          <button
            type="button"
            onClick={handleShare}
            aria-label={t({ th: "แชร์", en: "Share" })}
            className="inline-flex h-6 w-6 items-center justify-center"
          >
            <IosShareRoundedIcon sx={{ fontSize: 16 }} />
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            aria-label={t({
              th: "คัดลอกลิงก์บทความ",
              en: "Copy blog link",
            })}
            className="inline-flex h-6 w-6 items-center justify-center"
          >
            <img src={svgs.linkIcon} alt="share link" className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          className="rf-body font-bold mt-4"
        >
          {getLocalizedText(blog.title, language)}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
          className="mt-6 space-y-4"
        >
          {blog.content.map((paragraph, index) => (
            <p
              key={index}
              className="rf-body text-neutral-grey whitespace-pre-line"
            >
              {getLocalizedText(paragraph, language)}
            </p>
          ))}
        </motion.div>

        {videoId && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.65 }}
            className="mt-10 flex justify-center"
          >
            <div className="w-full min-w-75  m:min-w-124 rounded-xl border border-[#e8e1d8] bg-white p-2 shadow-sm">
              <div
                className="relative w-full overflow-hidden rounded-lg bg-black"
                style={{ paddingTop: "56.25%" }}
              >
                {isPlaying ? (
                  <iframe
                    className="absolute top-0 left-0 h-full w-full"
                    src={youtubeEmbedUrl}
                    title={t({
                      th: "วิดีโอ YouTube ของ MindBloom",
                      en: "MindBloom YouTube video",
                    })}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 block h-full w-full"
                    aria-label={t({
                      th: "เล่นวิดีโอ YouTube",
                      en: "Play YouTube video",
                    })}
                  >
                    <img
                      src={youtubeThumbnailUrl}
                      alt={`${getLocalizedText(blog.title, language)} ${t({
                        th: "ภาพตัวอย่างวิดีโอ",
                        en: "video thumbnail",
                      })}`}
                      className="h-full w-full object-cover opacity-90"
                    />
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-neutral-black">
                        <PlayCircleFilledRoundedIcon className="h-8 w-8" />
                      </span>
                    </span>
                  </button>
                )}
              </div>

              <div className="px-1 pt-2 pb-1">
                <p className="text-[13px] text-neutral-black truncate">
                  {getLocalizedText(blog.title, language)}
                </p>
                <div className="mt-1 flex items-center justify-between text-[11px] text-[#8a8a8a]">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={svgs.youtubeIcon}
                      alt="youtube icon"
                      className="w-4 h-4"
                    />
                    <span>YouTube</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </article>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2200}
        onClose={(_, reason) => {
          if (reason === "clickaway") return;
          setSnackbarOpen(false);
        }}
        message={snackbarMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </div>
  );
}

export default BlogDetailPage;
