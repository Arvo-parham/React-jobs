import { ClipLoader } from "react-spinners";

const override = {
    display: 'block',
    margin: '100px auto',
}

const Spinner = ({ loading }) => {
  return (
    <ClipLoader color="#4338ca" loading={loading} size={150} cssOverride={override} speedMultiplier={1.85} />
  );
};

export default Spinner;
