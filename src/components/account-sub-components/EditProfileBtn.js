
export default function EditProfileBtn() {
return (
    <>
      <button className="action-btn">
        <picture>
          <source />
          <img 
            src="pencil-24.png" 
            alt='pencil'
            style={{
              width: '75%',
              paddingRight: '4px'
            }}
          />
        </picture>
        Edit profile
        </button>
    </>
  );
}
