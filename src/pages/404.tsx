import { NextPage } from 'next';

import NotFoundPage from '@/components/pages/404-page';

const Details: NextPage = () => {
  return (
    <div
      className="main"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <NotFoundPage />
    </div>
  );
};

export default Details;
