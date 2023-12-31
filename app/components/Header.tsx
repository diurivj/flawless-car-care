import { Fragment } from 'react';
import { Link } from '@remix-run/react';
import { Popover, Transition } from '@headlessui/react';
import { Button } from './Button';
import { Container } from './Container';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { cn } from '~/utils/misc';

type MobileNavLinkProps = {
  href: string;
  children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
};

function MobileNavLink({ href, children }: MobileNavLinkProps) {
  return (
    <Popover.Button as={Link} to={href} className='block w-full p-2'>
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden='true'
      className='h-3.5 w-3.5 overflow-visible stroke-slate-700'
      fill='none'
      strokeWidth={2}
      strokeLinecap='round'
    >
      <path
        d='M0 1H14M0 7H14M0 13H14'
        className={cn('origin-center transition', open && 'scale-90 opacity-0')}
      />
      <path
        d='M2 2L12 12M12 2L2 12'
        className={cn(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className='relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none'
        aria-label='Toggle Navigation'
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Popover.Overlay className='fixed inset-0 bg-slate-300/50' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            as='div'
            className='absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5'
          >
            <MobileNavLink href='/#servicios'>Servicios</MobileNavLink>
            <MobileNavLink href='/#precios'>Precios</MobileNavLink>
            <MobileNavLink href='/#faq'>FAQ</MobileNavLink>
            <hr className='m-2 border-slate-300/40' />
            <MobileNavLink href='/login'>Agenda hoy</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header() {
  return (
    <header className='py-10'>
      <Container>
        <nav className='relative z-50 flex justify-between'>
          <div className='flex items-center md:gap-x-12'>
            <NavLink to='/' aria-label='Home'>
              <Logo className='h-10 w-auto' />
            </NavLink>
            <div className='hidden md:flex md:gap-x-6'>
              <NavLink to='/#servicios'>Servicios</NavLink>
              <NavLink to='/#precios'>Precios</NavLink>
              <NavLink to='/#faq'>FAQ</NavLink>
            </div>
          </div>
          <div className='flex items-center gap-x-5 md:gap-x-8'>
            <Button href='/register' color='blue'>
              <span>
                Agenda <span className='hidden lg:inline'>hoy</span>
              </span>
            </Button>
            <div className='-mr-1 md:hidden'>
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
