// Import Assets
import profile from "../assets/profile.JPG";

const Header = () => {
  return (
    <section className="header">
      <img src={profile} alt="Ammar Yasir" />

      <div className="header__content">
        <h1>Hi, I'm Ammar Yasir</h1>
        <p>Blockchain Developer</p>
        <a href="mailto:ammar.yasir315@gmail.com" className="button">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Header;
