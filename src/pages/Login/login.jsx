import React from "react";
import FormLogin from "../../components/Fragment/FormLogin";
import AuthLayouts from "../../components/Layout/AuthLayouts";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex justify-center min-h-screen items-center bg-neutral-50">
      <AuthLayouts title="Login">
        <FormLogin />
        <p className="text-sm text-zinc-600 text-center mt-5">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="cursor-pointer font-semibold text-black"
          >
            {" "}
            Register
          </Link>
        </p>
      </AuthLayouts>
    </div>
  );
}

export default LoginPage;
