import tinycolor from 'tinycolor2';
import { getTemplate1 } from '../Templates/T1';

export const htmlTemplatepreview = async (data, templateName) => {
    if (!data) {
        console.warn("No data provided. Template may contain placeholders.");
        data = {};
    }
    const TemplateHelpers = {
        getFooter: function (tncUrl) {
            return `<table class="footer" role="presentation" cellspacing="0" cellpadding="0" width="100%"
       style="background-color: #97282b; color: #FFF; font-size: 12px; font-weight: 400; text-align: center; border-collapse: collapse; width: 100%; min-width: 300px;font-family: Arial;">
    <tr>
        <td width="35%" style="padding: 10px 20px; text-align: left; width: 35%; background-color:#97282b;">
            <div style="margin: 0;text-decoration:    underline;"> <a href="${tncUrl || "https://www.indusmoments.com/"
                }" 
               target="_blank"
               style="color: #FFF; text-decoration: none;">
            Terms and conditions apply
            </a>
            </div>
        </td>
        <td class="footer-spacer-td" style="width: 5.5%; background-color: #97282b;"></td>
        <td width="75%" style="padding: 10px 10px; text-align: right; width: 75%; background-color:#97282b;">
            <a href= "https://www.indusind.com/in/en/personal/IBL-thirdparty-disclaimer.html" 
               target="_blank"
               style="color: #FFF; text-decoration: none;">
                <span style="text-decoration: underline;">Click here</span> for IndusInd Bank Disclaimer
            </a>
        </td>
    </tr>
</table>`;
        },

        getSocialIcons: function (bgcolor, lightColor) {
            const iconSize = "16";
            const iconSpacing = "1px";
            const socialLinks = [
                {
                    url: "https://www.facebook.com/OfficialIndusIndBankPage",
                    icon: lightColor
                        ? "https://i.imgur.com/PQPkghd.png"
                        : "https://i.imgur.com/RWyf7AU.png",
                    alt: "Facebook",
                },
                {
                    url: "https://www.instagram.com/indusind_bank/",
                    icon: lightColor
                        ? "https://i.imgur.com/uN59ZLq.png"
                        : "https://i.imgur.com/v4b3v9B.png",
                    alt: "Instagram",
                },
                {
                    url: "https://www.threads.net",
                    icon: lightColor
                        ? "https://i.imgur.com/cEFoDYh.png"
                        : "https://i.imgur.com/lTZNuny.png",
                    alt: "Threads",
                },
                {
                    url: "https://www.linkedin.com/company/indusind-bank/",
                    icon: lightColor
                        ? "https://i.imgur.com/aT9AymK.png"
                        : "https://i.imgur.com/AVGxXtH.png",
                    alt: "LinkedIn",
                },
                {
                    url: "https://twitter.com/myindusindbank",
                    icon: lightColor
                        ? "https://i.imgur.com/FVcqiJt.png"
                        : "https://i.imgur.com/LXJyKRm.png",
                    alt: "X",
                },
            ];

            return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" 
       style="width:100%; min-width:100%; background-color:${bgcolor
                }; border-collapse:collapse;">
    <tr>
        <td valign="middle" style="padding:0px 10px 3px 0;background-color:${bgcolor
                };vertical-align: middle;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                   style="width:100%; border-collapse:collapse;background-color:${bgcolor
                };">
                <tr>
                    <!-- Logo Column -->
                    <td align="left" valign="bottom" width="61" style="padding:0;background-color:${bgcolor
                };">
                        <img src="${lightColor
                    ? "https://i.imgur.com/3j0fIwT.png"
                    : "https://i.imgur.com/gKg2GX7.png"
                }" 
         width="40" alt="IndusInd Bank"                style="display: block; width: 40px;"">
                    </td>
                    
                    <!-- Spacer Column -->
                    <td class="socialspacer" style="width:auto; padding:0;background-color:${bgcolor
                };">&nbsp;</td>
                    
                    <!-- Social Icons Column -->
                    <td align="right" valign="bottom" style="padding:0; white-space:nowrap;padding:10px 5px 10px 335px;background-color:${bgcolor
                }; vertical-align: bottom;">
                        <span style="font-size:10.17px; color:#9A413C; font-weight:600; padding-right:${iconSpacing}; vertical-align:bottom; font-family:Arial;">
                            Connect with us:
                        </span>
                        ${socialLinks
                    .map(
                        (link) => `
                        <a href="${link.url}" target="_blank" 
                           style="display:inline-block; margin:0 ${iconSpacing}; vertical-align:middle;">
                            <img src="${link.icon}" width="${iconSize}" height="${iconSize}"
                                 alt="${link.alt}" style="display:block; border:0;">
                        </a>
                        `
                    )
                    .join("")}
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
`;
        },
        getNavbarTwoLogos: function (data, leftIconUrl, bgcolor) {
            const src =
                leftIconUrl ||
                "https://demo.forecastadvtg.com/projects/Hyperface/2025/email/Boombay/boombay-logo.png";
            return `
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%; background-color:${bgcolor || data.color
                };" bgcolor="${bgcolor || data.color}">
        <tr>
            <!-- Left Logo -->
            <td align="left" valign="middle" style="width:50%; background-color:${data.color || bgcolor
                };" bgcolor="${data.color || bgcolor}">
            <img src='${src}'
                alt="Brand-logo"
                style="display:block; height:28px; width:auto; max-width:100%;" class="main-logo">
            </td>
            <td class="spacer" style="width:50px; background-color:${data.color || bgcolor
                };" bgcolor="${data.color || bgcolor}">&nbsp;</td>
            <!-- Right Logo -->
            <td align="right" valign="middle" style="width:50%; background-color:${data.color || bgcolor
                };" bgcolor="${data.color || bgcolor}">
            <a href="https://www.indusind.com/" target="_blank" style="text-decoration:none;">
                <img src="${lightColor
                    ? "https://demo.forecastadvtg.com/projects/Hyperface/2025/email/logo.png"
                    : "https://i.imgur.com/fy1Y2Pz.png"
                }" 
                    alt="Bank Logo" width="auto" height="28px" style="display: block;">
            </a>
            </td>
        </tr>
      </table>
    `;
        },

        // Navbar with one logo (right aligned)
        getNavbarSingleLogo: function (data, bgcolor) {
            return `
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr style="background-color: ${data.color || bgcolor};">
                <td align="right" style="padding: 18px;">
                <a href="https://www.indusind.com/" target="_blank" style="text-decoration:none;">
                    <img src="${lightColor
                    ? "https://demo.forecastadvtg.com/projects/Hyperface/2025/email/logo.png"
                    : "https://i.imgur.com/fy1Y2Pz.png"
                }" 
                        alt="Bank Logo" width="240" height="28" style="display: block;">
                        </a>
                </td>
            </tr>
        </table>
    `;
        },
        processText: function (text, options = {}) {
            if (!text) return "";

            const styles = {
                color: options.color || "#97272b",
                fontWeight: options.bold ? "bold" : "normal",
                fontSize: options.size || "inherit",
                fontStyle: options.italic ? "italic" : "normal",
                textDecoration: options.underline ? "underline" : "none",
            };

            const styleString = Object.entries(styles)
                .map(([key, value]) => `${key}:${value}`)
                .join(";");

            const tag = options.tag || "strong";
            // Process markdown-style bold (**text**)
            return text.replace(
                /\*\*(.*?)\*\*/g,
                `<${tag} style="${styleString}">$1</${tag}>`
            );
        },
        insertLineBreaks: function (text, delimiter = "///") {
            if (!text || typeof text !== "string") return "";
            return text.split(delimiter).join("<br>");
        },
        processTextWithLineBreaks: function (text, options = {}) {
            if (!text || typeof text !== "string") return "";

            const styles = {
                color: options.color || "#97272b",
                fontWeight: options.bold ? "bold" : "normal",
                fontSize: options.size || "inherit",
                fontStyle: options.italic ? "italic" : "normal",
                textDecoration: options.underline ? "underline" : "none",
            };

            const styleString = Object.entries(styles)
                .map(([key, value]) => `${key}:${value}`)
                .join(";");

            const tag = options.tag || "strong";
            const delimiter = options.delimiter || "/n";

            // Step 1: Replace **bold** with styled tag
            let processed = text.replace(
                /\*\*(.*?)\*\*/g,
                `<${tag} style="${styleString}">$1</${tag}>`
            );

            // Step 2: Replace custom line break delimiter with <br>
            processed = processed.split(delimiter).join("<br>");

            return processed;
        }

    };
    const namedColors = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
    };
    const isLightColor = (color) => {
        try {
            let hexColor;
            const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
            if (hexRegex.test(color)) {
                hexColor = color;
            } else {
                try {
                    const tinyColorObj = tinycolor(color);
                    if (tinyColorObj.isValid()) {
                        hexColor = tinyColorObj.toHexString();
                        return hexColor;
                    } else {
                        throw new Error("TinyColor failed");
                    }
                } catch (e) {
                    if (namedColors[color.toLowerCase()]) {
                        hexColor = namedColors[color];
                        return hexColor;
                    } else {
                        throw new Error("Invalid color format");
                    }
                }
            }

            const hex = hexColor.replace("#", "");

            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            return brightness > 200;
        } catch (e) {
            console.log("Invalid color format:", color);
            throw new Error("Invalid color format");
        }
    };

    const lightColor = isLightColor(data.color || "#ffffff");
    let selectedTemplate;
    const templateMap = {
        template1: getTemplate1,
        // template2: T2_1Brand_indusMoments_2Offer_2PromoCode,
        // template3: T3_2Brand_indusMoment_2Brands_1Offer,
        // template4: T4_1Brand_Network_2Offer_2promoCode,
        // template5: T5_2Brand_Network_2Brand_1Offer,
        // template6: T6_3Brand_indusMoment_3Brands_1Offer,
        // template7: T7_3Brand_network_3Brand_1Offer,
        // template8: PT8_1Brand_indusMoments_1Offer_1PromoCode_network,
        // template9: PT9_4Brand_indusMoment_4Brand_1Offer,
        // template10: PT10_4Brand_network_4Brand_1Offer,
    };

    if (templateMap[templateName]) {
        selectedTemplate = await templateMap[templateName]({
            // additionalScope: {
                data: data,
                TemplateHelpers: TemplateHelpers,
                lightColor: lightColor,
                functionName: "preview"
            // },
        });
    } else {
        selectedTemplate = '<div>wrong template selected</div>';
    }
    return selectedTemplate;
}


export const htmlTemplate = async (data, templateName) => {
    if (!data) {
        console.warn("No data provided. Template may contain placeholders.");
        data = {};
    }
    const TemplateHelpers = {
        getFooter: function (tncUrl) {
            return `<table class="footer" role="presentation" cellspacing="0" cellpadding="0" width="100%"
       style="background-color: #97282b; color: #FFF; font-size: 12px; font-weight: 400; text-align: center; border-collapse: collapse; width: 100%; min-width: 300px;font-family: Arial;">
    <tr>
        <td width="35%" style="padding: 10px 20px; text-align: left; width: 35%; background-color:#97282b;">
            <div style="margin: 0;text-decoration:    underline;"> <a href="${tncUrl || "https://www.indusmoments.com/"
                }" 
               target="_blank"
               style="color: #FFF; text-decoration: none;">
            Terms and conditions apply
            </a>
            </div>
        </td>
        <td class="footer-spacer-td" style="width: 5.5%; background-color: #97282b;"></td>
        <td width="75%" style="padding: 10px 10px; text-align: right; width: 75%; background-color:#97282b;">
            <a href= "https://www.indusind.com/in/en/personal/IBL-thirdparty-disclaimer.html" 
               target="_blank"
               style="color: #FFF; text-decoration: none;">
                <span style="text-decoration: underline;">Click here</span> for IndusInd Bank Disclaimer
            </a>
        </td>
    </tr>
</table>`;
        },

        getSocialIcons: function (bgcolor, lightColor) {
            const iconSize = "16";
            const iconSpacing = "1px";
            const socialLinks = [
                {
                    url: "https://www.facebook.com/OfficialIndusIndBankPage",
                    icon: lightColor
                        ? "https://i.imgur.com/PQPkghd.png"
                        : "https://i.imgur.com/RWyf7AU.png",
                    alt: "Facebook",
                },
                {
                    url: "https://www.instagram.com/indusind_bank/",
                    icon: lightColor
                        ? "https://i.imgur.com/uN59ZLq.png"
                        : "https://i.imgur.com/v4b3v9B.png",
                    alt: "Instagram",
                },
                {
                    url: "https://www.threads.net",
                    icon: lightColor
                        ? "https://i.imgur.com/cEFoDYh.png"
                        : "https://i.imgur.com/lTZNuny.png",
                    alt: "Threads",
                },
                {
                    url: "https://www.linkedin.com/company/indusind-bank/",
                    icon: lightColor
                        ? "https://i.imgur.com/aT9AymK.png"
                        : "https://i.imgur.com/AVGxXtH.png",
                    alt: "LinkedIn",
                },
                {
                    url: "https://twitter.com/myindusindbank",
                    icon: lightColor
                        ? "https://i.imgur.com/FVcqiJt.png"
                        : "https://i.imgur.com/LXJyKRm.png",
                    alt: "X",
                },
            ];

            return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" 
       style="width:100%; min-width:100%; background-color:${bgcolor
                }; border-collapse:collapse;">
    <tr>
        <td valign="middle" style="padding:0px 10px 3px 0;background-color:${bgcolor
                };vertical-align: middle;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                   style="width:100%; border-collapse:collapse;background-color:${bgcolor
                };">
                <tr>
                    <!-- Logo Column -->
                    <td align="left" valign="bottom" width="61" style="padding:0;background-color:${bgcolor
                };">
                        <img src="${lightColor
                    ? "https://i.imgur.com/3j0fIwT.png"
                    : "https://i.imgur.com/gKg2GX7.png"
                }" 
         width="40" alt="IndusInd Bank"                style="display: block; width: 40px;"">
                    </td>
                    
                    <!-- Spacer Column -->
                    <td class="socialspacer" style="width:auto; padding:0;background-color:${bgcolor
                };">&nbsp;</td>
                    
                    <!-- Social Icons Column -->
                    <td align="right" valign="bottom" style="padding:0; white-space:nowrap;padding:10px 5px 10px 335px;background-color:${bgcolor
                }; vertical-align: bottom;">
                        <span style="font-size:10.17px; color:#9A413C; font-weight:600; padding-right:${iconSpacing}; vertical-align:bottom; font-family:Arial;">
                            Connect with us:
                        </span>
                        ${socialLinks
                    .map(
                        (link) => `
                        <a href="${link.url}" target="_blank" 
                           style="display:inline-block; margin:0 ${iconSpacing}; vertical-align:middle;">
                            <img src="${link.icon}" width="${iconSize}" height="${iconSize}"
                                 alt="${link.alt}" style="display:block; border:0;">
                        </a>
                        `
                    )
                    .join("")}
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
`;
        },
        getNavbarTwoLogos: function (data, leftIconUrl, bgcolor) {
            const src =
                leftIconUrl ||
                "https://demo.forecastadvtg.com/projects/Hyperface/2025/email/Boombay/boombay-logo.png";
            return `
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%; background-color:${bgcolor || data.color
                };" bgcolor="${bgcolor || data.color}">
        <tr>
            <!-- Left Logo -->
            <td align="left" valign="middle" style="width:50%; background-color:${data.color || bgcolor
                };" bgcolor="${data.color || bgcolor}">
            <img src='${src}'
                alt="Brand-logo"
                style="display:block; height:28px; width:auto; max-width:100%;" class="main-logo">
            </td>
            <td class="spacer" style="width:50px; background-color:${data.color || bgcolor
                };" bgcolor="${data.color || bgcolor}">&nbsp;</td>
            <!-- Right Logo -->
            <td align="right" valign="middle" style="width:50%; background-color:${data.color || bgcolor
                };" bgcolor="${data.color || bgcolor}">
            <a href="https://www.indusind.com/" target="_blank" style="text-decoration:none;">
                <img src="${lightColor
                    ? "https://demo.forecastadvtg.com/projects/Hyperface/2025/email/logo.png"
                    : "https://i.imgur.com/fy1Y2Pz.png"
                }" 
                    alt="Bank Logo" width="auto" height="28px" style="display: block;">
            </a>
            </td>
        </tr>
      </table>
    `;
        },

        // Navbar with one logo (right aligned)
        getNavbarSingleLogo: function (data, bgcolor) {
            return `
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr style="background-color: ${data.color || bgcolor};">
                <td align="right" style="padding: 18px;">
                <a href="https://www.indusind.com/" target="_blank" style="text-decoration:none;">
                    <img src="${lightColor
                    ? "https://demo.forecastadvtg.com/projects/Hyperface/2025/email/logo.png"
                    : "https://i.imgur.com/fy1Y2Pz.png"
                }" 
                        alt="Bank Logo" width="240" height="28" style="display: block;">
                        </a>
                </td>
            </tr>
        </table>
    `;
        },
        processText: function (text, options = {}) {
            if (!text) return "";

            const styles = {
                color: options.color || "#97272b",
                fontWeight: options.bold ? "bold" : "normal",
                fontSize: options.size || "inherit",
                fontStyle: options.italic ? "italic" : "normal",
                textDecoration: options.underline ? "underline" : "none",
            };

            const styleString = Object.entries(styles)
                .map(([key, value]) => `${key}:${value}`)
                .join(";");

            const tag = options.tag || "strong";
            // Process markdown-style bold (**text**)
            return text.replace(
                /\*\*(.*?)\*\*/g,
                `<${tag} style="${styleString}">$1</${tag}>`
            );
        },
        insertLineBreaks: function (text, delimiter = "///") {
            if (!text || typeof text !== "string") return "";
            return text.split(delimiter).join("<br>");
        },
        processTextWithLineBreaks: function (text, options = {}) {
            if (!text || typeof text !== "string") return "";

            const styles = {
                color: options.color || "#97272b",
                fontWeight: options.bold ? "bold" : "normal",
                fontSize: options.size || "inherit",
                fontStyle: options.italic ? "italic" : "normal",
                textDecoration: options.underline ? "underline" : "none",
            };

            const styleString = Object.entries(styles)
                .map(([key, value]) => `${key}:${value}`)
                .join(";");

            const tag = options.tag || "strong";
            const delimiter = options.delimiter || "/n";

            // Step 1: Replace **bold** with styled tag
            let processed = text.replace(
                /\*\*(.*?)\*\*/g,
                `<${tag} style="${styleString}">$1</${tag}>`
            );

            // Step 2: Replace custom line break delimiter with <br>
            processed = processed.split(delimiter).join("<br>");

            return processed;
        }

    };
    const namedColors = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
    };
    const isLightColor = (color) => {
        try {
            let hexColor;
            const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
            if (hexRegex.test(color)) {
                hexColor = color;
            } else {
                try {
                    const tinyColorObj = tinycolor(color);
                    if (tinyColorObj.isValid()) {
                        hexColor = tinyColorObj.toHexString();
                        return hexColor;
                    } else {
                        throw new Error("TinyColor failed");
                    }
                } catch (e) {
                    if (namedColors[color.toLowerCase()]) {
                        hexColor = namedColors[color];
                        return hexColor;
                    } else {
                        throw new Error("Invalid color format");
                    }
                }
            }

            const hex = hexColor.replace("#", "");

            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            return brightness > 200;
        } catch (e) {
            console.log("Invalid color format:", color);
            throw new Error("Invalid color format");
        }
    };

    const lightColor = isLightColor(data.color || "#ffffff");
    let selectedTemplate;
    const templateMap = {
        // template1: T1_1Brand_indusMoments_1Offer_1PromoCode,
        // template2: T2_1Brand_indusMoments_2Offer_2PromoCode,
        // template3: T3_2Brand_indusMoment_2Brands_1Offer,
        // template4: T4_1Brand_Network_2Offer_2promoCode,
        // template5: T5_2Brand_Network_2Brand_1Offer,
        // template6: T6_3Brand_indusMoment_3Brands_1Offer,
        // template7: T7_3Brand_network_3Brand_1Offer,
        // template8: PT8_1Brand_indusMoments_1Offer_1PromoCode_network,
        // template9: PT9_4Brand_indusMoment_4Brand_1Offer,
        // template10: PT10_4Brand_network_4Brand_1Offer,
    };
    if (templateMap[templateName]) {
        selectedTemplate = await templateMap[templateName].trigger({
            additionalScope: {
                data: data,
                TemplateHelpers: TemplateHelpers,
                lightColor: lightColor,
                functionName: "generate"
            },
        });
    } else {
        selectedTemplate = '<div>wrong template selected</div>';
    }
    return selectedTemplate;
}
