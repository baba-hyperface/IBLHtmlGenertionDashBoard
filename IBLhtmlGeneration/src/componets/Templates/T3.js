export function getTemplate3(data, TemplateHelpers, lightColor) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;">
  <title>IndusInd Bank</title>
  <style type="text/css">
    body {
      margin: 0;
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
      .head {
        font-size: 24px !important;
        line-height: normal !important;
        letter-spacing: 1px !important;
      }
      .subhead {
        font-size: 28px !important;
        line-height: 30px !important;
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
      .pdtop5 {
        padding-top: 5px !important;
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
      .font-18 {
        font-size: 18px !important;
        line-height: 24px !important;
      }
      .font-16 {
        font-size: 16px !important;
        line-height: 20px !important;
      }
      .font-14 {
        font-size: 14px !important;
        line-height: 18px !important;
      }
    }
  </style>
</head>
<body>
  <div style="font-size:1px; color:#ffffff; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; display:none;">
  </div>
  <table class="table" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;" >
    <tbody>
      <tr>
        <td align="center" valign="middle" class="mobile" style="background-color:${
          data.backgroundColor
        };">
          <table class="table" align="center" border="0" cellpadding="0" bgcolor="${
            data.backgroundColor
          }" cellspacing="0" width="600" style="width: 600px; margin: 0 auto; background-color:${
    data.backgroundColor
  };">
            <tbody>
              <tr>
                <td align="center" style="background-color:${
                  data.backgroundColor
                };">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${
                    data.backgroundColor
                  }">
                    <tbody>
                      <tr>
                        <td align="center" valign="top" style="padding: 1px; background-color:${
                          data.backgroundColor
                        };" bgcolor="${data.backgroundColor}">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${
                            data.backgroundColor
                          }">
                            <tbody>
                              <tr>
                                <td align="center" valign="top" bgcolor="${
                                  data.backgroundColor
                                }">
                                  <table class="table" width="100%" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="${
                                    data.backgroundColor
                                  }">
                                    <tbody>
                                        <tr>
                                        <td align="center" valign="middle"
                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000000; padding: 20px;background:${data.backgroundColor}"
                                          class="pdlr pdtb">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tbody>
                                              <tr>

                                                <td align="right" valign="middle" style="background:${data.backgroundColor}"><a href="https://www.indusind.com/"
                                                    target="_blank" style="text-decoration: none;"><img
                                                      src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/indusind-logo.png"
                                                      height="28" alt="IndusInd Bank"
                                                      style="display: block; width: auto; min-height: 28px; max-height: 28px; height: 28px;"
                                                      class="main-logo" /></a></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="padding: 30px 0 10px 0; background-color:${
                                          data.backgroundColor
                                        };"
                                          class="pdlr pdtb">
                                          <table width="520" border="0" cellspacing="0" cellpadding="0"
                                            style="width: 520px; background-color:${
                                              data.backgroundColor
                                            };" class="table">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="top"
                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 36px; line-height: 44px; color: #972429; padding: 0; font-weight: bold; background-color:${
                                                    data.backgroundColor
                                                  };"
                                                  class="heading">${TemplateHelpers.processTextWithLineBreaks(
                                                    data.headingLine1,
                                                    { delimeter: "/n" }
                                                  )}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td align="center" valign="top"
                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 23px; line-height: 31px; color: #000000; padding: 10px 0 0 0; background-color:${
                                                    data.backgroundColor
                                                  };"
                                                  class="subheading">${TemplateHelpers.processTextWithLineBreaks(
                                                    data.subHeadingLine1
                                                  )}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" class="pdlr" style="background-color:${
                                          data.backgroundColor
                                        };">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${
                                            data.backgroundColor
                                          }">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="top" class="responsive-image" style="background-color:${
                                                  data.backgroundColor
                                                };"><img
                                                    src='${data.imageUrl}'
                                                    alt="IndusInd Bank" width="500"
                                                    style="display: block; width: 500px; background-color:${
                                                      data.backgroundColor
                                                    };" /></td>
                                              </tr>
                                              <tr>
                                                <td align="center" valign="top" style="padding: 15px 0 0 0; background-color:${
                                                  data.backgroundColor
                                                };"
                                                  class="pdlr">
                                                  <table width="500" border="0" cellspacing="0" cellpadding="0"
                                                    style="width: 500px; background-color:${
                                                      data.backgroundColor
                                                    };" role="presentation" class="table"
                                                    align="center">
                                                    <tbody>
                                                      <tr>
                                                        <td align="left" valign="top" style="padding-bottom: 20px; background-color:${
                                                          data.backgroundColor
                                                        };">
                                                          <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                            align="center" role="presentation" bgcolor="${
                                                              data.backgroundColor
                                                            }">
                                                            <tbody>
                                                              <tr>
                                                                <td align="left" valign="top"
                                                                  style="padding: 12px 10px; border: 1px dashed #000000; background-color:${
                                                                    data.backgroundColor
                                                                  };">
                                                                  <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0" role="presentation" bgcolor="${
                                                                      data.backgroundColor
                                                                    }">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="left" valign="middle" width="340"
                                                                          style="width: 340px; background-color:${
                                                                            data.backgroundColor
                                                                          };">
                                                                          <table width="100%" border="0" cellspacing="0"
                                                                            cellpadding="0" bgcolor="${
                                                                              data.backgroundColor
                                                                            }">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td align="left" valign="middle"
                                                                                  width="130" style="width: 130px; background-color:${
                                                                                    data.backgroundColor
                                                                                  };"
                                                                                  class="td-block"><img
                                                                                    src='${
                                                                                      data.brandLogoUrl1
                                                                                    }'
                                                                                    alt="IndusInd Bank" width="119"
                                                                                    style="display: block; width: 119px; background-color:${
                                                                                      data.backgroundColor
                                                                                    };" />
                                                                                </td>
                                                                                <td align="left" valign="middle"
                                                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 20px; line-height: 24px; color: #000000; padding: 0; background-color:${
                                                                                    data.backgroundColor
                                                                                  };"
                                                                                  class="td-block font-16 pdtop5">
                                                                                  ${TemplateHelpers.processTextWithLineBreaks(
                                                                                    data.offerText1,
                                                                                    {
                                                                                      color:
                                                                                        "#97272b",
                                                                                    }
                                                                                  )}
                                                                                  </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                        <td align="right" valign="middle" style="background-color:${
                                                                          data.backgroundColor
                                                                        };">
                                                                          <table width="120" border="0" cellspacing="0"
                                                                            cellpadding="0" style="width: 120px; background-color:${
                                                                              data.backgroundColor
                                                                            };">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td align="center" valign="top"
                                                                                  height="45"
                                                                                  style="background: #97272b; border-radius: 5px; height: 45px;font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 16px; line-height: 16px; color: #ffffff; text-transform: uppercase; background-color:${
                                                                                    data.backgroundColor
                                                                                  };padding:5px;">
                                                                                  <a href="${
                                                                                    data.ctaUrl1
                                                                                  }"
                                                                                    target="_blank"
                                                                                    style="display: block; height: 45px; color: #ffffff; line-height: 45px; text-decoration: none; background-color:#97272b; white-space: nowrap;"><strong
                                                                                      style="color: #ffffff; text-decoration: none;">${TemplateHelpers.processTextWithLineBreaks(
                                                                                        data.ctaText1,
                                                                                        {
                                                                                          delimiter:
                                                                                            "/n",
                                                                                        }
                                                                                      )}</strong></a></td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="left" valign="top" style="background-color:${
                                                          data.backgroundColor
                                                        };">
                                                          <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                            align="center" role="presentation" bgcolor="${
                                                              data.backgroundColor
                                                            }">
                                                            <tbody>
                                                              <tr>
                                                                <td align="left" valign="top"
                                                                  style="padding: 12px 10px; border: 1px dashed #000000; background-color:${
                                                                    data.backgroundColor
                                                                  };">
                                                                  <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0" role="presentation" bgcolor="${
                                                                      data.backgroundColor
                                                                    }">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="left" valign="middle" width="340"
                                                                          style="width: 340px; background-color:${
                                                                            data.backgroundColor
                                                                          };">
                                                                          <table width="100%" border="0" cellspacing="0"
                                                                            cellpadding="0" bgcolor="${
                                                                              data.backgroundColor
                                                                            }">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td align="left" valign="middle"
                                                                                  width="130" style="width: 130px; background-color:${
                                                                                    data.backgroundColor
                                                                                  };"
                                                                                  class="td-block"><img
                                                                                    src="${
                                                                                      data.brandLogoUrl2
                                                                                    }"
                                                                                    alt="IndusInd Bank" width="119"
                                                                                    style="display: block; width: 119px; background-color:${
                                                                                      data.backgroundColor
                                                                                    };" />
                                                                                </td>
                                                                                <td align="left" valign="middle"
                                                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 20px; line-height: 24px; color: #000000; padding: 0; background-color:${
                                                                                    data.backgroundColor
                                                                                  };"
                                                                                  class="td-block font-16 pdtop5">${TemplateHelpers.processTextWithLineBreaks(
                                                                                    data.offerText2,
                                                                                    {
                                                                                      color:
                                                                                        "#97272b",
                                                                                    }
                                                                                  )}</td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                        <td align="right" valign="middle" style="background-color:${
                                                                          data.backgroundColor
                                                                        };">
                                                                          <table width="120" border="0" cellspacing="0"
                                                                            cellpadding="0" style="width: 120px; background-color:${
                                                                              data.backgroundColor
                                                                            };">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td align="center" valign="top"
                                                                                  height="45"
                                                                                  style="background: #97272b; border-radius: 5px; height: 45px;font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 16px; line-height: 16px; color: #ffffff; text-transform: uppercase; background-color:${
                                                                                    data.backgroundColor
                                                                                  };padding:5px;">
                                                                                  <a href="${
                                                                                    data.ctaUrl2
                                                                                  }"
                                                                                    target="_blank"
                                                                                    style="display: block; height: 45px; color: #ffffff; line-height: 45px; text-decoration: none; background-color:#97272b;white-space: nowrap"><strong
                                                                                      style="color: #ffffff; text-decoration: none;">${TemplateHelpers.processTextWithLineBreaks(
                                                                                        data.ctaText2,
                                                                                        {
                                                                                          delimiter:
                                                                                            "/n",
                                                                                        }
                                                                                      )}</strong></a></td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td align="center" valign="top"
                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 16px; line-height: 18px; color: #97272b; padding: 25px 0 25px 0; text-decoration: none; background-color:${
                                                    data.backgroundColor
                                                  };">
                                                  ${TemplateHelpers.processTextWithLineBreaks(
                                                    data.expiryText,
                                                    { delimiter: "/n" }
                                                  )}</td>
                                              </tr>
                                              <tr>
                                                <td align="center" valign="top"
                                                style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000000; padding: 0 0 10px 0;background-color:${
                                                data.backgroundColor
                                            };">
                                                <a href="https://www.indusmoments.com/" target="_blank"
                                                    style="text-decoration: none;"><img
                                                    src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/indus-moments.png"
                                                    width="260" alt="IndusInd Bank"
                                                    style="display: block; width: 260px; margin: 0 auto;"></a></td>
                                            </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="background-color:${
                                          data.backgroundColor
                                        };">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${
                                            data.backgroundColor
                                          }">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="top" style="background-color:${
                                                  data.backgroundColor
                                                };">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${
                                                    data.backgroundColor
                                                  }">
                                                    <tbody>
                                                      <tr>
                                                        <td align="left" valign="top"
                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000000; padding: 0 0 0 0; background-color:${
                                                            data.backgroundColor
                                                          };">
                                                          <table width="100%" border="0" cellspacing="0"
                                                            cellpadding="0" bgcolor="${
                                                              data.backgroundColor
                                                            }">
                                                            <tbody>
                                                              <tr>
                                                                <td align="left" valign="bottom" width="61" style="background-color:${
                                                                  data.backgroundColor
                                                                };"><img
                                                                    src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/bull.png"
                                                                    width="40" alt="IndusInd Bank"
                                                                    style="display: block; width: 40px; background-color:${
                                                                      data.backgroundColor
                                                                    };" /></td>
                                                                <td align="right" style="padding: 0 15px 10px 0; background-color:${
                                                                  data.backgroundColor
                                                                };"
                                                                  valign="bottom">
                                                                  <table border="0" cellspacing="0" cellpadding="0"
                                                                    align="right" bgcolor="${
                                                                      data.backgroundColor
                                                                    }">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="center" valign="middle"
                                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 10px; line-height: normal; color: #97272b; padding: 0 3px 0 0; background-color:${
                                                                            data.backgroundColor
                                                                          };">
                                                                          Connect with us:</td>
                                                                        <td align="center" valign="middle"
                                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 0 0 0; background-color:${
                                                                            data.backgroundColor
                                                                          };">
                                                                          <a href="https://www.facebook.com/OfficialIndusIndBankPage"
                                                                            target="_blank"
                                                                            style="text-decoration: none;"><img
                                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/facebook.png"
                                                                              alt="Facebook" width="16"
                                                                              style="display: block; width: 16px; background-color:${
                                                                                data.backgroundColor
                                                                              };" /></a>
                                                                        </td>
                                                                        <td align="center" valign="middle"
                                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 5px 0 5px; background-color:${
                                                                            data.backgroundColor
                                                                          };">
                                                                          <a href="https://www.instagram.com/indusind_bank/"
                                                                            target="_blank"
                                                                            style="text-decoration: none;"><img
                                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/instagram.png"
                                                                              alt="Instagram" width="16"
                                                                              style="display: block; width: 16px; background-color:${
                                                                                data.backgroundColor
                                                                              };" /></a>
                                                                        </td>
                                                                        <td align="center" valign="middle"
                                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 0 0 0; background-color:${
                                                                            data.backgroundColor
                                                                          };">
                                                                          <a href="https://www.threads.net/@indusind_bank"
                                                                            target="_blank"
                                                                            style="text-decoration: none;"><img
                                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/at.png"
                                                                              alt="Threads" width="14"
                                                                              style="display: block; width: 14px; background-color:${
                                                                                data.backgroundColor
                                                                              };" /></a>
                                                                        </td>
                                                                        <td align="center" valign="middle"
                                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 5px 0 5px; background-color:${
                                                                            data.backgroundColor
                                                                          };">
                                                                          <a href="https://www.linkedin.com/company/indusind-bank"
                                                                            target="_blank"
                                                                            style="text-decoration: none;"><img
                                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/linkedin.png"
                                                                              alt="LinkedIn" width="16"
                                                                              style="display: block; width: 16px; background-color:${
                                                                                data.backgroundColor
                                                                              };" /></a>
                                                                        </td>
                                                                        <td align="center" valign="middle"
                                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 0 0 0; background-color:${
                                                                            data.backgroundColor
                                                                          };">
                                                                          <a href="https://twitter.com/myindusindbank"
                                                                            target="_blank"
                                                                            style="text-decoration: none;"><img
                                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/twitter.png"
                                                                              alt="Twitter" width="16"
                                                                              style="display: block; width: 16px; background-color:${
                                                                                data.backgroundColor
                                                                              };" /></a>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="right" valign="top"
                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #ffffff; padding: 10px 16px 10px 16px; background-color:#97282b;">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tbody>
                                              <tr>
                                                <td align="left" valign="bottom"
                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: 14px; color: #ffffff; padding: 0 0 0 0;"
                                                  class="td-block">For Terms and Conditions <a
                                                    href="${
                                                      data.tncUrl
                                                    }" target="_blank"
                                                    style="color: #ffffff; text-decoration: underline;">click here</a>
                                                </td>
                                                <td align="right" valign="bottom"
                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: 14px; color: #ffffff; padding: 0 0 0 0;"
                                                  class="text-left td-block pdtop10"><a
                                                    href="https://www.indusind.com/in/en/about-us/IBL-thirdparty-disclaimer.html"
                                                    target="_blank"
                                                    style="color: #ffffff; text-decoration: underline;">Click here</a>
                                                  for IndusInd Bank Disclaimer</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>

  `;
}

export function getTemplate3preview(data, TemplateHelpers, lightColor) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>IndusInd Bank (Retool UI)</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, 'Times New Roman', Tahoma, serif;
      background: ${data.backgroundColor};
      color: #000;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: ${data.backgroundColor};
      padding: 0 16px;
    }
    .main{
      max-width: 600px;
      margin: 0 auto;
      background: ${data.backgroundColor};
    }
    .navbar {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 24px 0 12px 0;
    }
    .navbar img {
      height: 28px;
      width: auto;
      display: block;
    }
    .heading {
      font-size: 36px;
      line-height: 44px;
      color: #972429;
      font-weight: bold;
      text-align: center;
      margin: 30px 0 10px 0;
    }
    .subheading {
      font-size: 23px;
      line-height: 31px;
      color: #000;
      text-align: center;
      margin-bottom: 20px;
    }
    .banner {
      width: 100%;
      max-width: 500px;
      margin: 0 auto 18px auto;
      display: block;
      border-radius: 8px;
    }
    .promos {
      display: flex;
      flex-direction: column;
      gap: 18px;
      margin-bottom: 24px;
    }
    .promo-box {
      background: ${data.backgroundColor};
      border: 1px dashed #000;
      display: flex;
      align-items: center;
      padding: 16px;
      gap: 16px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .promo-logo {
      width: 80px;
      height: 80px;
      object-fit: contain;
      flex-shrink: 0;
      border-radius: 6px;
      background: #f7f7f7;
      display: block;
      background-color: ${data.backgroundColor};
    }
    .promo-info {
      flex: 1;
      font-size: 20px;
      color: #97272b;
      line-height: 1.3;
      min-width: 0;
    }
    .promo-btn {
      background: #97272b;
      color: #fff !important;
      text-transform: uppercase;
      border-radius: 5px;
      font-size: 16px;
      font-style:none !important;
      padding: 0 18px;
      height: 45px;
      line-height: 45px;
      font-weight: bold !important;
      text-align: center;
      border: none;
      cursor: pointer;
      text-decoration: none !important;
      white-space: nowrap;
      transition: background 0.2s;
      box-shadow: 0 1px 4px rgba(151,39,43,0.07);
      display: inline-block;
    }
     .promo-btn strong {
        text-decoration: none !important;
    }
    .promo-btn:hover {
      background: #7d1d23;
    }
    .expiry {
      text-align: center;
      font-size: 16px;
      color: #97272b;
      margin: 18px 0 8px 0;
    }
    .footer-logos {
      text-align: center;
      margin-bottom: 16px;
    }
    .footer-logos img {
      width: 180px;
      max-width: 100%;
    }
    .socials {
      display: flex;
      align-items: center;
      background-color: ${data.backgroundColor};
      gap: 10px;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .socials >div:nth-child(0){
        height:24px;
    }
    .socials .label {
      font-size: 12px;
      color: #97272b;
    }
    .socials img {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #eee;
    }
    .footer-links {
      display: flex;
      max-width:600px;
      justify-content: space-between;
      font-size: 13px;
      background: #97282b;
      color: #fff;
      padding: 12px 20px;
    }
    .footer-links a {
      color: #fff;
      text-decoration: underline;
      margin-left: 6px;
    }
    @media (max-width: 640px) {
      .container {padding: 0 3vw;}
      .promo-box {flex-direction: column; align-items: flex-start;}
      .promo-logo {margin-bottom: 8px;}
      .promo-btn {width: 100%; margin-top: 10px;}
      .footer-links {flex-direction: column; gap: 8px; text-align: center;}
      .navbar {padding: 16px 0 8px 0;}
      .heading {font-size: 27px;}
      .subheading {font-size: 17px;}
    }
  </style>
</head>
<body>
<div class="main">
  <div class="container">
    <!-- Navbar -->
    <div class="navbar">
      <a href="https://www.indusind.com/" target="_blank" rel="noopener">
        <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/indusind-logo.png" alt="IndusInd Bank Logo">
      </a>
    </div>
    <!-- Heading -->
    <div class="heading">
      ${TemplateHelpers.processTextWithLineBreaks(data.headingLine1, {
        delimiter: "/n",
      })}
    </div>
    <div class="subheading">
      ${TemplateHelpers.processTextWithLineBreaks(data.subHeadingLine1)}
    </div>
    <!-- Banner -->
    <img class="banner" src="${data.imageUrl}" alt="Banner" />
    <!-- Promo Boxes -->
    <div class="promos">
      <div class="promo-box">
        <img class="promo-logo" src="${data.brandLogoUrl1}" alt="Brand 1"/>
        <div class="promo-info">
          ${TemplateHelpers.processTextWithLineBreaks(data.offerText1, {
            color: "#97272b",
          })}
        </div>
        <a href="${data.ctaUrl1}" target="_blank" class="promo-btn">
          ${TemplateHelpers.processTextWithLineBreaks(data.ctaText1, {
            delimiter: "/n",
          })}
        </a>
      </div>
      <div class="promo-box">
        <img class="promo-logo" src="${data.brandLogoUrl2}" alt="Brand 2"/>
        <div class="promo-info">
          ${TemplateHelpers.processTextWithLineBreaks(data.offerText2, {
            color: "#97272b",
          })}
        </div>
        <a href="${data.ctaUrl2}" target="_blank" class="promo-btn">
          ${TemplateHelpers.processTextWithLineBreaks(data.ctaText2, {
            delimiter: "/n",
          })}
        </a>
      </div>
    </div>
    <!-- Expiry Text -->
    <div class="expiry">
      ${TemplateHelpers.processTextWithLineBreaks(data.expiryText, {
        delimiter: "/n",
      })}
    </div>
    <!-- Footer Logos -->
    <div class="footer-logos">
      <a href="https://www.indusmoments.com/" target="_blank">
        <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/indus-moments.png" alt="Indus Moments Logo"/>
      </a>
    </div>
    <!-- Socials -->
    </div>
    <div class="socials">
        <div>
            <img
                src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/bull.png"
                width="40" alt="IndusInd Bank"
                height="40"
                style="display: block; width: 40px; height:40px;background-color:${
                  data.backgroundColor
                };" />
        </div>
        <div>
            <span class="label">Connect with us:</span>
            <a href="https://www.facebook.com/OfficialIndusIndBankPage" target="_blank"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/facebook.png" alt="Facebook"></a>
            <a href="https://www.instagram.com/indusind_bank/" target="_blank"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/instagram.png" alt="Instagram"></a>
            <a href="https://www.threads.net/@indusind_bank" target="_blank"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/at.png" alt="Threads"></a>
            <a href="https://www.linkedin.com/company/indusind-bank" target="_blank"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/linkedin.png" alt="LinkedIn"></a>
            <a href="https://twitter.com/myindusindbank" target="_blank"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/twitter.png" alt="Twitter"></a>
        </div>
    </div>
    <!-- Footer Links -->
    <div class="footer-links">
      <div>
        For Terms and Conditions
        <a href="${data.tncUrl}" target="_blank">click here</a>
      </div>
      <div>
        <a href="https://www.indusind.com/in/en/about-us/IBL-thirdparty-disclaimer.html" target="_blank">
          Click here
        </a> for IndusInd Bank Disclaimer
      </div>
    </div>
    </div>
</body>
</html>
  `;
}
