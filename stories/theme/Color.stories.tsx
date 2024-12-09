
export default {
  title: 'theme/Color',
};

const ColorBlock = ({ color = '' }) => (
  <section >
    <div style={{ width: 100, height: 100 }} className={color}>

    </div>
    <div >{color}</div>
  </section>

);

export const Default = () => (
  <main className='grid gap-1 grid-cols-8'>


    <ColorBlock color="bg-cyan" />
    <ColorBlock color="bg-salmon" />
    <ColorBlock color="bg-white" />
    <ColorBlock color="bg-black" />

  </main>
);
