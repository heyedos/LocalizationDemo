import { imagesBG } from "./images";
interface mainProps {
  t: any;
}
export const Main = ({ t }: mainProps) => {
  const textArray = [
    "bodyguardTitle",
    "bodyguard",
    "armed",
    "unarmed",
    "private",
  ];
  return (
    <main className="w-full flex flex-col gap-6 px-8 py-16 bg-gray-200 max-lg:py-0">
      {textArray.map((key, index) => (
        <div className="box-1 w-full flex gap-12 pb-8 items-center max-lg:flex-col max-lg:gap-8">
          <div className={index % 2 === 0 ? "order-0 " : "order-1 "}>
            <h1 className="text-4xl font-semibold my-8">{t(`${key}.title`)}</h1>
            <p>{t(`${key}.content`)}</p>
          </div>
          <img
            src={imagesBG[index]}
            alt={key}
            className={
              (index % 2 === 0 ? "order-1 " : "order-0 ") +
              " w-2/6 max-lg:order-2 max-lg:w-3/4"
            }
          />
        </div>
      ))}
    </main>
  );
};
