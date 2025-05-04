
export default function ProfileImage() {

  return(
    <>
      <div>
        <picture>
          <source 
          srcSet='profile-img.svg'
          alt=''
          />
          <img src='profile-img.svg' alt='profile' id="profile-photo"
          /> 
        </picture>
      </div>
    </>
  );
}
