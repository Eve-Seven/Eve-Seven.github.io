/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/08/25/2018-07-20-raspberry-Internet/index.html","f60ed3d249a64c6418a2b9693ad6f607"],["/2015/08/25/2018-07-20-raspberry-on/index.html","c034d5160a69d9527882606b8ba7450c"],["/2015/08/25/2018-07-20-raspberry-usb/index.html","b272059e64a23d55c8aca2104abf252c"],["/2016/07/13/2016-07-13-GitTutorial/index.html","0d1977b86d385a4f86571ac0f1aa593e"],["/2016/08/04/2016-08-04-PythonTestAutomationiOS/index.html","5f30a1d40f0c7adb0e415729c0174e5e"],["/2016/11/20/2016-11-20-markdownTool/index.html","2c78a5bb0ac9e1b76f79275f94d42ac0"],["/2016/11/20/2016-11-20-neural_networks_using_TensorFlow/index.html","63424a0c308316deeb59a2322fdeb0f5"],["/2018/07/05/2016-07-05-MachineLearning_introduce/index.html","404973f67e380e0ac77099a91db1e4a4"],["/2018/07/21/2018-07-21-ml-linearRegressionL1L2/index.html","40ac5170784fac8a347847291523fa43"],["/2018/07/23/2018-07-23-ml-DecisionTree/index.html","8a1904f1fc1a90c0ca9a10b117d0bfce"],["/2018/07/23/2018-07-23-ml-logisticRegression/index.html","bbcc0ee2ce5900f42f41ac75195b6a65"],["/2018/07/24/2018-07-24-arithmetic-gradientDescent/index.html","6c35541e5a3f336ae42f5d0344658b62"],["/2018/07/25/2018-07-25-ml-svm/index.html","5dca0541108014d71c48f4d3a5871750"],["/2018/07/26/2018-07-26-ml-svm-L1/index.html","634e2a727aa3d708f5f927debc8d9156"],["/2018/07/26/2018-07-26-ml-svm-kernel/index.html","8d7b37add3c2343f798bb1a4c75b41be"],["/2018/07/30/2018-07-29-ml-clustering/index.html","ac98b20f33b921830fab42a50397a4e4"],["/2018/07/31/2018-07-31-ml-em/index.html","89b5fcbbed6f0a15ee43cfd05f8b7666"],["/2018/08/01/2018-08-01-ml-NB/index.html","80a03efb18ae919add919319b3ca6ba7"],["/2018/08/02/2018-08-02-ml-NB-network/index.html","0b22e5381b13053544c7f3b64e63396c"],["/2018/08/08/2018-08-08-DL-introduction/index.html","91cff749b1baba9e6446fa5ab0f13b8f"],["/2018/08/09/2018-08-09-TensorFlow-windows/index.html","c212f793689ee38efedf867ecc638c01"],["/2018/08/10/2018-08-09-TensorFlow-ubuntu/index.html","154d552075a5460d4cdae225d70a88bc"],["/2018/08/11/2018-08-11-TensorFlow-Virtualenv/index.html","125588747b7464e8536705b03d447a3d"],["/2018/08/13/2018-08-13-TensorFlow-course/index.html","2b1634ab415192214e82118da0c626bf"],["/2018/08/14/2018-08-14-DL-method/index.html","0533c53648b15090f46a37c562dccc0c"],["/2018/08/15/2018-08-15-DL-back-propagation-python/index.html","bea50c9a7c429c4ea5e4a5df6ea5cba0"],["/2018/08/15/2018-08-15-DL-back-propagation/index.html","67d2c40c7696cc70dc936091635f8d2d"],["/2018/08/16/2018-08-16-DL-DNN-python/index.html","0d5490e5df686c1947da65d79a75b86e"],["/2018/08/21/2018-08-21-DL-CNN/index.html","b4a5fbc724c2034cdd93dac14659095f"],["/2018/08/22/2018-08-22-CNN-back-propagation/index.html","30ff0e183b3b159cc0f00b84e49b36a6"],["/2018/08/23/2018-08-23-DL-CNN-python/index.html","225f96763e6a0abd3ceea26bfff26e4b"],["/2018/08/24/2018-08-24-DL-CNN-LeNet/index.html","c7959b24cf421296d5ebd22e542265d2"],["/2018/08/25/2018-08-25-DL-CNN-AlexNet/index.html","2a79d4e759523021ca4939c92cd4bb69"],["/2018/08/27/2018-08-27-DL-RNN/index.html","c8b2f8de241e98725d156bd3d6a2e907"],["/2018/08/27/2018-08-27-TensorFlow-keras/index.html","89fe2bfc14650bd9313e54551efc2f86"],["/2018/08/27/2018-08-27-TensorFlow-layer/index.html","8ae9f261696371a1df2dacc90a2f448c"],["/2018/08/27/2018-08-27-TensorFlow-native/index.html","14e5035e38ae82572bdafa5db96811d1"],["/2018/08/27/2018-08-27-TensorFlow-slim/index.html","5492140ee1c58c85ea0b36545dd5a745"],["/2018/08/29/2018-08-29-DL-RNN-BPTT/index.html","58feba353fe5dbf324d5894de5dc79f2"],["/2018/08/29/2018-08-29-DL-RNN-hand/index.html","fbc45d5910dadf5f159d1a6477afc287"],["/2018/08/30/2018-08-30-DL-RNN-LSTM/index.html","e172f831bf3283e94d7419776aac1dc6"],["/2018/08/31/2018-08-31-TensorFlow-RNN/index.html","2424aebff882697882b3dea30e2a508c"],["/2018/09/01/2018-09-01-DL-GAN/index.html","62b00897ccd753783b9ffc33b151d75c"],["/2018/09/03/2018-09-03-TensorFlow-GAN/index.html","10de4ac430e93f98fb126f22c3bce4c7"],["/2018/09/04/2018-09-04-DL-DCGAN/index.html","937fcabe856679ff97b477d481ef135b"],["/2018/09/04/2018-09-04-TensorFlow-DCGAN/index.html","4b73045928a9905d1f46c6767e5fab7c"],["/2018/09/04/2018-09-04-TensorFlow-save-restore/index.html","8ca63520228fa4d196a7e9ba52580c39"],["/2018/09/07/2018-09-07-TensorFlow-cifar-network/index.html","74c3333f653a338f1e3b595bfbbffc1b"],["/2018/09/07/2018-09-07-TensorFlow-cifar-train/index.html","ec132881a4cdedc5503ba3751268e808"],["/2018/09/07/2018-09-07-TensorFlow-cifar/index.html","e9f81f6c72ce94b667c4241a1fb7fef9"],["/2018/09/07/2018-09-07-TensorFlow-visualization/index.html","1bc46bd879f3504839a28a3ed85a679b"],["/2018/09/07/2018-09-07-keras-cifar/index.html","8a2250d256f87f48aee6900d658f51bc"],["/2018/09/15/2018-09-15-Pytorch-AlexNet/index.html","84e51379a9ba57ba603b57b298066922"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-test/index.html","5399c19aeec21afdd2ccf92b1a10ee67"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-train/index.html","c909fb49f0c9c757bf506c158cdf4e0b"],["/2018/09/15/2018-09-15-Pytorch-DenseNet/index.html","bdd18a31599fa9a8a59b6c76428e7b05"],["/2018/09/15/2018-09-15-Pytorch-GoogleNet/index.html","fab6595fbb984f527ef3a5b78d0daee3"],["/2018/09/15/2018-09-15-Pytorch-LeNet/index.html","a08c34153a51b8f17d017d2a86d713b7"],["/2018/09/15/2018-09-15-Pytorch-ResNet/index.html","bac0bffb05e62d7dbf7f31341cfd2e71"],["/2018/09/15/2018-09-15-Pytorch-ResNextNet/index.html","e7a440ae3e11d5b54e569a772a5f31b8"],["/2018/09/15/2018-09-15-Pytorch-VGGNet/index.html","a40f1556f72d807eb19fdce031346f01"],["/2018/09/15/2018-09-15-Pytorch-cifar10-data/index.html","598d779dbfde55eb20bc378f13635929"],["/2018/10/09/2018-10-09-pip/index.html","2b61c88751f7ccab294c952075933d2f"],["/2018/10/09/2018-10-09-tensorflow-question/index.html","28e9ec75f546ad96d082ba4092bcdf88"],["/2018/10/15/2018-10-15-source/index.html","ab108d83ede9ad88cde1616d0d714926"],["/2018/10/26/2018-10-26-openCV-geometry/index.html","5b0dcbdd832650e2ed66e40bc3ba9c6e"],["/2018/10/26/2018-10-26-openCV-install/index.html","cc6c0ded78ce39f0b9f8de5b57d04726"],["/2018/10/26/2018-10-26-openCV-special/index.html","d485760f3620c237462112f60e1318a0"],["/2018/10/27/2018-10-27-openCV-face/index.html","db257c274e838956d50973b1b59174c9"],["/2018/10/27/2018-10-27-openCV-svm-hog/index.html","5b09914a1e2c7facac8ddbefa1a53402"],["/2018/10/27/2018-10-27-openCV-svm/index.html","ef79c6f2cc3be39ea126bd58c0c351f1"],["/2018/10/27/2018-10-27-openCV-video/index.html","9c39213a983de142104d3c8a282f3358"],["/2018/10/27/2018-10-27-openCV-whitening/index.html","81c32b84df10e787b993b7f0b5e6f811"],["/2018/10/29/2018-10-29-docker-TensorFlow-cpu/index.html","1309a64895143056424fe93c71b6d558"],["/2018/10/29/2018-10-29-docker-install-win10/index.html","c6970d245ad401fa67d9b0919fc19fe1"],["/2018/10/29/2018-10-29-docker-install/index.html","d19c462dee4a41d9b0e2f7b424df25fb"],["/2018/10/29/2018-10-29-docker-source/index.html","1914ad16b6e978ff685e386e919bfc3d"],["/2018/10/29/2018-10-29-docker-speed/index.html","490f0674f9c08b79fe8c93ec71c246b5"],["/2018/10/29/2018-10-29-docker-vessel/index.html","5da87a1476befb8fdbf9b5da8603f499"],["/2018/11/08/2018-11-8-linux-vim/index.html","0c96954dc5ebbc153e30ce7a8a34b537"],["/2018/11/08/2018-11-8-linux/index.html","054d8078b8ea83ab16dba7560934ae4c"],["/2018/11/09/2018-11-9-anaconda-ubuntu/index.html","5228ac48ed569bc08b70bd98c03c1b22"],["/2018/11/09/2018-11-9-anaconda-windows/index.html","4341dca4e4d002b2368fc8df759278ab"],["/2018/11/19/2018-11-19-git/index.html","3457d080719040f63f3796a483a94df2"],["/2018/11/21/2018-11-21-python-date/index.html","56aee3d0e80b0e04b7258beaddbf342c"],["/2018/11/21/2018-11-21-python-encryption/index.html","38f73faec695946a1bca10d0f005f002"],["/2018/11/21/2018-11-21-python-log/index.html","4c3d440215841d8048d3c23fb4039e26"],["/2018/11/21/2018-11-21-python-pillow/index.html","ffbbd252e32d083e6c5e2ade94348d9b"],["/2018/11/21/2018-11-21-reptile-beautifulsoup4/index.html","9cde4cb50ffa6ef2ef40af96e67b8a46"],["/2018/11/21/2018-11-21-reptile-http/index.html","287fcb2558a9e7c139dd6d322c548c9b"],["/2018/11/21/2018-11-21-reptile-request/index.html","560a00623fe13216fa7eaaf230296c29"],["/2018/11/21/2018-11-21-reptile-tcp-ip/index.html","242c1d1bcc735f7be934a721a2f08865"],["/2018/11/21/2018-11-21-reptile-urllib/index.html","057c70e3976d50aa10a200962562a953"],["/2018/11/21/2018-11-21-reptile-xml/index.html","489c03b4ef67b8140b9ce445cae3edac"],["/2018/11/22/2016-06-02-Develop_Tool/index.html","539669fbf14cc93b22dbaf432719b231"],["/2018/11/22/2018-07-20-ml-linearRegression/index.html","f447e0a28ca467a174769dbb9e7fe288"],["/2018/11/22/2018-07-21-ml-linearRegression-python/index.html","a7e54091cb1e42ddef7cc69bb92f6699"],["/2018/12/01/2018-12-01-python-numerical-sequence/index.html","300833003f1fa57c0162be0a1f49f8d2"],["/2018/12/08/2018-12-8-python-sequence/index.html","06f79020dcc21e600563478f667d393b"],["/2018/12/09/2018-12-8-python-output/index.html","869b65b154cd1483cd8466173e284c33"],["/2018/12/11/2018-12-11-python-dict-set/index.html","ed7775dbb1cfb442be6f29f36062ab6d"],["/2018/12/12/2018-12-12-python-if-while/index.html","9be99ba67c36c226891fa8c10047dff5"],["/2018/12/12/2018-12-13-python-main/index.html","d17d14d106d68f85fbf4c3f9479b49bd"],["/about/index.html","38d6fe331fc94a7b7599e56e736afa14"],["/archives/2015/08/index.html","310edf3087381bbf7b58f5a80ee764b9"],["/archives/2015/index.html","638bc919f6f6cd5430b50cf1dd889800"],["/archives/2016/07/index.html","79384d0b97f2595dfd49b503979dfddf"],["/archives/2016/08/index.html","4147e20ee985e5996679efaef14f924e"],["/archives/2016/11/index.html","75fe316870f80bea9c0cf9497408889e"],["/archives/2016/index.html","a47347e9c09d7879efec7e3491d3e60a"],["/archives/2018/07/index.html","d5b804102002c9b1c0cbe24ef38f1c39"],["/archives/2018/08/index.html","f88f2f12d55378944f22e712e1cff720"],["/archives/2018/08/page/2/index.html","37bcdd1c712755fcd2bcc4a05f039e7a"],["/archives/2018/08/page/3/index.html","00d99734e5a0b0560b26bd5477e782a2"],["/archives/2018/09/index.html","2ad94ac1f37e13cc6e24f437a385a08e"],["/archives/2018/09/page/2/index.html","feaca9f0f16b780ff1fe5fbaba48d958"],["/archives/2018/10/index.html","8cf6639e5426dc71bd3c82c6dba11203"],["/archives/2018/10/page/2/index.html","efc74c8aebbdf55bdf90741e28f3da4b"],["/archives/2018/11/index.html","4da36515af4fe768e48a8409dc69c39a"],["/archives/2018/11/page/2/index.html","71d35409b02b41dd8edabb94cbef435c"],["/archives/2018/12/index.html","eaaf6928a103bd4f1840c4e7672008da"],["/archives/2018/index.html","1cd9df63a87edaede33aa886a7a7a2fb"],["/archives/2018/page/10/index.html","cfc329b13faf39853bfbde60b24d936f"],["/archives/2018/page/2/index.html","c739cce9a620b461810d9646c211f71e"],["/archives/2018/page/3/index.html","d8901245b1ce9d0f3e7ddd814a4d57d8"],["/archives/2018/page/4/index.html","9cf7342bebf46b57efb6c0e543c646d1"],["/archives/2018/page/5/index.html","0e640f0ae197a84858902cc257caa21e"],["/archives/2018/page/6/index.html","98d9865f629a99b87b4bf0fd7a7aaf93"],["/archives/2018/page/7/index.html","c9540609025c68e294dc7c2219d0e2e0"],["/archives/2018/page/8/index.html","ee544a0900a6b9e4e1eef2ca2f325d87"],["/archives/2018/page/9/index.html","490991943ae72a8b965ad54388fe950d"],["/archives/index.html","5c78b95e3c5fbe66a8d09a5fa5b5b9ac"],["/archives/page/10/index.html","41d993bca3acc4430123de9fd13aea81"],["/archives/page/11/index.html","dbf804a2744fc2be03d01c69bcd1fb52"],["/archives/page/2/index.html","1fdb69e65d18d3d0986412f9bf5dbc81"],["/archives/page/3/index.html","c6e6a2e95aacd2d67597538d25829328"],["/archives/page/4/index.html","fd1c54b15714fa94ec3da0210ca0e16e"],["/archives/page/5/index.html","e3afda05618597b6a6e44c17a8d76be6"],["/archives/page/6/index.html","7f9b402b6bfb98cd459e32426b23927f"],["/archives/page/7/index.html","79613f7d9fde47a50f42e3d5ba3be82f"],["/archives/page/8/index.html","f3dad75633212e80d13ca1d2aefc5b8a"],["/archives/page/9/index.html","231aca78493d2f2151c0f9f78ce21b2e"],["/categories/Docker/index.html","54e36674b8562c74dd50389aebe2c8c0"],["/categories/LINUX/index.html","39c7c3e0de79e5adf8b62cf6474b54e9"],["/categories/Python/index.html","95d588861a3a2f6e5e236bf0ac29da5b"],["/categories/Python/page/2/index.html","b30e035c5140521e31ca9c2e17c8f083"],["/categories/index.html","a49d3e929dc1c7e704fcbc4964a5e673"],["/categories/pytorch/index.html","ce4b17ac182a7176dbab4f0d36c560d4"],["/categories/tensorflow/index.html","c24560984a59ffd6242a41e488b4a390"],["/categories/工具/index.html","306b8895840e9560261940cb7b9e3b69"],["/categories/开发工具/index.html","39c4a90ead81c3b8747887bab9de3132"],["/categories/机器学习/index.html","4e1f1f9fe1d3f750291c58e914ef2e32"],["/categories/机器学习/page/2/index.html","5c950e6f81f04104347913badc624708"],["/categories/树莓派/index.html","e01ac369c091c7089055cdfcb889100d"],["/categories/深度学习/index.html","608847bcc831ceb455b3db6662a03843"],["/categories/深度学习/page/2/index.html","2aba390d6bde5a48cdcd3ea8d6ef4208"],["/categories/深度学习/page/3/index.html","f2b93ba88804c7f81b8fd2ea4ea2a610"],["/categories/深度学习/page/4/index.html","f7b9e681527e6f81e2cd5ff4a6d91e61"],["/categories/算法/index.html","8d3a6985b01de50fd4563e8ad4dc343d"],["/categories/计算机视觉/index.html","341874950445ba0f070145a2ce64d5e5"],["/css/main.css","4c293035afe1da8672bae09870f10f27"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","a80879cd6eb38ea4678e995e91c48298"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8ee39bf6fed055723e7e4d5de051af42"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/cv/1.png","9f4f5f49612d747ea7e2af9511bf81d8"],["/images/cv/10.png","64042888a4a3f3a4eb0fa61132ec4d2f"],["/images/cv/11.png","a7d130d884954da81b5cb0bb6ec3bc36"],["/images/cv/12.png","78897d4a1ee5b035a6c1fca275d6ee5f"],["/images/cv/13.png","5bddd0353cbbe6bba6397722208f71f0"],["/images/cv/14.png","84703e200ba7bd4c81b00bdd284e995a"],["/images/cv/15.png","9e2fd155d3d155ad7929da9e6ff173f4"],["/images/cv/16.png","11fc9d7abf8eab9eabd3b1b634972df1"],["/images/cv/17.png","4a033e9738210c148a2861e2a595195d"],["/images/cv/18.png","28fef5c46c2f422225f0c6784a0c5134"],["/images/cv/19.png","6f9bf406e55081a45f2d4a7694105aa8"],["/images/cv/2.png","31c2a99f54755c697a66fd612088d5d5"],["/images/cv/20.png","3c583b642ab32b3f0e8c25d702db84e7"],["/images/cv/21.png","a566537a8176f5ad3aefb0a4e3d3a28c"],["/images/cv/22.png","1dbefbc4faf1d6d1667d75e5a6e0ad4c"],["/images/cv/23.png","a19339ed91763c182a8876008b6a65b6"],["/images/cv/24.png","d7b6fbd2e71114ace115874caa3234d8"],["/images/cv/25.png","5d8679bb4738e48ae60291c204fb082b"],["/images/cv/26.png","a621210387b76992c71e377e5b3e787d"],["/images/cv/27.png","cc070ae570b8301c7e48511fd03606a4"],["/images/cv/28.png","19234927e77a2e573d1fcd36c6ab377a"],["/images/cv/29.png","981dc034de4ca4b6e734d1a54783f9c9"],["/images/cv/3.png","e4b7d480e78d5d0c4c6a14fb31b0ed5c"],["/images/cv/30.png","89a24fa0d194fd189e619e5399bc2556"],["/images/cv/31.png","3ebb39656dbc7ff3fe0d53e61edfca4f"],["/images/cv/32.png","9eaf042f7520f23a2c7298f55c0daa84"],["/images/cv/33.png","74898282f2a1f9cb206bcfbf15676aab"],["/images/cv/34.png","0131081dd3bb72e8c15ccabbc5a181b4"],["/images/cv/35.png","8fa06daf89516d71037ad8ad5466430d"],["/images/cv/36.png","6f9bdb37ded9320389993be28956612b"],["/images/cv/37.png","e2d8710a8d1be82ba5c171404a6eeb3c"],["/images/cv/38.png","0fbcf55535e125c43eaaf142a7c16084"],["/images/cv/39.png","0f17b9745c0ee7185f3408ff3e75f6d7"],["/images/cv/4.png","b55154238e33764873083b8463030d3a"],["/images/cv/40.png","352064971be0635581af1446a20bede1"],["/images/cv/41.png","482b4b502b236b800a2e609b273fc479"],["/images/cv/42.png","54f1a474233dedf7ee3fc20c56d23be3"],["/images/cv/43.png","f315e6c996c7f06ace53f7fee13aba7f"],["/images/cv/44.png","d88e6c82ebcf85e6332a5ff18f1d6748"],["/images/cv/45.png","546d355afb836ccafb1dbf1ec6e58c2b"],["/images/cv/46.png","e78e4d34afd63907c64e342d2dd56500"],["/images/cv/47.png","0355f524fce034d2b1d9e49d15f5acf2"],["/images/cv/48.png","0890f1471e76361456983ba205a7323d"],["/images/cv/5.png","eecb4a7bba3f07b8e3025585e7752527"],["/images/cv/6.png","834ccb9069233764f549780478fcf409"],["/images/cv/7.png","61b35bb3b9b78a44a617be9dbbdbddd5"],["/images/cv/8.png","57728a4eef354a0aed3698ad06659e92"],["/images/cv/9.png","60933d0b322df2c82963159b02f716ca"],["/images/dl/1.png","b2d61d37b640c75770a86cf1e89173e0"],["/images/dl/10.png","24f2fa5c727818fc48bf3a6f8068ee58"],["/images/dl/100.png","000f1c2ee2bb7adee780317771fc1178"],["/images/dl/101.png","12d112acec2d7f48e095a61620034ec6"],["/images/dl/102.png","8109c56796810451a8d889b964548a7a"],["/images/dl/103.png","15385609e43d95f81dc4e63fff9199de"],["/images/dl/104.png","897e22d7731a6c8d16ce28a62a739a60"],["/images/dl/105.png","b8a11e56f84cbd023da5c531df5661ba"],["/images/dl/106.png","dd17c8a11f7f5b76a56c38e98019c89a"],["/images/dl/107.png","d9ecc9e1a424bd937bb80da878265e02"],["/images/dl/108.png","92dadc873698dd6b2ef82e704fcbd647"],["/images/dl/109.png","764ba408eb6e5f60b496f3ca28cc83f6"],["/images/dl/11.png","34a8bbc88a333fc1c814e516a170afbc"],["/images/dl/110.png","7fa7ddcaf13c866e940aa176cc9abc2c"],["/images/dl/111.png","9c8b8224afbaf9da7a133e4fb47db202"],["/images/dl/112.png","85a50866d113ec1a5b74f6a2429465ac"],["/images/dl/113.png","f6b40f980ccc3bfdb8612b3df7d26681"],["/images/dl/114.png","7ac6605df0aa00d89b33b46935480ec7"],["/images/dl/115.png","a7925e77be39580d582d23f1ae2c2d7c"],["/images/dl/116.png","291b5652dd7b1e5a0a22ec5888dd0ae6"],["/images/dl/117.png","36483a1cda4bba80601aca92598db2ee"],["/images/dl/118.png","cc10fd547e2094b82e90bc3392b714d1"],["/images/dl/119.png","712089d980526e5239253638703980aa"],["/images/dl/12.png","edbd20c0f9be696722864416805f8ab2"],["/images/dl/120.png","94d4ed5a2a8db1d03192b10098415b3f"],["/images/dl/121.gif","a2afa892b7b37c37871701f374e4b5ad"],["/images/dl/122.png","0ea990077c7f9144c9321f3ed9c56bf9"],["/images/dl/123.png","be8c221c9306341acac8f91bf097cdbd"],["/images/dl/124.png","5c61222626f4efca142fdc78d62a4fe4"],["/images/dl/125.png","b1b458a4e0ad89f06e34e436673489ef"],["/images/dl/126.png","e91bbeef4c4a56ade881fb668addfab2"],["/images/dl/127.jpg","3f4dd207f75f3869c6e744120624fc8f"],["/images/dl/13.png","dd2781bbd52cd08b85822b27e704b223"],["/images/dl/14.png","a4f4a768b9e09d0edb0fb2b61bd6d890"],["/images/dl/15.png","11ccd1c7126bdada66328b00acd38ba4"],["/images/dl/16.png","431eca388a571f6ae2c97f355d4269ae"],["/images/dl/17.png","c785b250216adeb5bb3f7dd344e7e2f3"],["/images/dl/18.png","d0dd40f0001931557dafce3aa70e3f5a"],["/images/dl/19.png","e4aaac069b33a7fea0149cf0b220b2f3"],["/images/dl/2.png","488e19f06f5be0baa222ebc4ebf1f42f"],["/images/dl/20.png","4156882cdf4536bd465bf20630af6356"],["/images/dl/21.png","b215a29f6ecdd03485d9e0a45c9f786e"],["/images/dl/22.png","a96b71719979b2f64d394ecf26191dc1"],["/images/dl/23.png","049c7f3f8c8fb2b62f1ee23fffb1f94a"],["/images/dl/24.png","e311ddc1bc77c0069fc4c653d268f8de"],["/images/dl/25.png","2eabfc24c384e106ae088fa0d080e219"],["/images/dl/26.png","cb13ad3a876f65abfd9bedd5eab6d50d"],["/images/dl/27.png","a652a08f3b6e0b9b82a5556c26e15ea1"],["/images/dl/28.png","3726c0ea2c92a818dd385a8a9237187a"],["/images/dl/29.png","d202d133bd5e7142daf150ea2c300ee1"],["/images/dl/3.png","32643ac5d88e9288e6a91c545228f870"],["/images/dl/30.png","4a6eb0c7c5f7cae3430dd73266286610"],["/images/dl/31.png","230dd5d7b594b13641024ca7c16af9e6"],["/images/dl/32.png","bad29ccda756fa14816c2b7a3d5d60e1"],["/images/dl/33.png","6b47a20743481a7c84cafdddf7aa2b15"],["/images/dl/34.png","544f56c796819c8a2bd76e2008d73b3d"],["/images/dl/35.png","69a494d534a93002d5052f96d54458ea"],["/images/dl/36.png","c7cff050ff6232ad5827e4e0bca493c2"],["/images/dl/37.png","00861b87acf6f356ab7e36cc2f3b8f75"],["/images/dl/38.png","308794ff0c29eda49e3c9f7e72f193d6"],["/images/dl/39.png","031796e81c3dadb6d2c6521ecf824728"],["/images/dl/4.png","b13463143252da800adf2134fdcca283"],["/images/dl/40.png","9193fdaea78a9ecfb2ce346bc2245e62"],["/images/dl/41.png","6efe6e2ed3fa4763693fa7808675a717"],["/images/dl/42.png","e41671954c7e6efa4a80ed2827723a39"],["/images/dl/43.png","d616cae510f75ff0ba75532f13afb680"],["/images/dl/44.png","a1df61f0242f00b7b3dec380f2b82a5e"],["/images/dl/45.png","9880d436563d3e748d4a97219a932de0"],["/images/dl/46.png","ee3823c14cbbc0c4e719d8fa2b70284e"],["/images/dl/47.png","a9654809288507227ddf5091381bd52a"],["/images/dl/48.png","a7f47763bca3b758e0377e4eb3697014"],["/images/dl/49.png","c8b694fc337ffd2822a82ea078a7fd94"],["/images/dl/5.png","ccc04cbc94995b21ae682ed9a9b4b0e4"],["/images/dl/50.png","0b74840b70c5362adbb1ae4d831daa40"],["/images/dl/51.png","add48b535c67dd7ba2d89c2b47d62e4d"],["/images/dl/52.png","ebd47a5ef3557d1857288ea842ed846f"],["/images/dl/53.png","6543b1ebd8f9e1eee6867ac98c377656"],["/images/dl/54.png","e42c09127df542958d6790eb239e2703"],["/images/dl/55.png","0f3bb7248a6e465c0f04c44fd7102458"],["/images/dl/56.png","15ec6905fa793e164de60e8dfd016e50"],["/images/dl/57.png","3a1615a4dae148791518372dfca9684f"],["/images/dl/58.png","5babc414eadaabf475ea5310705d42da"],["/images/dl/59.png","de74751a92a1fa9d22241269545fa578"],["/images/dl/6.png","0c7b467b8c118601b3e4b72e8ee00009"],["/images/dl/60.png","92221b8c62fce1c98467d355237d2986"],["/images/dl/61.png","b77632cd591a92dbfd4cb3a2f3eb707e"],["/images/dl/62.png","f5eca88a4d1b4ff99462d6004037c0b1"],["/images/dl/63.png","2d596bc4776088dc2d7f12035cf9625b"],["/images/dl/64.png","0be91314f6ce792e335eea451fb432ac"],["/images/dl/65.png","cfb0302ad749c7ee33c3a4c0fd048cb3"],["/images/dl/66.png","99a4396798a3703de705d5ef583cc53c"],["/images/dl/67.png","c814ee1f17b1b6e023a2959ecea105f4"],["/images/dl/68.png","32e5647c3a3262d28abd2c801a2499b4"],["/images/dl/69.gif","6428cf505ac1e9e1cf462e1ec8fe9a68"],["/images/dl/7.png","1f98a655f5df7b72a03645ee48043dc3"],["/images/dl/70.gif","cb80c7a8c655585f38038c4876381722"],["/images/dl/71.png","26d9cc4df1edfe2c7ce2b3bec07fcf93"],["/images/dl/72.png","de5ad70ced9e378b87cc5cc3e5068ade"],["/images/dl/73.png","8704e85c81f02d3148f5013f928e622b"],["/images/dl/74.png","40148a094025824911637637e6f0a71b"],["/images/dl/75.gif","2cdd2ec54569879ca045e0ed090f34a5"],["/images/dl/76.gif","395aa82f1e59cf80e8e17a9209bc22f2"],["/images/dl/77.gif","510c9a35e6f332d4d042e3154a59355c"],["/images/dl/78.gif","8a63c07ac20ee5e5097b8a9e9327012a"],["/images/dl/79.gif","9e9a49afd76a80bda8a6362e6a32dc1c"],["/images/dl/8.png","58c486bb84f43765a4b1c0170b17ed3c"],["/images/dl/80.gif","4a87f84b588768c5b5fddb2b000b92d5"],["/images/dl/81.png","c6557ae392175f3284cff96ede632ca3"],["/images/dl/82.png","8c6e03a4ce27b1546860f1a4994ded2f"],["/images/dl/83.png","3230fe6ea57bf3bb56197b60c744873b"],["/images/dl/84.png","b32db2843c3da7a1434e07286a767202"],["/images/dl/85.png","aaaeb673c62631407bc0417bf30a2209"],["/images/dl/86.png","cc201aa344c97773b92d4a24a3eb4756"],["/images/dl/87.png","153a890f1412bea4542d568d2f071fc7"],["/images/dl/88.png","effc36ef946164373a8bf243961d88a1"],["/images/dl/89.png","2686299a083de7d34f0f4215884ca4a7"],["/images/dl/9.png","07509d765897a7512d5beb635d3c4179"],["/images/dl/90.png","a56a0f6071eb3fcdb76968b4a32d5e5c"],["/images/dl/91.png","6ee325d3906f10f2793fbb01e489930a"],["/images/dl/92.png","0c8d438c12bce0260b16cf270db56f0b"],["/images/dl/93.png","6c92ffc515ccbe08a5abd79a3cb80b9c"],["/images/dl/94.png","808edd0a07d8cbabf336dd9dca8d4a26"],["/images/dl/95.png","45f3b7701551fa7df5f9be047c75500a"],["/images/dl/96.png","9a3c4effe6fba0aae2fb580155c4c55d"],["/images/dl/97.png","bd2706173398f50c2831c4e192b9f352"],["/images/dl/98.png","37d39a650706f2df9b766fe478e52587"],["/images/dl/99.png","058d5dbc14ded7c21715436648e21181"],["/images/docker/1.png","052bebd4e60c59be51857684e5e6fc0c"],["/images/docker/2.png","28f04eea1e73e7c0e0c466756c9c2c62"],["/images/docker/3.png","82a26c321e81043540818baaea77eb38"],["/images/docker/4.png","367c99cdceb0f81b378c075904c88644"],["/images/docker/5.png","e414ffe973288941a51e9cde7d92bb71"],["/images/docker/6.png","d559cb65466a900edb0d7983917ec37c"],["/images/docker/7.png","ac71dea1600d19598053c5607e7975a1"],["/images/docker/8.png","d9b777921984636623864ec2b250e298"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/math/1.png","be08ac320a3fafd4b6cb9a2a820a3b42"],["/images/math/2.png","82c7788477186d13876fa2783fb31305"],["/images/math/3.png","c4dbdce9ea65b388f307e4c2b6701c7a"],["/images/ml/1.png","0614e4691064abbff74cb69212e2a466"],["/images/ml/10.png","ee1e7358cde8b8137ce684b0c4365e04"],["/images/ml/11.png","c86479f988d4dc6b87074724f42e35f7"],["/images/ml/12.png","35ff221fa6ca14c635bfef76cc5a2991"],["/images/ml/13.png","f1bc25e32ad10b0d7b0c9ede788a5b88"],["/images/ml/14.png","2f592eda3505117752f6719aba65edac"],["/images/ml/15.png","0c8117df94fa4c145e2c2943e2247ec0"],["/images/ml/16.png","5705759f62883d83028290a0933e5c86"],["/images/ml/17.png","eed841d914da17d258adc9852c83b745"],["/images/ml/18.png","7863315ccc29fb1c24e27d2a5fcd477c"],["/images/ml/19.png","e3307673fa4d5889a52012dff9c03ceb"],["/images/ml/2.png","9d72b6ab1efe7d92a0f75e376681e549"],["/images/ml/20.png","73daa252e5311ade27160a65cc61c9a7"],["/images/ml/21.png","2749400036f8bba7beaa0ab3224f5389"],["/images/ml/22.png","aadd1c4aa269c129958a013d84e42492"],["/images/ml/23.png","80937bc77f36a5d6310ddbde34c091ed"],["/images/ml/24.png","810369b827c1d376ae5a0e6bbf0c2761"],["/images/ml/25.png","8ba5410eb67aa3cb734596ab0b7abbf3"],["/images/ml/26.png","e702d97bf87a16ac98d9b96357a50224"],["/images/ml/27.png","eb5810d90beb005e0921b5bdce4278cb"],["/images/ml/28.png","daf6146665cd93ff43b7c0537d26931b"],["/images/ml/29.png","faf61ee7aef34289909db13712731ef5"],["/images/ml/3.png","05763899f89a3aec00df11ea2a7a976c"],["/images/ml/30.png","521f8749d93cc41c604307333b8ecb20"],["/images/ml/31.png","61e322d57e7a6468cbca48304ae94cd4"],["/images/ml/32.png","6ec323b582e8562c93c1d6640f4d807e"],["/images/ml/33.png","0d1cdd5ecbf216003f28746db2b33b6d"],["/images/ml/34.png","64b7033aec57515e301161d85f8e4e30"],["/images/ml/35.png","edf088702e0177920a94b3508bec7ec7"],["/images/ml/36.png","fb5a9ddea3a45786bdf11c415e147896"],["/images/ml/37.png","60914873dae6567b8e68ec45ec6b59dd"],["/images/ml/38.png","2b8b5cff6aa6292c46ac594c30027790"],["/images/ml/39.png","1d3d3d21aac91a1e4a2b16c45345d3b7"],["/images/ml/4.png","d1d10f45e987ea4af1c4b7086c5f745b"],["/images/ml/40.png","772e151cc0187377b8640b6769125b96"],["/images/ml/41.png","481ba1d4954007c7eb74aa89f44cc220"],["/images/ml/42.png","3b812196cfcc9fd92a8eae2eba443cfb"],["/images/ml/43.png","cd5f999f7915a1797b3a4c1bd1a63484"],["/images/ml/44.png","37eb471cb2476713b4491a3d747e8f5c"],["/images/ml/45.png","df3980f9a53928768f0949eab0dda0f6"],["/images/ml/46.png","d9a4bc126242de84d18bf1a616961bc3"],["/images/ml/47.png","ecc436ba7ba75ec5c422ecdd700219d6"],["/images/ml/48.png","a154e7896b59f7c4feb7fd9869350494"],["/images/ml/49.png","e9cc736869a7161cfefc7e1961c2d9aa"],["/images/ml/5.png","884a734410b3627a14981c481b27c583"],["/images/ml/50.png","6900e08fcd02c9a9bcac17b1c7d68fad"],["/images/ml/51.png","1ecd25e8788aac72f2f6d2440ebdccde"],["/images/ml/52.png","e8a96085b9487570772875b5f40c5a64"],["/images/ml/53.png","6ed613d5f1a4465a670ee7557dd29575"],["/images/ml/54.png","4fba1f8adf3b0bac8f6cd911016e97d9"],["/images/ml/55.png","f772762d3dc7b6927ca73e276bacd35c"],["/images/ml/56.png","20827caf527ef20652b21adb8e143e96"],["/images/ml/57.png","3bfb68f2234dfdb64aa5286d49a04f79"],["/images/ml/58.png","291a3424c7bff0afa585bfa7f09d67de"],["/images/ml/6.png","bbd2772718a23a1102b2201f78413d6a"],["/images/ml/7.png","c753cbfb65ed9638e82e5d0140028f82"],["/images/ml/8.png","0432f07c0cec1708d787798042156c21"],["/images/ml/9.png","2870280e8d3cedaee23818114a3cc02e"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/py/1.png","15b7ebe86935d45e017776bdd2e2e2d7"],["/images/py/10.png","30a401b3d7e75a8e237f0b805f583e4b"],["/images/py/11.png","59051625b36f69ecb18a6174a04b4368"],["/images/py/12.png","0738f0be3b1b72d1f66f6ec218d76675"],["/images/py/13.png","aabc1941943d19cd9c26b4c97b991415"],["/images/py/14.png","f09e867b7e33ab28bb509208efdd4928"],["/images/py/15.png","af9b8898e56514fa1c060e35d316066c"],["/images/py/16.png","ba5ec4e869bae45070e08f64788ecfbe"],["/images/py/17.png","82fe7ec533b75c5b9ed5e677f57eeaa9"],["/images/py/18.png","f651173cc0a9b4a8dcbdd495f73f882c"],["/images/py/19.png","db20315678cbcad8dd4f0d4bd72cb991"],["/images/py/2.png","589c0581b9b1da7112120f6a1f320fc3"],["/images/py/20.png","7670ef568945df192b81f0dc0f3d3f7f"],["/images/py/21.png","dffafdf930d818b664746a166cbb97bd"],["/images/py/22.png","e42a0fc9bec94fcd5207dd39ee46dc5f"],["/images/py/23.png","729ce256675ed1b5be435ba49e07d5fe"],["/images/py/24.png","3178aad732fb3a59fd6b9f0522d0c84e"],["/images/py/25.png","23dee90b7ba96de076a6bfbc7e9f9fc8"],["/images/py/26.png","5f27264c4cc5f1066086d4a6dafe68df"],["/images/py/27.png","2a30cc59399a637db839057f86d8c331"],["/images/py/28.png","f8ddf9a9bdfb76086c414c8561a7c756"],["/images/py/29.png","e6a08a36098bc987d119f57a9b273829"],["/images/py/3.png","46d73ca2a738a321e189608497c35b78"],["/images/py/30.png","aaad070ba988fc223be70b8be8d1a694"],["/images/py/31.png","2190bbadd784c89153ca10aacaa212d7"],["/images/py/32.png","4ebc4497b4ffff11e8ed5bb12a592cee"],["/images/py/33.png","a912118468c632d485625969bbe13b28"],["/images/py/34.png","8647e22d53f209413add44e80c22aaf0"],["/images/py/35.png","f98376dfc1b6b6885ce35e0e29831c12"],["/images/py/36.png","63b48f45c30f1f4274506b01ccd2aaae"],["/images/py/37.png","66a568168cb34596f4d2b61f701f0c41"],["/images/py/38.png","4ec3117c6e4660417f25420015680ef0"],["/images/py/39.png","1d31399d3f0ef916447931f88ce3398d"],["/images/py/4.png","beabd345ad64e22ed6750c13f7d35e90"],["/images/py/40.png","7b19dffc350d03bcf0de1c9477e93105"],["/images/py/41.png","593c6b113bc67e90339d819616bd1277"],["/images/py/42.png","20c75a35c4a4b07faf07daf9475ce1ff"],["/images/py/43.png","6c673a7ef4a3fc5ea9169a3fbd61f80e"],["/images/py/44.png","2334590711560011876de8c746b18604"],["/images/py/45.png","1441f705d69261450da8c5233ab02d0f"],["/images/py/46.png","616c6ab2d9c8eb007952017c7452d6d7"],["/images/py/47.png","004175268fd9029f7d09d1503670370f"],["/images/py/48.png","489330b4f78c3796b20042589808f8bd"],["/images/py/49.png","58a224ddfb5f57a12f48f3b4e3cbd0d0"],["/images/py/5.png","771c59a4e854122793a682f106fa08e5"],["/images/py/50.png","bfa901b645deced8dd1f9a8c26778f25"],["/images/py/51.png","2ffadace686f78c1414244d872d398fc"],["/images/py/52.png","2e3ec0d057d100e4e8ea5f0212e5c998"],["/images/py/53.png","17bb9979be17d13b90357c57139da462"],["/images/py/54.png","c23d69845f72a73fa3e2f1fb84771c56"],["/images/py/55.png","8535760aff99ceb4b556f7b97796d94c"],["/images/py/56.png","59ec9ba92d7ccd2c716228a1a8455ccb"],["/images/py/57.png","15bc87041ac4b1c7b3525b314fb7ef66"],["/images/py/58.png","5f94f3e9e9c6e104566bbb1b600e1fac"],["/images/py/59.png","bea377ca62ca75ab5d71c430b0355931"],["/images/py/6.png","833af6f79eead78a0888a42a24a7c35b"],["/images/py/60.png","ea730c5befdab80ca63dbcce82b3e4b9"],["/images/py/61.png","a6562d29f44817c17e7be41238aaad7b"],["/images/py/62.png","7d457435369276895070e3dd61c9462a"],["/images/py/63.png","91015ba12e25b0f895687581ce6bcb25"],["/images/py/64.png","20a15a250b09f9e4604ab3550b9700c3"],["/images/py/65.png","fe52bf0b2570638b2d22d72a27152e1c"],["/images/py/66.png","d3025a5e94f7bc525362d1f2e7745078"],["/images/py/67.png","2f7ca0e327c55df4f003210905190792"],["/images/py/68.png","6f7279dbb187720b89c66250c986e965"],["/images/py/69.png","a44c673d20cbcf45db156036bd983034"],["/images/py/7.png","d947a703f79658536cb2750914637ffa"],["/images/py/70.png","8a87dfa24f54a8547ef6826d3b6289f4"],["/images/py/8.png","20b867d8137281e9c3a40b802df75680"],["/images/py/9.png","e4639c570e7f7a04e90439456ad297c5"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/reptile/1.png","6d0aa92af42a4647977a03707bade702"],["/images/reptile/10.png","79f309da23b6b5b8b9effd25cc20abd9"],["/images/reptile/11.png","e60854e61ed69c6cccb12196fd947705"],["/images/reptile/12.png","ae4ac9f4065966955a3f31fa4b2292f3"],["/images/reptile/2.jpg","f722e57e21e3d76ebedb6667bfd44aed"],["/images/reptile/3.png","b4161135bc5a889337f36a3a0c20dc6f"],["/images/reptile/4.png","73b18e616e9134ffc1aaeb4ed1c29dfb"],["/images/reptile/5.png","318877d0e3a7337773fc301d6c5118eb"],["/images/reptile/6.png","f39ae0da0e1d343ec162f5db6ade59fc"],["/images/reptile/7.png","26491b8984ce6b22c76ebb6372f912f0"],["/images/reptile/8.png","15bdc5c257f7c109f184f9872c57b2d5"],["/images/reptile/9.png","92e8ffd5026d530e630b6ba90c23236f"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/tools/1.jpg","5bf773e6fdaf0c6573c4578ea232dc21"],["/images/wechatpay.jpg","07f0995337e2a1c8d2357e5659ec120b"],["/index.html","2f13855d92a0427f59668e030ea49671"],["/js/src/affix.js","ca3741a957addce36feee35adaa73298"],["/js/src/algolia-search.js","a83353e3ef8b24784f75ed3ff2fdfe0a"],["/js/src/bootstrap.js","691730e9fb85427ea0c0a2808ecb9306"],["/js/src/exturl.js","2aed1776ab926965399c828ea9248047"],["/js/src/hook-duoshuo.js","69c9e8e7c817f84ad3da5d99c114bd38"],["/js/src/instantclick.min.js","9870e0dc13978e9e959f84b0bd038ce6"],["/js/src/js.cookie.js","1f8988b8f707aa76f68193b7eeb04352"],["/js/src/motion.js","c5fc96eb9d046b8d9c2e0324bf6675b0"],["/js/src/post-details.js","4a322b3ff8a2c8c0f7db43a1d487b533"],["/js/src/schemes/pisces.js","eb983d93baa7fcffc3c031f1a0831fde"],["/js/src/scroll-cookie.js","7fe2f93f2fa72dafa345224d06039e71"],["/js/src/scrollspy.js","73a1e4581deffef26468543764eabe6d"],["/js/src/utils.js","55067c5965f621daa5a671a468cafba8"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c551f6235e8983c944636bba17d6dab2"],["/lib/Han/dist/han.js","99ca9d9c9f036f67e59e1e2aec07d88c"],["/lib/Han/dist/han.min.css","572d3d7d7fc125531c04139d5b1063e0"],["/lib/Han/dist/han.min.js","6d8b9f3cc54791b570dbbd8a79603ec0"],["/lib/algolia-instant-search/instantsearch.min.css","473f62c616270395fc6c6fafb3ece24a"],["/lib/algolia-instant-search/instantsearch.min.js","00c6598a923ee118198a2ad37a56a8ad"],["/lib/canvas-nest/canvas-nest.min.js","e3b5ca737c7772a8b64264edd1f11f97"],["/lib/canvas-ribbon/canvas-ribbon.js","471a96a2b730a9fd3c4bf80095560e3b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","864854a8ddc7330cee5770e2405bed96"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b3782651b749036a0b041a7cebcb34f8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","eca96c3c9a6b17806b321247fc5b297c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","27886e69f7945d23797505cac704184e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","6daa67191d97ad400301cb9c13ad644d"],["/lib/fancybox/source/jquery.fancybox.css","f3a2765e5acb322945ff186b8c57142b"],["/lib/fancybox/source/jquery.fancybox.js","614a355d6223e1cbffbb00e7d6895bb3"],["/lib/fancybox/source/jquery.fancybox.pack.js","25784f36ae907d20437c2a6b6e01ef97"],["/lib/fastclick/README.html","e91429acb7aa2c47b4733a163a3ed5f8"],["/lib/fastclick/lib/fastclick.js","fe0317c024ab8b4d6417b45064b1de75"],["/lib/fastclick/lib/fastclick.min.js","f1910ad4aeec87c331a05b37c8347919"],["/lib/font-awesome/css/font-awesome.css","01f3ee7f841d71eaf7dd95f189faa794"],["/lib/font-awesome/css/font-awesome.min.css","01f3ee7f841d71eaf7dd95f189faa794"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","1049a88f5f611b54bdb3b980fecd7a20"],["/lib/jquery_lazyload/CONTRIBUTING.html","c1ce44e8daf31a8ed8055737c56108ae"],["/lib/jquery_lazyload/README.html","bb7657bea50d1ecdc4a1f2fb5fb53636"],["/lib/jquery_lazyload/jquery.lazyload.js","9e91866f3285195a2319a5a9718b7b27"],["/lib/jquery_lazyload/jquery.scrollstop.js","650714cf118c1abe4ca1edc87c205d8c"],["/lib/needsharebutton/font-embedded.css","e17424bd59f35d515abdbf5a1a273088"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","81c8ccf8e7cae880c5a01cb685aa5963"],["/lib/pace/pace-theme-barber-shop.min.css","40b2018e10ce533a76fc7c028a07b210"],["/lib/pace/pace-theme-big-counter.min.css","60b5efcc95ee9940e31d081ee18785b2"],["/lib/pace/pace-theme-bounce.min.css","144c750fce1ace04da72a270fee59a06"],["/lib/pace/pace-theme-center-atom.min.css","cc0a4b9333b75cad42728524fb0fa602"],["/lib/pace/pace-theme-center-circle.min.css","75611d306c676b7ff17b4c4d0b95dff4"],["/lib/pace/pace-theme-center-radar.min.css","c55eab122ed6bd3910a4371778b0bc3e"],["/lib/pace/pace-theme-center-simple.min.css","272384e4c1fab6b16b7a85b7ad4c7e37"],["/lib/pace/pace-theme-corner-indicator.min.css","9a0a7d953be9dfd1897ddd3304a81a69"],["/lib/pace/pace-theme-fill-left.min.css","2a9e5a52141e3c0fcc2e66b2c7ae6002"],["/lib/pace/pace-theme-flash.min.css","9d7882db7cba81006af31a5453bdc2f4"],["/lib/pace/pace-theme-loading-bar.min.css","a34002afb9d926f7072bb8fe39a1a9d6"],["/lib/pace/pace-theme-mac-osx.min.css","c545648ac064362d9dec9af80616fdf6"],["/lib/pace/pace-theme-minimal.min.css","8ca5c4407656b95e1d89e9bfed37d588"],["/lib/pace/pace.min.js","3ffefb28e6aa71700ec2678694d24348"],["/lib/three/canvas_lines.min.js","039cba9acddddb08eec16a93f06da642"],["/lib/three/canvas_sphere.min.js","f4ac0a0138a2a16267ab0694aa0c06e2"],["/lib/three/three-waves.min.js","dde686c773b26e031714d8717b8f0ca4"],["/lib/three/three.min.js","da401a941845c1dfdd8111272280c25f"],["/lib/ua-parser-js/dist/ua-parser.min.js","497158764f6941236f1597c4d8b86dc0"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5576a81fae0b05bd30f6a1a3f7aff3e6"],["/lib/velocity/velocity.js","849699c74698342c5e68211528ab8e06"],["/lib/velocity/velocity.min.js","feec804a65f056a8e29d95c78337e7a1"],["/lib/velocity/velocity.ui.js","3c903da22256e9d208eec0ad31791a06"],["/lib/velocity/velocity.ui.min.js","10ef1dbcf6d4f0a3e7fcfc3d01d95edf"],["/page/10/index.html","b569b9952fb7daf3faeaad0b88c62f59"],["/page/11/index.html","b9993299dc99ce3af4830d1cf72c89d7"],["/page/2/index.html","14ca472260e38a1bc1b1e74e60ea22b5"],["/page/3/index.html","92b108ef40ed03580e70a93316715faa"],["/page/4/index.html","22531e19499ecb1895df9bcf766e0997"],["/page/5/index.html","f05c3fff8035d9ccc6d044177c374f0e"],["/page/6/index.html","1ed4825453f0c1a0cc79bc2dfed311d6"],["/page/7/index.html","8e97eea5ffced2495beb07c5a1bd8903"],["/page/8/index.html","171e2f7b312d23e517f6971ff2c0a193"],["/page/9/index.html","7ded1d3573a97fc4aa1aac986c51a16e"],["/sw-register.js","7dae5321451f0adea51ad9bade34a80a"],["/tags/CNN/index.html","513c4b3e9a2599478be79221b8ceaa0c"],["/tags/DNN/index.html","a25f7fa067aa92d80a34534f59d9a319"],["/tags/DeepLearning/index.html","37f161e643984be63d54916d1f8bd96b"],["/tags/DeepLearning/page/2/index.html","399253a2a52cdfb16eda9cec3748b0be"],["/tags/DeepLearning/page/3/index.html","f956e1b3de075a44c17ed6ed5cd36f43"],["/tags/DeepLearning/page/4/index.html","2f03f80f63239b45562ecab152ba907f"],["/tags/DeepLearning/page/5/index.html","f34ac1d17f7d714f88ea0cfdc87706b0"],["/tags/EM/index.html","faee5a57f009fcec760f602ce766d184"],["/tags/GAN/index.html","b6bfd9f2d5214cdabab4f42ad2652dbf"],["/tags/GIT运用/index.html","170eb9701ae7edaaafb3b180ebea2f75"],["/tags/Keras/index.html","e6a35a2f48e0f3ef76e4988f76e8e466"],["/tags/MachineLearning/index.html","13697e068b2b943edb6b4368ef07a1d0"],["/tags/Python/index.html","bf911ac1bc8eb9346a18743da56be720"],["/tags/Python/page/2/index.html","c1032221eaff7b3b8a51276cd505c00f"],["/tags/Python基础/index.html","bbce412d928d7361ffa2df828ced2e63"],["/tags/RNN/index.html","584d299fdf9fbb6a0171cddf461d2748"],["/tags/TensorFlow/index.html","489ceeed66f3769eb45035298342e16a"],["/tags/TensorFlow/page/2/index.html","0fe8a5b0e1aa5cdce75bd0c00e11d227"],["/tags/TensorFlow/page/3/index.html","b2cf1a31149cf2999aaeb5c7228cdf5f"],["/tags/anaconda/index.html","eb322ba2492c75829d77bc79f30d0519"],["/tags/docker/index.html","da106d5181d4e4e86fec0c99c4626778"],["/tags/git/index.html","d6af2e4441e98553439da14418981dc2"],["/tags/index.html","8e64d2bdec5a38d00d7f652cdc861fc0"],["/tags/ios/index.html","da94d715a59fe75a1c6da467a285853e"],["/tags/linux/index.html","7bce5bd0ada426d4e0c80d3a05569477"],["/tags/markdown/index.html","cc3e2c7905c58ceba54e5ee40c94400a"],["/tags/network/index.html","9c509c8f935e783e030757f1fd33134a"],["/tags/opencv/index.html","b81b14ab8de185d082f4f716d0dbc7d7"],["/tags/pip/index.html","ed01dcfc81979e4339ae02f90e0f6c5c"],["/tags/pycharm/index.html","d119f0505858d021e7d9bb8d79d801dd"],["/tags/svm/index.html","b8ed02ba07ed6ff22ef38877de4fcf32"],["/tags/ubuntu/index.html","c9c6584acb91029607e1d3f8b06b8d81"],["/tags/优化算法/index.html","fe563b19142a40d01f6ccce6e5621777"],["/tags/决策树/index.html","fd103ef6c8ce2dff0a31b9fae8c24679"],["/tags/反向传播/index.html","013bbf9e279a04841cc1192ddd4d8e87"],["/tags/声卡/index.html","f7883b8920fdbad9f56fae4352523e2b"],["/tags/安装/index.html","6cadc44ccb5d888cdaf1f2034c9233db"],["/tags/开发工具/index.html","073882dbb6125695781810561d6c3be1"],["/tags/开机/index.html","3114d61c3c44071c1d070200744ac0ff"],["/tags/朴素贝叶斯/index.html","4898a86b8594ea1a6fce8a34b357454e"],["/tags/核函数/index.html","7ba57cc3aef2b24d60eefe721e8b0e32"],["/tags/梯度下降/index.html","af607201b28f2bf60f633d1731eaa188"],["/tags/神经网络/index.html","0896b6a5ac071e1750420f9fe9c5de27"],["/tags/线性回归/index.html","bacc2ba2c08b1430338bc70c07132fc8"],["/tags/聚类/index.html","c92ae73a037e412945a9b0253348e613"],["/tags/自动化/index.html","f2cfb5eb651fe73721ba57f85669ddfb"],["/tags/贝叶斯网络/index.html","ce066bc7685365640bbe9f7e10185ebb"],["/tags/软间隔和正则化/index.html","466662e4ecec05d675cbbb96caced962"],["/tags/逻辑回归/index.html","bfdc970c3a02489dc59527ac506a457b"],["/tags/随机森林/index.html","9ed10d5fb5634f783a03931960b244e3"]];
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
