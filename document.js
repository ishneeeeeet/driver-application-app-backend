module.exports = ({ stepOneData, stepTwoData, stepThreeData }) => {
  const today = new Date();

//   const addressesHTML = stepTwoData.addressesArray
//     .map(
//       (address) => `
//   <tr class="c1">
//     <td class="c19" colspan="1" rowspan="1">
//       <p class="c7">
//         <span class="c3">From date:${address.fromDate}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To date:${address.toDate}</span>
//       </p>
//       <p class="c7"><span class="c3">Street Address:${address.streetAddress}</span></p>
//       <p class="c22">
//         <span>City: ${address.city}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prov. ${address.province}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Postal Code:${address.postalCode}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
//         <span class="c30">Country:${address.country}</span>
//       </p>
//     </td>
//   </tr>
// `
//     )
//     .join("");

  const employerHTML = stepThreeData.employmentHistory.map(
    (employment, index) => `
    <tr class="c9">
    <td class="c19" colspan="1" rowspan="1">
      <p class="c7 c27"><span class="c3"></span></p>
      <p class="c7">
        <span class="c3"
          >Employment Start Date:${employment.fromDate} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
           Employment End Date:${employment.toDate}</span
        >
      </p>
      <p class="c7">
        <span class="c3"
          >Name of the Employer: ${employment.employerName}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; Position Held: ${employment.positionHeld}
        </span>
      </p>
      <p class="c7"><span class="c3">Address: ${employment.streetAddress}</span></p>
      <p class="c22">
        <span
          >City: ${employment.city}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prov. ${employment.province}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; &nbsp;Postal Code: ${employment.postalCode}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span
        ><span class="c12">Country: ${employment.country}</span>
      </p>
      <p class="c22">
        <span class="c12"
          >Contact Person: ${employment.contactName} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; Contact Number: ${employment.contactPhone}
        </span>
      </p>
      <p class="c22"><span class="c3">Reason for Leaving: ${employment.reasonForLeaving}</span></p>
      <p class="c22">
        <span>Driving Experience: &nbsp; &nbsp; &nbsp; &nbsp; </span
        ><span class="c15"
          >Semi-Trailer &nbsp; &nbsp; &nbsp;Reefer &nbsp; &nbsp; &nbsp;
          &nbsp; Flatbed &nbsp; &nbsp; &nbsp; &nbsp; Tanker/Bulk &nbsp;
          &nbsp; &nbsp; Dump &nbsp; &nbsp; &nbsp; Super B/Turnpike</span
        >
      </p>
      <a id="t.86bdf79073a2b4fda2a25e3894e539587fc0ba44"></a
      ><a id="t.6"></a>
      <table class="c0">
        <tr class="c9">
          <td class="c48" colspan="1" rowspan="1">
            <ul class="c2 lst-kix_list_2-0 start">
              <li class="c6 c47 li-bullet-0">
                <span class="c11"
                  >Were you subject to the FMCSRs* while employed
                  here?</span
                >
              </li>
            </ul>
          </td>
          <td class="c50" colspan="1" rowspan="1">
            <p class="c4"><span class="c18">${employment.subjectToFMCSRs}</span></p>
          </td>
        </tr>
        <tr class="c9">
          <td class="c48" colspan="1" rowspan="1">
            <ul class="c2 lst-kix_list_2-0">
              <li class="c6 c47 li-bullet-0">
                <span class="c11"
                  >Was your job designated as a safety-sensitive function in
                  any DOT-regulated mode subject to the drug and alcohol
                  testing requirements of 49 CFR Part 40?</span
                >
              </li>
            </ul>
          </td>
          <td class="c13" colspan="1" rowspan="1">
            <p class="c4"><span class="c18">${employment.safetySensitiveFunction}</span></p>
          </td>
        </tr>
      </table>
      <p class="c22 c27"><span class="c3"></span></p>
    </td>
  </tr>
`
  ).join("");

  return `
    <!DOCTYPE html>
    <html>
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
    <style type="text/css">
      @import url(https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLcf-5JS7Pt-XEl3ieo8uMtiuHKu1krmNwDNFjzw-1Fw6);
      ol.lst-kix_list_1-3 {
        list-style-type: none;
      }
      ol.lst-kix_list_1-4 {
        list-style-type: none;
      }
      .lst-kix_list_2-6 > li:before {
        content: "\x0025cf   ";
      }
      .lst-kix_list_2-7 > li:before {
        content: "o  ";
      }
      ol.lst-kix_list_1-5 {
        list-style-type: none;
      }
      ol.lst-kix_list_1-6 {
        list-style-type: none;
      }
      ol.lst-kix_list_1-0 {
        list-style-type: none;
      }
      .lst-kix_list_2-4 > li:before {
        content: "o  ";
      }
      .lst-kix_list_2-5 > li:before {
        content: "\x0025aa   ";
      }
      .lst-kix_list_2-8 > li:before {
        content: "\x0025aa   ";
      }
      ol.lst-kix_list_1-1 {
        list-style-type: none;
      }
      ol.lst-kix_list_1-2 {
        list-style-type: none;
      }
      .lst-kix_list_1-1 > li {
        counter-increment: lst-ctn-kix_list_1-1;
      }
      ol.lst-kix_list_1-8.start {
        counter-reset: lst-ctn-kix_list_1-8 0;
      }
      ol.lst-kix_list_1-5.start {
        counter-reset: lst-ctn-kix_list_1-5 0;
      }
      ol.lst-kix_list_1-7 {
        list-style-type: none;
      }
      .lst-kix_list_1-7 > li {
        counter-increment: lst-ctn-kix_list_1-7;
      }
      ol.lst-kix_list_1-8 {
        list-style-type: none;
      }
      ol.lst-kix_list_1-7.start {
        counter-reset: lst-ctn-kix_list_1-7 0;
      }
      .lst-kix_list_1-2 > li {
        counter-increment: lst-ctn-kix_list_1-2;
      }
      .lst-kix_list_1-5 > li {
        counter-increment: lst-ctn-kix_list_1-5;
      }
      .lst-kix_list_1-8 > li {
        counter-increment: lst-ctn-kix_list_1-8;
      }
      ol.lst-kix_list_1-4.start {
        counter-reset: lst-ctn-kix_list_1-4 0;
      }
      ol.lst-kix_list_1-1.start {
        counter-reset: lst-ctn-kix_list_1-1 0;
      }
      .lst-kix_list_1-4 > li {
        counter-increment: lst-ctn-kix_list_1-4;
      }
      ol.lst-kix_list_1-6.start {
        counter-reset: lst-ctn-kix_list_1-6 0;
      }
      ol.lst-kix_list_1-3.start {
        counter-reset: lst-ctn-kix_list_1-3 0;
      }
      ul.lst-kix_list_2-8 {
        list-style-type: none;
      }
      ol.lst-kix_list_1-2.start {
        counter-reset: lst-ctn-kix_list_1-2 0;
      }
      ul.lst-kix_list_2-2 {
        list-style-type: none;
      }
      .lst-kix_list_1-0 > li:before {
        content: "" counter(lst-ctn-kix_list_1-0, decimal) ". ";
      }
      ul.lst-kix_list_2-3 {
        list-style-type: none;
      }
      ul.lst-kix_list_2-0 {
        list-style-type: none;
      }
      ul.lst-kix_list_2-1 {
        list-style-type: none;
      }
      ul.lst-kix_list_2-6 {
        list-style-type: none;
      }
      .lst-kix_list_1-1 > li:before {
        content: "" counter(lst-ctn-kix_list_1-1, lower-latin) ". ";
      }
      .lst-kix_list_1-2 > li:before {
        content: "" counter(lst-ctn-kix_list_1-2, lower-roman) ". ";
      }
      ul.lst-kix_list_2-7 {
        list-style-type: none;
      }
      ul.lst-kix_list_2-4 {
        list-style-type: none;
      }
      ul.lst-kix_list_2-5 {
        list-style-type: none;
      }
      .lst-kix_list_1-3 > li:before {
        content: "" counter(lst-ctn-kix_list_1-3, decimal) ". ";
      }
      .lst-kix_list_1-4 > li:before {
        content: "" counter(lst-ctn-kix_list_1-4, lower-latin) ". ";
      }
      ol.lst-kix_list_1-0.start {
        counter-reset: lst-ctn-kix_list_1-0 0;
      }
      .lst-kix_list_1-0 > li {
        counter-increment: lst-ctn-kix_list_1-0;
      }
      .lst-kix_list_1-6 > li {
        counter-increment: lst-ctn-kix_list_1-6;
      }
      .lst-kix_list_1-7 > li:before {
        content: "" counter(lst-ctn-kix_list_1-7, lower-latin) ". ";
      }
      .lst-kix_list_1-3 > li {
        counter-increment: lst-ctn-kix_list_1-3;
      }
      .lst-kix_list_1-5 > li:before {
        content: "" counter(lst-ctn-kix_list_1-5, lower-roman) ". ";
      }
      .lst-kix_list_1-6 > li:before {
        content: "" counter(lst-ctn-kix_list_1-6, decimal) ". ";
      }
      li.li-bullet-0:before {
        margin-left: -18pt;
        white-space: nowrap;
        display: inline-block;
        min-width: 18pt;
      }
      .lst-kix_list_2-0 > li:before {
        content: "\x00   ";
      }
      .lst-kix_list_2-1 > li:before {
        content: "o  ";
      }
      .lst-kix_list_1-8 > li:before {
        content: "" counter(lst-ctn-kix_list_1-8, lower-roman) ". ";
      }
      .lst-kix_list_2-2 > li:before {
        content: "\x0025aa   ";
      }
      .lst-kix_list_2-3 > li:before {
        content: "\x00   ";
      }
      ol {
        margin: 0;
        padding: 0;
      }
      table td,
      table th {
        padding: 0;
      }
      .c48 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 390.9pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c49 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 1pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 470.4pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c50 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 65.3pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c21 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 417.9pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c41 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 113.4pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c16 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 42.5pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c36 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 56.7pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c38 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 106.1pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c5 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 106.3pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c19 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 1pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 467.5pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c13 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: middle;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 65.3pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c39 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 49.5pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c22 {
        padding-top: 0pt;
        border-bottom-color: #000000;
        border-bottom-width: 0.8pt;
        padding-bottom: 1pt;
        line-height: 1;
        border-bottom-style: solid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      .c42 {
        padding-top: 1pt;
        border-top-width: 0.5pt;
        border-top-color: #d9d9d9;
        padding-bottom: 0pt;
        line-height: 1;
        orphans: 2;
        border-top-style: solid;
        widows: 2;
        text-align: left;
      }
      .c17 {
        padding-top: 0pt;
        border-bottom-color: #000000;
        border-bottom-width: 0.8pt;
        padding-bottom: 1pt;
        line-height: 1;
        border-bottom-style: solid;
        orphans: 2;
        widows: 2;
        text-align: center;
      }
      .c11 {
        background-color: #ffffff;
        color: #111827;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 10.5pt;
        font-family: "Quattrocento Sans";
        font-style: normal;
      }
      .c14 {
        color: #000000;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 5pt;
        font-family: "Calibri";
        font-style: normal;
      }
      .c3 {
        color: #000000;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 11pt;
        font-family: "Calibri";
        font-style: normal;
      }
      .c25 {
        color: #7f7f7f;
        font-weight: 700;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 11pt;
        font-family: "Calibri";
        font-style: normal;
      }
      .c12 {
        color: #141010;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 11pt;
        font-family: "Calibri";
        font-style: normal;
      }
      .c15 {
        color: #000000;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 10pt;
        font-family: "Calibri";
        font-style: normal;
      }
      .c8 {
        color: #7f7f7f;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 11pt;
        font-family: "Calibri";
        font-style: normal;
      }
      .c29 {
        color: #4472c4;
        font-weight: 700;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 28pt;
        font-family: "Calibri";
        font-style: normal;
      }
      .c18 {
        color: #000000;
        font-weight: 700;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 11pt;
        font-family: "Calibri";
        font-style: normal;
      }
      .c37 {
        padding-top: 0pt;
        padding-bottom: 8pt;
        line-height: 1.0791666666666666;
        orphans: 2;
        widows: 2;
        text-align: center;
      }
      .c7 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      .c6 {
        padding-top: 0pt;
        padding-bottom: 8pt;
        line-height: 1.0791666666666666;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      .c44 {
        color: #000000;
        font-weight: 700;
        vertical-align: baseline;
        font-size: 11pt;
        font-family: "Calibri";
        font-style: normal;
      }
      .c33 {
        color: #000000;
        font-weight: 700;
        vertical-align: baseline;
        font-size: 5pt;
        font-family: "Calibri";
        font-style: normal;
      }
      .c4 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1;
        orphans: 2;
        widows: 2;
        text-align: center;
      }
      .c32 {
        padding-top: 0pt;
        padding-bottom: 8pt;
        line-height: 1.0791666666666666;
        orphans: 2;
        widows: 2;
        text-align: justify;
      }
      .c40 {
        color: #000000;
        text-decoration: none;
        vertical-align: baseline;
        font-family: "Calibri";
        font-style: normal;
      }
      .c0 {
        border-spacing: 0;
        border-collapse: collapse;
        margin-right: auto;
      }
      .c10 {
        background-color: #ffffff;
        max-width: 468pt;
        padding: 72pt 72pt 72pt 72pt;
      }
      .c31 {
        text-decoration-skip-ink: none;
        -webkit-text-decoration-skip: none;
        text-decoration: underline;
      }
      .c47 {
        margin-left: 16.4pt;
        padding-left: 0pt;
      }
      .c34 {
        margin-left: 28.4pt;
        padding-left: 0pt;
      }
      .c26 {
        margin-left: 29.4pt;
        padding-left: 0pt;
      }
      .c2 {
        padding: 0;
        margin: 0;
      }
      .c20 {
        font-size: 12pt;
        font-weight: 700;
      }
      .c28 {
        background-color: #b4c6e7;
      }
      .c23 {
        height: 40pt;
      }
      .c51 {
        height: 17.6pt;
      }
      .c27 {
        height: 11pt;
      }
      .c46 {
        margin-left: 8.5pt;
      }
      .c9 {
        height: 0pt;
      }
      .c45 {
        height: 18.1pt;
      }
      .c43 {
        height: 11.8pt;
      }
      .c30 {
        color: #000000;
      }
      .c1 {
        height: 56.6pt;
      }
      .c35 {
        height: 16.8pt;
      }
      .c24 {
        margin-left: 15.9pt;
      }
      .title {
        padding-top: 0pt;
        color: #000000;
        font-size: 28pt;
        padding-bottom: 0pt;
        font-family: "Calibri";
        line-height: 1;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      .subtitle {
        padding-top: 18pt;
        color: #666666;
        font-size: 24pt;
        padding-bottom: 4pt;
        font-family: "Georgia";
        line-height: 1.0791666666666666;
        page-break-after: avoid;
        font-style: italic;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      li {
        color: #000000;
        font-size: 11pt;
        font-family: "Calibri";
      }
      p {
        margin: 0;
        color: #000000;
        font-size: 11pt;
        font-family: "Calibri";
      }
      h1 {
        padding-top: 24pt;
        color: #000000;
        font-weight: 700;
        font-size: 24pt;
        padding-bottom: 6pt;
        font-family: "Calibri";
        line-height: 1.0791666666666666;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h2 {
        padding-top: 18pt;
        color: #000000;
        font-weight: 700;
        font-size: 18pt;
        padding-bottom: 4pt;
        font-family: "Calibri";
        line-height: 1.0791666666666666;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h3 {
        padding-top: 14pt;
        color: #000000;
        font-weight: 700;
        font-size: 14pt;
        padding-bottom: 4pt;
        font-family: "Calibri";
        line-height: 1.0791666666666666;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h4 {
        padding-top: 12pt;
        color: #000000;
        font-weight: 700;
        font-size: 12pt;
        padding-bottom: 2pt;
        font-family: "Calibri";
        line-height: 1.0791666666666666;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h5 {
        padding-top: 11pt;
        color: #000000;
        font-weight: 700;
        font-size: 11pt;
        padding-bottom: 2pt;
        font-family: "Calibri";
        line-height: 1.0791666666666666;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h6 {
        padding-top: 10pt;
        color: #000000;
        font-weight: 700;
        font-size: 10pt;
        padding-bottom: 2pt;
        font-family: "Calibri";
        line-height: 1.0791666666666666;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
    </style>
  </head>
  <body class="c10 doc-content">
    <div>
      <p class="c17 title">
        <span class="c29">Driver&rsquo;s Application for Employment</span>
      </p>
    </div>
    <p class="c6 c27"><span class="c3"></span></p>
    <p class="c6"><span class="c3">Application Date: ${today} </span></p>
    <p class="c6">
      <span class="c3"
        >Company Applied
        For:${
          stepOneData.companyAppliedFor
        }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Position
        applied for: ${stepOneData.position}
      </span>
    </p>
    <a id="t.7321cad6cf524a77c16da5a5401f90ffd1c48b43"></a><a id="t.0"></a>
    <table class="c0">
      <tr class="c35">
        <td class="c19 c28" colspan="1" rowspan="1">
          <p class="c7"><span class="c20">PERSONAL INFORMATION</span></p>
        </td>
      </tr>
      <tr class="c1">
        <td class="c19" colspan="1" rowspan="1">
          <p class="c7">
            <span class="c3"
              >First
              Name:${
                stepOneData.firstName
              }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbspLast
              Name:${stepOneData.lastName}
            </span>
          </p>
          <p class="c7">
            <span class="c3"
              >Date of
              Birth: ${
                stepOneData.dateOfBirth
              }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Legal
              Status in Canada: ${stepOneData.status}
            </span>
          </p>
          <p class="c7">
            <span class="c3"
              >Email: ${stepOneData.email}</span
            >
          </p>
          <p class="c7">
            <span class="c12"
              >Cell No.: ${stepOneData.cellNo}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home
              No.: ${stepOneData.homeNo ? stepOneData.homeNo : null}</span
            >
          </p>
        </td>
      </tr>
    </table>
    <p class="c6"><span class="c33 c31">&nbsp; &nbsp; </span></p>
    <a id="t.64d8cb7b119df91432d4e8e0f128e42191f5a602"></a><a id="t.1"></a>
    <table class="c0">
      <tr class="c35">
        <td class="c19 c28" colspan="1" rowspan="1">
          <p class="c7"><span class="c20">Address in past 3 years</span></p>
        </td>
      </tr>
      {addressesHTML}
      
    </table>
    <p class="c6"><span class="c33 c31">&nbsp; &nbsp; &nbsp; </span></p>
    <a id="t.b61bea1e32fea2b57e84acee8b13cb6dca2a8dd6"></a><a id="t.2"></a>
    <table class="c0">
      <tr class="c45">
        <td class="c19 c28" colspan="1" rowspan="1">
          <p class="c7">
            <span class="c20">Driver&rsquo;s License Information</span>
          </p>
        </td>
      </tr>
      <tr class="c9">
        <td class="c19" colspan="1" rowspan="1">
          <p class="c7">
            <span class="c3"
              >Driver&rsquo;s License
              No.: ${
                stepOneData.driverLicenseNumber
              }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Class: ${
    stepOneData.driverLicenseClass
  }
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expiry
              Date:${stepOneData.driverLicenseExpiry}</span
            >
          </p>
          <p class="c7">
            <span
              >Issuing
              Province: ${
                stepOneData.province
              }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            ><span class="c30">Any Driver License Condition: ${
              stepOneData.driverLicenseCondition
            }</span>
          </p>
        </td>
      </tr>
    </table>
    <p class="c6"><span class="c31 c33">&nbsp; &nbsp; &nbsp; </span></p>
    <a id="t.820b521a51087d6ed9b0e2182642e9b082c4b5d0"></a><a id="t.3"></a>
    <table class="c0">
      <tr class="c9">
        <td class="c21" colspan="1" rowspan="1">
          <ol class="c2 lst-kix_list_1-0 start" start="1">
            <li class="c6 c34 li-bullet-0">
              <span class="c11"
                >Do you hold a driver&#39;s license in any other jurisdiction
                other than the mentioned above or do you hold any driver&#39;s
                license in any other name?</span
              >
            </li>
          </ol>
        </td>
        <td class="c39" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">${stepOneData.questionOne}</span></p>
        </td>
      </tr>
      <tr class="c9">
        <td class="c21" colspan="1" rowspan="1">
          <ol class="c2 lst-kix_list_1-0" start="2">
            <li class="c6 c26 li-bullet-0">
              <span class="c11"
                >Have you ever been denied a license, permit, or privilege to
                operate a motor vehicle?</span
              >
            </li>
          </ol>
        </td>
        <td class="c39" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">${stepOneData.questionTwo}</span></p>
        </td>
      </tr>
      <tr class="c9">
        <td class="c21" colspan="1" rowspan="1">
          <ol class="c2 lst-kix_list_1-0" start="3">
            <li class="c6 c26 li-bullet-0">
              <span class="c3">H</span
              ><span class="c11"
                >as any license, permit, or privilege ever been suspended or
                revoked?</span
              >
            </li>
          </ol>
        </td>
        <td class="c39" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">${stepOneData.questionThree}</span></p>
        </td>
      </tr>
      <tr class="c9">
        <td class="c21" colspan="1" rowspan="1">
          <ol class="c2 lst-kix_list_1-0" start="4">
            <li class="c6 c26 li-bullet-0">
              <span class="c11"
                >Have you ever tested positive or refused to submit an alcohol
                or controlled substance test?</span
              >
            </li>
          </ol>
        </td>
        <td class="c39" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">${stepOneData.questionFour}</span></p>
        </td>
      </tr>
      <tr class="c9">
        <td class="c21" colspan="1" rowspan="1">
          <ol class="c2 lst-kix_list_1-0" start="5">
            <li class="c6 c26 li-bullet-0">
              <span class="c11"
                >Have you had any injury or medical condition which might affect
                your job (convulsive disorder, epilepsy, fainting, or heart
                disease)?</span
              >
            </li>
          </ol>
        </td>
        <td class="c39" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">${stepOneData.questionFive}</span></p>
        </td>
      </tr>
    </table>
    <p class="c27 c37"><span class="c40 c20"></span></p>
    <p class="c37"><span class="c20 c40">DRIVING EXPERIENCE</span></p>
    <a id="t.0e8d7d6f73fb90cceca6036378c11db20083bff6"></a><a id="t.4"></a>
    <table class="c0">
      <tr class="c9">
        <td class="c38" colspan="1" rowspan="1">
          <p class="c7"><span class="c3">Tractor Semi-Trailer</span></p>
        </td>
        <td class="c36" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">${stepOneData.tractor} - yrs</span></p>
        </td>
        <td class="c5" colspan="1" rowspan="1">
          <p class="c7 c46"><span class="c3">Dry Van Reefer</span></p>
        </td>
        <td class="c16" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">${stepOneData.van} - yrs</span></p>
        </td>
        <td class="c41" colspan="1" rowspan="1">
          <p class="c7 c24"><span class="c3">Turn Pike/Super B</span></p>
        </td>
        <td class="c16" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">${stepOneData.pike} -yrs</span></p>
        </td>
      </tr>
      <tr class="c9">
        <td class="c38" colspan="1" rowspan="1">
          <p class="c7"><span class="c3">Manual Transmission</span></p>
        </td>
        <td class="c36" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">${stepOneData.manual} - yrs</span></p>
        </td>
        <td class="c5" colspan="1" rowspan="1">
          <p class="c7 c46"><span class="c3">Chassis Trailer</span></p>
        </td>
        <td class="c16" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">${stepOneData.chassis} - yrs</span></p>
        </td>
        <td class="c41" colspan="1" rowspan="1">
          <p class="c7 c24"><span class="c3">Long Haul</span></p>
        </td>
        <td class="c16" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">${stepOneData.haul} - yrs</span></p>
        </td>
      </tr>
      <tr class="c9">
        <td class="c38" colspan="1" rowspan="1">
          <p class="c7"><span class="c3">Dump Truck</span></p>
        </td>
        <td class="c36" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">__ yrs</span></p>
        </td>
        <td class="c5" colspan="1" rowspan="1">
          <p class="c7 c46"><span class="c3">Flatbed Trailer</span></p>
        </td>
        <td class="c16" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">__ yrs</span></p>
        </td>
        <td class="c41" colspan="1" rowspan="1">
          <p class="c7 c24"><span class="c3">US Driving</span></p>
        </td>
        <td class="c16" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">__ yrs</span></p>
        </td>
      </tr>
      <tr class="c9">
        <td class="c38" colspan="1" rowspan="1">
          <p class="c7"><span class="c3">Straight Truck/5 Ton</span></p>
        </td>
        <td class="c36" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">__ yrs</span></p>
        </td>
        <td class="c5" colspan="1" rowspan="1">
          <p class="c7 c46"><span class="c3">Tanker/Bulk Trailer</span></p>
        </td>
        <td class="c16" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">__ yrs</span></p>
        </td>
        <td class="c41" colspan="1" rowspan="1">
          <p class="c7 c24"><span class="c3">Winter Driving</span></p>
        </td>
        <td class="c16" colspan="1" rowspan="1">
          <p class="c4"><span class="c3">__ yrs</span></p>
        </td>
      </tr>
    </table>
    <br/>
        <br/>
        <br/>
        <br/>
    <p class="c6 c27"><span class="c3"></span></p>
    <a id="t.d042403adcb51a3e73a14e0dc9ae7a5faee1bee4"></a><a id="t.5"></a>
    <table class="c0">
      <tr class="c51">
        <td class="c19 c28" colspan="1" rowspan="1">
        
          <p class="c7"><span class="c40 c20">Employment History</span></p>
        </td>
      </tr>
      ${employerHTML}
    </table>
   
    <table class="c0">
      <tr class="c35">
        <td class="c19 c28" colspan="1" rowspan="1">
          <p class="c7"><span class="c20">Accident History</span></p>
        </td>
      </tr>
      <tr class="c1">
        <td class="c19" colspan="1" rowspan="1">
          <p class="c7">
            <span class="c3"
              >Date of
              Accident:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Location:
            </span>
          </p>
          <p class="c7"><span class="c3">Nature of Accident: </span></p>
          <p class="c7">
            <span class="c30">No. of </span
            ><span
              >Fatalities:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            ><span class="c30">No. of </span><span class="c3">Injuries:</span>
          </p>
          <p class="c7">
            <span class="c12"
              >Hazardous Material Spill:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >
          </p>
        </td>
      </tr>
    </table>
    <p class="c6"><span class="c14">&nbsp; &nbsp;</span></p>
    <a id="t.6c423e50043113b89dd8d1a32acc682f9e727355"></a><a id="t.8"></a>
    <table class="c0">
      <tr class="c43">
        <td class="c49 c28" colspan="1" rowspan="1">
          <p class="c7">
            <span class="c20">Traffic convictions </span
            ><span class="c30">(Other than parking violations)</span>
          </p>
        </td>
      </tr>
      <tr class="c23">
        <td class="c49" colspan="1" rowspan="1">
          <p class="c7">
            <span class="c3"
              >Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Charge:
            </span>
          </p>
          <p class="c7">
            <span class="c3"
              >Location:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Penalty:
            </span>
          </p>
        </td>
      </tr>
    </table>
    <p class="c6"><span class="c14">&nbsp; &nbsp; </span></p>
    <p class="c6">
      <span>Accepted by the Applicant: </span><span class="c31">YES</span>
    </p>
    <p class="c32">
      <span class="c15"
        >I understand that information I provide regarding current and/or
        previous employers may be used, and those employer(s) will be contacted,
        for the purpose of investigating my safety performance history.</span
      >
    </p>
    <p class="c32">
      <span class="c15"
        >I authorize my prospect employer to make such investigations and
        inquiries of my personal, employment, financial or medical history and
        other related matters as may be necessary in arriving at an employment
        decision. (Generally, inquiries regarding medical history will be made
        only if an after a conditional offer of employment has been extended) I
        hereby release employers, schools, health care providers and other
        persons from all liability in responding to inquiries and releasing
        information in connection with my application.</span
      >
    </p>
    <p class="c32">
      <span class="c15"
        >I agree that, if hired, I will immediately inform my employer in
        writing of any violations or accidents that occur while I am operating
        any motor vehicle. I will also immediately inform my employer of any
        suspensions, restrictions, prohibitions, or any other change in the
        status of my driver&rsquo;s license.</span
      >
    </p>
    <p class="c32">
      <span class="c15"
        >By signing this application, I certify that this application was
        completed by me and that all entries on it and information in it are
        true and complete to the best of my knowledge. In the event of
        employment, I understand that false or misleading information given in
        my application or interview(s) may result in discharge. I understand,
        also, that I am required to abide by all rules and regulations of the
        company.</span
      >
    </p>
    <p class="c32 c27"><span class="c15"></span></p>
    <p class="c32">
      <span class="c15"
        >Applicant
        Signature:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date:
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;</span
      >
    </p>
    <div>
      <p class="c42">
        <span class="c18">&nbsp;| </span
        ><span class="c8"
          >Page&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
        ><span class="c25">Primez Trucking Solutions Inc.</span>
      </p>
      <p class="c7 c27"><span class="c3"></span></p>
    </div>
  </body>
</html>

  `;
};
