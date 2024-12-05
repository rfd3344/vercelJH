import _ from 'lodash';


export default function ServerDemo() {
  // const data = await getData();

  return (
    <div>
      <h3> ServerTest</h3>

      <div>
        {/* {data.slice(0, 2)?.map((row) => (
          <Box bgcolor="cyan" my={1} key={row.id}>
            {_.keys(row).map((item) => (
              <span key={item}>
                {' '}
                {item}: {row[item]},{' '}
              </span>
            ))}
          </Box>
        ))} */}
      </div>
    </div>
  );
}
