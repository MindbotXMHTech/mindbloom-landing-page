import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import { motion } from "framer-motion";
import { activityData } from "../../constants/activityData";
import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/utils";

function ActivityPage() {
  const navigate = useNavigate();
  const { language, t } = useLanguage();

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

      {activityData.map((activity, index) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.15 + index * 0.2,
          }}
          className="flex flex-col mt-9.5 items-center justify-start gap-4"
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
          <p className="text-base m:text-2xl text-neutral-grey font-normal text-center">
            {activity.text ? getLocalizedText(activity.text, language) : ""}
          </p>
          <CustomButton
            title={t({ th: "ดูกิจกรรม", en: "View activity" })}
            onClick={() => navigate(`/activity/${activity.id}`)}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default ActivityPage;
