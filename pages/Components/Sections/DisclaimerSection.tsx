import Link from "next/link";
import React from "react";

const DisclaimerSection = () => {
  return (
    <div className="disclaimer-section">
      <h2 className="heading">Disclaimers for Spority</h2>
      <p>
        All the information on this website <Link href={"/"} className="text-[#ff4500]">spority.live</Link> is published in
        good faith and for general information purpose only. Spority does not
        make any warranties about the completeness, reliability and accuracy of
        this information. Any action you take upon the information you find on
        this website, is strictly at your own risk. Spority will not be liable
        for any losses and/or damages in connection with the use of our website.
      </p>
      <p>
        From our website, you can visit other websites by following hyperlinks
        to such external sites. While we strive to provide only quality links to
        useful and ethical websites, we have no control over the content and
        nature of these sites. These links to other websites do not imply a
        recommendation for all the content found on these sites. Site owners and
        content may change without notice and may occur before we have the
        opportunity to remove a link which may have gone {"'"}bad{"'"}.
      </p>
      <p>
        Please be also aware that when you leave our website, other sites may
        have different privacy policies and terms which are beyond our control.
        Please be sure to check the Privacy Policies of these sites as well as
        their {'"'}Terms of Service{'"'} before engaging in any business or uploading
        any information.
      </p>
      <h3 className="heading">Consent</h3>
      <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
      <h3 className="heading">Update</h3>
      <p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
      <p>If you require any more information or have any questions about our site{"'"}s disclaimer, please feel free to contact us by email at contactus@spority.live.</p>
    </div>
  );
};

export default DisclaimerSection;
