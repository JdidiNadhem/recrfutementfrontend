import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlusG,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   background: black;
//   color: white;
//   width: 25%;
// `;

const Container = styled.div`
  display: flex;
  padding: 70px 100px 0px 100px;
  align-items: center;
`;

const LoginPage = styled.div`
  background-image: url(https://job-board.dexignzone.com/react/demo/static/media/bg6.9d838a09.jpg);
  background-size: cover;
  height: 100vh;
`;

// const Title = styled.h1`
//   text-2xl font-bold text-center mb-4
// `;

// const Input = styled.input`
//   w-full px-3 py-2 mb-4 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500
// `;

// const Button = styled.button`
//   w-full py-2 text-center bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500
// `;

const Login = () => {
  return (
    <LoginPage>
      <Container>
        <div class="flex flex-col text-white w-[50%]">
          <div className="logo py-5">
            <a href="/react/demo/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAAA9CAMAAACqcT2MAAAAilBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2N2iNAAAALXRSTlMA3ndEEWbuM7uqmYhVzCJA8uYI2cc490mvUAP7j3Fc1bYWwTwoHYAuoCthaaWdLS78AAAFxElEQVR42u2c2XbaMBBAR7Is7y4QIEDYydIk1f//XiPkZCyNkWgWTs/B96m17EG6aBnJpeBhPngjgp4O1uqNOfR0UGo3t9DTu+ndfBMT7eYJelxGyctMu9k+lvfQg4zWs6FC2O9+ZDU8LIfKZbMaQc+iuFNdDGO4dqIb9c6UadBUWsNV86gatvHTzoywCR+/y7rqJPl3I6F4tlfz5rpawdUyMwaWO1Ly3BRxuFJM79hMoIu1VJpX+C6YUup/nd+Z2w24mWhOLdY7M0v/ukY3iVEDJxFM3zDocBcpG/5lNxgTKfiFFkrqZnhcp8HD7njL7OJukCqCi4BucPVmTh44cmbkY7JzuLwbpICfhroRSmNtK+PtUI4fF+Qo8OaSbi4vh7pZms+luc7G6jtV8EyHfacbawhxpvAa4efcLKY65WtrmKuGJbR40lfGl3WDZPpaBh5+ws2adJu9arizOk6qLz1c3g0+w8DDT7jZagkCnGXL8ESqzP/JTcJTMwvxTjeJGSsZF2E3hb7oD44BeGbWNm5HYU1czi3PpalGzt1GLAbu4iym6p1bcJ3t/8FNVCmEEzd1iqVZ7XGD6ak/ON6JVInrxpSjm5i14tiN+KWvlWe5yUn+53WTKwuW2G6c1ag8o9+wM4KXUtnEjptUtd2I1Lo5Fe1GrHBIBcYU3OpLk3PdpMolat9YuKU8PN/k4eCCkRL7O6lU242olE1qGoEr+JDsyQ1yYV2v9bX1mW7MiM+T1hosa7zxSGYaFJsKlsF1KvIGx4fzuOlDFVpofa7kmJiQQBoO6Vgj6SSSqO4zm5HUHvVD26CbGHs6tqay6igje6KVIpDfFHBO8CwTrlLbTYrlnAYybtQH246xjcoQPDQNumHmq3QmiLhdx8T9RO7Pi3OAQHCKkNqp5YYJu5QGUhwGOMjAYSWtumDshmHITUwqKxh+twxNtDu39LlhGM0fnH7NqVX/CEKBsN9QN4cJwCFagLgljQ/3G+ycrGMRFvi9C/qWOfLvNQWcE5wWMJI/BgJxqG40U3dMPSyVWt4D7FZTNZuQxsvN20P7kBtJt4YC51tm5f/4BPe6UTIJBafElht80BuIo7v2LmnUvKOaNknOnxrLdnf4nN8NVpUW45/IoMpPzcURrkWB4JgwI4zc5BHqWcNn5MtafGINr+3WYU5SnNxPZdQN7expODim29QNfq6nlm7ut8PbCbG9P0++5IZ/yg0uZUkweCLVt7mZ6BtecA0j3FgLnIRLjik6EwSDm0woIfMNceMPZJCthWqkCPh6YTHEO799LhbuXBx1hs9DwUvs2yE34bkYZq1BxRUBdZSh15vqC2t4jG3yugkFz1G7x01oDbdmkRx7BuUeez3JIYSz1ShbHjnJqtKu3A91QXBM5aHgqVPEfW5iGsip2sC0+f1eysxkhF0ZdF45m5Ok3dbE+o7CewbqhjQkFDy1+02ifG6EpIE03G7Tb3MI0ckjbqYmpAdWdbsalZXnysj+0PSTe01cf5JQ8MKynjCvG+AkkONmNP1o9f2vDib4EqvqelnCTZ+T9oKfn39GwVnwjCIy4VJvcNTWZBKFdw2nZxSSHiO+6r8PBPhIyFkXWfIddylN+a1Z1Xu21Q2rw8Erp0ZeN/Rsi2XOFLRx3kZRnqdmJnQpaN2xzHsmGsWeM1GPmlDwmllrbORzQ89Eqzp33NQqIOd5QE8m6JF2Jpyy1HOWHtmP1hByI/l5wUWG13PwuaFn6QWA6wbWRk4N3UwG5LUw2QemnDztfQcTHR+V3e9gCBkvw8Gx4Gi94jV43CAlvgpCN24XHczBArdcV/27mGWTyjyRknnT9V/gailUY+cALRbl/mOuvGJe7pThpphPHt6oD+t8qAxsAlfN/Vid4k//z/Zfmepi3P/e443FakPM7K96prE4LKsp5lv7x2foabG7zbWY/OUgoKfzN4n9j+7637L2bpD+/xX4Ev3/R3Gavwc7ChND0FF0AAAAAElFTkSuQmCC"
                alt=""
              />
            </a>
          </div>
          <h2 className="py-5 text-2xl">Login To You Now</h2>
          <p className="w-[50%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry.
          </p>
          <div className="flex gap-5 py-5">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
            <FontAwesomeIcon icon={faGooglePlusG} size="lg" />
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </div>
          <ul className="list-inline m-a0">
            <li>
              <a className="m-r10 text-white " href="/react/demo/">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a className="m-r10 text-white " href="/react/demo/">
                <i className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a className="m-r10 text-white " href="/react/demo/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a className="m-r10 text-white " href="/react/demo/">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a className="m-r10 text-white" href="/react/demo/">
                <i className="fa fa-twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col bg-white text-white w-[40%] rounded h-[500px]">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required=""
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required=""
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="mr5 mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
              <p className="mb-5 mt-10 text-center text-sm text-gray-500">
                Not a member?
                <Link to="/register">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </LoginPage>
  );
};

export default Login;
