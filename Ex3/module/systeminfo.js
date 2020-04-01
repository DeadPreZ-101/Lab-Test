const os = require("os");

exports.systemInfo = () => {
    var systemInf =
        "Operating System Info = CPU architecture: " +
        os.arch() +
        ", Host name: " +
        os.hostname() +
        ", Operating system type " +
        os.type();
    return systemInf;
};

exports.userInfo = () => {
    var userInf =
        "User Info = User name: " +
        os.userInfo()["username"] +
        ", Home directory: " +
        os.homedir;
    return userInf;
};
