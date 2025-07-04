import { useState } from "react";

const userData = [
  { "firstName": "ethan", "lastName": "carter", "photoURL": "https://randomuser.me/api/portraits/men/1.jpg" },
  { "firstName": "liam", "lastName": "bennett", "photoURL": "https://randomuser.me/api/portraits/men/2.jpg" },
  { "firstName": "ava", "lastName": "johnson", "photoURL": "https://randomuser.me/api/portraits/women/1.jpg" },
  { "firstName": "sophia", "lastName": "brown", "photoURL": "https://randomuser.me/api/portraits/women/2.jpg" },
  { "firstName": "mia", "lastName": "davis", "photoURL": "https://randomuser.me/api/portraits/women/3.jpg" },
  { "firstName": "charlotte", "lastName": "wilson", "photoURL": "https://randomuser.me/api/portraits/women/4.jpg" },
  { "firstName": "amelia", "lastName": "martinez", "photoURL": "https://randomuser.me/api/portraits/women/5.jpg" },
  { "firstName": "isabella", "lastName": "anderson", "photoURL": "https://randomuser.me/api/portraits/women/6.jpg" },
  { "firstName": "harper", "lastName": "taylor", "photoURL": "https://randomuser.me/api/portraits/women/7.jpg" },
  { "firstName": "evelyn", "lastName": "thomas", "photoURL": "https://randomuser.me/api/portraits/women/8.jpg" },
  { "firstName": "noah", "lastName": "jenkins", "photoURL": "https://randomuser.me/api/portraits/men/3.jpg" },
  { "firstName": "aiden", "lastName": "brooks", "photoURL": "https://randomuser.me/api/portraits/men/4.jpg" },
  { "firstName": "mason", "lastName": "rivers", "photoURL": "https://randomuser.me/api/portraits/men/5.jpg" },
  { "firstName": "elijah", "lastName": "stone", "photoURL": "https://randomuser.me/api/portraits/men/6.jpg" },
  { "firstName": "jameson", "lastName": "parker", "photoURL": "https://randomuser.me/api/portraits/men/7.jpg" },
  { "firstName": "lucas", "lastName": "hayes", "photoURL": "https://randomuser.me/api/portraits/men/8.jpg" },
  { "firstName": "caleb", "lastName": "thompson", "photoURL": "https://randomuser.me/api/portraits/men/9.jpg" },
  { "firstName": "gabriel", "lastName": "sanders", "photoURL": "https://randomuser.me/api/portraits/men/10.jpg" },
  { "firstName": "jackson", "lastName": "ford", "photoURL": "https://randomuser.me/api/portraits/men/11.jpg" },
  { "firstName": "nathan", "lastName": "steele", "photoURL": "https://randomuser.me/api/portraits/men/12.jpg" },
  { "firstName": "isaac", "lastName": "palmer", "photoURL": "https://randomuser.me/api/portraits/men/13.jpg" },
  { "firstName": "levi", "lastName": "barrett", "photoURL": "https://randomuser.me/api/portraits/men/14.jpg" },
  { "firstName": "julian", "lastName": "mitchell", "photoURL": "https://randomuser.me/api/portraits/men/15.jpg" },
  { "firstName": "owen", "lastName": "clarke", "photoURL": "https://randomuser.me/api/portraits/men/16.jpg" },
  { "firstName": "dominic", "lastName": "reid", "photoURL": "https://randomuser.me/api/portraits/men/17.jpg" },
  { "firstName": "sebastian", "lastName": "knight", "photoURL": "https://randomuser.me/api/portraits/men/18.jpg" },
  { "firstName": "henry", "lastName": "vaughn", "photoURL": "https://randomuser.me/api/portraits/men/19.jpg" },
  { "firstName": "ezra", "lastName": "wallace", "photoURL": "https://randomuser.me/api/portraits/men/20.jpg" },
  { "firstName": "micah", "lastName": "dawson", "photoURL": "https://randomuser.me/api/portraits/men/21.jpg" },
  { "firstName": "weston", "lastName": "burke", "photoURL": "https://randomuser.me/api/portraits/men/22.jpg" },
  { "firstName": "nolan", "lastName": "graham", "photoURL": "https://randomuser.me/api/portraits/men/23.jpg" },
  { "firstName": "asher", "lastName": "dean", "photoURL": "https://randomuser.me/api/portraits/men/24.jpg" },
  { "firstName": "miles", "lastName": "chandler", "photoURL": "https://randomuser.me/api/portraits/men/25.jpg" },
  { "firstName": "colton", "lastName": "lane", "photoURL": "https://randomuser.me/api/portraits/men/26.jpg" },
  { "firstName": "emmett", "lastName": "ross", "photoURL": "https://randomuser.me/api/portraits/men/27.jpg" },
  { "firstName": "jace", "lastName": "holland", "photoURL": "https://randomuser.me/api/portraits/men/28.jpg" },
  { "firstName": "roman", "lastName": "ellis", "photoURL": "https://randomuser.me/api/portraits/men/29.jpg" },
  { "firstName": "grayson", "lastName": "fields", "photoURL": "https://randomuser.me/api/portraits/men/30.jpg" },
  { "firstName": "sawyer", "lastName": "banks", "photoURL": "https://randomuser.me/api/portraits/men/31.jpg" },
  { "firstName": "brooks", "lastName": "hamilton", "photoURL": "https://randomuser.me/api/portraits/men/32.jpg" },
  { "firstName": "elias", "lastName": "monroe", "photoURL": "https://randomuser.me/api/portraits/men/33.jpg" },
  { "firstName": "ryder", "lastName": "vaughn", "photoURL": "https://randomuser.me/api/portraits/men/34.jpg" },
  { "firstName": "carter", "lastName": "wells", "photoURL": "https://randomuser.me/api/portraits/men/35.jpg" },
  { "firstName": "declan", "lastName": "frost", "photoURL": "https://randomuser.me/api/portraits/men/36.jpg" },
  { "firstName": "silas", "lastName": "mccoy", "photoURL": "https://randomuser.me/api/portraits/men/37.jpg" },
  { "firstName": "theo", "lastName": "jennings", "photoURL": "https://randomuser.me/api/portraits/men/38.jpg" },
  { "firstName": "easton", "lastName": "bryant", "photoURL": "https://randomuser.me/api/portraits/men/39.jpg" },
  { "firstName": "maverick", "lastName": "hart", "photoURL": "https://randomuser.me/api/portraits/men/40.jpg" },
  { "firstName": "axel", "lastName": "matthews", "photoURL": "https://randomuser.me/api/portraits/men/41.jpg" },
  { "firstName": "leo", "lastName": "franklin", "photoURL": "https://randomuser.me/api/portraits/men/42.jpg" },
  { "firstName": "zane", "lastName": "douglas", "photoURL": "https://randomuser.me/api/portraits/men/43.jpg" },
  { "firstName": "bennett", "lastName": "tate", "photoURL": "https://randomuser.me/api/portraits/men/44.jpg" },
  { "firstName": "landon", "lastName": "chase", "photoURL": "https://randomuser.me/api/portraits/men/45.jpg" },
  { "firstName": "camden", "lastName": "shaw", "photoURL": "https://randomuser.me/api/portraits/men/46.jpg" },
  { "firstName": "finn", "lastName": "mercer", "photoURL": "https://randomuser.me/api/portraits/men/47.jpg" },
  { "firstName": "hudson", "lastName": "blake", "photoURL": "https://randomuser.me/api/portraits/men/48.jpg" },
  { "firstName": "wyatt", "lastName": "sloan", "photoURL": "https://randomuser.me/api/portraits/men/49.jpg" },
  { "firstName": "archer", "lastName": "daniels", "photoURL": "https://randomuser.me/api/portraits/men/50.jpg" }
]


export default function SearchBar() {
  const [storedInput, setStoredInput] = useState('');

function handleSearch(e) {
let storedInput = e.target.value;
setStoredInput(storedInput);
}

function debounce(handleSearch, milliseconds) {

  let timeout;

  return function(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      handleSearch(...args);

    }, milliseconds);
  }
}


  return (
    <>
      <input 
      type="text" 
      placeholder="Search Bookface" 
      className="searchbar-xl"
      onChange={debounce(handleSearch, 700)}
      name="SearchBar"
      />
      <div class="dropdown">
        <div class="SearchDropdown">
          {userData
          .filter((user) => 
            user.firstName === storedInput || 
            user.lastName === storedInput || 
            user.firstName + ' ' + user.lastName === storedInput 
          )
          .map((user) => user ?
          <div className="SearchedUser">
            <picture>
              <source
                srcSet={user.photoURL}
                media="(min-width: 540px)"
                style={{ width: '25px', marginRight: '10px'}}
                alt={`${user.firstName} ${user.lastName}`}
              />
            </picture>
            <img src={user.photoURL} style={{ width: '25px', marginRight: '10px'}} alt={`${user.firstName} ${user.lastName}`}/>
            <a href="/account">
              {user.firstName + ' ' + user.lastName}
            </a>
          </div>
          :
          <div className="SearchedUser">
            <p> Not Found </p>
          </div>
        )}
        </div>
      </div>
    </>
  )
}
