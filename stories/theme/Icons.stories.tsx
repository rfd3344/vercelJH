
import Icon from 'src/components/dataDisplay/Icon';
import IconSpinner from 'src/components/dataDisplay/IconSpinner';

export default {
  title: 'theme/Icons',
};


const IconBox = ({
  value,
  ...rest

}: any) => (
  <section className='p-2 border text-center'>
    <Icon value={value} {...rest} />
    <p>{value}</p>
  </section>
);

export const Default = () => (
  <main>
    <h5> Icon size </h5>
    <div className='flex gap-4'>

      <IconBox value='GiConfirmed' size="xs" />
      <IconBox value='GiConfirmed' size="sm" />
      <IconBox value='GiConfirmed' size="md" />
      <IconBox value='GiConfirmed' size="lg" />
      <IconBox value='GiConfirmed' size="xl" />

    </div>

    <h5> Icons </h5>
    <div className='flex gap-8'>

      <IconBox value='GiConfirmed' />
      <IconBox value='FaBeer' />
      <IconBox value='HiArrowCircleDown' />

    </div>


    <h5> IconSpinner </h5>
    <div className='flex gap-8'>
      <IconSpinner />

    </div>

  </main>
);
