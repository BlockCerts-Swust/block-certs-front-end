import zhLocale from "element-ui/lib/locale/lang/zh-CN";
const zh = {
  common: {
    login: "登录",
    register: "注册",
    reset: "重置",
    student: "学生",
    school: "学校",
    confirm: "确定",
    cancel: "取消",
    logout: "退出",
    logOutDialogMessage: "您确定要退出吗？",
    logOutSuccess: "退出成功",
    view: "查看",
    title: "标题",
    email: "邮箱",
    chain: "区块链",
    time: "时间",
    operation: "操作",
    txid: "交易哈希",
    home: "首页",
    certificates: "我的证书"
  },
  home: {
    index: {
      page: "证书查看",
      placeholder: "请输入学生邮箱...",
      dialogTitleUserType: "请选择注册用户类型",
      dialogTitleVerify: "验证结果",
      emailFormat: "请输入正确的邮箱格式",
      getVerifyListFail: "获取证书列表失败, 请稍后重试",
      step: "步骤 {num}",
      step1: "检查证书未被篡改",
      step2: "检查证书未过期",
      step3: "检查证书未被发行人撤销",
      step4: "检查证书真伪",
      step5: "验证是否通过",
      verifyFail: "失败",
      verifyPass: "通过",
      verify: "验证",
      requestVerifyFail: {
        step: "步骤 1",
        name: "验证是否通过"
      }
    }
  },
  login: {
    usernamePlaceHolder: "请填写您的用户名",
    passwordPlaceHolder: "请填写您的密码",
    username: "用户名",
    password: "密码",
    role: "角色: ",
    usernameMessage: "请输入用户名",
    usernameFormat: "长度不能小于2",
    passwordMessage: "请输入密码",
    passwordFormat: "长度不能小于6",
    loginSuccess: "恭喜您, 登录成功",
    loginFail: "账号或密码错误, 请输入正确的账号和密码"
  },
  studentRegister:{
    welcomeMsg: "欢迎学生注册",
    instruction: "请填写下面的信息.",
    fnameLabel: "名字",
    fnamePlaceholder: "请在这里输入您的名字.",
    fnameFormat1: "请输入您的名",
    fnameFormat2: "长度至少为2",
    lnameLabel: "姓氏",
    lnamePlaceholder: "请在这里输入您的姓氏.",
    lnameFormat1: "请输入您的姓氏",
    lnameFormat2: "长度至少为2",
    emailLabel: "邮箱",
    emailPlaceholder: "请在这里输入您的电子邮箱.",
    emailFormat1: "请输入电子邮件地址",
    emailFormat2: "请输入正确的电子邮件地址",
    stdIDLabel: "学号",
    stdIDPlaceholder: "请输入您的学号.",
    stdIDFormat1: "请输入您的学号",
    stdIDFormat2: "长度至少为2",
    passwordLabel: "密码",
    passwordPlaceholder: "请输入您的密码.",
    passwordFormat1: "请输入您的密码",
    passwordFormat2: "长度至少为6",
    bAddressLabel: "区块链地址",
    bAddressPlaceholder: "请在这里输入您的区块链地址.",
    bAddressFormat1: "请输入您的区块链地址",
    bAddressFormat2: "长度至少为20",
    blockchainAddressTypeLinkBitcoin: "您可以创建比特币地址",
    blockchainAddressTypeLinkEthereum: "以太坊地址",
    link: "这里",
    registrationSuccess: "恭喜你, 注册成功 请登录",
    registrationFail: "注册失败，请稍后再试，或联系管理员！！！"
  },
  schoolRegister:{
    welcomeMsg: "欢迎来到学校注册",
    instruction: "请填写下面的信息.",
    snameLabel: "学校名称",
    snamePlaceholder: "请在这里输入您的学校名称.",
    snameFormat1: "请在输入您的学校名称.",
    snameFormat2: "长度至少为2",
    schoolemailLabel: "邮箱",
    schoolemailPlaceholder: "请在这里输入电子邮件地址.",
    schoolemailFormat1: "请输入电子邮件地址.",
    schoolemailFormat2: "请输入有效的电子邮件地址.",
    passwordLabel: "密码",
    passwordPlaceholder: "请在这里输入密码",
    passwordFormat1: "请输入密码",
    passwordFormat2: "长度至少为6",
    school_URLLabel: "官网地址",
    school_URLPlaceholder: "请在这里输入学校的官网地址",
    school_URLFormat1: "请输入学校的官网地址",
    school_URLFormat2: "长度至少为5",
    bAddressLabel: "区块链地址",
    bAddressPlaceholder: "请输入在这里您的区块链地址.",
    bAddressFormat1: "请输入您的区块链地址.",
    bAddressFormat2: "长度至少为20",
    blockchainTypeBitcoin: "您可以创建比特币地址",
    blockchainTypeEthereum: "以太坊地址",
    here: "这里",
    SignatureLines: "签名信息",
    jobTitleLabel: "职称",
    jobTitlePlaceholder: "请在这里输入职称",
    jobTitleFormat1: "请输入职称",
    jobTitleFormat2: "长度至少为2",
    signatureNameLabel: "签署名字",
    signatureNamePlaceholder: "请在这里输入签署名字",
    signatureNameFormat1: "请在输入签署名字",
    signatureNameFormat2: "长度至少为2",
    signatureImageLabel: "签署图片",
    school_logoLabel: "学校徽章",
    registrationSuccess: "恭喜你, 注册成功 请登录",
    registrationFail: "注册失败，请稍后再试，或联系管理员！！！"
  },
  ...zhLocale
};

export default zh;
