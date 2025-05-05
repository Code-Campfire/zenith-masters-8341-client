
export default function AddToStoryBtn() {
  return (
    <>
        <button className="action-btn" style={{ 
          backgroundColor: '#0866FF',
          color: 'white',
          }}>
          <picture>
            <source 
            srcSet="/plus-sign.svg" 
            style={{ width: '5px', height: '5px' }}
            />
            <img src='/plus-sign.svg' alt='plus' style={{ width: '17px', height: '17px', marginRight: '10px' }} /> 
          </picture>
          Add to Story
          </button>
    </>
  );
}
