import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/utils";
import {
  loadPublicActivities,
  type PublicActivity,
} from "../../lib/activityContent";

function ActivityPage() {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [activities, setActivities] = useState<PublicActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const loadActivities = async () => {
      setLoading(true);
      const nextActivities = await loadPublicActivities();

      if (active) {
        setActivities(nextActivities);
        setLoading(false);
      }
    };

    void loadActivities();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="mt-14.75 mb-24 w-full l:max-w-212.5 px-4 sm:px-6 md:px-8 mx-auto">
        <h1 className="rf-h4 text-center">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="mt-14.75 mb-24 w-full l:max-w-212.5 px-4 sm:px-6 md:px-8 flex flex-col items-center">
      <motion.h4
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rf-h4"
      >
        {t({ th: "กิจกรรม", en: "Activities" })}
      </motion.h4>

      {activities.length === 0 ? (
        <div className="panel mt-9.5 w-full max-w-125 p-8 text-center">
          <h3 className="rf-h5">
            {t({ th: "ยังไม่มีกิจกรรม", en: "No activities yet" })}
          </h3>
          <p className="rf-small text-neutral-grey mt-2">
            {t({
              th: "ตอนนี้ยังไม่มีกิจกรรมที่เผยแพร่",
              en: "There are no published activities right now.",
            })}
          </p>
        </div>
      ) : (
        <div className="mt-9.5 flex w-full flex-col items-center gap-9.5">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.15 + index * 0.2,
              }}
              className="flex flex-col items-center justify-start gap-4"
            >
              <div className="h-60 m:w-125 m:h-83.5 overflow-hidden rounded-3xl">
                <motion.img
                  src={activity.mainImage}
                  alt={getLocalizedText(activity.title, language)}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
              <p className="text-base m:text-2xl text-neutral-grey font-normal text-center">
                {getLocalizedText(activity.title, language)}
              </p>
              {activity.text ? (
                <p className="text-base m:text-2xl text-neutral-grey font-normal text-center">
                  {getLocalizedText(activity.text, language)}
                </p>
              ) : null}
              <CustomButton
                title={t({ th: "ดูกิจกรรม", en: "View activity" })}
                onClick={() => navigate(`/activity/${activity.slug}`)}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ActivityPage;
