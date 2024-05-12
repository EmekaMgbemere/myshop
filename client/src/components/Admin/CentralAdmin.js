import React from 'react';
import CentralAdminLeft from './CentralAdminLeft';
import CentralAdminRight from './CentralAdminRight';
import CentralAdminTop from './CentralAdminTop';

export default function CentralAdmin() {
    
  return (
    <div className='admin'>
        <div className='centraladmintop'>
            <CentralAdminTop />
        </div>
        
        <div className='centraladmin'>
            <div className='adminleft'>
                <CentralAdminLeft />
            </div>
            <div className='adminlright'>
                <CentralAdminRight />
            </div>
        </div>
    </div>
  )
}

