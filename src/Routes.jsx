import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PartnerSetting = React.lazy(() => import("pages/PartnerSetting"));
const AccountSetting = React.lazy(() => import("pages/AccountSetting"));
const Login = React.lazy(() => import("pages/Login"));
const BeOurPartnerOne = React.lazy(() => import("pages/BeOurPartnerOne"));
const RentCheckout = React.lazy(() => import("pages/RentCheckout"));
const InformationEducationOne = React.lazy(
  () => import("pages/InformationEducationOne"),
);
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Registration = React.lazy(() => import("pages/Registration"));
const PartnerSettingOne = React.lazy(() => import("pages/PartnerSettingOne"));
const AccountSettingOne = React.lazy(() => import("pages/AccountSettingOne"));
const LoginOne = React.lazy(() => import("pages/LoginOne"));
const BeOurPartner = React.lazy(() => import("pages/BeOurPartner"));
const RentCheckoutOne = React.lazy(() => import("pages/RentCheckoutOne"));
const InformationEducation = React.lazy(
  () => import("pages/InformationEducation"),
);
const DashboardOne = React.lazy(() => import("pages/DashboardOne"));
const RegistrationOne = React.lazy(() => import("pages/RegistrationOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/registrationone" element={<RegistrationOne />} />
          <Route path="/dashboardone" element={<DashboardOne />} />
          <Route
            path="/informationeducation"
            element={<InformationEducation />}
          />
          <Route path="/rentcheckoutone" element={<RentCheckoutOne />} />
          <Route path="/beourpartner" element={<BeOurPartner />} />
          <Route path="/loginone" element={<LoginOne />} />
          <Route path="/accountsettingone" element={<AccountSettingOne />} />
          <Route path="/partnersettingone" element={<PartnerSettingOne />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/informationeducationone"
            element={<InformationEducationOne />}
          />
          <Route path="/rentcheckout" element={<RentCheckout />} />
          <Route path="/beourpartnerone" element={<BeOurPartnerOne />} />
          <Route path="/login" element={<Login />} />
          <Route path="/accountsetting" element={<AccountSetting />} />
          <Route path="/partnersetting" element={<PartnerSetting />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
