/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/08/25/2018-07-20-raspberry-Internet/index.html","81ac80f1627a27c9216498798c2eaa14"],["/2015/08/25/2018-07-20-raspberry-on/index.html","bcf8722f65bd99cce9b21990d6822fe4"],["/2015/08/25/2018-07-20-raspberry-usb/index.html","e68730788e3feecb2eb3de3f3e9c1d05"],["/2016/07/13/2016-07-13-GitTutorial/index.html","993f1bb6b3387ac571df9b5381cef1a9"],["/2016/08/04/2016-08-04-PythonTestAutomationiOS/index.html","4c5f140a2a47722e0b25bef012599eb2"],["/2016/11/20/2016-11-20-markdownTool/index.html","b66dcc596ecc7d84e371b54c1335b746"],["/2016/11/20/2016-11-20-neural_networks_using_TensorFlow/index.html","4ce68600617a9ecc17a25d074e0e661f"],["/2018/07/05/2016-07-05-MachineLearning_introduce/index.html","26fe434011ce5d4323f4e745efc010a2"],["/2018/07/21/2018-07-21-ml-linearRegressionL1L2/index.html","d95d36e36ea9a4c36aef366447f54bba"],["/2018/07/23/2018-07-23-ml-DecisionTree/index.html","1996a80dc885f8c14e427632af822ce7"],["/2018/07/23/2018-07-23-ml-logisticRegression/index.html","02e0b713c9fb478be73a5f67f238e8e6"],["/2018/07/24/2018-07-24-arithmetic-gradientDescent/index.html","19b5d1003025e43b805c776007d9d0d4"],["/2018/07/25/2018-07-25-ml-svm/index.html","31d345cb5ea5b07d5e8901ce955a49c9"],["/2018/07/26/2018-07-26-ml-svm-L1/index.html","d77be4471c3e71d7ed60e22aabc4bfeb"],["/2018/07/26/2018-07-26-ml-svm-kernel/index.html","b190bc032003dc7bda512e766e056aad"],["/2018/07/30/2018-07-29-ml-clustering/index.html","07781085b0e2d492c2db223a003d2c0a"],["/2018/07/31/2018-07-31-ml-em/index.html","d59e960a78ff5dbd139434da8c1d089b"],["/2018/08/01/2018-08-01-ml-NB/index.html","103bbfc47d82623f2b0dcdf4af2091e8"],["/2018/08/02/2018-08-02-ml-NB-network/index.html","3fa173ffec43adc2397c6e89710c84a1"],["/2018/08/08/2018-08-08-DL-introduction/index.html","39c06eba2f4c95fdae9202591811c793"],["/2018/08/09/2018-08-09-TensorFlow-windows/index.html","0f36dc8226a7ec65d748e136cf4ff9da"],["/2018/08/10/2018-08-09-TensorFlow-ubuntu/index.html","1e93b1358746b98a5a05f462e536c714"],["/2018/08/11/2018-08-11-TensorFlow-Virtualenv/index.html","9d0e39022e9942c82e8a547b29f8a13e"],["/2018/08/13/2018-08-13-TensorFlow-course/index.html","35aca9cad2c37a7721fe48ba731721e7"],["/2018/08/14/2018-08-14-DL-method/index.html","e8784e212b497ff7871a8fecdd10aff3"],["/2018/08/15/2018-08-15-DL-back-propagation-python/index.html","40c20c367728ca5ec14d9ef17daeb833"],["/2018/08/15/2018-08-15-DL-back-propagation/index.html","c8e5325ed1b79ee8aad58b449d181639"],["/2018/08/16/2018-08-16-DL-DNN-python/index.html","e73c743592e49db428544326e6994d8c"],["/2018/08/21/2018-08-21-DL-CNN/index.html","c629f40641835f91a2e40d379faaa12e"],["/2018/08/22/2018-08-22-CNN-back-propagation/index.html","1dd41975ba2b8a2c353ec2b774eabe26"],["/2018/08/23/2018-08-23-DL-CNN-python/index.html","0aee98ab0745b3f7d3d949e286fcdaec"],["/2018/08/24/2018-08-24-DL-CNN-LeNet/index.html","6f7ebf9de3077b942ce766c2c87b3baf"],["/2018/08/25/2018-08-25-DL-CNN-AlexNet/index.html","01f5ff8efb9565e5ad884021a41c20b4"],["/2018/08/27/2018-08-27-DL-RNN/index.html","8632787a59d7eb0f18fda22148c76a24"],["/2018/08/27/2018-08-27-TensorFlow-keras/index.html","cb2b2fc92687304c31ff58a23fabdd79"],["/2018/08/27/2018-08-27-TensorFlow-layer/index.html","e61f668f641de8eeb7cc236485aa7382"],["/2018/08/27/2018-08-27-TensorFlow-native/index.html","705908dbbd440a205145b6a17c5a173e"],["/2018/08/27/2018-08-27-TensorFlow-slim/index.html","53b458604b20618ee96c6cf2eec0553d"],["/2018/08/29/2018-08-29-DL-RNN-BPTT/index.html","ca059a84768a7764c9de6bd43e7d86e7"],["/2018/08/29/2018-08-29-DL-RNN-hand/index.html","9df301b64bcbb649f062b9de58cb70d6"],["/2018/08/30/2018-08-30-DL-RNN-LSTM/index.html","7bd4af5caf8e25b9ce3118ac01a607c1"],["/2018/08/31/2018-08-31-TensorFlow-RNN/index.html","af088565417245581f4998c8126fd976"],["/2018/09/01/2018-09-01-DL-GAN/index.html","e993a8c89f7275a09d9508b9292bce18"],["/2018/09/03/2018-09-03-TensorFlow-GAN/index.html","32cb4872e6c987e943c8786ca540d51f"],["/2018/09/04/2018-09-04-DL-DCGAN/index.html","2a40ceb1b0dd83faeed46d7f9939f1c0"],["/2018/09/04/2018-09-04-TensorFlow-DCGAN/index.html","f934777b17f13c0ba4e5a6b00e641ed2"],["/2018/09/04/2018-09-04-TensorFlow-save-restore/index.html","d6891c8c33aaab887225c726231098ec"],["/2018/09/07/2018-09-07-TensorFlow-cifar-network/index.html","9acedcc516f83ceaa14467ef489c8503"],["/2018/09/07/2018-09-07-TensorFlow-cifar-train/index.html","d91fa65a7c905c88024c2d42aee492a4"],["/2018/09/07/2018-09-07-TensorFlow-cifar/index.html","497109368c8f6503093da51ac88ef7a7"],["/2018/09/07/2018-09-07-TensorFlow-visualization/index.html","659fe1c961253f1dabef0ac2a22ce2fb"],["/2018/09/07/2018-09-07-keras-cifar/index.html","7fc545258b36ad777f13bf6b291bc639"],["/2018/09/15/2018-09-15-Pytorch-AlexNet/index.html","0f85944ba9eb278c7ab2d64a46888467"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-test/index.html","7d41c727c2c5960f582bfd378f8fc7a1"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-train/index.html","c0efa17c0ffa0b32a7a29e12b67dd795"],["/2018/09/15/2018-09-15-Pytorch-DenseNet/index.html","ba82089250061da0b7ca6924e320df68"],["/2018/09/15/2018-09-15-Pytorch-GoogleNet/index.html","30e9fb03520d95d8ed21842f985687b9"],["/2018/09/15/2018-09-15-Pytorch-LeNet/index.html","3abd5a9e3978163e52262364583f418a"],["/2018/09/15/2018-09-15-Pytorch-ResNet/index.html","426e9871bfbb08e8408e9e6e025c5de1"],["/2018/09/15/2018-09-15-Pytorch-ResNextNet/index.html","d1f16fe9949e98c6846592034d90fae9"],["/2018/09/15/2018-09-15-Pytorch-VGGNet/index.html","83694a9505886e81a89d122fa720688e"],["/2018/09/15/2018-09-15-Pytorch-cifar10-data/index.html","8f4f72fffe33e39472d2b051bd52b31f"],["/2018/10/09/2018-10-09-pip/index.html","30cc5228446f68897cf82807918f24eb"],["/2018/10/09/2018-10-09-tensorflow-question/index.html","c7ec27df91180b659d793627dd319b56"],["/2018/10/15/2018-10-15-source/index.html","0ad49d2e90734daf7b9533eaa4d2ef49"],["/2018/10/26/2018-10-26-openCV-geometry/index.html","cbceaaa63af1f18ea6c42ffbfebd58eb"],["/2018/10/26/2018-10-26-openCV-install/index.html","fd285b6f04c6d2a324aa62276d5dbec3"],["/2018/10/26/2018-10-26-openCV-special/index.html","82b962e512c4a989cb0afd44e0dcbc2d"],["/2018/10/27/2018-10-27-openCV-face/index.html","f25be4ad52cac3915519dc2bd1b9654f"],["/2018/10/27/2018-10-27-openCV-svm-hog/index.html","5347ecd6666cda49cd0d23006ae5a23f"],["/2018/10/27/2018-10-27-openCV-svm/index.html","87a35d2330e3df6397360263e2cd0502"],["/2018/10/27/2018-10-27-openCV-video/index.html","f35818306b302b8970abcad36c4e9fb0"],["/2018/10/27/2018-10-27-openCV-whitening/index.html","726f3db899bab1a3e9171757c5534ce2"],["/2018/10/29/2018-10-29-docker-TensorFlow-cpu/index.html","ed8c32936fcdfd8e53fb9debe9af1615"],["/2018/10/29/2018-10-29-docker-install-win10/index.html","b8a39f23d34fa5188fa66c4e0fa2bf5e"],["/2018/10/29/2018-10-29-docker-install/index.html","5640a88b93c9ac5921f23ca57d662c06"],["/2018/10/29/2018-10-29-docker-source/index.html","db6cecbd217e09d178aed738cafaeb90"],["/2018/10/29/2018-10-29-docker-speed/index.html","52094fe320dc9bd4a28ca902a2f3396c"],["/2018/10/29/2018-10-29-docker-vessel/index.html","133cc24d86986242ece0e03cadb0ae54"],["/2018/11/08/2018-11-8-linux-vim/index.html","188599db7184b1a2734107bd68d4a8ee"],["/2018/11/08/2018-11-8-linux/index.html","129fb9bc0224972a12c0a15a11e0a01b"],["/2018/11/09/2018-11-9-anaconda-ubuntu/index.html","1d35259bc248df17a7f42aa2ec8b4396"],["/2018/11/09/2018-11-9-anaconda-windows/index.html","f4440a4aa659c158603e4933675927d0"],["/2018/11/19/2018-11-19-git/index.html","1012445b158043f344c683fb8e659d43"],["/2018/11/21/2018-11-21-python-date/index.html","001de8435df66a5da083632ea86c19f2"],["/2018/11/21/2018-11-21-python-encryption/index.html","6809a8cea823929a78d13dd3d6822259"],["/2018/11/21/2018-11-21-python-log/index.html","42f835fb330a632c4379f5eae30f01f0"],["/2018/11/21/2018-11-21-python-pillow/index.html","151513fc2ac4dd3b6048c3aac6a8dc4b"],["/2018/11/21/2018-11-21-reptile-beautifulsoup4/index.html","7c0aa309dcfef1f983325f270b6d14b0"],["/2018/11/21/2018-11-21-reptile-http/index.html","f63325a84658541ee566233ef45ed871"],["/2018/11/21/2018-11-21-reptile-request/index.html","bb6a2504ff1c0bf4f6e3109c602f290e"],["/2018/11/21/2018-11-21-reptile-tcp-ip/index.html","07528e04a25b6b7f3a40cc296f089b69"],["/2018/11/21/2018-11-21-reptile-urllib/index.html","ebd3c575b73424b9e5324cdb95d557f6"],["/2018/11/21/2018-11-21-reptile-xml/index.html","80e8faad008feeb77049c4e78733d590"],["/2018/11/22/2016-06-02-Develop_Tool/index.html","3bb001df6c9699a569eb74e14b4ee681"],["/2018/11/22/2018-07-20-ml-linearRegression/index.html","3f566437c52a08baa658232f7392c9f0"],["/2018/11/22/2018-07-21-ml-linearRegression-python/index.html","fc6faeab822a81c2ccf31a5cab40670b"],["/2018/12/01/2018-12-01-python-numerical-sequence/index.html","097e8a3e0e75cf9a7851bd58d6a7f6f1"],["/2018/12/08/2018-12-8-python-sequence/index.html","6597062357ce1613c5b7c50cc8b549ea"],["/2018/12/09/2018-12-8-python-output/index.html","ac45ea3cfbf02f4261e0f8eb8784f69b"],["/2018/12/11/2018-12-11-python-dict-set/index.html","a578d6727391047da545de4e6574eb6f"],["/2018/12/12/2018-12-12-python-if-while/index.html","96b2ee271f6aa17cf4a5e4965ffd2f74"],["/2018/12/12/2018-12-13-python-main/index.html","f944d14fe653ecb4f2a2a46ec2ead43d"],["/2018/12/13/2018-09-16-html-readme/index.html","acf075409fbe2f97bf469afc73f59635"],["/2018/12/13/2018-09-17-html-title/index.html","3ce843f147da9c54c40c7563aa055bc0"],["/2018/12/13/2018-09-18-html-br/index.html","67cb750a1da61279eb4e4d6f569b05fe"],["/2018/12/13/2018-09-19-html-div/index.html","23e916d9f16331e552935117831d6c15"],["/2018/12/13/2018-09-20-html-img/index.html","eda93106b0368df59019d680a536b0c3"],["/2018/12/13/2018-09-21-html-URL/index.html","98d2633c6dd6a4d612db18a2ca1bef09"],["/2018/12/13/2018-09-22-html-list/index.html","c9c8ca420a3a3be90684e3eff8a5f995"],["/2018/12/13/2018-09-23-html-table/index.html","05169c1270cf794c21de8e7524aa534f"],["/2018/12/13/2018-09-24-html-form/index.html","e0b34d1a5c175f7d01bf0e6614f88f5c"],["/2018/12/13/2018-09-25-html-iframe/index.html","06af41b94a2c905a02d47c63328b21f2"],["/2018/12/14/2018-12-14-python-function/index.html","cdf3425980d7ea64a40bf4ea88549968"],["/2018/12/14/2018-12-15-python-class/index.html","a749222f164023647488c5f4078a0164"],["/2018/12/14/2018-12-16-python-magic/index.html","7eeb7f03cde97a6af82cda48c6fb5399"],["/2018/12/19/2018-12-17-python-@/index.html","d8d4035ab395b99dbe28d89a3df18937"],["/2018/12/19/2018-12-18-python-file/index.html","c8907ddf1e631c96522f601c297a4c78"],["/2018/12/19/2018-12-19-python-error/index.html","702c030cf66643ee6d5862245bb7a2af"],["/about/index.html","3e33c40ca819fedb99aa6f19014a331c"],["/archives/2015/08/index.html","dbbe83afb73f08ac1f66cad49287e592"],["/archives/2015/index.html","7f4022b51c253a8aa6213d25fa8a2c73"],["/archives/2016/07/index.html","edbf472f9f625aa5cc346cb3ef935905"],["/archives/2016/08/index.html","9fc41f7f3e322516d07da34835c98ac7"],["/archives/2016/11/index.html","1f8e42585afc58f121c2d07575c44c7f"],["/archives/2016/index.html","52b7be47fa2ee2925bef1ed295b22138"],["/archives/2018/07/index.html","840cf67f41b654fa1b1644f544ef69ec"],["/archives/2018/08/index.html","000625e0711300343628c12bb24a79dd"],["/archives/2018/08/page/2/index.html","f055d6bfa77476208ec9f171ae1d35d2"],["/archives/2018/08/page/3/index.html","66fd330a95610faec5b14bcac39580e0"],["/archives/2018/09/index.html","f251867c62725f574515b7fb5f9638b6"],["/archives/2018/09/page/2/index.html","1f1eea93fed08a1bfc4badece30a0340"],["/archives/2018/10/index.html","c6bd1aa55bbbefe6722d8439ed8cca57"],["/archives/2018/10/page/2/index.html","9a8ec308e675cc5e8157ed967fb1dc1b"],["/archives/2018/11/index.html","f5f119a80c0ec21d90ba476e97e00a34"],["/archives/2018/11/page/2/index.html","71558af419042090446d449aaeb14607"],["/archives/2018/12/index.html","a1ba40a68e8a634ea33baf27e2d748ad"],["/archives/2018/12/page/2/index.html","97307d150515e66a327c1ac7b9b45349"],["/archives/2018/12/page/3/index.html","2ffb890a52c9df7fcdce35ff01058bf8"],["/archives/2018/index.html","acb5a02d5117e66b4426a8f5d712bb71"],["/archives/2018/page/10/index.html","5224f236fcc20def092980accabdc919"],["/archives/2018/page/11/index.html","ad7345fd8b22890af7d53fa9615851af"],["/archives/2018/page/12/index.html","e87e1e8b1e7fad87412038a1f7735fac"],["/archives/2018/page/2/index.html","4e76325555f00625ada201b9b4f3e474"],["/archives/2018/page/3/index.html","cd918d75b52d607178633d17f22bc363"],["/archives/2018/page/4/index.html","4de6c9a06951bfe8d63386b13781a16d"],["/archives/2018/page/5/index.html","69ce8d50a57d8d07dd010b007a75cf3a"],["/archives/2018/page/6/index.html","1639f5e83a69e0076029055800aac9da"],["/archives/2018/page/7/index.html","d26b85f2e0f73144c7815f5b87af7834"],["/archives/2018/page/8/index.html","35a4748526f112493b04cf26d7c9070f"],["/archives/2018/page/9/index.html","af2959001b28ec7d7d2a0db25a1e20ec"],["/archives/index.html","fccbb352c74fb8d03e5226ff1f36bc51"],["/archives/page/10/index.html","237cf0434588a3ccb20494c409bfbd92"],["/archives/page/11/index.html","781293c18a1334e7c16a5069f2da7f05"],["/archives/page/12/index.html","d508e19020dcf96ddc419e199365e9f9"],["/archives/page/2/index.html","66760f6a9cbfc6309ac57ec30d025e08"],["/archives/page/3/index.html","f3d4c4c96c03d8babacc5928d28bd0c4"],["/archives/page/4/index.html","c5d971970c5884919ba0b8a0f33528c0"],["/archives/page/5/index.html","6068da0f0fa7ee860a5249ea7dc0eb6d"],["/archives/page/6/index.html","2268d7f541aeca9ef23e7f0817357af3"],["/archives/page/7/index.html","3b01e2cc0df79cf88b5d33ce16b68d94"],["/archives/page/8/index.html","c0e84241daede1eb9a4c1c6b0de5195c"],["/archives/page/9/index.html","1bec7fca07cf4540b5bb917f56018870"],["/categories/Docker/index.html","a3436400532657b8d68484d521568c6d"],["/categories/HTML/index.html","f8776fbf179953ef391ef9f44b243cb0"],["/categories/LINUX/index.html","95b1c3423df95c8d5e82aa07f84c2157"],["/categories/Python/index.html","c436ae10e0561f7ca29aeb6428e10f1f"],["/categories/Python/page/2/index.html","1ab7c227e620c6b8f1f9d39314f3fde1"],["/categories/Python/page/3/index.html","7727744b7e6919f5bcb1eede68073e9c"],["/categories/index.html","ab3145ce6621dfffe5cd598fcfb2e088"],["/categories/pytorch/index.html","c46bde6b35a4b1da4db254d2db214dea"],["/categories/tensorflow/index.html","ab03a771e5260b6f17099dae5b0cc083"],["/categories/工具/index.html","5561e8916449bb582a8902ef3bce9421"],["/categories/开发工具/index.html","2c76ee2023694b1d0dc6ac8a54f53fa9"],["/categories/机器学习/index.html","0b5d019302c62e3f578672793a4feb7c"],["/categories/机器学习/page/2/index.html","948add41bcea95674151ad6d14cf0f1b"],["/categories/树莓派/index.html","9124a56f04b79386d37a8cfc11c96801"],["/categories/深度学习/index.html","ef9b2992bf516f989803a25c410a9cf5"],["/categories/深度学习/page/2/index.html","53bd16f961af4d328a825a2e2fcd6a11"],["/categories/深度学习/page/3/index.html","f9b27560a0227a51ffb7c1c61818bf51"],["/categories/深度学习/page/4/index.html","07b46ad55f278ccd8bacc9ecf75466a5"],["/categories/算法/index.html","84bf2444ed5672242b48772dddb3fdd1"],["/categories/计算机视觉/index.html","81abde34479f42435bb997c51bb42a55"],["/css/main.css","1343171c13c7a3f3e428fa4f2b3289bf"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","a80879cd6eb38ea4678e995e91c48298"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8ee39bf6fed055723e7e4d5de051af42"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/cv/1.png","9f4f5f49612d747ea7e2af9511bf81d8"],["/images/cv/10.png","64042888a4a3f3a4eb0fa61132ec4d2f"],["/images/cv/11.png","a7d130d884954da81b5cb0bb6ec3bc36"],["/images/cv/12.png","78897d4a1ee5b035a6c1fca275d6ee5f"],["/images/cv/13.png","5bddd0353cbbe6bba6397722208f71f0"],["/images/cv/14.png","84703e200ba7bd4c81b00bdd284e995a"],["/images/cv/15.png","9e2fd155d3d155ad7929da9e6ff173f4"],["/images/cv/16.png","11fc9d7abf8eab9eabd3b1b634972df1"],["/images/cv/17.png","4a033e9738210c148a2861e2a595195d"],["/images/cv/18.png","28fef5c46c2f422225f0c6784a0c5134"],["/images/cv/19.png","6f9bf406e55081a45f2d4a7694105aa8"],["/images/cv/2.png","31c2a99f54755c697a66fd612088d5d5"],["/images/cv/20.png","3c583b642ab32b3f0e8c25d702db84e7"],["/images/cv/21.png","a566537a8176f5ad3aefb0a4e3d3a28c"],["/images/cv/22.png","1dbefbc4faf1d6d1667d75e5a6e0ad4c"],["/images/cv/23.png","a19339ed91763c182a8876008b6a65b6"],["/images/cv/24.png","d7b6fbd2e71114ace115874caa3234d8"],["/images/cv/25.png","5d8679bb4738e48ae60291c204fb082b"],["/images/cv/26.png","a621210387b76992c71e377e5b3e787d"],["/images/cv/27.png","cc070ae570b8301c7e48511fd03606a4"],["/images/cv/28.png","19234927e77a2e573d1fcd36c6ab377a"],["/images/cv/29.png","981dc034de4ca4b6e734d1a54783f9c9"],["/images/cv/3.png","e4b7d480e78d5d0c4c6a14fb31b0ed5c"],["/images/cv/30.png","89a24fa0d194fd189e619e5399bc2556"],["/images/cv/31.png","3ebb39656dbc7ff3fe0d53e61edfca4f"],["/images/cv/32.png","9eaf042f7520f23a2c7298f55c0daa84"],["/images/cv/33.png","74898282f2a1f9cb206bcfbf15676aab"],["/images/cv/34.png","0131081dd3bb72e8c15ccabbc5a181b4"],["/images/cv/35.png","8fa06daf89516d71037ad8ad5466430d"],["/images/cv/36.png","6f9bdb37ded9320389993be28956612b"],["/images/cv/37.png","e2d8710a8d1be82ba5c171404a6eeb3c"],["/images/cv/38.png","0fbcf55535e125c43eaaf142a7c16084"],["/images/cv/39.png","0f17b9745c0ee7185f3408ff3e75f6d7"],["/images/cv/4.png","b55154238e33764873083b8463030d3a"],["/images/cv/40.png","352064971be0635581af1446a20bede1"],["/images/cv/41.png","482b4b502b236b800a2e609b273fc479"],["/images/cv/42.png","54f1a474233dedf7ee3fc20c56d23be3"],["/images/cv/43.png","f315e6c996c7f06ace53f7fee13aba7f"],["/images/cv/44.png","d88e6c82ebcf85e6332a5ff18f1d6748"],["/images/cv/45.png","546d355afb836ccafb1dbf1ec6e58c2b"],["/images/cv/46.png","e78e4d34afd63907c64e342d2dd56500"],["/images/cv/47.png","0355f524fce034d2b1d9e49d15f5acf2"],["/images/cv/48.png","0890f1471e76361456983ba205a7323d"],["/images/cv/5.png","eecb4a7bba3f07b8e3025585e7752527"],["/images/cv/6.png","834ccb9069233764f549780478fcf409"],["/images/cv/7.png","61b35bb3b9b78a44a617be9dbbdbddd5"],["/images/cv/8.png","57728a4eef354a0aed3698ad06659e92"],["/images/cv/9.png","60933d0b322df2c82963159b02f716ca"],["/images/dl/1.png","b2d61d37b640c75770a86cf1e89173e0"],["/images/dl/10.png","24f2fa5c727818fc48bf3a6f8068ee58"],["/images/dl/100.png","000f1c2ee2bb7adee780317771fc1178"],["/images/dl/101.png","12d112acec2d7f48e095a61620034ec6"],["/images/dl/102.png","8109c56796810451a8d889b964548a7a"],["/images/dl/103.png","15385609e43d95f81dc4e63fff9199de"],["/images/dl/104.png","897e22d7731a6c8d16ce28a62a739a60"],["/images/dl/105.png","b8a11e56f84cbd023da5c531df5661ba"],["/images/dl/106.png","dd17c8a11f7f5b76a56c38e98019c89a"],["/images/dl/107.png","d9ecc9e1a424bd937bb80da878265e02"],["/images/dl/108.png","92dadc873698dd6b2ef82e704fcbd647"],["/images/dl/109.png","764ba408eb6e5f60b496f3ca28cc83f6"],["/images/dl/11.png","34a8bbc88a333fc1c814e516a170afbc"],["/images/dl/110.png","7fa7ddcaf13c866e940aa176cc9abc2c"],["/images/dl/111.png","9c8b8224afbaf9da7a133e4fb47db202"],["/images/dl/112.png","85a50866d113ec1a5b74f6a2429465ac"],["/images/dl/113.png","f6b40f980ccc3bfdb8612b3df7d26681"],["/images/dl/114.png","7ac6605df0aa00d89b33b46935480ec7"],["/images/dl/115.png","a7925e77be39580d582d23f1ae2c2d7c"],["/images/dl/116.png","291b5652dd7b1e5a0a22ec5888dd0ae6"],["/images/dl/117.png","36483a1cda4bba80601aca92598db2ee"],["/images/dl/118.png","cc10fd547e2094b82e90bc3392b714d1"],["/images/dl/119.png","712089d980526e5239253638703980aa"],["/images/dl/12.png","edbd20c0f9be696722864416805f8ab2"],["/images/dl/120.png","94d4ed5a2a8db1d03192b10098415b3f"],["/images/dl/121.gif","a2afa892b7b37c37871701f374e4b5ad"],["/images/dl/122.png","0ea990077c7f9144c9321f3ed9c56bf9"],["/images/dl/123.png","be8c221c9306341acac8f91bf097cdbd"],["/images/dl/124.png","5c61222626f4efca142fdc78d62a4fe4"],["/images/dl/125.png","b1b458a4e0ad89f06e34e436673489ef"],["/images/dl/126.png","e91bbeef4c4a56ade881fb668addfab2"],["/images/dl/127.jpg","3f4dd207f75f3869c6e744120624fc8f"],["/images/dl/13.png","dd2781bbd52cd08b85822b27e704b223"],["/images/dl/14.png","a4f4a768b9e09d0edb0fb2b61bd6d890"],["/images/dl/15.png","11ccd1c7126bdada66328b00acd38ba4"],["/images/dl/16.png","431eca388a571f6ae2c97f355d4269ae"],["/images/dl/17.png","c785b250216adeb5bb3f7dd344e7e2f3"],["/images/dl/18.png","d0dd40f0001931557dafce3aa70e3f5a"],["/images/dl/19.png","e4aaac069b33a7fea0149cf0b220b2f3"],["/images/dl/2.png","488e19f06f5be0baa222ebc4ebf1f42f"],["/images/dl/20.png","4156882cdf4536bd465bf20630af6356"],["/images/dl/21.png","b215a29f6ecdd03485d9e0a45c9f786e"],["/images/dl/22.png","a96b71719979b2f64d394ecf26191dc1"],["/images/dl/23.png","049c7f3f8c8fb2b62f1ee23fffb1f94a"],["/images/dl/24.png","e311ddc1bc77c0069fc4c653d268f8de"],["/images/dl/25.png","2eabfc24c384e106ae088fa0d080e219"],["/images/dl/26.png","cb13ad3a876f65abfd9bedd5eab6d50d"],["/images/dl/27.png","a652a08f3b6e0b9b82a5556c26e15ea1"],["/images/dl/28.png","3726c0ea2c92a818dd385a8a9237187a"],["/images/dl/29.png","d202d133bd5e7142daf150ea2c300ee1"],["/images/dl/3.png","32643ac5d88e9288e6a91c545228f870"],["/images/dl/30.png","4a6eb0c7c5f7cae3430dd73266286610"],["/images/dl/31.png","230dd5d7b594b13641024ca7c16af9e6"],["/images/dl/32.png","bad29ccda756fa14816c2b7a3d5d60e1"],["/images/dl/33.png","6b47a20743481a7c84cafdddf7aa2b15"],["/images/dl/34.png","544f56c796819c8a2bd76e2008d73b3d"],["/images/dl/35.png","69a494d534a93002d5052f96d54458ea"],["/images/dl/36.png","c7cff050ff6232ad5827e4e0bca493c2"],["/images/dl/37.png","00861b87acf6f356ab7e36cc2f3b8f75"],["/images/dl/38.png","308794ff0c29eda49e3c9f7e72f193d6"],["/images/dl/39.png","031796e81c3dadb6d2c6521ecf824728"],["/images/dl/4.png","b13463143252da800adf2134fdcca283"],["/images/dl/40.png","9193fdaea78a9ecfb2ce346bc2245e62"],["/images/dl/41.png","6efe6e2ed3fa4763693fa7808675a717"],["/images/dl/42.png","e41671954c7e6efa4a80ed2827723a39"],["/images/dl/43.png","d616cae510f75ff0ba75532f13afb680"],["/images/dl/44.png","a1df61f0242f00b7b3dec380f2b82a5e"],["/images/dl/45.png","9880d436563d3e748d4a97219a932de0"],["/images/dl/46.png","ee3823c14cbbc0c4e719d8fa2b70284e"],["/images/dl/47.png","a9654809288507227ddf5091381bd52a"],["/images/dl/48.png","a7f47763bca3b758e0377e4eb3697014"],["/images/dl/49.png","c8b694fc337ffd2822a82ea078a7fd94"],["/images/dl/5.png","ccc04cbc94995b21ae682ed9a9b4b0e4"],["/images/dl/50.png","0b74840b70c5362adbb1ae4d831daa40"],["/images/dl/51.png","add48b535c67dd7ba2d89c2b47d62e4d"],["/images/dl/52.png","ebd47a5ef3557d1857288ea842ed846f"],["/images/dl/53.png","6543b1ebd8f9e1eee6867ac98c377656"],["/images/dl/54.png","e42c09127df542958d6790eb239e2703"],["/images/dl/55.png","0f3bb7248a6e465c0f04c44fd7102458"],["/images/dl/56.png","15ec6905fa793e164de60e8dfd016e50"],["/images/dl/57.png","3a1615a4dae148791518372dfca9684f"],["/images/dl/58.png","5babc414eadaabf475ea5310705d42da"],["/images/dl/59.png","de74751a92a1fa9d22241269545fa578"],["/images/dl/6.png","0c7b467b8c118601b3e4b72e8ee00009"],["/images/dl/60.png","92221b8c62fce1c98467d355237d2986"],["/images/dl/61.png","b77632cd591a92dbfd4cb3a2f3eb707e"],["/images/dl/62.png","f5eca88a4d1b4ff99462d6004037c0b1"],["/images/dl/63.png","2d596bc4776088dc2d7f12035cf9625b"],["/images/dl/64.png","0be91314f6ce792e335eea451fb432ac"],["/images/dl/65.png","cfb0302ad749c7ee33c3a4c0fd048cb3"],["/images/dl/66.png","99a4396798a3703de705d5ef583cc53c"],["/images/dl/67.png","c814ee1f17b1b6e023a2959ecea105f4"],["/images/dl/68.png","32e5647c3a3262d28abd2c801a2499b4"],["/images/dl/69.gif","6428cf505ac1e9e1cf462e1ec8fe9a68"],["/images/dl/7.png","1f98a655f5df7b72a03645ee48043dc3"],["/images/dl/70.gif","cb80c7a8c655585f38038c4876381722"],["/images/dl/71.png","26d9cc4df1edfe2c7ce2b3bec07fcf93"],["/images/dl/72.png","de5ad70ced9e378b87cc5cc3e5068ade"],["/images/dl/73.png","8704e85c81f02d3148f5013f928e622b"],["/images/dl/74.png","40148a094025824911637637e6f0a71b"],["/images/dl/75.gif","2cdd2ec54569879ca045e0ed090f34a5"],["/images/dl/76.gif","395aa82f1e59cf80e8e17a9209bc22f2"],["/images/dl/77.gif","510c9a35e6f332d4d042e3154a59355c"],["/images/dl/78.gif","8a63c07ac20ee5e5097b8a9e9327012a"],["/images/dl/79.gif","9e9a49afd76a80bda8a6362e6a32dc1c"],["/images/dl/8.png","58c486bb84f43765a4b1c0170b17ed3c"],["/images/dl/80.gif","4a87f84b588768c5b5fddb2b000b92d5"],["/images/dl/81.png","c6557ae392175f3284cff96ede632ca3"],["/images/dl/82.png","8c6e03a4ce27b1546860f1a4994ded2f"],["/images/dl/83.png","3230fe6ea57bf3bb56197b60c744873b"],["/images/dl/84.png","b32db2843c3da7a1434e07286a767202"],["/images/dl/85.png","aaaeb673c62631407bc0417bf30a2209"],["/images/dl/86.png","cc201aa344c97773b92d4a24a3eb4756"],["/images/dl/87.png","153a890f1412bea4542d568d2f071fc7"],["/images/dl/88.png","effc36ef946164373a8bf243961d88a1"],["/images/dl/89.png","2686299a083de7d34f0f4215884ca4a7"],["/images/dl/9.png","07509d765897a7512d5beb635d3c4179"],["/images/dl/90.png","a56a0f6071eb3fcdb76968b4a32d5e5c"],["/images/dl/91.png","6ee325d3906f10f2793fbb01e489930a"],["/images/dl/92.png","0c8d438c12bce0260b16cf270db56f0b"],["/images/dl/93.png","6c92ffc515ccbe08a5abd79a3cb80b9c"],["/images/dl/94.png","808edd0a07d8cbabf336dd9dca8d4a26"],["/images/dl/95.png","45f3b7701551fa7df5f9be047c75500a"],["/images/dl/96.png","9a3c4effe6fba0aae2fb580155c4c55d"],["/images/dl/97.png","bd2706173398f50c2831c4e192b9f352"],["/images/dl/98.png","37d39a650706f2df9b766fe478e52587"],["/images/dl/99.png","058d5dbc14ded7c21715436648e21181"],["/images/docker/1.png","052bebd4e60c59be51857684e5e6fc0c"],["/images/docker/2.png","28f04eea1e73e7c0e0c466756c9c2c62"],["/images/docker/3.png","82a26c321e81043540818baaea77eb38"],["/images/docker/4.png","367c99cdceb0f81b378c075904c88644"],["/images/docker/5.png","e414ffe973288941a51e9cde7d92bb71"],["/images/docker/6.png","d559cb65466a900edb0d7983917ec37c"],["/images/docker/7.png","ac71dea1600d19598053c5607e7975a1"],["/images/docker/8.png","d9b777921984636623864ec2b250e298"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/math/1.png","be08ac320a3fafd4b6cb9a2a820a3b42"],["/images/math/2.png","82c7788477186d13876fa2783fb31305"],["/images/math/3.png","c4dbdce9ea65b388f307e4c2b6701c7a"],["/images/ml/1.png","0614e4691064abbff74cb69212e2a466"],["/images/ml/10.png","ee1e7358cde8b8137ce684b0c4365e04"],["/images/ml/11.png","c86479f988d4dc6b87074724f42e35f7"],["/images/ml/12.png","35ff221fa6ca14c635bfef76cc5a2991"],["/images/ml/13.png","f1bc25e32ad10b0d7b0c9ede788a5b88"],["/images/ml/14.png","2f592eda3505117752f6719aba65edac"],["/images/ml/15.png","0c8117df94fa4c145e2c2943e2247ec0"],["/images/ml/16.png","5705759f62883d83028290a0933e5c86"],["/images/ml/17.png","eed841d914da17d258adc9852c83b745"],["/images/ml/18.png","7863315ccc29fb1c24e27d2a5fcd477c"],["/images/ml/19.png","e3307673fa4d5889a52012dff9c03ceb"],["/images/ml/2.png","9d72b6ab1efe7d92a0f75e376681e549"],["/images/ml/20.png","73daa252e5311ade27160a65cc61c9a7"],["/images/ml/21.png","2749400036f8bba7beaa0ab3224f5389"],["/images/ml/22.png","aadd1c4aa269c129958a013d84e42492"],["/images/ml/23.png","80937bc77f36a5d6310ddbde34c091ed"],["/images/ml/24.png","810369b827c1d376ae5a0e6bbf0c2761"],["/images/ml/25.png","8ba5410eb67aa3cb734596ab0b7abbf3"],["/images/ml/26.png","e702d97bf87a16ac98d9b96357a50224"],["/images/ml/27.png","eb5810d90beb005e0921b5bdce4278cb"],["/images/ml/28.png","daf6146665cd93ff43b7c0537d26931b"],["/images/ml/29.png","faf61ee7aef34289909db13712731ef5"],["/images/ml/3.png","05763899f89a3aec00df11ea2a7a976c"],["/images/ml/30.png","521f8749d93cc41c604307333b8ecb20"],["/images/ml/31.png","61e322d57e7a6468cbca48304ae94cd4"],["/images/ml/32.png","6ec323b582e8562c93c1d6640f4d807e"],["/images/ml/33.png","0d1cdd5ecbf216003f28746db2b33b6d"],["/images/ml/34.png","64b7033aec57515e301161d85f8e4e30"],["/images/ml/35.png","edf088702e0177920a94b3508bec7ec7"],["/images/ml/36.png","fb5a9ddea3a45786bdf11c415e147896"],["/images/ml/37.png","60914873dae6567b8e68ec45ec6b59dd"],["/images/ml/38.png","2b8b5cff6aa6292c46ac594c30027790"],["/images/ml/39.png","1d3d3d21aac91a1e4a2b16c45345d3b7"],["/images/ml/4.png","d1d10f45e987ea4af1c4b7086c5f745b"],["/images/ml/40.png","772e151cc0187377b8640b6769125b96"],["/images/ml/41.png","481ba1d4954007c7eb74aa89f44cc220"],["/images/ml/42.png","3b812196cfcc9fd92a8eae2eba443cfb"],["/images/ml/43.png","cd5f999f7915a1797b3a4c1bd1a63484"],["/images/ml/44.png","37eb471cb2476713b4491a3d747e8f5c"],["/images/ml/45.png","df3980f9a53928768f0949eab0dda0f6"],["/images/ml/46.png","d9a4bc126242de84d18bf1a616961bc3"],["/images/ml/47.png","ecc436ba7ba75ec5c422ecdd700219d6"],["/images/ml/48.png","a154e7896b59f7c4feb7fd9869350494"],["/images/ml/49.png","e9cc736869a7161cfefc7e1961c2d9aa"],["/images/ml/5.png","884a734410b3627a14981c481b27c583"],["/images/ml/50.png","6900e08fcd02c9a9bcac17b1c7d68fad"],["/images/ml/51.png","1ecd25e8788aac72f2f6d2440ebdccde"],["/images/ml/52.png","e8a96085b9487570772875b5f40c5a64"],["/images/ml/53.png","6ed613d5f1a4465a670ee7557dd29575"],["/images/ml/54.png","4fba1f8adf3b0bac8f6cd911016e97d9"],["/images/ml/55.png","f772762d3dc7b6927ca73e276bacd35c"],["/images/ml/56.png","20827caf527ef20652b21adb8e143e96"],["/images/ml/57.png","3bfb68f2234dfdb64aa5286d49a04f79"],["/images/ml/58.png","291a3424c7bff0afa585bfa7f09d67de"],["/images/ml/6.png","bbd2772718a23a1102b2201f78413d6a"],["/images/ml/7.png","c753cbfb65ed9638e82e5d0140028f82"],["/images/ml/8.png","0432f07c0cec1708d787798042156c21"],["/images/ml/9.png","2870280e8d3cedaee23818114a3cc02e"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/py/1.png","15b7ebe86935d45e017776bdd2e2e2d7"],["/images/py/10.png","30a401b3d7e75a8e237f0b805f583e4b"],["/images/py/11.png","59051625b36f69ecb18a6174a04b4368"],["/images/py/12.png","0738f0be3b1b72d1f66f6ec218d76675"],["/images/py/13.png","aabc1941943d19cd9c26b4c97b991415"],["/images/py/14.png","f09e867b7e33ab28bb509208efdd4928"],["/images/py/15.png","af9b8898e56514fa1c060e35d316066c"],["/images/py/16.png","ba5ec4e869bae45070e08f64788ecfbe"],["/images/py/17.png","82fe7ec533b75c5b9ed5e677f57eeaa9"],["/images/py/18.png","f651173cc0a9b4a8dcbdd495f73f882c"],["/images/py/19.png","db20315678cbcad8dd4f0d4bd72cb991"],["/images/py/2.png","589c0581b9b1da7112120f6a1f320fc3"],["/images/py/20.png","7670ef568945df192b81f0dc0f3d3f7f"],["/images/py/21.png","dffafdf930d818b664746a166cbb97bd"],["/images/py/22.png","e42a0fc9bec94fcd5207dd39ee46dc5f"],["/images/py/23.png","729ce256675ed1b5be435ba49e07d5fe"],["/images/py/24.png","3178aad732fb3a59fd6b9f0522d0c84e"],["/images/py/25.png","23dee90b7ba96de076a6bfbc7e9f9fc8"],["/images/py/26.png","5f27264c4cc5f1066086d4a6dafe68df"],["/images/py/27.png","2a30cc59399a637db839057f86d8c331"],["/images/py/28.png","f8ddf9a9bdfb76086c414c8561a7c756"],["/images/py/29.png","e6a08a36098bc987d119f57a9b273829"],["/images/py/3.png","46d73ca2a738a321e189608497c35b78"],["/images/py/30.png","aaad070ba988fc223be70b8be8d1a694"],["/images/py/31.png","2190bbadd784c89153ca10aacaa212d7"],["/images/py/32.png","4ebc4497b4ffff11e8ed5bb12a592cee"],["/images/py/33.png","a912118468c632d485625969bbe13b28"],["/images/py/34.png","8647e22d53f209413add44e80c22aaf0"],["/images/py/35.png","f98376dfc1b6b6885ce35e0e29831c12"],["/images/py/36.png","63b48f45c30f1f4274506b01ccd2aaae"],["/images/py/37.png","66a568168cb34596f4d2b61f701f0c41"],["/images/py/38.png","4ec3117c6e4660417f25420015680ef0"],["/images/py/39.png","1d31399d3f0ef916447931f88ce3398d"],["/images/py/4.png","beabd345ad64e22ed6750c13f7d35e90"],["/images/py/40.png","7b19dffc350d03bcf0de1c9477e93105"],["/images/py/41.png","593c6b113bc67e90339d819616bd1277"],["/images/py/42.png","20c75a35c4a4b07faf07daf9475ce1ff"],["/images/py/43.png","6c673a7ef4a3fc5ea9169a3fbd61f80e"],["/images/py/44.png","2334590711560011876de8c746b18604"],["/images/py/45.png","1441f705d69261450da8c5233ab02d0f"],["/images/py/46.png","616c6ab2d9c8eb007952017c7452d6d7"],["/images/py/47.png","004175268fd9029f7d09d1503670370f"],["/images/py/48.png","489330b4f78c3796b20042589808f8bd"],["/images/py/49.png","58a224ddfb5f57a12f48f3b4e3cbd0d0"],["/images/py/5.png","771c59a4e854122793a682f106fa08e5"],["/images/py/50.png","bfa901b645deced8dd1f9a8c26778f25"],["/images/py/51.png","2ffadace686f78c1414244d872d398fc"],["/images/py/52.png","2e3ec0d057d100e4e8ea5f0212e5c998"],["/images/py/53.png","17bb9979be17d13b90357c57139da462"],["/images/py/54.png","c23d69845f72a73fa3e2f1fb84771c56"],["/images/py/55.png","8535760aff99ceb4b556f7b97796d94c"],["/images/py/56.png","59ec9ba92d7ccd2c716228a1a8455ccb"],["/images/py/57.png","15bc87041ac4b1c7b3525b314fb7ef66"],["/images/py/58.png","5f94f3e9e9c6e104566bbb1b600e1fac"],["/images/py/59.png","bea377ca62ca75ab5d71c430b0355931"],["/images/py/6.png","833af6f79eead78a0888a42a24a7c35b"],["/images/py/60.png","ea730c5befdab80ca63dbcce82b3e4b9"],["/images/py/61.png","a6562d29f44817c17e7be41238aaad7b"],["/images/py/62.png","7d457435369276895070e3dd61c9462a"],["/images/py/63.png","91015ba12e25b0f895687581ce6bcb25"],["/images/py/64.png","20a15a250b09f9e4604ab3550b9700c3"],["/images/py/65.png","fe52bf0b2570638b2d22d72a27152e1c"],["/images/py/66.png","d3025a5e94f7bc525362d1f2e7745078"],["/images/py/67.png","2f7ca0e327c55df4f003210905190792"],["/images/py/68.png","6f7279dbb187720b89c66250c986e965"],["/images/py/69.png","a44c673d20cbcf45db156036bd983034"],["/images/py/7.png","d947a703f79658536cb2750914637ffa"],["/images/py/70.png","8a87dfa24f54a8547ef6826d3b6289f4"],["/images/py/8.png","20b867d8137281e9c3a40b802df75680"],["/images/py/9.png","e4639c570e7f7a04e90439456ad297c5"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/reptile/1.png","6d0aa92af42a4647977a03707bade702"],["/images/reptile/10.png","79f309da23b6b5b8b9effd25cc20abd9"],["/images/reptile/11.png","e60854e61ed69c6cccb12196fd947705"],["/images/reptile/12.png","ae4ac9f4065966955a3f31fa4b2292f3"],["/images/reptile/2.jpg","f722e57e21e3d76ebedb6667bfd44aed"],["/images/reptile/3.png","b4161135bc5a889337f36a3a0c20dc6f"],["/images/reptile/4.png","73b18e616e9134ffc1aaeb4ed1c29dfb"],["/images/reptile/5.png","318877d0e3a7337773fc301d6c5118eb"],["/images/reptile/6.png","f39ae0da0e1d343ec162f5db6ade59fc"],["/images/reptile/7.png","26491b8984ce6b22c76ebb6372f912f0"],["/images/reptile/8.png","15bdc5c257f7c109f184f9872c57b2d5"],["/images/reptile/9.png","92e8ffd5026d530e630b6ba90c23236f"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/tools/1.jpg","5bf773e6fdaf0c6573c4578ea232dc21"],["/images/wechatpay.jpg","07f0995337e2a1c8d2357e5659ec120b"],["/index.html","9e26f3480e30428a7145f99f66056df3"],["/js/src/affix.js","2409686bbb4e04092b0e13c4bb4afc85"],["/js/src/algolia-search.js","52b9c3528a1b3ac68307e8291633726e"],["/js/src/bootstrap.js","a11c85ced505792eb5ede42979dd8a13"],["/js/src/exturl.js","cc674dd6ad19a43a722a0165462fadd7"],["/js/src/hook-duoshuo.js","2a66e4010dc5407713eca2ff094e29d9"],["/js/src/instantclick.min.js","a5908f62ddefc6be3ad1f3b12dfd7363"],["/js/src/js.cookie.js","329978896a6ab9f069782199ecbe6671"],["/js/src/motion.js","1041354d5c89bb27e0170abedf156c6f"],["/js/src/post-details.js","e1c5a093514a3a81f9bc4f018c93d017"],["/js/src/schemes/pisces.js","d7c21589285495a8576b6729b035972f"],["/js/src/scroll-cookie.js","3307f4efaf94404290844ebfa4a2a844"],["/js/src/scrollspy.js","be42f0138d8ca4620d6631d38b94e00f"],["/js/src/utils.js","f45eb469961c6e155fcbd2a62892022c"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","0033eabbf188aa2474ebd3fa45c3e4e4"],["/lib/Han/dist/han.js","8c6e265348e21ea3143be61eec663adb"],["/lib/Han/dist/han.min.css","29481f1b313acb8bf62b4b6730ffd1f1"],["/lib/Han/dist/han.min.js","bf51f8ee4264f6c506d1bdb6279b1385"],["/lib/algolia-instant-search/instantsearch.min.css","bf7ae56135aebb1ef7beac3ff574c58c"],["/lib/algolia-instant-search/instantsearch.min.js","b8793a3b3ede52db445fdc4b550d001b"],["/lib/canvas-nest/canvas-nest.min.js","d335144fd63e970733f448bcda8b3632"],["/lib/canvas-ribbon/canvas-ribbon.js","81ebacc88b0a32c2f5783c8f743075c2"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","938149f90ef5832b2a256e5b724180e6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","ec1556b14da9146365bc858ad16bc7c5"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","9223120aae882089c316a639da2d1c39"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","94b38b45ce3fdf89ee360b78ea2ad93f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e264eb924d296dded4dc7dfe5d6ee76e"],["/lib/fancybox/source/jquery.fancybox.css","41af74c8c6c47705fe01f7ded7484bd3"],["/lib/fancybox/source/jquery.fancybox.js","14af2110ac19c8e083b3abb048cb0890"],["/lib/fancybox/source/jquery.fancybox.pack.js","41e1127b8c1f3ffa0d9b983f784efd93"],["/lib/fastclick/README.html","191cde24979a9c8f6c9f04d0966de618"],["/lib/fastclick/lib/fastclick.js","c48e98a63b5be7532036d27c39fbe95d"],["/lib/fastclick/lib/fastclick.min.js","70a55917fe2bd5f5d6721f41745c6916"],["/lib/font-awesome/css/font-awesome.css","199d1fc702cccd6732fcccd255a0df1f"],["/lib/font-awesome/css/font-awesome.min.css","199d1fc702cccd6732fcccd255a0df1f"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","4ddc8cae7724a1cefebeafdaddf25235"],["/lib/jquery_lazyload/CONTRIBUTING.html","8210e522b64d680e2d53680613d8aab0"],["/lib/jquery_lazyload/README.html","1b2b2c070d75055a17d1de732b8d7b11"],["/lib/jquery_lazyload/jquery.lazyload.js","b4e1aa9937437eec4cbc8dba29d6719e"],["/lib/jquery_lazyload/jquery.scrollstop.js","7ff125f779a88f3e8051e9f694593336"],["/lib/needsharebutton/font-embedded.css","f2a833743863eefca09c9ff950f5a212"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","511ec811de48d190985ec9c7a2b8100f"],["/lib/pace/pace-theme-barber-shop.min.css","6910583f1691b080dc2b339a0f99c387"],["/lib/pace/pace-theme-big-counter.min.css","fc2e48db394c37a40cbcee5de88c9dac"],["/lib/pace/pace-theme-bounce.min.css","72afd812493852d7bda3552b32ce23bc"],["/lib/pace/pace-theme-center-atom.min.css","dbd0408a5b33dcbbe238ffad00ece783"],["/lib/pace/pace-theme-center-circle.min.css","6c3e656c74982def73e0c761ff5cd744"],["/lib/pace/pace-theme-center-radar.min.css","4e2e21532bc18ee2ce43ac2bf9579136"],["/lib/pace/pace-theme-center-simple.min.css","5e88d3448806948cf49b5f9beb407804"],["/lib/pace/pace-theme-corner-indicator.min.css","2cc3a7a04115b93ed444d780541cea29"],["/lib/pace/pace-theme-fill-left.min.css","7f44f104f9262408da7370863b47084c"],["/lib/pace/pace-theme-flash.min.css","c7a7bd4b6b38f06e24aa3c06df4d19c2"],["/lib/pace/pace-theme-loading-bar.min.css","39cbfa38d70b083653429204772c7451"],["/lib/pace/pace-theme-mac-osx.min.css","099012e6f6d5adf8c4639787a9c7d230"],["/lib/pace/pace-theme-minimal.min.css","ff87afafe15842c164fc0c3850c17ebb"],["/lib/pace/pace.min.js","5aacb2c833b3eb1aa543aca778ef39ef"],["/lib/three/canvas_lines.min.js","1ac723e2e2587172d7257e349e60db30"],["/lib/three/canvas_sphere.min.js","f10a591e28976adf04e2add0a9dbbb73"],["/lib/three/three-waves.min.js","bfd65865a1e72f65be4079bf41bac749"],["/lib/three/three.min.js","745a09e73527dfc5a24ff09ae54e9a5d"],["/lib/ua-parser-js/dist/ua-parser.min.js","fb63b268951ecb84cfcc2b139c9fa8d9"],["/lib/ua-parser-js/dist/ua-parser.pack.js","73e8f82fa464ec5eeae8a7f9477649f5"],["/lib/velocity/velocity.js","5f17b0ca74fa40b90a811bcb7f153953"],["/lib/velocity/velocity.min.js","1687d0c9af2e11532538e773b006d715"],["/lib/velocity/velocity.ui.js","da71a7a8a41bce7b6b82622064814ea2"],["/lib/velocity/velocity.ui.min.js","97a52cd6695022da10fb5dd0f836f0ff"],["/page/10/index.html","e1a942e7069a3bb10b9fb9cb6aa43a83"],["/page/11/index.html","a26d16594be59a5a76f9e3344694671d"],["/page/12/index.html","eaa9bdc3ce3a24fb00c5ab8f93461a1a"],["/page/2/index.html","cb59df0e737c9348229ac8c6088e3a09"],["/page/3/index.html","7daa7029eb1ef905a6f8c18fe107474b"],["/page/4/index.html","ff8ee5c7db224c2ea75a0f4cbad09695"],["/page/5/index.html","b3e2ab1c8a48837649a419bc896807fe"],["/page/6/index.html","580e8a7bc77def22f0fa6c05caefb359"],["/page/7/index.html","7676c6db5da9283136ccbfd2a992ef68"],["/page/8/index.html","f39bb811395a3b6c7fe06d9928c55526"],["/page/9/index.html","74d95bfcbb3fb8895715a3851346e7a9"],["/sw-register.js","fcce91435440515125ab6b1f4147fa0f"],["/tags/CNN/index.html","0c2a6dc0153bf7f12559352d96496414"],["/tags/DNN/index.html","65bdd946b5ec08a16e03a110b83a18a0"],["/tags/DeepLearning/index.html","60631104765211a46c4a0ed40ca3e18e"],["/tags/DeepLearning/page/2/index.html","9338c308db7a1116d37a9390d56c95a3"],["/tags/DeepLearning/page/3/index.html","344f2dbd6c717a7dd33d2abb3415ba60"],["/tags/DeepLearning/page/4/index.html","ff0e325e50ff8b030b20ff6bac0da721"],["/tags/DeepLearning/page/5/index.html","93cad3af233d20d197208871555ab714"],["/tags/EM/index.html","2dad91f976b21156805691c623f6f743"],["/tags/GAN/index.html","5218c934e6c905a9374226c66716b70a"],["/tags/GIT运用/index.html","5073f3a5d4d5b5f5bc8ee5ba4cd647a1"],["/tags/HTML基础/index.html","a6738d6a7599ed430f44b46823e75147"],["/tags/Keras/index.html","7e52c8e13e729cd1c1b805ac894ae3cb"],["/tags/MachineLearning/index.html","c3cb7c8b3c0d125481230cdee2b5053f"],["/tags/Python/index.html","bdb2273e24393d0da0115946fd892392"],["/tags/Python/page/2/index.html","356ede66c486c603d87c6a26753e2f8f"],["/tags/Python基础/index.html","9ff143057992c494015e2f79b2dc9f01"],["/tags/Python基础/page/2/index.html","e4bbcbe44e47b2774eb7ab591497cb92"],["/tags/RNN/index.html","07eb13d037fcd18dde054ecd4cb25ac8"],["/tags/TensorFlow/index.html","e03b994f357da5f126e07d56cf858f40"],["/tags/TensorFlow/page/2/index.html","6a14c4f31bb76ad19c2c02b850274f0b"],["/tags/TensorFlow/page/3/index.html","2e00a582e85b05e7075d8082ef2169d6"],["/tags/anaconda/index.html","bdc4e951cf0877d541549ff9b34023ed"],["/tags/docker/index.html","5dbb87ad59ffd508a8a4a5f4a1ab99da"],["/tags/git/index.html","a5f6f9ebb523909a5248acab7679a30b"],["/tags/index.html","f602e66928aef9664d3abf24224a0ebd"],["/tags/ios/index.html","2d4d33c4cee2f3782c682cb86f86db1f"],["/tags/linux/index.html","c25008504cf0bc3b5aef102306849052"],["/tags/markdown/index.html","088f532325c5b7a9de5df1068adf2536"],["/tags/network/index.html","8031f2233872a1afbfba8233c91220c2"],["/tags/opencv/index.html","73cdb8817a636278e80555973c0dabfd"],["/tags/pip/index.html","0fa8934cb320267812d3eaaf88e013f7"],["/tags/pycharm/index.html","a56fafe74b5d0ffef7041866d1ffce21"],["/tags/svm/index.html","2111a44a6670f99ed1913711c0cffecd"],["/tags/ubuntu/index.html","be7ceedd78631107acc8fa59aa081e34"],["/tags/优化算法/index.html","6431e16df41e2f016de1e3b210886821"],["/tags/决策树/index.html","b1e3bbaa40b903464fe0414d88c6f69c"],["/tags/反向传播/index.html","418b3930c4c7d53c577d97383dbf9a29"],["/tags/声卡/index.html","cffe4fd15483f706c32bcce904c2f582"],["/tags/安装/index.html","f6da9f295554adaf98b578ce700d8f5c"],["/tags/开发工具/index.html","62396764310b37f4b8fa62bcfeea68e6"],["/tags/开机/index.html","7d9192f6653f1c0192110930338ba16c"],["/tags/朴素贝叶斯/index.html","7c1c6d792821bdecae0162dfff71b198"],["/tags/核函数/index.html","c070ab1bf8db82957bf8d738e30baa1f"],["/tags/梯度下降/index.html","d2b74ed1ec856055e3313f8a941eb2f8"],["/tags/神经网络/index.html","d737ae427b80ee48bb2062728074b78a"],["/tags/线性回归/index.html","f11b0dd562c4b97a0c0454529b6e4511"],["/tags/聚类/index.html","a17acf2bbaef378c0616cb6dba67eb05"],["/tags/自动化/index.html","28ca19daab7bcea4d1705af4a41bca8b"],["/tags/贝叶斯网络/index.html","722917cb75ab94e30fb1e13b3331705c"],["/tags/软间隔和正则化/index.html","d29627652d35eb79796b83e0a6c00468"],["/tags/逻辑回归/index.html","5e12b8d0b57fea382a25237ce9843aa7"],["/tags/随机森林/index.html","9a881a0872e78e8b2dd45413c9a50038"]];
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
