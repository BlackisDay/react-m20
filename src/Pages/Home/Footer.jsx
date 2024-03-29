import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./img/logo.svg" alt="Logoipsum" />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="text-md"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.stackoverflow.com"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="600px" height="128px">
<path fill="#222426" d="M135.874,72.909l-6.833-0.605c-5.363-0.432-7.439-2.595-7.439-6.228c0-4.324,3.286-7.006,9.515-7.006
    c4.412,0,8.304,1.038,11.331,3.373l4.066-4.065c-3.807-3.113-9.256-4.583-15.31-4.583c-9.083,0-15.657,4.671-15.657,12.455
    c0,7.006,4.412,10.726,12.716,11.418l7.006,0.605c4.93,0.433,7.093,2.509,7.093,6.228c0,5.017-4.325,7.526-11.332,7.526
    c-5.276,0-9.861-1.385-13.235-4.931l-4.152,4.153c4.671,4.498,10.294,6.141,17.473,6.141c10.293,0,17.299-4.758,17.299-12.974
    C148.416,76.456,143.313,73.602,135.874,72.909z M189.132,53.794c-6.828,0-11.129,1.347-14.898,6.118
    c-0.051,0.065,4.086,4.088,4.086,4.088c2.508-3.546,5.276-4.844,10.726-4.844c7.785,0,10.899,3.114,10.899,9.341v4.065h-12.802
    c-9.515,0-14.705,4.845-14.705,12.283c0,3.373,1.124,6.573,3.2,8.65c2.682,2.768,6.142,3.892,12.024,3.892
    c5.709,0,8.822-1.124,12.283-4.585v4.065h6.228V67.979C206.171,58.723,200.549,53.794,189.132,53.794z M199.944,81.818
    c0,3.548-0.692,5.969-2.163,7.353c-2.681,2.595-5.881,2.855-9.515,2.855c-6.747,0-9.774-2.336-9.774-7.267
    c0-4.929,3.114-7.524,9.515-7.524h11.937V81.818z M230.564,59.33c4.065,0,6.574,1.21,9.774,4.757c0,0,4.17-4.052,4.135-4.089
    c-4.367-4.671-8.074-6.203-13.91-6.203c-10.726,0-18.857,7.266-18.857,21.798c0,14.531,8.131,21.798,18.857,21.798
    c5.882,0,9.601-1.558,14.013-6.314l-4.239-4.065c-3.2,3.546-5.709,4.844-9.774,4.844c-4.152,0-7.612-1.644-9.86-4.844
    c-1.99-2.768-2.768-6.055-2.768-11.418c0-5.363,0.778-8.65,2.768-11.418C222.952,60.972,226.412,59.33,230.564,59.33z
     M283.904,54.25h-7.764l-19.297,18.786l0.03-37.753h-6.228V96.87h6.228l-0.03-15.533l7.555-7.582l14.274,23.114h7.698
    l-17.657-27.428L283.904,54.25z M313.164,52.033c-6.552,0-10.977,2.553-13.7,5.446c-3.999,4.17-5.021,9.191-5.021,17.19
    c0,8.083,1.022,13.104,5.021,17.274c2.723,2.893,7.148,5.446,13.7,5.446c6.552,0,11.062-2.553,13.785-5.446
    c3.999-4.17,5.021-9.191,5.021-17.274c0-7.999-1.022-13.02-5.021-17.19C324.226,54.586,319.716,52.033,313.164,52.033z
     M318.355,85.475c-1.276,1.276-2.979,1.957-5.191,1.957s-3.829-0.681-5.105-1.957c-2.298-2.297-2.553-6.212-2.553-10.806
    c0-4.596,0.255-8.425,2.553-10.722c1.276-1.276,2.893-1.957,5.105-1.957s3.915,0.681,5.191,1.957
    c2.297,2.297,2.553,6.126,2.553,10.722C320.908,79.264,320.652,83.179,318.355,85.475z M361.427,52.544l-8.935,27.401l-9.021-27.401
    h-11.658l16.338,44.334h8.68l16.253-44.334H361.427z M391.904,52.033c-11.488,0-19.316,8.169-19.316,22.636
    c0,17.955,10.041,22.72,20.508,22.72c7.999,0,12.339-2.468,16.849-6.979l-6.722-6.552c-2.809,2.809-5.191,4.17-10.042,4.17
    c-6.212,0-9.7-4.17-9.7-9.87h27.741v-4.935C411.221,61.054,404.242,52.033,391.904,52.033z M383.48,70.584
    c0.084-1.958,0.341-3.148,1.022-4.765c1.191-2.639,3.659-4.595,7.402-4.595c3.745,0,6.213,1.956,7.404,4.595
    c0.681,1.617,0.936,2.807,1.022,4.765H383.48z M427.538,56.798v-4.254h-10.808v44.334h11.062v-26.72
    c0-5.616,3.745-8.169,7.149-8.169c2.723,0,4.134,0.905,5.837,2.607l8.373-8.393c-3.064-3.064-6.127-4.17-10.467-4.17
    C433.92,52.033,429.665,54.246,427.538,56.798z M452.583,47.922v48.91h11.063V61.878h8.169v-8.424h-8.169v-4.851
    c0-2.553,1.276-3.999,3.914-3.999h4.256v-9.36h-6.298C456.497,35.244,452.583,41.626,452.583,47.922z M517.359,52.033
    c-6.552,0-10.977,2.553-13.7,5.446c-3.999,4.17-5.021,9.191-5.021,17.19c0,8.083,1.022,13.104,5.021,17.274
    c2.723,2.893,7.147,5.446,13.7,5.446c6.552,0,11.062-2.553,13.785-5.446c3.999-4.17,5.021-9.191,5.021-17.274
    c0-7.999-1.022-13.02-5.021-17.19C528.421,54.586,523.911,52.033,517.359,52.033z M522.55,85.475
    c-1.276,1.276-2.979,1.957-5.191,1.957c-2.212,0-3.829-0.681-5.106-1.957c-2.298-2.297-2.553-6.212-2.553-10.806
    c0-4.596,0.255-8.425,2.553-10.722c1.276-1.276,2.893-1.957,5.106-1.957c2.212,0,3.915,0.681,5.191,1.957
    c2.297,2.297,2.553,6.126,2.553,10.722C525.103,79.264,524.847,83.179,522.55,85.475z M588.428,52.544l-7.149,27.401l-9.105-27.401
    h-8.083l-9.021,27.401l-7.147-27.401h-11.743l13.615,44.334h9.105l9.275-27.826l9.275,27.826h9.105l13.531-44.334H588.428z
     M488.137,83.518V35.244h-11.062v48.955c0,6.297,3.829,12.679,12.934,12.679h6.296v-9.361h-4.254
    C489.243,87.517,488.137,86.156,488.137,83.518z M165.686,61.007l5.758-5.758h-11.791V41.251h-6.228v44.2
    c0,6.314,3.633,11.418,10.899,11.418h4.412v-5.363h-3.287c-3.979,0-5.796-2.336-5.796-6.228V61.007H165.686z" />
<polygon fill="#BCBBBB" points="84.072,107.351 84.072,75.8 94.588,75.8 94.588,117.869 0,117.869 0,75.8 10.516,75.8 
    10.516,107.351 " />
<path fill="#F48024" d="M22.089,72.898l51.458,10.815l2.163-10.292L24.252,62.606L22.089,72.898z M28.897,48.259l47.666,22.199
    l4.44-9.533L33.337,38.726L28.897,48.259z M42.088,24.874l40.405,33.65l6.73-8.081l-40.405-33.65L42.088,24.874z M68.171,0
    l-8.438,6.276l31.381,42.191l8.438-6.276L68.171,0z M21.044,96.833l52.582,0V86.316l-52.582,0V96.833z" />
</svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.0001 4.65479H11.3334C7.65152 4.65479 4.66675 7.63956 4.66675 11.3215V21.9881C4.66675 25.67 7.65152 28.6548 11.3334 28.6548H22.0001C25.6819 28.6548 28.6667 25.67 28.6667 21.9881V11.3215C28.6667 7.63956 25.6819 4.65479 22.0001 4.65479ZM26.3334 21.9881C26.3261 24.3783 24.3902 26.3141 22.0001 26.3215H11.3334C8.94321 26.3141 7.0074 24.3783 7.00008 21.9881V11.3215C7.0074 8.93125 8.94321 6.99544 11.3334 6.98812H22.0001C24.3902 6.99544 26.3261 8.93125 26.3334 11.3215V21.9881ZM23.0001 11.6548C23.7365 11.6548 24.3334 11.0578 24.3334 10.3215C24.3334 9.58508 23.7365 8.98812 23.0001 8.98812C22.2637 8.98812 21.6667 9.58508 21.6667 10.3215C21.6667 11.0578 22.2637 11.6548 23.0001 11.6548ZM16.6667 10.6548C13.353 10.6548 10.6667 13.3411 10.6667 16.6548C10.6667 19.9685 13.353 22.6548 16.6667 22.6548C19.9805 22.6548 22.6667 19.9685 22.6667 16.6548C22.6703 15.0624 22.0393 13.5342 20.9133 12.4082C19.7873 11.2822 18.2591 10.6512 16.6667 10.6548ZM13.0001 16.6548C13.0001 18.6799 14.6417 20.3215 16.6667 20.3215C18.6918 20.3215 20.3334 18.6799 20.3334 16.6548C20.3334 14.6297 18.6918 12.9881 16.6667 12.9881C14.6417 12.9881 13.0001 14.6297 13.0001 16.6548Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M28.6304 9.61132C28.0112 10.4373 27.2627 11.1579 26.4137 11.7451C26.4137 11.9609 26.4137 12.1767 26.4137 12.4045C26.4205 16.3229 24.8553 20.0803 22.0691 22.8341C19.2827 25.588 15.5083 27.108 11.5921 27.0533C9.32799 27.0609 7.0929 26.544 5.0619 25.5429C4.95238 25.4951 4.88175 25.3868 4.88216 25.2672V25.1353C4.88216 24.9632 5.02164 24.8237 5.1937 24.8237C7.41923 24.7503 9.56536 23.9787 11.3285 22.618C9.31404 22.5773 7.50159 21.384 6.66747 19.5491C6.62535 19.4489 6.63846 19.3339 6.7021 19.2457C6.76572 19.1576 6.87067 19.1091 6.979 19.1176C7.59123 19.1791 8.20958 19.1221 8.80027 18.9497C6.57652 18.4881 4.90562 16.642 4.66648 14.3824C4.65799 14.274 4.70656 14.1691 4.79467 14.1053C4.88276 14.0417 4.99766 14.0285 5.09784 14.0708C5.69459 14.3341 6.33879 14.4728 6.99099 14.4783C5.04246 13.1994 4.20082 10.7669 4.94207 8.55641C5.01859 8.34163 5.20242 8.18295 5.426 8.13871C5.64958 8.09445 5.87995 8.17116 6.03243 8.34064C8.66186 11.1391 12.2747 12.8067 16.1092 12.9918C16.0111 12.5999 15.9628 12.1971 15.9655 11.7931C16.0013 9.67441 17.3123 7.78707 19.2845 7.01461C21.2567 6.24217 23.4999 6.73749 24.964 8.26871C25.9619 8.07859 26.9267 7.74339 27.8276 7.27373C27.8936 7.23253 27.9773 7.23253 28.0433 7.27373C28.0845 7.33976 28.0845 7.42348 28.0433 7.48951C27.6069 8.48881 26.8697 9.32695 25.9345 9.88704C26.7535 9.79207 27.558 9.59888 28.3309 9.31164C28.396 9.26735 28.4815 9.26735 28.5465 9.31164C28.6011 9.33657 28.6419 9.38427 28.658 9.44201C28.6741 9.49976 28.664 9.56169 28.6304 9.61132Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made by Victor Hernandez</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
