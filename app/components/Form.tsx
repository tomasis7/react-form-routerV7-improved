import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useUserStore } from "../store/userStore";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import SubmitButton from "./SubmitButton";

interface FormData {
  name: string;
  email: string;
  password: string;
  id?: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Namn är obligatoriskt"),
  email: yup
    .string()
    .email("Ogiltig e-post")
    .required("E-post är obligatoriskt"),
  password: yup
    .string()
    .min(6, "Lösenordet måste vara minst 6 tecken")
    .required("Lösenord är obligatoriskt"),
});

const Form: React.FC = () => {
  const { addUser } = useUserStore();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      // Generate a random ID if none exists
      const userWithId = { ...data, id: data.id || crypto.randomUUID() };
      await addUser(userWithId);
      alert("Registrering lyckades!");
      reset();
      navigate("/profile");
    } catch (error) {
      alert("Något gick fel!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Namn"
        name="name"
        register={register}
        error={errors.name?.message}
      />
      <InputField
        label="E-post"
        name="email"
        register={register}
        error={errors.email?.message}
      />
      <PasswordField
        name="password"
        register={register}
        error={errors.password?.message}
      />
      <SubmitButton text={loading ? "Skickar..." : "Registrera"} />
    </form>
  );
};

export default Form;
