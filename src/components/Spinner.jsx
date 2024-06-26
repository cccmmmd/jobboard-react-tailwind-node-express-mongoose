import DotLoader from 'react-spinners/DotLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <DotLoader
      color='#14B8A6'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};
export default Spinner;