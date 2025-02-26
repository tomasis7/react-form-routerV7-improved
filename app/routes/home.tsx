import type { Route } from "../+types/root";
import Navigation from "../components/Navigation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Form App Home" },
    { name: "description", content: "Welcome to the Form App" },
  ];
}

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1>Welcome to My Form App</h1>
      <p>
        This application demonstrates form handling and CRUD operations using
        React and the React Router library.
      </p>
      <div>
        <p>Features:</p>
        <ul>
          <li>User registration with form validation</li>
          <li>Display list of users</li>
          <li>Update and delete user information</li>
          <li>State management with Zustand</li>
        </ul>
      </div>
    </div>
  );
}
