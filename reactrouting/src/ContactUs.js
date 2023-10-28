function ContactUs()
{
    return (
        <div>
            <fieldset>
                <legend>Contact Info</legend>
            <form>
                <label>FirstName</label>
                <input type="text" name="FirstName"/><br/>
                <label>LastName</label>
                <input type="text" name="LastName"/><br/>
                <label>Address</label>
                <input type="text" name="Address"/><br/>
                <input type="submit" value="Contact"/>
            </form>
            </fieldset>
        </div>
    )
}
export default ContactUs