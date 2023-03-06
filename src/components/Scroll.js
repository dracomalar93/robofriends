// import react from 'react';
import '../components/Scrollbar.css'

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: 'none',
        height: '100vh',
        scrollbarWidth: 'thin',
        scrollbarColor: '#999 #f5f5f5',
      }}
      className="scroll"
    >
      {props.children}
    </div>
  )
}

export default Scroll
