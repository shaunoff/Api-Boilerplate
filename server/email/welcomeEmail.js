const { mjml2html } =require('mjml')

let htmlOutput =(empData)=>{
  return mjml2html(`
    <mjml>
      <mj-body>
        <mj-container background-color="rgb(248, 250, 251)" font-size="13px">
          <mj-section background-color="rgb(248, 250, 251)" padding-bottom="20" padding-top="20">
            <mj-column vertical-align="top" width="100%">
              <mj-image src='https://www.p3i-inc.com/wp-content/uploads/2015/07/logo_long.png' align="center" border="none" width="200" vertical-align="middle" padding-left="20" padding-right="20" padding-bottom="5" padding-top="5">
              </mj-image>
            </mj-column>
          </mj-section>
          <mj-section background-color="white" border="2px solid #ccc" border-radius="6px" padding-bottom="0" padding-top="0">
            <mj-column width="100%">
              <mj-text align="left" font-size="14"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25"  padding-top="20">
                Hello ${empData.firstName},

              </mj-text>
              <mj-text align="left" font-size="14"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15">
                My name is Shaun and I'm the IT Manager at P3I. Welcome to the P3I team!

              </mj-text>
              <mj-text align="left" font-size="14"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15">
                At P3I, we have a number of tools that will make the administrative part of your job a lot easier. All of these tools are in some way linked to your P3I email address.
              </mj-text>
              <mj-text align="left" font-size="14"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15">
                Before you can start using these tools you will need your email address to be activated.

    To do this go to either of the following sites:
              </mj-text>
              <mj-text align="center" font-size="18"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15">
                <a href="http://mail.p3i-inc.com" style="text-decoration: none;color: #007681;">mail.p3i-inc.com</a> or <a href="https://www.gmail.com" style="text-decoration: none;color: #007681;">gmail.com</a>
              </mj-text>
              <mj-text align="left" font-size="14"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15">
                You will be asked to insert your email and password.

    Your email address is:
              </mj-text>
              <mj-text align="center" text-decoration="none" font-size="18" color="#007681" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="10" padding-top="10">
                <a href="https://www.p3i-inc.com" style="text-decoration: none;color: #007681;">${empData.workEmail}</a>
              </mj-text>
              <mj-text align="left" font-size="14"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15">
                and your password is:
              </mj-text>
              <mj-text align="center" text-decoration="none" font-size="18" color="#007681" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="10" padding-top="10">
                <a href="https://www.p3i-inc.com" style="text-decoration: none;color: #007681;">p3ipassword</a>
              </mj-text>
              <mj-text align="left" font-size="14"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15">
               This is a temporary password and you will be asked to choose a new one as soon as you log in. Make sure you remember this new password as it will be needed to access many of the tools we use.

    Once you have registered your new password, your email account will be activated.
              </mj-text>
              <mj-text align="left" font-size="14"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15">
              The P3I portal and BambooHR are platforms linked to your P3I email address. These will be the places where you will be able to find the latest information and tools that will help you with the administrative and financial aspects of your job.
              </mj-text>
              <mj-text align="left" font-size="14"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15">
              Thse sites have the following addresses:

              </mj-text>
              <mj-text align="center" font-size="18"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15">
                <a href="http://portal.p3i-inc.com" style="text-decoration: none;color: #007681;">portal.p3i-inc.com</a> or <a href="https://p3i.bamboohr.com" style="text-decoration: none;color: #007681;">p3i.bamboohr.com</a>
              </mj-text>
              <mj-text align="left" font-size="14"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15">
                To access these sites, simply insert your email address and your new password. It may take a few minutes for the directories to synchronize, so if it doesn't work immediately, try again in a few minutes.
              </mj-text>
              <mj-text align="left" font-size="14"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15">
                You will be receiving further information in due course from various departments. In the meantime feel free to browse each site.

    If you have any questions, feel free to contact me and I will try to answer them ASAP.
              </mj-text>
              <mj-text align="left" font-size="14"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15">
                Once again, welcome to the team,
              </mj-text>
              <mj-text align="left" font-size="14"  color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15">
                Shaun
              </mj-text>


            </mj-column>
          </mj-section>
          <mj-section border-radius="0px 0px 6px 6px" background-color='rgb(248, 250, 251)' vertical-align="middle" padding-bottom="30" padding-top="5">
            <mj-text align="center" text-decoration="none" font-size="18" color="#007681" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="10" padding-top="10">
                <a href="https://www.p3i-inc.com" style="text-decoration: none;color: #007681;">www.p3i-inc.com</a>
              </mj-text>
          </mj-section>
        </mj-container>
      </mj-body>
    </mjml>
`);
}
module.exports = htmlOutput;
