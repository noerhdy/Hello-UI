import React from "react";
import AuthLayouts from "../../components/Layout/AuthLayouts";
import FormRegister from "../../components/Fragment/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-neutral-50">
    <AuthLayouts title="Register">
    <FormRegister/>
    <p className="text-sm text-zinc-600 text-center mt-5">Have an account? <Link to="/login" className="cursor-pointer font-semibold text-black"> Log in</Link></p>
    </AuthLayouts>
  </div>
  );
};

export default RegisterPage;
