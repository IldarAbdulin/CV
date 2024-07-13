import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { IProjects, projects } from '../../../data/projects';

const SingleProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = React.useState<IProjects[]>();

  const goBack = () => navigate(-1);

  const getProject = () => {
    const currentProj = projects.filter((current) => current.id === Number(id));
    setProject([...currentProj]);
  };
  React.useEffect(() => {
    getProject();
  }, [id]);

  return (
    <div>
      {project?.map((p) => (
        <div key={p.id} className="single">
          <div>
            <button onClick={goBack} className="back underline text-[17px]">
              Go Back
            </button>
            <h2 className="mb-[-20px] my-3 text-center text-primary text-[30px] uppercase">
              {p.name}
            </h2>
          </div>
          <div className="my-10 flex justify-between items-center gap-5 single-proj">
            <div className="border shadow-lg image">
              <img src={p.img} alt={p.name} />
            </div>
            <div>
              <p className="text-[17px] w-[565px] tech">
                <span className="text-grayText">Technology</span>:{' '}
                <b>{p.tech.map((t) => t)}</b>
              </p>
              <p className="my-2 text-[17px] tech">
                <span className="text-grayText">Adaptive</span>:{' '}
                <b>{p.adaptiveVersion}</b>
              </p>
              <p className="my-2 text-[17px] tech">
                <span className="text-grayText">Did the project on time</span>:{' '}
                <b>{p.time}</b>
              </p>

              <p className="text-[17px] tech">
                <span className="text-grayText">View:</span> {''}
                <a
                  className="underline text-primary duration-200 hover:text-primaryDark"
                  href={p.code}
                  target="_blank"
                >
                  code
                </a>
              </p>
            </div>
          </div>
          <div className="mt-[-10px]">
            <h3 className="text-[21px] text-primary font-semibold">
              Description:
            </h3>
            <p className="text-[17px] text-tertiary desc">{p.disc}</p>
          </div>
          <p className="my-10 text-center more">
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
      ))}
    </div>
  );
};

export default SingleProject;
