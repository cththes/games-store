import { Button } from 'antd';
import { authAPI } from '../api/api';

const Logout = () => {
   return (
      <div className='logout'>
        <Button type="primary" onClick={() => { authAPI.logout() }}>Выйти</Button>
      </div>
   );
}

export default Logout