import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@utils/shadcn-utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-stone-900 text-slate-50 shadow hover:bg-stone-50/80 hover:shadow-sm',
        secondary:
          'border-transparent bg-stone-700/20 text-stone-50 hover:bg-stone-800/80',
        destructive:
          'border-transparent bg-red-500 text-slate-50 shadow hover:bg-red-900/80',
        outline: 'text-slate-50 dark:text-slate-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
