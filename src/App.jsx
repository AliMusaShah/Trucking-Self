import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './features/Auth/components/LoginPage.jsx'
import Signup from './features/Auth/components/SignUpPage.jsx'
import ForgetPassword from './features/Auth/components/ForgetPasswordPage.jsx'
import VerifyOtp from "./features/Auth/components/VerifyOtp.jsx";
import ResetPassword from './features/Auth/components/ResetPassword.jsx'
import PaymentPlan from "./features/Auth/components/payment/PaymentPlan.jsx";
import UpdateProfile from "./features/ProfileManagement/UpdateProfile.jsx";
import UpdatePassword from "./features/ProfileManagement/UpdatePassword.jsx";
import DefaultLayout from "./ui/DefaultLayout.jsx";
import Home from "./features/Dashboard/";
import FacilitySearch from './features/FacilitySearch/MapView.jsx'
import ListView from "./features/FacilitySearch/ListView.jsx";
import SalesArea from "./features/savedfacility/SalesArea.jsx";
import SavedFacility from "./features/savedfacility/SavedFacility.jsx";
import SavedContact from "./features/SavedContact/SavedContact.jsx";
// import Weekly from "./features/calendar/Weekly.jsx";
import Pipeline from "./features/pipeline/PipeLines.jsx";
import Calendar from "./features/calendar/Calendar.jsx";
import AdminUserManagement from "./features/UserManagement/AdminUserManagement.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/forgetpassword',
    element: <ForgetPassword />,
  },
  {
    path: '/verify-otp',
    element: <VerifyOtp />,
  },
  {
    path: '/resetpassword',
    element: <ResetPassword />,
  },
  {
    path: '/paymentplan',
    element: <PaymentPlan />,
  },

  {

    element: (
      <DefaultLayout />
    ),
    children: [
      { path: '/home', element: <Home /> },
      { path: '/facilitysearch/map-view', element: <FacilitySearch /> },
      { path: '/facilitysearch/list-view', element: <ListView /> },
      { path: '/savedfacility/sales-area', element: <SalesArea /> },
      { path: '/savedfacility/saved-facility', element: <SavedFacility /> },
      { path: '/saved-contacts', element: <SavedContact /> },
      { path: '/calendar/weekly', element: <Calendar /> },
      { path: '/calendar/monthly', element: <Calendar /> },
      { path: '/pipeline', element: <Pipeline /> },






      { path: '/settings/updateprofile', element: <UpdateProfile /> },
      { path: '/settings/updatepassword', element: <UpdatePassword /> },
      { path: '/admin/user-management', element: <AdminUserManagement /> },

    ]
  },
])


function App() {
  console.log('sample commit')
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />

    </>
  )
}

export default App
