import clsx from 'clsx';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

type Props = {
  name: string;
  to: string;
  width: string;
};

export default function NavItem({ name, to, width }: Readonly<Props>) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <NavLink
      to={to}
      className={clsx(
        'flex items-center justify-center h-full',
        width,
        match ? 'bg-japonica-500 text-white' : 'text-gray-500',
      )}
    >
      {name}
    </NavLink>
  );
}
