const Skills = () => {
  return (
    <div className="mt-[40px] skills">
      <nav className="px-7 my-10">
        <ul className="list-disc">
          <p className="my-3">
            <b className="text-[25px] text-primaryDark font-bold core">
              Core Proficiencies: {''}
            </b>
            <br />
          </p>
          <div className="px-5 proficiencies">
            <li>
              <div>
                <p>
                  <b>Application Architecture:</b> I’ve gained experience in
                  distinguishing the best
                </p>
                <p>architecture for any particular application, ensuring a</p>
                <p>seamless user experience.</p>
              </div>
              <br />
            </li>
            <li>
              {' '}
              <div>
                <p>
                  <b>UI Design:</b> Designing intuitive and interactive UI
                  components that captivate
                </p>
                <p>users is one of my strong suits.</p>
              </div>
            </li>
            <br />
            <li>
              <div>
                <p>
                  <b>Code Management:</b> I excel in writing and managing code
                  for optimal
                </p>
                <p>application state, ensuring smooth performance.</p>
              </div>
            </li>
            <br />
            <li>
              <div>
                <p>
                  <b>Server-Side Interaction:</b> I have a strong background in
                  interfacing with the server
                </p>
                <p>
                  side of applications, ensuring robust and reliable data
                  exchange.
                </p>
              </div>
            </li>
            <br />
            <li>
              <div>
                <p>
                  <b>Performance Optimization:</b> I am adept at identifying
                  bottlenecks and
                </p>
                <p>
                  optimizing application performance for a superior user
                  experience.
                </p>
              </div>
            </li>
            <br />
          </div>
          <p className="my-2">
            <b className="text-[25px] text-primaryDark font-bold continuous">
              Continuous Learning and Collaboration:
            </b>
          </p>
          <div className="px-5">
            <li className="text-tertiary">
              <p className="w-[60%] text-[15px] tracking-normal text-grayText p">
                I am always striving for self-improvement and enhancement of my
                hard skills, so I make it a point to learn new technologies and
                tools as they emerge. I believe in the power of teamwork and am
                always ready to share my knowledge and experience with other
                developers. Together, we can create maintainable, high-quality,
                and efficient code that aligns with our team’s objectives.
              </p>
            </li>
          </div>
          <br />
          <div>
            <p>
              <b className="text-[25px] text-primaryDark font-bold hard-skills">
                Hard Skills:
              </b>
            </p>
            <div className="px-5">
              <li className="text-[15px] tracking-normal text-grayText font-medium">
                HTML5
              </li>
              <li className="text-[15px] tracking-normal text-grayText font-medium">
                CSS3, SCSS, SASS, LESS, Tailwind CSS, MUI
              </li>
              <li className="text-[15px] tracking-normal text-grayText font-medium">
                JavaScript, TypeScript
              </li>
              <li className="text-[15px] tracking-normal text-grayText font-medium">
                Git
              </li>
              <li className="text-[15px] tracking-normal text-grayText font-medium">
                Firebase
              </li>
              <li className="text-[15px] tracking-normal text-grayText font-medium">
                React
              </li>
              <li className="text-[15px] tracking-normal text-grayText font-medium">
                Redux, Redux-Toolkit, Redux Thunk
              </li>
              <li className="text-[15px] tracking-normal text-grayText font-medium">
                Next JS
              </li>
              <li className="text-[15px] tracking-normal text-grayText font-medium">
                React-Router-Dom, React-Hook-Form, React-Redux, axios,
                framer-motion, Carousel, react-parallax-tilt, npm
              </li>
            </div>
          </div>
          <br />
          <div className="skills">
            <p>
              <b className="text-[25px] text-primaryDark font-bold experience">
                Engineering Experience:
              </b>
            </p>
            <span>Diploma project:</span>
            <div className="px-5 mt-2 project">
              <li className="w-[80%]">
                <b>Auth:</b> I was given a task with registration, initially I
                just prepared all the functionality, made modal windows for
                registration and login, also added simulation of user login,
                everything worked perfectly, but since the backend developers
                could not make registration. I had to make registration through
                firebase.
              </li>
              <li className="mt-2 w-[80%]">
                <b>Layout:</b> On the layout gave two pages user profile and a
                small part on the main page, in the user profile also displayed
                the user's data, which he could change, there were no problems
              </li>
            </div>
          </div>
          <br />
          <div className="skills">
            <p>
              <b className="text-[25px] text-primaryDark font-bold languages">
                Languages:
              </b>
            </p>
            <div className="px-5 mt-2">
              <li className="w-[80%]">
                <b>English</b>: <span className="text-grayText">B1</span>
              </li>
              <li className="w-[80%]">
                <b>Russian</b>: <span className="text-grayText">C2</span>
              </li>
            </div>
          </div>
          <br />
          <div className="skills">
            <p className="education">
              <b className="text-[25px] text-primaryDark font-bold">
                Education:
              </b>
            </p>
            <div className="px-5 mt-2">
              <li className="w-[80%]">
                <b>FrontEnd Developer</b>{' '}
                <a
                  className="text-primary underline"
                  href="https://geeks.kg/"
                  target="_blank"
                >
                  Geeks
                </a>{' '}
                (Jun 2023 - Oct 2023)
              </li>
            </div>
          </div>
        </ul>
        <div className="mt-5 flex gap-3">
          <a
            href="https://github.com/IldarAbdulin"
            className="underline text-[17px] font-semibold"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://t.me/RdQeWaEd"
            className="underline text-primary text-[17px] font-semibold"
            target="_blank"
          >
            Telegram
          </a>
          <a
            href="mailto:iabdulin377@gmail.com"
            className="underline text-red-600 text-[17px] font-semibold"
            target="_blank"
          >
            Gmail
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Skills;
