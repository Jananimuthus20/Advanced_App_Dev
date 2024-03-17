import React from 'react'
import '../assets/CSS/core.css'
import terms_icon from '../assets/Images/terms_icon.gif'

const Terms = () => {
  return (
    <div>
       <div className="terms-and-conditions">
         <img src={terms_icon} style={{marginLeft:"46%",width:"13%"}}/> 
      <h1 style={{ fontSize: '24px', textAlign:"center" }}><b>Terms and Conditions</b></h1>
      <br/>
      <p>
        Welcome to Corpify, an app for Planning and managing corporate events effectively. These Terms and Conditions outline the rules and regulations for using our app. By using Corpify app, you accept and agree to be bound by these terms. If you disagree with any part of these terms, please refrain from using our services.
      </p>
<br/>
      <h2 style={{ fontSize: '20px' }}><b>1. Acceptance of Terms</b></h2>
      <p>
      By accessing or using Corpify, you agree to be bound by these Terms and Conditions.
      </p>

      <h2 style={{ fontSize: '20px' }}><b>2. Account Registration</b></h2>
      <p>
      Users may be required to register an account to access certain features of the app. Users are responsible for maintaining the confidentiality of their account information and are liable for any activities that occur under their account.
      </p>

      <h2 style={{ fontSize: '20px' }}><b>3.Use of Service</b></h2>
      <p>
     Corpify is provided for the purpose of facilitating communication and transactions between event planners and corporate clients. Users must not use the service for any unlawful purposes or in any way that may impair the performance, availability, or accessibility of the app.
      </p>

      <h2 style={{ fontSize: '20px' }}><b>4. Prohibited Activities</b></h2>
      <p>
        While using Corpify, you agree not to engage in any activities that:
      </p>
      <ul>
        <li>Violate any local, national, or international laws or regulations.</li>
        <li>Disrupt or interfere with the app's functionality, security, or availability.</li>
        <li>Attempt to gain unauthorized access to other users' accounts or data.</li>
        <li>Use any automated system or software to extract data from the Corpify without our prior written consent.</li>
        <li>Impersonate any person or entity or provide false or misleading information.</li>
      </ul>
<br/>
      <h2 style={{ fontSize: '20px' }}><b>5. Termination</b></h2>
      <p>
        We reserve the right to terminate or suspend your account and access to Corpify at our sole discretion, without notice, for any reason, including but not limited to a breach of these Terms and Conditions or any applicable laws or regulations.
      </p>

      <h2 style={{ fontSize: '20px' }}><b>6. Privacy</b></h2>
      <p>
        Your use of the Corpify is also governed by our Privacy Policy, which details how we collect, use, and protect your personal information. Please review the Privacy Policy to understand our data practices fully.
      </p>

      <h2 style={{ fontSize: '20px' }}><b>7. Changes to Terms and Conditions</b></h2>
      <p>
        We may update these Terms and Conditions from time to time to reflect changes in our services or to comply with legal requirements. Any changes will be effective upon posting the revised terms on the app. It is your responsibility to review these Terms and Conditions periodically for updates.
      </p>
    </div>
    <br/> <br/> <br/>
    </div>
  )
}

export default Terms
