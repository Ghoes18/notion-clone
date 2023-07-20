import { ComponentProps, ReactNode } from 'react';

export interface BubbleButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export function BubbleButton(props: BubbleButtonProps) {
  return (
    <button className="flex items-center text-sm text-zinc-200 gap-1.5 font-medium leading-none hover:text-zinc-500 p-2 data-[active=true]:text-pink-500 focus:text-pink-500 focus:outline-none cursor-pointer"
    {...props} />
  );
}