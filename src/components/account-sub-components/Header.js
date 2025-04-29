import '../../styles/account-sub-components/header.css';
import React, { useState } from 'react';
import AddFriendBtn from './AddFriendBtn';
import AddToStoryBtn from './AddToStoryBtn';
import EditProfileBtn from './EditProfileBtn';
import ProfileImage from './ProfileImage';

export default function Header({ friendListAmount, userObject }) {
  const [currentPosts, setCurrentPosts] = useState([]);
  const [currentComponent, setCurrentComponent] = useState('posts');

  let userID = true;
return (
  <>
    <div id="header"> 
      <div id='coverBackground'>Insert Cover Photo</div>
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
      <div id='links'>
        <button id='posts-btn' className='links-btn' onClick={() => {
          setCurrentComponent('posts');
          document.getElementById('about-btn').classList.remove('clicked');
          document.getElementById('friends-btn').classList.remove('clicked');
          document.getElementById('posts-btn').classList.add('clicked');
        }}>Posts</button>
        <button id='about-btn' className='links-btn' onClick={() => {
          setCurrentComponent('about');
          document.getElementById('posts-btn').classList.remove('clicked');
          document.getElementById('friends-btn').classList.remove('clicked');
          document.getElementById('about-btn').classList.add('clicked');
        }}>About</button>
        <button id='friends-btn' className='links-btn' onClick={() => {
          setCurrentComponent('friends');
          document.getElementById('posts-btn').classList.remove('clicked');
          document.getElementById('about-btn').classList.remove('clicked');
          document.getElementById('friends-btn').classList.add('clicked');
        }}>Friends</button>
      </div>
      <div id='account-root' />
      <div>
        {
          (currentComponent === 'posts' && <p>Posts Component Placeholder</p>) 
          || (currentComponent === 'about' && <p>About Page Component Placeholder </p>) 
          || (currentComponent === 'friends' && <p>Friends List Component Placeholder</p>) 
        }
      </div>
    </div>
  </>
);
}
