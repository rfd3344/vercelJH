import _ from 'lodash';


export default async function ServerDemo() {
  // const data = await getData();
  const data = await fetch('https://rfd3344.vercel.app/mock/user/index.json', {
    // cache: 'no-cache',
  }).then(resp => resp.json());

  return (
    <div>
      <h3> ServerTest</h3>

      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  );
}
