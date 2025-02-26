import type { Route } from "../+types/root";
import Form from "../components/Form";
import Navigation from "../components/Navigation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Registration Form" },
    { name: "description", content: "Register a new user" },
  ];
}

export default function FormPage() {
  return (
    <div>
      <Navigation />
      <h1>Registreringsformulär</h1>
      <Form />
    </div>
  );
}
