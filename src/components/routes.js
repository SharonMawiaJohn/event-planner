import Home from "../pages/Home";
import RSVPForm from "../pages/RSVPForm"
import EventDetails from "../pages/EventDetails";
import About from "../pages/About";



const routes = [
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/events/:id/rsvp",
      element: <RSVPForm />,
    },
    {
      path: "/events/:id",  
      element: <EventDetails />,
    },
    {
      path: "/about",  
      element: <About />,
    }
  ];
  
  export default routes;