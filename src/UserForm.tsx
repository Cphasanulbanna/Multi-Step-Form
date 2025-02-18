
const UserForm = () => {
  return (
    <>
    <label htmlFor="">First Name</label>
    <input type="text" required autoFocus />
    <label htmlFor="">Last Name</label>
    <input type="text" required />
    <input type="number" min={1} required />

    </>
  )
}

export default UserForm