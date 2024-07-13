import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="py-5 w-[80%] m-auto header">
      <div className="flex justify-between items-center header__items">
        <div className="flex items-center gap-3">
          <Link to={`/`}>
            {' '}
            <div>
              <p className="text-primary font-medium text-[25px] role">
                Junior Frontend Developer
              </p>
              <p className="mt-[-6px] text-tertiary font-light text-[16px]">
                {' '}
                Ildar Abdulin CV
              </p>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-3 links">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-primary underline' : 'text-tertiary'
            }
            to={`/`}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-primary underline' : 'text-tertiary'
            }
            to={`/projects`}
          >
            Projects
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
