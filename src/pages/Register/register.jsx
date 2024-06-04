import React from "react";
import AuthLayouts from "../../components/Layout/AuthLayouts";
import FormRegister from "../../components/Fragment/FormRegister";

const RegisterPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
    <AuthLayouts title="Register">
    <FormRegister/>
    </AuthLayouts>
  </div>
  );
};

export default RegisterPage;
