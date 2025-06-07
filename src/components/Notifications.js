
export default function NotificationsBubble({ newNotifications }) {
  /*Find this component in the NavBar*/
  return (
    <>
      <div className="noti"> {newNotifications} </div>
    </>
  )
}
