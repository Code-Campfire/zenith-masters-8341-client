import { useState } from 'react'
import { AppContext } from './AppContext'

export default function AppProvider({ children }) {
	const [user, setUser] = useState(null)
	return <AppContext.Provider value={{ user, setUser }}>{children}</AppContext.Provider>
}
