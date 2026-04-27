import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/utils";
import {
  workshopCategoriesFallback,
  workshopCtaLabel,
  workshopPageSubtitle,
  workshopProgramsFallback,
  type PublicWorkshopCategory,
  type PublicWorkshopProgram,
} from "../../constants/workshopData";
import {
  loadPublicWorkshopCategories,
  loadPublicWorkshopPrograms,
} from "../../lib/workshopContent";

const pageTitle = {
  th: "Mindbloom Wellbeing Workshop",
  en: "Mindbloom Wellbeing Workshop",
} as const;

const lineDividerClass = "w-full h-px bg-[#C7A491] my-8";

const Workshop = () => {
  const { language, t } = useLanguage();
  const [categories, setCategories] = useState<PublicWorkshopCategory[]>(
    workshopCategoriesFallback,
  );
  const [programs, setPrograms] = useState<PublicWorkshopProgram[]>(
    workshopProgramsFallback,
  );

  useEffect(() => {
    let active = true;

    const loadContent = async () => {
      const [nextCategories, nextPrograms] = await Promise.all([
        loadPublicWorkshopCategories(),
        loadPublicWorkshopPrograms(),
      ]);

      if (!active) {
        return;
      }

      setCategories(nextCategories);
      setPrograms(nextPrograms);
    };

    void loadContent();

    return () => {
      active = false;
    };
  }, []);

  const groupedCategories = useMemo(
    () =>
      categories.map((category) => ({
        category,
        programs: programs.filter((program) => program.categorySlug === category.slug),
      })),
    [categories, programs],
  );

  return (
    <div className="mt-14.75 w-full max-w-216 px-4 sm:px-6 md:px-8 mx-auto mb-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.5,
          ease: "easeOut" as const,
        }}
        className="flex items-center gap-1 md:gap-4 justify-center mb-4"
      >
        <Link to={"/service"}>
          <p className="rf-body text-neutral-black">
            {t({ th: "บริการของเรา", en: "Services" })}
          </p>
        </Link>
        <p className="rf-body text-neutral-grey">/ {t(pageTitle)}</p>
      </motion.div>

      <section className="flex flex-col items-center w-full">
        <p className="rf-title my-4">{t(pageTitle)}</p>
        <p className="rf-body text-neutral-grey font-normal">
          {t(workshopPageSubtitle)}
        </p>

        {groupedCategories.map(({ category, programs: categoryPrograms }, categoryIndex) => (
          <div key={category.slug} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="flex flex-col gap-4 items-center my-8 w-full"
            >
              <p className="text-xl font-bold">{getLocalizedText(category.title, language)}</p>
              <p className="rf-body font-normal text-neutral-grey">
                {getLocalizedText(category.subtitle, language)}
              </p>
            </motion.div>

            {categoryPrograms.map((program) => (
              <motion.div
                key={program.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                className="w-full flex flex-col gap-4 mt-8"
              >
                <p className="text-base font-bold">
                  {getLocalizedText(program.title, language)}
                </p>
                <p className="rf-body text-neutral-grey font-normal">
                  {getLocalizedText(program.summary, language)}
                </p>
                {program.content.map((paragraph, index) => (
                  <p
                    key={`${program.slug}-paragraph-${index}`}
                    className="rf-body text-neutral-grey font-normal"
                  >
                    {getLocalizedText(paragraph, language)}
                  </p>
                ))}

                <div
                  className={[
                    "grid grid-cols-1 m:grid-cols-3 gap-2",
                    program.galleryStyle === "square" ? "gap-6" : "",
                  ].join(" ")}
                >
                  {program.galleryImages.map((src, index) => (
                    <motion.img
                      key={`${program.slug}-image-${index}`}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                      src={src}
                      alt=""
                      className={[
                        "w-full object-cover rounded-lg",
                        program.galleryStyle === "square"
                          ? "aspect-square"
                          : "aspect-video h-65.5",
                      ].join(" ")}
                    />
                  ))}
                </div>

                {program.showCta ? (
                  <div className="flex justify-center mt-2">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2, delay: 0.15, ease: "easeOut" }}
                      href="https://line.me/R/ti/p/@mindbloom"
                      target="_blank"
                      rel="noreferrer"
                      className="rf-body rounded-full bg-white border border-[#4D738F] px-6 py-2 font-bold text-[#4D738F]"
                    >
                      {t(workshopCtaLabel)}
                    </motion.a>
                  </div>
                ) : null}
              </motion.div>
            ))}

            {categoryIndex < groupedCategories.length - 1 ? (
              <div className={lineDividerClass} />
            ) : null}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Workshop;
