// const LoginP = () => {
//   return (
//     <div className="wrapper">
//       <div className="card-switch">
//         <label className="switch">
//           <input className="toggle" type="checkbox" />
//           <span className="slider"></span>
//           <span className="card-side"></span>
//           <div className="flip-card__inner">
//             <div className="flip-card__front">
//               <div className="title">Log in</div>
//               <form action="" className="flip-card__form">
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                   className="flip-card__input"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   name="passworda"
//                   className="flip-card__input"
//                 />
//                 <button className="flip-card__btn">Let s go!</button>
//               </form>
//             </div>
//             <div className="flip-card__back">
//               <div className="title">Sign up</div>
//               <form action="" className="flip-card__form">
//                 <input
//                   type="name"
//                   placeholder="Name"
//                   className="flip-card__input"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                   className="flip-card__input"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   name="password"
//                   className="flip-card__input"
//                 />
//                 <button className="flip-card__btn">Confirm!</button>
//               </form>
//             </div>
//           </div>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default LoginP;

import { useNavigate } from "react-router-dom";

const LoginP = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here, for demonstration purposes, just navigate to the dashboard page
    navigate("/dashboard");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here, for demonstration purposes, just navigate to the dashboard page
    navigate("/dashboard");
  };

  return (
    <div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input className="toggle" type="checkbox" />
          <span className="slider"></span>
          <span className="card-side"></span>
          <div className="flip-card__inner">
            <div className="flip-card__front">
              <div className="title">Log in</div>
              <form action="" className="flip-card__form">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="flip-card__input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="passworda"
                  className="flip-card__input"
                />
                <button className="flip-card__btn" onClick={handleLogin}>
                  Let s go!
                </button>
              </form>
            </div>
            <div className="flip-card__back">
              <div className="title">Sign up</div>
              <form action="" className="flip-card__form">
                <input
                  type="name"
                  placeholder="Name"
                  className="flip-card__input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="flip-card__input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="flip-card__input"
                />
                <button className="flip-card__btn" onClick={handleSignup}>
                  Confirm!
                </button>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default LoginP;
