import type { Route } from "../+types/home";
import Navigation from "../components/Navigation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Form App Home" },
    { name: "description", content: "Welcome to the Form App" },
  ];
}

export default function Home() {
  return (
    <div className="p-4">
      <Navigation />
      <h1 className="text-2xl font-bold mb-4">Welcome to My Form App</h1>
      <p className="mb-4">
        This application demonstrates form handling and CRUD operations using
        React and the React Router library.
      </p>
      <div className="bg-gray-100 p-4 rounded-md">
        <p className="font-medium">Features:</p>
        <ul className="list-disc list-inside">
          <li>User registration with form validation</li>
          <li>Display list of users</li>
          <li>Update and delete user information</li>
          <li>State management with Zustand</li>
        </ul>
      </div>
    </div>
  );
}
