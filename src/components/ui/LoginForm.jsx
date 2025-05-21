import React from "react";
import { KeyRound, User } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const LoginForm = () => {
  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  // Funcion de inicio de sesion
  const handleLogin = (values) => {
    console.log("Logica de inicio de sesion", values);
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl h-80">
      <div className="card-body">
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
              <fieldset className="fieldset text-base-content">
                {/* User input */}
                
                <label className="label text-base">Usuario</label>
                <label className="input w-full focus:outline-none focus-within:outline-none gap-2">
                  <User size={15} />
                  <Field
                    type="text"
                    name="username"
                    placeholder="Usuario"
                    className="grow bg-transparent outline-none"
                  />
                </label>
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-error text-xs transition-all"
                />

                {/* Password input */}
                <label className="label text-base mt-3">Contraseña</label>
                <label className="input w-full focus:outline-none focus-within:outline-none gap-2">
                  <KeyRound size={15} />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="grow bg-transparent outline-none"
                  />
                </label>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-error text-xs"
                />

                <button
                  className="btn btn-neutral mt-4"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Iniciar sesión
                </button>
              </fieldset>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
