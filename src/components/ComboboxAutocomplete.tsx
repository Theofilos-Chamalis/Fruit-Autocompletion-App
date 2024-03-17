import { FunctionComponent } from 'react';
import { Autocomplete, Loader } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Loading and error states for the fruits query
const FruitsLoader = () => (
  <div className='flex flex-col justify-center items-center text-xl'>
    <Loader type='dots' size='xl' />
    <h3>Fetching fruits...</h3>
  </div>
);

const FruitsError = () => (
  <div className='flex flex-col justify-center items-center text-xl'>
    <h3>Failed to fetch fruits</h3>
  </div>
);

const ComboboxAutocomplete: FunctionComponent = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['fruits'],
    queryFn: () => axios.get('/api/search?fruit=').then(res => res.data),
  });

  if (isLoading) return <FruitsLoader />;

  if (error) return <FruitsError />;

  return (
    <Autocomplete
      label='Find your favorite fruit'
      placeholder='Search for a fruit'
      data={data?.fruits}
      size='xl'
      radius={12}
      comboboxProps={{
        transitionProps: { transition: 'pop', duration: 200 },
        dropdownPadding: 10,
        shadow: 'xl',
      }}
    />
  );
};

export default ComboboxAutocomplete;
