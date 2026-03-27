import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { activityData } from "../../constants/activityData";
import { motion } from "framer-motion";

function ActivityDetailPage() {
  const { id } = useParams();
  const activity = useMemo(
    () => activityData.find((item) => item.id === id),
    [id],
  );

  if (!activity) {
    return (
      <div className="mt-14.75 w-full l:max-w-212.5 px-4 sm:px-6 md:px-8 mx-auto">
        <h1 className="rf-h4 text-center">no data</h1>
      </div>
    );
  }

  return (
    <div className="mt-14.75 w-full max-w-216 px-4 sm:px-6 md:px-8 mx-auto mb-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.8,
          ease: "easeOut" as const,
        }}
        className="flex items-center gap-4 justify-center mb-4"
      >
        <Link to={"/activity"}>
          <p className="text-body text-neutral-black">กิจกรรม</p>
        </Link>
        <p className="text-body text-neutral-grey"> / {activity.title}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1,
          ease: "easeOut" as const,
        }}
        className="flex flex-col items-center text-center gap-4"
      >
        <div>
          <h1 className="rf-title">{activity.title}</h1>
          <p className="text-base m:text-2xl text-neutral-black font-normal">
            {activity.text}
          </p>
        </div>

        <div>
          {activity.date && (
            <p className="rf-body text-neutral-grey">{activity.date}</p>
          )}
          {activity.content.map((paragraph, index) => (
            <p
              key={index}
              className="rf-body text-neutral-grey whitespace-pre-line"
            >
              {paragraph}
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
              duration: 0.6,
              ease: "easeOut" as const,
              delay: index * 0.1,
            }}
            className="aspect-square overflow-hidden rounded-2xl h-60.25"
          >
            <img
              src={img}
              alt={`${activity.title} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ActivityDetailPage;
