import MainNavigation from "../components/MainNavigation";

const ErrorPage = function () {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An Error Occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
