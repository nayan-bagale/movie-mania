import "./App.css";
import Layout from "./Layout";
import github_logo from "./assets/github-mark-white.png";

function App() {
  const style = {
    height: 0,
    borderTop: "100px solid rgb(75 85 99 / var(--tw-bg-opacity))",
    borderLeft: "100px solid transparent",
  };
  const logo = {
    top: "-85px",
    left: "-45px",
    right: "5px"
  };

  return (
    <div className=" font-poppins bg-stone-900 h-screen flex justify-center items-center">
      <div className=" absolute top-0 right-0" style={style}>
        <a
          href="https://github.com/nayan-bagale/"
          target="_blank"
          className=" absolute"
          style={logo}
        >
          <img src={github_logo} alt="github" height={20} />
        </a>
      </div>
      <Layout />
    </div>
  );
}

export default App;
