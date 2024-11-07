export const Button = ({ handleCounter }) => {
  return (
    <div className="button-section">
      <button onClick={handleCounter}>Increment</button>
    </div>
  );
};
