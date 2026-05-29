import Link from 'next/link';


const AvailableLink = ({ href = '' }) => (
  <Link className='underline p-2 block' href={href}>{href}</Link>
);


export default function Page({ }) {

  return (
    <main id="home" className='container text-center'>

      <h1>Available Links </h1>

      <AvailableLink href="/static-docs" />
      <AvailableLink href="/static-pictures" />
      <AvailableLink href="/demo" />

    </main>
  );
}
