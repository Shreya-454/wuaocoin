import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import earth from "../assets/images/earth.png";



const Nav = () => {
  const [nav, setnav] = useState(false);
function over() {
  setnav(!nav);
  if (nav === false) {
      document.body.classList.add("overflow-hidden");
    }
    else {
      document.body.classList.remove("overflow-hidden");
    } 
}
  return (
    <div>
      <nav>
        <div className="max-w-[1140px] mx-auto px-3">
          <div className="flex pt-[23px] justify-between items-center relative">
            <img className="relative z-[5]" src={logo} alt="logo" />
            <label
              className="flex flex-col gap-[9px] absolute right-2 md:hidden z-[5]"
              onClick={over}
            >
              <span className="w-[40px] h-[5px] bg-white rounded-md"></span>
              <span className="w-[40px] h-[5px] bg-white rounded-md"></span>
              <span className="w-[40px] h-[5px] bg-white rounded-md"></span>
            </label>
            <ul
              className={`flex gap-[22px] items-center max-md:flex-col max-md:h-full max-md:justify-center max-md:items-center max-md:bg-[#FFB33B] max-md:fixed max-md:top-0 max-md:w-full m-0 p-0 z-[3] duration-500  ${
                nav ? "right-0" : "max-md:right-[-100%]"
              }`}
            >
              <li className="pr-2">
                <a
                  className="text-white text-[16px] font-Montserrat leading-[normal] font-semibold after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-white after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full "
                  href="#"
                >
                  ICO
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[16px] font-Montserrat leading-[normal] font-semibold after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-white after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full "
                  href="#"
                >
                  WHITEPAPER
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="https://discord.com/" target="blank">
                  <div className="w-[35px] h-[35px] rounded-full hover:scale-110 duration-300 bg-white flex justify-center items-center">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3855 4.55173C15.2813 4.037 14.0858 3.6634 12.8405 3.44755C12.8295 3.4472 12.8187 3.44925 12.8086 3.45355C12.7986 3.45785 12.7896 3.46431 12.7824 3.47245C12.6329 3.74642 12.4586 4.10342 12.3423 4.37739C11.0215 4.17813 9.67819 4.17813 8.35732 4.37739C8.24109 4.09511 8.06675 3.74642 7.90901 3.47245C7.9007 3.45585 7.8758 3.44755 7.85089 3.44755C6.60557 3.6634 5.41837 4.037 4.30588 4.55173C4.29758 4.55173 4.28928 4.56003 4.28098 4.56833C2.0228 7.9473 1.40014 11.2349 1.70732 14.4894C1.70732 14.506 1.71562 14.5226 1.73223 14.5309C3.22661 15.6268 4.66288 16.2909 6.08254 16.7309C6.10744 16.7392 6.13235 16.7309 6.14065 16.7143C6.47274 16.2577 6.77161 15.7762 7.02898 15.2698C7.04558 15.2366 7.02898 15.2034 6.99577 15.1951C6.52255 15.0124 6.07424 14.7966 5.63422 14.5475C5.60102 14.5309 5.60102 14.4811 5.62592 14.4562C5.71724 14.3897 5.80857 14.315 5.89989 14.2486C5.9165 14.232 5.9414 14.232 5.95801 14.2403C8.81394 15.5437 11.894 15.5437 14.7167 14.2403C14.7333 14.232 14.7583 14.232 14.7749 14.2486C14.8662 14.3233 14.9575 14.3897 15.0488 14.4645C15.082 14.4894 15.082 14.5392 15.0405 14.5558C14.6088 14.8132 14.1522 15.0207 13.679 15.2034C13.6458 15.2117 13.6375 15.2532 13.6458 15.2781C13.9114 15.7845 14.2103 16.266 14.5341 16.7226C14.559 16.7309 14.5839 16.7392 14.6088 16.7309C16.0368 16.2909 17.473 15.6268 18.9674 14.5309C18.984 14.5226 18.9923 14.506 18.9923 14.4894C19.3576 10.7285 18.3863 7.46578 16.4187 4.56833C16.4104 4.56003 16.4021 4.55173 16.3855 4.55173ZM7.46069 12.5052C6.60557 12.5052 5.89159 11.7165 5.89159 10.7451C5.89159 9.77377 6.58897 8.98506 7.46069 8.98506C8.34072 8.98506 9.03809 9.78207 9.02979 10.7451C9.02979 11.7165 8.33241 12.5052 7.46069 12.5052ZM13.2473 12.5052C12.3922 12.5052 11.6782 11.7165 11.6782 10.7451C11.6782 9.77377 12.3755 8.98506 13.2473 8.98506C14.1273 8.98506 14.8247 9.78207 14.8164 10.7451C14.8164 11.7165 14.1273 12.5052 13.2473 12.5052Z"
                        fill="url(#paint0_linear_0_44)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_44"
                          x1="10.3464"
                          y1="2.24996"
                          x2="10.3464"
                          y2="15.3463"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFBA3B" />
                          <stop offset="0.5315" stopColor="#FFA53B" />
                          <stop offset="1" stopColor="#FF983B" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </a>
                <a href="https://twitter.com/i/flow/login" target="blank">
                  <div className="w-[35px] h-[35px] rounded-full hover:scale-110 duration-300 bg-white flex justify-center items-center">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.7393 5.54247C18.1439 5.79932 17.4959 5.98417 16.8285 6.05617C17.5214 5.6445 18.0403 4.99414 18.2879 4.22711C17.6376 4.61391 16.9253 4.88515 16.1825 5.02878C15.872 4.69688 15.4966 4.43247 15.0794 4.25203C14.6623 4.07159 14.2125 3.97898 13.758 3.97999C11.9192 3.97999 10.4404 5.47048 10.4404 7.29954C10.4404 7.55639 10.4716 7.81323 10.5221 8.06035C7.76883 7.91636 5.31321 6.60099 3.68068 4.58708C3.38321 5.09516 3.22733 5.67367 3.22925 6.26242C3.22925 7.41434 3.81494 8.43006 4.70807 9.02742C4.18173 9.00669 3.66773 8.86202 3.20785 8.60518V8.64604C3.20785 10.2591 4.34809 11.5959 5.86777 11.9033C5.58243 11.9774 5.2889 12.0154 4.9941 12.0162C4.77812 12.0162 4.57381 11.9948 4.36755 11.9656C4.78784 13.281 6.01176 14.2364 7.46917 14.2675C6.32893 15.1606 4.9007 15.686 3.34989 15.686C3.07164 15.686 2.81479 15.6763 2.54822 15.6451C4.01925 16.5888 5.76464 17.1337 7.64429 17.1337C13.7464 17.1337 17.0854 12.0784 17.0854 7.69065C17.0854 7.54666 17.0854 7.40267 17.0756 7.25868C17.7216 6.78585 18.2879 6.20016 18.7393 5.54247Z"
                        fill="url(#paint0_linear_0_48)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_48"
                          x1="10.6394"
                          y1="2.79444"
                          x2="10.6394"
                          y2="15.7595"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFBA3B" />
                          <stop offset="0.5315" stopColor="#FFA53B" />
                          <stop offset="1" stopColor="#FF983B" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </a>
                <a href="https://web.telegram.org/k/" target="blank">
                  <div className="w-[35px] h-[35px] hover:scale-110 duration-300 rounded-full bg-white flex justify-center items-center">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.845 1.96463L15.2143 14.3711C15.0156 15.2466 14.4982 15.4645 13.7628 15.0523L9.75416 12.0984L7.82018 13.9589C7.60598 14.1731 7.42728 14.3518 7.01446 14.3518L7.30275 10.2697L14.7317 3.55677C15.0549 3.2691 14.6613 3.10908 14.2298 3.39737L5.04561 9.18063L1.09172 7.94278C0.231831 7.67442 0.216264 7.08289 1.27105 6.67007L16.736 0.711842C17.4521 0.443476 18.0785 0.871243 17.845 1.96525V1.96463Z"
                        fill="url(#paint0_linear_0_53)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_53"
                          x1="9.17364"
                          y1="-0.683626"
                          x2="9.17364"
                          y2="13.7263"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFBA3B" />
                          <stop offset="0.5315" stopColor="#FFA53B" />
                          <stop offset="1" stopColor="#FF983B" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </a>
                <a href="https://www.linkedin.com/" target="blank">
                  <div className="w-[35px] h-[35px] hover:scale-110 duration-300 rounded-full bg-white flex justify-center items-center">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_0_56"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="17"
                        height="17"
                      >
                        <path
                          d="M2.28606 3.83736C3.24 3.83736 4.01331 3.08388 4.01331 2.1544C4.01331 1.22492 3.24 0.471436 2.28606 0.471436C1.33212 0.471436 0.558807 1.22492 0.558807 2.1544C0.558807 3.08388 1.33212 3.83736 2.28606 3.83736Z"
                          fill="white"
                        />
                        <path
                          d="M0.558807 6.36157H4.01331V16.8801H0.558807V6.36157ZM7.46782 10.3586V16.8801H10.4905V10.9897C10.4905 9.93787 11.1382 9.09639 12.2178 9.09639C13.2973 9.09639 13.945 10.1482 13.945 10.9897V16.8801H16.9677V10.3586C16.9677 9.09639 15.4564 6.36157 12.2178 6.36157C8.97916 6.36157 7.46782 9.09639 7.46782 10.3586Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_0_56)">
                        <path
                          d="M-1.59903 -1.21167H19.128V18.9839H-1.59903V-1.21167Z"
                          fill="url(#paint0_linear_0_56)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_56"
                          x1="8.75887"
                          y1="-3.0319"
                          x2="8.75887"
                          y2="16.8741"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFBA3B" />
                          <stop offset="0.5315" stopColor="#FFA53B" />
                          <stop offset="1" stopColor="#FF983B" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-[1px] border-white rounded-[167px] flex items-center gap-2 py-1 ps-[5px] pe-[7.5px] text-white  "
                >
                  <img src={earth} alt="earth" />{" "}
                  <select
                    name="langauge"
                    id="language"
                    className="border-0 outline-none bg-[#FFB33B]"
                  >
                    <option value="English">Eng</option>
                    <option value="Hindi">हिन्दी</option>
                    <option value="Chines">ਪੰਜਾਬੀ</option>
                  </select>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
