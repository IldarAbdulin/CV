import { Link } from 'react-router-dom';
import { projects } from '../../../data/projects';

const Projects = () => {
  return (
    <div>
      <h1 className="mb-[-20px] my-3 text-center text-[30px] uppercase font-semibold text-tertiary">
        Projects
      </h1>
      <div className="proj">
        <div className="my-10 flex justify-between items-center flex-wrap projects">
          {projects.map((p) => (
            <div
              key={p.id}
              className="proj-item w-[600px] mb-5 border rounded-lg bg-slate-200 shadow-lg"
            >
              <div
                className="w-[100%] h-[300px] bg-cover bg-center rounded-lg image"
                style={{ backgroundImage: `url(${p.img})` }}
              />
              <div className="p-4">
                <p className="text-[17px] tech">
                  <span className="text-grayText">Technology</span>:{' '}
                  {p.tech.map((t) => t)}
                </p>
                <p className="text-[17px]">
                  <span className="text-grayText">Adaptive</span>:{' '}
                  {p.adaptiveVersion}
                </p>
                <p className="text-[17px]">
                  <span className="text-grayText">View:</span> {''}
                  <a
                    className="underline text-primary duration-200 hover:text-primaryDark"
                    href={p.code}
                    target="_blank"
                  >
                    code
                  </a>
                </p>
                <Link
                  to={`/projects/${p.id}`}
                  className="underline text-primary duration-200 hover:text-primaryDark"
                >
                  More about project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-[-20px] mb-10 text-center more">
        View more other projects on my{' '}
        <a
          href="https://github.com/IldarAbdulin"
          className="text-primary underline"
          target="_blank"
        >
          GitHub
        </a>
      </p>
    </div>
  );
};

export default Projects;
