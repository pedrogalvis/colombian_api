import { useState } from 'react';

import { Header } from '../components/Header/Header';
import { Tab } from '../components/Tab/Tab';
import { President } from './president/pages/President';
import { Touristic } from './touristic/pages/Touristic';
import { Airport } from './airport/pages/Airport';

export function ColombiaDash() {
  const [tab, setTab] = useState('president');

  return (
    <main>
      <Header />
      <div className='page'>
        <div className='tabs'>
          <Tab
            title='Presidentes'
            icon={<ion-icon name='person' />}
            checked={tab === 'president'}
            change={() => setTab('president')}
          />
          <Tab
            title='Turismo'
            icon={<ion-icon name='sunny' />}
            checked={tab === 'touristic'}
            change={() => setTab('touristic')}
          />
          <Tab
            title='Aeropuertos'
            icon={<ion-icon name='airplane' />}
            checked={tab === 'airports'}
            change={() => setTab('airports')}
          />
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          {tab === 'president' && <President />}
          {tab === 'touristic' && <Touristic />}
          {tab === 'airports' && <Airport />}
        </div>
      </div>
    </main>
  );
}
