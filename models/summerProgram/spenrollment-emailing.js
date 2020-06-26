let replacement = {
  userName: 'user',
  _id: '',
};

const templates = [
  {
    templateName: 'SP Class Enrollment',
    //fromEmail: '', // use default one
    subject: '{{name}}, welcome to HCC Summer Program!',
    content: `
Dear {{name}}<br/>
Thanks for enrolling in the HCC Summer Program! Your enrollment ID is {{_id}}.<br/>

We will contact you for the summer program details.<br/>

<br/>
HiCoding Club Summer Program team
`,
    tag: 'spclassenrollment',
  },
  {
    templateName: 'SP Confirmation - Template',
    //fromEmail: '', // use default one
    subject: '[HiCodingClub] Pre-camp Meeting. Confirmation Required!',
    content: `
<p>Hey {{name}},</p>
<p>It's exciting that the HCC Summer Camp will begin in two weeks. We'll have a pre-camp meeting to show you how to prepare for the summer camp!</p>
<ul>
<li><span style="font-size: 18px;">Date and Time: July 2, 2020, 3:00 pm - 4:00 pm, PDT</span></li>
<li><span style="font-size: 18px;">Zoom: ID - 123-456-7890, Link: zoomlink </span></li>
</ul>
<p>Click&nbsp;<a href="http://localhost:3000/summerprogram/cust/confirm?type=precamp0702&amp;e={{_id}}&amp;t={{mddsEmailToken}}" target="_blank">this link</a>&nbsp;to&nbsp;<span style="color: rgb(255, 0, 0);">confirm</span>.</p>
<p>Or copy this url to your browser to confirm: http://localhost:3000/summerprogram/cust/confirm?type=precamp0702&amp;e={{_id}}&amp;t={{mddsEmailToken}}</p>
<p>We are looking forward to seeing you!</p>
<p>HCC Summer Camp Team.</p>
`,
    tag: 'hcc-sc-0701',
  },
];

module.exports = {
  replacement,
  templates,
  hooks: {
    'insert': async (emailer, data, replacement, emailerObj) => {
      // data is the created enroll object
      // replacement is the default replacement tags.

      // templateTag: email template tag
      const templateTag = 'spclassenrollment';
      // email address of recipient
      const email = data.email;
      // replacement objects: used to replace the tags in 
      const replacementObj = {
        name: data.name,
        _id: data._id,
      };
      emailer.sendEmailTemplate([email], templateTag, replacement, [replacementObj]).then(
        // result: {success: 1, fail: 0, pending: 0, errors: []}
        (result) => {}
      ).catch((err) => {});
    },
    'update': undefined,
  }
};
