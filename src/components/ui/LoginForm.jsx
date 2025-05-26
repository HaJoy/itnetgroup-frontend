import React from "react";
import { KeyRound, User } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { validateCredentials } from "../../api/userService";
import { useUser } from "../../context/userCtx";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({ onError }) => {

  const { setUser } = useUser();
  const navigate = useNavigate();

  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  // Funcion de inicio de sesion
  const handleLogin = async (values) => {
    try {
      const response = await validateCredentials(values);
      setUser(response.usuario); // Guarda la info del usuario globalmente
      navigate('/dashboard'); // Redirigir al dashboard
      
    } catch (error) {
      console.log('Error en el login:', error.response ? error.response.data.mensaje : error.message);
      onError(); // Muestra el toast en el componente padre (la pagina en si)
    }
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
            <Form autoComplete="off">
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
