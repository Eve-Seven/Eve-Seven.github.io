/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/08/25/2018-07-20-raspberry-Internet/index.html","ff8418adf57e322fbaf57a1332ca12ea"],["/2015/08/25/2018-07-20-raspberry-on/index.html","d4d08e5ca58438301cea56e6eda22ad1"],["/2015/08/25/2018-07-20-raspberry-usb/index.html","a4b7fe389341907cbc89fa40344b2bb2"],["/2016/07/13/2016-07-13-GitTutorial/index.html","20e29f17002200e1376852739fda6ee8"],["/2016/08/04/2016-08-04-PythonTestAutomationiOS/index.html","cdc9ef9b0d9fa20647f306c4f542217c"],["/2016/11/20/2016-11-20-markdownTool/index.html","61b363f98d6450e707d23e8a0e8a48c0"],["/2016/11/20/2016-11-20-neural_networks_using_TensorFlow/index.html","a70aca062bfee6daa5c927f75b05a744"],["/2018/07/05/2016-07-05-MachineLearning_introduce/index.html","6b4e2e6a234699c63a58ce8dbc45d9fc"],["/2018/07/21/2018-07-21-ml-linearRegressionL1L2/index.html","876cb07eece472f77c1f2a1e236a78f9"],["/2018/07/23/2018-07-23-ml-DecisionTree/index.html","2201e405afde7079a7f419b0dbacd7e1"],["/2018/07/23/2018-07-23-ml-logisticRegression/index.html","dde7e929f190f8364d4ef345709c5c08"],["/2018/07/24/2018-07-24-arithmetic-gradientDescent/index.html","9822f89ec98f21c938cab196e24747a7"],["/2018/07/25/2018-07-25-ml-svm/index.html","c1c34576ee727ace84d18684a9f5e3c9"],["/2018/07/26/2018-07-26-ml-svm-L1/index.html","13ad1c1b01f63603ad3ee7dd7c05ac48"],["/2018/07/26/2018-07-26-ml-svm-kernel/index.html","e8432dc23b02801cabff76b69eb0c206"],["/2018/07/30/2018-07-29-ml-clustering/index.html","18d14e2faa8c2fabdefa3462e9c4da52"],["/2018/07/31/2018-07-31-ml-em/index.html","fadf6d24ecff70eacebc46cd4c054fcc"],["/2018/08/01/2018-08-01-ml-NB/index.html","992f3bc1fef4793e7e6ab34b8607656a"],["/2018/08/02/2018-08-02-ml-NB-network/index.html","2bc7cd318db8eb317355ba6e30b761ea"],["/2018/08/08/2018-08-08-DL-introduction/index.html","adc34f9aefd1137e40d6acb5c42e3147"],["/2018/08/09/2018-08-09-TensorFlow-windows/index.html","5259eda39317875b87460a456c063643"],["/2018/08/10/2018-08-09-TensorFlow-ubuntu/index.html","8f55d63b6fcc971200f5af0d4cf5f35d"],["/2018/08/11/2018-08-11-TensorFlow-Virtualenv/index.html","24713fa1af825b85fecb46c4be5716ec"],["/2018/08/13/2018-08-13-TensorFlow-course/index.html","b2122b52d1f8c53dd7516326550c8a38"],["/2018/08/14/2018-08-14-DL-method/index.html","d647acea2ba43ef9781a3b67b089c83c"],["/2018/08/15/2018-08-15-DL-back-propagation-python/index.html","c05ffb4b133ee765daa6189dab624339"],["/2018/08/15/2018-08-15-DL-back-propagation/index.html","5786c0801f75409f7a2e634af38c3f77"],["/2018/08/16/2018-08-16-DL-DNN-python/index.html","4e3f7a1b3aed0f78629ecb776fd84e88"],["/2018/08/21/2018-08-21-DL-CNN/index.html","0d91e0e4c188908e58aa9201ebc7c44e"],["/2018/08/22/2018-08-22-CNN-back-propagation/index.html","1c503b904ac70d7ab7acf7388e2b913e"],["/2018/08/23/2018-08-23-DL-CNN-python/index.html","db668a3ec70b53767f02a7a60c1c96a4"],["/2018/08/24/2018-08-24-DL-CNN-LeNet/index.html","1885ab691c8cbe6dde35dfcb85da5ff9"],["/2018/08/25/2018-08-25-DL-CNN-AlexNet/index.html","1a81438c8db1b547a8fdd6ec787c2449"],["/2018/08/27/2018-08-27-DL-RNN/index.html","c33c56d58e50683ada057d6dfc9746fc"],["/2018/08/27/2018-08-27-TensorFlow-keras/index.html","df8990e937362e37526c0f1e45b42a2c"],["/2018/08/27/2018-08-27-TensorFlow-layer/index.html","938eb6236a851b10f67aff143529d762"],["/2018/08/27/2018-08-27-TensorFlow-native/index.html","4ea62b27b4c0d059c9fd4dc50baa473d"],["/2018/08/27/2018-08-27-TensorFlow-slim/index.html","a1b35b4fa3c20b31bbcf4cc7147914f6"],["/2018/08/29/2018-08-29-DL-RNN-BPTT/index.html","199db4d8ef908ff70afabe7da7212ba0"],["/2018/08/29/2018-08-29-DL-RNN-hand/index.html","aff1d07c0a4379aa538db2c5e7800016"],["/2018/08/30/2018-08-30-DL-RNN-LSTM/index.html","6ededae4ca261f899e78e37a25dd2fe7"],["/2018/08/31/2018-08-31-TensorFlow-RNN/index.html","9b34c4588b3f0e8928eb7038ef6cb578"],["/2018/09/01/2018-09-01-DL-GAN/index.html","4f454dec1f21a32422520f710144cee0"],["/2018/09/03/2018-09-03-TensorFlow-GAN/index.html","9b182350ce32b2f757785dd357f9b3ba"],["/2018/09/04/2018-09-04-DL-DCGAN/index.html","46ab7b5adc64fab9acfb473affad197b"],["/2018/09/04/2018-09-04-TensorFlow-DCGAN/index.html","1abf3968b2267c9f3e35c91ad60c4874"],["/2018/09/04/2018-09-04-TensorFlow-save-restore/index.html","1cb0e0ac6971d169d53da4f7ea57545f"],["/2018/09/07/2018-09-07-TensorFlow-cifar-network/index.html","ae236ba7c74039269da99028b7bc3590"],["/2018/09/07/2018-09-07-TensorFlow-cifar-train/index.html","d42716a8bfcff6fbaa634d64eff3cdde"],["/2018/09/07/2018-09-07-TensorFlow-cifar/index.html","eaaafe791504daff500de0c247f9a059"],["/2018/09/07/2018-09-07-TensorFlow-visualization/index.html","0537b8f0cf969aa3a0f5847ca5dd0e18"],["/2018/09/07/2018-09-07-keras-cifar/index.html","a899db958ff73e5ff7dc10d032509dcf"],["/2018/09/15/2018-09-15-Pytorch-AlexNet/index.html","ff38f21a3a827746290f58e3c98f1f74"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-test/index.html","f6d942e4e881746f4f5acc1dea438284"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-train/index.html","4034e7378b974b011099b009c80426fd"],["/2018/09/15/2018-09-15-Pytorch-DenseNet/index.html","c985b336ed3cced46a86644634d5c6ea"],["/2018/09/15/2018-09-15-Pytorch-GoogleNet/index.html","2979a564c44d43ace876767aefab3b1c"],["/2018/09/15/2018-09-15-Pytorch-LeNet/index.html","39594347043472986496f75f843a0966"],["/2018/09/15/2018-09-15-Pytorch-ResNet/index.html","89a27f3ab5ac75382ed2e496dcb8a70f"],["/2018/09/15/2018-09-15-Pytorch-ResNextNet/index.html","add73ebb2e6137d69752857e0cf75951"],["/2018/09/15/2018-09-15-Pytorch-VGGNet/index.html","adf07223da3e4250bd37bbaf03f84ad6"],["/2018/09/15/2018-09-15-Pytorch-cifar10-data/index.html","421c47f636146d9b8faf558efa489bc6"],["/2018/10/09/2018-10-09-pip/index.html","6a73f49148357a5a29faef9dfcd07608"],["/2018/10/09/2018-10-09-tensorflow-question/index.html","ab9554be10a2a99a8afa0118d4add898"],["/2018/10/15/2018-10-15-source/index.html","91a505ebea3aa0196a5b4870ebc27b51"],["/2018/10/26/2018-10-26-openCV-geometry/index.html","0f638b881e412ebf87b4f5cef4bf3c7d"],["/2018/10/26/2018-10-26-openCV-install/index.html","af2bb9bdbad0dbee86225ba5bccfedbf"],["/2018/10/26/2018-10-26-openCV-special/index.html","4897f75a971d5612a5e423823408ea34"],["/2018/10/27/2018-10-27-openCV-face/index.html","f6db3b0f6b69e557b4fbd50315c79d2b"],["/2018/10/27/2018-10-27-openCV-svm-hog/index.html","45566d5d778ad24d3cbef5bf76964e75"],["/2018/10/27/2018-10-27-openCV-svm/index.html","c804ae3af10fdebc493daafd996fdf25"],["/2018/10/27/2018-10-27-openCV-video/index.html","b79e1c3f4734a35049283e1365c51984"],["/2018/10/27/2018-10-27-openCV-whitening/index.html","03c1624aa3ad1d31b4bfc502dc16bd43"],["/2018/10/29/2018-10-29-docker-TensorFlow-cpu/index.html","21cd8e2cdb7f24d66e50507450b9c641"],["/2018/10/29/2018-10-29-docker-install-win10/index.html","ddc914b7129142593b79fada0c070bcf"],["/2018/10/29/2018-10-29-docker-install/index.html","a797d51361a246e0eb04cff4363dcded"],["/2018/10/29/2018-10-29-docker-source/index.html","e1755e1b05b1c08baa663a8344586adb"],["/2018/10/29/2018-10-29-docker-speed/index.html","bcbbc6217598c38a66a7fa1c40c704bb"],["/2018/10/29/2018-10-29-docker-vessel/index.html","a750e7ab401e1cf847e23a6678f3c9da"],["/2018/11/08/2018-11-8-linux-vim/index.html","e7f8552788b3a3dddd5c0a0ba145fb61"],["/2018/11/08/2018-11-8-linux/index.html","dc667af9cfcc4bfdf29ace01750099cd"],["/2018/11/09/2018-11-9-anaconda-ubuntu/index.html","1ad571265a00be17c9fe9fcb9dd859d0"],["/2018/11/09/2018-11-9-anaconda-windows/index.html","c60fbebda8f453672c3487e11ec46b2c"],["/2018/11/19/2018-11-19-git/index.html","1602e4a24e584ad32227204e07d68013"],["/2018/11/21/2018-11-21-python-date/index.html","85f31cb50d6cc6b6c923330d10f584b8"],["/2018/11/21/2018-11-21-python-encryption/index.html","d2ffee19e4f1cd3242d5c5b11893c60c"],["/2018/11/21/2018-11-21-python-log/index.html","14cd24f2e2f670d77ba554e1db1217fe"],["/2018/11/21/2018-11-21-python-pillow/index.html","963ff1cdc529ee99686363628f78ff5a"],["/2018/11/21/2018-11-21-reptile-beautifulsoup4/index.html","49670dbd77e7eeb6aa277dd0cbc04fde"],["/2018/11/21/2018-11-21-reptile-http/index.html","728ad0c8d27a0939334a52a1197b5088"],["/2018/11/21/2018-11-21-reptile-request/index.html","c7d19ed0ea10d036d3cd982f76892c8b"],["/2018/11/21/2018-11-21-reptile-tcp-ip/index.html","a62b7ed3fef99dde6178700ea778687e"],["/2018/11/21/2018-11-21-reptile-urllib/index.html","b459650470002c3b2e4b9929baf255f3"],["/2018/11/21/2018-11-21-reptile-xml/index.html","1b4fc9f74da8a9fa012b4c1428237d2b"],["/2018/11/22/2016-06-02-Develop_Tool/index.html","9791c08d190d0710cff6c7f902afa6f0"],["/2018/11/22/2018-07-20-ml-linearRegression/index.html","5634e6df6fe1f3d1496a3fc52754d675"],["/2018/11/22/2018-07-21-ml-linearRegression-python/index.html","9837205834228467c8be02b0c3b13e50"],["/2018/12/01/2018-12-01-python-numerical-sequence/index.html","94e3c713293dfe051f31d28f954f453f"],["/2018/12/08/2018-12-8-python-sequence/index.html","e2744639e1b8bb72934e88973a92edd1"],["/2018/12/09/2018-12-8-python-output/index.html","fc0180bdcb34ad361fa378e290778018"],["/2018/12/11/2018-12-11-python-dict-set/index.html","0b26548c5ba50403a292462a7d2a1fe5"],["/2018/12/12/2018-12-12-python-if-while/index.html","579b4119cb085644ea646e011c1057f5"],["/2018/12/12/2018-12-13-python-main/index.html","7e5f406def501d44d89004d8e71648bc"],["/2018/12/13/2018-09-16-html-readme/index.html","54ea442695873f3bc0c2df7ab9f0dfd9"],["/2018/12/13/2018-09-17-html-title/index.html","e91bd361443e42185547888cb9699e25"],["/2018/12/13/2018-09-18-html-br/index.html","c63bfcd95c7d74d50815b06d656f1c15"],["/2018/12/13/2018-09-19-html-div/index.html","7efe83227631034bbb4b51d15791a2fd"],["/2018/12/13/2018-09-20-html-img/index.html","c74155b722adc3fc350d1394c5e04647"],["/2018/12/13/2018-09-21-html-URL/index.html","dc3ddba72f9a8d125b4eec7ac250d6d8"],["/2018/12/13/2018-09-22-html-list/index.html","949500310e77a204165c2f5ecc599f18"],["/2018/12/13/2018-09-23-html-table/index.html","3ff69ff5f4c0e58702e2997ff764ff7d"],["/2018/12/13/2018-09-24-html-form/index.html","50d5b384712384dd6ea1db4ee08c62f9"],["/2018/12/13/2018-09-25-html-iframe/index.html","4a7babf861e640293340bfe7daa7188e"],["/2018/12/14/2018-12-14-python-function/index.html","fea8f2716a6fce832c73cd8ae5829cce"],["/2018/12/14/2018-12-15-python-class/index.html","0651ce4b6eb6744d2d67eaae775ab0a8"],["/2018/12/14/2018-12-16-python-magic/index.html","fb07c990f4eb2ad854021783e4c5b6e4"],["/2018/12/19/2018-12-17-python-@/index.html","b0aeaad16e7d2942611e0a61f318fce1"],["/2018/12/19/2018-12-18-python-file/index.html","4fce1999ae1d1404a00e8730dd4b2aef"],["/2018/12/19/2018-12-19-python-error/index.html","f8bc41951383eab6c28c69d688a3fa0d"],["/about/index.html","6e8edc9915b5191cb9883b249b63eac8"],["/archives/2015/08/index.html","90624160f913bea21e8a1386e108f3d1"],["/archives/2015/index.html","7ef1efd6ce9717b23d0c1c55bec421f7"],["/archives/2016/07/index.html","bd6419b6e0904d7edfc5a29dc3e07f6f"],["/archives/2016/08/index.html","167e85d60271f960ef6607c5b5a94f85"],["/archives/2016/11/index.html","6c128471a826033fed98a4773592fb75"],["/archives/2016/index.html","66bf5974ba70a4849094e4308235cb1c"],["/archives/2018/07/index.html","45c7ec5581d58211786740f8f4a2a55f"],["/archives/2018/08/index.html","8b3f2db92a11599114fe3a0f20a3c8f2"],["/archives/2018/08/page/2/index.html","6d1154655cd19354f567726793520034"],["/archives/2018/08/page/3/index.html","f93af790e40397376256d5eb984bba54"],["/archives/2018/09/index.html","cf161da08aadef5562a268ab3352dbdf"],["/archives/2018/09/page/2/index.html","c5370c5abc2d0a1cfe8ba0f2d43ed9f4"],["/archives/2018/10/index.html","ee213151249abae3d1df51afdb2d00c2"],["/archives/2018/10/page/2/index.html","4d27a36856c66abdfb6c27e3cc56ef2c"],["/archives/2018/11/index.html","ae8c6be266d734444fd754abed1cb4a1"],["/archives/2018/11/page/2/index.html","355e24ab06971037d9b8d1a5c7abe305"],["/archives/2018/12/index.html","c7661428f4bb34eee454968e4f3d9f29"],["/archives/2018/12/page/2/index.html","c133fb6efdf1cbe70a94a821c50946e1"],["/archives/2018/12/page/3/index.html","6a64def0658f946692440dac7802a8a1"],["/archives/2018/index.html","c0d1055a113f9a44ea9c195f780779ef"],["/archives/2018/page/10/index.html","f5daa5013c3b8fb28ef04ce6f516d0f5"],["/archives/2018/page/11/index.html","8ffc21a90c0b6c7fe869412837478238"],["/archives/2018/page/12/index.html","11cb377de5d0b4b83049f7df629a1c8d"],["/archives/2018/page/2/index.html","14e37beecfe49fa16ee16951d316ff41"],["/archives/2018/page/3/index.html","993d00d5cdc49069eb3eb14b19cb1dff"],["/archives/2018/page/4/index.html","1ca253655633771cc500a02fdb0b0355"],["/archives/2018/page/5/index.html","d13d49bc366622547eac1381de70ecff"],["/archives/2018/page/6/index.html","78432d4b6fee37c2d2ad0baa474d52c1"],["/archives/2018/page/7/index.html","65e440473b184ad614421b25cc3bbc30"],["/archives/2018/page/8/index.html","5c17eefce4c674317b0364b91dc21402"],["/archives/2018/page/9/index.html","4498e6b259ac6e6d4991df5c61441e16"],["/archives/index.html","5c41b0953be03f9e2fd9f91283bf4888"],["/archives/page/10/index.html","366f14430018d7893457f1e333045a2c"],["/archives/page/11/index.html","74a7631a39fecaee5821078a900919e8"],["/archives/page/12/index.html","fd224335868213393b6d9981ef8484ee"],["/archives/page/2/index.html","b92ba78fe3ad9519646d8ebda2068768"],["/archives/page/3/index.html","311c7ce54153fe83d3f7f8605c0cfdf4"],["/archives/page/4/index.html","33c439b60785fcdaa8efa6d961990ceb"],["/archives/page/5/index.html","514a5d6b6a46971afab3021682c08735"],["/archives/page/6/index.html","f4d5b90e26ac6c724d1ce6cf3ecb7596"],["/archives/page/7/index.html","918fa8b9661a823a04838297f08d1862"],["/archives/page/8/index.html","ab64cc7e4ee3cde1a208e9c031a7119b"],["/archives/page/9/index.html","d038aeecd155c5a5cb66d6830e6a0aa6"],["/categories/Docker/index.html","23e47c6b715fb64e51bcc28a8aa09fb6"],["/categories/HTML/index.html","a3d8e02e429f708a101762ba0a72916d"],["/categories/LINUX/index.html","901f3947cbde722a9031691cdf68861b"],["/categories/Python/index.html","679bcf54d422c1cd447a4342532d4904"],["/categories/Python/page/2/index.html","0a5bd4b6e8d3730bf8e8cbc20de6f4d7"],["/categories/Python/page/3/index.html","279cfb9c0307ef8bb34d3d30f41564c4"],["/categories/index.html","9ed3d43076fa3d9c2d22a02f4274aee0"],["/categories/pytorch/index.html","faa8e015e5666a760f9178960d4a3500"],["/categories/tensorflow/index.html","ab318e0b145cc341bbede6befeeb8600"],["/categories/工具/index.html","c344dba98e883fa09a33884afbdb3c51"],["/categories/开发工具/index.html","6af94817908b9e423750671bffbf2ed9"],["/categories/机器学习/index.html","6df6d2d022d6cfb82ea5a8713aee8953"],["/categories/机器学习/page/2/index.html","ae150d1ae1c752e1f4e982fe63ea1938"],["/categories/树莓派/index.html","0ca29ac56cdd21dcdbe3a695e612064d"],["/categories/深度学习/index.html","8923d83a9c93fd654d47d4a8494b5114"],["/categories/深度学习/page/2/index.html","0f67238629c2dc3f3d196e34a5ec5237"],["/categories/深度学习/page/3/index.html","1d0e22b8e41def6a829aafd5635cdfe5"],["/categories/深度学习/page/4/index.html","5f25b44a6ae73b29d344b5e723e8def1"],["/categories/算法/index.html","17e5cef286f3c3c257d5413d327148ce"],["/categories/计算机视觉/index.html","3fb098af8ad9fa325d39e92fb3cdde00"],["/css/main.css","d48a8fb09778027abcca40bc8227054e"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","a80879cd6eb38ea4678e995e91c48298"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8ee39bf6fed055723e7e4d5de051af42"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/cv/1.png","9f4f5f49612d747ea7e2af9511bf81d8"],["/images/cv/10.png","64042888a4a3f3a4eb0fa61132ec4d2f"],["/images/cv/11.png","a7d130d884954da81b5cb0bb6ec3bc36"],["/images/cv/12.png","78897d4a1ee5b035a6c1fca275d6ee5f"],["/images/cv/13.png","5bddd0353cbbe6bba6397722208f71f0"],["/images/cv/14.png","84703e200ba7bd4c81b00bdd284e995a"],["/images/cv/15.png","9e2fd155d3d155ad7929da9e6ff173f4"],["/images/cv/16.png","11fc9d7abf8eab9eabd3b1b634972df1"],["/images/cv/17.png","4a033e9738210c148a2861e2a595195d"],["/images/cv/18.png","28fef5c46c2f422225f0c6784a0c5134"],["/images/cv/19.png","6f9bf406e55081a45f2d4a7694105aa8"],["/images/cv/2.png","31c2a99f54755c697a66fd612088d5d5"],["/images/cv/20.png","3c583b642ab32b3f0e8c25d702db84e7"],["/images/cv/21.png","a566537a8176f5ad3aefb0a4e3d3a28c"],["/images/cv/22.png","1dbefbc4faf1d6d1667d75e5a6e0ad4c"],["/images/cv/23.png","a19339ed91763c182a8876008b6a65b6"],["/images/cv/24.png","d7b6fbd2e71114ace115874caa3234d8"],["/images/cv/25.png","5d8679bb4738e48ae60291c204fb082b"],["/images/cv/26.png","a621210387b76992c71e377e5b3e787d"],["/images/cv/27.png","cc070ae570b8301c7e48511fd03606a4"],["/images/cv/28.png","19234927e77a2e573d1fcd36c6ab377a"],["/images/cv/29.png","981dc034de4ca4b6e734d1a54783f9c9"],["/images/cv/3.png","e4b7d480e78d5d0c4c6a14fb31b0ed5c"],["/images/cv/30.png","89a24fa0d194fd189e619e5399bc2556"],["/images/cv/31.png","3ebb39656dbc7ff3fe0d53e61edfca4f"],["/images/cv/32.png","9eaf042f7520f23a2c7298f55c0daa84"],["/images/cv/33.png","74898282f2a1f9cb206bcfbf15676aab"],["/images/cv/34.png","0131081dd3bb72e8c15ccabbc5a181b4"],["/images/cv/35.png","8fa06daf89516d71037ad8ad5466430d"],["/images/cv/36.png","6f9bdb37ded9320389993be28956612b"],["/images/cv/37.png","e2d8710a8d1be82ba5c171404a6eeb3c"],["/images/cv/38.png","0fbcf55535e125c43eaaf142a7c16084"],["/images/cv/39.png","0f17b9745c0ee7185f3408ff3e75f6d7"],["/images/cv/4.png","b55154238e33764873083b8463030d3a"],["/images/cv/40.png","352064971be0635581af1446a20bede1"],["/images/cv/41.png","482b4b502b236b800a2e609b273fc479"],["/images/cv/42.png","54f1a474233dedf7ee3fc20c56d23be3"],["/images/cv/43.png","f315e6c996c7f06ace53f7fee13aba7f"],["/images/cv/44.png","d88e6c82ebcf85e6332a5ff18f1d6748"],["/images/cv/45.png","546d355afb836ccafb1dbf1ec6e58c2b"],["/images/cv/46.png","e78e4d34afd63907c64e342d2dd56500"],["/images/cv/47.png","0355f524fce034d2b1d9e49d15f5acf2"],["/images/cv/48.png","0890f1471e76361456983ba205a7323d"],["/images/cv/5.png","eecb4a7bba3f07b8e3025585e7752527"],["/images/cv/6.png","834ccb9069233764f549780478fcf409"],["/images/cv/7.png","61b35bb3b9b78a44a617be9dbbdbddd5"],["/images/cv/8.png","57728a4eef354a0aed3698ad06659e92"],["/images/cv/9.png","60933d0b322df2c82963159b02f716ca"],["/images/dl/1.png","b2d61d37b640c75770a86cf1e89173e0"],["/images/dl/10.png","24f2fa5c727818fc48bf3a6f8068ee58"],["/images/dl/100.png","000f1c2ee2bb7adee780317771fc1178"],["/images/dl/101.png","12d112acec2d7f48e095a61620034ec6"],["/images/dl/102.png","8109c56796810451a8d889b964548a7a"],["/images/dl/103.png","15385609e43d95f81dc4e63fff9199de"],["/images/dl/104.png","897e22d7731a6c8d16ce28a62a739a60"],["/images/dl/105.png","b8a11e56f84cbd023da5c531df5661ba"],["/images/dl/106.png","dd17c8a11f7f5b76a56c38e98019c89a"],["/images/dl/107.png","d9ecc9e1a424bd937bb80da878265e02"],["/images/dl/108.png","92dadc873698dd6b2ef82e704fcbd647"],["/images/dl/109.png","764ba408eb6e5f60b496f3ca28cc83f6"],["/images/dl/11.png","34a8bbc88a333fc1c814e516a170afbc"],["/images/dl/110.png","7fa7ddcaf13c866e940aa176cc9abc2c"],["/images/dl/111.png","9c8b8224afbaf9da7a133e4fb47db202"],["/images/dl/112.png","85a50866d113ec1a5b74f6a2429465ac"],["/images/dl/113.png","f6b40f980ccc3bfdb8612b3df7d26681"],["/images/dl/114.png","7ac6605df0aa00d89b33b46935480ec7"],["/images/dl/115.png","a7925e77be39580d582d23f1ae2c2d7c"],["/images/dl/116.png","291b5652dd7b1e5a0a22ec5888dd0ae6"],["/images/dl/117.png","36483a1cda4bba80601aca92598db2ee"],["/images/dl/118.png","cc10fd547e2094b82e90bc3392b714d1"],["/images/dl/119.png","712089d980526e5239253638703980aa"],["/images/dl/12.png","edbd20c0f9be696722864416805f8ab2"],["/images/dl/120.png","94d4ed5a2a8db1d03192b10098415b3f"],["/images/dl/121.gif","a2afa892b7b37c37871701f374e4b5ad"],["/images/dl/122.png","0ea990077c7f9144c9321f3ed9c56bf9"],["/images/dl/123.png","be8c221c9306341acac8f91bf097cdbd"],["/images/dl/124.png","5c61222626f4efca142fdc78d62a4fe4"],["/images/dl/125.png","b1b458a4e0ad89f06e34e436673489ef"],["/images/dl/126.png","e91bbeef4c4a56ade881fb668addfab2"],["/images/dl/127.jpg","3f4dd207f75f3869c6e744120624fc8f"],["/images/dl/13.png","dd2781bbd52cd08b85822b27e704b223"],["/images/dl/14.png","a4f4a768b9e09d0edb0fb2b61bd6d890"],["/images/dl/15.png","11ccd1c7126bdada66328b00acd38ba4"],["/images/dl/16.png","431eca388a571f6ae2c97f355d4269ae"],["/images/dl/17.png","c785b250216adeb5bb3f7dd344e7e2f3"],["/images/dl/18.png","d0dd40f0001931557dafce3aa70e3f5a"],["/images/dl/19.png","e4aaac069b33a7fea0149cf0b220b2f3"],["/images/dl/2.png","488e19f06f5be0baa222ebc4ebf1f42f"],["/images/dl/20.png","4156882cdf4536bd465bf20630af6356"],["/images/dl/21.png","b215a29f6ecdd03485d9e0a45c9f786e"],["/images/dl/22.png","a96b71719979b2f64d394ecf26191dc1"],["/images/dl/23.png","049c7f3f8c8fb2b62f1ee23fffb1f94a"],["/images/dl/24.png","e311ddc1bc77c0069fc4c653d268f8de"],["/images/dl/25.png","2eabfc24c384e106ae088fa0d080e219"],["/images/dl/26.png","cb13ad3a876f65abfd9bedd5eab6d50d"],["/images/dl/27.png","a652a08f3b6e0b9b82a5556c26e15ea1"],["/images/dl/28.png","3726c0ea2c92a818dd385a8a9237187a"],["/images/dl/29.png","d202d133bd5e7142daf150ea2c300ee1"],["/images/dl/3.png","32643ac5d88e9288e6a91c545228f870"],["/images/dl/30.png","4a6eb0c7c5f7cae3430dd73266286610"],["/images/dl/31.png","230dd5d7b594b13641024ca7c16af9e6"],["/images/dl/32.png","bad29ccda756fa14816c2b7a3d5d60e1"],["/images/dl/33.png","6b47a20743481a7c84cafdddf7aa2b15"],["/images/dl/34.png","544f56c796819c8a2bd76e2008d73b3d"],["/images/dl/35.png","69a494d534a93002d5052f96d54458ea"],["/images/dl/36.png","c7cff050ff6232ad5827e4e0bca493c2"],["/images/dl/37.png","00861b87acf6f356ab7e36cc2f3b8f75"],["/images/dl/38.png","308794ff0c29eda49e3c9f7e72f193d6"],["/images/dl/39.png","031796e81c3dadb6d2c6521ecf824728"],["/images/dl/4.png","b13463143252da800adf2134fdcca283"],["/images/dl/40.png","9193fdaea78a9ecfb2ce346bc2245e62"],["/images/dl/41.png","6efe6e2ed3fa4763693fa7808675a717"],["/images/dl/42.png","e41671954c7e6efa4a80ed2827723a39"],["/images/dl/43.png","d616cae510f75ff0ba75532f13afb680"],["/images/dl/44.png","a1df61f0242f00b7b3dec380f2b82a5e"],["/images/dl/45.png","9880d436563d3e748d4a97219a932de0"],["/images/dl/46.png","ee3823c14cbbc0c4e719d8fa2b70284e"],["/images/dl/47.png","a9654809288507227ddf5091381bd52a"],["/images/dl/48.png","a7f47763bca3b758e0377e4eb3697014"],["/images/dl/49.png","c8b694fc337ffd2822a82ea078a7fd94"],["/images/dl/5.png","ccc04cbc94995b21ae682ed9a9b4b0e4"],["/images/dl/50.png","0b74840b70c5362adbb1ae4d831daa40"],["/images/dl/51.png","add48b535c67dd7ba2d89c2b47d62e4d"],["/images/dl/52.png","ebd47a5ef3557d1857288ea842ed846f"],["/images/dl/53.png","6543b1ebd8f9e1eee6867ac98c377656"],["/images/dl/54.png","e42c09127df542958d6790eb239e2703"],["/images/dl/55.png","0f3bb7248a6e465c0f04c44fd7102458"],["/images/dl/56.png","15ec6905fa793e164de60e8dfd016e50"],["/images/dl/57.png","3a1615a4dae148791518372dfca9684f"],["/images/dl/58.png","5babc414eadaabf475ea5310705d42da"],["/images/dl/59.png","de74751a92a1fa9d22241269545fa578"],["/images/dl/6.png","0c7b467b8c118601b3e4b72e8ee00009"],["/images/dl/60.png","92221b8c62fce1c98467d355237d2986"],["/images/dl/61.png","b77632cd591a92dbfd4cb3a2f3eb707e"],["/images/dl/62.png","f5eca88a4d1b4ff99462d6004037c0b1"],["/images/dl/63.png","2d596bc4776088dc2d7f12035cf9625b"],["/images/dl/64.png","0be91314f6ce792e335eea451fb432ac"],["/images/dl/65.png","cfb0302ad749c7ee33c3a4c0fd048cb3"],["/images/dl/66.png","99a4396798a3703de705d5ef583cc53c"],["/images/dl/67.png","c814ee1f17b1b6e023a2959ecea105f4"],["/images/dl/68.png","32e5647c3a3262d28abd2c801a2499b4"],["/images/dl/69.gif","6428cf505ac1e9e1cf462e1ec8fe9a68"],["/images/dl/7.png","1f98a655f5df7b72a03645ee48043dc3"],["/images/dl/70.gif","cb80c7a8c655585f38038c4876381722"],["/images/dl/71.png","26d9cc4df1edfe2c7ce2b3bec07fcf93"],["/images/dl/72.png","de5ad70ced9e378b87cc5cc3e5068ade"],["/images/dl/73.png","8704e85c81f02d3148f5013f928e622b"],["/images/dl/74.png","40148a094025824911637637e6f0a71b"],["/images/dl/75.gif","2cdd2ec54569879ca045e0ed090f34a5"],["/images/dl/76.gif","395aa82f1e59cf80e8e17a9209bc22f2"],["/images/dl/77.gif","510c9a35e6f332d4d042e3154a59355c"],["/images/dl/78.gif","8a63c07ac20ee5e5097b8a9e9327012a"],["/images/dl/79.gif","9e9a49afd76a80bda8a6362e6a32dc1c"],["/images/dl/8.png","58c486bb84f43765a4b1c0170b17ed3c"],["/images/dl/80.gif","4a87f84b588768c5b5fddb2b000b92d5"],["/images/dl/81.png","c6557ae392175f3284cff96ede632ca3"],["/images/dl/82.png","8c6e03a4ce27b1546860f1a4994ded2f"],["/images/dl/83.png","3230fe6ea57bf3bb56197b60c744873b"],["/images/dl/84.png","b32db2843c3da7a1434e07286a767202"],["/images/dl/85.png","aaaeb673c62631407bc0417bf30a2209"],["/images/dl/86.png","cc201aa344c97773b92d4a24a3eb4756"],["/images/dl/87.png","153a890f1412bea4542d568d2f071fc7"],["/images/dl/88.png","effc36ef946164373a8bf243961d88a1"],["/images/dl/89.png","2686299a083de7d34f0f4215884ca4a7"],["/images/dl/9.png","07509d765897a7512d5beb635d3c4179"],["/images/dl/90.png","a56a0f6071eb3fcdb76968b4a32d5e5c"],["/images/dl/91.png","6ee325d3906f10f2793fbb01e489930a"],["/images/dl/92.png","0c8d438c12bce0260b16cf270db56f0b"],["/images/dl/93.png","6c92ffc515ccbe08a5abd79a3cb80b9c"],["/images/dl/94.png","808edd0a07d8cbabf336dd9dca8d4a26"],["/images/dl/95.png","45f3b7701551fa7df5f9be047c75500a"],["/images/dl/96.png","9a3c4effe6fba0aae2fb580155c4c55d"],["/images/dl/97.png","bd2706173398f50c2831c4e192b9f352"],["/images/dl/98.png","37d39a650706f2df9b766fe478e52587"],["/images/dl/99.png","058d5dbc14ded7c21715436648e21181"],["/images/docker/1.png","052bebd4e60c59be51857684e5e6fc0c"],["/images/docker/2.png","28f04eea1e73e7c0e0c466756c9c2c62"],["/images/docker/3.png","82a26c321e81043540818baaea77eb38"],["/images/docker/4.png","367c99cdceb0f81b378c075904c88644"],["/images/docker/5.png","e414ffe973288941a51e9cde7d92bb71"],["/images/docker/6.png","d559cb65466a900edb0d7983917ec37c"],["/images/docker/7.png","ac71dea1600d19598053c5607e7975a1"],["/images/docker/8.png","d9b777921984636623864ec2b250e298"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/math/1.png","be08ac320a3fafd4b6cb9a2a820a3b42"],["/images/math/2.png","82c7788477186d13876fa2783fb31305"],["/images/math/3.png","c4dbdce9ea65b388f307e4c2b6701c7a"],["/images/ml/1.png","0614e4691064abbff74cb69212e2a466"],["/images/ml/10.png","ee1e7358cde8b8137ce684b0c4365e04"],["/images/ml/11.png","c86479f988d4dc6b87074724f42e35f7"],["/images/ml/12.png","35ff221fa6ca14c635bfef76cc5a2991"],["/images/ml/13.png","f1bc25e32ad10b0d7b0c9ede788a5b88"],["/images/ml/14.png","2f592eda3505117752f6719aba65edac"],["/images/ml/15.png","0c8117df94fa4c145e2c2943e2247ec0"],["/images/ml/16.png","5705759f62883d83028290a0933e5c86"],["/images/ml/17.png","eed841d914da17d258adc9852c83b745"],["/images/ml/18.png","7863315ccc29fb1c24e27d2a5fcd477c"],["/images/ml/19.png","e3307673fa4d5889a52012dff9c03ceb"],["/images/ml/2.png","9d72b6ab1efe7d92a0f75e376681e549"],["/images/ml/20.png","73daa252e5311ade27160a65cc61c9a7"],["/images/ml/21.png","2749400036f8bba7beaa0ab3224f5389"],["/images/ml/22.png","aadd1c4aa269c129958a013d84e42492"],["/images/ml/23.png","80937bc77f36a5d6310ddbde34c091ed"],["/images/ml/24.png","810369b827c1d376ae5a0e6bbf0c2761"],["/images/ml/25.png","8ba5410eb67aa3cb734596ab0b7abbf3"],["/images/ml/26.png","e702d97bf87a16ac98d9b96357a50224"],["/images/ml/27.png","eb5810d90beb005e0921b5bdce4278cb"],["/images/ml/28.png","daf6146665cd93ff43b7c0537d26931b"],["/images/ml/29.png","faf61ee7aef34289909db13712731ef5"],["/images/ml/3.png","05763899f89a3aec00df11ea2a7a976c"],["/images/ml/30.png","521f8749d93cc41c604307333b8ecb20"],["/images/ml/31.png","61e322d57e7a6468cbca48304ae94cd4"],["/images/ml/32.png","6ec323b582e8562c93c1d6640f4d807e"],["/images/ml/33.png","0d1cdd5ecbf216003f28746db2b33b6d"],["/images/ml/34.png","64b7033aec57515e301161d85f8e4e30"],["/images/ml/35.png","edf088702e0177920a94b3508bec7ec7"],["/images/ml/36.png","fb5a9ddea3a45786bdf11c415e147896"],["/images/ml/37.png","60914873dae6567b8e68ec45ec6b59dd"],["/images/ml/38.png","2b8b5cff6aa6292c46ac594c30027790"],["/images/ml/39.png","1d3d3d21aac91a1e4a2b16c45345d3b7"],["/images/ml/4.png","d1d10f45e987ea4af1c4b7086c5f745b"],["/images/ml/40.png","772e151cc0187377b8640b6769125b96"],["/images/ml/41.png","481ba1d4954007c7eb74aa89f44cc220"],["/images/ml/42.png","3b812196cfcc9fd92a8eae2eba443cfb"],["/images/ml/43.png","cd5f999f7915a1797b3a4c1bd1a63484"],["/images/ml/44.png","37eb471cb2476713b4491a3d747e8f5c"],["/images/ml/45.png","df3980f9a53928768f0949eab0dda0f6"],["/images/ml/46.png","d9a4bc126242de84d18bf1a616961bc3"],["/images/ml/47.png","ecc436ba7ba75ec5c422ecdd700219d6"],["/images/ml/48.png","a154e7896b59f7c4feb7fd9869350494"],["/images/ml/49.png","e9cc736869a7161cfefc7e1961c2d9aa"],["/images/ml/5.png","884a734410b3627a14981c481b27c583"],["/images/ml/50.png","6900e08fcd02c9a9bcac17b1c7d68fad"],["/images/ml/51.png","1ecd25e8788aac72f2f6d2440ebdccde"],["/images/ml/52.png","e8a96085b9487570772875b5f40c5a64"],["/images/ml/53.png","6ed613d5f1a4465a670ee7557dd29575"],["/images/ml/54.png","4fba1f8adf3b0bac8f6cd911016e97d9"],["/images/ml/55.png","f772762d3dc7b6927ca73e276bacd35c"],["/images/ml/56.png","20827caf527ef20652b21adb8e143e96"],["/images/ml/57.png","3bfb68f2234dfdb64aa5286d49a04f79"],["/images/ml/58.png","291a3424c7bff0afa585bfa7f09d67de"],["/images/ml/6.png","bbd2772718a23a1102b2201f78413d6a"],["/images/ml/7.png","c753cbfb65ed9638e82e5d0140028f82"],["/images/ml/8.png","0432f07c0cec1708d787798042156c21"],["/images/ml/9.png","2870280e8d3cedaee23818114a3cc02e"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/py/1.png","15b7ebe86935d45e017776bdd2e2e2d7"],["/images/py/10.png","30a401b3d7e75a8e237f0b805f583e4b"],["/images/py/11.png","59051625b36f69ecb18a6174a04b4368"],["/images/py/12.png","0738f0be3b1b72d1f66f6ec218d76675"],["/images/py/13.png","aabc1941943d19cd9c26b4c97b991415"],["/images/py/14.png","f09e867b7e33ab28bb509208efdd4928"],["/images/py/15.png","af9b8898e56514fa1c060e35d316066c"],["/images/py/16.png","ba5ec4e869bae45070e08f64788ecfbe"],["/images/py/17.png","82fe7ec533b75c5b9ed5e677f57eeaa9"],["/images/py/18.png","f651173cc0a9b4a8dcbdd495f73f882c"],["/images/py/19.png","db20315678cbcad8dd4f0d4bd72cb991"],["/images/py/2.png","589c0581b9b1da7112120f6a1f320fc3"],["/images/py/20.png","7670ef568945df192b81f0dc0f3d3f7f"],["/images/py/21.png","dffafdf930d818b664746a166cbb97bd"],["/images/py/22.png","e42a0fc9bec94fcd5207dd39ee46dc5f"],["/images/py/23.png","729ce256675ed1b5be435ba49e07d5fe"],["/images/py/24.png","3178aad732fb3a59fd6b9f0522d0c84e"],["/images/py/25.png","23dee90b7ba96de076a6bfbc7e9f9fc8"],["/images/py/26.png","5f27264c4cc5f1066086d4a6dafe68df"],["/images/py/27.png","2a30cc59399a637db839057f86d8c331"],["/images/py/28.png","f8ddf9a9bdfb76086c414c8561a7c756"],["/images/py/29.png","e6a08a36098bc987d119f57a9b273829"],["/images/py/3.png","46d73ca2a738a321e189608497c35b78"],["/images/py/30.png","aaad070ba988fc223be70b8be8d1a694"],["/images/py/31.png","2190bbadd784c89153ca10aacaa212d7"],["/images/py/32.png","4ebc4497b4ffff11e8ed5bb12a592cee"],["/images/py/33.png","a912118468c632d485625969bbe13b28"],["/images/py/34.png","8647e22d53f209413add44e80c22aaf0"],["/images/py/35.png","f98376dfc1b6b6885ce35e0e29831c12"],["/images/py/36.png","63b48f45c30f1f4274506b01ccd2aaae"],["/images/py/37.png","66a568168cb34596f4d2b61f701f0c41"],["/images/py/38.png","4ec3117c6e4660417f25420015680ef0"],["/images/py/39.png","1d31399d3f0ef916447931f88ce3398d"],["/images/py/4.png","beabd345ad64e22ed6750c13f7d35e90"],["/images/py/40.png","7b19dffc350d03bcf0de1c9477e93105"],["/images/py/41.png","593c6b113bc67e90339d819616bd1277"],["/images/py/42.png","20c75a35c4a4b07faf07daf9475ce1ff"],["/images/py/43.png","6c673a7ef4a3fc5ea9169a3fbd61f80e"],["/images/py/44.png","2334590711560011876de8c746b18604"],["/images/py/45.png","1441f705d69261450da8c5233ab02d0f"],["/images/py/46.png","616c6ab2d9c8eb007952017c7452d6d7"],["/images/py/47.png","004175268fd9029f7d09d1503670370f"],["/images/py/48.png","489330b4f78c3796b20042589808f8bd"],["/images/py/49.png","58a224ddfb5f57a12f48f3b4e3cbd0d0"],["/images/py/5.png","771c59a4e854122793a682f106fa08e5"],["/images/py/50.png","bfa901b645deced8dd1f9a8c26778f25"],["/images/py/51.png","2ffadace686f78c1414244d872d398fc"],["/images/py/52.png","2e3ec0d057d100e4e8ea5f0212e5c998"],["/images/py/53.png","17bb9979be17d13b90357c57139da462"],["/images/py/54.png","c23d69845f72a73fa3e2f1fb84771c56"],["/images/py/55.png","8535760aff99ceb4b556f7b97796d94c"],["/images/py/56.png","59ec9ba92d7ccd2c716228a1a8455ccb"],["/images/py/57.png","15bc87041ac4b1c7b3525b314fb7ef66"],["/images/py/58.png","5f94f3e9e9c6e104566bbb1b600e1fac"],["/images/py/59.png","bea377ca62ca75ab5d71c430b0355931"],["/images/py/6.png","833af6f79eead78a0888a42a24a7c35b"],["/images/py/60.png","ea730c5befdab80ca63dbcce82b3e4b9"],["/images/py/61.png","a6562d29f44817c17e7be41238aaad7b"],["/images/py/62.png","7d457435369276895070e3dd61c9462a"],["/images/py/63.png","91015ba12e25b0f895687581ce6bcb25"],["/images/py/64.png","20a15a250b09f9e4604ab3550b9700c3"],["/images/py/65.png","fe52bf0b2570638b2d22d72a27152e1c"],["/images/py/66.png","d3025a5e94f7bc525362d1f2e7745078"],["/images/py/67.png","2f7ca0e327c55df4f003210905190792"],["/images/py/68.png","6f7279dbb187720b89c66250c986e965"],["/images/py/69.png","a44c673d20cbcf45db156036bd983034"],["/images/py/7.png","d947a703f79658536cb2750914637ffa"],["/images/py/70.png","8a87dfa24f54a8547ef6826d3b6289f4"],["/images/py/8.png","20b867d8137281e9c3a40b802df75680"],["/images/py/9.png","e4639c570e7f7a04e90439456ad297c5"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/reptile/1.png","6d0aa92af42a4647977a03707bade702"],["/images/reptile/10.png","79f309da23b6b5b8b9effd25cc20abd9"],["/images/reptile/11.png","e60854e61ed69c6cccb12196fd947705"],["/images/reptile/12.png","ae4ac9f4065966955a3f31fa4b2292f3"],["/images/reptile/13.png","676486c8247467e9580da2febad95414"],["/images/reptile/2.jpg","f722e57e21e3d76ebedb6667bfd44aed"],["/images/reptile/3.png","b4161135bc5a889337f36a3a0c20dc6f"],["/images/reptile/4.png","73b18e616e9134ffc1aaeb4ed1c29dfb"],["/images/reptile/5.png","318877d0e3a7337773fc301d6c5118eb"],["/images/reptile/6.png","f39ae0da0e1d343ec162f5db6ade59fc"],["/images/reptile/7.png","26491b8984ce6b22c76ebb6372f912f0"],["/images/reptile/8.png","15bdc5c257f7c109f184f9872c57b2d5"],["/images/reptile/9.png","92e8ffd5026d530e630b6ba90c23236f"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/tools/1.jpg","5bf773e6fdaf0c6573c4578ea232dc21"],["/images/wechatpay.jpg","07f0995337e2a1c8d2357e5659ec120b"],["/index.html","a7a7256609ffcd037778b848a919a8df"],["/js/src/affix.js","49df61a252eb420e218889741749eb09"],["/js/src/algolia-search.js","ebaee288aa7e4f2a6fa21ad76a37c444"],["/js/src/bootstrap.js","386ccca68f3d75af484f083a830de34f"],["/js/src/exturl.js","f31acb891434f8265c1de075887a3fe5"],["/js/src/hook-duoshuo.js","7b719edc4140617fff70e74b7ad078c0"],["/js/src/instantclick.min.js","7fb101c47f85bbdedc894934f91fcc36"],["/js/src/js.cookie.js","7dd7a8db7ae94ff11da352d79ace6a90"],["/js/src/motion.js","5aca73fc94593dba84c5f4e5b066499b"],["/js/src/post-details.js","87764a160d1a67c02a019f80d4586fcc"],["/js/src/schemes/pisces.js","ddb3db0ded2270d84a95f767b02703b0"],["/js/src/scroll-cookie.js","cfec99ca09d04774fb559f3c34273ce2"],["/js/src/scrollspy.js","99aed722e41f8ee23700faddb8ac5044"],["/js/src/utils.js","d29bb4da9dc1306af125eab8feeef953"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c246789ffd2eed8d9e3663390819252f"],["/lib/Han/dist/han.js","815b936066f32fe46e35174f710329d5"],["/lib/Han/dist/han.min.css","a855768b74af8f41f4152d429bd888d9"],["/lib/Han/dist/han.min.js","d51999616d990e3cae927668e921e45d"],["/lib/algolia-instant-search/instantsearch.min.css","632957497aa56267347362897aa156bc"],["/lib/algolia-instant-search/instantsearch.min.js","29311f2b05226b9e8af455d2b97d5889"],["/lib/canvas-nest/canvas-nest.min.js","cd0c378707396a5a99f6b56f921973f8"],["/lib/canvas-ribbon/canvas-ribbon.js","d5a5e9c734bd8f755576b3bc9b4c0fd4"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","60e762878019bbcc7626b4b4cdb680c7"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","411fc5654ffa557aeed78080858a8e27"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","e26f99d3add2606988bb8ff9a1c90cc5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","6ff2c835be7079ff488da4a9fa80914f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e1c1c3d34014ddf88afbc5aad976301e"],["/lib/fancybox/source/jquery.fancybox.css","3a0d47e8d92b75ac5479300bae50d4d1"],["/lib/fancybox/source/jquery.fancybox.js","3e6375f4fe76b0e482ab5fb7d62cf673"],["/lib/fancybox/source/jquery.fancybox.pack.js","4d9060b4a8d2589f241151ecedd8b70e"],["/lib/fastclick/README.html","776f62ad436be68fc86ce09e7d43da93"],["/lib/fastclick/lib/fastclick.js","ca85b8486dfca1c7aa729aa9c039ea90"],["/lib/fastclick/lib/fastclick.min.js","1cba0b93b598dae8824237b60ea83e71"],["/lib/font-awesome/css/font-awesome.css","d30d228d60ab53be4981d460c143c246"],["/lib/font-awesome/css/font-awesome.min.css","97de7cfc601680ae45da4176bcefb9bd"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","053ad0cda1c8f7bdd0bcfcc45b34ff35"],["/lib/jquery_lazyload/CONTRIBUTING.html","f6971cd4dba18039d95afd1c6e6c1558"],["/lib/jquery_lazyload/README.html","3eca049af85436c185bd6fc232447a2d"],["/lib/jquery_lazyload/jquery.lazyload.js","58d25d6b3a8962e9a6837bd72c2d5081"],["/lib/jquery_lazyload/jquery.scrollstop.js","0680c3ec496cc335848f3ccbd074b5db"],["/lib/needsharebutton/font-embedded.css","1e626a59990344a4161a73ae1320dd5c"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","c9929496d525eef5937fb5a2d2b91612"],["/lib/pace/pace-theme-barber-shop.min.css","db80aa785060bff715d61aeb4ef8c57d"],["/lib/pace/pace-theme-big-counter.min.css","d4130a970f08191d9c64f2b00ecec89a"],["/lib/pace/pace-theme-bounce.min.css","a0c7f95a18b294711903e2a7eb4175fb"],["/lib/pace/pace-theme-center-atom.min.css","26d4e023874ab83afe9ff83eecb39a45"],["/lib/pace/pace-theme-center-circle.min.css","c5797e704c1dbc459c181bf5adf3ebbe"],["/lib/pace/pace-theme-center-radar.min.css","dd659b91b075087465017268be8b39a5"],["/lib/pace/pace-theme-center-simple.min.css","6c5d78d616d1488eaf80c960ffe6a0cf"],["/lib/pace/pace-theme-corner-indicator.min.css","8ab7d475d44a8c5fe098739f480dd5f0"],["/lib/pace/pace-theme-fill-left.min.css","48f3296ff1449a68210e5040ba8046c6"],["/lib/pace/pace-theme-flash.min.css","59e76070153f24e48504fd9566a33c11"],["/lib/pace/pace-theme-loading-bar.min.css","2d3235630e5adf8d76a9f7bbbd909c08"],["/lib/pace/pace-theme-mac-osx.min.css","05c976fdddc42937dcacde08f6ff1b2c"],["/lib/pace/pace-theme-minimal.min.css","fdaed1aacfb4afc9db1b03a5f6403068"],["/lib/pace/pace.min.js","46771a2598c4538cd189c718d7c9e94c"],["/lib/three/canvas_lines.min.js","71fecc9ff010300c74175d054567fbd9"],["/lib/three/canvas_sphere.min.js","8a2fe03f6cb4c68476b1043d09629e0c"],["/lib/three/three-waves.min.js","5769a41e8fc85016b44da933441846b6"],["/lib/three/three.min.js","f678f71fe6c31bfc6cd768f710174f82"],["/lib/ua-parser-js/dist/ua-parser.min.js","a4215b300e33787d7d62635a66d8cf8d"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f5c57520c3d4b207d62eb6ff5246c443"],["/lib/velocity/velocity.js","29eb6c08fa74226440b17b1de91aeeef"],["/lib/velocity/velocity.min.js","66ba2ffc67bb53d0e763d3027075d79e"],["/lib/velocity/velocity.ui.js","72f03aafe04d7120aafaf413ee7b5f03"],["/lib/velocity/velocity.ui.min.js","6955471d29324bccdf00ff1df1c95ee8"],["/page/10/index.html","9605bc593ce185b1257a6d05b053481a"],["/page/11/index.html","e8ae3857671ae80caaceb7d318b49c80"],["/page/12/index.html","d7d44d2135f4c4d760fb1ef63fa38bfd"],["/page/2/index.html","1ea4751e4d959b6aef8b3df14037eb9e"],["/page/3/index.html","336d11f6a397cce39c251a7dc34ab358"],["/page/4/index.html","090047ca49757f115da3ea4231e5d894"],["/page/5/index.html","aed7a4e8dcffa9e63d71395d116cc1c2"],["/page/6/index.html","c4084ce12c8f39212fd32d314b3dc665"],["/page/7/index.html","35d3f12f3a417543514783c1ab3c5df8"],["/page/8/index.html","e5e9beb3b470746f681c95bfd44e4ab8"],["/page/9/index.html","7929a2fb6e9b9e4bbd7c933f26f05faf"],["/sw-register.js","708bc14296a1c29f3be86d5f5b014bff"],["/tags/CNN/index.html","9325c5711338aff769812773526b323a"],["/tags/DNN/index.html","be555ac7828d6d716e31368e85bccbf4"],["/tags/DeepLearning/index.html","30af6720a09984c40323db71ba027855"],["/tags/DeepLearning/page/2/index.html","936d7167626ac4af6898f4f5c4aa3b83"],["/tags/DeepLearning/page/3/index.html","708534a7aedf4e2cbddb599e3c68ab58"],["/tags/DeepLearning/page/4/index.html","7b8b3b90a7547338c5d817f7081e2446"],["/tags/DeepLearning/page/5/index.html","cbf22b1c7d0ebb96cb92295a38a06ce3"],["/tags/EM/index.html","c2529ebf5ebe0feb0ef9f83a10415d21"],["/tags/GAN/index.html","0b4914a60df85f66a852ceabd26b7695"],["/tags/GIT运用/index.html","fc701caaf1ffbc970ba8ba6be36efd4d"],["/tags/HTML基础/index.html","6e40198db754508e009dbb849a51872c"],["/tags/Keras/index.html","436ff89afc69295e4b5c437ce561cec9"],["/tags/MachineLearning/index.html","7e4233841e8ccb9cf1ba90df13972d06"],["/tags/Python/index.html","85d3830c5521a5a68985128a44068348"],["/tags/Python/page/2/index.html","4aff2f6cbe64db4ca12a0c6dcca6ea60"],["/tags/Python基础/index.html","b27caec406bdfeaec2b3caff74135cfa"],["/tags/Python基础/page/2/index.html","552962d8d804ff9891d8c3e9eae98a6a"],["/tags/RNN/index.html","bd303cde7966f82ff010fabe058ca4c2"],["/tags/TensorFlow/index.html","f79a9ef4dce4551b68b97381304041a9"],["/tags/TensorFlow/page/2/index.html","fbffc613ca13701606b3020777438424"],["/tags/TensorFlow/page/3/index.html","a628a242df546263e424c6a1b34afff4"],["/tags/anaconda/index.html","69af8b0008b195bdd761e4050799f05e"],["/tags/docker/index.html","18ddd378c62bef7756e6ec4913f7c9c6"],["/tags/git/index.html","9a8975548346f052c50ba383e0cdd7cc"],["/tags/index.html","f8e58b18975ff7ad7d82966ccd2c1428"],["/tags/ios/index.html","136946f0642e3b8a65595af1ec165b56"],["/tags/linux/index.html","6d6af17ba8e37ae090566191c11123e3"],["/tags/markdown/index.html","a092617c421338c2d54508e6eb779d43"],["/tags/network/index.html","0160869c0d8027d6056440ded0851672"],["/tags/opencv/index.html","eb60616a75aa986dcbbd7861239e963f"],["/tags/pip/index.html","2b50def481b7774149c0b91bb82f0890"],["/tags/pycharm/index.html","8ee7e270903ee2d04fd3ce5d315a2f6f"],["/tags/svm/index.html","30d6b8f9924f6191d47dad7ec173d4ab"],["/tags/ubuntu/index.html","330fc688154b836c20be18136463fbec"],["/tags/优化算法/index.html","852bfd9942888b912fd70f4b66fe8d42"],["/tags/决策树/index.html","94c16232251d3215a5c8ae00942b3834"],["/tags/反向传播/index.html","882695f5ade389f20b39dd06a9688d87"],["/tags/声卡/index.html","3d4260511e2f4bedb99368cb01a0e0df"],["/tags/安装/index.html","391994d99ffa9269fa93e0713b125c28"],["/tags/开发工具/index.html","278222d2db3d822f72bc956685594d8a"],["/tags/开机/index.html","c0d359ace126f439f2a1c0c21df24153"],["/tags/朴素贝叶斯/index.html","5058e0a0f58be745d873354693b83832"],["/tags/核函数/index.html","4bb7ccc1f8bbd088c5d888fe3b82ce08"],["/tags/梯度下降/index.html","56f6db1e709f54d0fff7fc68d73a6225"],["/tags/神经网络/index.html","d95785b120984a045b5414f77ce883b0"],["/tags/线性回归/index.html","28d260b4d7935f04c6c8c14ff8961c45"],["/tags/聚类/index.html","ca0d70984f324c37e02b517182397007"],["/tags/自动化/index.html","9ad620a0b138de577a66461949e693dd"],["/tags/贝叶斯网络/index.html","e651247784be42b8fb80a993dd0749ff"],["/tags/软间隔和正则化/index.html","57aa5053e7d7441056326a4e7c1acb46"],["/tags/逻辑回归/index.html","f1b3625ecad91f862a52a652408b4fdf"],["/tags/随机森林/index.html","3c5011db28f4f6ed7f60592f30219e7e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
