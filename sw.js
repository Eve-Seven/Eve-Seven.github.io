/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/08/25/2018-07-20-raspberry-Internet/index.html","74fe5d389f247f4cd8941ea6978585cf"],["/2015/08/25/2018-07-20-raspberry-on/index.html","38017a534560d08e53d81b680606ebfe"],["/2015/08/25/2018-07-20-raspberry-usb/index.html","d8628d85f96540f17071a2cf88ebd008"],["/2016/07/13/2016-07-13-GitTutorial/index.html","fe158eb0e8033ee2e0e707c5b113ecf6"],["/2016/08/04/2016-08-04-PythonTestAutomationiOS/index.html","92c84e599ec65f0c09cdc5f180fb0403"],["/2016/11/20/2016-11-20-markdownTool/index.html","60f4ea097d850d466a762616e90f0e4c"],["/2016/11/20/2016-11-20-neural_networks_using_TensorFlow/index.html","6514e25f0c57a7481873b18c1d2032c9"],["/2018/07/05/2016-07-05-MachineLearning_introduce/index.html","be480dfe91fb1945a23292b087332426"],["/2018/07/21/2018-07-21-ml-linearRegressionL1L2/index.html","fdd7d71df5cb23dede08c273f6fe8cbe"],["/2018/07/23/2018-07-23-ml-DecisionTree/index.html","1c4a01eda2ca3488abf5c30712eff171"],["/2018/07/23/2018-07-23-ml-logisticRegression/index.html","60aca3d1c430cb908ed744dc79e99e03"],["/2018/07/24/2018-07-24-arithmetic-gradientDescent/index.html","d1a7d4efb1b5be65710349935d89b49d"],["/2018/07/25/2018-07-25-ml-svm/index.html","a17b368834d91a33c88b1bd123d4a2c5"],["/2018/07/26/2018-07-26-ml-svm-L1/index.html","b89600781f08272d3ce8040cbcb7eb87"],["/2018/07/26/2018-07-26-ml-svm-kernel/index.html","bfffdb5d9cbcc0a3cedc2af449862761"],["/2018/07/30/2018-07-29-ml-clustering/index.html","d2b9b8c0497a1558ad7d34805cdcd86e"],["/2018/07/31/2018-07-31-ml-em/index.html","6af5721debbb9a70b8045284ac1714b1"],["/2018/08/01/2018-08-01-ml-NB/index.html","f751aafcfbaa2ebbed33ec59a4942196"],["/2018/08/02/2018-08-02-ml-NB-network/index.html","ad361f6a1c40fd230b3ef8dd46367914"],["/2018/08/08/2018-08-08-DL-introduction/index.html","b6d1f1ce3f78897682c4200f1cba8c40"],["/2018/08/09/2018-08-09-TensorFlow-windows/index.html","e6a6dde7faf1500f432c8214b5edb6fe"],["/2018/08/10/2018-08-09-TensorFlow-ubuntu/index.html","e83be97c9b35a985d96e828323b62291"],["/2018/08/11/2018-08-11-TensorFlow-Virtualenv/index.html","0cac4b6d09a68338204905643d0a9e46"],["/2018/08/13/2018-08-13-TensorFlow-course/index.html","f8bd43370d08bc36d95f7232409861c2"],["/2018/08/14/2018-08-14-DL-method/index.html","f3a635aa3d1c2134fbf778d20aa84981"],["/2018/08/15/2018-08-15-DL-back-propagation-python/index.html","85dd24a46b7e313729a248504b8cd9e7"],["/2018/08/15/2018-08-15-DL-back-propagation/index.html","4c9f386d9c4e27b216d4e2f574e90854"],["/2018/08/16/2018-08-16-DL-DNN-python/index.html","9c0d8b1d555f7aec651bac39d7a6ae17"],["/2018/08/21/2018-08-21-DL-CNN/index.html","dc65af69802b6f654a6eb853dd0e05c4"],["/2018/08/22/2018-08-22-CNN-back-propagation/index.html","5dc4c593010b2c9f84e830c22dd86e0c"],["/2018/08/23/2018-08-23-DL-CNN-python/index.html","9309705a443fdc1a67902700ff80c468"],["/2018/08/24/2018-08-24-DL-CNN-LeNet/index.html","c42c399b23ba1a8ef214219ff70073b7"],["/2018/08/25/2018-08-25-DL-CNN-AlexNet/index.html","790f07f5623813c343ee219e1b81e496"],["/2018/08/27/2018-08-27-DL-RNN/index.html","45c10b98558e7a02c319d05835f8d0de"],["/2018/08/27/2018-08-27-TensorFlow-keras/index.html","8dea7db1e9761cbcdad1c7256625e1ef"],["/2018/08/27/2018-08-27-TensorFlow-layer/index.html","1784d3e1a84ece173ab6826228d08b68"],["/2018/08/27/2018-08-27-TensorFlow-native/index.html","946a588b56a93f1dd3f575f951ad6d3f"],["/2018/08/27/2018-08-27-TensorFlow-slim/index.html","031fa6cd33be7e3aa223c377bc352d4f"],["/2018/08/29/2018-08-29-DL-RNN-BPTT/index.html","2d7961e57d5f095fb156ec73e2b6988c"],["/2018/08/29/2018-08-29-DL-RNN-hand/index.html","c7768be4f61f19c17d1428e5f5f8378d"],["/2018/08/30/2018-08-30-DL-RNN-LSTM/index.html","7c3a4b23f3dca4fcd3e7bcc6761f0e91"],["/2018/08/31/2018-08-31-TensorFlow-RNN/index.html","93fcc5102e4d63627deb6a27c537faf4"],["/2018/09/01/2018-09-01-DL-GAN/index.html","c6b0b81e0fc8d986b970bc77f6e3bd99"],["/2018/09/03/2018-09-03-TensorFlow-GAN/index.html","8dea57d7c82549329344a555445e3a0e"],["/2018/09/04/2018-09-04-DL-DCGAN/index.html","889625205843bad059691ae86800b476"],["/2018/09/04/2018-09-04-TensorFlow-DCGAN/index.html","3605c5b7e7ce3d170ff5d19736788ab9"],["/2018/09/04/2018-09-04-TensorFlow-save-restore/index.html","fc0335393d4d5512ccf6b24fad3e4c78"],["/2018/09/07/2018-09-07-TensorFlow-cifar-network/index.html","4474b4b1d4a6cc35a4135c804f90bbf3"],["/2018/09/07/2018-09-07-TensorFlow-cifar-train/index.html","f03ea3b93bbd5b85fd65b98141d801ca"],["/2018/09/07/2018-09-07-TensorFlow-cifar/index.html","8b4628ce985509b91e1f02859206a022"],["/2018/09/07/2018-09-07-TensorFlow-visualization/index.html","4c128e32e32bdbe59b5e20e63156c221"],["/2018/09/07/2018-09-07-keras-cifar/index.html","200e8b751e872f4db376141b0c3c2bf2"],["/2018/09/15/2018-09-15-Pytorch-AlexNet/index.html","9462a03cbc479538f6e807206be4c675"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-test/index.html","a63b9ecc8792c6d94ce96cf465fb8f48"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-train/index.html","3f7bcd92fc27da3ef7e5c584a0e64e28"],["/2018/09/15/2018-09-15-Pytorch-DenseNet/index.html","a1d54f691b650058c442fe18895623d4"],["/2018/09/15/2018-09-15-Pytorch-GoogleNet/index.html","49972f18001b339b6c5e7cac1464b3fc"],["/2018/09/15/2018-09-15-Pytorch-LeNet/index.html","3475e21ddc324e93a5eeb88868f45b7b"],["/2018/09/15/2018-09-15-Pytorch-ResNet/index.html","67db944c578116e7b1f09c0b0e5eb00e"],["/2018/09/15/2018-09-15-Pytorch-ResNextNet/index.html","755707a400f667d3152f34501130804d"],["/2018/09/15/2018-09-15-Pytorch-VGGNet/index.html","d92d18c79b1327d48c10a862ef5b2629"],["/2018/09/15/2018-09-15-Pytorch-cifar10-data/index.html","5e0225c36056b224837a17c92cf0d76f"],["/2018/10/09/2018-10-09-pip/index.html","988ad1b88589a0d8d0726a56f2f4e93c"],["/2018/10/09/2018-10-09-tensorflow-question/index.html","b73c26b4e87db6c07b135017d97e2ce0"],["/2018/10/15/2018-10-15-source/index.html","ea32f44dc83470be3ef520d63c68d9b5"],["/2018/10/26/2018-10-26-openCV-geometry/index.html","a4ea0dabc81496341d6550f00c113d1d"],["/2018/10/26/2018-10-26-openCV-install/index.html","f7482220b6c7feda6de0526ba846cfbf"],["/2018/10/26/2018-10-26-openCV-special/index.html","366220efb60cee637ac30243455a35fe"],["/2018/10/27/2018-10-27-openCV-face/index.html","f68b11fed3ab39ce627dc4d2a6b46f75"],["/2018/10/27/2018-10-27-openCV-svm-hog/index.html","17421e7a705abada323e5d3af5127e2e"],["/2018/10/27/2018-10-27-openCV-svm/index.html","fe0a5e8831371ef214b8aa8f50dda9df"],["/2018/10/27/2018-10-27-openCV-video/index.html","d3c9c54e03a7f3ecae0ffd90eebc517e"],["/2018/10/27/2018-10-27-openCV-whitening/index.html","0173fee0b7c0a4cf6ce0e8b999ada2cd"],["/2018/10/29/2018-10-29-docker-TensorFlow-cpu/index.html","bff80cd393498856325a07e1fa50f088"],["/2018/10/29/2018-10-29-docker-install-win10/index.html","06345b06007292626d8f12c5f600f60b"],["/2018/10/29/2018-10-29-docker-install/index.html","ec0a90a85d34b2459c69a6c5287e4be1"],["/2018/10/29/2018-10-29-docker-source/index.html","baf5860c4a9a70b8259e18cdbc0391f0"],["/2018/10/29/2018-10-29-docker-speed/index.html","5168134fbd2f19a7027369e22e247e00"],["/2018/10/29/2018-10-29-docker-vessel/index.html","f634475b954cd8a52ab8dcabbfda94f7"],["/2018/11/08/2018-11-8-linux-vim/index.html","f5cbbfce9b1039274d1d84381687b5b3"],["/2018/11/08/2018-11-8-linux/index.html","ca29d46691444ae3f175ca8dbb44f068"],["/2018/11/09/2018-11-9-anaconda-ubuntu/index.html","9b72d5c4c8940bc5e17f62aed570af23"],["/2018/11/09/2018-11-9-anaconda-windows/index.html","1a833ab6682ac7be5d6d9561bd2c7ad5"],["/2018/11/19/2018-11-19-git/index.html","8aadbb7a76f996cd033a2ad82c6ae78b"],["/2018/11/21/2018-11-21-python-date/index.html","a892c4eece5c2ef6cb4a807ec1edd64d"],["/2018/11/21/2018-11-21-python-encryption/index.html","eb12ed59bf3969e0589b6ada2e58e8ba"],["/2018/11/21/2018-11-21-python-log/index.html","87cc557a0fd994fa564fda673ad7c9f1"],["/2018/11/21/2018-11-21-python-pillow/index.html","7fb3bfe44aec8c34196f42e225c762e9"],["/2018/11/21/2018-11-21-reptile-beautifulsoup4/index.html","09c27479a80034f74556bfcd9a538dd6"],["/2018/11/21/2018-11-21-reptile-http/index.html","578240412cf87b79ce58f33ce9452357"],["/2018/11/21/2018-11-21-reptile-request/index.html","efaddd0b032000f98621cbe20b83143e"],["/2018/11/21/2018-11-21-reptile-tcp-ip/index.html","57ea11a366bdc60d36a5b03fb6dcbc3b"],["/2018/11/21/2018-11-21-reptile-urllib/index.html","02ae15d33e512261c350455fb918c04b"],["/2018/11/21/2018-11-21-reptile-xml/index.html","03a12ba784a61cd39103249239246351"],["/2018/11/22/2016-06-02-Develop_Tool/index.html","fde92c414be4d3d0a322c94e9c9aa9be"],["/2018/11/22/2018-07-20-ml-linearRegression/index.html","253e37e797dff8176f502cfb6b45c0c4"],["/2018/11/22/2018-07-21-ml-linearRegression-python/index.html","f08d64c7a2dd8081f5b421ed0841ad50"],["/2018/12/01/2018-12-01-python-numerical-sequence/index.html","87a64502a7d39ac1fa217fd91e213b85"],["/2018/12/08/2018-12-8-python-sequence/index.html","59b31018e87af8a91801df3d98668665"],["/2018/12/09/2018-12-8-python-output/index.html","77e0972c2a8f137108bca239321b92e0"],["/2018/12/11/2018-12-11-python-dict-set/index.html","fcc62ccafccee5b96db45a7b8936dba9"],["/2018/12/12/2018-12-12-python-if-while/index.html","90bb5e40de224b7a5dd30556a41e3189"],["/2018/12/12/2018-12-13-python-main/index.html","66043f97eeee0da0c5646de7ada06d50"],["/about/index.html","aeea053d8a10ff06f821bb8cf7a39c6c"],["/archives/2015/08/index.html","9268a324c9a88f1e001bdf595973c1e5"],["/archives/2015/index.html","a204419da570affc81a61221a37dcf80"],["/archives/2016/07/index.html","039f25e2feed05e6e8c0df5083861108"],["/archives/2016/08/index.html","6b9e45053d03423fb01428f09d316855"],["/archives/2016/11/index.html","c80d57043f1a21aa8774f111ecd89318"],["/archives/2016/index.html","4030e0e11d1a244df4c1936cdae219fa"],["/archives/2018/07/index.html","b107ed7bffc81f216a91f661e8366a22"],["/archives/2018/08/index.html","9656f06a48636bc63f0417b330b56e88"],["/archives/2018/08/page/2/index.html","8bac8bd5ba9df4d74b92bc7419e5e602"],["/archives/2018/08/page/3/index.html","1d46ab32650d4d91af756fa1465f0279"],["/archives/2018/09/index.html","d045050f8eee59e463a04fa9fa4509e8"],["/archives/2018/09/page/2/index.html","6f8cdbca6b06d967842e9f0cf8181381"],["/archives/2018/10/index.html","06990070b79f940dd04653cdb993a4a0"],["/archives/2018/10/page/2/index.html","676637c6fd7be7bf2ec46b07e04be70d"],["/archives/2018/11/index.html","c75465006d2c8be3313f82f0e02b8013"],["/archives/2018/11/page/2/index.html","193496a866c70ed18f86ab2e7eefd70b"],["/archives/2018/12/index.html","703e2c104cb730e0e8c56203b6ce0c53"],["/archives/2018/index.html","27984ccd2722df269b3bb47c211d33e9"],["/archives/2018/page/10/index.html","bf0c227b93cfdaeecfe4a5ca72a5fedc"],["/archives/2018/page/2/index.html","c6b7144b230c1694ba08931fe9e28603"],["/archives/2018/page/3/index.html","d15198ef5eebe503f194209584670608"],["/archives/2018/page/4/index.html","87f23b0f17a7615f948837a76d2cdd24"],["/archives/2018/page/5/index.html","b9f2a2fc5d3e85841c530ef8e392dd15"],["/archives/2018/page/6/index.html","c5affd55e274000cbfbaf2c664159248"],["/archives/2018/page/7/index.html","b304ae363f972bc051fb951ed83ca0cf"],["/archives/2018/page/8/index.html","b0fe854145daf8e15707de6f2f9daa48"],["/archives/2018/page/9/index.html","996c71d6f5a62159e15ac02cd0633de5"],["/archives/index.html","c5ff0487aa96a05ba15c75e200b45689"],["/archives/page/10/index.html","8334a8305dadf26c1f5e4975108330f9"],["/archives/page/11/index.html","4cfa37425d9dc7bee7e613059653d61b"],["/archives/page/2/index.html","408830797017322777aceefcd32d545d"],["/archives/page/3/index.html","f72f2731df7866435a7dc0d36abd7b53"],["/archives/page/4/index.html","5717a555de4cc79c95ea8941e0f57571"],["/archives/page/5/index.html","3a176e41673eecc6f5fecc3669a13568"],["/archives/page/6/index.html","e31728103e6045ef89bdc1551c1e5c3a"],["/archives/page/7/index.html","450b5507f4b729c2e15fb62d5a622a02"],["/archives/page/8/index.html","d8dd3e1d6b17c083e25b1d1d035f0789"],["/archives/page/9/index.html","d4f9fdba909b9d79ded007e3b59e76a8"],["/categories/Docker/index.html","27d3eecb77960f0c2c3a55b304a2598d"],["/categories/LINUX/index.html","5b054b42654b1ac289408d10fc7aa1c6"],["/categories/Python/index.html","b214022abda6bdf0c9f9a418cfdb4418"],["/categories/Python/page/2/index.html","378c99c6777e42ea1742163d58607849"],["/categories/index.html","b962186aa05595bb4e69cbc3e248cbf0"],["/categories/pytorch/index.html","8d46690bc3572f231451f2b3575c84ce"],["/categories/tensorflow/index.html","928fd7a50acc8e5a4eaa18c8985dd11d"],["/categories/工具/index.html","4644947d395a672c8c74c78cab9f4112"],["/categories/开发工具/index.html","aa25212a5966363e3981c3d5d603aeb6"],["/categories/机器学习/index.html","54b5d4f11c2d15bc129d164b06eaa615"],["/categories/机器学习/page/2/index.html","0ea2f334bcd2f099490c7c91e75e474d"],["/categories/树莓派/index.html","2c03a5237da952e283099a6c5ae2b16f"],["/categories/深度学习/index.html","1fe85a369a6fccdc3009e0f64d9a1d2f"],["/categories/深度学习/page/2/index.html","205bead0f38572219840920c1dd11cc0"],["/categories/深度学习/page/3/index.html","077e366e4e3a1c2e09e7a6f4c1f82b2b"],["/categories/深度学习/page/4/index.html","473bc7028a769b056e310ee34ed078f2"],["/categories/算法/index.html","c21925948697239df8f14dae652e9337"],["/categories/计算机视觉/index.html","0fa325df36059f83cb6098e7d29358d8"],["/css/main.css","60f1a9d69da72a9b85c41e5f0901e851"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","a80879cd6eb38ea4678e995e91c48298"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8ee39bf6fed055723e7e4d5de051af42"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/cv/1.png","9f4f5f49612d747ea7e2af9511bf81d8"],["/images/cv/10.png","64042888a4a3f3a4eb0fa61132ec4d2f"],["/images/cv/11.png","a7d130d884954da81b5cb0bb6ec3bc36"],["/images/cv/12.png","78897d4a1ee5b035a6c1fca275d6ee5f"],["/images/cv/13.png","5bddd0353cbbe6bba6397722208f71f0"],["/images/cv/14.png","84703e200ba7bd4c81b00bdd284e995a"],["/images/cv/15.png","9e2fd155d3d155ad7929da9e6ff173f4"],["/images/cv/16.png","11fc9d7abf8eab9eabd3b1b634972df1"],["/images/cv/17.png","4a033e9738210c148a2861e2a595195d"],["/images/cv/18.png","28fef5c46c2f422225f0c6784a0c5134"],["/images/cv/19.png","6f9bf406e55081a45f2d4a7694105aa8"],["/images/cv/2.png","31c2a99f54755c697a66fd612088d5d5"],["/images/cv/20.png","3c583b642ab32b3f0e8c25d702db84e7"],["/images/cv/21.png","a566537a8176f5ad3aefb0a4e3d3a28c"],["/images/cv/22.png","1dbefbc4faf1d6d1667d75e5a6e0ad4c"],["/images/cv/23.png","a19339ed91763c182a8876008b6a65b6"],["/images/cv/24.png","d7b6fbd2e71114ace115874caa3234d8"],["/images/cv/25.png","5d8679bb4738e48ae60291c204fb082b"],["/images/cv/26.png","a621210387b76992c71e377e5b3e787d"],["/images/cv/27.png","cc070ae570b8301c7e48511fd03606a4"],["/images/cv/28.png","19234927e77a2e573d1fcd36c6ab377a"],["/images/cv/29.png","981dc034de4ca4b6e734d1a54783f9c9"],["/images/cv/3.png","e4b7d480e78d5d0c4c6a14fb31b0ed5c"],["/images/cv/30.png","89a24fa0d194fd189e619e5399bc2556"],["/images/cv/31.png","3ebb39656dbc7ff3fe0d53e61edfca4f"],["/images/cv/32.png","9eaf042f7520f23a2c7298f55c0daa84"],["/images/cv/33.png","74898282f2a1f9cb206bcfbf15676aab"],["/images/cv/34.png","0131081dd3bb72e8c15ccabbc5a181b4"],["/images/cv/35.png","8fa06daf89516d71037ad8ad5466430d"],["/images/cv/36.png","6f9bdb37ded9320389993be28956612b"],["/images/cv/37.png","e2d8710a8d1be82ba5c171404a6eeb3c"],["/images/cv/38.png","0fbcf55535e125c43eaaf142a7c16084"],["/images/cv/39.png","0f17b9745c0ee7185f3408ff3e75f6d7"],["/images/cv/4.png","b55154238e33764873083b8463030d3a"],["/images/cv/40.png","352064971be0635581af1446a20bede1"],["/images/cv/41.png","482b4b502b236b800a2e609b273fc479"],["/images/cv/42.png","54f1a474233dedf7ee3fc20c56d23be3"],["/images/cv/43.png","f315e6c996c7f06ace53f7fee13aba7f"],["/images/cv/44.png","d88e6c82ebcf85e6332a5ff18f1d6748"],["/images/cv/45.png","546d355afb836ccafb1dbf1ec6e58c2b"],["/images/cv/46.png","e78e4d34afd63907c64e342d2dd56500"],["/images/cv/47.png","0355f524fce034d2b1d9e49d15f5acf2"],["/images/cv/48.png","0890f1471e76361456983ba205a7323d"],["/images/cv/5.png","eecb4a7bba3f07b8e3025585e7752527"],["/images/cv/6.png","834ccb9069233764f549780478fcf409"],["/images/cv/7.png","61b35bb3b9b78a44a617be9dbbdbddd5"],["/images/cv/8.png","57728a4eef354a0aed3698ad06659e92"],["/images/cv/9.png","60933d0b322df2c82963159b02f716ca"],["/images/dl/1.png","b2d61d37b640c75770a86cf1e89173e0"],["/images/dl/10.png","24f2fa5c727818fc48bf3a6f8068ee58"],["/images/dl/100.png","000f1c2ee2bb7adee780317771fc1178"],["/images/dl/101.png","12d112acec2d7f48e095a61620034ec6"],["/images/dl/102.png","8109c56796810451a8d889b964548a7a"],["/images/dl/103.png","15385609e43d95f81dc4e63fff9199de"],["/images/dl/104.png","897e22d7731a6c8d16ce28a62a739a60"],["/images/dl/105.png","b8a11e56f84cbd023da5c531df5661ba"],["/images/dl/106.png","dd17c8a11f7f5b76a56c38e98019c89a"],["/images/dl/107.png","d9ecc9e1a424bd937bb80da878265e02"],["/images/dl/108.png","92dadc873698dd6b2ef82e704fcbd647"],["/images/dl/109.png","764ba408eb6e5f60b496f3ca28cc83f6"],["/images/dl/11.png","34a8bbc88a333fc1c814e516a170afbc"],["/images/dl/110.png","7fa7ddcaf13c866e940aa176cc9abc2c"],["/images/dl/111.png","9c8b8224afbaf9da7a133e4fb47db202"],["/images/dl/112.png","85a50866d113ec1a5b74f6a2429465ac"],["/images/dl/113.png","f6b40f980ccc3bfdb8612b3df7d26681"],["/images/dl/114.png","7ac6605df0aa00d89b33b46935480ec7"],["/images/dl/115.png","a7925e77be39580d582d23f1ae2c2d7c"],["/images/dl/116.png","291b5652dd7b1e5a0a22ec5888dd0ae6"],["/images/dl/117.png","36483a1cda4bba80601aca92598db2ee"],["/images/dl/118.png","cc10fd547e2094b82e90bc3392b714d1"],["/images/dl/119.png","712089d980526e5239253638703980aa"],["/images/dl/12.png","edbd20c0f9be696722864416805f8ab2"],["/images/dl/120.png","94d4ed5a2a8db1d03192b10098415b3f"],["/images/dl/121.gif","a2afa892b7b37c37871701f374e4b5ad"],["/images/dl/122.png","0ea990077c7f9144c9321f3ed9c56bf9"],["/images/dl/123.png","be8c221c9306341acac8f91bf097cdbd"],["/images/dl/124.png","5c61222626f4efca142fdc78d62a4fe4"],["/images/dl/125.png","b1b458a4e0ad89f06e34e436673489ef"],["/images/dl/126.png","e91bbeef4c4a56ade881fb668addfab2"],["/images/dl/127.jpg","3f4dd207f75f3869c6e744120624fc8f"],["/images/dl/13.png","dd2781bbd52cd08b85822b27e704b223"],["/images/dl/14.png","a4f4a768b9e09d0edb0fb2b61bd6d890"],["/images/dl/15.png","11ccd1c7126bdada66328b00acd38ba4"],["/images/dl/16.png","431eca388a571f6ae2c97f355d4269ae"],["/images/dl/17.png","c785b250216adeb5bb3f7dd344e7e2f3"],["/images/dl/18.png","d0dd40f0001931557dafce3aa70e3f5a"],["/images/dl/19.png","e4aaac069b33a7fea0149cf0b220b2f3"],["/images/dl/2.png","488e19f06f5be0baa222ebc4ebf1f42f"],["/images/dl/20.png","4156882cdf4536bd465bf20630af6356"],["/images/dl/21.png","b215a29f6ecdd03485d9e0a45c9f786e"],["/images/dl/22.png","a96b71719979b2f64d394ecf26191dc1"],["/images/dl/23.png","049c7f3f8c8fb2b62f1ee23fffb1f94a"],["/images/dl/24.png","e311ddc1bc77c0069fc4c653d268f8de"],["/images/dl/25.png","2eabfc24c384e106ae088fa0d080e219"],["/images/dl/26.png","cb13ad3a876f65abfd9bedd5eab6d50d"],["/images/dl/27.png","a652a08f3b6e0b9b82a5556c26e15ea1"],["/images/dl/28.png","3726c0ea2c92a818dd385a8a9237187a"],["/images/dl/29.png","d202d133bd5e7142daf150ea2c300ee1"],["/images/dl/3.png","32643ac5d88e9288e6a91c545228f870"],["/images/dl/30.png","4a6eb0c7c5f7cae3430dd73266286610"],["/images/dl/31.png","230dd5d7b594b13641024ca7c16af9e6"],["/images/dl/32.png","bad29ccda756fa14816c2b7a3d5d60e1"],["/images/dl/33.png","6b47a20743481a7c84cafdddf7aa2b15"],["/images/dl/34.png","544f56c796819c8a2bd76e2008d73b3d"],["/images/dl/35.png","69a494d534a93002d5052f96d54458ea"],["/images/dl/36.png","c7cff050ff6232ad5827e4e0bca493c2"],["/images/dl/37.png","00861b87acf6f356ab7e36cc2f3b8f75"],["/images/dl/38.png","308794ff0c29eda49e3c9f7e72f193d6"],["/images/dl/39.png","031796e81c3dadb6d2c6521ecf824728"],["/images/dl/4.png","b13463143252da800adf2134fdcca283"],["/images/dl/40.png","9193fdaea78a9ecfb2ce346bc2245e62"],["/images/dl/41.png","6efe6e2ed3fa4763693fa7808675a717"],["/images/dl/42.png","e41671954c7e6efa4a80ed2827723a39"],["/images/dl/43.png","d616cae510f75ff0ba75532f13afb680"],["/images/dl/44.png","a1df61f0242f00b7b3dec380f2b82a5e"],["/images/dl/45.png","9880d436563d3e748d4a97219a932de0"],["/images/dl/46.png","ee3823c14cbbc0c4e719d8fa2b70284e"],["/images/dl/47.png","a9654809288507227ddf5091381bd52a"],["/images/dl/48.png","a7f47763bca3b758e0377e4eb3697014"],["/images/dl/49.png","c8b694fc337ffd2822a82ea078a7fd94"],["/images/dl/5.png","ccc04cbc94995b21ae682ed9a9b4b0e4"],["/images/dl/50.png","0b74840b70c5362adbb1ae4d831daa40"],["/images/dl/51.png","add48b535c67dd7ba2d89c2b47d62e4d"],["/images/dl/52.png","ebd47a5ef3557d1857288ea842ed846f"],["/images/dl/53.png","6543b1ebd8f9e1eee6867ac98c377656"],["/images/dl/54.png","e42c09127df542958d6790eb239e2703"],["/images/dl/55.png","0f3bb7248a6e465c0f04c44fd7102458"],["/images/dl/56.png","15ec6905fa793e164de60e8dfd016e50"],["/images/dl/57.png","3a1615a4dae148791518372dfca9684f"],["/images/dl/58.png","5babc414eadaabf475ea5310705d42da"],["/images/dl/59.png","de74751a92a1fa9d22241269545fa578"],["/images/dl/6.png","0c7b467b8c118601b3e4b72e8ee00009"],["/images/dl/60.png","92221b8c62fce1c98467d355237d2986"],["/images/dl/61.png","b77632cd591a92dbfd4cb3a2f3eb707e"],["/images/dl/62.png","f5eca88a4d1b4ff99462d6004037c0b1"],["/images/dl/63.png","2d596bc4776088dc2d7f12035cf9625b"],["/images/dl/64.png","0be91314f6ce792e335eea451fb432ac"],["/images/dl/65.png","cfb0302ad749c7ee33c3a4c0fd048cb3"],["/images/dl/66.png","99a4396798a3703de705d5ef583cc53c"],["/images/dl/67.png","c814ee1f17b1b6e023a2959ecea105f4"],["/images/dl/68.png","32e5647c3a3262d28abd2c801a2499b4"],["/images/dl/69.gif","6428cf505ac1e9e1cf462e1ec8fe9a68"],["/images/dl/7.png","1f98a655f5df7b72a03645ee48043dc3"],["/images/dl/70.gif","cb80c7a8c655585f38038c4876381722"],["/images/dl/71.png","26d9cc4df1edfe2c7ce2b3bec07fcf93"],["/images/dl/72.png","de5ad70ced9e378b87cc5cc3e5068ade"],["/images/dl/73.png","8704e85c81f02d3148f5013f928e622b"],["/images/dl/74.png","40148a094025824911637637e6f0a71b"],["/images/dl/75.gif","2cdd2ec54569879ca045e0ed090f34a5"],["/images/dl/76.gif","395aa82f1e59cf80e8e17a9209bc22f2"],["/images/dl/77.gif","510c9a35e6f332d4d042e3154a59355c"],["/images/dl/78.gif","8a63c07ac20ee5e5097b8a9e9327012a"],["/images/dl/79.gif","9e9a49afd76a80bda8a6362e6a32dc1c"],["/images/dl/8.png","58c486bb84f43765a4b1c0170b17ed3c"],["/images/dl/80.gif","4a87f84b588768c5b5fddb2b000b92d5"],["/images/dl/81.png","c6557ae392175f3284cff96ede632ca3"],["/images/dl/82.png","8c6e03a4ce27b1546860f1a4994ded2f"],["/images/dl/83.png","3230fe6ea57bf3bb56197b60c744873b"],["/images/dl/84.png","b32db2843c3da7a1434e07286a767202"],["/images/dl/85.png","aaaeb673c62631407bc0417bf30a2209"],["/images/dl/86.png","cc201aa344c97773b92d4a24a3eb4756"],["/images/dl/87.png","153a890f1412bea4542d568d2f071fc7"],["/images/dl/88.png","effc36ef946164373a8bf243961d88a1"],["/images/dl/89.png","2686299a083de7d34f0f4215884ca4a7"],["/images/dl/9.png","07509d765897a7512d5beb635d3c4179"],["/images/dl/90.png","a56a0f6071eb3fcdb76968b4a32d5e5c"],["/images/dl/91.png","6ee325d3906f10f2793fbb01e489930a"],["/images/dl/92.png","0c8d438c12bce0260b16cf270db56f0b"],["/images/dl/93.png","6c92ffc515ccbe08a5abd79a3cb80b9c"],["/images/dl/94.png","808edd0a07d8cbabf336dd9dca8d4a26"],["/images/dl/95.png","45f3b7701551fa7df5f9be047c75500a"],["/images/dl/96.png","9a3c4effe6fba0aae2fb580155c4c55d"],["/images/dl/97.png","bd2706173398f50c2831c4e192b9f352"],["/images/dl/98.png","37d39a650706f2df9b766fe478e52587"],["/images/dl/99.png","058d5dbc14ded7c21715436648e21181"],["/images/docker/1.png","052bebd4e60c59be51857684e5e6fc0c"],["/images/docker/2.png","28f04eea1e73e7c0e0c466756c9c2c62"],["/images/docker/3.png","82a26c321e81043540818baaea77eb38"],["/images/docker/4.png","367c99cdceb0f81b378c075904c88644"],["/images/docker/5.png","e414ffe973288941a51e9cde7d92bb71"],["/images/docker/6.png","d559cb65466a900edb0d7983917ec37c"],["/images/docker/7.png","ac71dea1600d19598053c5607e7975a1"],["/images/docker/8.png","d9b777921984636623864ec2b250e298"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/math/1.png","be08ac320a3fafd4b6cb9a2a820a3b42"],["/images/math/2.png","82c7788477186d13876fa2783fb31305"],["/images/math/3.png","c4dbdce9ea65b388f307e4c2b6701c7a"],["/images/ml/1.png","0614e4691064abbff74cb69212e2a466"],["/images/ml/10.png","ee1e7358cde8b8137ce684b0c4365e04"],["/images/ml/11.png","c86479f988d4dc6b87074724f42e35f7"],["/images/ml/12.png","35ff221fa6ca14c635bfef76cc5a2991"],["/images/ml/13.png","f1bc25e32ad10b0d7b0c9ede788a5b88"],["/images/ml/14.png","2f592eda3505117752f6719aba65edac"],["/images/ml/15.png","0c8117df94fa4c145e2c2943e2247ec0"],["/images/ml/16.png","5705759f62883d83028290a0933e5c86"],["/images/ml/17.png","eed841d914da17d258adc9852c83b745"],["/images/ml/18.png","7863315ccc29fb1c24e27d2a5fcd477c"],["/images/ml/19.png","e3307673fa4d5889a52012dff9c03ceb"],["/images/ml/2.png","9d72b6ab1efe7d92a0f75e376681e549"],["/images/ml/20.png","73daa252e5311ade27160a65cc61c9a7"],["/images/ml/21.png","2749400036f8bba7beaa0ab3224f5389"],["/images/ml/22.png","aadd1c4aa269c129958a013d84e42492"],["/images/ml/23.png","80937bc77f36a5d6310ddbde34c091ed"],["/images/ml/24.png","810369b827c1d376ae5a0e6bbf0c2761"],["/images/ml/25.png","8ba5410eb67aa3cb734596ab0b7abbf3"],["/images/ml/26.png","e702d97bf87a16ac98d9b96357a50224"],["/images/ml/27.png","eb5810d90beb005e0921b5bdce4278cb"],["/images/ml/28.png","daf6146665cd93ff43b7c0537d26931b"],["/images/ml/29.png","faf61ee7aef34289909db13712731ef5"],["/images/ml/3.png","05763899f89a3aec00df11ea2a7a976c"],["/images/ml/30.png","521f8749d93cc41c604307333b8ecb20"],["/images/ml/31.png","61e322d57e7a6468cbca48304ae94cd4"],["/images/ml/32.png","6ec323b582e8562c93c1d6640f4d807e"],["/images/ml/33.png","0d1cdd5ecbf216003f28746db2b33b6d"],["/images/ml/34.png","64b7033aec57515e301161d85f8e4e30"],["/images/ml/35.png","edf088702e0177920a94b3508bec7ec7"],["/images/ml/36.png","fb5a9ddea3a45786bdf11c415e147896"],["/images/ml/37.png","60914873dae6567b8e68ec45ec6b59dd"],["/images/ml/38.png","2b8b5cff6aa6292c46ac594c30027790"],["/images/ml/39.png","1d3d3d21aac91a1e4a2b16c45345d3b7"],["/images/ml/4.png","d1d10f45e987ea4af1c4b7086c5f745b"],["/images/ml/40.png","772e151cc0187377b8640b6769125b96"],["/images/ml/41.png","481ba1d4954007c7eb74aa89f44cc220"],["/images/ml/42.png","3b812196cfcc9fd92a8eae2eba443cfb"],["/images/ml/43.png","cd5f999f7915a1797b3a4c1bd1a63484"],["/images/ml/44.png","37eb471cb2476713b4491a3d747e8f5c"],["/images/ml/45.png","df3980f9a53928768f0949eab0dda0f6"],["/images/ml/46.png","d9a4bc126242de84d18bf1a616961bc3"],["/images/ml/47.png","ecc436ba7ba75ec5c422ecdd700219d6"],["/images/ml/48.png","a154e7896b59f7c4feb7fd9869350494"],["/images/ml/49.png","e9cc736869a7161cfefc7e1961c2d9aa"],["/images/ml/5.png","884a734410b3627a14981c481b27c583"],["/images/ml/50.png","6900e08fcd02c9a9bcac17b1c7d68fad"],["/images/ml/51.png","1ecd25e8788aac72f2f6d2440ebdccde"],["/images/ml/52.png","e8a96085b9487570772875b5f40c5a64"],["/images/ml/53.png","6ed613d5f1a4465a670ee7557dd29575"],["/images/ml/54.png","4fba1f8adf3b0bac8f6cd911016e97d9"],["/images/ml/55.png","f772762d3dc7b6927ca73e276bacd35c"],["/images/ml/56.png","20827caf527ef20652b21adb8e143e96"],["/images/ml/57.png","3bfb68f2234dfdb64aa5286d49a04f79"],["/images/ml/58.png","291a3424c7bff0afa585bfa7f09d67de"],["/images/ml/6.png","bbd2772718a23a1102b2201f78413d6a"],["/images/ml/7.png","c753cbfb65ed9638e82e5d0140028f82"],["/images/ml/8.png","0432f07c0cec1708d787798042156c21"],["/images/ml/9.png","2870280e8d3cedaee23818114a3cc02e"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/py/1.png","15b7ebe86935d45e017776bdd2e2e2d7"],["/images/py/10.png","30a401b3d7e75a8e237f0b805f583e4b"],["/images/py/11.png","59051625b36f69ecb18a6174a04b4368"],["/images/py/12.png","0738f0be3b1b72d1f66f6ec218d76675"],["/images/py/13.png","aabc1941943d19cd9c26b4c97b991415"],["/images/py/14.png","f09e867b7e33ab28bb509208efdd4928"],["/images/py/15.png","af9b8898e56514fa1c060e35d316066c"],["/images/py/16.png","ba5ec4e869bae45070e08f64788ecfbe"],["/images/py/17.png","82fe7ec533b75c5b9ed5e677f57eeaa9"],["/images/py/18.png","f651173cc0a9b4a8dcbdd495f73f882c"],["/images/py/19.png","db20315678cbcad8dd4f0d4bd72cb991"],["/images/py/2.png","589c0581b9b1da7112120f6a1f320fc3"],["/images/py/20.png","7670ef568945df192b81f0dc0f3d3f7f"],["/images/py/21.png","dffafdf930d818b664746a166cbb97bd"],["/images/py/22.png","e42a0fc9bec94fcd5207dd39ee46dc5f"],["/images/py/23.png","729ce256675ed1b5be435ba49e07d5fe"],["/images/py/24.png","3178aad732fb3a59fd6b9f0522d0c84e"],["/images/py/25.png","23dee90b7ba96de076a6bfbc7e9f9fc8"],["/images/py/26.png","5f27264c4cc5f1066086d4a6dafe68df"],["/images/py/27.png","2a30cc59399a637db839057f86d8c331"],["/images/py/28.png","f8ddf9a9bdfb76086c414c8561a7c756"],["/images/py/29.png","e6a08a36098bc987d119f57a9b273829"],["/images/py/3.png","46d73ca2a738a321e189608497c35b78"],["/images/py/30.png","aaad070ba988fc223be70b8be8d1a694"],["/images/py/31.png","2190bbadd784c89153ca10aacaa212d7"],["/images/py/32.png","4ebc4497b4ffff11e8ed5bb12a592cee"],["/images/py/33.png","a912118468c632d485625969bbe13b28"],["/images/py/34.png","8647e22d53f209413add44e80c22aaf0"],["/images/py/35.png","f98376dfc1b6b6885ce35e0e29831c12"],["/images/py/36.png","63b48f45c30f1f4274506b01ccd2aaae"],["/images/py/37.png","66a568168cb34596f4d2b61f701f0c41"],["/images/py/38.png","4ec3117c6e4660417f25420015680ef0"],["/images/py/39.png","1d31399d3f0ef916447931f88ce3398d"],["/images/py/4.png","beabd345ad64e22ed6750c13f7d35e90"],["/images/py/40.png","7b19dffc350d03bcf0de1c9477e93105"],["/images/py/41.png","593c6b113bc67e90339d819616bd1277"],["/images/py/42.png","20c75a35c4a4b07faf07daf9475ce1ff"],["/images/py/43.png","6c673a7ef4a3fc5ea9169a3fbd61f80e"],["/images/py/44.png","2334590711560011876de8c746b18604"],["/images/py/45.png","1441f705d69261450da8c5233ab02d0f"],["/images/py/46.png","616c6ab2d9c8eb007952017c7452d6d7"],["/images/py/47.png","004175268fd9029f7d09d1503670370f"],["/images/py/48.png","489330b4f78c3796b20042589808f8bd"],["/images/py/49.png","58a224ddfb5f57a12f48f3b4e3cbd0d0"],["/images/py/5.png","771c59a4e854122793a682f106fa08e5"],["/images/py/50.png","bfa901b645deced8dd1f9a8c26778f25"],["/images/py/51.png","2ffadace686f78c1414244d872d398fc"],["/images/py/52.png","2e3ec0d057d100e4e8ea5f0212e5c998"],["/images/py/53.png","17bb9979be17d13b90357c57139da462"],["/images/py/54.png","c23d69845f72a73fa3e2f1fb84771c56"],["/images/py/55.png","8535760aff99ceb4b556f7b97796d94c"],["/images/py/56.png","59ec9ba92d7ccd2c716228a1a8455ccb"],["/images/py/57.png","15bc87041ac4b1c7b3525b314fb7ef66"],["/images/py/58.png","5f94f3e9e9c6e104566bbb1b600e1fac"],["/images/py/59.png","bea377ca62ca75ab5d71c430b0355931"],["/images/py/6.png","833af6f79eead78a0888a42a24a7c35b"],["/images/py/60.png","ea730c5befdab80ca63dbcce82b3e4b9"],["/images/py/61.png","a6562d29f44817c17e7be41238aaad7b"],["/images/py/62.png","7d457435369276895070e3dd61c9462a"],["/images/py/63.png","91015ba12e25b0f895687581ce6bcb25"],["/images/py/64.png","20a15a250b09f9e4604ab3550b9700c3"],["/images/py/65.png","fe52bf0b2570638b2d22d72a27152e1c"],["/images/py/66.png","d3025a5e94f7bc525362d1f2e7745078"],["/images/py/67.png","2f7ca0e327c55df4f003210905190792"],["/images/py/68.png","6f7279dbb187720b89c66250c986e965"],["/images/py/69.png","a44c673d20cbcf45db156036bd983034"],["/images/py/7.png","d947a703f79658536cb2750914637ffa"],["/images/py/70.png","8a87dfa24f54a8547ef6826d3b6289f4"],["/images/py/8.png","20b867d8137281e9c3a40b802df75680"],["/images/py/9.png","e4639c570e7f7a04e90439456ad297c5"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/reptile/1.png","6d0aa92af42a4647977a03707bade702"],["/images/reptile/10.png","79f309da23b6b5b8b9effd25cc20abd9"],["/images/reptile/11.png","e60854e61ed69c6cccb12196fd947705"],["/images/reptile/12.png","ae4ac9f4065966955a3f31fa4b2292f3"],["/images/reptile/2.jpg","f722e57e21e3d76ebedb6667bfd44aed"],["/images/reptile/3.png","b4161135bc5a889337f36a3a0c20dc6f"],["/images/reptile/4.png","73b18e616e9134ffc1aaeb4ed1c29dfb"],["/images/reptile/5.png","318877d0e3a7337773fc301d6c5118eb"],["/images/reptile/6.png","f39ae0da0e1d343ec162f5db6ade59fc"],["/images/reptile/7.png","26491b8984ce6b22c76ebb6372f912f0"],["/images/reptile/8.png","15bdc5c257f7c109f184f9872c57b2d5"],["/images/reptile/9.png","92e8ffd5026d530e630b6ba90c23236f"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/tools/1.jpg","5bf773e6fdaf0c6573c4578ea232dc21"],["/images/wechatpay.jpg","07f0995337e2a1c8d2357e5659ec120b"],["/index.html","53fa11fcdf0388d51e99174945d7a15f"],["/js/src/affix.js","5c305e2c1bae827a8c3b357f6404ea23"],["/js/src/algolia-search.js","672c1a4f199a4758d583c08dfeb289a1"],["/js/src/bootstrap.js","696b64253ed69606b3cd54bbdea5f9a5"],["/js/src/exturl.js","797458b5f04c71f6211cb72678d29096"],["/js/src/hook-duoshuo.js","b72ab4b8babe464053bf2ba429cb7d09"],["/js/src/instantclick.min.js","d66c5f9f293d1855f7c34ad9a44eee1b"],["/js/src/js.cookie.js","5f21f36b89870b792ca01c547a557250"],["/js/src/motion.js","2a6fbb94ac5174f30eaccbad76b718e5"],["/js/src/post-details.js","94da078c683eeafaa613ef7272e0ddcd"],["/js/src/schemes/pisces.js","a90cfc13707edc12a0ebf2a7540dc6dc"],["/js/src/scroll-cookie.js","630006f04125a21c0fd2612cff076ea4"],["/js/src/scrollspy.js","687382ee108b4524492d46e54ecbc93e"],["/js/src/utils.js","eab009a79baf14b3dd5bd5bc8dd4976d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1b1b1102ce97ae57f94b94758e1dfc8c"],["/lib/Han/dist/han.js","7a79deb0b63f16417fef730e3c2458fb"],["/lib/Han/dist/han.min.css","d790bb9e0dc562b5f9ec6ab5b83e35e7"],["/lib/Han/dist/han.min.js","d6e986a47eca71bc0fa30b8a4e97a77b"],["/lib/algolia-instant-search/instantsearch.min.css","a093292d5bed39c08f356fac2f27d954"],["/lib/algolia-instant-search/instantsearch.min.js","3d62dd8d83c4125329953dd20de290a6"],["/lib/canvas-nest/canvas-nest.min.js","62cf7f2b5d5a394ffe2e2144740c49c3"],["/lib/canvas-ribbon/canvas-ribbon.js","e141cb23ea4f862d05d0c16b67473e60"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","6a26ce9cadcd8bf1f46a6f40ca749925"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","87a20fbc35a0b05db8b6f173aaac0a54"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","31545f9d8a06d8d076c86d4cbead1df7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","9d7a2dd94b992693072c32d980623926"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","deeff6ad31ffe0f572683a0d6cd71908"],["/lib/fancybox/source/jquery.fancybox.css","3a7562a3beb0934a49591f5489175ccf"],["/lib/fancybox/source/jquery.fancybox.js","d7d4f1b16ce3012d74ae811100f7010e"],["/lib/fancybox/source/jquery.fancybox.pack.js","0fe4e340a5476a00a16b55ad326a2a29"],["/lib/fastclick/README.html","ed3202cdc5bc7a1896b588dde921d643"],["/lib/fastclick/lib/fastclick.js","2e02f1996ca6ad072554322375e5815a"],["/lib/fastclick/lib/fastclick.min.js","d3127e4b829761a46d5af5586f421726"],["/lib/font-awesome/css/font-awesome.css","316b2123c7cc0779a75f3bb553203887"],["/lib/font-awesome/css/font-awesome.min.css","316b2123c7cc0779a75f3bb553203887"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","d77268b3437135cb7519aa16bc67e92a"],["/lib/jquery_lazyload/CONTRIBUTING.html","1ede74251694efe9aba0e61484750c95"],["/lib/jquery_lazyload/README.html","a6904b1c55ea0969974f51a3206233fe"],["/lib/jquery_lazyload/jquery.lazyload.js","8d79567e18011add2a55c4e737b54eb9"],["/lib/jquery_lazyload/jquery.scrollstop.js","fa7cb31fea5cd0a279e2920044ea5148"],["/lib/needsharebutton/font-embedded.css","e04f30be35b4dc1fdf9da18c5a020752"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","8a2309e7af632c0a48250580a6d082cf"],["/lib/pace/pace-theme-barber-shop.min.css","a44df9957de731db2901b793cae226ae"],["/lib/pace/pace-theme-big-counter.min.css","839e60e05613f1e056196f8a52d3bae4"],["/lib/pace/pace-theme-bounce.min.css","a0edb94123be010940d6621d573e532c"],["/lib/pace/pace-theme-center-atom.min.css","4347f26c01c8fe3e4575b823c6c252e4"],["/lib/pace/pace-theme-center-circle.min.css","f11a52e32cae54c52f1c3a4d2bf8672b"],["/lib/pace/pace-theme-center-radar.min.css","b951f9bc8a8757613e39767f08b137d6"],["/lib/pace/pace-theme-center-simple.min.css","c7a2fe388fd4823c56ff53717489850b"],["/lib/pace/pace-theme-corner-indicator.min.css","727317e388bd7d85e3c9bc3ae0bf446d"],["/lib/pace/pace-theme-fill-left.min.css","4c7cd16e1af1ad380b31598a4b931106"],["/lib/pace/pace-theme-flash.min.css","f8a7105d414c2ef7584baaf8495eaa1d"],["/lib/pace/pace-theme-loading-bar.min.css","2d5439e55b9963f16e4e1b23a9f4b179"],["/lib/pace/pace-theme-mac-osx.min.css","af63e29c75e8632aac542562569265e0"],["/lib/pace/pace-theme-minimal.min.css","8c7d5f13ad30ce7d2b0547508e79dac7"],["/lib/pace/pace.min.js","0d43abce43fd9778b182906cb2830064"],["/lib/three/canvas_lines.min.js","faa5ef06e54a9ff57b93474586ec2cc8"],["/lib/three/canvas_sphere.min.js","a6e5d947d5dfe2a93b88530416996d95"],["/lib/three/three-waves.min.js","23679373256b312e4dca66c9d0ece14f"],["/lib/three/three.min.js","0b4ffd80642032b3738740762be1a37c"],["/lib/ua-parser-js/dist/ua-parser.min.js","696799638474dadf0eb7b13cd1475ec4"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c4c230b8608ef3504e0568d70ef72ebb"],["/lib/velocity/velocity.js","c87c3ac5e0e8880052b519bd14eae08a"],["/lib/velocity/velocity.min.js","082a8ac3d480889308bf9930299b66ac"],["/lib/velocity/velocity.ui.js","f5ce088ac8e752d9fc3d0096a85b85e4"],["/lib/velocity/velocity.ui.min.js","4ead67861d4a30abcc9452e3846b2e5d"],["/page/10/index.html","86794617900a4a53318c6cabc320819f"],["/page/11/index.html","7de765ee9725d4d4193a12cd72264182"],["/page/2/index.html","4f043bbe1e0bacb8d6754693d7d7499f"],["/page/3/index.html","5a7533560e71a257688298fb1c4110de"],["/page/4/index.html","3bd8be0f6c04aa6cf9b5917378c6ead8"],["/page/5/index.html","c3cd48ad457d0ffa897567256449ec27"],["/page/6/index.html","5a2de4bcc77a34160d94bb75fb0f8d09"],["/page/7/index.html","1ebdccc153b8f8a3777cf59ab04bdfc6"],["/page/8/index.html","0eb99b99925583dda988ddf50bd13737"],["/page/9/index.html","19a6993cab960223d2cc023f7a9af62a"],["/sw-register.js","62eab23beb2466a6ceaea57ee0c7f9b4"],["/tags/CNN/index.html","042652129b3db79883434ab256d070b4"],["/tags/DNN/index.html","85dff59eca9a6c897b64041bf3f646fc"],["/tags/DeepLearning/index.html","009999f59cc2e9bd542ba59e984a2166"],["/tags/DeepLearning/page/2/index.html","d228e678729dedc730636e9b8d4c4f54"],["/tags/DeepLearning/page/3/index.html","5f4b91c9d1a452f372dcbc88470e5b6a"],["/tags/DeepLearning/page/4/index.html","9658708a1a6e7d0f62e3c9c7afb5ce2a"],["/tags/DeepLearning/page/5/index.html","18f98995309e8941bc3e224504f9b714"],["/tags/EM/index.html","0c1172a7f8523c3fb9601f8b86e6dcf4"],["/tags/GAN/index.html","10da9da815a93ec2829890373c26c021"],["/tags/GIT运用/index.html","99797460503cb6cbe97de0baa9f902b4"],["/tags/Keras/index.html","5fc39c1237471913917bb28abd880323"],["/tags/MachineLearning/index.html","b7d3216b4249a63180de99ce93f8ff62"],["/tags/Python/index.html","e1a15bfffb9538370fa294360dcc6dde"],["/tags/Python/page/2/index.html","6dd44d9f677075daa6740916f3333118"],["/tags/Python基础/index.html","58964421d4081ffb11b8efc13349e6d6"],["/tags/RNN/index.html","183a9416c145088b59391214f6e5f5b4"],["/tags/TensorFlow/index.html","5411b589d996d7dfcfeb352b6a930c0b"],["/tags/TensorFlow/page/2/index.html","d0cb8825dafa3353791c79fbb63db05a"],["/tags/TensorFlow/page/3/index.html","1b8070ede696f1bcdf1cd625b60ac98a"],["/tags/anaconda/index.html","a803412fb884cd6661ef933108d1f93f"],["/tags/docker/index.html","53b5761e733f2d48d2e70d035baea2d8"],["/tags/git/index.html","061b247620ae2a3c48288d9c3c943ceb"],["/tags/index.html","53f4cf0ac1e2e2c90102a0050460d8ed"],["/tags/ios/index.html","53141dc45235ef5eacf2daef223ced29"],["/tags/linux/index.html","29c9968a8d64da36fe20891632a8dbee"],["/tags/markdown/index.html","97a35faf88187cfe01cc8700ea3c6bfc"],["/tags/network/index.html","30fa5d22aa480f0f17e694bd7023eab6"],["/tags/opencv/index.html","20b9924680b03cb6ab9d1cf725a0119b"],["/tags/pip/index.html","6b69296794157e15e5765062937db6b2"],["/tags/pycharm/index.html","cfb44047a1ca2be6f9b11195f68befc8"],["/tags/svm/index.html","d8155eaa59622b2af23ac6808d63d606"],["/tags/ubuntu/index.html","2245cf4210dc817f245d3ef22f5ae027"],["/tags/优化算法/index.html","8482d1126f8405e283ad0635a8c1d5fc"],["/tags/决策树/index.html","122462166c1bf4121a2ab02d34e29209"],["/tags/反向传播/index.html","0b9ae859e26dfe473eb0ade0fb0aae5f"],["/tags/声卡/index.html","3c250f53393108f1040fe397274dfe7b"],["/tags/安装/index.html","34f6cd2e40b580dca7ca005934dd7eaf"],["/tags/开发工具/index.html","e17845939123994cfc1ff7c157fed068"],["/tags/开机/index.html","519d5a9602eb3942b30a5dc0118c2401"],["/tags/朴素贝叶斯/index.html","373619b9a784e64bb8b14e3c01e0aa73"],["/tags/核函数/index.html","c85c2669cfcdd8aaa73c39e443de78a2"],["/tags/梯度下降/index.html","d6fe45478f2fda53c8352517ebae7f45"],["/tags/神经网络/index.html","eac9c218fb99e79a81f14392125756e5"],["/tags/线性回归/index.html","73d64d3c7027281aa94fc8dc3a9f8693"],["/tags/聚类/index.html","a7fb4ffaf078dc19b6c8a76b9ca18c4b"],["/tags/自动化/index.html","fd714eeedacaeaa644a35d058d89d37e"],["/tags/贝叶斯网络/index.html","131ed8653a0081c4aedac455a2eecf75"],["/tags/软间隔和正则化/index.html","4e60d80c563feb72bee7205b18bc7b0b"],["/tags/逻辑回归/index.html","03bb9a49dab1b0b84cb4e02f09e274b4"],["/tags/随机森林/index.html","3a8ca3fdbde1d493dd59cd5e8e07e81e"]];
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
