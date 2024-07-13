const Home = () => {
  return (
    <div className="mt-[40px] skills">
      <nav className="px-7">
        <ul className="list-disc">
          <p className="my-3">
            <b className="text-[25px] text-primaryDark font-bold cv">
              Hey everybody it's my CV: {''}
            </b>
            <br />
          </p>
          <div className="px-5 proficiencies">
            <li className="w-[80%]">
              My name is Ildar I am a <b>Junior FrontEnd Developer</b> with 1
              year of development experience, specializing in user interface
              development. My technical mastery in <b>JavaScript</b>,{' '}
              <b>React</b> and <b>Redux</b> {''}
              forms the core of my development experience. In addition, I have
              leadership skills and see things through to completion.
            </li>
            <br />
            <li className="w-[80%]">
              <b>Training:</b> In July 2023 I got interested in IT, every day I
              watched different videos on Androind, Backend and Frontend
              development, only FrontEnd development caught my eye, immediately
              I started watching different guides, layout, but I realized that I
              still have a long time to grow at least to the position of Junior,
              I signed up for courses in Geeks, where I studied exactly 5
              months, during the training I observed all deadlines on homework
              and was always ahead of my group.
            </li>
            <br />
            <li className="w-[80%]">
              <b>Other skills:</b> I also know well such programs as{' '}
              <b>After Effects</b>, <b>Cinema 4D</b>, if you need to animate
              some model for use on the page can contact me, also constantly
              before making your project all the design did in <b>Figma</b>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
