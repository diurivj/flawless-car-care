import type { HTMLAttributes } from 'react';
import { cn } from '~/utils/misc';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {props.children}
    </div>
  );
}
