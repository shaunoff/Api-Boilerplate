const { mjml2html } =require('mjml')

let htmlOutput = mjml2html(`
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
          <mj-text align="center" font-size="24" color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15" padding-top="20">
            Hello, Shaun
          </mj-text>
          <mj-image src="https://www.p3i-inc.com/wp-content/uploads/2017/03/appraisal-background.png" alt="" align="center" border="none" width="400" vertical-align="middle" padding-left="15" padding-right="15" padding-bottom="5" padding-top="5">
          </mj-image>
          <mj-text align="center" font-size="18" color="rgb(88, 88, 88)" font-weight="700" font-family="Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="15" padding-top="20">
            Your 2017 Appraisal is now active, click below to get started
          </mj-text>
          <mj-button background-color="#6bada7" color="#FFF" font-size="18px" align="center" font-weight="bold" border="none" padding="15px 30px" border-radius="10px" href="https://mjml.io" "Verdana, Geneva, sans-serif" padding-left="25" padding-right="25" padding-bottom="25"
            padding-top="10">
            CLICK HERE
          </mj-button>
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

module.exports = htmlOutput;
