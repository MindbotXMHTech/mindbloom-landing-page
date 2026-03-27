import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import { motion } from "framer-motion";
import { activityData } from "../../constants/activityData";

function ActivityPage() {
  const navigate = useNavigate();

  return (
    <div className="my-14.75 w-full l:max-w-212.5 px-4 sm:px-6 md:px-8 flex flex-col items-center">
      <h4 className="rf-h4">กิจกรรม</h4>
      {activityData.map((activity) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.5,
            ease: "easeOut" as const,
          }}
          className="flex flex-col mt-9.5 items-center justify-start gap-4"
        >
          <div className="h-60 m:w-125 m:h-83.5">
            <img
              src={activity.mainImage}
              alt="mindbloom opening"
              className="w-full h-full object-cover  rounded-3xl"
            />
          </div>
          <p className="text-base m:text-2xl text-neutral-grey font-normal text-center">
            {activity.title}
          </p>
          <p className="text-base m:text-2xl text-neutral-grey font-normal text-center">
            {activity.text}
          </p>
          <CustomButton
            title="ดูกิจกรรม"
            onClick={() => navigate(`/activity/${activity.id}`)}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default ActivityPage;
