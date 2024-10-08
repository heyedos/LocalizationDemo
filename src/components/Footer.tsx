export const Footer = () => {
  return (
    <footer className="w-full flex pl-10 gap-16 items-start py-10 bg-slate-800 text-white max-sm:gap-6 max-sm:pl-4 max-sm:flex-col">
      <h1 className="text-4xl max-sm:text-2xl">Contact</h1>
      <div className="flex flex-col text-lg max-sm:text-sm">
        <p>Email: admin@gmail.com</p>
        <p>Phone: +11 1111111111</p>
      </div>
      <p className="max-sm:text-sm">
        Adress: 123 Main Street, apt 4B San Diego CA, 91911
      </p>
    </footer>
  );
};
