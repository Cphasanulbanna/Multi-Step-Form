import FormWrapper from "./FormWrapper"

const AddressForm = () => {
  return (
    <FormWrapper title="Address Details">
    <label htmlFor="">Street</label>
    <input type="text" required autoFocus />
    <label htmlFor="">City</label>
    <input type="text" required />
    <label htmlFor="">Satte</label>
    <input type="text" required />
    <label htmlFor="">Zip</label>
    <input type="text" required />
    </FormWrapper>
  )
}

export default AddressForm