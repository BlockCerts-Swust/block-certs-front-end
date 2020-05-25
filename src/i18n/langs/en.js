import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
    common: {
        login: "Login",
        register: "Register",
        submit: "Submit",
        reset: "Reset",
        student: "Student",
        school: "School",
        confirm: "Confirm",
        cancel: "Cancel",
        logout: "Log out",
        logOutDialogMessage: "Are you sure you want to quit?",
        logOutSuccess: "Signed out successfully",
        view: "View",
        title: "Title",
        email: "Email",
        chain: "Chain",
        time: "Time",
        operation: "Operation",
        txid: "Transaction ID",
        home: "Home",
        certificates: "Certificates",
        issueList: "Issue certificate",
        all: "All",
        chkPending: "Check Pending",
        Created: "Created",
        Issued: "Issued",
        revoked: "Revoked",
        Refused: "Refused",
        certWSID: "Cert. ID",
        certTitle: "Title",
        certIssuer: "Issuer",
        certStatus: "Status",
        critNarrative: "Criteria Narrative", 
        stdName: "Student's Name",
        stdEmail: "E-mail",
        certDetail: "Details",
        Refuse: "Refuse",
        Revoke: "Revoke"
      },
    certstatus: {
      Created: "Created",
      Issued: "Issued",
      Issuing: "Issuing",
      FailedIssue: "Failed Issue",
      Revoked: "Revoked",
      Refused: "Refused"
    },
    home: {
        index: {
          page: "Blockcerts Universal View",
          placeholder: "Please input student email...",
          dialogTitleUserType: "Select registered user type",
          dialogTitleVerify: "Verify result",
          emailFormat: 'Please fill in the correct email format',
          getVerifyListFail: "Get certs list fail. Please try it later",
          step: "Step {num}",
          step1: "Checking certificate has not been tampered with",
          step2: "Checking certificate has not expired",
          step3: "Checking not revoked by issuer",
          step4: "Checking authenticity",
          step5: "Validation",
          verifyFail: "Failed",
          verifyPass: "Passed",
          verify: "Verify",
          requestVerifyFail: {
            step: "step 1",
            name: "Validation"
          }
        },
        about:{
          about: "About",
          h3: "Welcome to Blockcerts Signit",
          p1: "The existing academic certificate creation, issuance and subsequent verification processes by prospective employers of students are centralized and bedeviled with a lot of challenges. Schools have become Trusted Third Parties (TTPs) hence must be trusted by employers. Moreover, current certificates can easily be tampered with.",
          p2_1: "It is to solve these and other challenges that Blockerts Signit comes in by leveraging the power of",
          p2_2: ". Currently, for backward compactibility, we allow students to upload their existing certificates and subsequently permit their respective schools to authenticate and upon satisfaction issue it on the blockchain making it ",
          p2_3: " and at the same time ",
          b1: "Blockchain technology",
          b2: "immutable",
          b3: "globally verifiable.",
          p3_1: "It must however be noted that schools reserve the right to ",
          p3_2: " an issued certificate at any point in time.",
          i: "revoke",
          p4: "We hope to continue adding more features to this platform.",
        }
      },
    login: {
      usernamePlaceHolder: "Please, input your username.",
      passwordPlaceHolder: "Please, input your password.",
      username: "Username: ",
      password: "Password: ",
      role: "Role: ",
      usernameMessage: "Please input username.",
      usernameFormat: "Length should be at least two",
      passwordMessage: "Please input your password.",
      passwordFormat: "Length should be at least six.",
      loginSuccess: "Congratulations. Login successful",
      loginFail: "Account or password is wrong, please enter the correct account and password"
    },
    studentRegister:{
      welcomeMsg: "Welcome to Student Registration",
      instruction: "Please, fill the form below.",
      fnameLabel: "First name",
      fnamePlaceholder: "Please, enter your first name here.",
      fnameFormat1: "Please input your first name",
      fnameFormat2: "Length should be at least two",
      lnameLabel: "Last name",
      lnamePlaceholder: "Please, enter your last name here.",
      lnameFormat1: "Please input your last name",
      lnameFormat2: "Length should be at least two",
      emailLabel: "Email address",
      emailPlaceholder: "Please, enter your email here.",
      emailFormat1: "Please input email address",
      emailFormat2: "Please input correct email address",
      stdIDLabel: "Student ID",
      stdIDPlaceholder: "Please, enter your student ID.",
      stdIDFormat1: "Please input your student ID",
      stdIDFormat2: "Length should be at least two",
      passwordLabel: "Password",
      passwordPlaceholder: "Please, enter your password.",
      passwordFormat1: "Please input your password",
      passwordFormat2: "Length should be at least six",
      bAddressLabel: "Blockchain address",
      bAddressPlaceholder: "Please, enter your blockchain address.",
      bAddressFormat1: "Please input your blockchain address",
      bAddressFormat2: "Length should be at least twenty",
      blockchainAddressTypeLinkBitcoin: "You can create Bitcoin address",
      blockchainAddressTypeLinkEthereum: "Ethereum address",
      link: "here",
      registrationSuccess: "Congratulations. Registration successful, Please Login",
      registrationFail: "Registration failed, please try again later, or contact the administrator!!!"
    },
    schoolRegister:{
      welcomeMsg: "Welcome to School Registration",
      instruction: "Please, fill the form below.",
      snameLabel: "School Name",
      snamePlaceholder: "Please, enter your school name here.",
      snameFormat1: "Please input your school name",
      snameFormat2: "Length should be at least two",
      schoolemailLabel: "Email Address",
      schoolemailPlaceholder: "Please input email address here.",
      schoolemailFormat1: "Please input email address.",
      schoolemailFormat2: "Please input a valid email address",
      passwordLabel: "Password",
      passwordPlaceholder: "Please, enter valid password.",
      passwordFormat1: "Please input your password.",
      passwordFormat2: "Length should be at least six.",
      school_URLLabel: "Official Website",
      school_URLPlaceholder: "Please, enter your school website .",
      school_URLFormat1: "Please Enter your school Website",
      school_URLFormat2: "Length should be at least five(5)",
      bAddressLabel: "Blockchain Address",
      bAddressPlaceholder: "Please, enter your blockchain address.",
      bAddressFormat1: "Please input your blockchain address.",
      bAddressFormat2: "Length should be at least twenty",
      blockchainTypeBitcoin: "You can create Bitcoin address",
      blockchainTypeEthereum: "Ethereum address",
      here: "here",
      SignatureLines: "Signature Lines",
      jobTitleLabel: "Job Title",
      jobTitlePlaceholder: "Please, enter job title",
      jobTitleFormat1: "Please,input job title",
      jobTitleFormat2: "Length should be at least two",
      signatureNameLabel: "Signature Name",
      signatureNamePlaceholder: "Please, enter signature name",
      signatureNameFormat1: "Please input signature name",
      signatureNameFormat2: "Length should be at least two",
      signatureImageLabel: "Signature Image",
      selectFile: "select file",
      selectFileFormat: "jpg/png/jpeg files with a size less than 5MB",
      selectFileFormatWarning: "The uploaded file can only be in jpeg, png, jpg format!",
      selectFileSizeWarning: "The upload file size cannot exceed 5MB!",
      school_logoLabel: "School Logo",
      registrationSuccess: "Congratulations. Registration successful, Please Login",
      registrationFail: "Registration failed, please try again later, or contact the administrator!!!"
    },
    studentCertificates: {
      title: "Certificates' List",
      listOption: "Listing options",
      stdSearchItemPlaceholder: "Please input certificate name",
      stdSearchItemFormat: "Search criteria cannot be empty.",
      certificateDetailInfo: "Now viewing a certificate detail.",
      UploadCert: "Upload Cert."
    },
    CertDetail:{
      title: "Student Certificate's Information",
      h3: "Blockchain-based certificate",
      awardedto: "Awarded to",
      Issuedon: "Issued on",
      StatusofCertificate: "Status of Certificate",
      Signedby: "Signed by",
      CertificateID: "Certificate's ID",
      SchoolPublicKey: "School's Public Key",
      stdCertImageInfo: "Certificate file uploaded by student",
      certDetailFail: "Obtain certificate details failed",
      back: "Back"
    },
    CertUpload: {
      welcomeMsg: "Welcome to Certificate upload",
      schoolwelcomeMsg: "School Certificate Creation",
      instruction: "Please, fill the form below.",
      certTitleLabel: "Certificate Title",
      certTitlePlaceholder: "Please, enter your certificate title .",
      certTitleFormat1: "Please enter certificate title here.",
      certTitleFormat2: "Length should be at least two",
      certDescriptionLabel: "Certificate Description",
      certDescriptionPlaceholder: "Please, enter your certificate description.",
      certDescriptionFormat1: "Please enter certficate description",
      certDescriptionFormat2: "Length should be at least two",
      criteria_NarrativeLabel: "Criteria Narrative",
      criteria_NarrativePlaceholder: "Please, enter criteria narrative here.",
      criteria_NarrativeFormat1: "Please enter criteria narrative here.",
      criteria_NarrativeFormat2: "Length should be at least two",
      issuerLabel: "Issuer Name",
      issuerPlaceholder: "Please, select your school.",
      issuerFormat1: "Please enter name of school.",
      issuerFormat2: "Length should be at least six.",
      certFileLabel: "Certificate File",
      selectFile: "select file",
      selectFileFormat: "jpg/png/jpeg/pdf files with a size less than 10MB",
      selectFileFormatWarning: "The uploaded file can only be in jpeg, png, jpg, pdf format!",
      selectFileSizeWarning: "The upload file size cannot exceed 10MB!",
      createCertSuccess: "Congratulations. Certificate uploaded and creation successful.",
      createCertFail: "Upload and certificate creation failed, please try again later, or contact the administrator!!!"
    },
    schoolCertificates: {
      title: "School certificate's list",
      listOption: "Listing options",
      stdSearchItemPlaceholder: "Please input certificate name or issuer",
      stdSearchItemFormat: "Search criteria cannot be empty.",
      createNewCert: "Create new Cert",
      // issuerDialog: "Issuer information",
      // blockTypeLabel: "Blockchain type",
      // blockTypePlaceholder: "Please select the blockchain type.",
      // blockTypeFormat1: 'Please select Blockchain type',
      // blockType: {
      //   bitcoin_testnet: "Bitcoin Testnet",
      //   ethereum_ropsten: "Ethereum Testnet",
      //   bitcoin_mainnet: "Bitcoin Mainnet",
      //   ethereum_mainnet: "Ethereum Mainnet"
      // },
      // issuing_addressLabel: "Blockchain address",
      // issuing_addressPlaceholder: "Please, enter your blockchain address.",
      // issuing_addressFormat1: "Please input blockchain address.",
      // issuing_addressFormat2: "Length must be at least 20.",
      // secret_keyLabel: "Private Key",
      // secret_keyPlaceholder: "Please, enter your private key.",
      // secret_keyFormat1: "Please input school's private key.",
      // secret_keyFormat2: "Length should be at least 20.",
      itemToSearch: "Search criteria cannot be empty.",
      ShowingDetail: "Showing details of a certificate.",
      revocationReasonMsg: "Please input revocation reason",
      revocationReason: "Revocation reason",
      inputErrorMessage: "Please, only letters are required.",
      revocationSuccess: "Certificate revocation successful.",
      revocationError: "Certificate revocation failed. Please try again later, or contact the administrator!!!",
      revocationErrorTitle: "Revocation error",
      CanBeRevoked: 'Sorry! Only issued certificates can be revoked.',
      CertificateRefusalSuccess: "Certificate refusal successful.",
      CertificateRefusalError: "Certificate refusal failed, please try again later, or contact the administrator!!!",
      CertificateRefusalErrorTitle: "error",
      CertificateCannotBeRefused: "Sorry! Only created certificates can be refused.",
      RefuseReasonTitle: "Refusal reason",
      RefuseReasonLable: "Reason for refusal",
    },
    ...enLocale
}

export default en;