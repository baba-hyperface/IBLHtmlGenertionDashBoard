export function getTemplate1({data, TemplateHelpers, lightColor}) {
  return `<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>IndusInd Bank</title>
  <style type="text/css">
    body {
      margin: 0 auto;
      padding: 0;
      -webkit-text-size-adjust: none;
      -ms-text-size-adjust: none;
    }
    body, table, td, a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    table, td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    td {
      border-collapse: collapse;
    }
    a {
      color: #8d051e;
      text-decoration: none;
    }
    @media all and (max-width: 640px) {
      body, table, td, p, a, li, blockquote {
        -webkit-text-size-adjust: none !important;
      }
      .table {
        width: 100% !important;
        clear: both !important;
        display: table !important;
      }
      .td-block {
        display: block !important;
        min-width: 100% !important;
        max-width: 100% !important;
        width: 100% !important;
        clear: both !important;
        float: left !important;
      }
      .responsive-image img {
        height: auto !important;
        max-width: 100% !important;
        width: 100% !important;
      }
      .hide {
        display: none !important;
        width: 100% !important;
      }
      .pdlr {
        padding-left: 15px !important;
        padding-right: 15px !important;
      }
      .pdtb {
        padding-top: 15px !important;
        padding-bottom: 15px !important;
      }
      .pdtop15 {
        padding-top: 15px !important;
      }
      .pdbot15 {
        padding-bottom: 15px !important;
      }
      .pdnone {
        padding: 0 !important;
      }
      .hauto {
        height: auto !important;
      }
      .heading {
        font-size: 24px !important;
        line-height: normal !important;
        letter-spacing: 1px !important;
      }
      .subheading {
        font-size: 18px !important;
        line-height: 24px !important;
        letter-spacing: .5px !important;
      }
      .mtext {
        font-size: 14px !important;
        line-height: 21px !important;
      }
      .center {
        text-align: center !important;
      }
      .center img, .center table {
        margin: 0 auto;
      }
      .p-top-5 {
        padding-top: 3px !important;
        vertical-align: top !important;
      }
      .p-top-51 {
        padding-top: 0 !important;
        vertical-align: top !important;
      }
      .b-top {
        border: none !important;
        border-top: 1px solid #b9b9b9 !important;
      }
      .mob-hide {
        display: none !important;
      }
      .mob-show {
        display: block !important;
      }
      .text-left {
        text-align: left !important;
      }
      .text-center {
        text-align: center !important;
      }
      .text-center table, .text-center img {
        margin: 0 auto !important;
      }
      .pdtop10 {
        padding-top: 10px !important;
      }
      .logo {
        height: 20px !important;
        min-height: 20px !important;
        max-height: 20px !important;
        width: auto !important;
      }
      .main-logo {
        height: 20px !important;
        min-height: 20px !important;
        max-height: 20px !important;
        width: auto !important;
      }
      .table-center {
        float: none !important;
        margin: 0 auto !important;
      }
      .font-16 {
        font-size: 16px !important;
        line-height: 20px !important;
      }
    }
  </style>
</head>

<body style="margin: 0 auto; padding:0px;width:600px;"> 
  <!-- Main email container -->
  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${
    data.color
  }" style="background-color:${data.color};padding:0; margin:0 auto;">
    <tr>
      <td align="center" valign="top" bgcolor="${
        data.color
      }" style="background-color:${data.color};padding:25px 20px 10px 20px;"> 
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background-color:${
          data.color
        };" bgcolor="${data.color}">
          <!-- Header with logos -->
        <tr>
            <td align="center" style="padding:0; background-color:${
              data.color
            };" bgcolor="${data.color}">
                ${TemplateHelpers.getNavbarTwoLogos(data, data.brandLogo)} 
            </td>
            </tr>
          
          <!-- Main heading -->
          <tr>
            <td align="center" style="padding:30px 0 10px 0; background-color:${
              data.color
            };" bgcolor="${data.color}"> 
              <table width="520" border="0" cellspacing="0" cellpadding="0" style="width:100%; max-width:520px; background-color:${
                data.color
              };" bgcolor="${data.color}"> 
              <tr>
                  <td align="center" valign="top" style="font-family:Arial; font-size:36px; line-height:44px; color:#972629; padding:0; font-weight:bold; background-color:${
                    data.color
                  };" bgcolor="${data.color}" class="heading">  ${TemplateHelpers.processTextWithLineBreaks(data.headline,{delimiter:"/n"})}
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="top" style="font-family:Arial; font-size:22.5px; line-height:31px; color:#000000; padding:5px 0 0 0; background-color:${
                    data.color
                  };" bgcolor="${data.color}" class="subheading"> 
                    ${TemplateHelpers.processTextWithLineBreaks(data.subHeadline, {
                      color: "#000000",
                    })}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Banner image -->
          <tr>
            <td align="center" valign="top" class="responsive-image" style="background-color:${
              data.color
            };margin:auto;" bgcolor="${data.color}">
              <a href="https://www.indusmoments.com/offers/BOOMINS" target="_blank" style="text-decoration:none;">
                <img src='${
                  data.heroImage
                }' width="600" alt="IndusInd Bank" style="display:block; width:100%; max-width:600px; height:auto; margin:0 auto; border:0;">
              </a>
            </td>
          </tr>
          
          <!-- Promo code box -->
          <tr>
            <td align="center" valign="top" style="background-color:${
              data.color
            };" bgcolor="${data.color}"> 
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:${
                  data.color
                };" bgcolor="${data.color}"> 
                <tr>
                    <td align="center" valign="top" style="background-color:${
                      data.color
                    };" bgcolor="${data.color}"> 
                    <table width="450" border="0" cellspacing="0" cellpadding="0" style="width:100%; max-width:450px; margin:0 auto; background-color:${
                      data.color
                    };" bgcolor="${data.color}"> 
                        <tr>
                        <td align="center" valign="top" style="background-color:${
                          data.color
                        }; padding:15px;" bgcolor="${data.color}"> 
                          <table border="0" cellspacing="0" cellpadding="0" align="center" style="border:1px dashed #000000 !important; background-color:${
                            data.color
                          }; text-align:center;" bgcolor="${data.color}">
                            <tr>
                              <td style="padding:15px;background-color:${
                                data.color
                              };"> 
                                <table border="0" cellspacing="0" cellpadding="0" align="center" style="background-color:${
                                  data.color
                                };" bgcolor="${data.color}">
                                  <tr>
                                    <td align="center" valign="top" style="font-family:Arial; font-size:21px; line-height:26px; color:#000000; background-color:${
                                      data.color
                                    }; padding:0px;" bgcolor="${data.color}">
                                      ${TemplateHelpers.processTextWithLineBreaks(
                                        data.offertext,
                                        { color: "#97272b" }
                                      )}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="top" style="background-color:${
                                      data.color
                                    }; padding:0px; padding-top:10px;" bgcolor="${data.color}">
                                      <table border="0" cellspacing="0" cellpadding="0" align="center" style="background-color:${
                                        data.color
                                      };" bgcolor="${data.color}">
                                        <tr>
                                          <td align="center" valign="top" style="font-family:Arial; font-size:16px; line-height:16px; color:#ffffff; background:#97272b; border-radius:5px; padding:5px 10px;">
                                          <a href="${data.promoCodeLink}" target="_blank" style="color: #ffffff; text-decoration: none;">
                                          Promo Code: <strong>${
                                                data.promoCode
                                                }</strong></a>  
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>
                </table>
            </td>
          </tr>
          
          <!-- Shop Now button -->
          <tr>
            <td align="center" valign="top" style="padding:7px 16px 0 16px; font-family:Arial; font-size:14px; line-height:18px; background-color:${
              data.color
            };" bgcolor="${data.color}"> 
              <table border="0" cellspacing="0" cellpadding="0" align="center" style="width:140px; background-color:${
                data.color
              };" bgcolor="${data.color}"> 
                <tr>
                  <td align="center" valign="middle" style="height:34px; background:#97272b; font-family:Arial; font-size:16px; line-height:16px; font-weight:normal; color:#ffffff; text-decoration:none; padding:0; vertical-align:middle; border-radius:5px; text-transform:uppercase;" bgcolor="#97272b" height="34">
                    <a href='${
                      data.ctaUrl
                    }' style="color:#ffffff; text-decoration:none; display:block; padding:10px 20px;"><strong>${
      data.ctaText
    }</strong></a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Indus Moments logo -->
          <tr>
            <td align="center" valign="top" style="padding:25px 0 10px 0; background-color:${
              data.color
            };" bgcolor="${data.color}"> 
              <a href="https://www.indusmoments.com/" target="_blank" style="text-decoration:none;">
                <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/indus-moments.png" width="240" alt="IndusInd Bank" style="display:block; width:240px; margin:0 auto; border:0;">
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
    <td style="background-color:${data.color};padding:0; margin:0;" bgcolor="${
      data.color
    }">
        ${TemplateHelpers.getSocialIcons(data.color, lightColor)}
        ${TemplateHelpers.getFooter(data.tncUrl)}
    </td>
    </tr>
  </table>
</body>
</html>`;
}
// return getTemplate1(data,TemplateHelpers,lightColor);