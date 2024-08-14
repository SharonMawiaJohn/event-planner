import Home from "../pages/Home";
import RSVPForm from "../pages/RSVPForm"
import EventDetails from "../pages/EventDetails";


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
    }
  ];
  
  export default routes;