import type { Route } from "../+types/form";
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
    <div className="p-4">
      <Navigation />
      <h1 className="text-2xl font-bold mb-4">Registreringsformulär</h1>
      <Form />
    </div>
  );
}
