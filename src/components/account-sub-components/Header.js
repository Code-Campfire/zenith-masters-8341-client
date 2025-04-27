import '../../styles/account-sub-components/header.css';
import AddFriendBtn from './AddFriendBtn';
import AddToStoryBtn from './AddToStoryBtn';
import EditProfileBtn from './EditProfileBtn';
import ProfileImage from './ProfileImage';

export default function Header({ friendListAmount, userObject }) {
  let userID = true;
return (
  <>
    <div id="header"> 
      <div id='coverBackground'>Cover Photo</div>
      <div id='main'>
        <div className='profile-pic-area'>
          <ProfileImage />
        </div>
        <div className='title-name'>
          <h1>User Name</h1>
          <div className='title-friendAmount'>
            <p>{friendListAmount} friends</p>
          </div>
        </div>
          <div className='action-btn-area'>
            {userID ? <AddToStoryBtn /> : <AddFriendBtn />}
            <EditProfileBtn />
          </div>
        </div>
      <div id='links'>Links</div>
    </div>
  </>
  );
}
