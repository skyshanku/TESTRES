


const Button2 = () => {
  const cardStyle = {
    backgroundColor: 'transparent',
    width: '300px',
    height: '200px',
    perspective: '1000px',
  };

  const innerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
  };

  const frontBackStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
  };

  const frontStyle = {
    ...frontBackStyle,
    backgroundColor: '#bbb',
    color: 'black',
  };

  const backStyle = {
    ...frontBackStyle,
    backgroundColor: '#2980b9',
    color: 'white',
    transform: 'rotateY(180deg)',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  return (
    <div style={cardStyle} className="flip-card">
      <div
        style={innerStyle}
        className="flip-card-inner"
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotateY(180deg)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotateY(0deg)')}
      >
        <div style={frontStyle} className="flip-card-front">
          <img src="your-image-url.jpg" alt="Avatar" style={imageStyle} />
        </div>
        <div style={backStyle} className="flip-card-back">
          <h2>Card Title</h2>
          <p>This is the description of the card.</p>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button2;

