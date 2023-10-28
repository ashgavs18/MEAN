function AboutUs(props)
{
    return (
        <center>
        <div>
            <fieldset>
            <legend>Contact Us At</legend>
            <b>{props.CompanyName}</b>
            <b>{props.Address}</b>
            <a href="mailto:xyz@gmail.com">E-mail</a>
            </fieldset>
        </div>
        </center>
    )
}
export default AboutUs