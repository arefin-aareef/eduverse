/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="pt-12 lg:pt-24 bg-slate-600 min-h-screen text-white">
      <div className="hero pt-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            
          <div className="text-center lg:text-right w-full flex flex-col justify-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 hidden lg:block">
              Didn't register yet? <span className="underline"><Link to='/signup'>Create account</Link></span> here.
            </p>
          </div>
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral hover:bg-white hover:text-black">Login</button>
              </div>
            </div>
          </div>

          <p className=" lg:hidden">
              Didn't register yet? <span className="underline"><Link to='/signup'>Create account</Link></span> here.
            </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
