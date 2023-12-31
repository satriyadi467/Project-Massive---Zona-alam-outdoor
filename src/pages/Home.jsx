import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/registrationone">RegistrationOne</Link>
        </li>
        <li>
          <Link to="/dashboardone">DashboardOne</Link>
        </li>
        <li>
          <Link to="/informationeducation">InformationEducation</Link>
        </li>
        <li>
          <Link to="/rentcheckoutone">RentCheckoutOne</Link>
        </li>
        <li>
          <Link to="/beourpartner">BeOurPartner</Link>
        </li>
        <li>
          <Link to="/loginone">LoginOne</Link>
        </li>
        <li>
          <Link to="/accountsettingone">AccountSettingOne</Link>
        </li>
        <li>
          <Link to="/partnersettingone">PartnerSettingOne</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/informationeducationone">InformationEducationOne</Link>
        </li>
        <li>
          <Link to="/rentcheckout">RentCheckout</Link>
        </li>
        <li>
          <Link to="/beourpartnerone">BeOurPartnerOne</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/accountsetting">AccountSetting</Link>
        </li>
        <li>
          <Link to="/partnersetting">PartnerSetting</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
