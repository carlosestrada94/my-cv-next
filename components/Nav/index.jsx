export default function Nav() {
  const nav = [
    { name: "Home", id: "intro" },
    { name: "About me", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];
  const navRender = () => {
    return nav.map(({ name, id }, index) => {
      return (
        <button
          key={index}
          onClick={() => {
            document.getElementById(id).scrollIntoView({ behavior: "smooth" });
          }}
          className="p-1 cursor-pointer mx-2 text-gray-50 font-light xl:text-gray-800 xl:hover:text-black transition-all"
        >
          {name}
        </button>
      );
    });
  };
  return (
    <div
      className="bg-gray-900 xl:bg-transparent opacity-60 fixed top-0 left-1/2 z-10 transform -translate-x-1/2 w-screen max-w-screen-2xl flex justify-end"
      style={{ height: "10vh" }}
    >
      <div className="flex justify-evenly items-center font-primary text-base md:text-2xl">
        {navRender()}
      </div>
    </div>
  );
}
