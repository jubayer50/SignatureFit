import { createBrowserRouter } from "react-router";
import MailLayout from "../layout/MailLayout/MailLayout";
import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/Shop/ShopPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MailLayout></MailLayout>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "/shop", element: <ShopPage></ShopPage> },
    ],
  },
]);

export default router;
