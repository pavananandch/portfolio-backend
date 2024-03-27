
emailTemplate = (details)=>{
    return `<div style="
    border: 3px solid green;
    padding: 10px;
    text-align: center;
  ">
  <header>
      <h1>THANK YOU!</h1>
    </header>
    <div style="text-align: center">
        <i class="fa fa-check" style="color: green;
        font-size: 195px;" aria-hidden="true"></i>
    </div>
    <p>Hello <b>${details.name},</b></p>
    <p>Thanks a bunch for your valuable feekback. It means a lot, just like you do! I really appreciate you giving me a moment of your time today. Thanks for being you.</p>
    <footer>
		<p>Copyright ©2021 | All Rights Reserved</p>
	</footer>
</div>`
}

module.exports = {
  emailTemplate: emailTemplate
}