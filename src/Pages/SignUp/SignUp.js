import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

  const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          form.reset();
        })
        .catch(err=>console.error(err));
    }

    return (
        <div className="hero w-full my-20 ">
        <div className="hero-content  gap-20 grid  md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            
            <img className='w-3/4' src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  py-20 bg-base-100">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name"  name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="Your Email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Your Password" name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover"  >Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up"  />
              </div>
            </form>
            <p className='text-center'>Already have an Account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;