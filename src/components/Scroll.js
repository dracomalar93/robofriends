// import react from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '5px solid black',
        height: '500px',
      }}
      className="scroll"
    >
      {props.children}
    </div>
  );
};

export default Scroll;
