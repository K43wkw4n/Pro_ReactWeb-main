import Main from "./layout/Main";
import PrivateMainLayout from "./layout/private/PrivateMainLayout";
import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./route/Route";
import { PrivateRoute } from "./route/PrivateRoute";

function App() {
  let accessType = 4;
  return accessType === 1 ? (
    <Main>
      <link href="assets/img/favicon.png" rel="icon" />
      <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />

      <link
        href="assets/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
      <link
        href="assets/vendor/glightbox/css/glightbox.min.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/swiper/swiper-bundle.min.css"
        rel="stylesheet"
      />

      <link href="assets/css/main.css" rel="stylesheet" />
      <Routes>
        {PublicRoute.map((item) => (
          <Route key={item.id} path={item.path} element={item.element} />
        ))}
      </Routes>
    </Main>
  ) : (
    <PrivateMainLayout>
      {/* <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
        rel="stylesheet"
      /> */}
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <link href="assets1/css/bootstrap.min.css" rel="stylesheet" />
      <link href="assets1/css/paper-dashboard.css?v=2.0.1" rel="stylesheet" />
      <link href="assets1/demo/demo.css" rel="stylesheet" />
      <Routes>
        {PrivateRoute.map((item) => (
          <Route key={item.id} path={item.path} element={item.element} />
        ))}
      </Routes>
    </PrivateMainLayout>
  );
}

export default App;
