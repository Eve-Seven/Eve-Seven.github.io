/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/08/25/2018-07-20-raspberry-Internet/index.html","43e20828d0c0b78011b0b58dba4aa075"],["/2015/08/25/2018-07-20-raspberry-on/index.html","06634f133708bf95bd978925143bf789"],["/2015/08/25/2018-07-20-raspberry-usb/index.html","af521f8f623d1c648099d39461c1232e"],["/2016/07/13/2016-07-13-GitTutorial/index.html","2a144510bafb489022ec14f912fc64f1"],["/2016/08/04/2016-08-04-PythonTestAutomationiOS/index.html","936878f40f6e0e5b1a10bb2fbe8994fa"],["/2016/11/20/2016-11-20-markdownTool/index.html","ef1f80cab2563e4424be08e7cd178279"],["/2016/11/20/2016-11-20-neural_networks_using_TensorFlow/index.html","b3273136bfe01d07a78b53da11031150"],["/2018/07/05/2016-07-05-MachineLearning_introduce/index.html","c999772a7b28f35dbe948432d4490d70"],["/2018/07/21/2018-07-21-ml-linearRegressionL1L2/index.html","c9970e02e9c179e6676979f6931648bb"],["/2018/07/23/2018-07-23-ml-DecisionTree/index.html","a10c6e2131cb4345bfd6ec1083522e0a"],["/2018/07/23/2018-07-23-ml-logisticRegression/index.html","a4cb94fde39354e9893bb4097f332d96"],["/2018/07/24/2018-07-24-arithmetic-gradientDescent/index.html","7810933e2dc7af33cf87cd11e46f2e83"],["/2018/07/25/2018-07-25-ml-svm/index.html","516a8aa80c1ce4b961607090de6e8ace"],["/2018/07/26/2018-07-26-ml-svm-L1/index.html","61701340c1e720c522777e381a34babc"],["/2018/07/26/2018-07-26-ml-svm-kernel/index.html","780ab88affe61b9d39e3ba1e078a0d06"],["/2018/07/30/2018-07-29-ml-clustering/index.html","83d9424c8aa03fa54c142c0333c3161b"],["/2018/07/31/2018-07-31-ml-em/index.html","9028b9aa7a57cde4371494dbd03fd20a"],["/2018/08/01/2018-08-01-ml-NB/index.html","be3e15f7549e641baf369c7e0495519b"],["/2018/08/02/2018-08-02-ml-NB-network/index.html","6e3c27d4a6caad51c0a44c3d2c550546"],["/2018/08/08/2018-08-08-DL-introduction/index.html","57247b10e2ef0f179f6038338c811891"],["/2018/08/09/2018-08-09-TensorFlow-windows/index.html","e664b7b724d9a3b2b33c45ef33d7ab8b"],["/2018/08/10/2018-08-09-TensorFlow-ubuntu/index.html","7728a97e6a0a339b0b99c4d864bd6986"],["/2018/08/11/2018-08-11-TensorFlow-Virtualenv/index.html","5f447cbf3e178339d4f40a7fd6e8f53e"],["/2018/08/13/2018-08-13-TensorFlow-course/index.html","75a79e3de7849e568e1ef0ad869c9c7d"],["/2018/08/14/2018-08-14-DL-method/index.html","50feadbfb7dbe367411e7cd054c706cf"],["/2018/08/15/2018-08-15-DL-back-propagation-python/index.html","861e334138e21842f9f2bd4b5644186c"],["/2018/08/15/2018-08-15-DL-back-propagation/index.html","1845346719eed5ef64ab02f2280f81df"],["/2018/08/16/2018-08-16-DL-DNN-python/index.html","07fc6555b8d1c410539b14e7b6d036b8"],["/2018/08/21/2018-08-21-DL-CNN/index.html","61f3662e294a430a9f09af2d7d250ae6"],["/2018/08/22/2018-08-22-CNN-back-propagation/index.html","88eb27dbda890c58fc9a9f41c1f75099"],["/2018/08/23/2018-08-23-DL-CNN-python/index.html","29a480d05c6b5bd67cc81a63ff461cc1"],["/2018/08/24/2018-08-24-DL-CNN-LeNet/index.html","8e3e2a2bcc89389ede37700d413cd3d9"],["/2018/08/25/2018-08-25-DL-CNN-AlexNet/index.html","7d27b6b2c09cb26153a19a857ac96559"],["/2018/08/27/2018-08-27-DL-RNN/index.html","1c0560c11e8977f3f70a6ea8deff9d52"],["/2018/08/27/2018-08-27-TensorFlow-keras/index.html","1d42cb9d2828b2d3f78d9ca3bc472117"],["/2018/08/27/2018-08-27-TensorFlow-layer/index.html","1d9885f23ff39e35eca4f2a68895b2df"],["/2018/08/27/2018-08-27-TensorFlow-native/index.html","154b520104a6c5864c4c0d3b23f882d8"],["/2018/08/27/2018-08-27-TensorFlow-slim/index.html","cdc10cf27e26168df0e360323eaee36a"],["/2018/08/29/2018-08-29-DL-RNN-BPTT/index.html","298c1432b5b997bb8460852c15fe7978"],["/2018/08/29/2018-08-29-DL-RNN-hand/index.html","60377f9f41bbf073de8f478da52a4ee2"],["/2018/08/30/2018-08-30-DL-RNN-LSTM/index.html","4231ecb68caac7e6dae164ba4e38444a"],["/2018/08/31/2018-08-31-TensorFlow-RNN/index.html","c95567cb4ef5f9d31ae399bdf5fdd450"],["/2018/09/01/2018-09-01-DL-GAN/index.html","59e933d492234289b7eb22d5d81fe080"],["/2018/09/03/2018-09-03-TensorFlow-GAN/index.html","fbbaff0ece468cd64c4e5d70b5039a9d"],["/2018/09/04/2018-09-04-DL-DCGAN/index.html","8a1f8c828a601f0d921c55058b9ecb78"],["/2018/09/04/2018-09-04-TensorFlow-DCGAN/index.html","25498fe0a4c2b8d3e8f65a12462c6a87"],["/2018/09/04/2018-09-04-TensorFlow-save-restore/index.html","9e43f3546cd47a3386a6f070a23f1406"],["/2018/09/07/2018-09-07-TensorFlow-cifar-network/index.html","b7bd80f1d90b473309807e9a4619c8bd"],["/2018/09/07/2018-09-07-TensorFlow-cifar-train/index.html","984383ed3820c951dd3d62fe5b0736ce"],["/2018/09/07/2018-09-07-TensorFlow-cifar/index.html","b0beb25ffba8fe5f8961e877fcdbe766"],["/2018/09/07/2018-09-07-TensorFlow-visualization/index.html","21b5b496c0b1df0c39b4dafd91be8552"],["/2018/09/07/2018-09-07-keras-cifar/index.html","56fe8811f1ae0f002807b06c911544ad"],["/2018/09/15/2018-09-15-Pytorch-AlexNet/index.html","7c921c6ea28f3433faa62e60a8e64566"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-test/index.html","e96594b715ecad0f6cd6cd65c5cfce3e"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-train/index.html","6955c8b2c8c210eee7978fb780849994"],["/2018/09/15/2018-09-15-Pytorch-DenseNet/index.html","0c8e2e71938f80fd5e616869b41c8f14"],["/2018/09/15/2018-09-15-Pytorch-GoogleNet/index.html","4d2dbbcd8967256941360fc14e461a2e"],["/2018/09/15/2018-09-15-Pytorch-LeNet/index.html","4bff4c904b90e4296ccef9328520cb07"],["/2018/09/15/2018-09-15-Pytorch-ResNet/index.html","e57b49961f5fa1cf3141242f936d3291"],["/2018/09/15/2018-09-15-Pytorch-ResNextNet/index.html","53070c4ba6f11e451751051327b742e1"],["/2018/09/15/2018-09-15-Pytorch-VGGNet/index.html","898f3ee4987f5f4149b612a416851e5c"],["/2018/09/15/2018-09-15-Pytorch-cifar10-data/index.html","bea1cd575dd6eb923ccad727ed125c54"],["/2018/10/09/2018-10-09-pip/index.html","aeacc99e0e299ffce2a010b9434da2e7"],["/2018/10/09/2018-10-09-tensorflow-question/index.html","3eb2399225464d30be61aee1c273b2a0"],["/2018/10/15/2018-10-15-source/index.html","898d2a94047be9df379d756b6e477453"],["/2018/10/26/2018-10-26-openCV-geometry/index.html","a078a6b68415578585657cc758407b7b"],["/2018/10/26/2018-10-26-openCV-install/index.html","f66e65c7dacfa87075ef8c5b45610cb5"],["/2018/10/26/2018-10-26-openCV-special/index.html","ef1c7d44d5ef777f36ef0bfa1859218a"],["/2018/10/27/2018-10-27-openCV-face/index.html","093478ea740bdb06d648ffc21a54c757"],["/2018/10/27/2018-10-27-openCV-svm-hog/index.html","95f5d2d744a40e74c79948f0f4671f90"],["/2018/10/27/2018-10-27-openCV-svm/index.html","3ecbf9a2b57c055b0e20f00fc08779bf"],["/2018/10/27/2018-10-27-openCV-video/index.html","624cefcec203d50d99cc6aa4992ea1c8"],["/2018/10/27/2018-10-27-openCV-whitening/index.html","a281aff6d93b6c056bc65bc24d53476c"],["/2018/10/29/2018-10-29-docker-TensorFlow-cpu/index.html","0754b42d4286aea920361af3cc3d90bd"],["/2018/10/29/2018-10-29-docker-install-win10/index.html","f1de3e2a21197149d92a523c7214b953"],["/2018/10/29/2018-10-29-docker-install/index.html","e2ce6d7a10b8f4eee3b1c44f6c01cc0a"],["/2018/10/29/2018-10-29-docker-source/index.html","83a2f59d63b28ed41430005f7e9655b2"],["/2018/10/29/2018-10-29-docker-speed/index.html","f27a8f5f78a6bb562bc499a438ab21ab"],["/2018/10/29/2018-10-29-docker-vessel/index.html","2cbf18a784d4fbd816c3e78d76fc0f53"],["/2018/11/08/2018-11-8-linux-vim/index.html","636c9048cd49c9df19b9912e407a2e05"],["/2018/11/08/2018-11-8-linux/index.html","20d8069cf01155130abfd08d18b6d0ad"],["/2018/11/09/2018-11-9-anaconda-ubuntu/index.html","bdce7087a217f3153b2f2d1b4f009e5e"],["/2018/11/09/2018-11-9-anaconda-windows/index.html","7b7432f98afc9a9480c7905665d7c40e"],["/2018/11/19/2018-11-19-git/index.html","ee7c9cef1bf04375297cd0f314adb4bd"],["/2018/11/21/2018-11-21-python-date/index.html","c7717e76c94fd9d5874a93f19b9dcb76"],["/2018/11/21/2018-11-21-python-encryption/index.html","2eed6f1b49d7cf0f7568497d04863f9c"],["/2018/11/21/2018-11-21-python-log/index.html","45a2cd9d9d53b065394afef0a60cdcd6"],["/2018/11/21/2018-11-21-python-pillow/index.html","c915b1f253ab8ebf9df390ea4f4fddbe"],["/2018/11/21/2018-11-21-reptile-beautifulsoup4/index.html","a3753fcb85f5206a6785122839f4372e"],["/2018/11/21/2018-11-21-reptile-http/index.html","45f60ff6ecf9c8b75eac725b30c7cccc"],["/2018/11/21/2018-11-21-reptile-request/index.html","228683486eba1d97da85aa19e5fc05e5"],["/2018/11/21/2018-11-21-reptile-tcp-ip/index.html","d3a0e3321b06bc2ff80220fc431111bc"],["/2018/11/21/2018-11-21-reptile-urllib/index.html","afa716fd1427d84bd067d31859052292"],["/2018/11/21/2018-11-21-reptile-xml/index.html","bc499f9d4e6d125d38edd93b5567e02f"],["/2018/11/22/2016-06-02-Develop_Tool/index.html","79e7d3179d15f6b849e2a961cc033e30"],["/2018/11/22/2018-07-20-ml-linearRegression/index.html","3df27bc6fce85d935a47c22d46cd3dd1"],["/2018/11/22/2018-07-21-ml-linearRegression-python/index.html","d34656a6b898bb071e0c8a6daddecef6"],["/2018/12/01/2018-12-01-python-numerical-sequence/index.html","03312bff7c51b4a4264b764d59439d96"],["/2018/12/08/2018-12-8-python-sequence/index.html","d26566894b4429813d1550f58318b263"],["/2018/12/09/2018-12-8-python-output/index.html","bacb6098f27cc1442282766ab086a438"],["/2018/12/11/2018-12-11-python-dict-set/index.html","25497cb5cb16a7de80ca4766dd88763e"],["/2018/12/12/2018-12-12-python-if-while/index.html","b2eb0faaeca6da35edf1505e0495a9c0"],["/2018/12/12/2018-12-13-python-main/index.html","06cd2286d68c90dcf228fc37f75fa1b3"],["/about/index.html","392f622768e77905c3204c3ecce6032b"],["/archives/2015/08/index.html","5e07c00097fd075eb20ace7a1dce455c"],["/archives/2015/index.html","7ba48c947ea6e1f7789d73f23c9e1586"],["/archives/2016/07/index.html","32767d2f71dd0726cbb93853db730a88"],["/archives/2016/08/index.html","6cb3917569c215e6154235cb8e9d0f54"],["/archives/2016/11/index.html","edfad97fd4bf884ce70036982d5839c8"],["/archives/2016/index.html","92c268fd389079dad6f20a08e56c441f"],["/archives/2018/07/index.html","7c8621f61a7af223e774e9349d7be8b8"],["/archives/2018/08/index.html","5164dbb05b7730db194a084c5ddb93a2"],["/archives/2018/08/page/2/index.html","d1ca7af2e1001b79216ab0e2fd804d67"],["/archives/2018/08/page/3/index.html","9c0455612183469f04f74b1fde5b55e2"],["/archives/2018/09/index.html","de420d0c51eace2bedfd3c3881940f84"],["/archives/2018/09/page/2/index.html","7c9593c1b3dc6d80a840be997d0ec8f8"],["/archives/2018/10/index.html","789f20372f906d48fee3e0ac0b26de8e"],["/archives/2018/10/page/2/index.html","9904723468d25549cca5cd8bf7b49433"],["/archives/2018/11/index.html","fbb7942771b46e2059e9660cf6da2840"],["/archives/2018/11/page/2/index.html","daa127bee5dffe30876b965805a21dfb"],["/archives/2018/12/index.html","bb674d2fda9e9b602bab33ef05408b33"],["/archives/2018/index.html","de8d553db66c516473daa175323df34f"],["/archives/2018/page/10/index.html","f7d6883ec8402f7f4c7f29685e7330d7"],["/archives/2018/page/2/index.html","3b766b2319dbcef34463475ef9fbc0d1"],["/archives/2018/page/3/index.html","c101a5120cc5929c742561c8b5717da2"],["/archives/2018/page/4/index.html","5eac385eab954c08d1396a1fb75c5341"],["/archives/2018/page/5/index.html","11c159e3bc1cb7022e7d9a36875ae405"],["/archives/2018/page/6/index.html","1e6280cc4901821bb9e7744036579d14"],["/archives/2018/page/7/index.html","f09bedbb873db7384599858e456fc595"],["/archives/2018/page/8/index.html","b581b002f2f58e75432188f3edbc8364"],["/archives/2018/page/9/index.html","5637b6a564dd99e5684023f4167b7d9d"],["/archives/index.html","89e59f237e2130bb3d16404381e95dce"],["/archives/page/10/index.html","bc9fc920a6b3b85cfed0843339d17f66"],["/archives/page/11/index.html","eeee367dcb5610eb87fb08d7e275b97f"],["/archives/page/2/index.html","0dd73140fbcad21035c2c3c695d43551"],["/archives/page/3/index.html","24feebf0691ef178b85abb093da1ac5c"],["/archives/page/4/index.html","226a8692f535e61f848e22a9f666c7e1"],["/archives/page/5/index.html","16fa376086f0dc544e11af0156f449de"],["/archives/page/6/index.html","4008d91c6681036f38a6e064e7d2f7aa"],["/archives/page/7/index.html","7ed80dd236640c4bc7107cb948c9263f"],["/archives/page/8/index.html","33746f22ab22a39f3e96c8cb70a6dd33"],["/archives/page/9/index.html","6d2c845a7bb3a39437b5f82664bab9b9"],["/categories/Docker/index.html","6c5fa097f9c76f2d1ccd15c450dc5b76"],["/categories/LINUX/index.html","de83229d974bc7b21865e67e61006135"],["/categories/Python/index.html","df1320441fc245f62811bd6edb0fed7e"],["/categories/Python/page/2/index.html","cee3bbe7cd1b76c4dd51a17f01b05287"],["/categories/index.html","043262f2328bb81f2ea0ea251cfff141"],["/categories/pytorch/index.html","3a78fc3b6364f5a67632aea7a9eec042"],["/categories/tensorflow/index.html","dbfb285706cf36f43ffc7f18c9f8fc93"],["/categories/工具/index.html","c963932993054f9ed9933091aa7c9dfb"],["/categories/开发工具/index.html","f9475d198a5476ad93a98dd0a571a69e"],["/categories/机器学习/index.html","ca66bd992c9a2dbd7489517878bad385"],["/categories/机器学习/page/2/index.html","39ee7c3f92b5bc932712c08675a5316d"],["/categories/树莓派/index.html","866ba395e78ae00c77da6f77bfad9767"],["/categories/深度学习/index.html","05c8ee75f0f4ffe6895ff6017e378cc7"],["/categories/深度学习/page/2/index.html","72c078fdad63ee4a436e6617c5f447d6"],["/categories/深度学习/page/3/index.html","ea56d57fdd695bbdc155f5029a6d8c1d"],["/categories/深度学习/page/4/index.html","8819071118c48c86db408d8bdd355924"],["/categories/算法/index.html","5433caa033c7403417377a045166173b"],["/categories/计算机视觉/index.html","68010bb1502065b95da346ae66a280fb"],["/css/main.css","be8916ea0b46f6fd2cde4e1df4d7ffe3"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","a80879cd6eb38ea4678e995e91c48298"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8ee39bf6fed055723e7e4d5de051af42"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/cv/1.png","9f4f5f49612d747ea7e2af9511bf81d8"],["/images/cv/10.png","64042888a4a3f3a4eb0fa61132ec4d2f"],["/images/cv/11.png","a7d130d884954da81b5cb0bb6ec3bc36"],["/images/cv/12.png","78897d4a1ee5b035a6c1fca275d6ee5f"],["/images/cv/13.png","5bddd0353cbbe6bba6397722208f71f0"],["/images/cv/14.png","84703e200ba7bd4c81b00bdd284e995a"],["/images/cv/15.png","9e2fd155d3d155ad7929da9e6ff173f4"],["/images/cv/16.png","11fc9d7abf8eab9eabd3b1b634972df1"],["/images/cv/17.png","4a033e9738210c148a2861e2a595195d"],["/images/cv/18.png","28fef5c46c2f422225f0c6784a0c5134"],["/images/cv/19.png","6f9bf406e55081a45f2d4a7694105aa8"],["/images/cv/2.png","31c2a99f54755c697a66fd612088d5d5"],["/images/cv/20.png","3c583b642ab32b3f0e8c25d702db84e7"],["/images/cv/21.png","a566537a8176f5ad3aefb0a4e3d3a28c"],["/images/cv/22.png","1dbefbc4faf1d6d1667d75e5a6e0ad4c"],["/images/cv/23.png","a19339ed91763c182a8876008b6a65b6"],["/images/cv/24.png","d7b6fbd2e71114ace115874caa3234d8"],["/images/cv/25.png","5d8679bb4738e48ae60291c204fb082b"],["/images/cv/26.png","a621210387b76992c71e377e5b3e787d"],["/images/cv/27.png","cc070ae570b8301c7e48511fd03606a4"],["/images/cv/28.png","19234927e77a2e573d1fcd36c6ab377a"],["/images/cv/29.png","981dc034de4ca4b6e734d1a54783f9c9"],["/images/cv/3.png","e4b7d480e78d5d0c4c6a14fb31b0ed5c"],["/images/cv/30.png","89a24fa0d194fd189e619e5399bc2556"],["/images/cv/31.png","3ebb39656dbc7ff3fe0d53e61edfca4f"],["/images/cv/32.png","9eaf042f7520f23a2c7298f55c0daa84"],["/images/cv/33.png","74898282f2a1f9cb206bcfbf15676aab"],["/images/cv/34.png","0131081dd3bb72e8c15ccabbc5a181b4"],["/images/cv/35.png","8fa06daf89516d71037ad8ad5466430d"],["/images/cv/36.png","6f9bdb37ded9320389993be28956612b"],["/images/cv/37.png","e2d8710a8d1be82ba5c171404a6eeb3c"],["/images/cv/38.png","0fbcf55535e125c43eaaf142a7c16084"],["/images/cv/39.png","0f17b9745c0ee7185f3408ff3e75f6d7"],["/images/cv/4.png","b55154238e33764873083b8463030d3a"],["/images/cv/40.png","352064971be0635581af1446a20bede1"],["/images/cv/41.png","482b4b502b236b800a2e609b273fc479"],["/images/cv/42.png","54f1a474233dedf7ee3fc20c56d23be3"],["/images/cv/43.png","f315e6c996c7f06ace53f7fee13aba7f"],["/images/cv/44.png","d88e6c82ebcf85e6332a5ff18f1d6748"],["/images/cv/45.png","546d355afb836ccafb1dbf1ec6e58c2b"],["/images/cv/46.png","e78e4d34afd63907c64e342d2dd56500"],["/images/cv/47.png","0355f524fce034d2b1d9e49d15f5acf2"],["/images/cv/48.png","0890f1471e76361456983ba205a7323d"],["/images/cv/5.png","eecb4a7bba3f07b8e3025585e7752527"],["/images/cv/6.png","834ccb9069233764f549780478fcf409"],["/images/cv/7.png","61b35bb3b9b78a44a617be9dbbdbddd5"],["/images/cv/8.png","57728a4eef354a0aed3698ad06659e92"],["/images/cv/9.png","60933d0b322df2c82963159b02f716ca"],["/images/dl/1.png","b2d61d37b640c75770a86cf1e89173e0"],["/images/dl/10.png","24f2fa5c727818fc48bf3a6f8068ee58"],["/images/dl/100.png","000f1c2ee2bb7adee780317771fc1178"],["/images/dl/101.png","12d112acec2d7f48e095a61620034ec6"],["/images/dl/102.png","8109c56796810451a8d889b964548a7a"],["/images/dl/103.png","15385609e43d95f81dc4e63fff9199de"],["/images/dl/104.png","897e22d7731a6c8d16ce28a62a739a60"],["/images/dl/105.png","b8a11e56f84cbd023da5c531df5661ba"],["/images/dl/106.png","dd17c8a11f7f5b76a56c38e98019c89a"],["/images/dl/107.png","d9ecc9e1a424bd937bb80da878265e02"],["/images/dl/108.png","92dadc873698dd6b2ef82e704fcbd647"],["/images/dl/109.png","764ba408eb6e5f60b496f3ca28cc83f6"],["/images/dl/11.png","34a8bbc88a333fc1c814e516a170afbc"],["/images/dl/110.png","7fa7ddcaf13c866e940aa176cc9abc2c"],["/images/dl/111.png","9c8b8224afbaf9da7a133e4fb47db202"],["/images/dl/112.png","85a50866d113ec1a5b74f6a2429465ac"],["/images/dl/113.png","f6b40f980ccc3bfdb8612b3df7d26681"],["/images/dl/114.png","7ac6605df0aa00d89b33b46935480ec7"],["/images/dl/115.png","a7925e77be39580d582d23f1ae2c2d7c"],["/images/dl/116.png","291b5652dd7b1e5a0a22ec5888dd0ae6"],["/images/dl/117.png","36483a1cda4bba80601aca92598db2ee"],["/images/dl/118.png","cc10fd547e2094b82e90bc3392b714d1"],["/images/dl/119.png","712089d980526e5239253638703980aa"],["/images/dl/12.png","edbd20c0f9be696722864416805f8ab2"],["/images/dl/120.png","94d4ed5a2a8db1d03192b10098415b3f"],["/images/dl/121.gif","a2afa892b7b37c37871701f374e4b5ad"],["/images/dl/122.png","0ea990077c7f9144c9321f3ed9c56bf9"],["/images/dl/123.png","be8c221c9306341acac8f91bf097cdbd"],["/images/dl/124.png","5c61222626f4efca142fdc78d62a4fe4"],["/images/dl/125.png","b1b458a4e0ad89f06e34e436673489ef"],["/images/dl/126.png","e91bbeef4c4a56ade881fb668addfab2"],["/images/dl/127.jpg","3f4dd207f75f3869c6e744120624fc8f"],["/images/dl/13.png","dd2781bbd52cd08b85822b27e704b223"],["/images/dl/14.png","a4f4a768b9e09d0edb0fb2b61bd6d890"],["/images/dl/15.png","11ccd1c7126bdada66328b00acd38ba4"],["/images/dl/16.png","431eca388a571f6ae2c97f355d4269ae"],["/images/dl/17.png","c785b250216adeb5bb3f7dd344e7e2f3"],["/images/dl/18.png","d0dd40f0001931557dafce3aa70e3f5a"],["/images/dl/19.png","e4aaac069b33a7fea0149cf0b220b2f3"],["/images/dl/2.png","488e19f06f5be0baa222ebc4ebf1f42f"],["/images/dl/20.png","4156882cdf4536bd465bf20630af6356"],["/images/dl/21.png","b215a29f6ecdd03485d9e0a45c9f786e"],["/images/dl/22.png","a96b71719979b2f64d394ecf26191dc1"],["/images/dl/23.png","049c7f3f8c8fb2b62f1ee23fffb1f94a"],["/images/dl/24.png","e311ddc1bc77c0069fc4c653d268f8de"],["/images/dl/25.png","2eabfc24c384e106ae088fa0d080e219"],["/images/dl/26.png","cb13ad3a876f65abfd9bedd5eab6d50d"],["/images/dl/27.png","a652a08f3b6e0b9b82a5556c26e15ea1"],["/images/dl/28.png","3726c0ea2c92a818dd385a8a9237187a"],["/images/dl/29.png","d202d133bd5e7142daf150ea2c300ee1"],["/images/dl/3.png","32643ac5d88e9288e6a91c545228f870"],["/images/dl/30.png","4a6eb0c7c5f7cae3430dd73266286610"],["/images/dl/31.png","230dd5d7b594b13641024ca7c16af9e6"],["/images/dl/32.png","bad29ccda756fa14816c2b7a3d5d60e1"],["/images/dl/33.png","6b47a20743481a7c84cafdddf7aa2b15"],["/images/dl/34.png","544f56c796819c8a2bd76e2008d73b3d"],["/images/dl/35.png","69a494d534a93002d5052f96d54458ea"],["/images/dl/36.png","c7cff050ff6232ad5827e4e0bca493c2"],["/images/dl/37.png","00861b87acf6f356ab7e36cc2f3b8f75"],["/images/dl/38.png","308794ff0c29eda49e3c9f7e72f193d6"],["/images/dl/39.png","031796e81c3dadb6d2c6521ecf824728"],["/images/dl/4.png","b13463143252da800adf2134fdcca283"],["/images/dl/40.png","9193fdaea78a9ecfb2ce346bc2245e62"],["/images/dl/41.png","6efe6e2ed3fa4763693fa7808675a717"],["/images/dl/42.png","e41671954c7e6efa4a80ed2827723a39"],["/images/dl/43.png","d616cae510f75ff0ba75532f13afb680"],["/images/dl/44.png","a1df61f0242f00b7b3dec380f2b82a5e"],["/images/dl/45.png","9880d436563d3e748d4a97219a932de0"],["/images/dl/46.png","ee3823c14cbbc0c4e719d8fa2b70284e"],["/images/dl/47.png","a9654809288507227ddf5091381bd52a"],["/images/dl/48.png","a7f47763bca3b758e0377e4eb3697014"],["/images/dl/49.png","c8b694fc337ffd2822a82ea078a7fd94"],["/images/dl/5.png","ccc04cbc94995b21ae682ed9a9b4b0e4"],["/images/dl/50.png","0b74840b70c5362adbb1ae4d831daa40"],["/images/dl/51.png","add48b535c67dd7ba2d89c2b47d62e4d"],["/images/dl/52.png","ebd47a5ef3557d1857288ea842ed846f"],["/images/dl/53.png","6543b1ebd8f9e1eee6867ac98c377656"],["/images/dl/54.png","e42c09127df542958d6790eb239e2703"],["/images/dl/55.png","0f3bb7248a6e465c0f04c44fd7102458"],["/images/dl/56.png","15ec6905fa793e164de60e8dfd016e50"],["/images/dl/57.png","3a1615a4dae148791518372dfca9684f"],["/images/dl/58.png","5babc414eadaabf475ea5310705d42da"],["/images/dl/59.png","de74751a92a1fa9d22241269545fa578"],["/images/dl/6.png","0c7b467b8c118601b3e4b72e8ee00009"],["/images/dl/60.png","92221b8c62fce1c98467d355237d2986"],["/images/dl/61.png","b77632cd591a92dbfd4cb3a2f3eb707e"],["/images/dl/62.png","f5eca88a4d1b4ff99462d6004037c0b1"],["/images/dl/63.png","2d596bc4776088dc2d7f12035cf9625b"],["/images/dl/64.png","0be91314f6ce792e335eea451fb432ac"],["/images/dl/65.png","cfb0302ad749c7ee33c3a4c0fd048cb3"],["/images/dl/66.png","99a4396798a3703de705d5ef583cc53c"],["/images/dl/67.png","c814ee1f17b1b6e023a2959ecea105f4"],["/images/dl/68.png","32e5647c3a3262d28abd2c801a2499b4"],["/images/dl/69.gif","6428cf505ac1e9e1cf462e1ec8fe9a68"],["/images/dl/7.png","1f98a655f5df7b72a03645ee48043dc3"],["/images/dl/70.gif","cb80c7a8c655585f38038c4876381722"],["/images/dl/71.png","26d9cc4df1edfe2c7ce2b3bec07fcf93"],["/images/dl/72.png","de5ad70ced9e378b87cc5cc3e5068ade"],["/images/dl/73.png","8704e85c81f02d3148f5013f928e622b"],["/images/dl/74.png","40148a094025824911637637e6f0a71b"],["/images/dl/75.gif","2cdd2ec54569879ca045e0ed090f34a5"],["/images/dl/76.gif","395aa82f1e59cf80e8e17a9209bc22f2"],["/images/dl/77.gif","510c9a35e6f332d4d042e3154a59355c"],["/images/dl/78.gif","8a63c07ac20ee5e5097b8a9e9327012a"],["/images/dl/79.gif","9e9a49afd76a80bda8a6362e6a32dc1c"],["/images/dl/8.png","58c486bb84f43765a4b1c0170b17ed3c"],["/images/dl/80.gif","4a87f84b588768c5b5fddb2b000b92d5"],["/images/dl/81.png","c6557ae392175f3284cff96ede632ca3"],["/images/dl/82.png","8c6e03a4ce27b1546860f1a4994ded2f"],["/images/dl/83.png","3230fe6ea57bf3bb56197b60c744873b"],["/images/dl/84.png","b32db2843c3da7a1434e07286a767202"],["/images/dl/85.png","aaaeb673c62631407bc0417bf30a2209"],["/images/dl/86.png","cc201aa344c97773b92d4a24a3eb4756"],["/images/dl/87.png","153a890f1412bea4542d568d2f071fc7"],["/images/dl/88.png","effc36ef946164373a8bf243961d88a1"],["/images/dl/89.png","2686299a083de7d34f0f4215884ca4a7"],["/images/dl/9.png","07509d765897a7512d5beb635d3c4179"],["/images/dl/90.png","a56a0f6071eb3fcdb76968b4a32d5e5c"],["/images/dl/91.png","6ee325d3906f10f2793fbb01e489930a"],["/images/dl/92.png","0c8d438c12bce0260b16cf270db56f0b"],["/images/dl/93.png","6c92ffc515ccbe08a5abd79a3cb80b9c"],["/images/dl/94.png","808edd0a07d8cbabf336dd9dca8d4a26"],["/images/dl/95.png","45f3b7701551fa7df5f9be047c75500a"],["/images/dl/96.png","9a3c4effe6fba0aae2fb580155c4c55d"],["/images/dl/97.png","bd2706173398f50c2831c4e192b9f352"],["/images/dl/98.png","37d39a650706f2df9b766fe478e52587"],["/images/dl/99.png","058d5dbc14ded7c21715436648e21181"],["/images/docker/1.png","052bebd4e60c59be51857684e5e6fc0c"],["/images/docker/2.png","28f04eea1e73e7c0e0c466756c9c2c62"],["/images/docker/3.png","82a26c321e81043540818baaea77eb38"],["/images/docker/4.png","367c99cdceb0f81b378c075904c88644"],["/images/docker/5.png","e414ffe973288941a51e9cde7d92bb71"],["/images/docker/6.png","d559cb65466a900edb0d7983917ec37c"],["/images/docker/7.png","ac71dea1600d19598053c5607e7975a1"],["/images/docker/8.png","d9b777921984636623864ec2b250e298"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/math/1.png","be08ac320a3fafd4b6cb9a2a820a3b42"],["/images/math/2.png","82c7788477186d13876fa2783fb31305"],["/images/math/3.png","c4dbdce9ea65b388f307e4c2b6701c7a"],["/images/ml/1.png","0614e4691064abbff74cb69212e2a466"],["/images/ml/10.png","ee1e7358cde8b8137ce684b0c4365e04"],["/images/ml/11.png","c86479f988d4dc6b87074724f42e35f7"],["/images/ml/12.png","35ff221fa6ca14c635bfef76cc5a2991"],["/images/ml/13.png","f1bc25e32ad10b0d7b0c9ede788a5b88"],["/images/ml/14.png","2f592eda3505117752f6719aba65edac"],["/images/ml/15.png","0c8117df94fa4c145e2c2943e2247ec0"],["/images/ml/16.png","5705759f62883d83028290a0933e5c86"],["/images/ml/17.png","eed841d914da17d258adc9852c83b745"],["/images/ml/18.png","7863315ccc29fb1c24e27d2a5fcd477c"],["/images/ml/19.png","e3307673fa4d5889a52012dff9c03ceb"],["/images/ml/2.png","9d72b6ab1efe7d92a0f75e376681e549"],["/images/ml/20.png","73daa252e5311ade27160a65cc61c9a7"],["/images/ml/21.png","2749400036f8bba7beaa0ab3224f5389"],["/images/ml/22.png","aadd1c4aa269c129958a013d84e42492"],["/images/ml/23.png","80937bc77f36a5d6310ddbde34c091ed"],["/images/ml/24.png","810369b827c1d376ae5a0e6bbf0c2761"],["/images/ml/25.png","8ba5410eb67aa3cb734596ab0b7abbf3"],["/images/ml/26.png","e702d97bf87a16ac98d9b96357a50224"],["/images/ml/27.png","eb5810d90beb005e0921b5bdce4278cb"],["/images/ml/28.png","daf6146665cd93ff43b7c0537d26931b"],["/images/ml/29.png","faf61ee7aef34289909db13712731ef5"],["/images/ml/3.png","05763899f89a3aec00df11ea2a7a976c"],["/images/ml/30.png","521f8749d93cc41c604307333b8ecb20"],["/images/ml/31.png","61e322d57e7a6468cbca48304ae94cd4"],["/images/ml/32.png","6ec323b582e8562c93c1d6640f4d807e"],["/images/ml/33.png","0d1cdd5ecbf216003f28746db2b33b6d"],["/images/ml/34.png","64b7033aec57515e301161d85f8e4e30"],["/images/ml/35.png","edf088702e0177920a94b3508bec7ec7"],["/images/ml/36.png","fb5a9ddea3a45786bdf11c415e147896"],["/images/ml/37.png","60914873dae6567b8e68ec45ec6b59dd"],["/images/ml/38.png","2b8b5cff6aa6292c46ac594c30027790"],["/images/ml/39.png","1d3d3d21aac91a1e4a2b16c45345d3b7"],["/images/ml/4.png","d1d10f45e987ea4af1c4b7086c5f745b"],["/images/ml/40.png","772e151cc0187377b8640b6769125b96"],["/images/ml/41.png","481ba1d4954007c7eb74aa89f44cc220"],["/images/ml/42.png","3b812196cfcc9fd92a8eae2eba443cfb"],["/images/ml/43.png","cd5f999f7915a1797b3a4c1bd1a63484"],["/images/ml/44.png","37eb471cb2476713b4491a3d747e8f5c"],["/images/ml/45.png","df3980f9a53928768f0949eab0dda0f6"],["/images/ml/46.png","d9a4bc126242de84d18bf1a616961bc3"],["/images/ml/47.png","ecc436ba7ba75ec5c422ecdd700219d6"],["/images/ml/48.png","a154e7896b59f7c4feb7fd9869350494"],["/images/ml/49.png","e9cc736869a7161cfefc7e1961c2d9aa"],["/images/ml/5.png","884a734410b3627a14981c481b27c583"],["/images/ml/50.png","6900e08fcd02c9a9bcac17b1c7d68fad"],["/images/ml/51.png","1ecd25e8788aac72f2f6d2440ebdccde"],["/images/ml/52.png","e8a96085b9487570772875b5f40c5a64"],["/images/ml/53.png","6ed613d5f1a4465a670ee7557dd29575"],["/images/ml/54.png","4fba1f8adf3b0bac8f6cd911016e97d9"],["/images/ml/55.png","f772762d3dc7b6927ca73e276bacd35c"],["/images/ml/56.png","20827caf527ef20652b21adb8e143e96"],["/images/ml/57.png","3bfb68f2234dfdb64aa5286d49a04f79"],["/images/ml/58.png","291a3424c7bff0afa585bfa7f09d67de"],["/images/ml/6.png","bbd2772718a23a1102b2201f78413d6a"],["/images/ml/7.png","c753cbfb65ed9638e82e5d0140028f82"],["/images/ml/8.png","0432f07c0cec1708d787798042156c21"],["/images/ml/9.png","2870280e8d3cedaee23818114a3cc02e"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/py/1.png","15b7ebe86935d45e017776bdd2e2e2d7"],["/images/py/10.png","30a401b3d7e75a8e237f0b805f583e4b"],["/images/py/11.png","59051625b36f69ecb18a6174a04b4368"],["/images/py/12.png","0738f0be3b1b72d1f66f6ec218d76675"],["/images/py/13.png","aabc1941943d19cd9c26b4c97b991415"],["/images/py/14.png","f09e867b7e33ab28bb509208efdd4928"],["/images/py/15.png","af9b8898e56514fa1c060e35d316066c"],["/images/py/16.png","ba5ec4e869bae45070e08f64788ecfbe"],["/images/py/17.png","82fe7ec533b75c5b9ed5e677f57eeaa9"],["/images/py/18.png","f651173cc0a9b4a8dcbdd495f73f882c"],["/images/py/19.png","db20315678cbcad8dd4f0d4bd72cb991"],["/images/py/2.png","589c0581b9b1da7112120f6a1f320fc3"],["/images/py/20.png","7670ef568945df192b81f0dc0f3d3f7f"],["/images/py/21.png","dffafdf930d818b664746a166cbb97bd"],["/images/py/22.png","e42a0fc9bec94fcd5207dd39ee46dc5f"],["/images/py/23.png","729ce256675ed1b5be435ba49e07d5fe"],["/images/py/24.png","3178aad732fb3a59fd6b9f0522d0c84e"],["/images/py/25.png","23dee90b7ba96de076a6bfbc7e9f9fc8"],["/images/py/26.png","5f27264c4cc5f1066086d4a6dafe68df"],["/images/py/27.png","2a30cc59399a637db839057f86d8c331"],["/images/py/28.png","f8ddf9a9bdfb76086c414c8561a7c756"],["/images/py/29.png","e6a08a36098bc987d119f57a9b273829"],["/images/py/3.png","46d73ca2a738a321e189608497c35b78"],["/images/py/30.png","aaad070ba988fc223be70b8be8d1a694"],["/images/py/31.png","2190bbadd784c89153ca10aacaa212d7"],["/images/py/32.png","4ebc4497b4ffff11e8ed5bb12a592cee"],["/images/py/33.png","a912118468c632d485625969bbe13b28"],["/images/py/34.png","8647e22d53f209413add44e80c22aaf0"],["/images/py/35.png","f98376dfc1b6b6885ce35e0e29831c12"],["/images/py/36.png","63b48f45c30f1f4274506b01ccd2aaae"],["/images/py/37.png","66a568168cb34596f4d2b61f701f0c41"],["/images/py/38.png","4ec3117c6e4660417f25420015680ef0"],["/images/py/39.png","1d31399d3f0ef916447931f88ce3398d"],["/images/py/4.png","beabd345ad64e22ed6750c13f7d35e90"],["/images/py/40.png","7b19dffc350d03bcf0de1c9477e93105"],["/images/py/41.png","593c6b113bc67e90339d819616bd1277"],["/images/py/42.png","20c75a35c4a4b07faf07daf9475ce1ff"],["/images/py/43.png","6c673a7ef4a3fc5ea9169a3fbd61f80e"],["/images/py/44.png","2334590711560011876de8c746b18604"],["/images/py/45.png","1441f705d69261450da8c5233ab02d0f"],["/images/py/46.png","616c6ab2d9c8eb007952017c7452d6d7"],["/images/py/47.png","004175268fd9029f7d09d1503670370f"],["/images/py/48.png","489330b4f78c3796b20042589808f8bd"],["/images/py/49.png","58a224ddfb5f57a12f48f3b4e3cbd0d0"],["/images/py/5.png","771c59a4e854122793a682f106fa08e5"],["/images/py/50.png","bfa901b645deced8dd1f9a8c26778f25"],["/images/py/51.png","2ffadace686f78c1414244d872d398fc"],["/images/py/52.png","2e3ec0d057d100e4e8ea5f0212e5c998"],["/images/py/53.png","17bb9979be17d13b90357c57139da462"],["/images/py/54.png","c23d69845f72a73fa3e2f1fb84771c56"],["/images/py/55.png","8535760aff99ceb4b556f7b97796d94c"],["/images/py/56.png","59ec9ba92d7ccd2c716228a1a8455ccb"],["/images/py/57.png","15bc87041ac4b1c7b3525b314fb7ef66"],["/images/py/58.png","5f94f3e9e9c6e104566bbb1b600e1fac"],["/images/py/59.png","bea377ca62ca75ab5d71c430b0355931"],["/images/py/6.png","833af6f79eead78a0888a42a24a7c35b"],["/images/py/60.png","ea730c5befdab80ca63dbcce82b3e4b9"],["/images/py/61.png","a6562d29f44817c17e7be41238aaad7b"],["/images/py/62.png","7d457435369276895070e3dd61c9462a"],["/images/py/63.png","91015ba12e25b0f895687581ce6bcb25"],["/images/py/64.png","20a15a250b09f9e4604ab3550b9700c3"],["/images/py/65.png","fe52bf0b2570638b2d22d72a27152e1c"],["/images/py/66.png","d3025a5e94f7bc525362d1f2e7745078"],["/images/py/67.png","2f7ca0e327c55df4f003210905190792"],["/images/py/68.png","6f7279dbb187720b89c66250c986e965"],["/images/py/69.png","a44c673d20cbcf45db156036bd983034"],["/images/py/7.png","d947a703f79658536cb2750914637ffa"],["/images/py/70.png","8a87dfa24f54a8547ef6826d3b6289f4"],["/images/py/8.png","20b867d8137281e9c3a40b802df75680"],["/images/py/9.png","e4639c570e7f7a04e90439456ad297c5"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/reptile/1.png","6d0aa92af42a4647977a03707bade702"],["/images/reptile/10.png","79f309da23b6b5b8b9effd25cc20abd9"],["/images/reptile/11.png","e60854e61ed69c6cccb12196fd947705"],["/images/reptile/12.png","ae4ac9f4065966955a3f31fa4b2292f3"],["/images/reptile/2.jpg","f722e57e21e3d76ebedb6667bfd44aed"],["/images/reptile/3.png","b4161135bc5a889337f36a3a0c20dc6f"],["/images/reptile/4.png","73b18e616e9134ffc1aaeb4ed1c29dfb"],["/images/reptile/5.png","318877d0e3a7337773fc301d6c5118eb"],["/images/reptile/6.png","f39ae0da0e1d343ec162f5db6ade59fc"],["/images/reptile/7.png","26491b8984ce6b22c76ebb6372f912f0"],["/images/reptile/8.png","15bdc5c257f7c109f184f9872c57b2d5"],["/images/reptile/9.png","92e8ffd5026d530e630b6ba90c23236f"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/tools/1.jpg","5bf773e6fdaf0c6573c4578ea232dc21"],["/images/wechatpay.jpg","07f0995337e2a1c8d2357e5659ec120b"],["/index.html","6a98abb43491f6007542ff17bcc3f46b"],["/js/src/affix.js","4cdfe6cbbe4e2a643f6ff71677eb98a8"],["/js/src/algolia-search.js","f3ce1cabd7cb471db129d19f00f2808b"],["/js/src/bootstrap.js","e65f98ead9f776202f9881f9be46f47f"],["/js/src/exturl.js","ce8075cdb2b0934637eb683badb3399d"],["/js/src/hook-duoshuo.js","95a8d7af5fa5e43b01b72ca4b05d1755"],["/js/src/instantclick.min.js","efb5bad2874ae34a7555d307b99489c4"],["/js/src/js.cookie.js","c3779f1a8494c54bc7999432a62367f1"],["/js/src/motion.js","2d1e3ff04998752221323c629a337315"],["/js/src/post-details.js","7fce3e6ae4337e9de35c633c54069257"],["/js/src/schemes/pisces.js","a06d96f07ff7aa0dd41780060614dbc1"],["/js/src/scroll-cookie.js","14241f02b1f23eb15a4423018016e091"],["/js/src/scrollspy.js","86a513b04c3dedb584aed77d63de12a3"],["/js/src/utils.js","2f391a22ce984fe346b54c6ab7dc78d5"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1a2c221062f74ec57f2b62776569f8e1"],["/lib/Han/dist/han.js","d942d013c51927d380a45a3797a6d357"],["/lib/Han/dist/han.min.css","7f6f6277be29db5e15478438fe0f974d"],["/lib/Han/dist/han.min.js","38c6d1c10a244b77fee17a8979da8755"],["/lib/algolia-instant-search/instantsearch.min.css","ca174b2a5604d298c2259d061515b577"],["/lib/algolia-instant-search/instantsearch.min.js","36ec8f75220678c9e546953d7d89f28c"],["/lib/canvas-nest/canvas-nest.min.js","5feedf93c8b861dbeb1ea0203ff24e26"],["/lib/canvas-ribbon/canvas-ribbon.js","0c2766748e8e95167b8a9712b9d966a3"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","5e505244362b3ec5a0d162e3381938d5"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","fdf2a19dc2847f6d7a5fc4d044a6a719"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","5a9da0f2c48bbeda3e6c0e4f1a2e1f5e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","73a1eb2fd13dfc03a7a57c552961421a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","02e50bc5117e66e623afe3d293b340ee"],["/lib/fancybox/source/jquery.fancybox.css","b81884d1b8b67d4518549bb242f63c76"],["/lib/fancybox/source/jquery.fancybox.js","cd271f1afaf4bfde68788adeebbd27ac"],["/lib/fancybox/source/jquery.fancybox.pack.js","198a230bbbaa4c57c71d13232d536583"],["/lib/fastclick/README.html","cc31a1944d2d0e48bf46e813515738be"],["/lib/fastclick/lib/fastclick.js","3dd1fa44315bddc28d08ddcaa6a5e4c6"],["/lib/fastclick/lib/fastclick.min.js","5c0a10fe6566a8a8601407383d80a6e7"],["/lib/font-awesome/css/font-awesome.css","5b034ad9149d8434c2bd34889bd97ff6"],["/lib/font-awesome/css/font-awesome.min.css","5b034ad9149d8434c2bd34889bd97ff6"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","ceb5c5b55a9dea55f77e7c7aa6d292c7"],["/lib/jquery_lazyload/CONTRIBUTING.html","bf185d2ef2f3e83aaf9d60320d65991c"],["/lib/jquery_lazyload/README.html","3a411d11cc0a5cebb53a95f551359592"],["/lib/jquery_lazyload/jquery.lazyload.js","20c5fa8c79b02325135eb186d792ab8a"],["/lib/jquery_lazyload/jquery.scrollstop.js","94921ec9e1de3d256845e8d387063e71"],["/lib/needsharebutton/font-embedded.css","1c2dad7419dc0577e623a091e10c3ba0"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","5b2769026d9119e98c84f2a39e478c12"],["/lib/pace/pace-theme-barber-shop.min.css","2cc69e9c99045593efb6ba79b5e0774f"],["/lib/pace/pace-theme-big-counter.min.css","56ffb4500460ef1ed95e4c84701d6b04"],["/lib/pace/pace-theme-bounce.min.css","1bd05cac65456afc0a961a9e702415b9"],["/lib/pace/pace-theme-center-atom.min.css","ca40f82796b5507491c9d0901ed6bc04"],["/lib/pace/pace-theme-center-circle.min.css","6d0d15d87d05001792ea32fd0f32514f"],["/lib/pace/pace-theme-center-radar.min.css","055f1d5b2e8f0427705fb83ecbb4b000"],["/lib/pace/pace-theme-center-simple.min.css","a0e02d1832b9d31c376c82cd86cc096c"],["/lib/pace/pace-theme-corner-indicator.min.css","3ea1c8a4a76b0ab407a3319ebf73e099"],["/lib/pace/pace-theme-fill-left.min.css","172e19bbd3e8de4129e6ece1848d7fbe"],["/lib/pace/pace-theme-flash.min.css","92af7008164b1493a1c4a3c7f0f12488"],["/lib/pace/pace-theme-loading-bar.min.css","4718b3884b4c37ba24f6ed95c80eeac3"],["/lib/pace/pace-theme-mac-osx.min.css","9936df7dacb03177f988e2060f7c4841"],["/lib/pace/pace-theme-minimal.min.css","2eca9e275561dbb4a4cced16cdc0c4ae"],["/lib/pace/pace.min.js","0d4483fbf3de3fe47a8e800a7a88f75b"],["/lib/three/canvas_lines.min.js","2600d0ca6bb3ca5a1647158be9a0f1cb"],["/lib/three/canvas_sphere.min.js","76e0e1291c806cb8dc200c2c87e7d2a4"],["/lib/three/three-waves.min.js","aa17fe1fab8c178dbaa35df31c264837"],["/lib/three/three.min.js","b9bce875296e07f01b211ce2685ae4db"],["/lib/ua-parser-js/dist/ua-parser.min.js","b2868750cf987e8664363cceb5fec129"],["/lib/ua-parser-js/dist/ua-parser.pack.js","0d1847b75f47a1e69b91914536e5eff7"],["/lib/velocity/velocity.js","b1cfdfdefc2549c8773f8fa8c5622efa"],["/lib/velocity/velocity.min.js","63ca7fb682beb0667455b337db3e2105"],["/lib/velocity/velocity.ui.js","5349aa3a947aa947c3ef4cfe76f83e0b"],["/lib/velocity/velocity.ui.min.js","c76a2447f068d99dec70e536bbb48327"],["/page/10/index.html","22c7a8f468e6d63be107305ad1924791"],["/page/11/index.html","d6d78ea808996f91e70c6ea61798f752"],["/page/2/index.html","9de5193c1c729fa8e1dc960aa40b0b08"],["/page/3/index.html","4438c924fb249706cfb5515299588396"],["/page/4/index.html","7d4a5e59cba99ad139bfc19d3a4b892e"],["/page/5/index.html","83b5105693366bf3b82e22cdfd1984ef"],["/page/6/index.html","2a5b8e0e5fd58c3f878a8c30cdd80a7c"],["/page/7/index.html","e0154e60e7fa2ca81203e14858963fcb"],["/page/8/index.html","4b0440780e03db68ff5b2efdf955f083"],["/page/9/index.html","c2e449d9ff8514c2fe420daf2ea8ab59"],["/sw-register.js","0ae61d1df02e879bf963d2802a0221b9"],["/tags/CNN/index.html","7321588c146affd42e7f113121b1ff9e"],["/tags/DNN/index.html","360202dfa67002f5a0dda9dec7c0e694"],["/tags/DeepLearning/index.html","2ba1e4bc8669859209c48654d18aa322"],["/tags/DeepLearning/page/2/index.html","99db50d0a5a563f02d203a156a0c9280"],["/tags/DeepLearning/page/3/index.html","9d4fc214541896a6f0f6a720649480b3"],["/tags/DeepLearning/page/4/index.html","1d2d1f637e95cbedaa8f872d4421f640"],["/tags/DeepLearning/page/5/index.html","c9ad83915fe2ee44392cd2cd08cb68cd"],["/tags/EM/index.html","a52c33549dccb30adbc95d9b13f8b2fb"],["/tags/GAN/index.html","47a7775bc3f4c65baf0886e4af5d9684"],["/tags/GIT运用/index.html","0ea28260b4bce078375b42c6a0d45b61"],["/tags/Keras/index.html","9d6089a5f9246b61c35f55d30f2b737a"],["/tags/MachineLearning/index.html","0d001fdb6b50bdbce8031d5046bc03d1"],["/tags/Python/index.html","8382da13a4b197b7f5cf9e999cbab48d"],["/tags/Python/page/2/index.html","de91ba32df429229625bb6fd9752f159"],["/tags/Python基础/index.html","904650dcc678e99a1d526f60caddeda3"],["/tags/RNN/index.html","e8890896e2f2276a6a38d7c7b2eb9d45"],["/tags/TensorFlow/index.html","7d5f7e09bd350542330c3091230ce3a3"],["/tags/TensorFlow/page/2/index.html","da997a90070faf344355bd875338a820"],["/tags/TensorFlow/page/3/index.html","e91e232b12056a08dfc8fdf5fa498c5a"],["/tags/anaconda/index.html","2ec25b1c7cbdd4d5178c303ff2175d76"],["/tags/docker/index.html","c881654c69a7e73de421c6a94c42f447"],["/tags/git/index.html","7d3401e307345c962f096f6b6dd8351e"],["/tags/index.html","8cee38d4e74d48007f3ebbc70bb68adf"],["/tags/ios/index.html","c2ff85cf1627863ed6230b686906faa8"],["/tags/linux/index.html","1520977307eae950bb8abae4b4a57bc9"],["/tags/markdown/index.html","d845a2058152d440fe13003a2ae2a67b"],["/tags/network/index.html","0cab52556a9873a72f7a56092f0da794"],["/tags/opencv/index.html","eff25aea51681af9c8ae75db1d953ac7"],["/tags/pip/index.html","201b442a04070404f97df755e1d56c44"],["/tags/pycharm/index.html","6aba2e95545693b6eadbb04c10455363"],["/tags/svm/index.html","a4ac5ca09d8d88a3d541b84003b4c5a8"],["/tags/ubuntu/index.html","a1d01c2043608be567d62b7009a1b0af"],["/tags/优化算法/index.html","f45cb2f7b89ea4089b1372e9ead916ac"],["/tags/决策树/index.html","c4c75c2e3d0fff2dea5f7bb05e4f94d6"],["/tags/反向传播/index.html","180c9aafcac03363aedca8b47e2a4ae0"],["/tags/声卡/index.html","f4c0b310af0b26ce8f7ca8b847993b68"],["/tags/安装/index.html","50ad9224ac451f2f759a7242e5f41a57"],["/tags/开发工具/index.html","37e216a9a3d84ae921a2925b9413e3d5"],["/tags/开机/index.html","31faaeec088a2c86a32b83ab905a856f"],["/tags/朴素贝叶斯/index.html","4597d8e2df4333e445ce278ac6a00741"],["/tags/核函数/index.html","2b3b395058c3f082380d1f3477bcaa74"],["/tags/梯度下降/index.html","a644e2641a955c1d9ed81d4c9e29368f"],["/tags/神经网络/index.html","ec9aa8f9c9ab2c9fcfb7b6e55d07709d"],["/tags/线性回归/index.html","4b9938fd77b5ae360c66f0c16b8b8516"],["/tags/聚类/index.html","d823bf4eedffceb8f27e672adbd206fc"],["/tags/自动化/index.html","fc4c6c4ad34dffd935c2ac13dd95ba33"],["/tags/贝叶斯网络/index.html","10457c57be5b2b496e1fe88f52a12ed5"],["/tags/软间隔和正则化/index.html","492cbea1e1009c83e64ad4db3a0a8995"],["/tags/逻辑回归/index.html","75efd9a92e6426288b5a63a3fb3dd1b0"],["/tags/随机森林/index.html","807475bb520f1d564777c81feac236cd"]];
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
