import { NavLink as Link, type NavLinkProps } from '@remix-run/react';

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className='inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900'
    >
      {children}
    </Link>
  );
}
