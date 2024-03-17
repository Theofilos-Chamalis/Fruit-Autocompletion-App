import { Inter } from 'next/font/google';
import ComboboxAutocomplete from '@/components/ComboboxAutocomplete';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}>
      <h1 className='text-4xl font-bold mb-32'>Only1 App - Fruit Autocompletion</h1>
      <div className='z-10 max-w-5xl w-full items-center justify-center font-mono text-sm'>
        <ComboboxAutocomplete />
      </div>
    </main>
  );
}
