/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/08/25/2018-07-20-raspberry-Internet/index.html","044f1e56acb2731b9d0e574d5295a2ec"],["/2015/08/25/2018-07-20-raspberry-on/index.html","03df7e1da82daa8af9ff7c3a83b68b48"],["/2015/08/25/2018-07-20-raspberry-usb/index.html","03f0d75369d20528eb755a5066d700b1"],["/2016/07/13/2016-07-13-GitTutorial/index.html","642b47aac16aede799e6310b01bd5d3e"],["/2016/08/04/2016-08-04-PythonTestAutomationiOS/index.html","92a1950557220939f8547b80b56ad808"],["/2016/11/20/2016-11-20-markdownTool/index.html","3d369d94d1bd2cadc5054a3f34688d97"],["/2016/11/20/2016-11-20-neural_networks_using_TensorFlow/index.html","4c7abb891440a9848bcd7decfc85a7fb"],["/2018/07/05/2016-07-05-MachineLearning_introduce/index.html","9a7d08a0e692cd84d3882a6998dae77a"],["/2018/07/21/2018-07-21-ml-linearRegressionL1L2/index.html","c92991f7c53716178d7b4d92066f2a03"],["/2018/07/23/2018-07-23-ml-DecisionTree/index.html","0bb37afe8e3eae28243ccd630335711a"],["/2018/07/23/2018-07-23-ml-logisticRegression/index.html","8be4963e861136396348b4df8721da91"],["/2018/07/24/2018-07-24-arithmetic-gradientDescent/index.html","df4e7fb75d8715f905dc29dab02849ba"],["/2018/07/25/2018-07-25-ml-svm/index.html","8a65a811fe9b2a21f55442dd91e4c33e"],["/2018/07/26/2018-07-26-ml-svm-L1/index.html","e73ecc464adf1fb7d91351095285f126"],["/2018/07/26/2018-07-26-ml-svm-kernel/index.html","153995414c072f4d906fa1fa29f11ed3"],["/2018/07/30/2018-07-29-ml-clustering/index.html","a23803c90c02b494af7530df54cc72cb"],["/2018/07/31/2018-07-31-ml-em/index.html","22acca5330250ac3601ab415b35bf999"],["/2018/08/01/2018-08-01-ml-NB/index.html","41cfc26448aa8517cc3d8237ebc71b30"],["/2018/08/02/2018-08-02-ml-NB-network/index.html","91e6f049173fecbd3f1b9d0356b68f5b"],["/2018/08/08/2018-08-08-DL-introduction/index.html","c206d7661b04640c76629e64ed9bd9e8"],["/2018/08/09/2018-08-09-TensorFlow-windows/index.html","c2f8469e15885bd470db60f9287062c6"],["/2018/08/10/2018-08-09-TensorFlow-ubuntu/index.html","d667652ddff28d0b7fe01d4d4c62907f"],["/2018/08/11/2018-08-11-TensorFlow-Virtualenv/index.html","7accaf1014346b8872e59289c3888c30"],["/2018/08/13/2018-08-13-TensorFlow-course/index.html","7c036f1b25dc4f833376fb165d7bfe16"],["/2018/08/14/2018-08-14-DL-method/index.html","dc3051dc02571aa40bae0f54f4b0803a"],["/2018/08/15/2018-08-15-DL-back-propagation-python/index.html","6a4c7dcf74a96dff60f22f31743795bc"],["/2018/08/15/2018-08-15-DL-back-propagation/index.html","10593e9159f1b8bd003950127127aa87"],["/2018/08/16/2018-08-16-DL-DNN-python/index.html","a8ae1702ca98771ec4f56d160d58d8e4"],["/2018/08/21/2018-08-21-DL-CNN/index.html","407a33d9755e12c47efce3307e345bab"],["/2018/08/22/2018-08-22-CNN-back-propagation/index.html","b0e01a5ac0eb5d96ec790fca2acc091d"],["/2018/08/23/2018-08-23-DL-CNN-python/index.html","1be79e00239468741318f07be36e6189"],["/2018/08/24/2018-08-24-DL-CNN-LeNet/index.html","f08c6c82961ce5ac6f08b98a77dfd2f7"],["/2018/08/25/2018-08-25-DL-CNN-AlexNet/index.html","ed0063b5adea8289e5f4c6aa91629d25"],["/2018/08/27/2018-08-27-DL-RNN/index.html","f1ecc63a8cdbb6344b64dc4e59a84022"],["/2018/08/27/2018-08-27-TensorFlow-keras/index.html","281c7751b4064c2339037b025aa1f49c"],["/2018/08/27/2018-08-27-TensorFlow-layer/index.html","cc3b3f5c8ce46d435e0d78ec827f1d9b"],["/2018/08/27/2018-08-27-TensorFlow-native/index.html","646a3eb5b8912de443a9ff27eeeaf747"],["/2018/08/27/2018-08-27-TensorFlow-slim/index.html","94e0e26c1455144bae38706888061494"],["/2018/08/29/2018-08-29-DL-RNN-BPTT/index.html","d72271ce5d677997f0b991cdbc9008c6"],["/2018/08/29/2018-08-29-DL-RNN-hand/index.html","796c07c9b70d75c04df80556f3a3472e"],["/2018/08/30/2018-08-30-DL-RNN-LSTM/index.html","f613ad7b8e8765ccaa3470042dac12bf"],["/2018/08/31/2018-08-31-TensorFlow-RNN/index.html","382cb2425a81fd6e640488854221a8e7"],["/2018/09/01/2018-09-01-DL-GAN/index.html","db9cde23012f5c33af86beabeb741b1f"],["/2018/09/03/2018-09-03-TensorFlow-GAN/index.html","6970550721d7fea0440c729b669d3c15"],["/2018/09/04/2018-09-04-DL-DCGAN/index.html","c0cfaa6c1f7b91e05c12a381295b588f"],["/2018/09/04/2018-09-04-TensorFlow-DCGAN/index.html","ac4047e35574bb836aafee2d57650c4d"],["/2018/09/04/2018-09-04-TensorFlow-save-restore/index.html","52f7d87587567ab96da22bf2795e5dca"],["/2018/09/07/2018-09-07-TensorFlow-cifar-network/index.html","9cd0d501f9ef7268386ee82c4a77e784"],["/2018/09/07/2018-09-07-TensorFlow-cifar-train/index.html","f1a492c8af74937e62b72d65b598ff00"],["/2018/09/07/2018-09-07-TensorFlow-cifar/index.html","0c83fc0952aed4f9fc98bd7323c4c02a"],["/2018/09/07/2018-09-07-TensorFlow-visualization/index.html","2e58ce14a0d72123323e24ba2364eba8"],["/2018/09/07/2018-09-07-keras-cifar/index.html","077fc2994d71e597da37fdaed2c46b09"],["/2018/09/15/2018-09-15-Pytorch-AlexNet/index.html","3a4af70fc4e69b439bdc54735b5905a7"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-test/index.html","7da99d279688e3b7240c5fedbf54d652"],["/2018/09/15/2018-09-15-Pytorch-Cifar10-train/index.html","056effa29fda4e56ae3e3856bea8a1ac"],["/2018/09/15/2018-09-15-Pytorch-DenseNet/index.html","8f9cd3336a9944a9835012b6c44e784a"],["/2018/09/15/2018-09-15-Pytorch-GoogleNet/index.html","1fcfa910f3377ce2228a66968a76b067"],["/2018/09/15/2018-09-15-Pytorch-LeNet/index.html","ba50cb4725d661e639bfc3c41d949c2f"],["/2018/09/15/2018-09-15-Pytorch-ResNet/index.html","6820cb85b1f5fd98354aa1ccb83c029b"],["/2018/09/15/2018-09-15-Pytorch-ResNextNet/index.html","0bc615d5dca1e2ad10bc4ae329ff9098"],["/2018/09/15/2018-09-15-Pytorch-VGGNet/index.html","cc6f558e00d9abda810349b9f3a218ca"],["/2018/09/15/2018-09-15-Pytorch-cifar10-data/index.html","baf41a4ffcdbf85de4ae3eacc11e8e09"],["/2018/10/09/2018-10-09-pip/index.html","777a0fef0c8910a4cb01502971d590ab"],["/2018/10/09/2018-10-09-tensorflow-question/index.html","2b583f61cfe8d9d9e09b3cbe363c3232"],["/2018/10/15/2018-10-15-source/index.html","d33095a320293cee66585a8dab335381"],["/2018/10/26/2018-10-26-openCV-geometry/index.html","84f9a957ca5d369715666bec2a7bf2c1"],["/2018/10/26/2018-10-26-openCV-install/index.html","e5185bf874a659d3755e5502a4f5b21c"],["/2018/10/26/2018-10-26-openCV-special/index.html","4ab2bda3233f1bb9c800b1011fabb0e3"],["/2018/10/27/2018-10-27-openCV-face/index.html","34d861e4826ac03d228cd3695cff1bdf"],["/2018/10/27/2018-10-27-openCV-svm-hog/index.html","bfbeb017ae4c81d203fcb2860b4ffc0e"],["/2018/10/27/2018-10-27-openCV-svm/index.html","04fc68f88576edf3273985c4ebfbbb10"],["/2018/10/27/2018-10-27-openCV-video/index.html","71a08fa1862b5f655e22ea2c04cccc17"],["/2018/10/27/2018-10-27-openCV-whitening/index.html","699a56439b9b0f64b1a914599bf1e367"],["/2018/10/29/2018-10-29-docker-TensorFlow-cpu/index.html","d7134c9183a9707f68fa34dbdfae83e2"],["/2018/10/29/2018-10-29-docker-install-win10/index.html","1b5937ec1d78b599c062eb90c38ecad9"],["/2018/10/29/2018-10-29-docker-install/index.html","0b0620832528234a89177c2c36f3b2dc"],["/2018/10/29/2018-10-29-docker-source/index.html","c81ae3a63eee235ed5fd25fc4d88b77a"],["/2018/10/29/2018-10-29-docker-speed/index.html","1c0a1687a5347359b70de2b642740cbc"],["/2018/10/29/2018-10-29-docker-vessel/index.html","45399f420d10906c01e010d72e411bb3"],["/2018/11/08/2018-11-8-linux-vim/index.html","1959ad00ff4947759075b02a309ef08b"],["/2018/11/08/2018-11-8-linux/index.html","36a1aa864b67d4bd5c7537bdc58e5dfd"],["/2018/11/09/2018-11-9-anaconda-ubuntu/index.html","22539f901accade3d3d0922547ecf2fa"],["/2018/11/09/2018-11-9-anaconda-windows/index.html","d6d00fa6f978b3d16ed9d57c418b844d"],["/2018/11/19/2018-11-19-git/index.html","c6fd10c739f07c9c1ca1d7800b8da3d6"],["/2018/11/21/2018-11-21-python-date/index.html","3f23cbf32a079237896e32faf50a0e57"],["/2018/11/21/2018-11-21-python-encryption/index.html","195979c8ab099e450f79b5434b3274d3"],["/2018/11/21/2018-11-21-python-log/index.html","b506f892d793f6f80644ce6db665d20c"],["/2018/11/21/2018-11-21-python-pillow/index.html","3083fd2c64abed5da891580ed39cd825"],["/2018/11/21/2018-11-21-reptile-beautifulsoup4/index.html","5822a9248bbc616e94ff0e86ca506570"],["/2018/11/21/2018-11-21-reptile-http/index.html","7e89f1f2d5cb41ca4d83f026575ee1f3"],["/2018/11/21/2018-11-21-reptile-request/index.html","b2906165c2425ed71b2d872ee161a5af"],["/2018/11/21/2018-11-21-reptile-tcp-ip/index.html","db8bed43499b4371f2b799a130f406ab"],["/2018/11/21/2018-11-21-reptile-urllib/index.html","91c2ef704b5f6749839014f7fb327586"],["/2018/11/21/2018-11-21-reptile-xml/index.html","05b348eb4eb43d7223e6369d3a3926ca"],["/2018/11/22/2016-06-02-Develop_Tool/index.html","1b9e452f58ddf43d85dee9cad25feb5f"],["/2018/11/22/2018-07-20-ml-linearRegression/index.html","4431db1234f7410772a88fc47036b20e"],["/2018/11/22/2018-07-21-ml-linearRegression-python/index.html","089e6ee67b892071613813d0eb309608"],["/2018/12/01/2018-12-01-python-numerical-sequence/index.html","2e970cc9ff859171dd348f00bb58ad39"],["/2018/12/08/2018-12-8-python-sequence/index.html","5b348068c9b195e064e18562126e11b1"],["/2018/12/09/2018-12-8-python-output/index.html","4ee925f7c620860f4dc390e64a4fdc95"],["/2018/12/11/2018-12-11-python-dict-set/index.html","045a6c3faa901cf748efa7776f891827"],["/2018/12/12/2018-12-12-python-if-while/index.html","05c4ea9a83786223e2e04958970c8991"],["/2018/12/12/2018-12-13-python-main/index.html","b866671061b03049d97de04fbac23431"],["/2018/12/13/2018-09-16-html-readme/index.html","4ef5602abbac3c4091253c3860f68b95"],["/2018/12/13/2018-09-17-html-title/index.html","edaa1d80bd3360914e5f48bac0dd42be"],["/2018/12/13/2018-09-18-html-br/index.html","32ea3963d8806f1e5763193e9521273f"],["/2018/12/13/2018-09-19-html-div/index.html","ca4abb6d689314f03ecd287397b26a93"],["/2018/12/13/2018-09-20-html-img/index.html","e417d3433092756320fe2de5408d5d67"],["/2018/12/13/2018-09-21-html-URL/index.html","2fb7ffd6adb4c00799700275a15b26c4"],["/2018/12/13/2018-09-22-html-list/index.html","ef6fab8f55b62a7bbce2532e9847a8d0"],["/2018/12/13/2018-09-23-html-table/index.html","e153bbd8757adde524a05f9f66f5e66c"],["/2018/12/13/2018-09-24-html-form/index.html","2a87ba2a1f1e3c6e30eaa57f5fca61af"],["/2018/12/13/2018-09-25-html-iframe/index.html","3589f424f7b116e0bc2fad06aa88ed3a"],["/2018/12/14/2018-12-14-python-function/index.html","30f4ea5faaaf93292c005a214d1708e7"],["/2018/12/14/2018-12-15-python-class/index.html","73990744a0dc902929bc7167f65df0dc"],["/2018/12/14/2018-12-16-python-magic/index.html","3b77b120490dde6e10f68a7bf748428a"],["/2018/12/19/2018-12-17-python-@/index.html","6dd80e34d38a82ec4a95711af824244a"],["/2018/12/19/2018-12-18-python-file/index.html","4a7e7797d9181d1c45398acb82b2f32b"],["/2018/12/19/2018-12-19-python-error/index.html","d7f13ffdd33cab6e38a2751deb9a10f2"],["/about/index.html","9fb45b6cbca68daee9e95c9cbf35c7c5"],["/archives/2015/08/index.html","14a66609cd671060d54ea6204b0da364"],["/archives/2015/index.html","4d26d421d36df15a5b7ccec4fda74dad"],["/archives/2016/07/index.html","0878b690c3ab62d025c84003c537712b"],["/archives/2016/08/index.html","707941af63fc4ae6db790f6961a1b2e4"],["/archives/2016/11/index.html","35642c22dd6e836e0521466de1f0960a"],["/archives/2016/index.html","0839dce401f3fefabf620e355acbd12a"],["/archives/2018/07/index.html","2187f7fc1bcc279a73a0c6a609c19014"],["/archives/2018/08/index.html","9eb66984a5bbe1ef241050d490e2cf21"],["/archives/2018/08/page/2/index.html","cc153f6e3753d2358b3c01d816323975"],["/archives/2018/08/page/3/index.html","08aaedc68154d6061c3aef6bdf9d323e"],["/archives/2018/09/index.html","bf3c86063776dd5744e6ea554c5953d7"],["/archives/2018/09/page/2/index.html","99c523207e5197d14e068a6d6d8d0ad5"],["/archives/2018/10/index.html","7ad3819523c495976d03b5768cbd3fe9"],["/archives/2018/10/page/2/index.html","5f1d3896edc986607f628e146b79a800"],["/archives/2018/11/index.html","ae1fe0a08bba0f4b84a0353a14500ea2"],["/archives/2018/11/page/2/index.html","44ac93389f71c308bf30c8310db41e81"],["/archives/2018/12/index.html","0104cc2416abfc9a2f07249d9a23402c"],["/archives/2018/12/page/2/index.html","42111185acb4e506c78596d639657e32"],["/archives/2018/12/page/3/index.html","ae3ee8d9eb56f8c531a110a6d37108f3"],["/archives/2018/index.html","0fa6cbd1c217426bccee8a60294ebbce"],["/archives/2018/page/10/index.html","09e1dc27d66325fd8ee43d22dfdd3fe8"],["/archives/2018/page/11/index.html","8c5cc37c0340aa50376f17fc9ede36ad"],["/archives/2018/page/12/index.html","3ee3533af59293ed44012c6ceec7a991"],["/archives/2018/page/2/index.html","f9cba533592363ceb03e97ef9ae644be"],["/archives/2018/page/3/index.html","4a13a79a48568c74cd93bfb6c4e554f5"],["/archives/2018/page/4/index.html","5e8a298686bea35ea986f51122380c92"],["/archives/2018/page/5/index.html","64a8ab2edc0f4652ba7be8de8da98750"],["/archives/2018/page/6/index.html","178afeccbfbb75223bb35f8144053dd3"],["/archives/2018/page/7/index.html","00aa662a0aeaa4575d0a48b780183a93"],["/archives/2018/page/8/index.html","bdee3d3133b349d010266b97a5469b30"],["/archives/2018/page/9/index.html","56d648871cdbb90d9ec24ab075dd81eb"],["/archives/index.html","73bad8e3fcfab5c229fa6cf776ce0cfc"],["/archives/page/10/index.html","1366bac97f347449662de9718d139f2c"],["/archives/page/11/index.html","602384fedea6d31719d702ec6c0db636"],["/archives/page/12/index.html","9b1f7d889c4813cb6e38986de3fbee69"],["/archives/page/2/index.html","e2aacd00fbf529ddf46a4f5e6aa16c92"],["/archives/page/3/index.html","71870c0d747f3c99815bcc8c255b3f3f"],["/archives/page/4/index.html","ee73ea2f566db38777d07af2ef18566f"],["/archives/page/5/index.html","746ccbb9baabb0d80451fc5a6fa7945f"],["/archives/page/6/index.html","67da7a8bee0691928ce14743204d8d7c"],["/archives/page/7/index.html","045a94243fb4a384622ee8394a2cb994"],["/archives/page/8/index.html","27868f90886b649bda7b1433a1323a35"],["/archives/page/9/index.html","38304b926d1d1dfc5d09f78f598294e8"],["/categories/Docker/index.html","102971ac1a1e3c7f77467b5f980d17ae"],["/categories/HTML/index.html","27e43fbc22d42619c46a2c97a73d2d0d"],["/categories/LINUX/index.html","24c39d2000c092cbcacee4ed55b0639a"],["/categories/Python/index.html","c71bf0c988a598cec3f9d4c4388a0765"],["/categories/Python/page/2/index.html","06c4ce560620af7d69738aa2189ed04a"],["/categories/Python/page/3/index.html","e82f5b926279042b2c4465e70fa32e5c"],["/categories/index.html","a58cd0c97ef509a265c4458132765368"],["/categories/pytorch/index.html","39b5fb5e135d96fa0cf975c90ce8b3cb"],["/categories/tensorflow/index.html","0cb746f4a8de67b80829e54414856754"],["/categories/工具/index.html","88a2f7ac6f8e20fdf9f8908a58fd5223"],["/categories/开发工具/index.html","c86c91d30acd5afef4e1600bda812fb0"],["/categories/机器学习/index.html","b4a67660f69a20a0a322893505745dc1"],["/categories/机器学习/page/2/index.html","1e65f451920838fac72aa02b7e2a2b11"],["/categories/树莓派/index.html","8c8a4cb0fc36e5b44a0918d1023220b6"],["/categories/深度学习/index.html","80f0c35d467759d7016a9ed65d9f52af"],["/categories/深度学习/page/2/index.html","f726014953c8056b11948c87f8c027b1"],["/categories/深度学习/page/3/index.html","c22028c36f34cdeeff885ae46d864931"],["/categories/深度学习/page/4/index.html","ee55d15bff4d803518189a92e1d841df"],["/categories/算法/index.html","29e538259bf5263909a1fe61ac50ea1f"],["/categories/计算机视觉/index.html","ba4211407f131c76b213d4ee33c7fce4"],["/css/main.css","849fc1824ecd922dd676bdaa3839e5ac"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","a80879cd6eb38ea4678e995e91c48298"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8ee39bf6fed055723e7e4d5de051af42"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/cv/1.png","9f4f5f49612d747ea7e2af9511bf81d8"],["/images/cv/10.png","64042888a4a3f3a4eb0fa61132ec4d2f"],["/images/cv/11.png","a7d130d884954da81b5cb0bb6ec3bc36"],["/images/cv/12.png","78897d4a1ee5b035a6c1fca275d6ee5f"],["/images/cv/13.png","5bddd0353cbbe6bba6397722208f71f0"],["/images/cv/14.png","84703e200ba7bd4c81b00bdd284e995a"],["/images/cv/15.png","9e2fd155d3d155ad7929da9e6ff173f4"],["/images/cv/16.png","11fc9d7abf8eab9eabd3b1b634972df1"],["/images/cv/17.png","4a033e9738210c148a2861e2a595195d"],["/images/cv/18.png","28fef5c46c2f422225f0c6784a0c5134"],["/images/cv/19.png","6f9bf406e55081a45f2d4a7694105aa8"],["/images/cv/2.png","31c2a99f54755c697a66fd612088d5d5"],["/images/cv/20.png","3c583b642ab32b3f0e8c25d702db84e7"],["/images/cv/21.png","a566537a8176f5ad3aefb0a4e3d3a28c"],["/images/cv/22.png","1dbefbc4faf1d6d1667d75e5a6e0ad4c"],["/images/cv/23.png","a19339ed91763c182a8876008b6a65b6"],["/images/cv/24.png","d7b6fbd2e71114ace115874caa3234d8"],["/images/cv/25.png","5d8679bb4738e48ae60291c204fb082b"],["/images/cv/26.png","a621210387b76992c71e377e5b3e787d"],["/images/cv/27.png","cc070ae570b8301c7e48511fd03606a4"],["/images/cv/28.png","19234927e77a2e573d1fcd36c6ab377a"],["/images/cv/29.png","981dc034de4ca4b6e734d1a54783f9c9"],["/images/cv/3.png","e4b7d480e78d5d0c4c6a14fb31b0ed5c"],["/images/cv/30.png","89a24fa0d194fd189e619e5399bc2556"],["/images/cv/31.png","3ebb39656dbc7ff3fe0d53e61edfca4f"],["/images/cv/32.png","9eaf042f7520f23a2c7298f55c0daa84"],["/images/cv/33.png","74898282f2a1f9cb206bcfbf15676aab"],["/images/cv/34.png","0131081dd3bb72e8c15ccabbc5a181b4"],["/images/cv/35.png","8fa06daf89516d71037ad8ad5466430d"],["/images/cv/36.png","6f9bdb37ded9320389993be28956612b"],["/images/cv/37.png","e2d8710a8d1be82ba5c171404a6eeb3c"],["/images/cv/38.png","0fbcf55535e125c43eaaf142a7c16084"],["/images/cv/39.png","0f17b9745c0ee7185f3408ff3e75f6d7"],["/images/cv/4.png","b55154238e33764873083b8463030d3a"],["/images/cv/40.png","352064971be0635581af1446a20bede1"],["/images/cv/41.png","482b4b502b236b800a2e609b273fc479"],["/images/cv/42.png","54f1a474233dedf7ee3fc20c56d23be3"],["/images/cv/43.png","f315e6c996c7f06ace53f7fee13aba7f"],["/images/cv/44.png","d88e6c82ebcf85e6332a5ff18f1d6748"],["/images/cv/45.png","546d355afb836ccafb1dbf1ec6e58c2b"],["/images/cv/46.png","e78e4d34afd63907c64e342d2dd56500"],["/images/cv/47.png","0355f524fce034d2b1d9e49d15f5acf2"],["/images/cv/48.png","0890f1471e76361456983ba205a7323d"],["/images/cv/5.png","eecb4a7bba3f07b8e3025585e7752527"],["/images/cv/6.png","834ccb9069233764f549780478fcf409"],["/images/cv/7.png","61b35bb3b9b78a44a617be9dbbdbddd5"],["/images/cv/8.png","57728a4eef354a0aed3698ad06659e92"],["/images/cv/9.png","60933d0b322df2c82963159b02f716ca"],["/images/dl/1.png","b2d61d37b640c75770a86cf1e89173e0"],["/images/dl/10.png","24f2fa5c727818fc48bf3a6f8068ee58"],["/images/dl/100.png","000f1c2ee2bb7adee780317771fc1178"],["/images/dl/101.png","12d112acec2d7f48e095a61620034ec6"],["/images/dl/102.png","8109c56796810451a8d889b964548a7a"],["/images/dl/103.png","15385609e43d95f81dc4e63fff9199de"],["/images/dl/104.png","897e22d7731a6c8d16ce28a62a739a60"],["/images/dl/105.png","b8a11e56f84cbd023da5c531df5661ba"],["/images/dl/106.png","dd17c8a11f7f5b76a56c38e98019c89a"],["/images/dl/107.png","d9ecc9e1a424bd937bb80da878265e02"],["/images/dl/108.png","92dadc873698dd6b2ef82e704fcbd647"],["/images/dl/109.png","764ba408eb6e5f60b496f3ca28cc83f6"],["/images/dl/11.png","34a8bbc88a333fc1c814e516a170afbc"],["/images/dl/110.png","7fa7ddcaf13c866e940aa176cc9abc2c"],["/images/dl/111.png","9c8b8224afbaf9da7a133e4fb47db202"],["/images/dl/112.png","85a50866d113ec1a5b74f6a2429465ac"],["/images/dl/113.png","f6b40f980ccc3bfdb8612b3df7d26681"],["/images/dl/114.png","7ac6605df0aa00d89b33b46935480ec7"],["/images/dl/115.png","a7925e77be39580d582d23f1ae2c2d7c"],["/images/dl/116.png","291b5652dd7b1e5a0a22ec5888dd0ae6"],["/images/dl/117.png","36483a1cda4bba80601aca92598db2ee"],["/images/dl/118.png","cc10fd547e2094b82e90bc3392b714d1"],["/images/dl/119.png","712089d980526e5239253638703980aa"],["/images/dl/12.png","edbd20c0f9be696722864416805f8ab2"],["/images/dl/120.png","94d4ed5a2a8db1d03192b10098415b3f"],["/images/dl/121.gif","a2afa892b7b37c37871701f374e4b5ad"],["/images/dl/122.png","0ea990077c7f9144c9321f3ed9c56bf9"],["/images/dl/123.png","be8c221c9306341acac8f91bf097cdbd"],["/images/dl/124.png","5c61222626f4efca142fdc78d62a4fe4"],["/images/dl/125.png","b1b458a4e0ad89f06e34e436673489ef"],["/images/dl/126.png","e91bbeef4c4a56ade881fb668addfab2"],["/images/dl/127.jpg","3f4dd207f75f3869c6e744120624fc8f"],["/images/dl/13.png","dd2781bbd52cd08b85822b27e704b223"],["/images/dl/14.png","a4f4a768b9e09d0edb0fb2b61bd6d890"],["/images/dl/15.png","11ccd1c7126bdada66328b00acd38ba4"],["/images/dl/16.png","431eca388a571f6ae2c97f355d4269ae"],["/images/dl/17.png","c785b250216adeb5bb3f7dd344e7e2f3"],["/images/dl/18.png","d0dd40f0001931557dafce3aa70e3f5a"],["/images/dl/19.png","e4aaac069b33a7fea0149cf0b220b2f3"],["/images/dl/2.png","488e19f06f5be0baa222ebc4ebf1f42f"],["/images/dl/20.png","4156882cdf4536bd465bf20630af6356"],["/images/dl/21.png","b215a29f6ecdd03485d9e0a45c9f786e"],["/images/dl/22.png","a96b71719979b2f64d394ecf26191dc1"],["/images/dl/23.png","049c7f3f8c8fb2b62f1ee23fffb1f94a"],["/images/dl/24.png","e311ddc1bc77c0069fc4c653d268f8de"],["/images/dl/25.png","2eabfc24c384e106ae088fa0d080e219"],["/images/dl/26.png","cb13ad3a876f65abfd9bedd5eab6d50d"],["/images/dl/27.png","a652a08f3b6e0b9b82a5556c26e15ea1"],["/images/dl/28.png","3726c0ea2c92a818dd385a8a9237187a"],["/images/dl/29.png","d202d133bd5e7142daf150ea2c300ee1"],["/images/dl/3.png","32643ac5d88e9288e6a91c545228f870"],["/images/dl/30.png","4a6eb0c7c5f7cae3430dd73266286610"],["/images/dl/31.png","230dd5d7b594b13641024ca7c16af9e6"],["/images/dl/32.png","bad29ccda756fa14816c2b7a3d5d60e1"],["/images/dl/33.png","6b47a20743481a7c84cafdddf7aa2b15"],["/images/dl/34.png","544f56c796819c8a2bd76e2008d73b3d"],["/images/dl/35.png","69a494d534a93002d5052f96d54458ea"],["/images/dl/36.png","c7cff050ff6232ad5827e4e0bca493c2"],["/images/dl/37.png","00861b87acf6f356ab7e36cc2f3b8f75"],["/images/dl/38.png","308794ff0c29eda49e3c9f7e72f193d6"],["/images/dl/39.png","031796e81c3dadb6d2c6521ecf824728"],["/images/dl/4.png","b13463143252da800adf2134fdcca283"],["/images/dl/40.png","9193fdaea78a9ecfb2ce346bc2245e62"],["/images/dl/41.png","6efe6e2ed3fa4763693fa7808675a717"],["/images/dl/42.png","e41671954c7e6efa4a80ed2827723a39"],["/images/dl/43.png","d616cae510f75ff0ba75532f13afb680"],["/images/dl/44.png","a1df61f0242f00b7b3dec380f2b82a5e"],["/images/dl/45.png","9880d436563d3e748d4a97219a932de0"],["/images/dl/46.png","ee3823c14cbbc0c4e719d8fa2b70284e"],["/images/dl/47.png","a9654809288507227ddf5091381bd52a"],["/images/dl/48.png","a7f47763bca3b758e0377e4eb3697014"],["/images/dl/49.png","c8b694fc337ffd2822a82ea078a7fd94"],["/images/dl/5.png","ccc04cbc94995b21ae682ed9a9b4b0e4"],["/images/dl/50.png","0b74840b70c5362adbb1ae4d831daa40"],["/images/dl/51.png","add48b535c67dd7ba2d89c2b47d62e4d"],["/images/dl/52.png","ebd47a5ef3557d1857288ea842ed846f"],["/images/dl/53.png","6543b1ebd8f9e1eee6867ac98c377656"],["/images/dl/54.png","e42c09127df542958d6790eb239e2703"],["/images/dl/55.png","0f3bb7248a6e465c0f04c44fd7102458"],["/images/dl/56.png","15ec6905fa793e164de60e8dfd016e50"],["/images/dl/57.png","3a1615a4dae148791518372dfca9684f"],["/images/dl/58.png","5babc414eadaabf475ea5310705d42da"],["/images/dl/59.png","de74751a92a1fa9d22241269545fa578"],["/images/dl/6.png","0c7b467b8c118601b3e4b72e8ee00009"],["/images/dl/60.png","92221b8c62fce1c98467d355237d2986"],["/images/dl/61.png","b77632cd591a92dbfd4cb3a2f3eb707e"],["/images/dl/62.png","f5eca88a4d1b4ff99462d6004037c0b1"],["/images/dl/63.png","2d596bc4776088dc2d7f12035cf9625b"],["/images/dl/64.png","0be91314f6ce792e335eea451fb432ac"],["/images/dl/65.png","cfb0302ad749c7ee33c3a4c0fd048cb3"],["/images/dl/66.png","99a4396798a3703de705d5ef583cc53c"],["/images/dl/67.png","c814ee1f17b1b6e023a2959ecea105f4"],["/images/dl/68.png","32e5647c3a3262d28abd2c801a2499b4"],["/images/dl/69.gif","6428cf505ac1e9e1cf462e1ec8fe9a68"],["/images/dl/7.png","1f98a655f5df7b72a03645ee48043dc3"],["/images/dl/70.gif","cb80c7a8c655585f38038c4876381722"],["/images/dl/71.png","26d9cc4df1edfe2c7ce2b3bec07fcf93"],["/images/dl/72.png","de5ad70ced9e378b87cc5cc3e5068ade"],["/images/dl/73.png","8704e85c81f02d3148f5013f928e622b"],["/images/dl/74.png","40148a094025824911637637e6f0a71b"],["/images/dl/75.gif","2cdd2ec54569879ca045e0ed090f34a5"],["/images/dl/76.gif","395aa82f1e59cf80e8e17a9209bc22f2"],["/images/dl/77.gif","510c9a35e6f332d4d042e3154a59355c"],["/images/dl/78.gif","8a63c07ac20ee5e5097b8a9e9327012a"],["/images/dl/79.gif","9e9a49afd76a80bda8a6362e6a32dc1c"],["/images/dl/8.png","58c486bb84f43765a4b1c0170b17ed3c"],["/images/dl/80.gif","4a87f84b588768c5b5fddb2b000b92d5"],["/images/dl/81.png","c6557ae392175f3284cff96ede632ca3"],["/images/dl/82.png","8c6e03a4ce27b1546860f1a4994ded2f"],["/images/dl/83.png","3230fe6ea57bf3bb56197b60c744873b"],["/images/dl/84.png","b32db2843c3da7a1434e07286a767202"],["/images/dl/85.png","aaaeb673c62631407bc0417bf30a2209"],["/images/dl/86.png","cc201aa344c97773b92d4a24a3eb4756"],["/images/dl/87.png","153a890f1412bea4542d568d2f071fc7"],["/images/dl/88.png","effc36ef946164373a8bf243961d88a1"],["/images/dl/89.png","2686299a083de7d34f0f4215884ca4a7"],["/images/dl/9.png","07509d765897a7512d5beb635d3c4179"],["/images/dl/90.png","a56a0f6071eb3fcdb76968b4a32d5e5c"],["/images/dl/91.png","6ee325d3906f10f2793fbb01e489930a"],["/images/dl/92.png","0c8d438c12bce0260b16cf270db56f0b"],["/images/dl/93.png","6c92ffc515ccbe08a5abd79a3cb80b9c"],["/images/dl/94.png","808edd0a07d8cbabf336dd9dca8d4a26"],["/images/dl/95.png","45f3b7701551fa7df5f9be047c75500a"],["/images/dl/96.png","9a3c4effe6fba0aae2fb580155c4c55d"],["/images/dl/97.png","bd2706173398f50c2831c4e192b9f352"],["/images/dl/98.png","37d39a650706f2df9b766fe478e52587"],["/images/dl/99.png","058d5dbc14ded7c21715436648e21181"],["/images/docker/1.png","052bebd4e60c59be51857684e5e6fc0c"],["/images/docker/2.png","28f04eea1e73e7c0e0c466756c9c2c62"],["/images/docker/3.png","82a26c321e81043540818baaea77eb38"],["/images/docker/4.png","367c99cdceb0f81b378c075904c88644"],["/images/docker/5.png","e414ffe973288941a51e9cde7d92bb71"],["/images/docker/6.png","d559cb65466a900edb0d7983917ec37c"],["/images/docker/7.png","ac71dea1600d19598053c5607e7975a1"],["/images/docker/8.png","d9b777921984636623864ec2b250e298"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/math/1.png","be08ac320a3fafd4b6cb9a2a820a3b42"],["/images/math/2.png","82c7788477186d13876fa2783fb31305"],["/images/math/3.png","c4dbdce9ea65b388f307e4c2b6701c7a"],["/images/ml/1.png","0614e4691064abbff74cb69212e2a466"],["/images/ml/10.png","ee1e7358cde8b8137ce684b0c4365e04"],["/images/ml/11.png","c86479f988d4dc6b87074724f42e35f7"],["/images/ml/12.png","35ff221fa6ca14c635bfef76cc5a2991"],["/images/ml/13.png","f1bc25e32ad10b0d7b0c9ede788a5b88"],["/images/ml/14.png","2f592eda3505117752f6719aba65edac"],["/images/ml/15.png","0c8117df94fa4c145e2c2943e2247ec0"],["/images/ml/16.png","5705759f62883d83028290a0933e5c86"],["/images/ml/17.png","eed841d914da17d258adc9852c83b745"],["/images/ml/18.png","7863315ccc29fb1c24e27d2a5fcd477c"],["/images/ml/19.png","e3307673fa4d5889a52012dff9c03ceb"],["/images/ml/2.png","9d72b6ab1efe7d92a0f75e376681e549"],["/images/ml/20.png","73daa252e5311ade27160a65cc61c9a7"],["/images/ml/21.png","2749400036f8bba7beaa0ab3224f5389"],["/images/ml/22.png","aadd1c4aa269c129958a013d84e42492"],["/images/ml/23.png","80937bc77f36a5d6310ddbde34c091ed"],["/images/ml/24.png","810369b827c1d376ae5a0e6bbf0c2761"],["/images/ml/25.png","8ba5410eb67aa3cb734596ab0b7abbf3"],["/images/ml/26.png","e702d97bf87a16ac98d9b96357a50224"],["/images/ml/27.png","eb5810d90beb005e0921b5bdce4278cb"],["/images/ml/28.png","daf6146665cd93ff43b7c0537d26931b"],["/images/ml/29.png","faf61ee7aef34289909db13712731ef5"],["/images/ml/3.png","05763899f89a3aec00df11ea2a7a976c"],["/images/ml/30.png","521f8749d93cc41c604307333b8ecb20"],["/images/ml/31.png","61e322d57e7a6468cbca48304ae94cd4"],["/images/ml/32.png","6ec323b582e8562c93c1d6640f4d807e"],["/images/ml/33.png","0d1cdd5ecbf216003f28746db2b33b6d"],["/images/ml/34.png","64b7033aec57515e301161d85f8e4e30"],["/images/ml/35.png","edf088702e0177920a94b3508bec7ec7"],["/images/ml/36.png","fb5a9ddea3a45786bdf11c415e147896"],["/images/ml/37.png","60914873dae6567b8e68ec45ec6b59dd"],["/images/ml/38.png","2b8b5cff6aa6292c46ac594c30027790"],["/images/ml/39.png","1d3d3d21aac91a1e4a2b16c45345d3b7"],["/images/ml/4.png","d1d10f45e987ea4af1c4b7086c5f745b"],["/images/ml/40.png","772e151cc0187377b8640b6769125b96"],["/images/ml/41.png","481ba1d4954007c7eb74aa89f44cc220"],["/images/ml/42.png","3b812196cfcc9fd92a8eae2eba443cfb"],["/images/ml/43.png","cd5f999f7915a1797b3a4c1bd1a63484"],["/images/ml/44.png","37eb471cb2476713b4491a3d747e8f5c"],["/images/ml/45.png","df3980f9a53928768f0949eab0dda0f6"],["/images/ml/46.png","d9a4bc126242de84d18bf1a616961bc3"],["/images/ml/47.png","ecc436ba7ba75ec5c422ecdd700219d6"],["/images/ml/48.png","a154e7896b59f7c4feb7fd9869350494"],["/images/ml/49.png","e9cc736869a7161cfefc7e1961c2d9aa"],["/images/ml/5.png","884a734410b3627a14981c481b27c583"],["/images/ml/50.png","6900e08fcd02c9a9bcac17b1c7d68fad"],["/images/ml/51.png","1ecd25e8788aac72f2f6d2440ebdccde"],["/images/ml/52.png","e8a96085b9487570772875b5f40c5a64"],["/images/ml/53.png","6ed613d5f1a4465a670ee7557dd29575"],["/images/ml/54.png","4fba1f8adf3b0bac8f6cd911016e97d9"],["/images/ml/55.png","f772762d3dc7b6927ca73e276bacd35c"],["/images/ml/56.png","20827caf527ef20652b21adb8e143e96"],["/images/ml/57.png","3bfb68f2234dfdb64aa5286d49a04f79"],["/images/ml/58.png","291a3424c7bff0afa585bfa7f09d67de"],["/images/ml/6.png","bbd2772718a23a1102b2201f78413d6a"],["/images/ml/7.png","c753cbfb65ed9638e82e5d0140028f82"],["/images/ml/8.png","0432f07c0cec1708d787798042156c21"],["/images/ml/9.png","2870280e8d3cedaee23818114a3cc02e"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/py/1.png","15b7ebe86935d45e017776bdd2e2e2d7"],["/images/py/10.png","30a401b3d7e75a8e237f0b805f583e4b"],["/images/py/11.png","59051625b36f69ecb18a6174a04b4368"],["/images/py/12.png","0738f0be3b1b72d1f66f6ec218d76675"],["/images/py/13.png","aabc1941943d19cd9c26b4c97b991415"],["/images/py/14.png","f09e867b7e33ab28bb509208efdd4928"],["/images/py/15.png","af9b8898e56514fa1c060e35d316066c"],["/images/py/16.png","ba5ec4e869bae45070e08f64788ecfbe"],["/images/py/17.png","82fe7ec533b75c5b9ed5e677f57eeaa9"],["/images/py/18.png","f651173cc0a9b4a8dcbdd495f73f882c"],["/images/py/19.png","db20315678cbcad8dd4f0d4bd72cb991"],["/images/py/2.png","589c0581b9b1da7112120f6a1f320fc3"],["/images/py/20.png","7670ef568945df192b81f0dc0f3d3f7f"],["/images/py/21.png","dffafdf930d818b664746a166cbb97bd"],["/images/py/22.png","e42a0fc9bec94fcd5207dd39ee46dc5f"],["/images/py/23.png","729ce256675ed1b5be435ba49e07d5fe"],["/images/py/24.png","3178aad732fb3a59fd6b9f0522d0c84e"],["/images/py/25.png","23dee90b7ba96de076a6bfbc7e9f9fc8"],["/images/py/26.png","5f27264c4cc5f1066086d4a6dafe68df"],["/images/py/27.png","2a30cc59399a637db839057f86d8c331"],["/images/py/28.png","f8ddf9a9bdfb76086c414c8561a7c756"],["/images/py/29.png","e6a08a36098bc987d119f57a9b273829"],["/images/py/3.png","46d73ca2a738a321e189608497c35b78"],["/images/py/30.png","aaad070ba988fc223be70b8be8d1a694"],["/images/py/31.png","2190bbadd784c89153ca10aacaa212d7"],["/images/py/32.png","4ebc4497b4ffff11e8ed5bb12a592cee"],["/images/py/33.png","a912118468c632d485625969bbe13b28"],["/images/py/34.png","8647e22d53f209413add44e80c22aaf0"],["/images/py/35.png","f98376dfc1b6b6885ce35e0e29831c12"],["/images/py/36.png","63b48f45c30f1f4274506b01ccd2aaae"],["/images/py/37.png","66a568168cb34596f4d2b61f701f0c41"],["/images/py/38.png","4ec3117c6e4660417f25420015680ef0"],["/images/py/39.png","1d31399d3f0ef916447931f88ce3398d"],["/images/py/4.png","beabd345ad64e22ed6750c13f7d35e90"],["/images/py/40.png","7b19dffc350d03bcf0de1c9477e93105"],["/images/py/41.png","593c6b113bc67e90339d819616bd1277"],["/images/py/42.png","20c75a35c4a4b07faf07daf9475ce1ff"],["/images/py/43.png","6c673a7ef4a3fc5ea9169a3fbd61f80e"],["/images/py/44.png","2334590711560011876de8c746b18604"],["/images/py/45.png","1441f705d69261450da8c5233ab02d0f"],["/images/py/46.png","616c6ab2d9c8eb007952017c7452d6d7"],["/images/py/47.png","004175268fd9029f7d09d1503670370f"],["/images/py/48.png","489330b4f78c3796b20042589808f8bd"],["/images/py/49.png","58a224ddfb5f57a12f48f3b4e3cbd0d0"],["/images/py/5.png","771c59a4e854122793a682f106fa08e5"],["/images/py/50.png","bfa901b645deced8dd1f9a8c26778f25"],["/images/py/51.png","2ffadace686f78c1414244d872d398fc"],["/images/py/52.png","2e3ec0d057d100e4e8ea5f0212e5c998"],["/images/py/53.png","17bb9979be17d13b90357c57139da462"],["/images/py/54.png","c23d69845f72a73fa3e2f1fb84771c56"],["/images/py/55.png","8535760aff99ceb4b556f7b97796d94c"],["/images/py/56.png","59ec9ba92d7ccd2c716228a1a8455ccb"],["/images/py/57.png","15bc87041ac4b1c7b3525b314fb7ef66"],["/images/py/58.png","5f94f3e9e9c6e104566bbb1b600e1fac"],["/images/py/59.png","bea377ca62ca75ab5d71c430b0355931"],["/images/py/6.png","833af6f79eead78a0888a42a24a7c35b"],["/images/py/60.png","ea730c5befdab80ca63dbcce82b3e4b9"],["/images/py/61.png","a6562d29f44817c17e7be41238aaad7b"],["/images/py/62.png","7d457435369276895070e3dd61c9462a"],["/images/py/63.png","91015ba12e25b0f895687581ce6bcb25"],["/images/py/64.png","20a15a250b09f9e4604ab3550b9700c3"],["/images/py/65.png","fe52bf0b2570638b2d22d72a27152e1c"],["/images/py/66.png","d3025a5e94f7bc525362d1f2e7745078"],["/images/py/67.png","2f7ca0e327c55df4f003210905190792"],["/images/py/68.png","6f7279dbb187720b89c66250c986e965"],["/images/py/69.png","a44c673d20cbcf45db156036bd983034"],["/images/py/7.png","d947a703f79658536cb2750914637ffa"],["/images/py/70.png","8a87dfa24f54a8547ef6826d3b6289f4"],["/images/py/8.png","20b867d8137281e9c3a40b802df75680"],["/images/py/9.png","e4639c570e7f7a04e90439456ad297c5"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/reptile/1.png","6d0aa92af42a4647977a03707bade702"],["/images/reptile/10.png","79f309da23b6b5b8b9effd25cc20abd9"],["/images/reptile/11.png","e60854e61ed69c6cccb12196fd947705"],["/images/reptile/12.png","ae4ac9f4065966955a3f31fa4b2292f3"],["/images/reptile/13.png","676486c8247467e9580da2febad95414"],["/images/reptile/2.jpg","f722e57e21e3d76ebedb6667bfd44aed"],["/images/reptile/3.png","b4161135bc5a889337f36a3a0c20dc6f"],["/images/reptile/4.png","73b18e616e9134ffc1aaeb4ed1c29dfb"],["/images/reptile/5.png","318877d0e3a7337773fc301d6c5118eb"],["/images/reptile/6.png","f39ae0da0e1d343ec162f5db6ade59fc"],["/images/reptile/7.png","26491b8984ce6b22c76ebb6372f912f0"],["/images/reptile/8.png","15bdc5c257f7c109f184f9872c57b2d5"],["/images/reptile/9.png","92e8ffd5026d530e630b6ba90c23236f"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/tools/1.jpg","5bf773e6fdaf0c6573c4578ea232dc21"],["/images/wechatpay.jpg","07f0995337e2a1c8d2357e5659ec120b"],["/index.html","01ba29f6d92a39842ef239eeaa0da6ae"],["/js/src/affix.js","fc85a71947bf333ca43bc176ec3c028f"],["/js/src/algolia-search.js","4ed15349223096b1d6ea4a220c850aef"],["/js/src/bootstrap.js","afed7a4f9e0741deb37eca2ee4baaf91"],["/js/src/exturl.js","9a0d1241ebbc91fcd0f951b1f958f73f"],["/js/src/hook-duoshuo.js","7aac6f04c46136c0b5eaf6d4e1842144"],["/js/src/instantclick.min.js","a20b6a8dcf16dc2acbd052b901203093"],["/js/src/js.cookie.js","e35064a383b0b67b2ff67898cfa6949c"],["/js/src/motion.js","cdaf0e5230275e41f84c56d05fc36cac"],["/js/src/post-details.js","46ac6048d082e062901b64e57b2715c1"],["/js/src/schemes/pisces.js","43e399c1a9e0d7260d46d0096af18f26"],["/js/src/scroll-cookie.js","989cc71a94c0c7b2a831ef7dd506eac9"],["/js/src/scrollspy.js","6012be67c664a41e44ecef566e739aeb"],["/js/src/utils.js","83faa5588338224338d961adc0c51c6d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","56ed861b33e289cd8910b750be8d96bd"],["/lib/Han/dist/han.js","d90ec2e75dac208a6c343f2516bbe98a"],["/lib/Han/dist/han.min.css","989dbba04e168eeb1f99017fed17559a"],["/lib/Han/dist/han.min.js","5e3575040579b282e16d0330e66121f8"],["/lib/algolia-instant-search/instantsearch.min.css","5ecad13de9c81f0ce43e8ceb417ed727"],["/lib/algolia-instant-search/instantsearch.min.js","15fa76c42eba14b55812cea82d6bc87d"],["/lib/canvas-nest/canvas-nest.min.js","d266bea33e0dff2869a20429f7d3201d"],["/lib/canvas-ribbon/canvas-ribbon.js","eaf57c5e22a662ae268db996efa9c4bc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","ac28870401bb49e9ee5717244d8496ae"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b7c158e886290d32ebfde84df3e6ed34"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","96519b76bd19bf5748fee9c9464274e9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ba296f35e78177c776d44d0042e68e1c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","fb71de816ed46fdfc9c9ff75a0caa5f2"],["/lib/fancybox/source/jquery.fancybox.css","00032c5933e338edb3b540991d10c5eb"],["/lib/fancybox/source/jquery.fancybox.js","a5d3f8b2ce618b3adb0424c8693fc456"],["/lib/fancybox/source/jquery.fancybox.pack.js","28efad9c13ab7e8b410395446610af1d"],["/lib/fastclick/README.html","576e3d541b91d6393e0960cc5065d5b1"],["/lib/fastclick/lib/fastclick.js","39134bf40df72fa751243044a813df23"],["/lib/fastclick/lib/fastclick.min.js","d20c79b831a8452d201dc6654cb78763"],["/lib/font-awesome/css/font-awesome.css","50c8745d2dabefd4782895d158b4522b"],["/lib/font-awesome/css/font-awesome.min.css","50c8745d2dabefd4782895d158b4522b"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","204830e4afa5f30c6e34b9188462e71a"],["/lib/jquery_lazyload/CONTRIBUTING.html","5679b009d70d2823bdf01fd3e7f5c9cf"],["/lib/jquery_lazyload/README.html","7be12c2abe4a0856c5f6ede56031ad9e"],["/lib/jquery_lazyload/jquery.lazyload.js","c6c2d91cdcb20399dcf770e0dcec7f5a"],["/lib/jquery_lazyload/jquery.scrollstop.js","417866a11b2469d84b86034a0a03b313"],["/lib/needsharebutton/font-embedded.css","207fd11221c3b65e1a7b0df31635fd2c"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","9ea85ed00f284fd56f732ca9579f89c3"],["/lib/pace/pace-theme-barber-shop.min.css","33e543ebb475b1404e26f6da3c15da84"],["/lib/pace/pace-theme-big-counter.min.css","f866d1ec9917a13cc9052176d2ad34ae"],["/lib/pace/pace-theme-bounce.min.css","6d70ca3ca85865ecc332da3aa22682a2"],["/lib/pace/pace-theme-center-atom.min.css","8194ff6632622d89c4cb786e1989ee29"],["/lib/pace/pace-theme-center-circle.min.css","d42248495d07d481677697164ed746ec"],["/lib/pace/pace-theme-center-radar.min.css","428244735853a354efe42d47933cf9fc"],["/lib/pace/pace-theme-center-simple.min.css","8282ed524784ef4c6ee9e34843e9f9f3"],["/lib/pace/pace-theme-corner-indicator.min.css","d28f518965ad26f96a25f390ea75a0c3"],["/lib/pace/pace-theme-fill-left.min.css","3f4c60c5d24d0143db982e76896bb1fd"],["/lib/pace/pace-theme-flash.min.css","9446e96864747a9092d93a5938abf9ee"],["/lib/pace/pace-theme-loading-bar.min.css","0b349cecfcf0b8ab43d39bd3a6f4ee89"],["/lib/pace/pace-theme-mac-osx.min.css","bde9fda7e585f4e5f54f67295c803227"],["/lib/pace/pace-theme-minimal.min.css","fbed1cea8017a7b886b307f6a6e859de"],["/lib/pace/pace.min.js","e502117ba84a6a2bb3d965bebeb48f6b"],["/lib/three/canvas_lines.min.js","a0e4ca23dab3b7144b4d4f636f319cc2"],["/lib/three/canvas_sphere.min.js","ebb27ea8225fea85cc2f781a0e436a0e"],["/lib/three/three-waves.min.js","cda5cfb90567b01b120f0fe9e1bf0acb"],["/lib/three/three.min.js","6942845370106c4cc7906bff2aab53f0"],["/lib/ua-parser-js/dist/ua-parser.min.js","472a0d710f3527a9dfd2d7595647297c"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a5d0a99abfd3b01e7003d9994f3f9bfc"],["/lib/velocity/velocity.js","74062d188cc03c1f827ff779df6c9429"],["/lib/velocity/velocity.min.js","4a3c0b465f7ccc67effafb7920b6e415"],["/lib/velocity/velocity.ui.js","2088906fcd3295930e72290f7813868c"],["/lib/velocity/velocity.ui.min.js","11bb53cbbb9e1644920cb9687c95f5d7"],["/page/10/index.html","794b59dd9b51c672ebeaf9f5b5858d08"],["/page/11/index.html","59db7158c96759f0fbc208f36e383c27"],["/page/12/index.html","d26e7b0e443116c6def87e5c1edf6580"],["/page/2/index.html","223006462dcc1451234cbf9ebb38efe0"],["/page/3/index.html","c86bedf0e784f273952a096f327584d6"],["/page/4/index.html","1198cdf1063e18cd4bd81cafe2e2016c"],["/page/5/index.html","135596646da96160c8680641fe0b869c"],["/page/6/index.html","2dd7b424de33120a4e4dd9b1023c2848"],["/page/7/index.html","8031c85deb6c46a7259b22f4fc637005"],["/page/8/index.html","f5c690cdfc3a2f3381bcf43745a594c1"],["/page/9/index.html","257ba32caea913b2c47583efd551aacd"],["/sw-register.js","e2845dd44cf6938925fbedd99ea6fb6b"],["/tags/CNN/index.html","74deae51170ffa85f4fcd391102679d9"],["/tags/DNN/index.html","ec8337b0f9625745acf819406e286705"],["/tags/DeepLearning/index.html","0f9a03be511660771c5729fb6461fa2f"],["/tags/DeepLearning/page/2/index.html","d6fa7d1cd65436dc006be3804556e6be"],["/tags/DeepLearning/page/3/index.html","1a17643baa47c4c57bc7d0c8d93ebace"],["/tags/DeepLearning/page/4/index.html","6430e77a5e3ffcd54d5f3a18e1171931"],["/tags/DeepLearning/page/5/index.html","14495061b5351d914f0e3f2dae1ff24c"],["/tags/EM/index.html","cc466dcd6fd06c191954377c7c290cba"],["/tags/GAN/index.html","b65629cf6d5dfb52cf0036f8b51fa3b2"],["/tags/GIT运用/index.html","d3f8c21f5acfd34e234d06ebb0f5612a"],["/tags/HTML基础/index.html","c89b3e94f63725fcdff4488d8973996d"],["/tags/Keras/index.html","cec461bfc57a455f69a6be9715e68ff4"],["/tags/MachineLearning/index.html","aa9c41e6ed153c93f3cf871f345589b8"],["/tags/Python/index.html","ca889f1412713d0d80ffee098c4dece3"],["/tags/Python/page/2/index.html","3d7ffad8ea0094d2a2f67fac7c0c2d59"],["/tags/Python基础/index.html","c776b4bbe8929d830c0db71ae9e36a83"],["/tags/Python基础/page/2/index.html","6b36ac24af719650644eb6d09c61e734"],["/tags/RNN/index.html","26a9ec266832367f9dafbf5890516f7c"],["/tags/TensorFlow/index.html","26ff2057f004f3d5cf4c0490b784b15c"],["/tags/TensorFlow/page/2/index.html","47e5cd2422fd39e2856955c1a1a5eea6"],["/tags/TensorFlow/page/3/index.html","589d35593ec2ffa6b3d482cbd6c18816"],["/tags/anaconda/index.html","4904a3ce179470ae43269379eed5429a"],["/tags/docker/index.html","7114d04991cdd0088583392d9777055a"],["/tags/git/index.html","e4b259eaaef4986a923cef3cfae5da18"],["/tags/index.html","73cf38d6f10cf0d709fd4a15661f9ba5"],["/tags/ios/index.html","9dbb290d48b97098427acc5385a41dd3"],["/tags/linux/index.html","0c53ca5c96a59901ce7a91d8d58ac5bb"],["/tags/markdown/index.html","469da0a192735454c14c83df8b4cf8aa"],["/tags/network/index.html","d14ef48db32ed7d2737c88648516f1fa"],["/tags/opencv/index.html","824559fe938541dbfba269aefea39555"],["/tags/pip/index.html","31812b72d04790f60aa07b0d268abc5a"],["/tags/pycharm/index.html","1d2d5d6d1c6e733ede1afc3deaa2d759"],["/tags/svm/index.html","105cbe6a17f3f3d429d251b5df34a0e6"],["/tags/ubuntu/index.html","544795167dc40177a8b33321a6a31886"],["/tags/优化算法/index.html","b3d55420ff3b9893a8096b6234cae342"],["/tags/决策树/index.html","b32cbea415954d1ccb8c139bfdc671df"],["/tags/反向传播/index.html","647e1c9c7c46a1146ecbd456ef3715e9"],["/tags/声卡/index.html","a4233d356168b6a63fe2df025ba5c277"],["/tags/安装/index.html","b8c79a415dcea6bea1287467f0ee6f06"],["/tags/开发工具/index.html","a91c3c6a03530ed65dd3cb783346fc6b"],["/tags/开机/index.html","632abbb872ab2ceac616024b2ea82e87"],["/tags/朴素贝叶斯/index.html","6e61e95fc4787dcf721299c41d20638f"],["/tags/核函数/index.html","a61f0eb65eae78c0861758981d345e63"],["/tags/梯度下降/index.html","4bae7b76b26413d1503a6fbe8d4f884c"],["/tags/神经网络/index.html","cfd8bd734f1a043b978403f92692ba41"],["/tags/线性回归/index.html","ee2ac608a3869b1d0d0cd2143a7b7099"],["/tags/聚类/index.html","c8376bb6941b74defb6cc479e97ce78b"],["/tags/自动化/index.html","4cf90aa3e3e9a9e4f6add2f58bb36d18"],["/tags/贝叶斯网络/index.html","93a083d63f41cad3df6660ae1572d2f2"],["/tags/软间隔和正则化/index.html","6ec6f33159e92791da4fba3aaf559ece"],["/tags/逻辑回归/index.html","bcf2234ed8198d63f67d872307c48cb5"],["/tags/随机森林/index.html","bcc796d7601fcee1e96ba802e912679c"]];
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
