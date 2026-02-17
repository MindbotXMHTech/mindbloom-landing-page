import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import Snackbar from "@mui/material/Snackbar";
import { BlogList } from "../../constants/blogData";
import { svgs } from "../../constants/svgs";

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
  const { id } = useParams();
  const blog = useMemo(() => BlogList.find((item) => item.id === id), [id]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  if (!blog) {
    return (
      <div className="mt-14.75 w-full l:max-w-212.5 px-4 sm:px-6 md:px-8 mx-auto">
        <h1 className="rf-h4 text-center">no data</h1>
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
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = blog.title;
    const text = `${blog.title} | MindBloom`;
    return { url, title, text };
  };

  const openSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleFacebookShare = () => {
    const { url } = getSharePayload();
    if (!url) return;

    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
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
    openSnackbar(ok ? "Link copied" : "Copy failed");
  };

  const handleInstagramShare = async () => {
    const { url, text, title } = getSharePayload();

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        // fall through to copy + open instagram
      }
    }

    const ok = await copyLink();
    openSnackbar(ok ? "Link copied, paste on Instagram" : "Copy failed");
    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-14.75 w-full max-w-216 px-4 sm:px-6 md:px-8 mx-auto mb-20 flex flex-col items-center">
      <div className="flex items-center gap-4 justify-center mb-4">
        <p className="text-body text-neutral-black">บทความ</p>/
        <p className="text-body text-neutral-grey">{blog.title}</p>
      </div>

      <article className="w-full flex flex-col items-center mx-auto">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-3xl object-cover max-w-81.5"
        />

        <div className="mt-4 flex justify-center items-center gap-2">
          <p className="rf-small">{blog.date}</p>
          <p className="rf-small">โดย</p>
          <p className="rf-small text-main-pink">Mind Bloom</p>
        </div>

        <div className="flex justify-center items-center gap-2 mt-4">
          <p className="rf-small">แชร์บน</p>

          <button
            type="button"
            onClick={handleFacebookShare}
            aria-label="Share on Facebook"
            className="inline-flex h-6 w-6 items-center justify-center"
          >
            <img src={svgs.facebookIcon} alt="share facebook" className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleInstagramShare}
            aria-label="Share on Instagram"
            className="inline-flex h-6 w-6 items-center justify-center"
          >
            <img src={svgs.instagramIcon} alt="share instagram" className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            aria-label="Copy blog link"
            className="inline-flex h-6 w-6 items-center justify-center"
          >
            <img src={svgs.linkIcon} alt="share link" className="w-4 h-4" />
          </button>
        </div>

        <h1 className="rf-body font-bold mt-4">{blog.title}</h1>

        <div className="mt-6 space-y-4">
          {blog.content.map((paragraph, index) => (
            <p key={index} className="rf-body text-neutral-grey whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        {videoId && (
          <section className="mt-10 flex justify-center">
            <div className="w-full min-w-50 s:min-w-62.5 m:min-w-124 rounded-xl border border-[#e8e1d8] bg-white p-2 shadow-sm">
              <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingTop: "56.25%" }}>
                {isPlaying ? (
                  <iframe
                    className="absolute top-0 left-0 h-full w-full"
                    src={youtubeEmbedUrl}
                    title="MindBloom YouTube"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 block h-full w-full"
                    aria-label="Play YouTube video"
                  >
                    <img
                      src={youtubeThumbnailUrl}
                      alt={`${blog.title} video thumbnail`}
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
                <p className="text-[13px] text-neutral-black truncate">{blog.title}</p>
                <div className="mt-1 flex items-center justify-between text-[11px] text-[#8a8a8a]">
                  <div className="flex items-center gap-1.5">
                    <img src={svgs.youtubeIcon} alt="youtube icon" className="w-4 h-4" />
                    <span>YouTube</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
