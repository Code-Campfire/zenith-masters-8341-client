import '../../styles/account-sub-components/header.css';
import AddFriendBtn from './AddFriendBtn';
import AddToStoryBtn from './AddToStoryBtn';
import EditProfileBtn from './EditProfileBtn';

export default function Header() {
  let userID = true;
return (
  <>
    <div id="headerz"> 
      <div id='coverBackground'>Cover Photo</div>
      <div id='main'>
        User Name
          <div>
            {userID ? <AddToStoryBtn /> : <AddFriendBtn />}
            <EditProfileBtn />
          </div>
        </div>
      <div id='links'>Links</div>
    </div>
  </>
  );
}
