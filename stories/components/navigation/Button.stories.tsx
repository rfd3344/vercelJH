
import Icon from 'src/components/dataDisplay/Icon';

import Button from 'src/components/navigation/Button';

export default {
  title: 'components/navigation/Button',
};


export const Default = () => (
  <main>
    <h5> color</h5>
    <div className='flex gap-4'>
      <Button> Default </Button>
      <Button color="primary">  primary  </Button>
      <Button color="secondary">  secondary  </Button>
    </div>

    <h5> color pill</h5>
    <div className='flex gap-4'>
      <Button pill> Default </Button>
      <Button color="primary" pill>  primary  </Button>
      <Button color="secondary" pill>  secondary  </Button>
    </div>

    <h5> size</h5>
    <div className='flex gap-4 items-start'>

      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Base</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra large</Button>
    </div>

    <h5> icon </h5>
    <div className='flex gap-4 items-start'>

      <Button > <Icon className='mr-2' /> Left Icon </Button>
      <Button >  Right Icon <Icon className='ml-2' /> </Button>

    </div>


    <h5> loading disabled </h5>
    <div className='flex gap-4 items-start'>

      <Button isProcessing > Loading </Button>
      <Button disabled > Disabled button </Button>

    </div>


  </main>
);
