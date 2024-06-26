'use client';

import { useRadio } from 'contexts/radio-context';
import { Star } from 'lucide-react';
import { columns } from './columns';
import { DataTable } from './data-table';
import { ResponsiveTable } from './responsive-table';

export function FavoritesTable() {
  const { favorites } = useRadio();

  return (
    <div className='py-2 w-full h-full overflow-y-auto'>
      <section className='flex items-center gap-2 mb-2'>
        <h2 className='text-xl font-bold text-slate-50'>
          Your favorite radio stations
        </h2>
        <Star size={16} />
      </section>

      <div className='hidden md:block'>
        <DataTable columns={columns} data={favorites} />
      </div>

      <div className='md:hidden'>
        <ResponsiveTable />
      </div>
    </div>
  );
}
