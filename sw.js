/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/08/25/2018-07-20-raspberry-Internet/index.html","96d16ebe98cdbdd3de8d99baedd2dad1"],["/2015/08/25/2018-07-20-raspberry-on/index.html","fefa5802c5bcc377a807be6f413851df"],["/2015/08/25/2018-07-20-raspberry-usb/index.html","2dcf6c3b399a80ce7237d075f3346095"],["/2016/07/13/2016-07-13-GitTutorial/index.html","18f4b742679694b8923e16b8428b2f7e"],["/2016/08/04/2016-08-04-PythonTestAutomationiOS/index.html","03a1723046f9f7de41f8188e51943f8a"],["/2016/11/20/2016-11-20-markdownTool/index.html","fbd1d59a17a97b4e1a9c3fa27b7152bb"],["/2016/11/20/2016-11-20-neural_networks_using_TensorFlow/index.html","49b8284ab7ccc068a834da918855a701"],["/2018/07/05/2016-07-05-MachineLearning_introduce/index.html","56677423490e31e2b985af8965a83999"],["/2018/07/21/2018-07-21-ml-linearRegressionL1L2/index.html","f4e6a1de53fb510f5190badb7383ca28"],["/2018/07/23/2018-07-23-ml-DecisionTree/index.html","5fe12115728e066262eb88a13855ae7a"],["/2018/07/23/2018-07-23-ml-logisticRegression/index.html","6fe1b8a1e32a927cbeb91a9759ca0201"],["/2018/07/24/2018-07-24-arithmetic-gradientDescent/index.html","959c63364ce08baa572e8add734df977"],["/2018/07/25/2018-07-25-ml-svm/index.html","7f89709cd4146028a588ffb5c1f0bb5a"],["/2018/07/26/2018-07-26-ml-svm-L1/index.html","b2ead32d1eb08d2832158e8964e5f15d"],["/2018/07/26/2018-07-26-ml-svm-kernel/index.html","5dbaf49fbaef8e0fde77265802fef55c"],["/2018/07/30/2018-07-29-ml-clustering/index.html","a2e5e7201dfd00c22f69b5a9ab353a2c"],["/2018/07/31/2018-07-31-ml-em/index.html","29b4fc14b0bbf27f0eb79973cd7b7302"],["/2018/08/01/2018-08-01-ml-NB/index.html","26bd9906aed6c549620317060af633d6"],["/2018/08/02/2018-08-02-ml-NB-network/index.html","638e5e6cea3b1ab489b61ecd612dd1c2"],["/2018/08/08/2018-08-08-DL-introduction/index.html","a0023acd220affc35d9225c66b31b5b2"],["/2018/08/09/2018-08-09-TensorFlow-windows/index.html","81d011062c0b2d8924180218ddcef0a7"],["/2018/08/10/2018-08-09-TensorFlow-ubuntu/index.html","d79b222d634b81ae9fbc44473b0355d5"],["/2018/08/11/2018-08-11-TensorFlow-Virtualenv/index.html","834803293a3615fa99682996e9512ad9"],["/2018/08/13/2018-08-13-TensorFlow-course/index.html","9a4b71911912e4926561d02121d51249"],["/2018/08/14/2018-08-14-DL-method/index.html","cdc019a624d818e31b6e6639a218bbc8"],["/2018/08/15/2018-08-15-DL-back-propagation-python/index.html","5c0f1ee17556045f7a0045268f1033fa"],["/2018/08/15/2018-08-15-DL-back-propagation/index.html","f26c6bdf729bdadf27a65e9525a87acf"],["/2018/08/16/2018-08-16-DL-DNN-python/index.html","b4f1f2bc64ff1fcb8e1d449cb7dd72c7"],["/2018/08/21/2018-08-21-DL-CNN/index.html","0c31e6bcab1e3a517c97679819c09433"],["/2018/08/22/2018-08-22-CNN-back-propagation/index.html","07e75fd203d845bf180a3fe51e85457a"],["/2018/08/23/2018-08-23-DL-CNN-python/index.html","7e71f7eb19f54299971ac417cade71cd"],["/2018/08/24/2018-08-24-DL-CNN-LeNet/index.html","12c7d93b77c04663a0d780e0e5bbca48"],["/2018/08/25/2018-08-25-DL-CNN-AlexNet/index.html","b74075c75b4ca1bc281ae3b124aebbb6"],["/2018/08/27/2018-08-27-DL-RNN/index.html","26d51f7bcbf76b91f8d2477dce2e17d3"],["/2018/08/27/2018-08-27-TensorFlow-keras/index.html","b2212a02ae3f0f7f160a434b758ce3a2"],["/2018/08/27/2018-08-27-TensorFlow-layer/index.html","4c207dcbc51deea8c6080f6d03101077"],["/2018/08/27/2018-08-27-TensorFlow-native/index.html","79a0ed59445dfa71cf9c5e7f920ef149"],["/2018/08/27/2018-08-27-TensorFlow-slim/index.html","241cc68dd1239781ec390dc76dd008e8"],["/2018/08/29/2018-08-29-DL-RNN-BPTT/index.html","bbe05dae65e260f8ea9911a347e4317f"],["/2018/08/29/2018-08-29-DL-RNN-hand/index.html","44af607ebd959522f7635bd29d1ba3a6"],["/2018/08/30/2018-08-30-DL-RNN-LSTM/index.html","8c827d9810dc3c2d00d31227c9483b1f"],["/2018/08/31/2018-08-31-TensorFlow-RNN/index.html","fe53f4cc5bd175836914a59f8f35a82a"],["/2018/09/01/2018-09-01-DL-GAN/index.html","d4a3316a3121dd343dd071b8bb804001"],["/2018/09/03/2018-09-03-TensorFlow-GAN/index.html","fbaecab7a0afeb87f8a1dfa04c1e8ae2"],["/2018/09/04/2018-09-04-DL-DCGAN/index.html","d35065bf8c9b586df9fa49cc02699424"],["/2018/09/04/2018-09-04-TensorFlow-DCGAN/index.html","b423e0798617831f7a5a37331a20755d"],["/2018/09/04/2018-09-04-TensorFlow-save-restore/index.html","9f68fea8595051bcfcf67ec0514038b6"],["/2018/09/07/2018-09-07-TensorFlow-cifar-network/index.html","ee3e372d939835c866c266c5bef94830"],["/2018/09/07/2018-09-07-TensorFlow-cifar-train/index.html","20640d378f16a29fc49c299464fb4713"],["/2018/09/07/2018-09-07-TensorFlow-cifar/index.html","76cdf46664a881ffc184e8c157f7a518"],["/2018/09/07/2018-09-07-TensorFlow-visualization/index.html","481e7889d6aaeb62eca9fe9a6adefca8"],["/2018/09/07/2018-09-07-keras-cifar/index.html","aff282e2400957dfc7f833d3d930ce4a"],["/2018/09/15/2018-09-15-Pytorch-AlexNet/index.html","9141b53bff2b0064f072a5ad35d07f28"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-test/index.html","f31eb2f733efa839d7a56fb2e680048f"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-train/index.html","3711cba4265c1b4338c014cfa056984f"],["/2018/09/15/2018-09-15-Pytorch-DenseNet/index.html","a3cbf65f2f4a8350ca424903afc15021"],["/2018/09/15/2018-09-15-Pytorch-GoogleNet/index.html","332c1b5b662afccbb06b58c753ff3077"],["/2018/09/15/2018-09-15-Pytorch-LeNet/index.html","fdf5daa60039c3f9ea1af0ae8dcf0950"],["/2018/09/15/2018-09-15-Pytorch-ResNet/index.html","acdd0bdc483caff6c3de5ac1014cbc8b"],["/2018/09/15/2018-09-15-Pytorch-ResNextNet/index.html","9d8e2affb63cb3a152e0fee1f723dfb7"],["/2018/09/15/2018-09-15-Pytorch-VGGNet/index.html","9f81e6ac8c322e3c45b407b14e9af4a6"],["/2018/09/15/2018-09-15-Pytorch-cifar10-data/index.html","a6b8046f8e0d6134a3434a72b4bf7499"],["/2018/10/09/2018-10-09-pip/index.html","b5232ab18ec7875149ebd4a4ba5efdff"],["/2018/10/09/2018-10-09-tensorflow-question/index.html","8ea88bc4823a0d9d634652d8f4659768"],["/2018/10/15/2018-10-15-source/index.html","361b2bcac9e8c0f1cd3ac20df1eb87f7"],["/2018/10/26/2018-10-26-openCV-geometry/index.html","bfd540bfa846be3e687228ec57947f6b"],["/2018/10/26/2018-10-26-openCV-install/index.html","23cb3ada1c0e5e3d8dad3f3cd254574a"],["/2018/10/26/2018-10-26-openCV-special/index.html","437b1038c12315c6a974e275934c81ab"],["/2018/10/27/2018-10-27-openCV-face/index.html","1843958bcb74baf9e41e5dd97c761386"],["/2018/10/27/2018-10-27-openCV-svm-hog/index.html","20dc2d44e2cabfa0f44c08254ffa8d6b"],["/2018/10/27/2018-10-27-openCV-svm/index.html","afa611c671df1364e2c4c6f709ad8b5e"],["/2018/10/27/2018-10-27-openCV-video/index.html","1ab6759f8068afaed1735b99e60c61fb"],["/2018/10/27/2018-10-27-openCV-whitening/index.html","af1e044ba26bb31b1df1b899569791e0"],["/2018/10/29/2018-10-29-docker-TensorFlow-cpu/index.html","9960c5697efbf41e205e3e942dbc562a"],["/2018/10/29/2018-10-29-docker-install-win10/index.html","e710899317eb14f75921b4d0ca1fe460"],["/2018/10/29/2018-10-29-docker-install/index.html","ec6bbfad20fc10172d4018845915c2ee"],["/2018/10/29/2018-10-29-docker-source/index.html","c7a785f98c403eb79d33a6357e35b4b9"],["/2018/10/29/2018-10-29-docker-speed/index.html","77f45063002024c5d76f133e185f8659"],["/2018/10/29/2018-10-29-docker-vessel/index.html","2487ba7a9d889e4e1853f1860b554232"],["/2018/11/08/2018-11-8-linux-vim/index.html","de5bcc592d0650f3e5d0b3c8a8297c20"],["/2018/11/08/2018-11-8-linux/index.html","acc129fc54e0d4f326224bbf886ac1f2"],["/2018/11/09/2018-11-9-anaconda-ubuntu/index.html","75da694fbdedf982defd297dd6cbc2b3"],["/2018/11/09/2018-11-9-anaconda-windows/index.html","c6f42f0add3acb01a6e104d550d54993"],["/2018/11/19/2018-11-19-git/index.html","28c83249a504d877e830107ce0ae6ae6"],["/2018/11/21/2018-11-21-python-date/index.html","da892efc2e220e6cd07d21618a75ea48"],["/2018/11/21/2018-11-21-python-encryption/index.html","2a3b98c0939fa716731546ea86c83bcb"],["/2018/11/21/2018-11-21-python-log/index.html","5906722705f0176daee45822a2f28e8b"],["/2018/11/21/2018-11-21-python-pillow/index.html","102c38cdb6180dfeabb7f3ff2fd16cb4"],["/2018/11/21/2018-11-21-reptile-beautifulsoup4/index.html","5125374f6d6327d21f4e874b294890a6"],["/2018/11/21/2018-11-21-reptile-http/index.html","79bb887f09f039da862f20c6881e0fa0"],["/2018/11/21/2018-11-21-reptile-request/index.html","b3591b00f58ab26e5f02f87858b0ba08"],["/2018/11/21/2018-11-21-reptile-tcp-ip/index.html","b70ff9c475406e04360ce9753e7f881f"],["/2018/11/21/2018-11-21-reptile-urllib/index.html","0af032d636cc100013cb8621d0710766"],["/2018/11/21/2018-11-21-reptile-xml/index.html","3919870084560e24d9f36ac9220ffcb9"],["/2018/11/22/2016-06-02-Develop_Tool/index.html","8faf1245d5a9f40c5a9ec2b4d3a0eca8"],["/2018/11/22/2018-07-20-ml-linearRegression/index.html","3d8eac543e1af6272e0f3581fd4c6e34"],["/2018/11/22/2018-07-21-ml-linearRegression-python/index.html","540411d9a33d5c3b85434d0dd260ba6e"],["/2018/12/01/2018-12-01-python-numerical-sequence/index.html","c5b06e436bc254e30e3a52723f8b0cdc"],["/2018/12/08/2018-12-8-python-sequence/index.html","451f31c1a831645171b7621c4c2699ba"],["/2018/12/09/2018-12-8-python-output/index.html","6021648396dd044a4641a3fe34755ea7"],["/2018/12/11/2018-12-11-python-dict-set/index.html","07f8065da29fc2509b3fecbfa79280e3"],["/2018/12/12/2018-12-12-python-if-while/index.html","365b092d4e35ab834e8b0670b868ca9c"],["/2018/12/12/2018-12-13-python-main/index.html","95909ad87a372194ea8dd4edcf135ede"],["/about/index.html","3e569dfffb6af92f488beb512b79833f"],["/archives/2015/08/index.html","f6e5f63faffdb8fbe38fc1a178cce61e"],["/archives/2015/index.html","605359e377913dabec3d6afd60d7fdff"],["/archives/2016/07/index.html","161870825a381b75663a28065268b066"],["/archives/2016/08/index.html","e31d4423669554dde0483777b2b79503"],["/archives/2016/11/index.html","d5299e713b813afbd116649c7fe6235c"],["/archives/2016/index.html","c25873fb79ce9ed5f8b0c5a8cd2f54bc"],["/archives/2018/07/index.html","3fbf83eff8613ff9d70c55203e5cbc63"],["/archives/2018/08/index.html","f809d7c2df38619238b920c5a6c4ccfa"],["/archives/2018/08/page/2/index.html","446c73143c7e0e8fb98ffbdabd420bdd"],["/archives/2018/08/page/3/index.html","184cea3bd44c5cfff8f4822efceb80ef"],["/archives/2018/09/index.html","c6a3568cecafd59d78ed8f1421f58cc2"],["/archives/2018/09/page/2/index.html","4d7981e10f0aefd1ccf87a02f5d0440d"],["/archives/2018/10/index.html","5a0219803eda7e2a20c9d1e191228642"],["/archives/2018/10/page/2/index.html","6af35d091b100e7b2c42be9b589aa81a"],["/archives/2018/11/index.html","294feccb3cb8b7347def97dc40b56a91"],["/archives/2018/11/page/2/index.html","830b495a92dbdefd8003ae4f9bba0e45"],["/archives/2018/12/index.html","4c0c6f623e257821c62e02a8550ad2d2"],["/archives/2018/index.html","9a898ca6589503c55f22208ca3f97ebc"],["/archives/2018/page/10/index.html","793e5a614e764393db253b9697a97ea8"],["/archives/2018/page/2/index.html","5c30dd984b6b244c57508eef275303eb"],["/archives/2018/page/3/index.html","04fbff9616e6042c7933f01cdd9e5d3e"],["/archives/2018/page/4/index.html","6e30e123ca9156b56d9cd71c2eab0ce2"],["/archives/2018/page/5/index.html","2b94ce16c760fa1353966afab67da036"],["/archives/2018/page/6/index.html","91c81112621a9a8a19dd301f2311a8fc"],["/archives/2018/page/7/index.html","ba04a1a03ebb1b7261ee5f268cba9c38"],["/archives/2018/page/8/index.html","ca2ff6440cfa2cc3adc2f9aa088a21f9"],["/archives/2018/page/9/index.html","9a389e1c4dcef46697460b9fda952c1b"],["/archives/index.html","1582f13db4c49e2e76903c24ab8adbdc"],["/archives/page/10/index.html","9bfe2db6d3c4bc67cbc03076923ab1df"],["/archives/page/11/index.html","65a1f7e7509f89dcfddea7698fa149f1"],["/archives/page/2/index.html","794112381b2625a3bb2d3c8a3146c6b7"],["/archives/page/3/index.html","658149b7236c3dad9416dd3db7152766"],["/archives/page/4/index.html","7b9d39a41b01b5767ae40c22d0ffec70"],["/archives/page/5/index.html","fe322fa56905e6b07d80ffbd569f2c99"],["/archives/page/6/index.html","e6dd831d090f57e550884774f6d14ec5"],["/archives/page/7/index.html","1bb760eec1cb6adb787c2000360cfe92"],["/archives/page/8/index.html","8a6320c3d103acf00353e77cb3bd619c"],["/archives/page/9/index.html","0de7687e6521310b6ad32d90bd12584a"],["/bundle.js","91cf841714e8ebc11ac92f4377ea4688"],["/categories/Docker/index.html","42d040f09b01bc3cb4f1863b98ca149d"],["/categories/LINUX/index.html","69b3b7c0578dbf038bf72efa3c265c08"],["/categories/Python/index.html","f3136a4cb46ed3fcd5b846861654c72e"],["/categories/Python/page/2/index.html","8d8c6ad2ada45a5c51e9fdddfeff3de3"],["/categories/index.html","a65713d078a85234bb230665b180fd89"],["/categories/pytorch/index.html","82949340966b2204206bc49ecdc5fd0d"],["/categories/tensorflow/index.html","ba3d2a257cd699e4ff27fcd1208b765e"],["/categories/工具/index.html","20381780cb5c8045ff93f5a6d0467a95"],["/categories/开发工具/index.html","cd662a4ac99d6cdc0806fa01130104ff"],["/categories/机器学习/index.html","87f2d09f5b47fea12673531e4e43ceb8"],["/categories/机器学习/page/2/index.html","5d51a667341162e8c71ecc10a36a462a"],["/categories/树莓派/index.html","b4b1978c046570e92797b1063b1d7aa1"],["/categories/深度学习/index.html","c2e33028acfbe928f45c121939b049b7"],["/categories/深度学习/page/2/index.html","1a77b414c37e8e1255c5273e99af4307"],["/categories/深度学习/page/3/index.html","ca1f335e15e7593e3d790c1d1b7464a8"],["/categories/深度学习/page/4/index.html","236d7eba9a944f3b162756beed45d2e1"],["/categories/算法/index.html","6c1e606de99940016e425cf337f5d801"],["/categories/计算机视觉/index.html","1cf272943f89f2b6d71da882a4c87101"],["/css/main.css","1213cd9fe577a4a9760b6a9fa4b77861"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","a80879cd6eb38ea4678e995e91c48298"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8ee39bf6fed055723e7e4d5de051af42"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/cv/1.png","9f4f5f49612d747ea7e2af9511bf81d8"],["/images/cv/10.png","64042888a4a3f3a4eb0fa61132ec4d2f"],["/images/cv/11.png","a7d130d884954da81b5cb0bb6ec3bc36"],["/images/cv/12.png","78897d4a1ee5b035a6c1fca275d6ee5f"],["/images/cv/13.png","5bddd0353cbbe6bba6397722208f71f0"],["/images/cv/14.png","84703e200ba7bd4c81b00bdd284e995a"],["/images/cv/15.png","9e2fd155d3d155ad7929da9e6ff173f4"],["/images/cv/16.png","11fc9d7abf8eab9eabd3b1b634972df1"],["/images/cv/17.png","4a033e9738210c148a2861e2a595195d"],["/images/cv/18.png","28fef5c46c2f422225f0c6784a0c5134"],["/images/cv/19.png","6f9bf406e55081a45f2d4a7694105aa8"],["/images/cv/2.png","31c2a99f54755c697a66fd612088d5d5"],["/images/cv/20.png","3c583b642ab32b3f0e8c25d702db84e7"],["/images/cv/21.png","a566537a8176f5ad3aefb0a4e3d3a28c"],["/images/cv/22.png","1dbefbc4faf1d6d1667d75e5a6e0ad4c"],["/images/cv/23.png","a19339ed91763c182a8876008b6a65b6"],["/images/cv/24.png","d7b6fbd2e71114ace115874caa3234d8"],["/images/cv/25.png","5d8679bb4738e48ae60291c204fb082b"],["/images/cv/26.png","a621210387b76992c71e377e5b3e787d"],["/images/cv/27.png","cc070ae570b8301c7e48511fd03606a4"],["/images/cv/28.png","19234927e77a2e573d1fcd36c6ab377a"],["/images/cv/29.png","981dc034de4ca4b6e734d1a54783f9c9"],["/images/cv/3.png","e4b7d480e78d5d0c4c6a14fb31b0ed5c"],["/images/cv/30.png","89a24fa0d194fd189e619e5399bc2556"],["/images/cv/31.png","3ebb39656dbc7ff3fe0d53e61edfca4f"],["/images/cv/32.png","9eaf042f7520f23a2c7298f55c0daa84"],["/images/cv/33.png","74898282f2a1f9cb206bcfbf15676aab"],["/images/cv/34.png","0131081dd3bb72e8c15ccabbc5a181b4"],["/images/cv/35.png","8fa06daf89516d71037ad8ad5466430d"],["/images/cv/36.png","6f9bdb37ded9320389993be28956612b"],["/images/cv/37.png","e2d8710a8d1be82ba5c171404a6eeb3c"],["/images/cv/38.png","0fbcf55535e125c43eaaf142a7c16084"],["/images/cv/39.png","0f17b9745c0ee7185f3408ff3e75f6d7"],["/images/cv/4.png","b55154238e33764873083b8463030d3a"],["/images/cv/40.png","352064971be0635581af1446a20bede1"],["/images/cv/41.png","482b4b502b236b800a2e609b273fc479"],["/images/cv/42.png","54f1a474233dedf7ee3fc20c56d23be3"],["/images/cv/43.png","f315e6c996c7f06ace53f7fee13aba7f"],["/images/cv/44.png","d88e6c82ebcf85e6332a5ff18f1d6748"],["/images/cv/45.png","546d355afb836ccafb1dbf1ec6e58c2b"],["/images/cv/46.png","e78e4d34afd63907c64e342d2dd56500"],["/images/cv/47.png","0355f524fce034d2b1d9e49d15f5acf2"],["/images/cv/48.png","0890f1471e76361456983ba205a7323d"],["/images/cv/5.png","eecb4a7bba3f07b8e3025585e7752527"],["/images/cv/6.png","834ccb9069233764f549780478fcf409"],["/images/cv/7.png","61b35bb3b9b78a44a617be9dbbdbddd5"],["/images/cv/8.png","57728a4eef354a0aed3698ad06659e92"],["/images/cv/9.png","60933d0b322df2c82963159b02f716ca"],["/images/dl/1.png","b2d61d37b640c75770a86cf1e89173e0"],["/images/dl/10.png","24f2fa5c727818fc48bf3a6f8068ee58"],["/images/dl/100.png","000f1c2ee2bb7adee780317771fc1178"],["/images/dl/101.png","12d112acec2d7f48e095a61620034ec6"],["/images/dl/102.png","8109c56796810451a8d889b964548a7a"],["/images/dl/103.png","15385609e43d95f81dc4e63fff9199de"],["/images/dl/104.png","897e22d7731a6c8d16ce28a62a739a60"],["/images/dl/105.png","b8a11e56f84cbd023da5c531df5661ba"],["/images/dl/106.png","dd17c8a11f7f5b76a56c38e98019c89a"],["/images/dl/107.png","d9ecc9e1a424bd937bb80da878265e02"],["/images/dl/108.png","92dadc873698dd6b2ef82e704fcbd647"],["/images/dl/109.png","764ba408eb6e5f60b496f3ca28cc83f6"],["/images/dl/11.png","34a8bbc88a333fc1c814e516a170afbc"],["/images/dl/110.png","7fa7ddcaf13c866e940aa176cc9abc2c"],["/images/dl/111.png","9c8b8224afbaf9da7a133e4fb47db202"],["/images/dl/112.png","85a50866d113ec1a5b74f6a2429465ac"],["/images/dl/113.png","f6b40f980ccc3bfdb8612b3df7d26681"],["/images/dl/114.png","7ac6605df0aa00d89b33b46935480ec7"],["/images/dl/115.png","a7925e77be39580d582d23f1ae2c2d7c"],["/images/dl/116.png","291b5652dd7b1e5a0a22ec5888dd0ae6"],["/images/dl/117.png","36483a1cda4bba80601aca92598db2ee"],["/images/dl/118.png","cc10fd547e2094b82e90bc3392b714d1"],["/images/dl/119.png","712089d980526e5239253638703980aa"],["/images/dl/12.png","edbd20c0f9be696722864416805f8ab2"],["/images/dl/120.png","94d4ed5a2a8db1d03192b10098415b3f"],["/images/dl/121.gif","a2afa892b7b37c37871701f374e4b5ad"],["/images/dl/122.png","0ea990077c7f9144c9321f3ed9c56bf9"],["/images/dl/123.png","be8c221c9306341acac8f91bf097cdbd"],["/images/dl/124.png","5c61222626f4efca142fdc78d62a4fe4"],["/images/dl/125.png","b1b458a4e0ad89f06e34e436673489ef"],["/images/dl/126.png","e91bbeef4c4a56ade881fb668addfab2"],["/images/dl/127.jpg","3f4dd207f75f3869c6e744120624fc8f"],["/images/dl/13.png","dd2781bbd52cd08b85822b27e704b223"],["/images/dl/14.png","a4f4a768b9e09d0edb0fb2b61bd6d890"],["/images/dl/15.png","11ccd1c7126bdada66328b00acd38ba4"],["/images/dl/16.png","431eca388a571f6ae2c97f355d4269ae"],["/images/dl/17.png","c785b250216adeb5bb3f7dd344e7e2f3"],["/images/dl/18.png","d0dd40f0001931557dafce3aa70e3f5a"],["/images/dl/19.png","e4aaac069b33a7fea0149cf0b220b2f3"],["/images/dl/2.png","488e19f06f5be0baa222ebc4ebf1f42f"],["/images/dl/20.png","4156882cdf4536bd465bf20630af6356"],["/images/dl/21.png","b215a29f6ecdd03485d9e0a45c9f786e"],["/images/dl/22.png","a96b71719979b2f64d394ecf26191dc1"],["/images/dl/23.png","049c7f3f8c8fb2b62f1ee23fffb1f94a"],["/images/dl/24.png","e311ddc1bc77c0069fc4c653d268f8de"],["/images/dl/25.png","2eabfc24c384e106ae088fa0d080e219"],["/images/dl/26.png","cb13ad3a876f65abfd9bedd5eab6d50d"],["/images/dl/27.png","a652a08f3b6e0b9b82a5556c26e15ea1"],["/images/dl/28.png","3726c0ea2c92a818dd385a8a9237187a"],["/images/dl/29.png","d202d133bd5e7142daf150ea2c300ee1"],["/images/dl/3.png","32643ac5d88e9288e6a91c545228f870"],["/images/dl/30.png","4a6eb0c7c5f7cae3430dd73266286610"],["/images/dl/31.png","230dd5d7b594b13641024ca7c16af9e6"],["/images/dl/32.png","bad29ccda756fa14816c2b7a3d5d60e1"],["/images/dl/33.png","6b47a20743481a7c84cafdddf7aa2b15"],["/images/dl/34.png","544f56c796819c8a2bd76e2008d73b3d"],["/images/dl/35.png","69a494d534a93002d5052f96d54458ea"],["/images/dl/36.png","c7cff050ff6232ad5827e4e0bca493c2"],["/images/dl/37.png","00861b87acf6f356ab7e36cc2f3b8f75"],["/images/dl/38.png","308794ff0c29eda49e3c9f7e72f193d6"],["/images/dl/39.png","031796e81c3dadb6d2c6521ecf824728"],["/images/dl/4.png","b13463143252da800adf2134fdcca283"],["/images/dl/40.png","9193fdaea78a9ecfb2ce346bc2245e62"],["/images/dl/41.png","6efe6e2ed3fa4763693fa7808675a717"],["/images/dl/42.png","e41671954c7e6efa4a80ed2827723a39"],["/images/dl/43.png","d616cae510f75ff0ba75532f13afb680"],["/images/dl/44.png","a1df61f0242f00b7b3dec380f2b82a5e"],["/images/dl/45.png","9880d436563d3e748d4a97219a932de0"],["/images/dl/46.png","ee3823c14cbbc0c4e719d8fa2b70284e"],["/images/dl/47.png","a9654809288507227ddf5091381bd52a"],["/images/dl/48.png","a7f47763bca3b758e0377e4eb3697014"],["/images/dl/49.png","c8b694fc337ffd2822a82ea078a7fd94"],["/images/dl/5.png","ccc04cbc94995b21ae682ed9a9b4b0e4"],["/images/dl/50.png","0b74840b70c5362adbb1ae4d831daa40"],["/images/dl/51.png","add48b535c67dd7ba2d89c2b47d62e4d"],["/images/dl/52.png","ebd47a5ef3557d1857288ea842ed846f"],["/images/dl/53.png","6543b1ebd8f9e1eee6867ac98c377656"],["/images/dl/54.png","e42c09127df542958d6790eb239e2703"],["/images/dl/55.png","0f3bb7248a6e465c0f04c44fd7102458"],["/images/dl/56.png","15ec6905fa793e164de60e8dfd016e50"],["/images/dl/57.png","3a1615a4dae148791518372dfca9684f"],["/images/dl/58.png","5babc414eadaabf475ea5310705d42da"],["/images/dl/59.png","de74751a92a1fa9d22241269545fa578"],["/images/dl/6.png","0c7b467b8c118601b3e4b72e8ee00009"],["/images/dl/60.png","92221b8c62fce1c98467d355237d2986"],["/images/dl/61.png","b77632cd591a92dbfd4cb3a2f3eb707e"],["/images/dl/62.png","f5eca88a4d1b4ff99462d6004037c0b1"],["/images/dl/63.png","2d596bc4776088dc2d7f12035cf9625b"],["/images/dl/64.png","0be91314f6ce792e335eea451fb432ac"],["/images/dl/65.png","cfb0302ad749c7ee33c3a4c0fd048cb3"],["/images/dl/66.png","99a4396798a3703de705d5ef583cc53c"],["/images/dl/67.png","c814ee1f17b1b6e023a2959ecea105f4"],["/images/dl/68.png","32e5647c3a3262d28abd2c801a2499b4"],["/images/dl/69.gif","6428cf505ac1e9e1cf462e1ec8fe9a68"],["/images/dl/7.png","1f98a655f5df7b72a03645ee48043dc3"],["/images/dl/70.gif","cb80c7a8c655585f38038c4876381722"],["/images/dl/71.png","26d9cc4df1edfe2c7ce2b3bec07fcf93"],["/images/dl/72.png","de5ad70ced9e378b87cc5cc3e5068ade"],["/images/dl/73.png","8704e85c81f02d3148f5013f928e622b"],["/images/dl/74.png","40148a094025824911637637e6f0a71b"],["/images/dl/75.gif","2cdd2ec54569879ca045e0ed090f34a5"],["/images/dl/76.gif","395aa82f1e59cf80e8e17a9209bc22f2"],["/images/dl/77.gif","510c9a35e6f332d4d042e3154a59355c"],["/images/dl/78.gif","8a63c07ac20ee5e5097b8a9e9327012a"],["/images/dl/79.gif","9e9a49afd76a80bda8a6362e6a32dc1c"],["/images/dl/8.png","58c486bb84f43765a4b1c0170b17ed3c"],["/images/dl/80.gif","4a87f84b588768c5b5fddb2b000b92d5"],["/images/dl/81.png","c6557ae392175f3284cff96ede632ca3"],["/images/dl/82.png","8c6e03a4ce27b1546860f1a4994ded2f"],["/images/dl/83.png","3230fe6ea57bf3bb56197b60c744873b"],["/images/dl/84.png","b32db2843c3da7a1434e07286a767202"],["/images/dl/85.png","aaaeb673c62631407bc0417bf30a2209"],["/images/dl/86.png","cc201aa344c97773b92d4a24a3eb4756"],["/images/dl/87.png","153a890f1412bea4542d568d2f071fc7"],["/images/dl/88.png","effc36ef946164373a8bf243961d88a1"],["/images/dl/89.png","2686299a083de7d34f0f4215884ca4a7"],["/images/dl/9.png","07509d765897a7512d5beb635d3c4179"],["/images/dl/90.png","a56a0f6071eb3fcdb76968b4a32d5e5c"],["/images/dl/91.png","6ee325d3906f10f2793fbb01e489930a"],["/images/dl/92.png","0c8d438c12bce0260b16cf270db56f0b"],["/images/dl/93.png","6c92ffc515ccbe08a5abd79a3cb80b9c"],["/images/dl/94.png","808edd0a07d8cbabf336dd9dca8d4a26"],["/images/dl/95.png","45f3b7701551fa7df5f9be047c75500a"],["/images/dl/96.png","9a3c4effe6fba0aae2fb580155c4c55d"],["/images/dl/97.png","bd2706173398f50c2831c4e192b9f352"],["/images/dl/98.png","37d39a650706f2df9b766fe478e52587"],["/images/dl/99.png","058d5dbc14ded7c21715436648e21181"],["/images/docker/1.png","052bebd4e60c59be51857684e5e6fc0c"],["/images/docker/2.png","28f04eea1e73e7c0e0c466756c9c2c62"],["/images/docker/3.png","82a26c321e81043540818baaea77eb38"],["/images/docker/4.png","367c99cdceb0f81b378c075904c88644"],["/images/docker/5.png","e414ffe973288941a51e9cde7d92bb71"],["/images/docker/6.png","d559cb65466a900edb0d7983917ec37c"],["/images/docker/7.png","ac71dea1600d19598053c5607e7975a1"],["/images/docker/8.png","d9b777921984636623864ec2b250e298"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/math/1.png","be08ac320a3fafd4b6cb9a2a820a3b42"],["/images/math/2.png","82c7788477186d13876fa2783fb31305"],["/images/math/3.png","c4dbdce9ea65b388f307e4c2b6701c7a"],["/images/ml/1.png","0614e4691064abbff74cb69212e2a466"],["/images/ml/10.png","ee1e7358cde8b8137ce684b0c4365e04"],["/images/ml/11.png","c86479f988d4dc6b87074724f42e35f7"],["/images/ml/12.png","35ff221fa6ca14c635bfef76cc5a2991"],["/images/ml/13.png","f1bc25e32ad10b0d7b0c9ede788a5b88"],["/images/ml/14.png","2f592eda3505117752f6719aba65edac"],["/images/ml/15.png","0c8117df94fa4c145e2c2943e2247ec0"],["/images/ml/16.png","5705759f62883d83028290a0933e5c86"],["/images/ml/17.png","eed841d914da17d258adc9852c83b745"],["/images/ml/18.png","7863315ccc29fb1c24e27d2a5fcd477c"],["/images/ml/19.png","e3307673fa4d5889a52012dff9c03ceb"],["/images/ml/2.png","9d72b6ab1efe7d92a0f75e376681e549"],["/images/ml/20.png","73daa252e5311ade27160a65cc61c9a7"],["/images/ml/21.png","2749400036f8bba7beaa0ab3224f5389"],["/images/ml/22.png","aadd1c4aa269c129958a013d84e42492"],["/images/ml/23.png","80937bc77f36a5d6310ddbde34c091ed"],["/images/ml/24.png","810369b827c1d376ae5a0e6bbf0c2761"],["/images/ml/25.png","8ba5410eb67aa3cb734596ab0b7abbf3"],["/images/ml/26.png","e702d97bf87a16ac98d9b96357a50224"],["/images/ml/27.png","eb5810d90beb005e0921b5bdce4278cb"],["/images/ml/28.png","daf6146665cd93ff43b7c0537d26931b"],["/images/ml/29.png","faf61ee7aef34289909db13712731ef5"],["/images/ml/3.png","05763899f89a3aec00df11ea2a7a976c"],["/images/ml/30.png","521f8749d93cc41c604307333b8ecb20"],["/images/ml/31.png","61e322d57e7a6468cbca48304ae94cd4"],["/images/ml/32.png","6ec323b582e8562c93c1d6640f4d807e"],["/images/ml/33.png","0d1cdd5ecbf216003f28746db2b33b6d"],["/images/ml/34.png","64b7033aec57515e301161d85f8e4e30"],["/images/ml/35.png","edf088702e0177920a94b3508bec7ec7"],["/images/ml/36.png","fb5a9ddea3a45786bdf11c415e147896"],["/images/ml/37.png","60914873dae6567b8e68ec45ec6b59dd"],["/images/ml/38.png","2b8b5cff6aa6292c46ac594c30027790"],["/images/ml/39.png","1d3d3d21aac91a1e4a2b16c45345d3b7"],["/images/ml/4.png","d1d10f45e987ea4af1c4b7086c5f745b"],["/images/ml/40.png","772e151cc0187377b8640b6769125b96"],["/images/ml/41.png","481ba1d4954007c7eb74aa89f44cc220"],["/images/ml/42.png","3b812196cfcc9fd92a8eae2eba443cfb"],["/images/ml/43.png","cd5f999f7915a1797b3a4c1bd1a63484"],["/images/ml/44.png","37eb471cb2476713b4491a3d747e8f5c"],["/images/ml/45.png","df3980f9a53928768f0949eab0dda0f6"],["/images/ml/46.png","d9a4bc126242de84d18bf1a616961bc3"],["/images/ml/47.png","ecc436ba7ba75ec5c422ecdd700219d6"],["/images/ml/48.png","a154e7896b59f7c4feb7fd9869350494"],["/images/ml/49.png","e9cc736869a7161cfefc7e1961c2d9aa"],["/images/ml/5.png","884a734410b3627a14981c481b27c583"],["/images/ml/50.png","6900e08fcd02c9a9bcac17b1c7d68fad"],["/images/ml/51.png","1ecd25e8788aac72f2f6d2440ebdccde"],["/images/ml/52.png","e8a96085b9487570772875b5f40c5a64"],["/images/ml/53.png","6ed613d5f1a4465a670ee7557dd29575"],["/images/ml/54.png","4fba1f8adf3b0bac8f6cd911016e97d9"],["/images/ml/55.png","f772762d3dc7b6927ca73e276bacd35c"],["/images/ml/56.png","20827caf527ef20652b21adb8e143e96"],["/images/ml/57.png","3bfb68f2234dfdb64aa5286d49a04f79"],["/images/ml/58.png","291a3424c7bff0afa585bfa7f09d67de"],["/images/ml/6.png","bbd2772718a23a1102b2201f78413d6a"],["/images/ml/7.png","c753cbfb65ed9638e82e5d0140028f82"],["/images/ml/8.png","0432f07c0cec1708d787798042156c21"],["/images/ml/9.png","2870280e8d3cedaee23818114a3cc02e"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/py/1.png","15b7ebe86935d45e017776bdd2e2e2d7"],["/images/py/10.png","30a401b3d7e75a8e237f0b805f583e4b"],["/images/py/11.png","59051625b36f69ecb18a6174a04b4368"],["/images/py/12.png","0738f0be3b1b72d1f66f6ec218d76675"],["/images/py/13.png","aabc1941943d19cd9c26b4c97b991415"],["/images/py/14.png","f09e867b7e33ab28bb509208efdd4928"],["/images/py/15.png","af9b8898e56514fa1c060e35d316066c"],["/images/py/16.png","ba5ec4e869bae45070e08f64788ecfbe"],["/images/py/17.png","82fe7ec533b75c5b9ed5e677f57eeaa9"],["/images/py/18.png","f651173cc0a9b4a8dcbdd495f73f882c"],["/images/py/19.png","db20315678cbcad8dd4f0d4bd72cb991"],["/images/py/2.png","589c0581b9b1da7112120f6a1f320fc3"],["/images/py/20.png","7670ef568945df192b81f0dc0f3d3f7f"],["/images/py/21.png","dffafdf930d818b664746a166cbb97bd"],["/images/py/22.png","e42a0fc9bec94fcd5207dd39ee46dc5f"],["/images/py/23.png","729ce256675ed1b5be435ba49e07d5fe"],["/images/py/24.png","3178aad732fb3a59fd6b9f0522d0c84e"],["/images/py/25.png","23dee90b7ba96de076a6bfbc7e9f9fc8"],["/images/py/26.png","5f27264c4cc5f1066086d4a6dafe68df"],["/images/py/27.png","2a30cc59399a637db839057f86d8c331"],["/images/py/28.png","f8ddf9a9bdfb76086c414c8561a7c756"],["/images/py/29.png","e6a08a36098bc987d119f57a9b273829"],["/images/py/3.png","46d73ca2a738a321e189608497c35b78"],["/images/py/30.png","aaad070ba988fc223be70b8be8d1a694"],["/images/py/31.png","2190bbadd784c89153ca10aacaa212d7"],["/images/py/32.png","4ebc4497b4ffff11e8ed5bb12a592cee"],["/images/py/33.png","a912118468c632d485625969bbe13b28"],["/images/py/34.png","8647e22d53f209413add44e80c22aaf0"],["/images/py/35.png","f98376dfc1b6b6885ce35e0e29831c12"],["/images/py/36.png","63b48f45c30f1f4274506b01ccd2aaae"],["/images/py/37.png","66a568168cb34596f4d2b61f701f0c41"],["/images/py/38.png","4ec3117c6e4660417f25420015680ef0"],["/images/py/39.png","1d31399d3f0ef916447931f88ce3398d"],["/images/py/4.png","beabd345ad64e22ed6750c13f7d35e90"],["/images/py/40.png","7b19dffc350d03bcf0de1c9477e93105"],["/images/py/41.png","593c6b113bc67e90339d819616bd1277"],["/images/py/42.png","20c75a35c4a4b07faf07daf9475ce1ff"],["/images/py/43.png","6c673a7ef4a3fc5ea9169a3fbd61f80e"],["/images/py/44.png","2334590711560011876de8c746b18604"],["/images/py/45.png","1441f705d69261450da8c5233ab02d0f"],["/images/py/46.png","616c6ab2d9c8eb007952017c7452d6d7"],["/images/py/47.png","004175268fd9029f7d09d1503670370f"],["/images/py/48.png","489330b4f78c3796b20042589808f8bd"],["/images/py/49.png","58a224ddfb5f57a12f48f3b4e3cbd0d0"],["/images/py/5.png","771c59a4e854122793a682f106fa08e5"],["/images/py/50.png","bfa901b645deced8dd1f9a8c26778f25"],["/images/py/51.png","2ffadace686f78c1414244d872d398fc"],["/images/py/52.png","2e3ec0d057d100e4e8ea5f0212e5c998"],["/images/py/53.png","17bb9979be17d13b90357c57139da462"],["/images/py/54.png","c23d69845f72a73fa3e2f1fb84771c56"],["/images/py/55.png","8535760aff99ceb4b556f7b97796d94c"],["/images/py/56.png","59ec9ba92d7ccd2c716228a1a8455ccb"],["/images/py/57.png","15bc87041ac4b1c7b3525b314fb7ef66"],["/images/py/58.png","5f94f3e9e9c6e104566bbb1b600e1fac"],["/images/py/59.png","bea377ca62ca75ab5d71c430b0355931"],["/images/py/6.png","833af6f79eead78a0888a42a24a7c35b"],["/images/py/60.png","ea730c5befdab80ca63dbcce82b3e4b9"],["/images/py/61.png","a6562d29f44817c17e7be41238aaad7b"],["/images/py/62.png","7d457435369276895070e3dd61c9462a"],["/images/py/63.png","91015ba12e25b0f895687581ce6bcb25"],["/images/py/64.png","20a15a250b09f9e4604ab3550b9700c3"],["/images/py/65.png","fe52bf0b2570638b2d22d72a27152e1c"],["/images/py/66.png","d3025a5e94f7bc525362d1f2e7745078"],["/images/py/67.png","2f7ca0e327c55df4f003210905190792"],["/images/py/68.png","6f7279dbb187720b89c66250c986e965"],["/images/py/69.png","a44c673d20cbcf45db156036bd983034"],["/images/py/7.png","d947a703f79658536cb2750914637ffa"],["/images/py/70.png","8a87dfa24f54a8547ef6826d3b6289f4"],["/images/py/8.png","20b867d8137281e9c3a40b802df75680"],["/images/py/9.png","e4639c570e7f7a04e90439456ad297c5"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/reptile/1.png","6d0aa92af42a4647977a03707bade702"],["/images/reptile/10.png","79f309da23b6b5b8b9effd25cc20abd9"],["/images/reptile/11.png","e60854e61ed69c6cccb12196fd947705"],["/images/reptile/12.png","ae4ac9f4065966955a3f31fa4b2292f3"],["/images/reptile/2.jpg","f722e57e21e3d76ebedb6667bfd44aed"],["/images/reptile/3.png","b4161135bc5a889337f36a3a0c20dc6f"],["/images/reptile/4.png","73b18e616e9134ffc1aaeb4ed1c29dfb"],["/images/reptile/5.png","318877d0e3a7337773fc301d6c5118eb"],["/images/reptile/6.png","f39ae0da0e1d343ec162f5db6ade59fc"],["/images/reptile/7.png","26491b8984ce6b22c76ebb6372f912f0"],["/images/reptile/8.png","15bdc5c257f7c109f184f9872c57b2d5"],["/images/reptile/9.png","92e8ffd5026d530e630b6ba90c23236f"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/tools/1.jpg","5bf773e6fdaf0c6573c4578ea232dc21"],["/images/wechatpay.jpg","07f0995337e2a1c8d2357e5659ec120b"],["/index.html","4d61205864c4e7735f4d0a6112b54b92"],["/js/src/affix.js","3efa67fdd05dbf188a1b6052f0f25eca"],["/js/src/algolia-search.js","0d122e361c6c273bb5118059a4b9a475"],["/js/src/bootstrap.js","947698f5f7ed0ebd86e62c44f32be598"],["/js/src/exturl.js","8129d9eb74223b5f1af7299b36f2afcc"],["/js/src/hook-duoshuo.js","c517ba518877d83343a04fbfbab26afa"],["/js/src/instantclick.min.js","995b94256c8c1d91c8b51993f0fa02c1"],["/js/src/js.cookie.js","36619a6a651af7c8ad45c4df3b43575f"],["/js/src/motion.js","bf86ca31d51b021e3422665221617f6a"],["/js/src/post-details.js","5f95f10bf6b337aaff8b7e7d840af85a"],["/js/src/schemes/pisces.js","15fa1df4843398a2800794adfb153e08"],["/js/src/scroll-cookie.js","01af7ee2a56c5f86c9b948cfd20cb3e3"],["/js/src/scrollspy.js","9d6bc60979bc61155ce7f3abfbac2059"],["/js/src/utils.js","e5c06a366990af3c6ecc7592ed2a84ee"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","4eaaec0f2ef1939c122c49a78b791c79"],["/lib/Han/dist/han.js","965e5d064ab387ec0cdae518704c53c0"],["/lib/Han/dist/han.min.css","ef0fb3d90e5360485d128c89f45131c3"],["/lib/Han/dist/han.min.js","2de92e13a09d04f2c0177dce10711d26"],["/lib/algolia-instant-search/instantsearch.min.css","12a7d767b3729d99f1ce629c4967bc51"],["/lib/algolia-instant-search/instantsearch.min.js","6b53c621c121d51bc134020ed02a3382"],["/lib/canvas-nest/canvas-nest.min.js","48bbd130a62adb9a77ba28270b3e94c2"],["/lib/canvas-ribbon/canvas-ribbon.js","0375805ac6bc00ab2c0d3a17664e6c99"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","5169a5f108ae6f0c6992f1f87e0698d8"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b0d343c842c7f779291d1d197a7abaf0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","81f2361aadfd4dbd90af48c21e952e66"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","9cf4c334449a5a88dd4b1c79f4332abb"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e3757e9ae2ec96a1d3d0da156b57bf86"],["/lib/fancybox/source/jquery.fancybox.css","b07b7b1a1cb859bc53199b5b2c300186"],["/lib/fancybox/source/jquery.fancybox.js","cbef11fea2eca3e920a8beba05cff46c"],["/lib/fancybox/source/jquery.fancybox.pack.js","ded29eb57dc0309df239cd4a2b47f120"],["/lib/fastclick/README.html","a268d8eeaba2949fddddd9223048b03b"],["/lib/fastclick/lib/fastclick.js","0cb7387221cddc6e7ea083c1fb8b307e"],["/lib/fastclick/lib/fastclick.min.js","5844e00edaccb41fe2aad0a0d0e85f3b"],["/lib/font-awesome/css/font-awesome.css","dc34c3699f8704dbb68787deb5c84919"],["/lib/font-awesome/css/font-awesome.min.css","dc34c3699f8704dbb68787deb5c84919"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","4dac98dffd443159acf73bbaec5b2522"],["/lib/jquery_lazyload/CONTRIBUTING.html","c04ff4377cc6ab9aa0c7f397e2d479f3"],["/lib/jquery_lazyload/README.html","ba900c8701f418c98e6000ab0ff66c25"],["/lib/jquery_lazyload/jquery.lazyload.js","29c85be8d3bf47894d340033fef0993d"],["/lib/jquery_lazyload/jquery.scrollstop.js","24435c178f65594a39c6e876583055ed"],["/lib/needsharebutton/font-embedded.css","2319a1e29b3518274f14d52da5bb6ac5"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","1b18b711d41f38778fcf8299aa5141a6"],["/lib/pace/pace-theme-barber-shop.min.css","02b10c039039807c7ec59314183862b6"],["/lib/pace/pace-theme-big-counter.min.css","9ef536c60ccb11413270cec41da9da8b"],["/lib/pace/pace-theme-bounce.min.css","861bb11b447875b105e9ebbedb765277"],["/lib/pace/pace-theme-center-atom.min.css","d9beb877c5b51b069ca6de2bb6856868"],["/lib/pace/pace-theme-center-circle.min.css","638fc88f2b83c1fc40c19b4eb81c15a9"],["/lib/pace/pace-theme-center-radar.min.css","0c807be5da9be10cccb1af10fc202f92"],["/lib/pace/pace-theme-center-simple.min.css","19343df8726c01e888d41d5252d47891"],["/lib/pace/pace-theme-corner-indicator.min.css","0a3b064b654cd554c8da68df601a1afe"],["/lib/pace/pace-theme-fill-left.min.css","2185d46c8f0f86e5edf1079d67284908"],["/lib/pace/pace-theme-flash.min.css","e60091129c1693cbbbc9939f03931d6d"],["/lib/pace/pace-theme-loading-bar.min.css","3b464113205ea526f8bc453544de87c8"],["/lib/pace/pace-theme-mac-osx.min.css","7b55aa365de75e549a0d0a5acdcaa634"],["/lib/pace/pace-theme-minimal.min.css","660f526161d1ce4e489f9c0ae4adab4b"],["/lib/pace/pace.min.js","bd273a8c1a1c4143e8a09155e8dde7d9"],["/lib/three/canvas_lines.min.js","5ecd114f090ed43613b39e150065b2bf"],["/lib/three/canvas_sphere.min.js","fa715a7a7e34ca20d2d56b4f8798db46"],["/lib/three/three-waves.min.js","839cc20e9fa5731d43ae57851c844c2d"],["/lib/three/three.min.js","7b6e5cf90f720ae6c515514db2199ec6"],["/lib/ua-parser-js/dist/ua-parser.min.js","93f4fdfd2657256a66c80184f4d91e19"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a0f7f140a3e5f48e0326a7bea0d6efcc"],["/lib/velocity/velocity.js","d07c3a5f9d5d0f29546870effd24d238"],["/lib/velocity/velocity.min.js","dce4751b08992c0a1940be5b6c3b921a"],["/lib/velocity/velocity.ui.js","80dc318077b229c78c15f9877106ad40"],["/lib/velocity/velocity.ui.min.js","8096e19fde6756d2e3eec5a7e08f9f6a"],["/page/10/index.html","e441f17a95a4808202406b4f6278f246"],["/page/11/index.html","8b9069915df2e5da74de675e18688bb6"],["/page/2/index.html","08de20fbd679c1afcd53a5df57d25dd1"],["/page/3/index.html","d716b6b6a77ab1170254453903d78ab6"],["/page/4/index.html","b22dbeae89ec31a1ff1c6da9fa044af7"],["/page/5/index.html","8615b5755bffeab7f416a5230e8b1cb9"],["/page/6/index.html","a90f5f11fc2f3f82f9ecc0f87bbd576f"],["/page/7/index.html","6d987ed003f67e254d88b8fb2d670eb5"],["/page/8/index.html","1cb64586078aafd7b9f17228b2026336"],["/page/9/index.html","21622023e53f144d6e68a91c90af097b"],["/sw-register.js","e067604a1d38a35dc2a87d198fbb7bc1"],["/tags/CNN/index.html","80a7a13b9ef538966aba3581b41675fc"],["/tags/DNN/index.html","d8aba9a26b3ce7343691b3e97630068b"],["/tags/DeepLearning/index.html","10ae260df653179fb80e906308b4a5a4"],["/tags/DeepLearning/page/2/index.html","11780cb00388be2a7e48eadb7de1d076"],["/tags/DeepLearning/page/3/index.html","3386205e359df3a309b10612c6a6bf7d"],["/tags/DeepLearning/page/4/index.html","99536565b449fdff278670347ebfd68a"],["/tags/DeepLearning/page/5/index.html","0069199db4c44c6d691e53e1e7607d62"],["/tags/EM/index.html","e932ef4f6b98b9a3a5204cf1818aa3a6"],["/tags/GAN/index.html","6924a117e77db8f3051b615530f3e88f"],["/tags/GIT运用/index.html","e90c61186d5a4f55d50cfa28d14b0a5c"],["/tags/Keras/index.html","c5cc7dcda8044cc303b56e0bb302dbd7"],["/tags/MachineLearning/index.html","c43ff962262e9e95330ed65a2650d190"],["/tags/Python/index.html","7f0e7429caad9a8c663baf745545b1d7"],["/tags/Python/page/2/index.html","4561844559e340707c8ff62095810e91"],["/tags/Python基础/index.html","ad90224256b7c71a3ffa4b4fb03336e4"],["/tags/RNN/index.html","8eeafdd5d8f3f1936adfb23072dae90b"],["/tags/TensorFlow/index.html","32765be6851949a32a2f7651b55c1046"],["/tags/TensorFlow/page/2/index.html","4baa0db4e7390dada82ccf59301f4846"],["/tags/TensorFlow/page/3/index.html","158eb086b68d4f4c051b9359422ef6a9"],["/tags/anaconda/index.html","11c7737e9c0763976a481035ed201e97"],["/tags/docker/index.html","26e1c6098a356909c7c5140038dc64a7"],["/tags/git/index.html","784b5a88d7b3d7917877be88e39791ec"],["/tags/index.html","387b32a6fccac047a30d2dd8e819309c"],["/tags/ios/index.html","2f0f0d7b80ddb91e2a2fa01a53dd79c7"],["/tags/linux/index.html","77978d5bc0ef305cefcbcc5af366918f"],["/tags/markdown/index.html","34b6aa9f7fe5a7fa15c46973eaac5ba5"],["/tags/network/index.html","b594cc9e5581be6d8e955b439d1088a5"],["/tags/opencv/index.html","cd8d45a1166b68bc5262837ec967d47d"],["/tags/pip/index.html","bac29a0453defd0e021e3ad677962935"],["/tags/pycharm/index.html","6c88f88ca93b1c01d0ddaff9fc51bc89"],["/tags/svm/index.html","c11b62cb2954c9be84a2aa7370a5b761"],["/tags/ubuntu/index.html","2b100a98633b43b31f9a9dea776c7fc5"],["/tags/优化算法/index.html","23fb9ed901c6c35870991551d662fbe4"],["/tags/决策树/index.html","b7d19f9351b017dab227f6f9fbd1af6c"],["/tags/反向传播/index.html","5c80cd6ebbd4e96f80d78a916bdb3ac9"],["/tags/声卡/index.html","fce4cd2c2a58983f6fb37509abd5e4a4"],["/tags/安装/index.html","4aa779c70eb6bf7ad609cec13afcb106"],["/tags/开发工具/index.html","b303f06251dc30467c2d8e030852f9b3"],["/tags/开机/index.html","90c583119140fa2f054f72a57393fcda"],["/tags/朴素贝叶斯/index.html","fb56680e84f824637c79064b43d85aa9"],["/tags/核函数/index.html","3561125e4cf9a8695dc6e746374e83c3"],["/tags/梯度下降/index.html","bc953cbce3f2d121ea4dad9ec3228add"],["/tags/神经网络/index.html","27950dbd87d72b745737bf23053eca41"],["/tags/线性回归/index.html","e636f0d2c4e8f732b81d1be001a870f2"],["/tags/聚类/index.html","53ef33c732269d8c38b059a7b1fa5167"],["/tags/自动化/index.html","9fcc34b02feddd8eed095fa472a51a6c"],["/tags/贝叶斯网络/index.html","ab80ebe0287d3787d8b24ac8213d199b"],["/tags/软间隔和正则化/index.html","28dc2d105761c2dc5a8e01359e226f95"],["/tags/逻辑回归/index.html","48d7b5d341112e7f46e0aacd5ddc5bd5"],["/tags/随机森林/index.html","b72d90e959af99bf9ee13acf4519220e"]];
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
