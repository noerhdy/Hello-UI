import React from "react";
import FormLogin from "../../components/Fragment/FormLogin";
import AuthLayouts from "../../components/Layout/AuthLayouts";



function LoginPage(){
  return (
    <div className="flex justify-center min-h-screen items-center">
      <AuthLayouts title="Login">
      <FormLogin/>
      </AuthLayouts>
    </div>
  );
};

export default LoginPage;
