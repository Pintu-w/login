import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { ResetPassword } from "./components/ResetPassword";
import { CreateNewAccount } from "./components/CreateNewAccount";
import { EditProfile } from "./components/EditProfile";
import { Home } from "./components/Home";
import { PayAmount } from "./components/PayAmount";
import { Room } from "./components/Room";
import { TransectionHistory } from "./components/TreansactionHistory";
import { WinnerList } from "./components/WinnerList";
import { AdminPanel } from "./admin/AdminPanel";
import { AddUser } from "./admin/AddUser";
import { EditUser } from "./admin/EditUser";
import { EditUser2} from "./admin/EditUser2.jsx";
import { DeleteUser } from "./admin/DeleteUser";
import { DeleteUser2 } from "./admin/DeleteUser2";
import { AddTournament } from "./admin/AddTournament";
import { EditTournament } from "./admin/EditTournament";
import { DeleteTournament } from "./admin/DeleteTournament";
import { EditTournament2 } from "./admin/EditTournament2";
import { AddWinner } from "./admin/AddWinner";
import { VerifyPayments } from "./admin/VerifyPayments";
import { Login } from "./Login/Login";
import { Tournament } from "./components/Tournament";
import { PaymentHistory } from './admin/PaymentHistory.jsx';
import { App } from './App.jsx';
import { AdminHome } from './admin/AdminHome.jsx';
import { AddCategory } from './admin/AddCategory.jsx';
import { DeleteCategory } from './admin/DeleteCategory.jsx';



const router = createBrowserRouter([
   {
        path: '/',
        element: <Login/>,
      },
  {
    path: '/',
    element: <App />,
    children: [
     
      {
        path: '/tournament',
        element: <Tournament/>,
      },
      {
        path: '/createaccount',
        element: <CreateNewAccount/>,
      },
      {
        path: '/home',
        element: <Home/>,
      },
      {
        path: '/winnerlist',
        element: <WinnerList/>,
      },
      {
        path: '/payamount',
        element: <PayAmount/>,
      },
      {
        path: '/roomid',
        element: <Room/>,
      },
      {
        path: '/editprofile',
        element: <EditProfile/>,
      },



      
     
    ],
  },
  { path: '/resetPasswrd',
    element: <ResetPassword />},
    { path: '/TransectionHistory',
    element: <TransectionHistory />},

   {
    path:'/',
    element:<AdminHome/>,
    children:[
 {
        path: '/adminpanel',
        element: <AdminPanel/>,
      },
      {
        path: '/AddTournament',
        element: <AddTournament/>,
      },
      {
        path: '/AddUser',
        element: <AddUser/>,
      },
      {
        path: '/AddWinner',
        element: <AddWinner/>,
      },
      {
        path: '/DeleteUser',
        element: <DeleteUser/>,
      },
      {
        path: '/DeleteUser2',
        element: <DeleteUser2/>,
      },
      {
        path: '/EditTournament',
        element: <EditTournament/>,
      },
      {
        path: '/EditTournament2',
        element: <EditTournament2/>,
      },
      {
        path: '/EditUser',
        element: <EditUser/>,
      },
      {
        path: '/PaymentHistory',
        element: <PaymentHistory/>,
      },
      {
        path: '/DeleteUser',
        element: <EditTournament/>,
      },
      {
        path: '/EditUser2',
        element: <EditUser2/>,
      },
      {
        path: '/VerifyPayments',
        element: <VerifyPayments/>,
      },
      {
        path: '/DeleteTournament',
        element: <DeleteTournament/>,
      },
      {
        path: '/AddCategory',
        element: <AddCategory/>,
      },
      {
        path: '/DeleteCategory',
        element: <DeleteCategory/>,
      },
    ]
   }
 
])

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router} />)