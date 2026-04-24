import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/utils";
import {
  loadPublicActivity,
  type PublicActivity,
} from "../../lib/activityContent";

function ActivityDetailPage() {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const [activity, setActivity] = useState<PublicActivity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const loadActivity = async () => {
      setLoading(true);
      const nextActivity = await loadPublicActivity(slug ?? "");

      if (active) {
        setActivity(nextActivity);
        setLoading(false);
      }
    };

    void loadActivity();

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

  if (!activity) {
    return (
      <div className="mt-14.75 w-full l:max-w-212.5 px-4 sm:px-6 md:px-8 mx-auto">
        <div className="panel p-8 text-center">
          <h1 className="rf-h4">
            {t({ th: "ยังไม่มีกิจกรรม", en: "No activity yet" })}
          </h1>
          <p className="rf-small text-neutral-grey mt-2">
            {t({
              th: "ตอนนี้ยังไม่มีกิจกรรมที่เผยแพร่สำหรับหน้านี้",
              en: "There is no published activity for this page yet.",
            })}
          </p>
          <Link to="/activity" className="button secondary mt-4">
            {t({ th: "กลับไปหน้ากิจกรรม", en: "Back to activities" })}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-14.75 w-full max-w-216 px-4 sm:px-6 md:px-8 mx-auto mb-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-4 justify-center mb-4"
      >
        <Link to={"/activity"}>
          <p className="text-body text-neutral-black">
            {t({ th: "กิจกรรม", en: "Activities" })}
          </p>
        </Link>
        <p className="text-body text-neutral-grey">
          {" / "}
          {getLocalizedText(activity.title, language)}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="flex flex-col items-center text-center gap-4"
      >
        <div>
          <h1 className="rf-title">{getLocalizedText(activity.title, language)}</h1>
          {activity.text ? (
            <p className="text-base m:text-2xl text-neutral-black font-normal">
              {getLocalizedText(activity.text, language)}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          {activity.date && (
            <p className="rf-body text-neutral-grey">
              {getLocalizedText(activity.date, language)}
            </p>
          )}
          {activity.content.map((paragraph, index) => (
            <p
              key={index}
              className="rf-body text-neutral-grey whitespace-pre-line"
            >
              {getLocalizedText(paragraph, language)}
            </p>
          ))}
        </div>
      </motion.div>

      <div className="mt-9.5 grid grid-cols-1 m:grid-cols-3 gap-4">
        {activity.image.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: Math.min(index * 0.08, 0.5),
            }}
            className="aspect-square overflow-hidden rounded-2xl w-80 md:w-auto h-60.25"
          >
            <motion.img
              src={img}
              alt={`${getLocalizedText(activity.title, language)} ${index + 1}`}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ActivityDetailPage;
