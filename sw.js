/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/08/25/2018-07-20-raspberry-Internet/index.html","0820479a8d7b66189605579a4e517756"],["/2015/08/25/2018-07-20-raspberry-on/index.html","298d6120f6d9394a46fca25e2e7829d0"],["/2015/08/25/2018-07-20-raspberry-usb/index.html","0bff6e0cf06e66a6872737dc985a1753"],["/2016/07/13/2016-07-13-GitTutorial/index.html","aea41c06fc7f89b19aefbc248d0b9fa9"],["/2016/08/04/2016-08-04-PythonTestAutomationiOS/index.html","edcc1b655881db9750e71af4d6b2d737"],["/2016/11/20/2016-11-20-markdownTool/index.html","84c2636193bfda7eadbf153804235e9d"],["/2016/11/20/2016-11-20-neural_networks_using_TensorFlow/index.html","b79d470c9ded2e47350746e62533a7d2"],["/2018/07/05/2016-07-05-MachineLearning_introduce/index.html","c86eb82ea814f520d2dcc0d50db4aeb5"],["/2018/07/21/2018-07-21-ml-linearRegressionL1L2/index.html","a51144474281c94608693b277c00b485"],["/2018/07/23/2018-07-23-ml-DecisionTree/index.html","ba9737fd282736a7dfa9ac186ab0b067"],["/2018/07/23/2018-07-23-ml-logisticRegression/index.html","19348df2e9bcee7f0e767841510a74c1"],["/2018/07/24/2018-07-24-arithmetic-gradientDescent/index.html","03bce0c852d78716e95fa94461b58e8f"],["/2018/07/25/2018-07-25-ml-svm/index.html","20aa2be95fcbc77cb81f5f76a584247c"],["/2018/07/26/2018-07-26-ml-svm-L1/index.html","de99d451709fefdb0cd8913f8bab9853"],["/2018/07/26/2018-07-26-ml-svm-kernel/index.html","9733d62b355bd3d4e62dcca605af6334"],["/2018/07/30/2018-07-29-ml-clustering/index.html","b812b53341d90fa2c41842b22c9f3277"],["/2018/07/31/2018-07-31-ml-em/index.html","c8c6743dff514ea1f9508d37e290ddf0"],["/2018/08/01/2018-08-01-ml-NB/index.html","33dc5804c619ac630bcb1e9fd4a0df01"],["/2018/08/02/2018-08-02-ml-NB-network/index.html","9bb8060c7bc9d64df1209cd319eea150"],["/2018/08/08/2018-08-08-DL-introduction/index.html","a519f3c0b463dda0140d779a1a253228"],["/2018/08/09/2018-08-09-TensorFlow-windows/index.html","0bc5fd315f4fac61de17585553109d8b"],["/2018/08/10/2018-08-09-TensorFlow-ubuntu/index.html","e1e3159b147f9afaf873a6f36517b5d7"],["/2018/08/11/2018-08-11-TensorFlow-Virtualenv/index.html","34626fdad6d2d560736104b4b692b382"],["/2018/08/13/2018-08-13-TensorFlow-course/index.html","20781d4f791bb7564a2fa273a2cc29fe"],["/2018/08/14/2018-08-14-DL-method/index.html","d1109944a5b40c613b7b0461e2ffc590"],["/2018/08/15/2018-08-15-DL-back-propagation-python/index.html","1c4e618fca65d4384713dc275b087395"],["/2018/08/15/2018-08-15-DL-back-propagation/index.html","e24401c4e17dd9ffb99baf44fe074f25"],["/2018/08/16/2018-08-16-DL-DNN-python/index.html","751e4c61c8bee22e8165bbec22b48d3b"],["/2018/08/21/2018-08-21-DL-CNN/index.html","a17d561dad05de3efe77e688721c3412"],["/2018/08/22/2018-08-22-CNN-back-propagation/index.html","fc4ea5941b4e915dec8cd1251ba0428d"],["/2018/08/23/2018-08-23-DL-CNN-python/index.html","93112af8e5efd3501ad0be114de855c6"],["/2018/08/24/2018-08-24-DL-CNN-LeNet/index.html","63d0f591848d3a40335099a8a1d29532"],["/2018/08/25/2018-08-25-DL-CNN-AlexNet/index.html","b25392fcaacb9ce791fcee6ec26cd50c"],["/2018/08/27/2018-08-27-DL-RNN/index.html","ef7926bf733e5841c193cedeb37537a8"],["/2018/08/27/2018-08-27-TensorFlow-keras/index.html","1491b3ab80ba22ceb03c513a16f90166"],["/2018/08/27/2018-08-27-TensorFlow-layer/index.html","e1efbd51b2a36fc6479e1a46cea2d1cf"],["/2018/08/27/2018-08-27-TensorFlow-native/index.html","5266d0a2728d21bfc263f912470584bd"],["/2018/08/27/2018-08-27-TensorFlow-slim/index.html","25fe4e19ba232c0919fb9239a01ed5d5"],["/2018/08/29/2018-08-29-DL-RNN-BPTT/index.html","08786846f0565c1b5bec88f1d3f0c0e0"],["/2018/08/29/2018-08-29-DL-RNN-hand/index.html","a0327ce44fa105444fc9c11ca025077e"],["/2018/08/30/2018-08-30-DL-RNN-LSTM/index.html","30b8316cc180485840b282b63c5b45b5"],["/2018/08/31/2018-08-31-TensorFlow-RNN/index.html","bc8cc8bb2664eed27e5ce00937d9ee8c"],["/2018/09/01/2018-09-01-DL-GAN/index.html","151c3fc5e2df01ba4dfd4f5d64f8f5ab"],["/2018/09/03/2018-09-03-TensorFlow-GAN/index.html","7b77b81f160f051d0d0fac4f525ee906"],["/2018/09/04/2018-09-04-DL-DCGAN/index.html","07e9104c75710a15a624918d411e4280"],["/2018/09/04/2018-09-04-TensorFlow-DCGAN/index.html","910e77c5f8546cb1dd07fe4de5face6a"],["/2018/09/04/2018-09-04-TensorFlow-save-restore/index.html","2e5051ca09edf4bbdbf45a35f87c47ba"],["/2018/09/07/2018-09-07-TensorFlow-cifar-network/index.html","157fd089506b1ec8d85b136a3777c500"],["/2018/09/07/2018-09-07-TensorFlow-cifar-train/index.html","5a6fb53cea1ec14c4342d0bcfe243a8f"],["/2018/09/07/2018-09-07-TensorFlow-cifar/index.html","f3a0b0f8dca821ffd09a09f3e36417c6"],["/2018/09/07/2018-09-07-TensorFlow-visualization/index.html","502bf881702c7cc6487812e1643eb43f"],["/2018/09/07/2018-09-07-keras-cifar/index.html","ec55f2ef35b73d2978233c68b88df85d"],["/2018/09/15/2018-09-15-Pytorch-AlexNet/index.html","6e9454a01ed4d7647207d29898a03fa1"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-test/index.html","903f277b9ff4876885b45067d0fa90a0"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-train/index.html","dc4e81a903f8e789b58fc4cc325601d3"],["/2018/09/15/2018-09-15-Pytorch-DenseNet/index.html","ac5db5e475cc6012b7b26955dbed48a4"],["/2018/09/15/2018-09-15-Pytorch-GoogleNet/index.html","47aa7842909a7170fcdfa0dc12ffb5dd"],["/2018/09/15/2018-09-15-Pytorch-LeNet/index.html","961ee9c7ad794a45f56ab817cbeb3ed2"],["/2018/09/15/2018-09-15-Pytorch-ResNet/index.html","dedb56f57a4e1e2f42bec6ed63f82971"],["/2018/09/15/2018-09-15-Pytorch-ResNextNet/index.html","8bb4e2d3922650f088928422e8d6ee5d"],["/2018/09/15/2018-09-15-Pytorch-VGGNet/index.html","c214d5948a6cab656b71fa9050f66e20"],["/2018/09/15/2018-09-15-Pytorch-cifar10-data/index.html","1da4a8dec0b6938ff27af65bae6c0c94"],["/2018/10/09/2018-10-09-pip/index.html","06fd83212f93536266482ee85708610f"],["/2018/10/09/2018-10-09-tensorflow-question/index.html","20df2a354fb9d01a86ca1b7338885508"],["/2018/10/15/2018-10-15-source/index.html","329734b33ef598036e3f33bc9868bf5e"],["/2018/10/26/2018-10-26-openCV-geometry/index.html","4d8dfbc73b1abba95252b96f8a06a62e"],["/2018/10/26/2018-10-26-openCV-install/index.html","8f322262c43d6f2befbb58ef221002cd"],["/2018/10/26/2018-10-26-openCV-special/index.html","761d1a2b3c02f6c3761de5779e2818d6"],["/2018/10/27/2018-10-27-openCV-face/index.html","25265cb31ac2ff9972dfbf5233eece16"],["/2018/10/27/2018-10-27-openCV-svm-hog/index.html","756d16114e27c090123e1289946ad45a"],["/2018/10/27/2018-10-27-openCV-svm/index.html","663ddbf07a9b0a7b66062d0ab8c1aa9d"],["/2018/10/27/2018-10-27-openCV-video/index.html","01d32c5100d1563f76eb666bf6e6ee87"],["/2018/10/27/2018-10-27-openCV-whitening/index.html","0730ac92d01fecaae07a763e1ba8af75"],["/2018/10/29/2018-10-29-docker-TensorFlow-cpu/index.html","8fabca3fd9d7536701bb9c77f7c54bcb"],["/2018/10/29/2018-10-29-docker-install-win10/index.html","82649859c364bb95f62a5bd41c932f28"],["/2018/10/29/2018-10-29-docker-install/index.html","f05982f3e59751583d79b1beb648ecf4"],["/2018/10/29/2018-10-29-docker-source/index.html","d7b80ac6ff991e1bafc6937365a658e4"],["/2018/10/29/2018-10-29-docker-speed/index.html","1b379a9f821a15db0c0518560e1c9b60"],["/2018/10/29/2018-10-29-docker-vessel/index.html","fe39f1bd733b7c1679ade3ac0ac61534"],["/2018/11/08/2018-11-8-linux-vim/index.html","3110011bf1ac6a974703634f0a8dfe4a"],["/2018/11/08/2018-11-8-linux/index.html","0b2d5d499574aba7240a115b63bbabec"],["/2018/11/09/2018-11-9-anaconda-ubuntu/index.html","d02a4e8876581b5fbf3f711cd748d7db"],["/2018/11/09/2018-11-9-anaconda-windows/index.html","248df3faffc8c563a3f727d5bbbf0f2f"],["/2018/11/19/2018-11-19-git/index.html","1194de2c0845915820f9cda985d7fdee"],["/2018/11/21/2018-11-21-python-date/index.html","c5ca7d2bc312ff4f3aff6bcfc5029abd"],["/2018/11/21/2018-11-21-python-encryption/index.html","864b7daaa830cac4ef539e2f1c79706e"],["/2018/11/21/2018-11-21-python-log/index.html","de46162fcc43d475921febfaa498888c"],["/2018/11/21/2018-11-21-python-pillow/index.html","c1f790acd0bbcd0fd0e1a0995c32d694"],["/2018/11/21/2018-11-21-reptile-beautifulsoup4/index.html","d48741d502da2c77c0426067648872b0"],["/2018/11/21/2018-11-21-reptile-http/index.html","d8bfcccf4948ae6006f768fc0a962c55"],["/2018/11/21/2018-11-21-reptile-request/index.html","799eca7947194843a038d055f40fa7fc"],["/2018/11/21/2018-11-21-reptile-tcp-ip/index.html","578f2e5fcf79cee85bed77a343a35d4f"],["/2018/11/21/2018-11-21-reptile-urllib/index.html","c7f16d5e9c20f4376ea60788b8d048c9"],["/2018/11/21/2018-11-21-reptile-xml/index.html","34cb137c932756cc67b863a684a9ac82"],["/2018/11/22/2016-06-02-Develop_Tool/index.html","2d18d5f353d324f39e92590541758b2b"],["/2018/11/22/2018-07-20-ml-linearRegression/index.html","175fee0f3b6c67f5aca2f6ce555d0407"],["/2018/11/22/2018-07-21-ml-linearRegression-python/index.html","7ccc60d478dc07eca2b98b78152c1a89"],["/2018/12/01/2018-12-01-python-numerical-sequence/index.html","1339b8982cafd2f4402a3702eab6ac23"],["/2018/12/08/2018-12-8-python-sequence/index.html","f8f897f8799c2aeb76c2ce691e3b8bc3"],["/2018/12/09/2018-12-8-python-output/index.html","9627801187fd544fc1a88d187fb41e83"],["/2018/12/11/2018-12-11-python-dict-set/index.html","bcd9ed5b1392276e7d5363355c2c2638"],["/2018/12/12/2018-12-12-python-if-while/index.html","162cdfaf08b02248d2f8b26b57fefbd6"],["/2018/12/12/2018-12-13-python-main/index.html","a65cb0299b54a4580ff55a6f7de78314"],["/about/index.html","d0b40d7102843068f7f3199257cc6d10"],["/archives/2015/08/index.html","318f62609277deb7db8bb9b27bdab508"],["/archives/2015/index.html","4c980b5b1416cde379c8776611ffa147"],["/archives/2016/07/index.html","8ed9f537b7c42ce18b7b8c521fbf9fa9"],["/archives/2016/08/index.html","e54e10374c1d3247b0ea46bcc8f6acc4"],["/archives/2016/11/index.html","f270e2d5655dd90c92ca2df84b131473"],["/archives/2016/index.html","b10af7e24c90c98c8bed00003121fe42"],["/archives/2018/07/index.html","2e3f2834519eef63a21508c2d1eace1c"],["/archives/2018/08/index.html","b89dfa00606a8bc6434c2a55c36ef6fe"],["/archives/2018/08/page/2/index.html","34efefec7fd649925425a88a1ea6eb08"],["/archives/2018/08/page/3/index.html","44d9b12df20cc8581b347c3b7e96fbb0"],["/archives/2018/09/index.html","667aa166f40a026f36dd1e83448bbaa3"],["/archives/2018/09/page/2/index.html","dd3267d4dfc87c3f7be427da4dc45ed7"],["/archives/2018/10/index.html","3275dc63c3bbe71f220182f5df4f937e"],["/archives/2018/10/page/2/index.html","f465ad3574c84b1e107ab5c2ce536a9a"],["/archives/2018/11/index.html","214db0630c3961912313c14b6953a281"],["/archives/2018/11/page/2/index.html","cd521f5ef3ecc32d20c1c9b505e0fa18"],["/archives/2018/12/index.html","1fb24e4fd61c08094ee5344a712cfd79"],["/archives/2018/index.html","f88b92e4c53148a80e18a1a34486e6ad"],["/archives/2018/page/10/index.html","910516cb2bada6e45a3a5fe089721a63"],["/archives/2018/page/2/index.html","571c2d18c5909dbf0d5a5ad3fcb29746"],["/archives/2018/page/3/index.html","3aff5cec8dccb3d7013725b8f2cddde9"],["/archives/2018/page/4/index.html","65afc4b83f73484294486f0df9f23cd1"],["/archives/2018/page/5/index.html","ed8f135c9a6cc5962aa7fa5513d55c8f"],["/archives/2018/page/6/index.html","420fe28b0cfe4682f80d7de0c4afecbe"],["/archives/2018/page/7/index.html","4bd41196149370f1211ee315995cc68b"],["/archives/2018/page/8/index.html","67e691e8f4c3592028c16d00b0921722"],["/archives/2018/page/9/index.html","21eeef94c9ae32d406f9f812eab40669"],["/archives/index.html","55a721b60607db8130c5044f729c33d3"],["/archives/page/10/index.html","acccf55b4b1acffff8880e7abe48044f"],["/archives/page/11/index.html","fa954978926b8a5067e3207127cb2363"],["/archives/page/2/index.html","c196569c2e51de08bbc772f57ea80561"],["/archives/page/3/index.html","d9c1a7e9e12866024bdd040c25060ada"],["/archives/page/4/index.html","d44e0ef40fb13fdfec01200006e504e3"],["/archives/page/5/index.html","0c19e986642e83f3d981da9a6c6d2493"],["/archives/page/6/index.html","2260471b113e14aebcb21921ce65254e"],["/archives/page/7/index.html","397da8617e3f9ceb680e668b183a81d7"],["/archives/page/8/index.html","35eee37c255b1888c87de2c4fc34d231"],["/archives/page/9/index.html","7a442046a75aeb7c9a2a6de34adcfaa6"],["/bundle.js","a0132051b4b5c0c792dd671eb80761ec"],["/categories/Docker/index.html","ff5f1f7dcf9312574f78ff7448f9617c"],["/categories/LINUX/index.html","10b385ad30fd033eefb3ba4b21634ff5"],["/categories/Python/index.html","f4ddd0d6b6cdf8a716944c352d41f5db"],["/categories/Python/page/2/index.html","fef2d3dec36823fa56cda567fa2f66c5"],["/categories/index.html","e137f254b6a2e9593ce89d3a7208bd74"],["/categories/pytorch/index.html","bd7e3cfcabcf415a8d07f4a49720afb3"],["/categories/tensorflow/index.html","139334fec8a5cde93fb470ca01261d68"],["/categories/工具/index.html","6b58c96353667819df02537d6d8c59d5"],["/categories/开发工具/index.html","7ae593bb14b918765ee2034b46d14b62"],["/categories/机器学习/index.html","7634148072e6c189831cb85d2f49d7a7"],["/categories/机器学习/page/2/index.html","e753e25197a1f65e8364bdef154ff319"],["/categories/树莓派/index.html","23658af408b552acd843ea31d4405cd7"],["/categories/深度学习/index.html","a79bc8319b74df045be8724450c859be"],["/categories/深度学习/page/2/index.html","4766bf7318d34b4b83b3e55f743f8d13"],["/categories/深度学习/page/3/index.html","6d8bb02a8eeb363c75dce65b4d04ebc1"],["/categories/深度学习/page/4/index.html","9812b36782a2e80bb3ee5465719bf03e"],["/categories/算法/index.html","2de4186ad6bff24c2308587a5a5e5ddb"],["/categories/计算机视觉/index.html","b26907abc09305d4f186a04b46947d50"],["/css/main.css","ec23ebfd18f4a9bf7df219836d309ddb"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","a80879cd6eb38ea4678e995e91c48298"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8ee39bf6fed055723e7e4d5de051af42"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/cv/1.png","9f4f5f49612d747ea7e2af9511bf81d8"],["/images/cv/10.png","64042888a4a3f3a4eb0fa61132ec4d2f"],["/images/cv/11.png","a7d130d884954da81b5cb0bb6ec3bc36"],["/images/cv/12.png","78897d4a1ee5b035a6c1fca275d6ee5f"],["/images/cv/13.png","5bddd0353cbbe6bba6397722208f71f0"],["/images/cv/14.png","84703e200ba7bd4c81b00bdd284e995a"],["/images/cv/15.png","9e2fd155d3d155ad7929da9e6ff173f4"],["/images/cv/16.png","11fc9d7abf8eab9eabd3b1b634972df1"],["/images/cv/17.png","4a033e9738210c148a2861e2a595195d"],["/images/cv/18.png","28fef5c46c2f422225f0c6784a0c5134"],["/images/cv/19.png","6f9bf406e55081a45f2d4a7694105aa8"],["/images/cv/2.png","31c2a99f54755c697a66fd612088d5d5"],["/images/cv/20.png","3c583b642ab32b3f0e8c25d702db84e7"],["/images/cv/21.png","a566537a8176f5ad3aefb0a4e3d3a28c"],["/images/cv/22.png","1dbefbc4faf1d6d1667d75e5a6e0ad4c"],["/images/cv/23.png","a19339ed91763c182a8876008b6a65b6"],["/images/cv/24.png","d7b6fbd2e71114ace115874caa3234d8"],["/images/cv/25.png","5d8679bb4738e48ae60291c204fb082b"],["/images/cv/26.png","a621210387b76992c71e377e5b3e787d"],["/images/cv/27.png","cc070ae570b8301c7e48511fd03606a4"],["/images/cv/28.png","19234927e77a2e573d1fcd36c6ab377a"],["/images/cv/29.png","981dc034de4ca4b6e734d1a54783f9c9"],["/images/cv/3.png","e4b7d480e78d5d0c4c6a14fb31b0ed5c"],["/images/cv/30.png","89a24fa0d194fd189e619e5399bc2556"],["/images/cv/31.png","3ebb39656dbc7ff3fe0d53e61edfca4f"],["/images/cv/32.png","9eaf042f7520f23a2c7298f55c0daa84"],["/images/cv/33.png","74898282f2a1f9cb206bcfbf15676aab"],["/images/cv/34.png","0131081dd3bb72e8c15ccabbc5a181b4"],["/images/cv/35.png","8fa06daf89516d71037ad8ad5466430d"],["/images/cv/36.png","6f9bdb37ded9320389993be28956612b"],["/images/cv/37.png","e2d8710a8d1be82ba5c171404a6eeb3c"],["/images/cv/38.png","0fbcf55535e125c43eaaf142a7c16084"],["/images/cv/39.png","0f17b9745c0ee7185f3408ff3e75f6d7"],["/images/cv/4.png","b55154238e33764873083b8463030d3a"],["/images/cv/40.png","352064971be0635581af1446a20bede1"],["/images/cv/41.png","482b4b502b236b800a2e609b273fc479"],["/images/cv/42.png","54f1a474233dedf7ee3fc20c56d23be3"],["/images/cv/43.png","f315e6c996c7f06ace53f7fee13aba7f"],["/images/cv/44.png","d88e6c82ebcf85e6332a5ff18f1d6748"],["/images/cv/45.png","546d355afb836ccafb1dbf1ec6e58c2b"],["/images/cv/46.png","e78e4d34afd63907c64e342d2dd56500"],["/images/cv/47.png","0355f524fce034d2b1d9e49d15f5acf2"],["/images/cv/48.png","0890f1471e76361456983ba205a7323d"],["/images/cv/5.png","eecb4a7bba3f07b8e3025585e7752527"],["/images/cv/6.png","834ccb9069233764f549780478fcf409"],["/images/cv/7.png","61b35bb3b9b78a44a617be9dbbdbddd5"],["/images/cv/8.png","57728a4eef354a0aed3698ad06659e92"],["/images/cv/9.png","60933d0b322df2c82963159b02f716ca"],["/images/dl/1.png","b2d61d37b640c75770a86cf1e89173e0"],["/images/dl/10.png","24f2fa5c727818fc48bf3a6f8068ee58"],["/images/dl/100.png","000f1c2ee2bb7adee780317771fc1178"],["/images/dl/101.png","12d112acec2d7f48e095a61620034ec6"],["/images/dl/102.png","8109c56796810451a8d889b964548a7a"],["/images/dl/103.png","15385609e43d95f81dc4e63fff9199de"],["/images/dl/104.png","897e22d7731a6c8d16ce28a62a739a60"],["/images/dl/105.png","b8a11e56f84cbd023da5c531df5661ba"],["/images/dl/106.png","dd17c8a11f7f5b76a56c38e98019c89a"],["/images/dl/107.png","d9ecc9e1a424bd937bb80da878265e02"],["/images/dl/108.png","92dadc873698dd6b2ef82e704fcbd647"],["/images/dl/109.png","764ba408eb6e5f60b496f3ca28cc83f6"],["/images/dl/11.png","34a8bbc88a333fc1c814e516a170afbc"],["/images/dl/110.png","7fa7ddcaf13c866e940aa176cc9abc2c"],["/images/dl/111.png","9c8b8224afbaf9da7a133e4fb47db202"],["/images/dl/112.png","85a50866d113ec1a5b74f6a2429465ac"],["/images/dl/113.png","f6b40f980ccc3bfdb8612b3df7d26681"],["/images/dl/114.png","7ac6605df0aa00d89b33b46935480ec7"],["/images/dl/115.png","a7925e77be39580d582d23f1ae2c2d7c"],["/images/dl/116.png","291b5652dd7b1e5a0a22ec5888dd0ae6"],["/images/dl/117.png","36483a1cda4bba80601aca92598db2ee"],["/images/dl/118.png","cc10fd547e2094b82e90bc3392b714d1"],["/images/dl/119.png","712089d980526e5239253638703980aa"],["/images/dl/12.png","edbd20c0f9be696722864416805f8ab2"],["/images/dl/120.png","94d4ed5a2a8db1d03192b10098415b3f"],["/images/dl/121.gif","a2afa892b7b37c37871701f374e4b5ad"],["/images/dl/122.png","0ea990077c7f9144c9321f3ed9c56bf9"],["/images/dl/123.png","be8c221c9306341acac8f91bf097cdbd"],["/images/dl/124.png","5c61222626f4efca142fdc78d62a4fe4"],["/images/dl/125.png","b1b458a4e0ad89f06e34e436673489ef"],["/images/dl/126.png","e91bbeef4c4a56ade881fb668addfab2"],["/images/dl/127.jpg","3f4dd207f75f3869c6e744120624fc8f"],["/images/dl/13.png","dd2781bbd52cd08b85822b27e704b223"],["/images/dl/14.png","a4f4a768b9e09d0edb0fb2b61bd6d890"],["/images/dl/15.png","11ccd1c7126bdada66328b00acd38ba4"],["/images/dl/16.png","431eca388a571f6ae2c97f355d4269ae"],["/images/dl/17.png","c785b250216adeb5bb3f7dd344e7e2f3"],["/images/dl/18.png","d0dd40f0001931557dafce3aa70e3f5a"],["/images/dl/19.png","e4aaac069b33a7fea0149cf0b220b2f3"],["/images/dl/2.png","488e19f06f5be0baa222ebc4ebf1f42f"],["/images/dl/20.png","4156882cdf4536bd465bf20630af6356"],["/images/dl/21.png","b215a29f6ecdd03485d9e0a45c9f786e"],["/images/dl/22.png","a96b71719979b2f64d394ecf26191dc1"],["/images/dl/23.png","049c7f3f8c8fb2b62f1ee23fffb1f94a"],["/images/dl/24.png","e311ddc1bc77c0069fc4c653d268f8de"],["/images/dl/25.png","2eabfc24c384e106ae088fa0d080e219"],["/images/dl/26.png","cb13ad3a876f65abfd9bedd5eab6d50d"],["/images/dl/27.png","a652a08f3b6e0b9b82a5556c26e15ea1"],["/images/dl/28.png","3726c0ea2c92a818dd385a8a9237187a"],["/images/dl/29.png","d202d133bd5e7142daf150ea2c300ee1"],["/images/dl/3.png","32643ac5d88e9288e6a91c545228f870"],["/images/dl/30.png","4a6eb0c7c5f7cae3430dd73266286610"],["/images/dl/31.png","230dd5d7b594b13641024ca7c16af9e6"],["/images/dl/32.png","bad29ccda756fa14816c2b7a3d5d60e1"],["/images/dl/33.png","6b47a20743481a7c84cafdddf7aa2b15"],["/images/dl/34.png","544f56c796819c8a2bd76e2008d73b3d"],["/images/dl/35.png","69a494d534a93002d5052f96d54458ea"],["/images/dl/36.png","c7cff050ff6232ad5827e4e0bca493c2"],["/images/dl/37.png","00861b87acf6f356ab7e36cc2f3b8f75"],["/images/dl/38.png","308794ff0c29eda49e3c9f7e72f193d6"],["/images/dl/39.png","031796e81c3dadb6d2c6521ecf824728"],["/images/dl/4.png","b13463143252da800adf2134fdcca283"],["/images/dl/40.png","9193fdaea78a9ecfb2ce346bc2245e62"],["/images/dl/41.png","6efe6e2ed3fa4763693fa7808675a717"],["/images/dl/42.png","e41671954c7e6efa4a80ed2827723a39"],["/images/dl/43.png","d616cae510f75ff0ba75532f13afb680"],["/images/dl/44.png","a1df61f0242f00b7b3dec380f2b82a5e"],["/images/dl/45.png","9880d436563d3e748d4a97219a932de0"],["/images/dl/46.png","ee3823c14cbbc0c4e719d8fa2b70284e"],["/images/dl/47.png","a9654809288507227ddf5091381bd52a"],["/images/dl/48.png","a7f47763bca3b758e0377e4eb3697014"],["/images/dl/49.png","c8b694fc337ffd2822a82ea078a7fd94"],["/images/dl/5.png","ccc04cbc94995b21ae682ed9a9b4b0e4"],["/images/dl/50.png","0b74840b70c5362adbb1ae4d831daa40"],["/images/dl/51.png","add48b535c67dd7ba2d89c2b47d62e4d"],["/images/dl/52.png","ebd47a5ef3557d1857288ea842ed846f"],["/images/dl/53.png","6543b1ebd8f9e1eee6867ac98c377656"],["/images/dl/54.png","e42c09127df542958d6790eb239e2703"],["/images/dl/55.png","0f3bb7248a6e465c0f04c44fd7102458"],["/images/dl/56.png","15ec6905fa793e164de60e8dfd016e50"],["/images/dl/57.png","3a1615a4dae148791518372dfca9684f"],["/images/dl/58.png","5babc414eadaabf475ea5310705d42da"],["/images/dl/59.png","de74751a92a1fa9d22241269545fa578"],["/images/dl/6.png","0c7b467b8c118601b3e4b72e8ee00009"],["/images/dl/60.png","92221b8c62fce1c98467d355237d2986"],["/images/dl/61.png","b77632cd591a92dbfd4cb3a2f3eb707e"],["/images/dl/62.png","f5eca88a4d1b4ff99462d6004037c0b1"],["/images/dl/63.png","2d596bc4776088dc2d7f12035cf9625b"],["/images/dl/64.png","0be91314f6ce792e335eea451fb432ac"],["/images/dl/65.png","cfb0302ad749c7ee33c3a4c0fd048cb3"],["/images/dl/66.png","99a4396798a3703de705d5ef583cc53c"],["/images/dl/67.png","c814ee1f17b1b6e023a2959ecea105f4"],["/images/dl/68.png","32e5647c3a3262d28abd2c801a2499b4"],["/images/dl/69.gif","6428cf505ac1e9e1cf462e1ec8fe9a68"],["/images/dl/7.png","1f98a655f5df7b72a03645ee48043dc3"],["/images/dl/70.gif","cb80c7a8c655585f38038c4876381722"],["/images/dl/71.png","26d9cc4df1edfe2c7ce2b3bec07fcf93"],["/images/dl/72.png","de5ad70ced9e378b87cc5cc3e5068ade"],["/images/dl/73.png","8704e85c81f02d3148f5013f928e622b"],["/images/dl/74.png","40148a094025824911637637e6f0a71b"],["/images/dl/75.gif","2cdd2ec54569879ca045e0ed090f34a5"],["/images/dl/76.gif","395aa82f1e59cf80e8e17a9209bc22f2"],["/images/dl/77.gif","510c9a35e6f332d4d042e3154a59355c"],["/images/dl/78.gif","8a63c07ac20ee5e5097b8a9e9327012a"],["/images/dl/79.gif","9e9a49afd76a80bda8a6362e6a32dc1c"],["/images/dl/8.png","58c486bb84f43765a4b1c0170b17ed3c"],["/images/dl/80.gif","4a87f84b588768c5b5fddb2b000b92d5"],["/images/dl/81.png","c6557ae392175f3284cff96ede632ca3"],["/images/dl/82.png","8c6e03a4ce27b1546860f1a4994ded2f"],["/images/dl/83.png","3230fe6ea57bf3bb56197b60c744873b"],["/images/dl/84.png","b32db2843c3da7a1434e07286a767202"],["/images/dl/85.png","aaaeb673c62631407bc0417bf30a2209"],["/images/dl/86.png","cc201aa344c97773b92d4a24a3eb4756"],["/images/dl/87.png","153a890f1412bea4542d568d2f071fc7"],["/images/dl/88.png","effc36ef946164373a8bf243961d88a1"],["/images/dl/89.png","2686299a083de7d34f0f4215884ca4a7"],["/images/dl/9.png","07509d765897a7512d5beb635d3c4179"],["/images/dl/90.png","a56a0f6071eb3fcdb76968b4a32d5e5c"],["/images/dl/91.png","6ee325d3906f10f2793fbb01e489930a"],["/images/dl/92.png","0c8d438c12bce0260b16cf270db56f0b"],["/images/dl/93.png","6c92ffc515ccbe08a5abd79a3cb80b9c"],["/images/dl/94.png","808edd0a07d8cbabf336dd9dca8d4a26"],["/images/dl/95.png","45f3b7701551fa7df5f9be047c75500a"],["/images/dl/96.png","9a3c4effe6fba0aae2fb580155c4c55d"],["/images/dl/97.png","bd2706173398f50c2831c4e192b9f352"],["/images/dl/98.png","37d39a650706f2df9b766fe478e52587"],["/images/dl/99.png","058d5dbc14ded7c21715436648e21181"],["/images/docker/1.png","052bebd4e60c59be51857684e5e6fc0c"],["/images/docker/2.png","28f04eea1e73e7c0e0c466756c9c2c62"],["/images/docker/3.png","82a26c321e81043540818baaea77eb38"],["/images/docker/4.png","367c99cdceb0f81b378c075904c88644"],["/images/docker/5.png","e414ffe973288941a51e9cde7d92bb71"],["/images/docker/6.png","d559cb65466a900edb0d7983917ec37c"],["/images/docker/7.png","ac71dea1600d19598053c5607e7975a1"],["/images/docker/8.png","d9b777921984636623864ec2b250e298"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/math/1.png","be08ac320a3fafd4b6cb9a2a820a3b42"],["/images/math/2.png","82c7788477186d13876fa2783fb31305"],["/images/math/3.png","c4dbdce9ea65b388f307e4c2b6701c7a"],["/images/ml/1.png","0614e4691064abbff74cb69212e2a466"],["/images/ml/10.png","ee1e7358cde8b8137ce684b0c4365e04"],["/images/ml/11.png","c86479f988d4dc6b87074724f42e35f7"],["/images/ml/12.png","35ff221fa6ca14c635bfef76cc5a2991"],["/images/ml/13.png","f1bc25e32ad10b0d7b0c9ede788a5b88"],["/images/ml/14.png","2f592eda3505117752f6719aba65edac"],["/images/ml/15.png","0c8117df94fa4c145e2c2943e2247ec0"],["/images/ml/16.png","5705759f62883d83028290a0933e5c86"],["/images/ml/17.png","eed841d914da17d258adc9852c83b745"],["/images/ml/18.png","7863315ccc29fb1c24e27d2a5fcd477c"],["/images/ml/19.png","e3307673fa4d5889a52012dff9c03ceb"],["/images/ml/2.png","9d72b6ab1efe7d92a0f75e376681e549"],["/images/ml/20.png","73daa252e5311ade27160a65cc61c9a7"],["/images/ml/21.png","2749400036f8bba7beaa0ab3224f5389"],["/images/ml/22.png","aadd1c4aa269c129958a013d84e42492"],["/images/ml/23.png","80937bc77f36a5d6310ddbde34c091ed"],["/images/ml/24.png","810369b827c1d376ae5a0e6bbf0c2761"],["/images/ml/25.png","8ba5410eb67aa3cb734596ab0b7abbf3"],["/images/ml/26.png","e702d97bf87a16ac98d9b96357a50224"],["/images/ml/27.png","eb5810d90beb005e0921b5bdce4278cb"],["/images/ml/28.png","daf6146665cd93ff43b7c0537d26931b"],["/images/ml/29.png","faf61ee7aef34289909db13712731ef5"],["/images/ml/3.png","05763899f89a3aec00df11ea2a7a976c"],["/images/ml/30.png","521f8749d93cc41c604307333b8ecb20"],["/images/ml/31.png","61e322d57e7a6468cbca48304ae94cd4"],["/images/ml/32.png","6ec323b582e8562c93c1d6640f4d807e"],["/images/ml/33.png","0d1cdd5ecbf216003f28746db2b33b6d"],["/images/ml/34.png","64b7033aec57515e301161d85f8e4e30"],["/images/ml/35.png","edf088702e0177920a94b3508bec7ec7"],["/images/ml/36.png","fb5a9ddea3a45786bdf11c415e147896"],["/images/ml/37.png","60914873dae6567b8e68ec45ec6b59dd"],["/images/ml/38.png","2b8b5cff6aa6292c46ac594c30027790"],["/images/ml/39.png","1d3d3d21aac91a1e4a2b16c45345d3b7"],["/images/ml/4.png","d1d10f45e987ea4af1c4b7086c5f745b"],["/images/ml/40.png","772e151cc0187377b8640b6769125b96"],["/images/ml/41.png","481ba1d4954007c7eb74aa89f44cc220"],["/images/ml/42.png","3b812196cfcc9fd92a8eae2eba443cfb"],["/images/ml/43.png","cd5f999f7915a1797b3a4c1bd1a63484"],["/images/ml/44.png","37eb471cb2476713b4491a3d747e8f5c"],["/images/ml/45.png","df3980f9a53928768f0949eab0dda0f6"],["/images/ml/46.png","d9a4bc126242de84d18bf1a616961bc3"],["/images/ml/47.png","ecc436ba7ba75ec5c422ecdd700219d6"],["/images/ml/48.png","a154e7896b59f7c4feb7fd9869350494"],["/images/ml/49.png","e9cc736869a7161cfefc7e1961c2d9aa"],["/images/ml/5.png","884a734410b3627a14981c481b27c583"],["/images/ml/50.png","6900e08fcd02c9a9bcac17b1c7d68fad"],["/images/ml/51.png","1ecd25e8788aac72f2f6d2440ebdccde"],["/images/ml/52.png","e8a96085b9487570772875b5f40c5a64"],["/images/ml/53.png","6ed613d5f1a4465a670ee7557dd29575"],["/images/ml/54.png","4fba1f8adf3b0bac8f6cd911016e97d9"],["/images/ml/55.png","f772762d3dc7b6927ca73e276bacd35c"],["/images/ml/56.png","20827caf527ef20652b21adb8e143e96"],["/images/ml/57.png","3bfb68f2234dfdb64aa5286d49a04f79"],["/images/ml/58.png","291a3424c7bff0afa585bfa7f09d67de"],["/images/ml/6.png","bbd2772718a23a1102b2201f78413d6a"],["/images/ml/7.png","c753cbfb65ed9638e82e5d0140028f82"],["/images/ml/8.png","0432f07c0cec1708d787798042156c21"],["/images/ml/9.png","2870280e8d3cedaee23818114a3cc02e"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/py/1.png","15b7ebe86935d45e017776bdd2e2e2d7"],["/images/py/10.png","30a401b3d7e75a8e237f0b805f583e4b"],["/images/py/11.png","59051625b36f69ecb18a6174a04b4368"],["/images/py/12.png","0738f0be3b1b72d1f66f6ec218d76675"],["/images/py/13.png","aabc1941943d19cd9c26b4c97b991415"],["/images/py/14.png","f09e867b7e33ab28bb509208efdd4928"],["/images/py/15.png","af9b8898e56514fa1c060e35d316066c"],["/images/py/16.png","ba5ec4e869bae45070e08f64788ecfbe"],["/images/py/17.png","82fe7ec533b75c5b9ed5e677f57eeaa9"],["/images/py/18.png","f651173cc0a9b4a8dcbdd495f73f882c"],["/images/py/19.png","db20315678cbcad8dd4f0d4bd72cb991"],["/images/py/2.png","589c0581b9b1da7112120f6a1f320fc3"],["/images/py/20.png","7670ef568945df192b81f0dc0f3d3f7f"],["/images/py/21.png","dffafdf930d818b664746a166cbb97bd"],["/images/py/22.png","e42a0fc9bec94fcd5207dd39ee46dc5f"],["/images/py/23.png","729ce256675ed1b5be435ba49e07d5fe"],["/images/py/24.png","3178aad732fb3a59fd6b9f0522d0c84e"],["/images/py/25.png","23dee90b7ba96de076a6bfbc7e9f9fc8"],["/images/py/26.png","5f27264c4cc5f1066086d4a6dafe68df"],["/images/py/27.png","2a30cc59399a637db839057f86d8c331"],["/images/py/28.png","f8ddf9a9bdfb76086c414c8561a7c756"],["/images/py/29.png","e6a08a36098bc987d119f57a9b273829"],["/images/py/3.png","46d73ca2a738a321e189608497c35b78"],["/images/py/30.png","aaad070ba988fc223be70b8be8d1a694"],["/images/py/31.png","2190bbadd784c89153ca10aacaa212d7"],["/images/py/32.png","4ebc4497b4ffff11e8ed5bb12a592cee"],["/images/py/33.png","a912118468c632d485625969bbe13b28"],["/images/py/34.png","8647e22d53f209413add44e80c22aaf0"],["/images/py/35.png","f98376dfc1b6b6885ce35e0e29831c12"],["/images/py/36.png","63b48f45c30f1f4274506b01ccd2aaae"],["/images/py/37.png","66a568168cb34596f4d2b61f701f0c41"],["/images/py/38.png","4ec3117c6e4660417f25420015680ef0"],["/images/py/39.png","1d31399d3f0ef916447931f88ce3398d"],["/images/py/4.png","beabd345ad64e22ed6750c13f7d35e90"],["/images/py/40.png","7b19dffc350d03bcf0de1c9477e93105"],["/images/py/41.png","593c6b113bc67e90339d819616bd1277"],["/images/py/42.png","20c75a35c4a4b07faf07daf9475ce1ff"],["/images/py/43.png","6c673a7ef4a3fc5ea9169a3fbd61f80e"],["/images/py/44.png","2334590711560011876de8c746b18604"],["/images/py/45.png","1441f705d69261450da8c5233ab02d0f"],["/images/py/46.png","616c6ab2d9c8eb007952017c7452d6d7"],["/images/py/47.png","004175268fd9029f7d09d1503670370f"],["/images/py/48.png","489330b4f78c3796b20042589808f8bd"],["/images/py/49.png","58a224ddfb5f57a12f48f3b4e3cbd0d0"],["/images/py/5.png","771c59a4e854122793a682f106fa08e5"],["/images/py/50.png","bfa901b645deced8dd1f9a8c26778f25"],["/images/py/51.png","2ffadace686f78c1414244d872d398fc"],["/images/py/52.png","2e3ec0d057d100e4e8ea5f0212e5c998"],["/images/py/53.png","17bb9979be17d13b90357c57139da462"],["/images/py/54.png","c23d69845f72a73fa3e2f1fb84771c56"],["/images/py/55.png","8535760aff99ceb4b556f7b97796d94c"],["/images/py/56.png","59ec9ba92d7ccd2c716228a1a8455ccb"],["/images/py/57.png","15bc87041ac4b1c7b3525b314fb7ef66"],["/images/py/58.png","5f94f3e9e9c6e104566bbb1b600e1fac"],["/images/py/59.png","bea377ca62ca75ab5d71c430b0355931"],["/images/py/6.png","833af6f79eead78a0888a42a24a7c35b"],["/images/py/60.png","ea730c5befdab80ca63dbcce82b3e4b9"],["/images/py/61.png","a6562d29f44817c17e7be41238aaad7b"],["/images/py/62.png","7d457435369276895070e3dd61c9462a"],["/images/py/63.png","91015ba12e25b0f895687581ce6bcb25"],["/images/py/64.png","20a15a250b09f9e4604ab3550b9700c3"],["/images/py/65.png","fe52bf0b2570638b2d22d72a27152e1c"],["/images/py/66.png","d3025a5e94f7bc525362d1f2e7745078"],["/images/py/67.png","2f7ca0e327c55df4f003210905190792"],["/images/py/68.png","6f7279dbb187720b89c66250c986e965"],["/images/py/69.png","a44c673d20cbcf45db156036bd983034"],["/images/py/7.png","d947a703f79658536cb2750914637ffa"],["/images/py/70.png","8a87dfa24f54a8547ef6826d3b6289f4"],["/images/py/8.png","20b867d8137281e9c3a40b802df75680"],["/images/py/9.png","e4639c570e7f7a04e90439456ad297c5"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/reptile/1.png","6d0aa92af42a4647977a03707bade702"],["/images/reptile/10.png","79f309da23b6b5b8b9effd25cc20abd9"],["/images/reptile/11.png","e60854e61ed69c6cccb12196fd947705"],["/images/reptile/12.png","ae4ac9f4065966955a3f31fa4b2292f3"],["/images/reptile/2.jpg","f722e57e21e3d76ebedb6667bfd44aed"],["/images/reptile/3.png","b4161135bc5a889337f36a3a0c20dc6f"],["/images/reptile/4.png","73b18e616e9134ffc1aaeb4ed1c29dfb"],["/images/reptile/5.png","318877d0e3a7337773fc301d6c5118eb"],["/images/reptile/6.png","f39ae0da0e1d343ec162f5db6ade59fc"],["/images/reptile/7.png","26491b8984ce6b22c76ebb6372f912f0"],["/images/reptile/8.png","15bdc5c257f7c109f184f9872c57b2d5"],["/images/reptile/9.png","92e8ffd5026d530e630b6ba90c23236f"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/tools/1.jpg","5bf773e6fdaf0c6573c4578ea232dc21"],["/images/wechatpay.jpg","07f0995337e2a1c8d2357e5659ec120b"],["/index.html","a3d4dd64cf0147954fd24b05d645ade7"],["/js/src/affix.js","05d5fa3f03937e60f1f23efc2217a31d"],["/js/src/algolia-search.js","e6e6d0f45252512acbb79d6388d6b527"],["/js/src/bootstrap.js","41786a95471236c246a7a3c6348a64ce"],["/js/src/exturl.js","c4f841094d6b6c07913ea4b8a87260ce"],["/js/src/hook-duoshuo.js","095cf92c294f84f99bbaf8f3b7d5693f"],["/js/src/instantclick.min.js","1b2a94330936328d252c3bf613bb1ee3"],["/js/src/js.cookie.js","7b37954532d2d258ef25e5a5a10da3ce"],["/js/src/motion.js","e4795424c8afcb16d3dbf8b0468e3a78"],["/js/src/post-details.js","4a7daf862b16c6960c8125272462a065"],["/js/src/schemes/pisces.js","ee113cec5aa8081c37b4dfb1e3c7d1d9"],["/js/src/scroll-cookie.js","54ad46ffe9122c43affb1067eb1b8211"],["/js/src/scrollspy.js","6a9fbe53ff3b8bada347b9d5966b5fe6"],["/js/src/utils.js","6cf21216bce384099445343e6c743cac"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","d11475568ee5907a7979c0f4c2883fd7"],["/lib/Han/dist/han.js","2096fc7d8d9eb2851528e5b6aa0949b0"],["/lib/Han/dist/han.min.css","ec01f497a2758d67b7b028b4be1b4493"],["/lib/Han/dist/han.min.js","b6092294a2945c69b3c326bcfdcca395"],["/lib/algolia-instant-search/instantsearch.min.css","2a1a1d247b7207a313f42147c0492a78"],["/lib/algolia-instant-search/instantsearch.min.js","b9806df46a0830b55329e66c3ad436ed"],["/lib/canvas-nest/canvas-nest.min.js","f2130fc4f6d3461bf8af73f511893d2a"],["/lib/canvas-ribbon/canvas-ribbon.js","b19eeace551c4a53536f2b28f168a077"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c7c1fcce33583f08ba1a77e555640fe1"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","85b24ae54697fced73cb2e391380499d"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2c724ec2cd6d0c66f642d22cdbb87839"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","a78c78bd3a07e16cd785a29ee9de57a0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","fe635f9ccbf10c2aa715675ab010e38e"],["/lib/fancybox/source/jquery.fancybox.css","7d3c971db53dc303572cde0cde9adb8e"],["/lib/fancybox/source/jquery.fancybox.js","013d7846b6ab93cf0e8476241187c2c6"],["/lib/fancybox/source/jquery.fancybox.pack.js","1124b2102e8a9fbd3f7271d182509217"],["/lib/fastclick/README.html","0b9fb8f7effc8099191a81f4807330f0"],["/lib/fastclick/lib/fastclick.js","a4969195e103709ce9a9ff58aa29caa6"],["/lib/fastclick/lib/fastclick.min.js","22f13dd6133d99331fca4bca315cb2cf"],["/lib/font-awesome/css/font-awesome.css","ff52a5b38058e0f451a47001b00bc517"],["/lib/font-awesome/css/font-awesome.min.css","ff52a5b38058e0f451a47001b00bc517"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","e777792961bd8e28fc123d10a68646ff"],["/lib/jquery_lazyload/CONTRIBUTING.html","1772c9a0995b3254ef79f9e110874b59"],["/lib/jquery_lazyload/README.html","ede28e235ff3b842b23b3e991a30c33c"],["/lib/jquery_lazyload/jquery.lazyload.js","ebed834e95e70f7f50ac0d8323f5302c"],["/lib/jquery_lazyload/jquery.scrollstop.js","6b743b2440dbb1175e499d18751a34fa"],["/lib/needsharebutton/font-embedded.css","b67df20836e14d6467ccc7be9c48ef20"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","b32847bf67d9af5caf77d8ef576c3cc7"],["/lib/pace/pace-theme-barber-shop.min.css","de324c50532c42b947e3612696e811e4"],["/lib/pace/pace-theme-big-counter.min.css","e8391b958bf39a29ffce480f1e62dfc0"],["/lib/pace/pace-theme-bounce.min.css","68c7f534f4547c4597c44fda9efe7ea5"],["/lib/pace/pace-theme-center-atom.min.css","6ed72649134d57c55edaa60f16c437ea"],["/lib/pace/pace-theme-center-circle.min.css","c50b07102c05d2944f9e41bb43e14eb6"],["/lib/pace/pace-theme-center-radar.min.css","c36fb9f455fc56ffc1f10d9f6ea124ef"],["/lib/pace/pace-theme-center-simple.min.css","fccc0c986366da9e8219492173de9bf4"],["/lib/pace/pace-theme-corner-indicator.min.css","7070abe366fbf2addb84b713f96757a2"],["/lib/pace/pace-theme-fill-left.min.css","9ce62f13c3db2718fd3347814c1f71b7"],["/lib/pace/pace-theme-flash.min.css","7210c5590fbbc3b9dfa065438ad63188"],["/lib/pace/pace-theme-loading-bar.min.css","ccb96ff38c9c39ae54164007e3fce0f8"],["/lib/pace/pace-theme-mac-osx.min.css","0ffd6d331521491a21e1279192a7c12f"],["/lib/pace/pace-theme-minimal.min.css","00987c8bbe6d12add8111526cbc7a61e"],["/lib/pace/pace.min.js","a79a7999bfb8129724a3a55c36af5bc0"],["/lib/three/canvas_lines.min.js","c7d0d981e6e24cb66383478309d83ede"],["/lib/three/canvas_sphere.min.js","ef672c1a2c48afcef904f8c449ec3f24"],["/lib/three/three-waves.min.js","943b23226ac4416cec962e12889c37ce"],["/lib/three/three.min.js","96d99711cbf5ffbe51b8fced150e04fa"],["/lib/ua-parser-js/dist/ua-parser.min.js","a26c459f4e860f35eea3ba04edb5870d"],["/lib/ua-parser-js/dist/ua-parser.pack.js","fc6c466ffb702b9efb4505115a2e1d84"],["/lib/velocity/velocity.js","53fb1a2718845ccad53c007a7a2ce8b5"],["/lib/velocity/velocity.min.js","a2fa5c401270e15e41ac71ccd0b9d17e"],["/lib/velocity/velocity.ui.js","602eb9fd8f31e11ee6a772970e9567a1"],["/lib/velocity/velocity.ui.min.js","d4aff04be4ef43265e2f111a61a58eef"],["/page/10/index.html","45192b6b5824528530a1e30ed2785cda"],["/page/11/index.html","85b1aad5fc86ebd74bd02d445d5e766a"],["/page/2/index.html","45e035a944e151ef62307b80bff4e235"],["/page/3/index.html","e07a1b721c9354b57a3ebb877ed45a8b"],["/page/4/index.html","a00951984354f60952b298a6d1b745cf"],["/page/5/index.html","f9734b9fc88b2450b866684c79420e2d"],["/page/6/index.html","581af0507fdc89fe47de108a61d61970"],["/page/7/index.html","aea5a6707256afcd99e1b2e07bccc6c2"],["/page/8/index.html","0da8b5b3d5dc460463e2e9f7d162bef5"],["/page/9/index.html","fd3109e494bae9ef2e8ef83cbb5d4867"],["/style.css","dbdea74e61961c1e56b9bb68c4fb4059"],["/sw-register.js","11561d4c489671814f9625eebab99ba5"],["/tags/CNN/index.html","3c635c01feab420da756096b5584981d"],["/tags/DNN/index.html","7b934a3acbda7511fb42079201df62a5"],["/tags/DeepLearning/index.html","2f9bcade8be8beb48fd1ba3bfb1ad612"],["/tags/DeepLearning/page/2/index.html","a1ac731edec1166ab4240cae76688c3e"],["/tags/DeepLearning/page/3/index.html","640c3645a12a5bff9c05cf3069287b34"],["/tags/DeepLearning/page/4/index.html","49de6905fa8f745ab7644e820f3ed2eb"],["/tags/DeepLearning/page/5/index.html","aba2474c6941a284f77a35c6223a46a0"],["/tags/EM/index.html","adfaec7a9e5ff5b3b6607cd5227eb993"],["/tags/GAN/index.html","c10cac41155560401a31722630b2aa16"],["/tags/GIT运用/index.html","2baefe88a02f1af3b49e65b6762e6338"],["/tags/Keras/index.html","c382c56779883dcb39ad3ab5740f5c7b"],["/tags/MachineLearning/index.html","54979ea98c4d87b447fe945fc839e5ed"],["/tags/Python/index.html","5a621c71942fff8faed03bf3cb8ae791"],["/tags/Python/page/2/index.html","5bef488eba4661e0de14516d02c5eee1"],["/tags/Python基础/index.html","1081b88fa29595db036b8521c26bc440"],["/tags/RNN/index.html","31ade32ca96422bf6ba01b6f270006e6"],["/tags/TensorFlow/index.html","0d7e3b8eb5c5c3c7cc5982a4635ef793"],["/tags/TensorFlow/page/2/index.html","08f3dffe718eb3105c9617f1d0a255e7"],["/tags/TensorFlow/page/3/index.html","a12c955f424a686b7d50629eea037de4"],["/tags/anaconda/index.html","9acb6762cbdebda7bc33de08a683890c"],["/tags/docker/index.html","50a6fdae8805116d91f7c98892aaf80b"],["/tags/git/index.html","306e2091da1290cee956e137bc68c812"],["/tags/index.html","5bdda2ad31d0441b43b3e199a8f69760"],["/tags/ios/index.html","5afadcbf0a27829ba698f8ddd939e089"],["/tags/linux/index.html","5f3ddf4df25b42805709060bdb47c29d"],["/tags/markdown/index.html","de0c996fb5590283e5b9a45aa471aed1"],["/tags/network/index.html","daaa9085d816733250481fa675f17f45"],["/tags/opencv/index.html","8e561a3b45b094164bf5bbf52bb25b1b"],["/tags/pip/index.html","c865a2f8084615c0a8166bece45992c8"],["/tags/pycharm/index.html","df8ee8976cbb17488df1123d263a0e3f"],["/tags/svm/index.html","dd355b3111b928d8b9b5fb5d3b633994"],["/tags/ubuntu/index.html","684a5e9401fe6da80cf66dc046a7cab1"],["/tags/优化算法/index.html","ac1f41ca84ea2d4f15404abfb1d8e524"],["/tags/决策树/index.html","de146dcd9b310f1cb8d9025598aa32fa"],["/tags/反向传播/index.html","46433b797a4cbb3d069efcece8e07dcf"],["/tags/声卡/index.html","cca5bd5639c6918df8a2f2a130a1d943"],["/tags/安装/index.html","33876a62df8d524465cb4350c41210df"],["/tags/开发工具/index.html","bfe352838a2263ada2db96cb07dbb50c"],["/tags/开机/index.html","a26ec4debb14fc78ae3023e3e58e37d9"],["/tags/朴素贝叶斯/index.html","e2617ef0494a4657c627c99326b90a55"],["/tags/核函数/index.html","4bbed9e140ab444fa024b96df5ced96d"],["/tags/梯度下降/index.html","9a35ff3469d7b74a3f3d7cefb53a9979"],["/tags/神经网络/index.html","0d77a9b5b39b8dee3f48925fffff2fa1"],["/tags/线性回归/index.html","3dabc023ee959423553ced46a55fc460"],["/tags/聚类/index.html","0bdb7ce13747e9c39f408c4a1822832d"],["/tags/自动化/index.html","e282e06943f5cdd7d078b0a99b8b62f2"],["/tags/贝叶斯网络/index.html","38e42c9c3d7c1dff34430fd8910d5ca1"],["/tags/软间隔和正则化/index.html","117f1889bf8f9a8b829ae910ae7c28dc"],["/tags/逻辑回归/index.html","2a8ce760291c626a3b87901b5e65dca5"],["/tags/随机森林/index.html","f67202fe84cab37310481cea4a42635f"]];
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
