import LoginPage from "../LoginPage/LoginPage";
import ListTripsPage from "../ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import HomePage from "../HomePage/HomePage";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import AdminHomePage from "../AdminHomePage/AdminHomePage"
import TripDetaisPage from "../TripDetaisPage/TripDetaisPage";
import CreateTripRequest from "../CreateTripPage/CreateTripPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/applicationForm"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/tripsList"}>
          <ListTripsPage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/admPage"}>
          <AdminHomePage />
        </Route>

        <Route exact path={"/tripDetais/:id"}>
          <TripDetaisPage />
        </Route>

        <Route exact path={"/createTrip"}>
          <CreateTripRequest />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};