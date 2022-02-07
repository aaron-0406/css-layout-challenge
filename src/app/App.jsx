import AsideLeft from "../components/layouts/AsideLeft";
import AsideRight from "../components/layouts/AsideRight";
import Main from "../components/layouts/Main";

const App = () => {
  return (
    <div className="app-container">
      <AsideLeft />
      <Main />
      <AsideRight />
    </div>
  );
};

export default App;
