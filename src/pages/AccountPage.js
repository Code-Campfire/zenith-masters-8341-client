import React from 'react'
import Header from '../components/account-sub-components/Header'
import { useState } from 'react'

//TODO: This has to be based off User ID

// This page will have all the CSS in AccountPage.css and will be styled here.

export default function AccountPage() {
	const [user, setUser] = useState({})
	const [friendListTotal, setFriendListTotal] = useState(0)

	// Set API call for friend list and user object here.

	return (
		<>
			<Header friendListAmount={friendListTotal} userObject={user} />
		</>
	)
}
