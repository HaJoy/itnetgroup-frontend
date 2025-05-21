import { React, useState, useEffect } from "react";
import { LoginForm } from "../components/ui/LoginForm";

export const Login = () => {
  useEffect(() => {
    document.title = "Iniciar sesión | ITNetGROUP";
  }, []);

  return (
    <section className="flex items-center justify-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left max-w-md text-base-content">
            <h1 className="text-4xl font-bold">Bienvenido a <span className="text-5xl text-secondary">ITNetGROUP</span></h1>
            <p className="py-6">
              Aquí podrá visualizar los activos TI de su empresa y mantenerse al
              tanto de los cambios. Por favor inicie sesión para continuar.
            </p>
          </div>

          <LoginForm />
        </div>
      </div>
    </section>
  );
};
