
export default function ProfileImage() {

  return(
    <>
      <div>
        <picture>
          <source 
          srcSet="/jojo.jpeg"
          />
          <img src='/fb-logo.svg' alt='profile' id="profile-photo"/> 
        </picture>
      </div>
    </>
  );
}
