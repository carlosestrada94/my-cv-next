export default function Intro() {
  return (
    <div className="section-intro" id={"intro"}>
      <div className="h-screen w-full">
        <div className="h-full xl:w-3/5">
          <img
            src="/pexels-photo-574069.jpeg"
            alt="Me typing on my laptop"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-5 right-0 xl:right-24 bg-gray-50 p-5 font-primary w-4/5 max-w-screen-sm">
        <h1 className="section-title">CARLOS ESTRADA</h1>
        <h2 className="section-subtitle">Economist and Web Developer</h2>
        <p className="section-p">
          My name is Carlos Estrada. I am an economist, web developer, and a
          passionate about online learning and programming.
        </p>
      </div>
    </div>
  );
}
