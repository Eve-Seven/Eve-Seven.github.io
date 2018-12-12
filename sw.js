/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/08/25/2018-07-20-raspberry-Internet/index.html","3f0e897a1e8c23af9e39325f17dfd671"],["/2015/08/25/2018-07-20-raspberry-on/index.html","fee81f0ae2734f16591c0d302e0040ef"],["/2015/08/25/2018-07-20-raspberry-usb/index.html","695de891ead848b3446ab62d72196387"],["/2016/07/13/2016-07-13-GitTutorial/index.html","9c17b793a2a2f29324185f6ca93b39da"],["/2016/08/04/2016-08-04-PythonTestAutomationiOS/index.html","f2e9314e9699157aa9a88aec55cc05e0"],["/2016/11/20/2016-11-20-markdownTool/index.html","be11f113880e51c79743348d7beb3040"],["/2016/11/20/2016-11-20-neural_networks_using_TensorFlow/index.html","6682a6ba5b5697092fab7911d3c66f07"],["/2018/07/05/2016-07-05-MachineLearning_introduce/index.html","b1a85d1fc18d531f7e7502cd0441f056"],["/2018/07/21/2018-07-21-ml-linearRegressionL1L2/index.html","fc401d95e031d53e73796058e513c87a"],["/2018/07/23/2018-07-23-ml-DecisionTree/index.html","5eaa18f248ffa0f1f08fc303e7c935f8"],["/2018/07/23/2018-07-23-ml-logisticRegression/index.html","297c5f19e4304fb826c8de7b4af18a65"],["/2018/07/24/2018-07-24-arithmetic-gradientDescent/index.html","0d7a71c1c63bb330414552477d49b128"],["/2018/07/25/2018-07-25-ml-svm/index.html","597a1c8e0689c0f4d7b99ebae4a5a735"],["/2018/07/26/2018-07-26-ml-svm-L1/index.html","05022ae7e85baf60965712a853899817"],["/2018/07/26/2018-07-26-ml-svm-kernel/index.html","6a6d0e90c955af4a521f5caf0356ab98"],["/2018/07/30/2018-07-29-ml-clustering/index.html","36939fee68f7c6e14dab1a5996522c9a"],["/2018/07/31/2018-07-31-ml-em/index.html","2541727a5deceb43993081456df4078c"],["/2018/08/01/2018-08-01-ml-NB/index.html","402a6772532dc2c7f381d6d0d7633ecc"],["/2018/08/02/2018-08-02-ml-NB-network/index.html","20dc2acbf1914e60bfb0ac452b86330a"],["/2018/08/08/2018-08-08-DL-introduction/index.html","ac2ab57ea9bb0d4ebc9def713457e69b"],["/2018/08/09/2018-08-09-TensorFlow-windows/index.html","ba731e06d0f1b7250f6b681d433f2cf0"],["/2018/08/10/2018-08-09-TensorFlow-ubuntu/index.html","99f817d4e0d582907911bce2b0750dda"],["/2018/08/11/2018-08-11-TensorFlow-Virtualenv/index.html","66265fd123dd08864ac62b12a3af8634"],["/2018/08/13/2018-08-13-TensorFlow-course/index.html","4dd71533b65aec37f38f6bdcf4d79b94"],["/2018/08/14/2018-08-14-DL-method/index.html","d6df1047a83fc6040f894e70fdf86f57"],["/2018/08/15/2018-08-15-DL-back-propagation-python/index.html","55ef49ec919a404a872e661dde6b2be8"],["/2018/08/15/2018-08-15-DL-back-propagation/index.html","a4ac81208f5a18acc5ef17196e5f31d0"],["/2018/08/16/2018-08-16-DL-DNN-python/index.html","1b96a15542cffcb743a3e7d984c98226"],["/2018/08/21/2018-08-21-DL-CNN/index.html","9a8bf958638621886fd09ebc61f4bfc3"],["/2018/08/22/2018-08-22-CNN-back-propagation/index.html","d4e2ba78b11c1c978f961260e2aad349"],["/2018/08/23/2018-08-23-DL-CNN-python/index.html","5613866c2f0f9e3cb0ef8628df3d15e3"],["/2018/08/24/2018-08-24-DL-CNN-LeNet/index.html","1641c461b2d7a5815bf007d372db0e98"],["/2018/08/25/2018-08-25-DL-CNN-AlexNet/index.html","be7aa898325d75ba7d1a33c7679b5aac"],["/2018/08/27/2018-08-27-DL-RNN/index.html","8f0e381774a7e09ce25d271613eb2899"],["/2018/08/27/2018-08-27-TensorFlow-keras/index.html","3818212f2276e14b46899555ed440a81"],["/2018/08/27/2018-08-27-TensorFlow-layer/index.html","1caa1a561bedc43a605e9075c778fc2b"],["/2018/08/27/2018-08-27-TensorFlow-native/index.html","19ea98c996bbe613ae3e66c5d77c17a4"],["/2018/08/27/2018-08-27-TensorFlow-slim/index.html","08eb1298d0c370d52076200f79b19255"],["/2018/08/29/2018-08-29-DL-RNN-BPTT/index.html","be600a743bbf465158780e6726c12918"],["/2018/08/29/2018-08-29-DL-RNN-hand/index.html","f609b963ebd60e35482c522184028e29"],["/2018/08/30/2018-08-30-DL-RNN-LSTM/index.html","8e541c43e25ce70df00c010615bbdd00"],["/2018/08/31/2018-08-31-TensorFlow-RNN/index.html","5e3382b2e2c4b1d285632fe026c3f50e"],["/2018/09/01/2018-09-01-DL-GAN/index.html","af627dad2401b060ce3b45702322495f"],["/2018/09/03/2018-09-03-TensorFlow-GAN/index.html","d6419c957d0ed515f7830a1d3cb03ab0"],["/2018/09/04/2018-09-04-DL-DCGAN/index.html","08e5d306be1fad2de8d2df666f824249"],["/2018/09/04/2018-09-04-TensorFlow-DCGAN/index.html","60ebc12d33b022f9743eba17bd3ca97b"],["/2018/09/04/2018-09-04-TensorFlow-save-restore/index.html","162794d6c5caea59632d5aec5fa46ed2"],["/2018/09/07/2018-09-07-TensorFlow-cifar-network/index.html","d3a8c23b762723082deb7e8b2efc42e1"],["/2018/09/07/2018-09-07-TensorFlow-cifar-train/index.html","89f56d0065faedc17dc2f7baffb3ce3e"],["/2018/09/07/2018-09-07-TensorFlow-cifar/index.html","4492db95b6ff8b732d48f277bc619474"],["/2018/09/07/2018-09-07-TensorFlow-visualization/index.html","a9dfe0f2da28de30e413cebafb98eb3c"],["/2018/09/07/2018-09-07-keras-cifar/index.html","b86186b02096e414f75c5e4db2805e9b"],["/2018/09/15/2018-09-15-Pytorch-AlexNet/index.html","3f50a34541b3b8b59ed835d127b889bb"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-test/index.html","68a162170dd7cb171e12279f1a9a47e9"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-train/index.html","90bd25ac88ba7c56f36f64a8fdc3cd59"],["/2018/09/15/2018-09-15-Pytorch-DenseNet/index.html","959886529c6ebda1ae988a61fbb71af5"],["/2018/09/15/2018-09-15-Pytorch-GoogleNet/index.html","4c0c2aaee12ef4d72a0862df108246d8"],["/2018/09/15/2018-09-15-Pytorch-LeNet/index.html","19a1870e218493b3c1ea8a0b89187880"],["/2018/09/15/2018-09-15-Pytorch-ResNet/index.html","3b760f988235bd4571ad1708f46b5fad"],["/2018/09/15/2018-09-15-Pytorch-ResNextNet/index.html","142960d6ea1ab27146288e71c1af8c40"],["/2018/09/15/2018-09-15-Pytorch-VGGNet/index.html","1014d0633bca1326fbaea57b4465b6be"],["/2018/09/15/2018-09-15-Pytorch-cifar10-data/index.html","e1f45ffbf1ab5aed029b9f19da0ce655"],["/2018/10/09/2018-10-09-pip/index.html","985110e4a5a337b9d6c3624f97a8a0fa"],["/2018/10/09/2018-10-09-tensorflow-question/index.html","27b648bfe321f2330167661efd193963"],["/2018/10/15/2018-10-15-source/index.html","5db662792b8bf025968899d78b3bbf9d"],["/2018/10/26/2018-10-26-openCV-geometry/index.html","1ded1c2c401ab34f79c9d5b31d9e4338"],["/2018/10/26/2018-10-26-openCV-install/index.html","047ef5307bfcd547d2cedd5b6494e1cd"],["/2018/10/26/2018-10-26-openCV-special/index.html","c2d391f7e8a6f6fc221fce18ae812a44"],["/2018/10/27/2018-10-27-openCV-face/index.html","eac29d97f7ab1e71a4e7463bf85fee36"],["/2018/10/27/2018-10-27-openCV-svm-hog/index.html","f36ba71ab14e71ec7e0318509902f3d3"],["/2018/10/27/2018-10-27-openCV-svm/index.html","b6ac627b9a69af4a5391d3fa5af5d2fe"],["/2018/10/27/2018-10-27-openCV-video/index.html","67174892097b649bdc84efa4d48c7555"],["/2018/10/27/2018-10-27-openCV-whitening/index.html","5084a94fa0beb246563556fcb1610c82"],["/2018/10/29/2018-10-29-docker-TensorFlow-cpu/index.html","ce0e7a603d2f79ca0135e5fc6f18d071"],["/2018/10/29/2018-10-29-docker-install-win10/index.html","30dab290f5d532b7b6895adcc5bb473c"],["/2018/10/29/2018-10-29-docker-install/index.html","9114a07b38c7220aa4578f0b212b6ff2"],["/2018/10/29/2018-10-29-docker-source/index.html","0d6796b179d8a4355b94a8d654f39ee8"],["/2018/10/29/2018-10-29-docker-speed/index.html","13d957de03d2b2747eeea64a88498e69"],["/2018/10/29/2018-10-29-docker-vessel/index.html","45dbb73e2c1aafdba6f5ca77b31d5b6a"],["/2018/11/08/2018-11-8-linux-vim/index.html","f6f4c0afc6f2e8dd5a504f75f9feac99"],["/2018/11/08/2018-11-8-linux/index.html","0c386866be008d7de4d5d10fe8f8c0f6"],["/2018/11/09/2018-11-9-anaconda-ubuntu/index.html","0228435427bc812c1192513f45962a01"],["/2018/11/09/2018-11-9-anaconda-windows/index.html","2574f4d038cf0c81785f2c876ef62310"],["/2018/11/19/2018-11-19-git/index.html","d4015ed42eae9acc8039b5e041869cca"],["/2018/11/21/2018-11-21-python-date/index.html","be6344d73437f6af11446302f5d55889"],["/2018/11/21/2018-11-21-python-encryption/index.html","acc2575ad61fa692f157da268ba1ae07"],["/2018/11/21/2018-11-21-python-log/index.html","64ed1dbde333732c7633802a06179edf"],["/2018/11/21/2018-11-21-python-pillow/index.html","6e3a6381ba9c7681f835eef97301def2"],["/2018/11/21/2018-11-21-reptile-beautifulsoup4/index.html","e992be41bb0a67957200442c0e210c91"],["/2018/11/21/2018-11-21-reptile-http/index.html","7c7ae4c56323a73d301c59b2771a1421"],["/2018/11/21/2018-11-21-reptile-request/index.html","1c83f893dda6c40ae7275bf0779a946d"],["/2018/11/21/2018-11-21-reptile-tcp-ip/index.html","2caf145072e7194f23dac47dcde21933"],["/2018/11/21/2018-11-21-reptile-urllib/index.html","8ffc22bdea92424e450c2549ef0f6d40"],["/2018/11/21/2018-11-21-reptile-xml/index.html","4a9ee42ec5b7be52cd5d7d726f106d9a"],["/2018/11/22/2016-06-02-Develop_Tool/index.html","3d8296c670a812c40f683b7a8d7d937e"],["/2018/11/22/2018-07-20-ml-linearRegression/index.html","2b30c7ae673f6237c6f52ec9b302161b"],["/2018/11/22/2018-07-21-ml-linearRegression-python/index.html","bf3f7abf10320b82169194ecc28969b7"],["/2018/12/01/2018-12-01-python-numerical-sequence/index.html","65bb910dc5961f7cc4e904b2ec7cd73f"],["/2018/12/08/2018-12-8-python-sequence/index.html","9d848ec919118165509d04a449c9266a"],["/2018/12/09/2018-12-8-python-output/index.html","931f3326619f10f95b043453a1dc6349"],["/2018/12/11/2018-12-11-python-dict-set/index.html","e1cbe66159aabcc0213a657cc3d491d7"],["/2018/12/12/2018-12-12-python-if-while/index.html","63150b2dead8a18f01aac80a18f2ff25"],["/2018/12/12/2018-12-13-python-main/index.html","1b9138b20444025c5d4797573f511e2f"],["/about/index.html","c93405a030a497255abd98926907814d"],["/archives/2015/08/index.html","15db0c20d1e4c21717e33f7b5628e894"],["/archives/2015/index.html","85add78dd96f90107615119056c06d7d"],["/archives/2016/07/index.html","9963382e618f508ad81eba039892cb8b"],["/archives/2016/08/index.html","99b3e4488da86b21a475ba2613957232"],["/archives/2016/11/index.html","e2ddb8608939a878143b7303955a7051"],["/archives/2016/index.html","4a041e023eb17ab46a3b45164b7ae684"],["/archives/2018/07/index.html","f73412ec8da85502c86761500d778700"],["/archives/2018/08/index.html","b546d6842af3b101fdde697697b1e388"],["/archives/2018/08/page/2/index.html","777b308c16142c5d0793589724f53474"],["/archives/2018/08/page/3/index.html","bd867aa3b3fb8e2e12925c53e728d70d"],["/archives/2018/09/index.html","623c416da179a8a8dda75e9fc1b31ab6"],["/archives/2018/09/page/2/index.html","2bccdb401ced36487e74e02a8a73b1db"],["/archives/2018/10/index.html","7ff11cd6a8408369d8f1f927f21850ea"],["/archives/2018/10/page/2/index.html","a15db0cb7e318669e76fdfa67f043396"],["/archives/2018/11/index.html","74d5096fcc0bed8420959f6f8bb4b75c"],["/archives/2018/11/page/2/index.html","01d1b628ba086b786acad7e218cebcda"],["/archives/2018/12/index.html","ec9ce7e132208f09f81beb6e11ace46e"],["/archives/2018/index.html","238a59e57ddbd0bc9ff25a4d3e216ff2"],["/archives/2018/page/10/index.html","1a06ae0baadcb694130e67b622eaff47"],["/archives/2018/page/2/index.html","a397b7d6af56e740353f261ba5408a23"],["/archives/2018/page/3/index.html","9950dd61043e63c13ab5c49ecaa0ef71"],["/archives/2018/page/4/index.html","c921344269da097e8f96ac0a4637ae6b"],["/archives/2018/page/5/index.html","9d765f588245fe6968240fe02d5392a6"],["/archives/2018/page/6/index.html","80b877b944624b511d97a9e1f28df9e0"],["/archives/2018/page/7/index.html","b6fd0c7b70bc185e5445c2af5d6b2e5a"],["/archives/2018/page/8/index.html","92ba512ffed7b18241375278257928e2"],["/archives/2018/page/9/index.html","d037d9f61cbe502a761f6ee73c183d11"],["/archives/index.html","e3613f201e4bdae107be0568016118ba"],["/archives/page/10/index.html","cee1a5e14fcf2a9895d48ec2797c12e5"],["/archives/page/11/index.html","9e9a04b39c9f5d93d236853247e54049"],["/archives/page/2/index.html","0c1115c9b21426df5225952162c2d65f"],["/archives/page/3/index.html","883ca518a28cfbccaa93e038ba275081"],["/archives/page/4/index.html","6905c90767246375f2e39b5d104d158b"],["/archives/page/5/index.html","d4df74a9e5ecdf3d3fc6e9d1877206dc"],["/archives/page/6/index.html","f165403fe0a451f5bb533f49aebf8d9e"],["/archives/page/7/index.html","5e2e1cd46d3cff680f017beb2072a168"],["/archives/page/8/index.html","a6741ee4a0d44577f918076260c3c885"],["/archives/page/9/index.html","8b97745ad2a11c0e6f52f2684da90ea9"],["/categories/Docker/index.html","b1052572a04c59f02d4bf542fc16e525"],["/categories/LINUX/index.html","70cba51db7c745c45f4e35caf6e941cc"],["/categories/Python/index.html","e4c8ebbe8089401b7daab6ff71af645a"],["/categories/Python/page/2/index.html","b7ee2cf141fd2bc0e23fb5dd26b949d0"],["/categories/index.html","2a90f12076a602a00bab9532dc82f182"],["/categories/pytorch/index.html","1cdbdd1b992043f1e13cd3993b98408b"],["/categories/tensorflow/index.html","d490f31a09faedebffb9f55467a5788a"],["/categories/工具/index.html","f789343721235ca08f76d0bc4d762bfb"],["/categories/开发工具/index.html","b4bdecda55293d24310a5796d3ecf08d"],["/categories/机器学习/index.html","2339659d4e2924b0202622a4f371aab0"],["/categories/机器学习/page/2/index.html","03f655a6d08c54dc661f65a37adf1f72"],["/categories/树莓派/index.html","35167342ed5987cd5035fa51b79b2f48"],["/categories/深度学习/index.html","3ac4f1c1532bfb69e40cd27b8d38efa3"],["/categories/深度学习/page/2/index.html","2b4a36542b4a491413907627fb7bf77e"],["/categories/深度学习/page/3/index.html","89022518a2ba6bfdc935b8d8fc7395da"],["/categories/深度学习/page/4/index.html","c0f1dedf9e5c7ab03364535dd28466b8"],["/categories/算法/index.html","5cf875c8f09c808204a43f36f9f4c8b2"],["/categories/计算机视觉/index.html","ab0689fa53694913ec56b46b8df7262a"],["/css/main.css","add4c00e07264e9f4d69853f4aec3a9b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","a80879cd6eb38ea4678e995e91c48298"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8ee39bf6fed055723e7e4d5de051af42"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/cv/1.png","9f4f5f49612d747ea7e2af9511bf81d8"],["/images/cv/10.png","64042888a4a3f3a4eb0fa61132ec4d2f"],["/images/cv/11.png","a7d130d884954da81b5cb0bb6ec3bc36"],["/images/cv/12.png","78897d4a1ee5b035a6c1fca275d6ee5f"],["/images/cv/13.png","5bddd0353cbbe6bba6397722208f71f0"],["/images/cv/14.png","84703e200ba7bd4c81b00bdd284e995a"],["/images/cv/15.png","9e2fd155d3d155ad7929da9e6ff173f4"],["/images/cv/16.png","11fc9d7abf8eab9eabd3b1b634972df1"],["/images/cv/17.png","4a033e9738210c148a2861e2a595195d"],["/images/cv/18.png","28fef5c46c2f422225f0c6784a0c5134"],["/images/cv/19.png","6f9bf406e55081a45f2d4a7694105aa8"],["/images/cv/2.png","31c2a99f54755c697a66fd612088d5d5"],["/images/cv/20.png","3c583b642ab32b3f0e8c25d702db84e7"],["/images/cv/21.png","a566537a8176f5ad3aefb0a4e3d3a28c"],["/images/cv/22.png","1dbefbc4faf1d6d1667d75e5a6e0ad4c"],["/images/cv/23.png","a19339ed91763c182a8876008b6a65b6"],["/images/cv/24.png","d7b6fbd2e71114ace115874caa3234d8"],["/images/cv/25.png","5d8679bb4738e48ae60291c204fb082b"],["/images/cv/26.png","a621210387b76992c71e377e5b3e787d"],["/images/cv/27.png","cc070ae570b8301c7e48511fd03606a4"],["/images/cv/28.png","19234927e77a2e573d1fcd36c6ab377a"],["/images/cv/29.png","981dc034de4ca4b6e734d1a54783f9c9"],["/images/cv/3.png","e4b7d480e78d5d0c4c6a14fb31b0ed5c"],["/images/cv/30.png","89a24fa0d194fd189e619e5399bc2556"],["/images/cv/31.png","3ebb39656dbc7ff3fe0d53e61edfca4f"],["/images/cv/32.png","9eaf042f7520f23a2c7298f55c0daa84"],["/images/cv/33.png","74898282f2a1f9cb206bcfbf15676aab"],["/images/cv/34.png","0131081dd3bb72e8c15ccabbc5a181b4"],["/images/cv/35.png","8fa06daf89516d71037ad8ad5466430d"],["/images/cv/36.png","6f9bdb37ded9320389993be28956612b"],["/images/cv/37.png","e2d8710a8d1be82ba5c171404a6eeb3c"],["/images/cv/38.png","0fbcf55535e125c43eaaf142a7c16084"],["/images/cv/39.png","0f17b9745c0ee7185f3408ff3e75f6d7"],["/images/cv/4.png","b55154238e33764873083b8463030d3a"],["/images/cv/40.png","352064971be0635581af1446a20bede1"],["/images/cv/41.png","482b4b502b236b800a2e609b273fc479"],["/images/cv/42.png","54f1a474233dedf7ee3fc20c56d23be3"],["/images/cv/43.png","f315e6c996c7f06ace53f7fee13aba7f"],["/images/cv/44.png","d88e6c82ebcf85e6332a5ff18f1d6748"],["/images/cv/45.png","546d355afb836ccafb1dbf1ec6e58c2b"],["/images/cv/46.png","e78e4d34afd63907c64e342d2dd56500"],["/images/cv/47.png","0355f524fce034d2b1d9e49d15f5acf2"],["/images/cv/48.png","0890f1471e76361456983ba205a7323d"],["/images/cv/5.png","eecb4a7bba3f07b8e3025585e7752527"],["/images/cv/6.png","834ccb9069233764f549780478fcf409"],["/images/cv/7.png","61b35bb3b9b78a44a617be9dbbdbddd5"],["/images/cv/8.png","57728a4eef354a0aed3698ad06659e92"],["/images/cv/9.png","60933d0b322df2c82963159b02f716ca"],["/images/dl/1.png","b2d61d37b640c75770a86cf1e89173e0"],["/images/dl/10.png","24f2fa5c727818fc48bf3a6f8068ee58"],["/images/dl/100.png","000f1c2ee2bb7adee780317771fc1178"],["/images/dl/101.png","12d112acec2d7f48e095a61620034ec6"],["/images/dl/102.png","8109c56796810451a8d889b964548a7a"],["/images/dl/103.png","15385609e43d95f81dc4e63fff9199de"],["/images/dl/104.png","897e22d7731a6c8d16ce28a62a739a60"],["/images/dl/105.png","b8a11e56f84cbd023da5c531df5661ba"],["/images/dl/106.png","dd17c8a11f7f5b76a56c38e98019c89a"],["/images/dl/107.png","d9ecc9e1a424bd937bb80da878265e02"],["/images/dl/108.png","92dadc873698dd6b2ef82e704fcbd647"],["/images/dl/109.png","764ba408eb6e5f60b496f3ca28cc83f6"],["/images/dl/11.png","34a8bbc88a333fc1c814e516a170afbc"],["/images/dl/110.png","7fa7ddcaf13c866e940aa176cc9abc2c"],["/images/dl/111.png","9c8b8224afbaf9da7a133e4fb47db202"],["/images/dl/112.png","85a50866d113ec1a5b74f6a2429465ac"],["/images/dl/113.png","f6b40f980ccc3bfdb8612b3df7d26681"],["/images/dl/114.png","7ac6605df0aa00d89b33b46935480ec7"],["/images/dl/115.png","a7925e77be39580d582d23f1ae2c2d7c"],["/images/dl/116.png","291b5652dd7b1e5a0a22ec5888dd0ae6"],["/images/dl/117.png","36483a1cda4bba80601aca92598db2ee"],["/images/dl/118.png","cc10fd547e2094b82e90bc3392b714d1"],["/images/dl/119.png","712089d980526e5239253638703980aa"],["/images/dl/12.png","edbd20c0f9be696722864416805f8ab2"],["/images/dl/120.png","94d4ed5a2a8db1d03192b10098415b3f"],["/images/dl/121.gif","a2afa892b7b37c37871701f374e4b5ad"],["/images/dl/122.png","0ea990077c7f9144c9321f3ed9c56bf9"],["/images/dl/123.png","be8c221c9306341acac8f91bf097cdbd"],["/images/dl/124.png","5c61222626f4efca142fdc78d62a4fe4"],["/images/dl/125.png","b1b458a4e0ad89f06e34e436673489ef"],["/images/dl/126.png","e91bbeef4c4a56ade881fb668addfab2"],["/images/dl/127.jpg","3f4dd207f75f3869c6e744120624fc8f"],["/images/dl/13.png","dd2781bbd52cd08b85822b27e704b223"],["/images/dl/14.png","a4f4a768b9e09d0edb0fb2b61bd6d890"],["/images/dl/15.png","11ccd1c7126bdada66328b00acd38ba4"],["/images/dl/16.png","431eca388a571f6ae2c97f355d4269ae"],["/images/dl/17.png","c785b250216adeb5bb3f7dd344e7e2f3"],["/images/dl/18.png","d0dd40f0001931557dafce3aa70e3f5a"],["/images/dl/19.png","e4aaac069b33a7fea0149cf0b220b2f3"],["/images/dl/2.png","488e19f06f5be0baa222ebc4ebf1f42f"],["/images/dl/20.png","4156882cdf4536bd465bf20630af6356"],["/images/dl/21.png","b215a29f6ecdd03485d9e0a45c9f786e"],["/images/dl/22.png","a96b71719979b2f64d394ecf26191dc1"],["/images/dl/23.png","049c7f3f8c8fb2b62f1ee23fffb1f94a"],["/images/dl/24.png","e311ddc1bc77c0069fc4c653d268f8de"],["/images/dl/25.png","2eabfc24c384e106ae088fa0d080e219"],["/images/dl/26.png","cb13ad3a876f65abfd9bedd5eab6d50d"],["/images/dl/27.png","a652a08f3b6e0b9b82a5556c26e15ea1"],["/images/dl/28.png","3726c0ea2c92a818dd385a8a9237187a"],["/images/dl/29.png","d202d133bd5e7142daf150ea2c300ee1"],["/images/dl/3.png","32643ac5d88e9288e6a91c545228f870"],["/images/dl/30.png","4a6eb0c7c5f7cae3430dd73266286610"],["/images/dl/31.png","230dd5d7b594b13641024ca7c16af9e6"],["/images/dl/32.png","bad29ccda756fa14816c2b7a3d5d60e1"],["/images/dl/33.png","6b47a20743481a7c84cafdddf7aa2b15"],["/images/dl/34.png","544f56c796819c8a2bd76e2008d73b3d"],["/images/dl/35.png","69a494d534a93002d5052f96d54458ea"],["/images/dl/36.png","c7cff050ff6232ad5827e4e0bca493c2"],["/images/dl/37.png","00861b87acf6f356ab7e36cc2f3b8f75"],["/images/dl/38.png","308794ff0c29eda49e3c9f7e72f193d6"],["/images/dl/39.png","031796e81c3dadb6d2c6521ecf824728"],["/images/dl/4.png","b13463143252da800adf2134fdcca283"],["/images/dl/40.png","9193fdaea78a9ecfb2ce346bc2245e62"],["/images/dl/41.png","6efe6e2ed3fa4763693fa7808675a717"],["/images/dl/42.png","e41671954c7e6efa4a80ed2827723a39"],["/images/dl/43.png","d616cae510f75ff0ba75532f13afb680"],["/images/dl/44.png","a1df61f0242f00b7b3dec380f2b82a5e"],["/images/dl/45.png","9880d436563d3e748d4a97219a932de0"],["/images/dl/46.png","ee3823c14cbbc0c4e719d8fa2b70284e"],["/images/dl/47.png","a9654809288507227ddf5091381bd52a"],["/images/dl/48.png","a7f47763bca3b758e0377e4eb3697014"],["/images/dl/49.png","c8b694fc337ffd2822a82ea078a7fd94"],["/images/dl/5.png","ccc04cbc94995b21ae682ed9a9b4b0e4"],["/images/dl/50.png","0b74840b70c5362adbb1ae4d831daa40"],["/images/dl/51.png","add48b535c67dd7ba2d89c2b47d62e4d"],["/images/dl/52.png","ebd47a5ef3557d1857288ea842ed846f"],["/images/dl/53.png","6543b1ebd8f9e1eee6867ac98c377656"],["/images/dl/54.png","e42c09127df542958d6790eb239e2703"],["/images/dl/55.png","0f3bb7248a6e465c0f04c44fd7102458"],["/images/dl/56.png","15ec6905fa793e164de60e8dfd016e50"],["/images/dl/57.png","3a1615a4dae148791518372dfca9684f"],["/images/dl/58.png","5babc414eadaabf475ea5310705d42da"],["/images/dl/59.png","de74751a92a1fa9d22241269545fa578"],["/images/dl/6.png","0c7b467b8c118601b3e4b72e8ee00009"],["/images/dl/60.png","92221b8c62fce1c98467d355237d2986"],["/images/dl/61.png","b77632cd591a92dbfd4cb3a2f3eb707e"],["/images/dl/62.png","f5eca88a4d1b4ff99462d6004037c0b1"],["/images/dl/63.png","2d596bc4776088dc2d7f12035cf9625b"],["/images/dl/64.png","0be91314f6ce792e335eea451fb432ac"],["/images/dl/65.png","cfb0302ad749c7ee33c3a4c0fd048cb3"],["/images/dl/66.png","99a4396798a3703de705d5ef583cc53c"],["/images/dl/67.png","c814ee1f17b1b6e023a2959ecea105f4"],["/images/dl/68.png","32e5647c3a3262d28abd2c801a2499b4"],["/images/dl/69.gif","6428cf505ac1e9e1cf462e1ec8fe9a68"],["/images/dl/7.png","1f98a655f5df7b72a03645ee48043dc3"],["/images/dl/70.gif","cb80c7a8c655585f38038c4876381722"],["/images/dl/71.png","26d9cc4df1edfe2c7ce2b3bec07fcf93"],["/images/dl/72.png","de5ad70ced9e378b87cc5cc3e5068ade"],["/images/dl/73.png","8704e85c81f02d3148f5013f928e622b"],["/images/dl/74.png","40148a094025824911637637e6f0a71b"],["/images/dl/75.gif","2cdd2ec54569879ca045e0ed090f34a5"],["/images/dl/76.gif","395aa82f1e59cf80e8e17a9209bc22f2"],["/images/dl/77.gif","510c9a35e6f332d4d042e3154a59355c"],["/images/dl/78.gif","8a63c07ac20ee5e5097b8a9e9327012a"],["/images/dl/79.gif","9e9a49afd76a80bda8a6362e6a32dc1c"],["/images/dl/8.png","58c486bb84f43765a4b1c0170b17ed3c"],["/images/dl/80.gif","4a87f84b588768c5b5fddb2b000b92d5"],["/images/dl/81.png","c6557ae392175f3284cff96ede632ca3"],["/images/dl/82.png","8c6e03a4ce27b1546860f1a4994ded2f"],["/images/dl/83.png","3230fe6ea57bf3bb56197b60c744873b"],["/images/dl/84.png","b32db2843c3da7a1434e07286a767202"],["/images/dl/85.png","aaaeb673c62631407bc0417bf30a2209"],["/images/dl/86.png","cc201aa344c97773b92d4a24a3eb4756"],["/images/dl/87.png","153a890f1412bea4542d568d2f071fc7"],["/images/dl/88.png","effc36ef946164373a8bf243961d88a1"],["/images/dl/89.png","2686299a083de7d34f0f4215884ca4a7"],["/images/dl/9.png","07509d765897a7512d5beb635d3c4179"],["/images/dl/90.png","a56a0f6071eb3fcdb76968b4a32d5e5c"],["/images/dl/91.png","6ee325d3906f10f2793fbb01e489930a"],["/images/dl/92.png","0c8d438c12bce0260b16cf270db56f0b"],["/images/dl/93.png","6c92ffc515ccbe08a5abd79a3cb80b9c"],["/images/dl/94.png","808edd0a07d8cbabf336dd9dca8d4a26"],["/images/dl/95.png","45f3b7701551fa7df5f9be047c75500a"],["/images/dl/96.png","9a3c4effe6fba0aae2fb580155c4c55d"],["/images/dl/97.png","bd2706173398f50c2831c4e192b9f352"],["/images/dl/98.png","37d39a650706f2df9b766fe478e52587"],["/images/dl/99.png","058d5dbc14ded7c21715436648e21181"],["/images/docker/1.png","052bebd4e60c59be51857684e5e6fc0c"],["/images/docker/2.png","28f04eea1e73e7c0e0c466756c9c2c62"],["/images/docker/3.png","82a26c321e81043540818baaea77eb38"],["/images/docker/4.png","367c99cdceb0f81b378c075904c88644"],["/images/docker/5.png","e414ffe973288941a51e9cde7d92bb71"],["/images/docker/6.png","d559cb65466a900edb0d7983917ec37c"],["/images/docker/7.png","ac71dea1600d19598053c5607e7975a1"],["/images/docker/8.png","d9b777921984636623864ec2b250e298"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/math/1.png","be08ac320a3fafd4b6cb9a2a820a3b42"],["/images/math/2.png","82c7788477186d13876fa2783fb31305"],["/images/math/3.png","c4dbdce9ea65b388f307e4c2b6701c7a"],["/images/ml/1.png","0614e4691064abbff74cb69212e2a466"],["/images/ml/10.png","ee1e7358cde8b8137ce684b0c4365e04"],["/images/ml/11.png","c86479f988d4dc6b87074724f42e35f7"],["/images/ml/12.png","35ff221fa6ca14c635bfef76cc5a2991"],["/images/ml/13.png","f1bc25e32ad10b0d7b0c9ede788a5b88"],["/images/ml/14.png","2f592eda3505117752f6719aba65edac"],["/images/ml/15.png","0c8117df94fa4c145e2c2943e2247ec0"],["/images/ml/16.png","5705759f62883d83028290a0933e5c86"],["/images/ml/17.png","eed841d914da17d258adc9852c83b745"],["/images/ml/18.png","7863315ccc29fb1c24e27d2a5fcd477c"],["/images/ml/19.png","e3307673fa4d5889a52012dff9c03ceb"],["/images/ml/2.png","9d72b6ab1efe7d92a0f75e376681e549"],["/images/ml/20.png","73daa252e5311ade27160a65cc61c9a7"],["/images/ml/21.png","2749400036f8bba7beaa0ab3224f5389"],["/images/ml/22.png","aadd1c4aa269c129958a013d84e42492"],["/images/ml/23.png","80937bc77f36a5d6310ddbde34c091ed"],["/images/ml/24.png","810369b827c1d376ae5a0e6bbf0c2761"],["/images/ml/25.png","8ba5410eb67aa3cb734596ab0b7abbf3"],["/images/ml/26.png","e702d97bf87a16ac98d9b96357a50224"],["/images/ml/27.png","eb5810d90beb005e0921b5bdce4278cb"],["/images/ml/28.png","daf6146665cd93ff43b7c0537d26931b"],["/images/ml/29.png","faf61ee7aef34289909db13712731ef5"],["/images/ml/3.png","05763899f89a3aec00df11ea2a7a976c"],["/images/ml/30.png","521f8749d93cc41c604307333b8ecb20"],["/images/ml/31.png","61e322d57e7a6468cbca48304ae94cd4"],["/images/ml/32.png","6ec323b582e8562c93c1d6640f4d807e"],["/images/ml/33.png","0d1cdd5ecbf216003f28746db2b33b6d"],["/images/ml/34.png","64b7033aec57515e301161d85f8e4e30"],["/images/ml/35.png","edf088702e0177920a94b3508bec7ec7"],["/images/ml/36.png","fb5a9ddea3a45786bdf11c415e147896"],["/images/ml/37.png","60914873dae6567b8e68ec45ec6b59dd"],["/images/ml/38.png","2b8b5cff6aa6292c46ac594c30027790"],["/images/ml/39.png","1d3d3d21aac91a1e4a2b16c45345d3b7"],["/images/ml/4.png","d1d10f45e987ea4af1c4b7086c5f745b"],["/images/ml/40.png","772e151cc0187377b8640b6769125b96"],["/images/ml/41.png","481ba1d4954007c7eb74aa89f44cc220"],["/images/ml/42.png","3b812196cfcc9fd92a8eae2eba443cfb"],["/images/ml/43.png","cd5f999f7915a1797b3a4c1bd1a63484"],["/images/ml/44.png","37eb471cb2476713b4491a3d747e8f5c"],["/images/ml/45.png","df3980f9a53928768f0949eab0dda0f6"],["/images/ml/46.png","d9a4bc126242de84d18bf1a616961bc3"],["/images/ml/47.png","ecc436ba7ba75ec5c422ecdd700219d6"],["/images/ml/48.png","a154e7896b59f7c4feb7fd9869350494"],["/images/ml/49.png","e9cc736869a7161cfefc7e1961c2d9aa"],["/images/ml/5.png","884a734410b3627a14981c481b27c583"],["/images/ml/50.png","6900e08fcd02c9a9bcac17b1c7d68fad"],["/images/ml/51.png","1ecd25e8788aac72f2f6d2440ebdccde"],["/images/ml/52.png","e8a96085b9487570772875b5f40c5a64"],["/images/ml/53.png","6ed613d5f1a4465a670ee7557dd29575"],["/images/ml/54.png","4fba1f8adf3b0bac8f6cd911016e97d9"],["/images/ml/55.png","f772762d3dc7b6927ca73e276bacd35c"],["/images/ml/56.png","20827caf527ef20652b21adb8e143e96"],["/images/ml/57.png","3bfb68f2234dfdb64aa5286d49a04f79"],["/images/ml/58.png","291a3424c7bff0afa585bfa7f09d67de"],["/images/ml/6.png","bbd2772718a23a1102b2201f78413d6a"],["/images/ml/7.png","c753cbfb65ed9638e82e5d0140028f82"],["/images/ml/8.png","0432f07c0cec1708d787798042156c21"],["/images/ml/9.png","2870280e8d3cedaee23818114a3cc02e"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/py/1.png","15b7ebe86935d45e017776bdd2e2e2d7"],["/images/py/10.png","30a401b3d7e75a8e237f0b805f583e4b"],["/images/py/11.png","59051625b36f69ecb18a6174a04b4368"],["/images/py/12.png","0738f0be3b1b72d1f66f6ec218d76675"],["/images/py/13.png","aabc1941943d19cd9c26b4c97b991415"],["/images/py/14.png","f09e867b7e33ab28bb509208efdd4928"],["/images/py/15.png","af9b8898e56514fa1c060e35d316066c"],["/images/py/16.png","ba5ec4e869bae45070e08f64788ecfbe"],["/images/py/17.png","82fe7ec533b75c5b9ed5e677f57eeaa9"],["/images/py/18.png","f651173cc0a9b4a8dcbdd495f73f882c"],["/images/py/19.png","db20315678cbcad8dd4f0d4bd72cb991"],["/images/py/2.png","589c0581b9b1da7112120f6a1f320fc3"],["/images/py/20.png","7670ef568945df192b81f0dc0f3d3f7f"],["/images/py/21.png","dffafdf930d818b664746a166cbb97bd"],["/images/py/22.png","e42a0fc9bec94fcd5207dd39ee46dc5f"],["/images/py/23.png","729ce256675ed1b5be435ba49e07d5fe"],["/images/py/24.png","3178aad732fb3a59fd6b9f0522d0c84e"],["/images/py/25.png","23dee90b7ba96de076a6bfbc7e9f9fc8"],["/images/py/26.png","5f27264c4cc5f1066086d4a6dafe68df"],["/images/py/27.png","2a30cc59399a637db839057f86d8c331"],["/images/py/28.png","f8ddf9a9bdfb76086c414c8561a7c756"],["/images/py/29.png","e6a08a36098bc987d119f57a9b273829"],["/images/py/3.png","46d73ca2a738a321e189608497c35b78"],["/images/py/30.png","aaad070ba988fc223be70b8be8d1a694"],["/images/py/31.png","2190bbadd784c89153ca10aacaa212d7"],["/images/py/32.png","4ebc4497b4ffff11e8ed5bb12a592cee"],["/images/py/33.png","a912118468c632d485625969bbe13b28"],["/images/py/34.png","8647e22d53f209413add44e80c22aaf0"],["/images/py/35.png","f98376dfc1b6b6885ce35e0e29831c12"],["/images/py/36.png","63b48f45c30f1f4274506b01ccd2aaae"],["/images/py/37.png","66a568168cb34596f4d2b61f701f0c41"],["/images/py/38.png","4ec3117c6e4660417f25420015680ef0"],["/images/py/39.png","1d31399d3f0ef916447931f88ce3398d"],["/images/py/4.png","beabd345ad64e22ed6750c13f7d35e90"],["/images/py/40.png","7b19dffc350d03bcf0de1c9477e93105"],["/images/py/41.png","593c6b113bc67e90339d819616bd1277"],["/images/py/42.png","20c75a35c4a4b07faf07daf9475ce1ff"],["/images/py/43.png","6c673a7ef4a3fc5ea9169a3fbd61f80e"],["/images/py/44.png","2334590711560011876de8c746b18604"],["/images/py/45.png","1441f705d69261450da8c5233ab02d0f"],["/images/py/46.png","616c6ab2d9c8eb007952017c7452d6d7"],["/images/py/47.png","004175268fd9029f7d09d1503670370f"],["/images/py/48.png","489330b4f78c3796b20042589808f8bd"],["/images/py/49.png","58a224ddfb5f57a12f48f3b4e3cbd0d0"],["/images/py/5.png","771c59a4e854122793a682f106fa08e5"],["/images/py/50.png","bfa901b645deced8dd1f9a8c26778f25"],["/images/py/51.png","2ffadace686f78c1414244d872d398fc"],["/images/py/52.png","2e3ec0d057d100e4e8ea5f0212e5c998"],["/images/py/53.png","17bb9979be17d13b90357c57139da462"],["/images/py/54.png","c23d69845f72a73fa3e2f1fb84771c56"],["/images/py/55.png","8535760aff99ceb4b556f7b97796d94c"],["/images/py/56.png","59ec9ba92d7ccd2c716228a1a8455ccb"],["/images/py/57.png","15bc87041ac4b1c7b3525b314fb7ef66"],["/images/py/58.png","5f94f3e9e9c6e104566bbb1b600e1fac"],["/images/py/59.png","bea377ca62ca75ab5d71c430b0355931"],["/images/py/6.png","833af6f79eead78a0888a42a24a7c35b"],["/images/py/60.png","ea730c5befdab80ca63dbcce82b3e4b9"],["/images/py/61.png","a6562d29f44817c17e7be41238aaad7b"],["/images/py/62.png","7d457435369276895070e3dd61c9462a"],["/images/py/63.png","91015ba12e25b0f895687581ce6bcb25"],["/images/py/64.png","20a15a250b09f9e4604ab3550b9700c3"],["/images/py/65.png","fe52bf0b2570638b2d22d72a27152e1c"],["/images/py/66.png","d3025a5e94f7bc525362d1f2e7745078"],["/images/py/67.png","2f7ca0e327c55df4f003210905190792"],["/images/py/68.png","6f7279dbb187720b89c66250c986e965"],["/images/py/69.png","a44c673d20cbcf45db156036bd983034"],["/images/py/7.png","d947a703f79658536cb2750914637ffa"],["/images/py/70.png","8a87dfa24f54a8547ef6826d3b6289f4"],["/images/py/8.png","20b867d8137281e9c3a40b802df75680"],["/images/py/9.png","e4639c570e7f7a04e90439456ad297c5"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/reptile/1.png","6d0aa92af42a4647977a03707bade702"],["/images/reptile/10.png","79f309da23b6b5b8b9effd25cc20abd9"],["/images/reptile/11.png","e60854e61ed69c6cccb12196fd947705"],["/images/reptile/12.png","ae4ac9f4065966955a3f31fa4b2292f3"],["/images/reptile/2.jpg","f722e57e21e3d76ebedb6667bfd44aed"],["/images/reptile/3.png","b4161135bc5a889337f36a3a0c20dc6f"],["/images/reptile/4.png","73b18e616e9134ffc1aaeb4ed1c29dfb"],["/images/reptile/5.png","318877d0e3a7337773fc301d6c5118eb"],["/images/reptile/6.png","f39ae0da0e1d343ec162f5db6ade59fc"],["/images/reptile/7.png","26491b8984ce6b22c76ebb6372f912f0"],["/images/reptile/8.png","15bdc5c257f7c109f184f9872c57b2d5"],["/images/reptile/9.png","92e8ffd5026d530e630b6ba90c23236f"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/tools/1.jpg","5bf773e6fdaf0c6573c4578ea232dc21"],["/images/wechatpay.jpg","07f0995337e2a1c8d2357e5659ec120b"],["/index.html","468311c34e0ad2a38f867b92afae9067"],["/js/src/affix.js","b0b3856137cbbdfb5003ab7dec2a5100"],["/js/src/algolia-search.js","8dde65ec33ae0698b8af1478889c1aff"],["/js/src/bootstrap.js","2349daeb9ec1dd2380ed0a92d312df86"],["/js/src/exturl.js","afea9ce42e09c362256d69465dfdc9d3"],["/js/src/hook-duoshuo.js","91fa20b35412a480e1738cbd71e74f87"],["/js/src/instantclick.min.js","97c061b695dc9650bee382179138e44e"],["/js/src/js.cookie.js","8ff9370d40432927e83561ac4c5eddf0"],["/js/src/motion.js","64f523d170d7c08e662b946fc228dc3e"],["/js/src/post-details.js","35e953ddadfc828b493dde77608bf87a"],["/js/src/schemes/pisces.js","ae231b5029df12f1402ea247d8c087e9"],["/js/src/scroll-cookie.js","16dedf3f80883cbeec8a44fbca5286d2"],["/js/src/scrollspy.js","105613a36f4076827ce06d1b81fff1c5"],["/js/src/utils.js","181aba8e0a1420e80a042c6615b2b94d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","98830dfea810baf0bb4c087aa197c384"],["/lib/Han/dist/han.js","08a04ec65b263da0ce2718e623ffb6b2"],["/lib/Han/dist/han.min.css","c0cea5cb3c2939079c108328b76bb983"],["/lib/Han/dist/han.min.js","db91c2ff9432839d448a0a23abd52961"],["/lib/algolia-instant-search/instantsearch.min.css","67242b2fdca8732cd42a12600da0f086"],["/lib/algolia-instant-search/instantsearch.min.js","1f4d8e9e4d5ee328730eac8047e572af"],["/lib/canvas-nest/canvas-nest.min.js","bf35d83ca0837affbe968fadb7b131b4"],["/lib/canvas-ribbon/canvas-ribbon.js","a2f4038554a84282274fd25fae019f26"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","5981677b03a31925eccd8efff6b9425b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4ca2a4d3e787833dce647cd29095a6d2"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4d8db68d40d3de6038c23a009aeb1d6d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2cebbaca5e0eb7877d60faabd7b046e8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","aa614000b07a177cc5eebf0f73ec2486"],["/lib/fancybox/source/jquery.fancybox.css","d05a291dc0c4327dbcc250ae438ab118"],["/lib/fancybox/source/jquery.fancybox.js","20196d3eb46bb0f0557517772fe44de3"],["/lib/fancybox/source/jquery.fancybox.pack.js","02bde78a2b349822fdbf41375e725f72"],["/lib/fastclick/README.html","a27e685108b33abf5201f910a3fe4553"],["/lib/fastclick/lib/fastclick.js","350488a7c3a68d02ed4ef9b507078248"],["/lib/fastclick/lib/fastclick.min.js","493b57c8664af81a6914ad3f689dc771"],["/lib/font-awesome/css/font-awesome.css","d74cf520b426cfe96cd2be9c7621e6ee"],["/lib/font-awesome/css/font-awesome.min.css","d74cf520b426cfe96cd2be9c7621e6ee"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","993748c190e03469948c3f3a15013d46"],["/lib/jquery_lazyload/CONTRIBUTING.html","4430f020c9c8d6922a6759ec3f58d53d"],["/lib/jquery_lazyload/README.html","d4fb6f5eddbcde300ad1dad422445ebf"],["/lib/jquery_lazyload/jquery.lazyload.js","326de70c6f2b861f57c9f2d7d78dff59"],["/lib/jquery_lazyload/jquery.scrollstop.js","19e056c9d02f6e9e4ed2b935b34dbbee"],["/lib/needsharebutton/font-embedded.css","ac3680a741e548ca3361b1bb79ccea6d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","2ebb177e19ebecdc46582a12af350eb1"],["/lib/pace/pace-theme-barber-shop.min.css","a67dd334853d396fc9a92673e3ef7d9d"],["/lib/pace/pace-theme-big-counter.min.css","1ed5b925cdadbd5684dbbbefebf68170"],["/lib/pace/pace-theme-bounce.min.css","4f2ecbe6ad8b6d44679453f85686ac23"],["/lib/pace/pace-theme-center-atom.min.css","85601f657e4ccb8bc4f8f7d09b54f182"],["/lib/pace/pace-theme-center-circle.min.css","4587af9bdb0ed74caf45bbbab4146d0e"],["/lib/pace/pace-theme-center-radar.min.css","45b48d20a506fb08d25f52c149b48367"],["/lib/pace/pace-theme-center-simple.min.css","743f5c39cbbfbe768dc19069b76c817c"],["/lib/pace/pace-theme-corner-indicator.min.css","aad90505a1805a57ec3fe4bdb710399f"],["/lib/pace/pace-theme-fill-left.min.css","fcf17ebb1075bd27f6c58a231cc12e67"],["/lib/pace/pace-theme-flash.min.css","7603b28777debdfe4f3d1bf0064ce298"],["/lib/pace/pace-theme-loading-bar.min.css","6a2d057dbc243d3d28db2b845a8a6840"],["/lib/pace/pace-theme-mac-osx.min.css","fd315256ae6a4de5e9fec86a8548f385"],["/lib/pace/pace-theme-minimal.min.css","5fc932abb97169d37e1faae12f1b1ba7"],["/lib/pace/pace.min.js","4d0d8b12d51c0d3b7e23bd029729bb35"],["/lib/three/canvas_lines.min.js","6c681a01357ae2dfb24114dbf8508fd6"],["/lib/three/canvas_sphere.min.js","05a5550846e21b42ac88647132d468af"],["/lib/three/three-waves.min.js","aada875e6d623df7d0cbbdfdbfa2517e"],["/lib/three/three.min.js","f7b59ec056868eda4838ed259fe0ef2b"],["/lib/ua-parser-js/dist/ua-parser.min.js","5eaa023c6df8d34529ba4c23cfd0d792"],["/lib/ua-parser-js/dist/ua-parser.pack.js","ff0121ae295e34d39f931cbecf3dd1ad"],["/lib/velocity/velocity.js","bc9b1996c3be37009cc89e309035df72"],["/lib/velocity/velocity.min.js","4ed54287be934b15a1af0ff18ee664f6"],["/lib/velocity/velocity.ui.js","d2b35e36f8dc3c57d46e8ffe1949d8c1"],["/lib/velocity/velocity.ui.min.js","0df184855e03deb070951174f1c6aec9"],["/page/10/index.html","f3f2ec626c28d6a332402ec0a6d402a2"],["/page/11/index.html","bba3891e904d79a41604cd58b08f37b0"],["/page/2/index.html","2fe8c6f952b026e399f95f4141f015c2"],["/page/3/index.html","c421fb1716c6ea721ad5b936beca969f"],["/page/4/index.html","c8d714cbe92bf821e29981d9fdaf993c"],["/page/5/index.html","67accce8a7198f6a00089600bf765c16"],["/page/6/index.html","d1cf3c30cd9e78ecd129e32c630be037"],["/page/7/index.html","c5684f7958149ca7d81f08d6778f27ee"],["/page/8/index.html","bfb3be1df9fddd91067e559d0c81d33c"],["/page/9/index.html","cc63c28a8c1449ca8b42567bfdb0d560"],["/sw-register.js","b744fad00abd66e129db3d060c29bc1c"],["/tags/CNN/index.html","8225846c2815cb8db12a51a1493bacc1"],["/tags/DNN/index.html","cafdad97ebe2ac7f1ebbe17a0c9909f0"],["/tags/DeepLearning/index.html","f9d3c9904f0ac724bf5e8055e58f074b"],["/tags/DeepLearning/page/2/index.html","51b6644d8b13b6004e1e473ea902f1fa"],["/tags/DeepLearning/page/3/index.html","663817a7e5806d80e8977eb19ee781dd"],["/tags/DeepLearning/page/4/index.html","604d808fbf9a60ecbae16f1c6777dd59"],["/tags/DeepLearning/page/5/index.html","1df65665ef3483c8732ef0d8c0b5455a"],["/tags/EM/index.html","0cdc21a7f7a9cbdc5bce3f5c3ea5f41b"],["/tags/GAN/index.html","e793a9e4efd7c075a64cdd11b81cebcf"],["/tags/GIT运用/index.html","d903b4c740e7cf19dd868dd4ffd239e2"],["/tags/Keras/index.html","dc5223690d73572bdce6e1479bae1c75"],["/tags/MachineLearning/index.html","714da8aaaac059d3cba21294ef6b0760"],["/tags/Python/index.html","98c455f154b88cceefd3de2048b73c57"],["/tags/Python/page/2/index.html","c33e913b5c8201ba3ce954e97612289a"],["/tags/Python基础/index.html","f18d03d0b45ef3aa9f130617a0e85d48"],["/tags/RNN/index.html","b9cb00c75ab127fd64a2bbcd64b39329"],["/tags/TensorFlow/index.html","3ed21cd306a93ca6998d1990c8e28890"],["/tags/TensorFlow/page/2/index.html","1edebc9bd3316111f80953729957dcfe"],["/tags/TensorFlow/page/3/index.html","fee2309213a559aa59f75a3eb28b5de4"],["/tags/anaconda/index.html","686725b81d60fdcb845e0e766755910e"],["/tags/docker/index.html","50193e0e15a01dd7c62b34516ee910d1"],["/tags/git/index.html","c1c26f5df91328c9cabafe93cd5c267e"],["/tags/index.html","79947445ed7f21234957d5fce0245c06"],["/tags/ios/index.html","9c6c8dfd86b6d2ca883821f2864ac01e"],["/tags/linux/index.html","0607a16fd25501e7f5e95d0784c7633b"],["/tags/markdown/index.html","90cac8fcd1c52bb91ddfb4088cb038ea"],["/tags/network/index.html","4a8b8bff2a6ba045afc77ed247753cc9"],["/tags/opencv/index.html","216553627e9b3b0e4a18753e36183fea"],["/tags/pip/index.html","d22893ed06d3d488832f0bbbbb1d0e89"],["/tags/pycharm/index.html","66beeec81b73b9d20c2aebd3f01e80b0"],["/tags/svm/index.html","7e91fd041bd932df0d25f49c32809d59"],["/tags/ubuntu/index.html","b6f10088b6043f04c3d7a1732b31178a"],["/tags/优化算法/index.html","cf63cb8ae4b888813d42cad2b0d323fc"],["/tags/决策树/index.html","331341428aaa2455bc2916b3b29e3a9f"],["/tags/反向传播/index.html","aef876c356d24fc37ec3e70aa35b579d"],["/tags/声卡/index.html","37140982b45c52442f6e893bcb888b51"],["/tags/安装/index.html","9eeac140514e525153dddaf0731ac1a5"],["/tags/开发工具/index.html","54994c767acfa74054b93e79b78f84df"],["/tags/开机/index.html","07e87f255a48402d41ceb693e3102640"],["/tags/朴素贝叶斯/index.html","16e9bb17b3fbf092d10dfb16f4450fed"],["/tags/核函数/index.html","a3ebbf262f3bfd137d9fa19347a33ce1"],["/tags/梯度下降/index.html","6c1f719a2e6f9cdbfe5115e74f750f92"],["/tags/神经网络/index.html","6b48b71546f2246bbf1f543444a03564"],["/tags/线性回归/index.html","d48c00a9413f5c396e631badb68371bf"],["/tags/聚类/index.html","4bb1fbb03bc168e2a0bf93efc793e2ad"],["/tags/自动化/index.html","0bf776f0c63f79b5787ee55c4f035548"],["/tags/贝叶斯网络/index.html","3add755f28a91c340177ad5fb1424f5f"],["/tags/软间隔和正则化/index.html","cd1bbe0d5d1fa31d8746cb68a4cf8e5c"],["/tags/逻辑回归/index.html","84772819066df7773035684899c3500c"],["/tags/随机森林/index.html","f8015be6c3ebadb752e913c017bfb743"]];
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
