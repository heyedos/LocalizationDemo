interface headerProps {
  t: any;
  i18n: any;
}
export const Header = ({ t, i18n }: headerProps) => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="w-full flex justify-between items-center px-8 py-12 bg-slate-800 max-sm:p-2">
      <div>
        <div className="text-5xl font-bold text-white max-sm:text-3xl">
          <h1>{t("titleBG")}</h1>
        </div>
      </div>
      <div className="Buttons flex gap-8 items-center justify-center max-sm:flex-col max-lg:gap-2 ">
        <button
          className={
            "border-2 px-2 py-5 bg-slate-400 rounded-full border-black max-sm:p-2 " +
            (i18n.language === "tr" && " border-slate-200 text-white")
          }
          onClick={() => {
            changeLanguage("tr");
          }}
        >
          Turkish
        </button>
        <button
          className={
            "border-2 px-2 py-5 bg-slate-400 rounded-full border-black max-sm:p-2 " +
            (i18n.language === "en" && " border-slate-200 text-white")
          }
          onClick={() => {
            changeLanguage("en");
          }}
        >
          English
        </button>
        <button
          className={
            "border-2 border-black px-3 py-5 bg-slate-400 rounded-full max-sm:px-3 max-sm:py-[0.385rem] " +
            (i18n.language === "it" && " border-slate-200 text-white")
          }
          onClick={() => {
            changeLanguage("it");
          }}
        >
          Italian
        </button>
      </div>
    </header>
  );
};
