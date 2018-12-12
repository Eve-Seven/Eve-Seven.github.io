/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/08/25/2018-07-20-raspberry-Internet/index.html","33c792940d7666af4a2bdc722b38c873"],["/2015/08/25/2018-07-20-raspberry-on/index.html","ce67a0c7afa48dc1947e101edb45bd15"],["/2015/08/25/2018-07-20-raspberry-usb/index.html","6286219623c376f9336b87e12c9eacbc"],["/2016/07/13/2016-07-13-GitTutorial/index.html","994630d88be09eed244cc93216e1a233"],["/2016/08/04/2016-08-04-PythonTestAutomationiOS/index.html","b6343a835aad868b92616becf2a3b2c1"],["/2016/11/20/2016-11-20-markdownTool/index.html","54bdb20fc4931b6d5e41269894507814"],["/2016/11/20/2016-11-20-neural_networks_using_TensorFlow/index.html","94bdcd505904aa1e5aa2c835467617d2"],["/2018/07/05/2016-07-05-MachineLearning_introduce/index.html","a5928f8e7456c1024fa1014e0afe8bf0"],["/2018/07/21/2018-07-21-ml-linearRegressionL1L2/index.html","593bbd688ddef14bd12c0645dc7107ed"],["/2018/07/23/2018-07-23-ml-DecisionTree/index.html","34d06f77c7ebd1c8afdbfa9f915e81ae"],["/2018/07/23/2018-07-23-ml-logisticRegression/index.html","e2f515b575a7cd58198b22dd2313be9a"],["/2018/07/24/2018-07-24-arithmetic-gradientDescent/index.html","901c64ebf4312d96501a33a62446da04"],["/2018/07/25/2018-07-25-ml-svm/index.html","d4d3e8bd4c60775508ebb627c4f772e9"],["/2018/07/26/2018-07-26-ml-svm-L1/index.html","6f1f66092eea53c921b78e3171c120d4"],["/2018/07/26/2018-07-26-ml-svm-kernel/index.html","e645c766eccbc9882df9ca092eb5e69d"],["/2018/07/30/2018-07-29-ml-clustering/index.html","6ac37679ad0cad78c524c8aafca598c3"],["/2018/07/31/2018-07-31-ml-em/index.html","fcb93f89a64884ba2f1c567fd8955751"],["/2018/08/01/2018-08-01-ml-NB/index.html","0ee2acdc83e1851374fe079580b19d35"],["/2018/08/02/2018-08-02-ml-NB-network/index.html","547262d6e1ed2e17d4300c39a9c02cf5"],["/2018/08/08/2018-08-08-DL-introduction/index.html","0ce3159cb4ec7b7475edd92c97354eb0"],["/2018/08/09/2018-08-09-TensorFlow-windows/index.html","c7814ea834860e927f063c49bfd847a5"],["/2018/08/10/2018-08-09-TensorFlow-ubuntu/index.html","f964cd36d79fe1a277a277983521a9d7"],["/2018/08/11/2018-08-11-TensorFlow-Virtualenv/index.html","319729448a114e96d086c8c3118d5467"],["/2018/08/13/2018-08-13-TensorFlow-course/index.html","c533e04ab3a986c60ed4dfdac84a0406"],["/2018/08/14/2018-08-14-DL-method/index.html","701281b9f82d28c3c61886534bf93b14"],["/2018/08/15/2018-08-15-DL-back-propagation-python/index.html","c79e34c230495b7779c485a573712e22"],["/2018/08/15/2018-08-15-DL-back-propagation/index.html","ef584937c05e0dfb9f12c61baf4ed332"],["/2018/08/16/2018-08-16-DL-DNN-python/index.html","ad04f3354dbe276f2249710ddcbb55ad"],["/2018/08/21/2018-08-21-DL-CNN/index.html","77f4437f6503712ba6ac6dba922fc74f"],["/2018/08/22/2018-08-22-CNN-back-propagation/index.html","01af31a1edad01e160641eb662d48ca6"],["/2018/08/23/2018-08-23-DL-CNN-python/index.html","9e1cd5328f1b5c742b28112f19f986c5"],["/2018/08/24/2018-08-24-DL-CNN-LeNet/index.html","d419ab84f9fa2def4feced398150e14d"],["/2018/08/25/2018-08-25-DL-CNN-AlexNet/index.html","894dda79e7e670489b3d4066586806de"],["/2018/08/27/2018-08-27-DL-RNN/index.html","f9ee27de8648437be5c6c4d2d58b9f0b"],["/2018/08/27/2018-08-27-TensorFlow-keras/index.html","76d408f004dfd1ff3366aa23e5dced08"],["/2018/08/27/2018-08-27-TensorFlow-layer/index.html","2032324b647215139bcc2e2802739a80"],["/2018/08/27/2018-08-27-TensorFlow-native/index.html","b146a9267331ed8c901a3139739f138c"],["/2018/08/27/2018-08-27-TensorFlow-slim/index.html","ecdc36dc844ce73b057268056c58a477"],["/2018/08/29/2018-08-29-DL-RNN-BPTT/index.html","94dba1822b2bb621c155d76ebe343b02"],["/2018/08/29/2018-08-29-DL-RNN-hand/index.html","9d11f99a61a6dd8c481d65ab95ea49b9"],["/2018/08/30/2018-08-30-DL-RNN-LSTM/index.html","62a2a649fea9810bb99d580cd920a085"],["/2018/08/31/2018-08-31-TensorFlow-RNN/index.html","bcc5f59421b4c0f250cb0da76632afa6"],["/2018/09/01/2018-09-01-DL-GAN/index.html","b996c0957e13d9837419908d8eb6cb74"],["/2018/09/03/2018-09-03-TensorFlow-GAN/index.html","394b8ce690425f1284f4d71553ff0599"],["/2018/09/04/2018-09-04-DL-DCGAN/index.html","82a0a37fe9d1710c54fe48fbbb9c0fd6"],["/2018/09/04/2018-09-04-TensorFlow-DCGAN/index.html","b9c58f637525c663dfb2eb4fe011dab1"],["/2018/09/04/2018-09-04-TensorFlow-save-restore/index.html","7aff3e2756b4e0f857deef0d5a284118"],["/2018/09/07/2018-09-07-TensorFlow-cifar-network/index.html","9e8352bd4ecad8650a92e0bb52e5f30c"],["/2018/09/07/2018-09-07-TensorFlow-cifar-train/index.html","79d51bc491726a7c61da0e7a678e2581"],["/2018/09/07/2018-09-07-TensorFlow-cifar/index.html","7e674a221c76d1108100a19f798db850"],["/2018/09/07/2018-09-07-TensorFlow-visualization/index.html","e2d4e985f04827d20d5717c00fdc64b0"],["/2018/09/07/2018-09-07-keras-cifar/index.html","1c079042bb0134f2f158a4a3458b50cd"],["/2018/09/15/2018-09-15-Pytorch-AlexNet/index.html","ec5496ce645bcc389800cdfd3c47de23"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-test/index.html","9dfebc1b69d5799b777c52024b99b5ba"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-train/index.html","4a277ea5e7ddb9caf397d8cf346215ed"],["/2018/09/15/2018-09-15-Pytorch-DenseNet/index.html","de3fc966683d9547ff54aa7d2370a705"],["/2018/09/15/2018-09-15-Pytorch-GoogleNet/index.html","06351bf9350cf93afa498e4023b234cb"],["/2018/09/15/2018-09-15-Pytorch-LeNet/index.html","b0319a6e966800390bf30c339e7a7338"],["/2018/09/15/2018-09-15-Pytorch-ResNet/index.html","d80eaebcb323f80018053c26e7230978"],["/2018/09/15/2018-09-15-Pytorch-ResNextNet/index.html","0212bf8de57f1c74e216aa3b2b1e3eaf"],["/2018/09/15/2018-09-15-Pytorch-VGGNet/index.html","04d153635d0c032214b87411abb6a74c"],["/2018/09/15/2018-09-15-Pytorch-cifar10-data/index.html","4851abb1066b3638b2d9a03862b8ebaf"],["/2018/10/09/2018-10-09-pip/index.html","0ece3c53f9c2e64d01a51675bd1fd8c8"],["/2018/10/09/2018-10-09-tensorflow-question/index.html","c05018eb25def71efcb4e2b78dc4f766"],["/2018/10/15/2018-10-15-source/index.html","6123f61edead9b77dc5b59494b907189"],["/2018/10/26/2018-10-26-openCV-geometry/index.html","5fb2c8c73910ab0989bd81929c0b51bc"],["/2018/10/26/2018-10-26-openCV-install/index.html","4cb24bbcfc3f2153fa456882fb80a128"],["/2018/10/26/2018-10-26-openCV-special/index.html","d9c8e5bedf50a57070295dcf4bb2ee0b"],["/2018/10/27/2018-10-27-openCV-face/index.html","8d2bd9122ae766c8e00edaf5ef712f72"],["/2018/10/27/2018-10-27-openCV-svm-hog/index.html","ea26e3e4be950094c384ff4597cea0a9"],["/2018/10/27/2018-10-27-openCV-svm/index.html","6abd05b1871f8d7b10a0553d95c7d394"],["/2018/10/27/2018-10-27-openCV-video/index.html","ef05e2b4761f2dd2d3be6c335367d0b4"],["/2018/10/27/2018-10-27-openCV-whitening/index.html","838f631d3b5ea7c30a30c3d6befa07da"],["/2018/10/29/2018-10-29-docker-TensorFlow-cpu/index.html","bb57d84f6719b1d2de01f2edd17b370c"],["/2018/10/29/2018-10-29-docker-install-win10/index.html","7528d31d74e01735742db32acccd73be"],["/2018/10/29/2018-10-29-docker-install/index.html","24bca0bf90c17a49c45aa2cd879e0bd4"],["/2018/10/29/2018-10-29-docker-source/index.html","45d01045171a03f7fbef27d9978695d0"],["/2018/10/29/2018-10-29-docker-speed/index.html","61877108b8c5836c028bb19cfaf2d690"],["/2018/10/29/2018-10-29-docker-vessel/index.html","f75506d8767cc65c35482f8cdb78fd82"],["/2018/11/08/2018-11-8-linux-vim/index.html","00217d99e164b147a8a98163bec10218"],["/2018/11/08/2018-11-8-linux/index.html","a1bfe1a3efe211d66f2a4bc021f74416"],["/2018/11/09/2018-11-9-anaconda-ubuntu/index.html","342d7e2f062c3ea37c0f350e88c28b9c"],["/2018/11/09/2018-11-9-anaconda-windows/index.html","97aa086fa9ff61bc98238458b770bf9c"],["/2018/11/19/2018-11-19-git/index.html","f85a6c54b84562889db555268407cadc"],["/2018/11/21/2018-11-21-python-date/index.html","74bfd8ce51d6d1b9685ecfc856300ddd"],["/2018/11/21/2018-11-21-python-encryption/index.html","5c7e144207433a6e67af2626efbc370b"],["/2018/11/21/2018-11-21-python-log/index.html","5e81a406e3ca19ada3c2b3a6dabf5037"],["/2018/11/21/2018-11-21-python-pillow/index.html","3a328918714edaeb2a553ef772bb5633"],["/2018/11/21/2018-11-21-reptile-beautifulsoup4/index.html","62ff133e15b336be29217b9c8953cf56"],["/2018/11/21/2018-11-21-reptile-http/index.html","8730b7bfeb27a8221f1b1531fe92a0c6"],["/2018/11/21/2018-11-21-reptile-request/index.html","f8624e54680ae1a1714eba8cf9a42ffc"],["/2018/11/21/2018-11-21-reptile-tcp-ip/index.html","1aa781a1e84235c6e2d6b7ad902ebede"],["/2018/11/21/2018-11-21-reptile-urllib/index.html","bd2e7b693ca178dbee7d05416f5014e6"],["/2018/11/21/2018-11-21-reptile-xml/index.html","9c08c3e1ab17d8100e8baa5581906b48"],["/2018/11/22/2016-06-02-Develop_Tool/index.html","ce846bd18d33c2a80827b13f47662a74"],["/2018/11/22/2018-07-20-ml-linearRegression/index.html","7d5b465c8e1bd0f0cac86cf2a6ae7188"],["/2018/11/22/2018-07-21-ml-linearRegression-python/index.html","344e9c282da7e566e2e8bbf06cb97e55"],["/2018/12/01/2018-12-01-python-numerical-sequence/index.html","66524011d5291669ffc2394305f6447e"],["/2018/12/08/2018-12-8-python-sequence/index.html","5c12c0df0ffb6be3ce02cf44e5a9e69c"],["/2018/12/09/2018-12-8-python-output/index.html","84d2de04cec095df7e7e0b46c0edd898"],["/2018/12/11/2018-12-11-python-dict-set/index.html","dd7e906132635a4228e95ad3494a81cf"],["/2018/12/12/2018-12-12-python-if-while/index.html","e510b2721ef733ea46fafad17efcf3de"],["/2018/12/12/2018-12-13-python-main/index.html","129f63e55223316b4852fda62892ea7a"],["/about/index.html","fbdf212ad5cdee16ec0ae6977292c7aa"],["/archives/2015/08/index.html","070791e2b60da47d02339fbd8a671d54"],["/archives/2015/index.html","0810ce0255c1d5c2890c1961fc4409ac"],["/archives/2016/07/index.html","e5c552db5ca5d65a795177a3e4a92e90"],["/archives/2016/08/index.html","bbcfd048a57ae833be73a1317ffd5f61"],["/archives/2016/11/index.html","11d5cb628ff0005b94c1c970ab585f70"],["/archives/2016/index.html","7540f6aab0502405fa5c179857e6007a"],["/archives/2018/07/index.html","6dfcbe5551823233b1a479cebf90c060"],["/archives/2018/08/index.html","50f5159b617cee9150b9714a097faeb1"],["/archives/2018/08/page/2/index.html","54e9891d715051056dce8c31d8709b3c"],["/archives/2018/08/page/3/index.html","c165c860f0188ec21cf6cbf715735e4c"],["/archives/2018/09/index.html","54a5511f3aec705ada72664451c35f7b"],["/archives/2018/09/page/2/index.html","75554525e68caa747d5dc1888a96f7d2"],["/archives/2018/10/index.html","567a87803c629051434639e1734fba85"],["/archives/2018/10/page/2/index.html","89d205b2ed852d00a9a22fbc6d9a0b83"],["/archives/2018/11/index.html","b70e65f9db64ab629208d29f734c11fd"],["/archives/2018/11/page/2/index.html","a48b86cbbc0879c6c59c69b387b626d9"],["/archives/2018/12/index.html","a6261ffd068b03505583c5bf8a4a5e1a"],["/archives/2018/index.html","c6fb5a7a8d22f41909256637ccdd7858"],["/archives/2018/page/10/index.html","688bccb183bd9ed4034ddf4b55046ce1"],["/archives/2018/page/2/index.html","8c353d6fa44a5c0b012fb5f5d87b6a16"],["/archives/2018/page/3/index.html","5b974c02c7b1dbfa2247f66520118afe"],["/archives/2018/page/4/index.html","f5b691c80ccf9f2e6edbc1e65ede523a"],["/archives/2018/page/5/index.html","24e56b7a28fe1fe9aaf1468021b2b26b"],["/archives/2018/page/6/index.html","eddfa296be3c5d707d453797fc8188ce"],["/archives/2018/page/7/index.html","78961b8928fe2547577aae6c741e2ffe"],["/archives/2018/page/8/index.html","c4327d04eac813143d38c6993b2fee7a"],["/archives/2018/page/9/index.html","5db0fddbbd96425905b0c43887897774"],["/archives/index.html","6d3d406034567a3a871128052137898d"],["/archives/page/10/index.html","89a6acd59aef75b156c59f44e805cdc8"],["/archives/page/11/index.html","35e124496857bd8f90dc291e6f516291"],["/archives/page/2/index.html","379e81fc4afafdbe04ad2c70042e16cd"],["/archives/page/3/index.html","05cdbeaffa2f04a13e37c334d21c2d88"],["/archives/page/4/index.html","3f62b87807b18e7d5549b14d5baac216"],["/archives/page/5/index.html","0d9a0f4f586e0a728034483bbaaa1263"],["/archives/page/6/index.html","38f96d1917ef4d64c7ccbcf85161c7c7"],["/archives/page/7/index.html","49bc0297c14e7a22e1cf2a7bfdfa6d3f"],["/archives/page/8/index.html","b7d63e91fac37e04d1369cfea929c5ba"],["/archives/page/9/index.html","980edd585fc3f9080fe07eb9dba2beec"],["/categories/Docker/index.html","c2020dd47cacb83c76a2941204289647"],["/categories/LINUX/index.html","6649cef6b1756bc1754053455795096b"],["/categories/Python/index.html","c88c332094d73b562ff68ca04ca824bb"],["/categories/Python/page/2/index.html","9f8350b3725cbd9a01112c2c5fbc8c3c"],["/categories/index.html","049154802602abcd247257f3f71b1fd0"],["/categories/pytorch/index.html","4f4559a7b94787174e21c2d35d815886"],["/categories/tensorflow/index.html","8ad99669c8808fafde9885c77fa1b7df"],["/categories/工具/index.html","7b3c08294c65f1193a757fa7ab9814d5"],["/categories/开发工具/index.html","b4362aaee3378ead902a3206a4867786"],["/categories/机器学习/index.html","305e7ebe42eccfaa9eafdd7f7f2f121b"],["/categories/机器学习/page/2/index.html","a2d43a133232b4503f6a4eb8f5f924a8"],["/categories/树莓派/index.html","a4dcba0705f85144bc2bd609a673ca71"],["/categories/深度学习/index.html","c7e7daa57f7847f286e0be73e672a58f"],["/categories/深度学习/page/2/index.html","ad025c976d6138d20b4b0c65bb9a7832"],["/categories/深度学习/page/3/index.html","d3de869cb002de30bed755ca99d12a32"],["/categories/深度学习/page/4/index.html","10cf03537a7c52d451d2497d99b62052"],["/categories/算法/index.html","6e793c230e14b4ae34336daf0294c9a7"],["/categories/计算机视觉/index.html","f30b7b51ec63ad68b37b55a4137776db"],["/css/main.css","08a4bb7ba1d366ccf3f9f42199af930d"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","a80879cd6eb38ea4678e995e91c48298"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8ee39bf6fed055723e7e4d5de051af42"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/cv/1.png","9f4f5f49612d747ea7e2af9511bf81d8"],["/images/cv/10.png","64042888a4a3f3a4eb0fa61132ec4d2f"],["/images/cv/11.png","a7d130d884954da81b5cb0bb6ec3bc36"],["/images/cv/12.png","78897d4a1ee5b035a6c1fca275d6ee5f"],["/images/cv/13.png","5bddd0353cbbe6bba6397722208f71f0"],["/images/cv/14.png","84703e200ba7bd4c81b00bdd284e995a"],["/images/cv/15.png","9e2fd155d3d155ad7929da9e6ff173f4"],["/images/cv/16.png","11fc9d7abf8eab9eabd3b1b634972df1"],["/images/cv/17.png","4a033e9738210c148a2861e2a595195d"],["/images/cv/18.png","28fef5c46c2f422225f0c6784a0c5134"],["/images/cv/19.png","6f9bf406e55081a45f2d4a7694105aa8"],["/images/cv/2.png","31c2a99f54755c697a66fd612088d5d5"],["/images/cv/20.png","3c583b642ab32b3f0e8c25d702db84e7"],["/images/cv/21.png","a566537a8176f5ad3aefb0a4e3d3a28c"],["/images/cv/22.png","1dbefbc4faf1d6d1667d75e5a6e0ad4c"],["/images/cv/23.png","a19339ed91763c182a8876008b6a65b6"],["/images/cv/24.png","d7b6fbd2e71114ace115874caa3234d8"],["/images/cv/25.png","5d8679bb4738e48ae60291c204fb082b"],["/images/cv/26.png","a621210387b76992c71e377e5b3e787d"],["/images/cv/27.png","cc070ae570b8301c7e48511fd03606a4"],["/images/cv/28.png","19234927e77a2e573d1fcd36c6ab377a"],["/images/cv/29.png","981dc034de4ca4b6e734d1a54783f9c9"],["/images/cv/3.png","e4b7d480e78d5d0c4c6a14fb31b0ed5c"],["/images/cv/30.png","89a24fa0d194fd189e619e5399bc2556"],["/images/cv/31.png","3ebb39656dbc7ff3fe0d53e61edfca4f"],["/images/cv/32.png","9eaf042f7520f23a2c7298f55c0daa84"],["/images/cv/33.png","74898282f2a1f9cb206bcfbf15676aab"],["/images/cv/34.png","0131081dd3bb72e8c15ccabbc5a181b4"],["/images/cv/35.png","8fa06daf89516d71037ad8ad5466430d"],["/images/cv/36.png","6f9bdb37ded9320389993be28956612b"],["/images/cv/37.png","e2d8710a8d1be82ba5c171404a6eeb3c"],["/images/cv/38.png","0fbcf55535e125c43eaaf142a7c16084"],["/images/cv/39.png","0f17b9745c0ee7185f3408ff3e75f6d7"],["/images/cv/4.png","b55154238e33764873083b8463030d3a"],["/images/cv/40.png","352064971be0635581af1446a20bede1"],["/images/cv/41.png","482b4b502b236b800a2e609b273fc479"],["/images/cv/42.png","54f1a474233dedf7ee3fc20c56d23be3"],["/images/cv/43.png","f315e6c996c7f06ace53f7fee13aba7f"],["/images/cv/44.png","d88e6c82ebcf85e6332a5ff18f1d6748"],["/images/cv/45.png","546d355afb836ccafb1dbf1ec6e58c2b"],["/images/cv/46.png","e78e4d34afd63907c64e342d2dd56500"],["/images/cv/47.png","0355f524fce034d2b1d9e49d15f5acf2"],["/images/cv/48.png","0890f1471e76361456983ba205a7323d"],["/images/cv/5.png","eecb4a7bba3f07b8e3025585e7752527"],["/images/cv/6.png","834ccb9069233764f549780478fcf409"],["/images/cv/7.png","61b35bb3b9b78a44a617be9dbbdbddd5"],["/images/cv/8.png","57728a4eef354a0aed3698ad06659e92"],["/images/cv/9.png","60933d0b322df2c82963159b02f716ca"],["/images/dl/1.png","b2d61d37b640c75770a86cf1e89173e0"],["/images/dl/10.png","24f2fa5c727818fc48bf3a6f8068ee58"],["/images/dl/100.png","000f1c2ee2bb7adee780317771fc1178"],["/images/dl/101.png","12d112acec2d7f48e095a61620034ec6"],["/images/dl/102.png","8109c56796810451a8d889b964548a7a"],["/images/dl/103.png","15385609e43d95f81dc4e63fff9199de"],["/images/dl/104.png","897e22d7731a6c8d16ce28a62a739a60"],["/images/dl/105.png","b8a11e56f84cbd023da5c531df5661ba"],["/images/dl/106.png","dd17c8a11f7f5b76a56c38e98019c89a"],["/images/dl/107.png","d9ecc9e1a424bd937bb80da878265e02"],["/images/dl/108.png","92dadc873698dd6b2ef82e704fcbd647"],["/images/dl/109.png","764ba408eb6e5f60b496f3ca28cc83f6"],["/images/dl/11.png","34a8bbc88a333fc1c814e516a170afbc"],["/images/dl/110.png","7fa7ddcaf13c866e940aa176cc9abc2c"],["/images/dl/111.png","9c8b8224afbaf9da7a133e4fb47db202"],["/images/dl/112.png","85a50866d113ec1a5b74f6a2429465ac"],["/images/dl/113.png","f6b40f980ccc3bfdb8612b3df7d26681"],["/images/dl/114.png","7ac6605df0aa00d89b33b46935480ec7"],["/images/dl/115.png","a7925e77be39580d582d23f1ae2c2d7c"],["/images/dl/116.png","291b5652dd7b1e5a0a22ec5888dd0ae6"],["/images/dl/117.png","36483a1cda4bba80601aca92598db2ee"],["/images/dl/118.png","cc10fd547e2094b82e90bc3392b714d1"],["/images/dl/119.png","712089d980526e5239253638703980aa"],["/images/dl/12.png","edbd20c0f9be696722864416805f8ab2"],["/images/dl/120.png","94d4ed5a2a8db1d03192b10098415b3f"],["/images/dl/121.gif","a2afa892b7b37c37871701f374e4b5ad"],["/images/dl/122.png","0ea990077c7f9144c9321f3ed9c56bf9"],["/images/dl/123.png","be8c221c9306341acac8f91bf097cdbd"],["/images/dl/124.png","5c61222626f4efca142fdc78d62a4fe4"],["/images/dl/125.png","b1b458a4e0ad89f06e34e436673489ef"],["/images/dl/126.png","e91bbeef4c4a56ade881fb668addfab2"],["/images/dl/127.jpg","3f4dd207f75f3869c6e744120624fc8f"],["/images/dl/13.png","dd2781bbd52cd08b85822b27e704b223"],["/images/dl/14.png","a4f4a768b9e09d0edb0fb2b61bd6d890"],["/images/dl/15.png","11ccd1c7126bdada66328b00acd38ba4"],["/images/dl/16.png","431eca388a571f6ae2c97f355d4269ae"],["/images/dl/17.png","c785b250216adeb5bb3f7dd344e7e2f3"],["/images/dl/18.png","d0dd40f0001931557dafce3aa70e3f5a"],["/images/dl/19.png","e4aaac069b33a7fea0149cf0b220b2f3"],["/images/dl/2.png","488e19f06f5be0baa222ebc4ebf1f42f"],["/images/dl/20.png","4156882cdf4536bd465bf20630af6356"],["/images/dl/21.png","b215a29f6ecdd03485d9e0a45c9f786e"],["/images/dl/22.png","a96b71719979b2f64d394ecf26191dc1"],["/images/dl/23.png","049c7f3f8c8fb2b62f1ee23fffb1f94a"],["/images/dl/24.png","e311ddc1bc77c0069fc4c653d268f8de"],["/images/dl/25.png","2eabfc24c384e106ae088fa0d080e219"],["/images/dl/26.png","cb13ad3a876f65abfd9bedd5eab6d50d"],["/images/dl/27.png","a652a08f3b6e0b9b82a5556c26e15ea1"],["/images/dl/28.png","3726c0ea2c92a818dd385a8a9237187a"],["/images/dl/29.png","d202d133bd5e7142daf150ea2c300ee1"],["/images/dl/3.png","32643ac5d88e9288e6a91c545228f870"],["/images/dl/30.png","4a6eb0c7c5f7cae3430dd73266286610"],["/images/dl/31.png","230dd5d7b594b13641024ca7c16af9e6"],["/images/dl/32.png","bad29ccda756fa14816c2b7a3d5d60e1"],["/images/dl/33.png","6b47a20743481a7c84cafdddf7aa2b15"],["/images/dl/34.png","544f56c796819c8a2bd76e2008d73b3d"],["/images/dl/35.png","69a494d534a93002d5052f96d54458ea"],["/images/dl/36.png","c7cff050ff6232ad5827e4e0bca493c2"],["/images/dl/37.png","00861b87acf6f356ab7e36cc2f3b8f75"],["/images/dl/38.png","308794ff0c29eda49e3c9f7e72f193d6"],["/images/dl/39.png","031796e81c3dadb6d2c6521ecf824728"],["/images/dl/4.png","b13463143252da800adf2134fdcca283"],["/images/dl/40.png","9193fdaea78a9ecfb2ce346bc2245e62"],["/images/dl/41.png","6efe6e2ed3fa4763693fa7808675a717"],["/images/dl/42.png","e41671954c7e6efa4a80ed2827723a39"],["/images/dl/43.png","d616cae510f75ff0ba75532f13afb680"],["/images/dl/44.png","a1df61f0242f00b7b3dec380f2b82a5e"],["/images/dl/45.png","9880d436563d3e748d4a97219a932de0"],["/images/dl/46.png","ee3823c14cbbc0c4e719d8fa2b70284e"],["/images/dl/47.png","a9654809288507227ddf5091381bd52a"],["/images/dl/48.png","a7f47763bca3b758e0377e4eb3697014"],["/images/dl/49.png","c8b694fc337ffd2822a82ea078a7fd94"],["/images/dl/5.png","ccc04cbc94995b21ae682ed9a9b4b0e4"],["/images/dl/50.png","0b74840b70c5362adbb1ae4d831daa40"],["/images/dl/51.png","add48b535c67dd7ba2d89c2b47d62e4d"],["/images/dl/52.png","ebd47a5ef3557d1857288ea842ed846f"],["/images/dl/53.png","6543b1ebd8f9e1eee6867ac98c377656"],["/images/dl/54.png","e42c09127df542958d6790eb239e2703"],["/images/dl/55.png","0f3bb7248a6e465c0f04c44fd7102458"],["/images/dl/56.png","15ec6905fa793e164de60e8dfd016e50"],["/images/dl/57.png","3a1615a4dae148791518372dfca9684f"],["/images/dl/58.png","5babc414eadaabf475ea5310705d42da"],["/images/dl/59.png","de74751a92a1fa9d22241269545fa578"],["/images/dl/6.png","0c7b467b8c118601b3e4b72e8ee00009"],["/images/dl/60.png","92221b8c62fce1c98467d355237d2986"],["/images/dl/61.png","b77632cd591a92dbfd4cb3a2f3eb707e"],["/images/dl/62.png","f5eca88a4d1b4ff99462d6004037c0b1"],["/images/dl/63.png","2d596bc4776088dc2d7f12035cf9625b"],["/images/dl/64.png","0be91314f6ce792e335eea451fb432ac"],["/images/dl/65.png","cfb0302ad749c7ee33c3a4c0fd048cb3"],["/images/dl/66.png","99a4396798a3703de705d5ef583cc53c"],["/images/dl/67.png","c814ee1f17b1b6e023a2959ecea105f4"],["/images/dl/68.png","32e5647c3a3262d28abd2c801a2499b4"],["/images/dl/69.gif","6428cf505ac1e9e1cf462e1ec8fe9a68"],["/images/dl/7.png","1f98a655f5df7b72a03645ee48043dc3"],["/images/dl/70.gif","cb80c7a8c655585f38038c4876381722"],["/images/dl/71.png","26d9cc4df1edfe2c7ce2b3bec07fcf93"],["/images/dl/72.png","de5ad70ced9e378b87cc5cc3e5068ade"],["/images/dl/73.png","8704e85c81f02d3148f5013f928e622b"],["/images/dl/74.png","40148a094025824911637637e6f0a71b"],["/images/dl/75.gif","2cdd2ec54569879ca045e0ed090f34a5"],["/images/dl/76.gif","395aa82f1e59cf80e8e17a9209bc22f2"],["/images/dl/77.gif","510c9a35e6f332d4d042e3154a59355c"],["/images/dl/78.gif","8a63c07ac20ee5e5097b8a9e9327012a"],["/images/dl/79.gif","9e9a49afd76a80bda8a6362e6a32dc1c"],["/images/dl/8.png","58c486bb84f43765a4b1c0170b17ed3c"],["/images/dl/80.gif","4a87f84b588768c5b5fddb2b000b92d5"],["/images/dl/81.png","c6557ae392175f3284cff96ede632ca3"],["/images/dl/82.png","8c6e03a4ce27b1546860f1a4994ded2f"],["/images/dl/83.png","3230fe6ea57bf3bb56197b60c744873b"],["/images/dl/84.png","b32db2843c3da7a1434e07286a767202"],["/images/dl/85.png","aaaeb673c62631407bc0417bf30a2209"],["/images/dl/86.png","cc201aa344c97773b92d4a24a3eb4756"],["/images/dl/87.png","153a890f1412bea4542d568d2f071fc7"],["/images/dl/88.png","effc36ef946164373a8bf243961d88a1"],["/images/dl/89.png","2686299a083de7d34f0f4215884ca4a7"],["/images/dl/9.png","07509d765897a7512d5beb635d3c4179"],["/images/dl/90.png","a56a0f6071eb3fcdb76968b4a32d5e5c"],["/images/dl/91.png","6ee325d3906f10f2793fbb01e489930a"],["/images/dl/92.png","0c8d438c12bce0260b16cf270db56f0b"],["/images/dl/93.png","6c92ffc515ccbe08a5abd79a3cb80b9c"],["/images/dl/94.png","808edd0a07d8cbabf336dd9dca8d4a26"],["/images/dl/95.png","45f3b7701551fa7df5f9be047c75500a"],["/images/dl/96.png","9a3c4effe6fba0aae2fb580155c4c55d"],["/images/dl/97.png","bd2706173398f50c2831c4e192b9f352"],["/images/dl/98.png","37d39a650706f2df9b766fe478e52587"],["/images/dl/99.png","058d5dbc14ded7c21715436648e21181"],["/images/docker/1.png","052bebd4e60c59be51857684e5e6fc0c"],["/images/docker/2.png","28f04eea1e73e7c0e0c466756c9c2c62"],["/images/docker/3.png","82a26c321e81043540818baaea77eb38"],["/images/docker/4.png","367c99cdceb0f81b378c075904c88644"],["/images/docker/5.png","e414ffe973288941a51e9cde7d92bb71"],["/images/docker/6.png","d559cb65466a900edb0d7983917ec37c"],["/images/docker/7.png","ac71dea1600d19598053c5607e7975a1"],["/images/docker/8.png","d9b777921984636623864ec2b250e298"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/math/1.png","be08ac320a3fafd4b6cb9a2a820a3b42"],["/images/math/2.png","82c7788477186d13876fa2783fb31305"],["/images/math/3.png","c4dbdce9ea65b388f307e4c2b6701c7a"],["/images/ml/1.png","0614e4691064abbff74cb69212e2a466"],["/images/ml/10.png","ee1e7358cde8b8137ce684b0c4365e04"],["/images/ml/11.png","c86479f988d4dc6b87074724f42e35f7"],["/images/ml/12.png","35ff221fa6ca14c635bfef76cc5a2991"],["/images/ml/13.png","f1bc25e32ad10b0d7b0c9ede788a5b88"],["/images/ml/14.png","2f592eda3505117752f6719aba65edac"],["/images/ml/15.png","0c8117df94fa4c145e2c2943e2247ec0"],["/images/ml/16.png","5705759f62883d83028290a0933e5c86"],["/images/ml/17.png","eed841d914da17d258adc9852c83b745"],["/images/ml/18.png","7863315ccc29fb1c24e27d2a5fcd477c"],["/images/ml/19.png","e3307673fa4d5889a52012dff9c03ceb"],["/images/ml/2.png","9d72b6ab1efe7d92a0f75e376681e549"],["/images/ml/20.png","73daa252e5311ade27160a65cc61c9a7"],["/images/ml/21.png","2749400036f8bba7beaa0ab3224f5389"],["/images/ml/22.png","aadd1c4aa269c129958a013d84e42492"],["/images/ml/23.png","80937bc77f36a5d6310ddbde34c091ed"],["/images/ml/24.png","810369b827c1d376ae5a0e6bbf0c2761"],["/images/ml/25.png","8ba5410eb67aa3cb734596ab0b7abbf3"],["/images/ml/26.png","e702d97bf87a16ac98d9b96357a50224"],["/images/ml/27.png","eb5810d90beb005e0921b5bdce4278cb"],["/images/ml/28.png","daf6146665cd93ff43b7c0537d26931b"],["/images/ml/29.png","faf61ee7aef34289909db13712731ef5"],["/images/ml/3.png","05763899f89a3aec00df11ea2a7a976c"],["/images/ml/30.png","521f8749d93cc41c604307333b8ecb20"],["/images/ml/31.png","61e322d57e7a6468cbca48304ae94cd4"],["/images/ml/32.png","6ec323b582e8562c93c1d6640f4d807e"],["/images/ml/33.png","0d1cdd5ecbf216003f28746db2b33b6d"],["/images/ml/34.png","64b7033aec57515e301161d85f8e4e30"],["/images/ml/35.png","edf088702e0177920a94b3508bec7ec7"],["/images/ml/36.png","fb5a9ddea3a45786bdf11c415e147896"],["/images/ml/37.png","60914873dae6567b8e68ec45ec6b59dd"],["/images/ml/38.png","2b8b5cff6aa6292c46ac594c30027790"],["/images/ml/39.png","1d3d3d21aac91a1e4a2b16c45345d3b7"],["/images/ml/4.png","d1d10f45e987ea4af1c4b7086c5f745b"],["/images/ml/40.png","772e151cc0187377b8640b6769125b96"],["/images/ml/41.png","481ba1d4954007c7eb74aa89f44cc220"],["/images/ml/42.png","3b812196cfcc9fd92a8eae2eba443cfb"],["/images/ml/43.png","cd5f999f7915a1797b3a4c1bd1a63484"],["/images/ml/44.png","37eb471cb2476713b4491a3d747e8f5c"],["/images/ml/45.png","df3980f9a53928768f0949eab0dda0f6"],["/images/ml/46.png","d9a4bc126242de84d18bf1a616961bc3"],["/images/ml/47.png","ecc436ba7ba75ec5c422ecdd700219d6"],["/images/ml/48.png","a154e7896b59f7c4feb7fd9869350494"],["/images/ml/49.png","e9cc736869a7161cfefc7e1961c2d9aa"],["/images/ml/5.png","884a734410b3627a14981c481b27c583"],["/images/ml/50.png","6900e08fcd02c9a9bcac17b1c7d68fad"],["/images/ml/51.png","1ecd25e8788aac72f2f6d2440ebdccde"],["/images/ml/52.png","e8a96085b9487570772875b5f40c5a64"],["/images/ml/53.png","6ed613d5f1a4465a670ee7557dd29575"],["/images/ml/54.png","4fba1f8adf3b0bac8f6cd911016e97d9"],["/images/ml/55.png","f772762d3dc7b6927ca73e276bacd35c"],["/images/ml/56.png","20827caf527ef20652b21adb8e143e96"],["/images/ml/57.png","3bfb68f2234dfdb64aa5286d49a04f79"],["/images/ml/58.png","291a3424c7bff0afa585bfa7f09d67de"],["/images/ml/6.png","bbd2772718a23a1102b2201f78413d6a"],["/images/ml/7.png","c753cbfb65ed9638e82e5d0140028f82"],["/images/ml/8.png","0432f07c0cec1708d787798042156c21"],["/images/ml/9.png","2870280e8d3cedaee23818114a3cc02e"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/py/1.png","15b7ebe86935d45e017776bdd2e2e2d7"],["/images/py/10.png","30a401b3d7e75a8e237f0b805f583e4b"],["/images/py/11.png","59051625b36f69ecb18a6174a04b4368"],["/images/py/12.png","0738f0be3b1b72d1f66f6ec218d76675"],["/images/py/13.png","aabc1941943d19cd9c26b4c97b991415"],["/images/py/14.png","f09e867b7e33ab28bb509208efdd4928"],["/images/py/15.png","af9b8898e56514fa1c060e35d316066c"],["/images/py/16.png","ba5ec4e869bae45070e08f64788ecfbe"],["/images/py/17.png","82fe7ec533b75c5b9ed5e677f57eeaa9"],["/images/py/18.png","f651173cc0a9b4a8dcbdd495f73f882c"],["/images/py/19.png","db20315678cbcad8dd4f0d4bd72cb991"],["/images/py/2.png","589c0581b9b1da7112120f6a1f320fc3"],["/images/py/20.png","7670ef568945df192b81f0dc0f3d3f7f"],["/images/py/21.png","dffafdf930d818b664746a166cbb97bd"],["/images/py/22.png","e42a0fc9bec94fcd5207dd39ee46dc5f"],["/images/py/23.png","729ce256675ed1b5be435ba49e07d5fe"],["/images/py/24.png","3178aad732fb3a59fd6b9f0522d0c84e"],["/images/py/25.png","23dee90b7ba96de076a6bfbc7e9f9fc8"],["/images/py/26.png","5f27264c4cc5f1066086d4a6dafe68df"],["/images/py/27.png","2a30cc59399a637db839057f86d8c331"],["/images/py/28.png","f8ddf9a9bdfb76086c414c8561a7c756"],["/images/py/29.png","e6a08a36098bc987d119f57a9b273829"],["/images/py/3.png","46d73ca2a738a321e189608497c35b78"],["/images/py/30.png","aaad070ba988fc223be70b8be8d1a694"],["/images/py/31.png","2190bbadd784c89153ca10aacaa212d7"],["/images/py/32.png","4ebc4497b4ffff11e8ed5bb12a592cee"],["/images/py/33.png","a912118468c632d485625969bbe13b28"],["/images/py/34.png","8647e22d53f209413add44e80c22aaf0"],["/images/py/35.png","f98376dfc1b6b6885ce35e0e29831c12"],["/images/py/36.png","63b48f45c30f1f4274506b01ccd2aaae"],["/images/py/37.png","66a568168cb34596f4d2b61f701f0c41"],["/images/py/38.png","4ec3117c6e4660417f25420015680ef0"],["/images/py/39.png","1d31399d3f0ef916447931f88ce3398d"],["/images/py/4.png","beabd345ad64e22ed6750c13f7d35e90"],["/images/py/40.png","7b19dffc350d03bcf0de1c9477e93105"],["/images/py/41.png","593c6b113bc67e90339d819616bd1277"],["/images/py/42.png","20c75a35c4a4b07faf07daf9475ce1ff"],["/images/py/43.png","6c673a7ef4a3fc5ea9169a3fbd61f80e"],["/images/py/44.png","2334590711560011876de8c746b18604"],["/images/py/45.png","1441f705d69261450da8c5233ab02d0f"],["/images/py/46.png","616c6ab2d9c8eb007952017c7452d6d7"],["/images/py/47.png","004175268fd9029f7d09d1503670370f"],["/images/py/48.png","489330b4f78c3796b20042589808f8bd"],["/images/py/49.png","58a224ddfb5f57a12f48f3b4e3cbd0d0"],["/images/py/5.png","771c59a4e854122793a682f106fa08e5"],["/images/py/50.png","bfa901b645deced8dd1f9a8c26778f25"],["/images/py/51.png","2ffadace686f78c1414244d872d398fc"],["/images/py/52.png","2e3ec0d057d100e4e8ea5f0212e5c998"],["/images/py/53.png","17bb9979be17d13b90357c57139da462"],["/images/py/54.png","c23d69845f72a73fa3e2f1fb84771c56"],["/images/py/55.png","8535760aff99ceb4b556f7b97796d94c"],["/images/py/56.png","59ec9ba92d7ccd2c716228a1a8455ccb"],["/images/py/57.png","15bc87041ac4b1c7b3525b314fb7ef66"],["/images/py/58.png","5f94f3e9e9c6e104566bbb1b600e1fac"],["/images/py/59.png","bea377ca62ca75ab5d71c430b0355931"],["/images/py/6.png","833af6f79eead78a0888a42a24a7c35b"],["/images/py/60.png","ea730c5befdab80ca63dbcce82b3e4b9"],["/images/py/61.png","a6562d29f44817c17e7be41238aaad7b"],["/images/py/62.png","7d457435369276895070e3dd61c9462a"],["/images/py/63.png","91015ba12e25b0f895687581ce6bcb25"],["/images/py/64.png","20a15a250b09f9e4604ab3550b9700c3"],["/images/py/65.png","fe52bf0b2570638b2d22d72a27152e1c"],["/images/py/66.png","d3025a5e94f7bc525362d1f2e7745078"],["/images/py/67.png","2f7ca0e327c55df4f003210905190792"],["/images/py/68.png","6f7279dbb187720b89c66250c986e965"],["/images/py/69.png","a44c673d20cbcf45db156036bd983034"],["/images/py/7.png","d947a703f79658536cb2750914637ffa"],["/images/py/70.png","8a87dfa24f54a8547ef6826d3b6289f4"],["/images/py/8.png","20b867d8137281e9c3a40b802df75680"],["/images/py/9.png","e4639c570e7f7a04e90439456ad297c5"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/reptile/1.png","6d0aa92af42a4647977a03707bade702"],["/images/reptile/10.png","79f309da23b6b5b8b9effd25cc20abd9"],["/images/reptile/11.png","e60854e61ed69c6cccb12196fd947705"],["/images/reptile/12.png","ae4ac9f4065966955a3f31fa4b2292f3"],["/images/reptile/2.jpg","f722e57e21e3d76ebedb6667bfd44aed"],["/images/reptile/3.png","b4161135bc5a889337f36a3a0c20dc6f"],["/images/reptile/4.png","73b18e616e9134ffc1aaeb4ed1c29dfb"],["/images/reptile/5.png","318877d0e3a7337773fc301d6c5118eb"],["/images/reptile/6.png","f39ae0da0e1d343ec162f5db6ade59fc"],["/images/reptile/7.png","26491b8984ce6b22c76ebb6372f912f0"],["/images/reptile/8.png","15bdc5c257f7c109f184f9872c57b2d5"],["/images/reptile/9.png","92e8ffd5026d530e630b6ba90c23236f"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/tools/1.jpg","5bf773e6fdaf0c6573c4578ea232dc21"],["/images/wechatpay.jpg","07f0995337e2a1c8d2357e5659ec120b"],["/index.html","9248ac1de7f926ea7712de015c711150"],["/js/src/affix.js","228495310dba001f1e4a0edfd548a585"],["/js/src/algolia-search.js","ca87b4dcd7ab134b34eae4fe0f001144"],["/js/src/bootstrap.js","0e091600ec9f3930ca78e6316b08cbb4"],["/js/src/exturl.js","27957a34a3e96c8000ed6d31bb212af9"],["/js/src/hook-duoshuo.js","85db786139f4d7a2acf6c5013f01d3aa"],["/js/src/instantclick.min.js","24f07886128d3f5e3214335ee646b92b"],["/js/src/js.cookie.js","dd92f5457a26f80f102e01956e62fea1"],["/js/src/motion.js","319175c419c634c7987881785ab614d3"],["/js/src/post-details.js","fcf3c068e852df77df6a797a2a3a1ec4"],["/js/src/schemes/pisces.js","3b8af0c0551548d81824c5cc2a00afc7"],["/js/src/scroll-cookie.js","d7fb3f664cb4358258045168d11903d6"],["/js/src/scrollspy.js","8f8aefff7d5a653d8786138316c89f9a"],["/js/src/utils.js","4606b3f58943b90286dae9bee59a75db"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","b35b87dac5c94a3ab6f8db877d8eaf1b"],["/lib/Han/dist/han.js","8e210ab99a0687e8e8bb364ba672aeb1"],["/lib/Han/dist/han.min.css","e3dbd92fcdce720fd4f7dbba5a2fac46"],["/lib/Han/dist/han.min.js","beaada06b04e678793e764ed1a108644"],["/lib/algolia-instant-search/instantsearch.min.css","1206582bd09f4d4c44ca652e5cf029c5"],["/lib/algolia-instant-search/instantsearch.min.js","1ba58a9bdc7ce4b4b2d69c61645745fa"],["/lib/canvas-nest/canvas-nest.min.js","37af607918583fe9ad01ff23cbea1c7c"],["/lib/canvas-ribbon/canvas-ribbon.js","ce074e6d7af107b2c9c831c074012570"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","da40dd6ce17b01fecc600cff8f080f24"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","04dfa3265d3d450592ee7b627d7c91e1"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a0a2d132bb567809af0eb21c29bede4b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1966ff5993a4b2359c303ede646e26f5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a5ab1959411b3bb056472d053a83ea9b"],["/lib/fancybox/source/jquery.fancybox.css","49bb65abb2729ab07fb60a7805935376"],["/lib/fancybox/source/jquery.fancybox.js","c33fae042a5967fb48cbc3d1e8264e76"],["/lib/fancybox/source/jquery.fancybox.pack.js","e1b928354c6c1c6d74832198aee8da03"],["/lib/fastclick/README.html","b51c8726bc706ae54b150293b8d2a8ee"],["/lib/fastclick/lib/fastclick.js","119df8736c506f045ee6f448079a3129"],["/lib/fastclick/lib/fastclick.min.js","899a7c8dab1bd749d37c1d5fbb5756e3"],["/lib/font-awesome/css/font-awesome.css","3b456cfbcd49ea790c24610ce49ac927"],["/lib/font-awesome/css/font-awesome.min.css","5f47374d9b34e3ba0996c0e3a6a54a4c"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","e61975838dbd8cfa6379e7b5988a0e9f"],["/lib/jquery_lazyload/CONTRIBUTING.html","9c42e556ddf7eb0bb87688b063826473"],["/lib/jquery_lazyload/README.html","d8b66466d60b1d1f41dd2ea46f1621dc"],["/lib/jquery_lazyload/jquery.lazyload.js","d863e94fbc13fe131cfed0d060a967a5"],["/lib/jquery_lazyload/jquery.scrollstop.js","898f3050e576a3c1880a754b6e883144"],["/lib/needsharebutton/font-embedded.css","adf4c06a58fd44684854e2d73f7f4f94"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","cbb5477eea2c62db2287825b2f5ad8c2"],["/lib/pace/pace-theme-barber-shop.min.css","afdd69b12b00cb6a5c7f710fd903596b"],["/lib/pace/pace-theme-big-counter.min.css","9f285ccd9dc426249db5ffc0f28c613c"],["/lib/pace/pace-theme-bounce.min.css","80fa907d62e9f1fc987eea6a36c8c518"],["/lib/pace/pace-theme-center-atom.min.css","b1ffff4c604f04a78e4dcc3e440a4439"],["/lib/pace/pace-theme-center-circle.min.css","361ae02e48273062b303612a4d39a6ef"],["/lib/pace/pace-theme-center-radar.min.css","db67283cdf61241a65f378db33a508b3"],["/lib/pace/pace-theme-center-simple.min.css","0b19b176a6f837c53bc46c1866ee901d"],["/lib/pace/pace-theme-corner-indicator.min.css","5ba25428677395421a02f1ea272ff3dc"],["/lib/pace/pace-theme-fill-left.min.css","be27f32c9caaacba16f3382ebfd538f9"],["/lib/pace/pace-theme-flash.min.css","0a5311d94d4f3e38886f64cc02a10331"],["/lib/pace/pace-theme-loading-bar.min.css","f9e6cd2383bdd58711b0bce674e9825b"],["/lib/pace/pace-theme-mac-osx.min.css","5e80fe795c71caafc08b22ad774f9965"],["/lib/pace/pace-theme-minimal.min.css","578e15e01377756c96653d197ec94d4b"],["/lib/pace/pace.min.js","7629e697d384c4f887d012608b8773d1"],["/lib/three/canvas_lines.min.js","33cd26b8e80515a32a4070b20c5e5bfe"],["/lib/three/canvas_sphere.min.js","bd72f5d8c30ae1684017e021e7db3502"],["/lib/three/three-waves.min.js","233cd0d1f6e13ac7d7facb43c10bdec1"],["/lib/three/three.min.js","adc0cde24ad2c3c1756c96b9604d46dd"],["/lib/ua-parser-js/dist/ua-parser.min.js","72f9a87c3d964617e4e64f0a70e696f5"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5f450d259bee0f4883a94a8c1e080a71"],["/lib/velocity/velocity.js","429e36ee3eda2d70e81a6f8d719c0c60"],["/lib/velocity/velocity.min.js","e3dc6a3b24adbf9c321aef5813b739cb"],["/lib/velocity/velocity.ui.js","5b39d8905c126c72ed2167907dd3e0ed"],["/lib/velocity/velocity.ui.min.js","7dec4aaac707439e5d780557ea5e067a"],["/page/10/index.html","0bdc92293d4086d0d78149f7cb6221e3"],["/page/11/index.html","04b88eeda81a669655ccb77e4e74502c"],["/page/2/index.html","b3a80ea34e8e677f7de3e173c918a79d"],["/page/3/index.html","7d45934c680d3696ff8d64484319a47f"],["/page/4/index.html","cdee224d1753229447d7b55f5f79ebd0"],["/page/5/index.html","335be58a390bbd7f48de0b9a5c6ba93c"],["/page/6/index.html","ca7e9863574f971df2ccb3f105547339"],["/page/7/index.html","c092df770280ec415e86cc349bdb59b3"],["/page/8/index.html","7b923bdb755fecbe1916008827198941"],["/page/9/index.html","22f6c7f14bae3cfb7f1eac3501e1f92a"],["/sw-register.js","045a49a8124cd339bb3e91234da7e2f6"],["/tags/CNN/index.html","d9caec19c48234da4c5176616e4c3d80"],["/tags/DNN/index.html","4e9aab6c6bd630728cb94eb018860aef"],["/tags/DeepLearning/index.html","5e1f3feff5a553bac82628f11469b6ee"],["/tags/DeepLearning/page/2/index.html","01c4dd796b4eefd3190a28a7d9a44ace"],["/tags/DeepLearning/page/3/index.html","bd7b43e29486fca307a1ae88fe0c86f7"],["/tags/DeepLearning/page/4/index.html","068c81072d8f22dc51c56a950e8d89b5"],["/tags/DeepLearning/page/5/index.html","6c65116335e321b05c1f77a3e234bdd4"],["/tags/EM/index.html","8b3dd530811b2532ed504d8480aa20d1"],["/tags/GAN/index.html","e5db6318768299dffbfe700db61c50ca"],["/tags/GIT运用/index.html","2e401334b5f4b0286beb6583a975659a"],["/tags/Keras/index.html","e4755090a7bd38fa989062092779d398"],["/tags/MachineLearning/index.html","7de732b51e57db87f739e701275549d8"],["/tags/Python/index.html","af4e2d1c19ce93a806a3a134091d5a9d"],["/tags/Python/page/2/index.html","4feaaa6dfc39fbbf3f361efa4aa308af"],["/tags/Python基础/index.html","559eb1bd244f39085294965d6f50a327"],["/tags/RNN/index.html","05e7ae5151a630b57d4463b1562d80b4"],["/tags/TensorFlow/index.html","177329058c4dbe7460ec9f56436443f2"],["/tags/TensorFlow/page/2/index.html","6492f2ab7dde6856f3c7da4053c855a7"],["/tags/TensorFlow/page/3/index.html","22e1a6229db99aa2148db436f99c5b7f"],["/tags/anaconda/index.html","2976c25f9792fa157e1361327a0fce4b"],["/tags/docker/index.html","486dd68716101e37cf671a65809bf268"],["/tags/git/index.html","b642d594bd9f198c2724a4055ca54602"],["/tags/index.html","587410b575a4789a2d08ada754e4902f"],["/tags/ios/index.html","96de84c0fe46ea1bbada64895866f170"],["/tags/linux/index.html","138c60d57bfca590a67066a6f0ab1b80"],["/tags/markdown/index.html","d6b18a0cc8c8b542cdc6d122cb0d7653"],["/tags/network/index.html","856ffaad8440acf27f080fb2e632db02"],["/tags/opencv/index.html","4463923df5c40e5655aaab468d99a088"],["/tags/pip/index.html","22f8ea0ff577a9aa9c1cd8fb43e64de6"],["/tags/pycharm/index.html","53eab4943b05a6f31e3aedb6508bd85a"],["/tags/svm/index.html","f6bb234c8e5b77f62a2a3d28da509fe7"],["/tags/ubuntu/index.html","6e06a609b6bdb56311dea5293d27a1aa"],["/tags/优化算法/index.html","d1e442e84a8dc677549fcfaa041e70e4"],["/tags/决策树/index.html","d70ed2631e0fa9cd34356c63c216d676"],["/tags/反向传播/index.html","87be3a42a5606eb8e3d71f8678e3a1d7"],["/tags/声卡/index.html","568e7b407fa914c217f0ad847597a183"],["/tags/安装/index.html","2b7f578dbf6aa308bace73f5b995715e"],["/tags/开发工具/index.html","3032c138dc200b330b5819dabfadd3dc"],["/tags/开机/index.html","890cdb571fec45771e1b0a6a5fc9fd29"],["/tags/朴素贝叶斯/index.html","88b0c7139d3366e47d43620ccd8e82d8"],["/tags/核函数/index.html","7351d03494b746f52443db60b1c91a19"],["/tags/梯度下降/index.html","2c08eef621359c45f4b95a9ca5e68421"],["/tags/神经网络/index.html","e59166fc97e826aa5274c2c5af3cb178"],["/tags/线性回归/index.html","3e78481e404cdbe3a72dac96e9950827"],["/tags/聚类/index.html","511ada2d9e44d6d133b80450f4c88b79"],["/tags/自动化/index.html","23326f5e24e54f32ca649bf4a8630a6c"],["/tags/贝叶斯网络/index.html","e5e1b85e0e18eff9513b6edb2d2f6c47"],["/tags/软间隔和正则化/index.html","b0307b37f7d5f982a4b77b628e02862f"],["/tags/逻辑回归/index.html","6bb117731195253dcd11d23d64a3c059"],["/tags/随机森林/index.html","63609d307a5f4b67adf5cf3e720bd614"]];
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
