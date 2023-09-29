import { Link } from "react-router-dom";


const Signup = () => {
    return (
        <div className="pt-12 lg:pt-24 bg-slate-600 min-h-screen text-white">
      <div className="hero pt-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            
          <div className="text-center lg:text-right w-full flex flex-col justify-center">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6 hidden lg:block">
              Already have an account? <span className="underline"><Link to='/login'>Login</Link></span> here.
            </p>
          </div>
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-neutral hover:bg-white hover:text-black">Sign Up</button>
              </div>

            </div>
          </div>

          <p className=" lg:hidden">
          Already have an account? <span className="underline"><Link to='/login'>Login</Link></span> here.
            </p>

        </div>
      </div>
    </div>
    );
};

export default Signup;