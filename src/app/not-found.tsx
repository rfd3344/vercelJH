


import { Link } from 'src/components/next';

export default function NotFound() {
  return (
    <section id="NotFound">
      <div className='text-center'>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/"> Return Home </Link>
      </div>
    </section>
  );
}
