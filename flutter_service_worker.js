'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "adlcp_rootv1p2.xsd": "e2d3872c7509f6e3f1fc7ab7c07eee52",
"assets/AssetManifest.json": "1ae14186df248694622aa96601fbdd5c",
"assets/assets/animations/ali/idle/idle.zip": "90dc0045e4599443e5357f33683e6c7c",
"assets/assets/animations/ali/talking/talking.zip": "3ac82a17e893234c4ed02b322b4ece07",
"assets/assets/animations/ali/upset/upset.zip": "a12a49b0320179ef24191bb17c80fe7a",
"assets/assets/animations/ali/upsetIdle/upsetIdle.zip": "ba8df609b297ff08d550599c6ff607a0",
"assets/assets/animations/ali/waiting/waiting.zip": "3e726d5f3e3198a13d63eaeacb04f22f",
"assets/assets/animations/ali/walking/walking.zip": "a11f333f1eca1cd1ec55aac63794cdee",
"assets/assets/animations/ali/walkingback/walkingback.zip": "12d4022e6f2774007a21ecb53e953611",
"assets/assets/animations/anum/anxious/anxious.zip": "8f2c0fa324fed708f9e7bcd6ae9e7566",
"assets/assets/animations/anum/anxiousIdle/anxiousIdle.zip": "344102eac1789a5741b082503c1d7f26",
"assets/assets/animations/anum/calling/calling.zip": "8230cbae2dd07fcef282cfbb3781a825",
"assets/assets/animations/anum/idle/idle.zip": "a17d47db94ef2a1d11af5f38b2a44e95",
"assets/assets/animations/anum/returning/returning.zip": "32b29f43aa716b00999ca1fda10bb434",
"assets/assets/animations/anum/talking/talking.zip": "f22cf6e9f137c167c05097d50871fbda",
"assets/assets/animations/anum/walking/walking.zip": "7b80faeddb5a4a4e8464e52fa90af5ff",
"assets/assets/animations/books/books.zip": "d5ee2b92900102f7e44bfade6e371032",
"assets/assets/animations/brain/brain.zip": "84924245c08b6095b6f2a6b994513b99",
"assets/assets/animations/bubble/bubble.zip": "e9000786b4bb4ab57d3ed093caf7cf8d",
"assets/assets/animations/cafe_employee/cafe_employee.zip": "dbbf72ddaf4017a5bea59b8ba66fbbb4",
"assets/assets/animations/cafe_game/cafe_game.zip": "18d453d186f75562ecd5658e7f6ee1a3",
"assets/assets/animations/cafe_instruction/cafe_instruction.zip": "aa96874a2631b7f6ae39dfed11948d61",
"assets/assets/animations/call_animation/call_animation.zip": "b06d3683b0aeca57e9656e663a16e9ee",
"assets/assets/animations/circles/circles.json": "92fbf1a4a5b00455fffba72e5ba92a33",
"assets/assets/animations/collaborative/collaborative.zip": "be51004bbdcda5955a550c9c60fd10a9",
"assets/assets/animations/comprehensive/comprehensive1.zip": "6515a92d7d957fa435e5e4854416f967",
"assets/assets/animations/comprehensive/comprehensive2.zip": "6ec69d7bffd75108ce22b7b91f6fc4e7",
"assets/assets/animations/comprehensive/comprehensive3.zip": "d1263ce89f778111b2f15691af85f193",
"assets/assets/animations/comprehensive/comprehensive4.zip": "d53a3b91f6d86b1e9ab2d3bf60a3ef42",
"assets/assets/animations/comprehensive/comprehensive5.zip": "02cc0f161d0587165cb0c5bcfd5e9a3f",
"assets/assets/animations/comprehensive/comprehensive6.zip": "1de90874cdc32787f712711239e4cc99",
"assets/assets/animations/comprehensive/comprehensive7.zip": "019357fc161bc578356f492ad3a59bc7",
"assets/assets/animations/customer1/customer1.zip": "bcdae7ce8c3282a02319ffd54c435b28",
"assets/assets/animations/customer1/customer1Happy.zip": "eff797952052242832b2432821ee3b25",
"assets/assets/animations/customer2/customer2.zip": "df1aac970ae88db157c1647428eb9d5b",
"assets/assets/animations/customer2/customer2Happy.zip": "2bb8749182346b92c87df8a987ae0d3b",
"assets/assets/animations/customer3/customer3.zip": "773c0ed21f5c0fc36aec9c6d6f1470b0",
"assets/assets/animations/customer3/customer3Happy.zip": "22a2f8ac26dfc5e379827179a21f1c5f",
"assets/assets/animations/customer3/customer3Idle.zip": "8cd19885fde2fa95d577b4a2396e06a1",
"assets/assets/animations/customer4/customer4.zip": "07d611b3ef2fb6830316d2f2599707ab",
"assets/assets/animations/customer4/customer4Happy.zip": "2fc31d37d913e4e4de6f10f8c25ba4e4",
"assets/assets/animations/customer5/customer5.zip": "766a630fdb15fa9efaebbc55ea20444d",
"assets/assets/animations/customer5/customer5Happy.zip": "1ef920f77677a75fd9637ee06cabf7f6",
"assets/assets/animations/customer6/customer6.zip": "ddfd64253e65b0cf9208075a51de2f45",
"assets/assets/animations/customer6/customer6Happy.zip": "e0bad0ae7b8335eaadffa7757c02800e",
"assets/assets/animations/empathy_findings/empathy_findings.zip": "313d02a2d13e9693beb162f8f1488e1c",
"assets/assets/animations/empathy_map2/empathy_map2.zip": "1cb100eeee8cc41a86d218cc3e9f0e5e",
"assets/assets/animations/empthy_map/empthy_map.zip": "4c2a93e81d2262f58f1dd0bfa443b3bf",
"assets/assets/animations/empty_box/empty_box.zip": "785f6d039dfc3e9a08febd91730f8cf1",
"assets/assets/animations/hamza/calling/calling.zip": "4df024f105bec44b52216c3f317795ac",
"assets/assets/animations/hamza/idle/idle.zip": "53ab5730ce8f84ec12937195a8709d54",
"assets/assets/animations/hamza/idle_chair/idle_chair.zip": "ea3a3982be9452fe119c736caeb4fec4",
"assets/assets/animations/hamza/onchair/onchair.zip": "8b4e191dd4f4bcab34826a5b5d801cc7",
"assets/assets/animations/head/head.zip": "bf67c86bfc77be7c8ede1f135a04e03f",
"assets/assets/animations/hour_glass/hour_glass.zip": "9a72afeb46d40bfae3d3a7ca44ce51da",
"assets/assets/animations/howmightwe/howmightwe.zip": "a02f2576abe30ddb9437c5a6beb9d1e6",
"assets/assets/animations/isomatric/isomatric.zip": "99f78c7d3674cd0a9c7f7bce6cd0f376",
"assets/assets/animations/isomatric2/isomatric2.zip": "e1f7c22690b9ebb7b69a1621ca92f554",
"assets/assets/animations/level4_instruction/level4_instruction.zip": "ef30f18613d9bf543b4bc115015c1706",
"assets/assets/animations/man/man.zip": "386b89083933bae608cdcf9585f097d2",
"assets/assets/animations/map/map.zip": "1a6f28431421123526437ac9edaaa5cd",
"assets/assets/animations/mother/mother.zip": "fea77cfa1cdf39d8c5941f1d43c47583",
"assets/assets/animations/mustafa/disappointed/disappointed.zip": "94597b5c2edd5c736e834efb9160c895",
"assets/assets/animations/mustafa/disappointedIdle/disappointedIdle.zip": "0ad052985f099948d44f70d79d973882",
"assets/assets/animations/mustafa/idle/idle.zip": "415746a7a6b64ea8be5e7576fbd3a0da",
"assets/assets/animations/mustafa/talking/talking.zip": "5725704d613c45ccfc6d7c55a4eddd1f",
"assets/assets/animations/mustafa/walking/walking.zip": "b18455b735d2913a030f4ab0c806433f",
"assets/assets/animations/mustafa/walkingback/walkingback.zip": "16e8d82efa6597edd32ea8c99205cdf9",
"assets/assets/animations/objectives/objectives.zip": "2944109bc1766e9445e6e370116e2f30",
"assets/assets/animations/other_cafe/other_cafe.zip": "2f4111fde3075547c211acc92dd438a0",
"assets/assets/animations/other_cafe_owner/other_cafe_owner.zip": "3aeca71ec2ebe0b7dd3667c8a4c1add3",
"assets/assets/animations/puzzle_instruction/puzzle_instruction.zip": "2a2efec283e71d84e0517786c9b22032",
"assets/assets/animations/sara/back.zip": "57234aba045c857606b1dc72dfe660a9",
"assets/assets/animations/sara/callidle.zip": "83250c7d8b1919b43f67cbf96a5c67fd",
"assets/assets/animations/sara/calling.zip": "7f7b3b12b5905827fbb7fda1e32c52a4",
"assets/assets/animations/sara/handing_coffee.zip": "7d59dac317795f7266b6e1ec606788a8",
"assets/assets/animations/sara/handing_order.zip": "c5b550ab91f7cd0b8dce7f943f1b7fe7",
"assets/assets/animations/sara/happy.zip": "dc498102738e362dd3cfa6252aeb9350",
"assets/assets/animations/sara/hat.zip": "2e1e99660c4722b1ed2af0f56ec4dea6",
"assets/assets/animations/sara/idle.zip": "619032a1201f657c7a24ce7b104c4a0c",
"assets/assets/animations/sara/sad.zip": "28745449398347adc9b7d248fb163916",
"assets/assets/animations/sara/stairs.zip": "154c6d01c5bb8c9acf0412689a4a9794",
"assets/assets/animations/sara/talking.zip": "efc37fb13ffb9ea4ca98d98d798017e2",
"assets/assets/animations/sara/waiting.zip": "027411d824d7fa2b340d54a5a9fca2e4",
"assets/assets/animations/sara/walking.zip": "fb63b0854b502c214e5f5fa574f0b7b0",
"assets/assets/animations/sara/working.zip": "a7726aedb092ce0a75fc13d3d13f636b",
"assets/assets/animations/sara/writing.zip": "366ad521d690c912eae09aef5a6b381e",
"assets/assets/animations/secondquiz_instruction/secondquiz_instruction.zip": "add3af9ac6dc1ce00d20bd1a232eeef7",
"assets/assets/animations/shop/shop.zip": "add270e30d08b0dac7ec1dc2a98a257d",
"assets/assets/animations/tools/tools.zip": "0688fa91edf91102111a0805b6bc503f",
"assets/assets/animations/tv/tv.zip": "9c55737582c5e29338775c355487fbae",
"assets/assets/animations/user_needs/user_needs.zip": "886d498365d968d737fe65d8d2d5bdbe",
"assets/assets/animations/usman/back/back.zip": "33f175c509decba5ac3635199affcd38",
"assets/assets/animations/usman/callidle/callidle.zip": "31e2bb035753990e64c5b25e21aaa0f7",
"assets/assets/animations/usman/calling/calling.zip": "71d89435f6ceff075efc1570988fc788",
"assets/assets/animations/usman/front/front.zip": "8ba089542daa3f4efab1f907aa548dc9",
"assets/assets/animations/usman/handing_bag/handing_bag.json": "2b6b9bb8fe3f1fef7fa0027e081950cb",
"assets/assets/animations/usman/handing_bag/handing_bag.zip": "71c86cfa734136b2849dc4a43b7753cd",
"assets/assets/animations/usman/handing_coffee/handing_coffee.zip": "497a6105b1d4b40a1e9c002844c7ef76",
"assets/assets/animations/usman/happy/happy.zip": "8aa2441b7cd376cc2c296b4e829bad65",
"assets/assets/animations/usman/hat/hat.zip": "7b9acb96e7536caa65e93d7c361a95f1",
"assets/assets/animations/usman/idle/idle.zip": "5423193918f2ada04fdbb29867c0413f",
"assets/assets/animations/usman/sad/sad.zip": "e6c99fdb682e0f616ab242e34eb474e6",
"assets/assets/animations/usman/sherlock/sherlock.zip": "e644248332779dd54d0e85bdad006044",
"assets/assets/animations/usman/stairs/stairs.zip": "12b653c2eb5c843a7583b31de7e0cef0",
"assets/assets/animations/usman/talking/talking.zip": "26b88c73c34708fa9ca9cd7ee6711ead",
"assets/assets/animations/usman/waiting/waiting.zip": "5470afac5177979d2490c72588d673d4",
"assets/assets/animations/usman/walk/walking.zip": "cabbcc8cd43a12bfa9ba18e3ab6c35f3",
"assets/assets/animations/usman/working/working.zip": "01b0f054a7d05dc513be5cf0b307e192",
"assets/assets/animations/usman/writing/writing.zip": "d6d0f8bf804f4d1c52ae0963c26021e2",
"assets/assets/animations/voting_instructions/voting_instructions.zip": "abafc180374be9fa79da8a7f66d8e857",
"assets/assets/images/ali.png": "27a62fa5262c2688489ba2e25501c530",
"assets/assets/images/ali_full.png": "50b2258f290541d865f1e2221864a7c1",
"assets/assets/images/all_hapy.png": "d1e01b2a2d0ab18087472168149d4e70",
"assets/assets/images/anum.png": "e7539f24df92e38cd0cdeca6f6b25591",
"assets/assets/images/anum_full.png": "125e76abcb86ffe2ef563ac680076d9c",
"assets/assets/images/Asset%252019.png": "d640df46dc1d70654e9281407d1902ef",
"assets/assets/images/cafe_background.png": "d645deaed2fba315c5e7069f0c987d36",
"assets/assets/images/character.png": "e2aa7cdf1637b48c68bdaccd5c39fc5a",
"assets/assets/images/coffee_cup.png": "e6d1c8b22d7535d520d1f1d58eb4eeeb",
"assets/assets/images/coffee_machine.png": "41b0af14d03b0476bfadfc286b652f2e",
"assets/assets/images/coin.png": "4116f24691bdc3314f7a33e1cc9ce4d5",
"assets/assets/images/comprihesive.png": "55a4f81c241e31579572f089f6f9dd5d",
"assets/assets/images/congratulation.png": "591029455dd51e0bfc1a23bb9f2544c7",
"assets/assets/images/congratulation2.png": "cebbe9c563c38e07d8c8ba83c7a3581f",
"assets/assets/images/congratulation3.png": "28b884ea8908dfc989ac8c947279ec90",
"assets/assets/images/cup.png": "1b2877f96fd093f92dca48cd120c360d",
"assets/assets/images/define.png": "551cae59611f66a753cc0fa195ebf101",
"assets/assets/images/empathize.png": "64c55dfa9fa260ee8ab4c02b80c5489d",
"assets/assets/images/employee.png": "3cbab261f18ede043e1e6ddddf1c6071",
"assets/assets/images/empty_cups.png": "1bab59918b37529904de20af59f2c992",
"assets/assets/images/failed_level4.png": "8ea1d41cb24ff5bd9227b3be970db476",
"assets/assets/images/female_character.png": "cbab3f68abc77c819f0e7ea8eee14df3",
"assets/assets/images/floor.png": "ffa6e47ffe2f155c96f745a7b546d76f",
"assets/assets/images/icon.png": "ace47abe70d9985c3ba925a1396802d6",
"assets/assets/images/ideate.png": "48f217012f8e0ad70ff149bdfc9c9123",
"assets/assets/images/img_0.png": "9660bf17688576e8eaa95055f01084e2",
"assets/assets/images/img_1.png": "e684a0c3590f8ccb6229f3c900ea8116",
"assets/assets/images/img_2.png": "ced6d9e107b8ed74591d3689a71f981a",
"assets/assets/images/img_3.png": "789ff6f7d3915dd0f8b8343256c53e64",
"assets/assets/images/img_4.png": "4d1caab1ac74d0e180b624e6741108e0",
"assets/assets/images/img_5.png": "25c8e6120b28f3b30b166a374532510c",
"assets/assets/images/img_6.png": "9a5985af9830a7238bcca19dba95ad05",
"assets/assets/images/img_7.png": "cffdaf86675fdd003a025281df572120",
"assets/assets/images/info_icon.png": "ace47abe70d9985c3ba925a1396802d6",
"assets/assets/images/intwish.png": "1ab99e2180231cc9ba1de341b37a51b5",
"assets/assets/images/level_1.png": "e8748a24d4bf279040b12601db4eb335",
"assets/assets/images/level_2.png": "74a80fce4042bfe67f7e240dbf71bad9",
"assets/assets/images/level_3.png": "17a025efe35476eb04e3765fecadc96c",
"assets/assets/images/level_4.png": "a375b0b4847301e85eba4cd26974a41e",
"assets/assets/images/machine.png": "ce71356ceadcb45fa489f119ee740ab1",
"assets/assets/images/mustafa.png": "07670a41edf78e24f4f0f9e3015e9eef",
"assets/assets/images/mustafa_full.png": "a08c04db9374db388afb935c8f56725c",
"assets/assets/images/note_1.png": "2bb050ef98e29f1a4eedb4b0542de31d",
"assets/assets/images/note_2.png": "9cf394eb218fd84b580d94651b5c5e12",
"assets/assets/images/note_3.png": "d8d23369415359ee1694ffeb4ed45bae",
"assets/assets/images/note_4.png": "d570eff80348e61221cc5e132b3a6bf0",
"assets/assets/images/plant.png": "5a10c9eb0c2dd8cd5e09ca0875301a3e",
"assets/assets/images/prototype.png": "7022cd9cb6f98fb273194a5f29150d53",
"assets/assets/images/puzzle/complete.png": "20b067a80579a85bb4fcd84f5a2dc90a",
"assets/assets/images/puzzle/part_1.png": "d62bd7d05265ef86280b3b253170380f",
"assets/assets/images/puzzle/part_2.png": "8b0f16dce996644f14215a23ab848ec8",
"assets/assets/images/puzzle/part_3.png": "e3297044a81ff0d1c6aa8911880029f9",
"assets/assets/images/puzzle/part_4.png": "c64f6ce5eb771b8ec1d904b1e8b32b93",
"assets/assets/images/puzzle_ali.png": "1ad702aab30f75041732cb75d6be0a04",
"assets/assets/images/puzzle_anum.png": "c092f80fa582321150ccc9855dfe0b14",
"assets/assets/images/puzzle_mustafa.png": "5ef99755a0866b40dbacd11d77b56f69",
"assets/assets/images/rack.png": "b17040b0d18ae64999b22e08c8e1ba81",
"assets/assets/images/sandwich.png": "6857947935ec3a6e1e34cfb0794bf81b",
"assets/assets/images/selection_bg.png": "441615b396336f4fc05591894441c96a",
"assets/assets/images/solutions.png": "2e9b6164172be08096e75a63bdb6cd57",
"assets/assets/images/stool.png": "ae61918f0f1bc4aa1c6ad158301bba46",
"assets/assets/images/table.png": "32c2508072c60254498f09a236f130c6",
"assets/assets/images/tests.png": "d1d00ea81ce304e6a000a2ec68334484",
"assets/assets/images/title_bar.png": "8a77278c0a10f29ca832dd3173f5b528",
"assets/assets/images/toaster.png": "a8e8711afcb8edfbc9dd9eae77296356",
"assets/assets/images/window.png": "7202deaabe37f0710b6e5778ae051452",
"assets/assets/rive/data.json": "23edb642bb7385424f7d5ea6fe5e3cb5",
"assets/assets/rive/images/img_0.png": "09ebaa9b2db9a0faf1c9d32ca0343c96",
"assets/assets/rive/images/img_1.png": "2037b9e0ab934aba1b4a65d00580fbb6",
"assets/assets/rive/images/img_10.png": "b3eaaae48cea56facd7d1805ceb37945",
"assets/assets/rive/images/img_11.png": "57af77551be6479c0c4d7a0cf4744190",
"assets/assets/rive/images/img_12.png": "18c4013687c3925c855021838ee6d196",
"assets/assets/rive/images/img_13.png": "ed6d27b19d690d04df8fd372109a2e12",
"assets/assets/rive/images/img_14.png": "e7c0d2748e7745f4db23c4ab252f5475",
"assets/assets/rive/images/img_15.png": "c0b2af0375852487b1ba539cb7544833",
"assets/assets/rive/images/img_16.png": "faa3aca189a4fac15f3af8a792576e69",
"assets/assets/rive/images/img_17.png": "4304483367accc06a00d32988660b975",
"assets/assets/rive/images/img_18.png": "b5804a8bd6e4b83c62c678b52febff4f",
"assets/assets/rive/images/img_19.png": "30111bdaa844e9e2edbb4c0d0fb025a1",
"assets/assets/rive/images/img_2.png": "5024ace73d9ce64caf2bd06928c8cc64",
"assets/assets/rive/images/img_20.png": "7baf48f5f92626e4b671ec7ac10303de",
"assets/assets/rive/images/img_21.png": "a5e65f71da582bbaf3630a6b8fc1fdad",
"assets/assets/rive/images/img_22.png": "e5a8274fd7ae718910e5f10014dbf6dc",
"assets/assets/rive/images/img_23.png": "f261f29c0760234c142cdfa0608f8076",
"assets/assets/rive/images/img_24.png": "5c42df31e9ef35e2035b876c415365b2",
"assets/assets/rive/images/img_25.png": "4f091782388ae51a5c92ec90005a8c8b",
"assets/assets/rive/images/img_26.png": "806b1239e27bf288926c092fb294177f",
"assets/assets/rive/images/img_27.png": "156c67183f42dfe42bfc4f73dad2ab3a",
"assets/assets/rive/images/img_28.png": "a5bacaa237d0caace3d2be8959491360",
"assets/assets/rive/images/img_29.png": "f8bbebcc7997e63a065672c6f96da752",
"assets/assets/rive/images/img_3.png": "6a4fa7a3bec02756b6a4a3b8c6d1d8d6",
"assets/assets/rive/images/img_30.png": "b54194e6c8af7676227b08380d098979",
"assets/assets/rive/images/img_31.png": "d59309d24d24e84d3786414412c380b6",
"assets/assets/rive/images/img_32.png": "6943ce2bd8ee10adaef42c5c605f8346",
"assets/assets/rive/images/img_33.png": "00343069d2e6747a71930b2b67dc3633",
"assets/assets/rive/images/img_34.png": "a9f7ce3fa9f459dd0160b828c59c46fb",
"assets/assets/rive/images/img_35.png": "ee190f00adddabb31c28322159c9c4bc",
"assets/assets/rive/images/img_36.png": "ac2f45a09a53412abe42053978564951",
"assets/assets/rive/images/img_4.png": "a948aed69f27422bbca2106f6c5676a7",
"assets/assets/rive/images/img_5.png": "91cf6ddf8aa053cefe41defefa920b84",
"assets/assets/rive/images/img_6.png": "a4f1c7f620f3264ae626cef3bfab8f65",
"assets/assets/rive/images/img_7.png": "d8f28bea3adcf5bfddeff2378536e027",
"assets/assets/rive/images/img_8.png": "ccbd79991a20bac52747f05374e247f1",
"assets/assets/rive/images/img_9.png": "4587578dd758d05d79b04b7d07a67317",
"assets/assets/rive/new_animation.json": "58454e5055b56fee73264ff8e7caa26b",
"assets/assets/rive/new_animation.zip": "3e7eb998c62ad0fe46f45a3902a2c8a5",
"assets/assets/rive/splash.mp4": "e14db36b2e8303289fb54790908477ff",
"assets/assets/voiceovers/after_call/after_call_1.mp3": "a3d523b74dd496dd5c84b3e8426c4f9d",
"assets/assets/voiceovers/after_call/after_call_10.mp3": "948ed3a35980e2740f15496da48328c4",
"assets/assets/voiceovers/after_call/after_call_11.mp3": "bc9c459903946bb59648c5ec15f8b770",
"assets/assets/voiceovers/after_call/after_call_2.mp3": "21ed24c85597fb948fd5b5bf06c0549c",
"assets/assets/voiceovers/after_call/after_call_3.mp3": "abbc61dc8c70f75d4d857f62a54b37c6",
"assets/assets/voiceovers/after_call/after_call_4.mp3": "0ad21b3a93db2a8820270d991512c86a",
"assets/assets/voiceovers/after_call/after_call_5.mp3": "ed754e62b7f02132f634448dea0039a8",
"assets/assets/voiceovers/after_call/after_call_6.mp3": "5613d9b7ab99a1d851b3fa2a244fd5da",
"assets/assets/voiceovers/after_call/after_call_7.mp3": "831a2680da9ea164059a09f1c7273208",
"assets/assets/voiceovers/after_call/after_call_8.mp3": "d6b92931c44960adf297a42c18c10722",
"assets/assets/voiceovers/after_call/after_call_9.mp3": "a200ca1ab09016190c9838f43f43baa4",
"assets/assets/voiceovers/background.mp3": "9f9ab27663284fffde4a38be3085bb96",
"assets/assets/voiceovers/call/call_1.mp3": "5126bb681368317bee31b4143b2e7975",
"assets/assets/voiceovers/call/call_2.mp3": "6e1367d07a63750c50aab3b5a3cd4e52",
"assets/assets/voiceovers/click.mp3": "0524716ba94bcfb84bec875c4f7f6320",
"assets/assets/voiceovers/correct.wav": "83a6663f1be140ad2094d00889059ad3",
"assets/assets/voiceovers/info/info_1.mp3": "7beb6e59122300f00f926d2961e8a5d8",
"assets/assets/voiceovers/info/info_2.mp3": "d40f48c5f5888e340d203d72de65643d",
"assets/assets/voiceovers/info/info_3.mp3": "17e8c0f476a20d27dab8d98083c892e9",
"assets/assets/voiceovers/info/info_4.mp3": "dfe2fc72bedd0f8b2ba22b6001159471",
"assets/assets/voiceovers/info/info_5.mp3": "6691f3fa25baad3e243577180c86134e",
"assets/assets/voiceovers/last/last_1.mp3": "ac8cd8ceb95adfd58626764d35a167ae",
"assets/assets/voiceovers/last/last_2.mp3": "0236ed8af98daf02fb33a27f6dbab74f",
"assets/assets/voiceovers/last/last_3.mp3": "916316da225ad3e175f46b48a67b44d2",
"assets/assets/voiceovers/last/last_4.mp3": "90091766ac364a5dc18d569449f01ff0",
"assets/assets/voiceovers/level1/level_1_1.mp3": "1df13d6b6e8112126ff3b817098e441c",
"assets/assets/voiceovers/level1/level_1_10.mp3": "a8615b036701d439da1d73eaed8089b1",
"assets/assets/voiceovers/level1/level_1_11.mp3": "39147cb508b92acd2ea81eadf3894abb",
"assets/assets/voiceovers/level1/level_1_12.mp3": "b3128d517f61116aeae570109809a040",
"assets/assets/voiceovers/level1/level_1_13.mp3": "65775bfb5d77ebf207725d5103fcaabc",
"assets/assets/voiceovers/level1/level_1_14.mp3": "a2576abc769ccb1a2ed767994f3b75c4",
"assets/assets/voiceovers/level1/level_1_15.mp3": "ec4e17bb0bd109c084368b364671c955",
"assets/assets/voiceovers/level1/level_1_16.mp3": "ec22c1840d9282c4787c7926856a0f01",
"assets/assets/voiceovers/level1/level_1_17.mp3": "5583ddcaeba5fa69a9ebcf537e93817c",
"assets/assets/voiceovers/level1/level_1_18.mp3": "d3dd9cc4d1d089324cb680ffb4b23973",
"assets/assets/voiceovers/level1/level_1_19.mp3": "c327480b0ee29b74215696d57d3a882f",
"assets/assets/voiceovers/level1/level_1_2.mp3": "ed949ad280b3cbd5402c7951954d6b8e",
"assets/assets/voiceovers/level1/level_1_20.mp3": "56b280b50620e0ae3055e361cb7eb5ed",
"assets/assets/voiceovers/level1/level_1_21.mp3": "88a98de58ae6c1836397e3bafcfe547e",
"assets/assets/voiceovers/level1/level_1_22.mp3": "e74f830d6a0c5cb0812e135c90d47925",
"assets/assets/voiceovers/level1/level_1_23.mp3": "6a260619d46c6bc7061635cd56a4e3a9",
"assets/assets/voiceovers/level1/level_1_24.mp3": "77b7e815b113ad53cf17abc5e754b974",
"assets/assets/voiceovers/level1/level_1_25.mp3": "3ca7802626396f7510a93c92f09160e0",
"assets/assets/voiceovers/level1/level_1_26.mp3": "de9127345825e7fae170e4e678b232d2",
"assets/assets/voiceovers/level1/level_1_27.mp3": "184b2e16134f088ddd70b1aaa7d4a338",
"assets/assets/voiceovers/level1/level_1_28.mp3": "b70ef5758488113bf75031cb254ac0ae",
"assets/assets/voiceovers/level1/level_1_29.mp3": "62cb144e447a35a372f36e4fced71dba",
"assets/assets/voiceovers/level1/level_1_3.mp3": "730246d9e6af3882242e611fc619cf31",
"assets/assets/voiceovers/level1/level_1_30.mp3": "178236f88f88b415ed239b712a6fff40",
"assets/assets/voiceovers/level1/level_1_31.mp3": "5b6b6eeb1c70a6ecbadaf081b13245ce",
"assets/assets/voiceovers/level1/level_1_32.mp3": "645cff79f5a82a0be3293d5c863891ab",
"assets/assets/voiceovers/level1/level_1_33.mp3": "49dd39a76207008b93c119fb45cdfb77",
"assets/assets/voiceovers/level1/level_1_34.mp3": "5f32a450d180962ba16498fb208c9320",
"assets/assets/voiceovers/level1/level_1_35.mp3": "277a92e0e56023708fa93a45c194aeda",
"assets/assets/voiceovers/level1/level_1_4.mp3": "fd8f415f7f8219709b797095810c8ea2",
"assets/assets/voiceovers/level1/level_1_5.mp3": "358dd3b70d727f677429ee0c9078a5fd",
"assets/assets/voiceovers/level1/level_1_6.mp3": "1d04b744edb1cdc6e1dbac9f3d056315",
"assets/assets/voiceovers/level1/level_1_7.mp3": "5eaac2cab559d6f920f2e6cdcfafdc8b",
"assets/assets/voiceovers/level1/level_1_8.mp3": "1667899a6983633ccdd6210aa82142b7",
"assets/assets/voiceovers/level1/level_1_9.mp3": "1c1c2e7fd00b9077ff0402a54f71b28f",
"assets/assets/voiceovers/level2/level_2_1.mp3": "b5e885c3444193a1f1d04bd47cd3fdc4",
"assets/assets/voiceovers/level2/level_2_10.mp3": "1c4bbe2b41328ed955e286480e76e647",
"assets/assets/voiceovers/level2/level_2_11.mp3": "71a1743bf1b2847a13f63d24863f8db0",
"assets/assets/voiceovers/level2/level_2_12.mp3": "34ff03dbfafd0062905e763f0aca6766",
"assets/assets/voiceovers/level2/level_2_2.mp3": "acf43251331ca95c782a7f15f0982ad0",
"assets/assets/voiceovers/level2/level_2_3.mp3": "df2a5a4e07be8e6766f321c856d13e45",
"assets/assets/voiceovers/level2/level_2_4.mp3": "f37fb6675322e08501f616bdf088076e",
"assets/assets/voiceovers/level2/level_2_5.mp3": "91d6d09d2e1873716427c6cc2f9de69a",
"assets/assets/voiceovers/level2/level_2_6.mp3": "a4319f37b4b266637a17cae95ca8e098",
"assets/assets/voiceovers/level2/level_2_7.mp3": "1d7cb6aacbd73a50c840aa05b502f788",
"assets/assets/voiceovers/level2/level_2_8.mp3": "39ae3000a8dd2597ee4524aea5ca0fbe",
"assets/assets/voiceovers/level2/level_2_9.mp3": "ca7cf184e7a768ace88cc2c3fb1088da",
"assets/assets/voiceovers/level3/level_3_1.mp3": "2e5252db7ee46a887d8075bc120ef5a7",
"assets/assets/voiceovers/level3/level_3_10.mp3": "51c047adf01479c26f90853701920a34",
"assets/assets/voiceovers/level3/level_3_11.mp3": "a0e83cb68e43fbfe834fabc3e39b5e3c",
"assets/assets/voiceovers/level3/level_3_12.mp3": "a02b694f85793c4ac9549cbccf1a5c67",
"assets/assets/voiceovers/level3/level_3_13.mp3": "ba77c054ea0e4172955f1a35b1d05d2a",
"assets/assets/voiceovers/level3/level_3_14.mp3": "c83b3661f54c1213e2e93ad189d88b0c",
"assets/assets/voiceovers/level3/level_3_15.mp3": "5f888774183604e5519847319f0e687d",
"assets/assets/voiceovers/level3/level_3_16.mp3": "a9a7db6a44bfeb2af0fcdeea67c1b9cd",
"assets/assets/voiceovers/level3/level_3_17.mp3": "1a5cb966b1cb2d2a5d6ddb7dba2f3066",
"assets/assets/voiceovers/level3/level_3_18.mp3": "a3480aaa3b28dee5fd2f43deb49fd54f",
"assets/assets/voiceovers/level3/level_3_2.mp3": "a2ed2fcfb49ef0b6eca0a7e4cf35eaa1",
"assets/assets/voiceovers/level3/level_3_3.mp3": "a8ab562f35f94377dd9191130ad31ad4",
"assets/assets/voiceovers/level3/level_3_4.mp3": "84e9c8ae71031e50ad17daa51dc23075",
"assets/assets/voiceovers/level3/level_3_5.mp3": "eff27e67945dbaf772461a43a2ed546b",
"assets/assets/voiceovers/level3/level_3_6.mp3": "8cfd453be9cdb1504edde5dafc339ee4",
"assets/assets/voiceovers/level3/level_3_7.mp3": "91e889e86a07e153c8d35e0ccc412ba3",
"assets/assets/voiceovers/level3/level_3_8.mp3": "09390a9331f959fe63a6d1000e8afd9d",
"assets/assets/voiceovers/level3/level_3_9.mp3": "3f419f0d76f89e5c2700e9e3c620658b",
"assets/assets/voiceovers/level4/level_4_1.mp3": "d3f2bb3cb8dd6aaaaf51ee8d4ecd18cb",
"assets/assets/voiceovers/level4/level_4_2.mp3": "6baf06f7efe935bc8d59fb7e41974bfc",
"assets/assets/voiceovers/level4/level_4_3.mp3": "b163f8089112cdec91be83682a9dc6c7",
"assets/assets/voiceovers/level4/level_4_4.mp3": "34669a12389d054f685131ded85f7dd9",
"assets/assets/voiceovers/level4/level_4_5.mp3": "cf9ee2662d0feb53a1417d690fd9236f",
"assets/assets/voiceovers/level4/level_4_6.mp3": "3060b51395d1392fb6fd31de01042988",
"assets/assets/voiceovers/level4/level_4_7.mp3": "040300cbc7d00fa1fcf0a523d300d899",
"assets/assets/voiceovers/other/completed_1.mp3": "f6140fea6a50db4ddff252ea61f988b7",
"assets/assets/voiceovers/other/complete_level_1.mp3": "a7c13a709f304783c1d5ebe5f9b0a1c4",
"assets/assets/voiceovers/other/complete_level_2.mp3": "119e0e0849f369cdd99372680e779ebe",
"assets/assets/voiceovers/other/complete_level_3.mp3": "c6434046729fe67d9347c17272fdde7d",
"assets/assets/voiceovers/other/complete_level_4.mp3": "d05c56ca85825842615ecdb9b2ab861a",
"assets/assets/voiceovers/other/level3CompleteVoice.mp3": "9d299191530a9ffd161949ecc2b575aa",
"assets/assets/voiceovers/other/map.mp3": "07eff23abed1707774e48a272fb3b5fe",
"assets/assets/voiceovers/other/start_level_1.mp3": "a787cfdd84001116e06ef59627c23650",
"assets/assets/voiceovers/other/start_level_2.mp3": "aac96ef40d58a30ac3ea0ac4b951b27f",
"assets/assets/voiceovers/other/start_level_3.mp3": "eefd95676d6f7638294bca6cdd69de83",
"assets/assets/voiceovers/other/start_level_4.mp3": "c31294a744ed64533f67b33c0b945b6e",
"assets/assets/voiceovers/other_cafe/other_cafe_1.mp3": "dd2f9df73cc4954ad1ad5eafe02d8f03",
"assets/assets/voiceovers/other_cafe/other_cafe_2.mp3": "78b138fc9d1b835dd34672167892ed1b",
"assets/assets/voiceovers/quiz/quiz_0.mp3": "bd8368247306cfeb81055ee27fc25072",
"assets/assets/voiceovers/quiz/quiz_1.mp3": "0c3d9824129c5046af31096a965233c3",
"assets/assets/voiceovers/quiz/quiz_2.mp3": "a78d903dc349f3764fb15b88dee64293",
"assets/assets/voiceovers/quiz/quiz_3.mp3": "aeca71a02a25ebaf7b1ea3f74c09e7bc",
"assets/assets/voiceovers/sara/after_call_1.mp3": "4897333bb96c507e83f827ee159f2eab",
"assets/assets/voiceovers/sara/after_call_10.mp3": "4a78f7a76aabe410ea585c2cd622d80d",
"assets/assets/voiceovers/sara/after_call_5.mp3": "5c1cb16330c6cc70e9d6b53b4310b8fd",
"assets/assets/voiceovers/sara/call_1.mp3": "8bf0893662652a821dd9b5ae3619342f",
"assets/assets/voiceovers/sara/call_2.mp3": "d3670981ac7f2996d774de19a086e872",
"assets/assets/voiceovers/sara/last_2.mp3": "7613481d72dda3ee5a9451564ac93056",
"assets/assets/voiceovers/sara/level_1_01.mp3": "1f89f86fc60a2a1d5b46889010002f57",
"assets/assets/voiceovers/sara/level_1_03.mp3": "b44ff5228b73b476dcbea5cd075a8d70",
"assets/assets/voiceovers/sara/level_1_08.mp3": "6f13061810395e244cfb495dfb90903f",
"assets/assets/voiceovers/sara/level_1_09.mp3": "75612c74723ae9e904a8e87340fc749d",
"assets/assets/voiceovers/sara/level_1_10.mp3": "7c7043d1d270c7a24c7106cf00b8448b",
"assets/assets/voiceovers/sara/level_1_12.mp3": "fef027150d3611b854f3934f8798a078",
"assets/assets/voiceovers/sara/level_1_14.mp3": "335105a1b722d5b385f3b8c4292b2896",
"assets/assets/voiceovers/sara/level_1_16.mp3": "48bf3fe3ec14b37a9da8e0fc5a24e930",
"assets/assets/voiceovers/sara/level_1_18.mp3": "93e6692e93e09fc12467b6e3c33d61cf",
"assets/assets/voiceovers/sara/level_1_20.mp3": "5d37cbdc414268a748edea58800238d3",
"assets/assets/voiceovers/sara/level_1_22.mp3": "3a9356545e1ba40799cdce4cfd6d2172",
"assets/assets/voiceovers/sara/level_1_24.mp3": "05fc7c0dc4e9c9d6d21e5cdafd6d7265",
"assets/assets/voiceovers/sara/level_1_26.mp3": "14b8833143acea95ede01a1ecfbdebc2",
"assets/assets/voiceovers/sara/level_1_28.mp3": "d975bad6bb46ca9dddd3a04f2f084b59",
"assets/assets/voiceovers/sara/level_1_30.mp3": "829ec8b6ecd0908c080b388667e43cee",
"assets/assets/voiceovers/sara/level_1_31.mp3": "cf20a9a8b5a2214b61d104bd586c6ed1",
"assets/assets/voiceovers/sara/level_1_34.mp3": "dbf0648185b058095f161abe4c1c57aa",
"assets/assets/voiceovers/sara/level_2_01.mp3": "88a818d2634c453bbc18ae33f3db007b",
"assets/assets/voiceovers/sara/level_2_05.mp3": "53c6093637291fbf7804229d1ca7a0d7",
"assets/assets/voiceovers/sara/level_2_09.mp3": "18645d4defa54df98673b22099374945",
"assets/assets/voiceovers/sara/level_2_11.mp3": "a8c0d6faba5b5b96fb62e114d65c716b",
"assets/assets/voiceovers/sara/level_3_01.mp3": "986e2faae3c6f131e9633607530afa2e",
"assets/assets/voiceovers/sara/level_3_04.mp3": "c4ac3843058965c32522d9130c1a7c6d",
"assets/assets/voiceovers/sara/level_3_06.mp3": "37008dc294964d5d0eac8fdb58d0f341",
"assets/assets/voiceovers/sara/level_3_10.mp3": "4edeef3d7e7e04c7a191e970dd2996ac",
"assets/assets/voiceovers/sara/level_3_11.mp3": "7c64058512f88c630faef92a56ca5142",
"assets/assets/voiceovers/sara/level_3_12.mp3": "968ddf5daffffc5a4208f41b98d75b15",
"assets/assets/voiceovers/sara/level_3_13.mp3": "2305cdd1c1f7c3dd9c3e5281047489fc",
"assets/assets/voiceovers/sara/level_3_16.mp3": "27621169832fbd8d897ec5cb4cb661ac",
"assets/assets/voiceovers/sara/level_4_2.mp3": "596a0c7d8c4061a28e25f4095b3589b2",
"assets/assets/voiceovers/sara/level_4_4.mp3": "36c278f3a69969f1af10d97acfc5473f",
"assets/assets/voiceovers/sara/level_4_6.mp3": "5ebf87389b8366eeace819d01ba1a035",
"assets/assets/voiceovers/sara/other_cafe_1.mp3": "ba2eefbb1e9f8629ad86508774d4ba4e",
"assets/assets/voiceovers/sara/other_cafe_2.mp3": "cbb1f8533f6098272559fcbc2dbd14dd",
"assets/assets/voiceovers/sara/sitting_conversation_2.mp3": "6d514c4ee300562823db19d31a2c9a3d",
"assets/assets/voiceovers/sara/sitting_conversation_7.mp3": "9b1f9746119b1617a1a4ea0e4c4749d3",
"assets/assets/voiceovers/sara/story_1.mp3": "0e79fe95619a6aaa49ccac1f1bf2d780",
"assets/assets/voiceovers/sara/waiting_1.mp3": "97dfbf28c53dc8e0203d65cfbcdb3576",
"assets/assets/voiceovers/sara/waiting_2.mp3": "9c31c974f472e28728ba10a9bb5c2f6c",
"assets/assets/voiceovers/sitting/sitting_conversation_1.mp3": "9e3bb1fb8391d2b609809d702c3198a9",
"assets/assets/voiceovers/sitting/sitting_conversation_2.mp3": "7f7c85c9d31a50f0d33d94abc4153649",
"assets/assets/voiceovers/sitting/sitting_conversation_3.mp3": "a2347b38f6e9a596bff5d031b458e352",
"assets/assets/voiceovers/sitting/sitting_conversation_4.mp3": "fe74360ea91e4bed86fb400f13033654",
"assets/assets/voiceovers/sitting/sitting_conversation_5.mp3": "cea18819033eabaf52d6d9b66ced6259",
"assets/assets/voiceovers/sitting/sitting_conversation_6.mp3": "df31e770a756193cf75868ee081e581f",
"assets/assets/voiceovers/sitting/sitting_conversation_7.mp3": "3efbcf299cad3cab201ba7fd454f4f8f",
"assets/assets/voiceovers/sitting/sitting_conversation_8.mp3": "6065e28d717e91c16ad525ddd8cc7700",
"assets/assets/voiceovers/splash.mp3": "384dbde66e406d4758597d8cb1b79276",
"assets/assets/voiceovers/story/story_1.mp3": "4e146c3f32f153724da0bb193177d6cf",
"assets/assets/voiceovers/story/story_2.mp3": "fc5be5000a53e7ad4362292e684020f8",
"assets/assets/voiceovers/usman/after_call_1.mp3": "a3d523b74dd496dd5c84b3e8426c4f9d",
"assets/assets/voiceovers/usman/after_call_10.mp3": "948ed3a35980e2740f15496da48328c4",
"assets/assets/voiceovers/usman/after_call_5.mp3": "ed754e62b7f02132f634448dea0039a8",
"assets/assets/voiceovers/usman/call_1.mp3": "5126bb681368317bee31b4143b2e7975",
"assets/assets/voiceovers/usman/call_2.mp3": "6e1367d07a63750c50aab3b5a3cd4e52",
"assets/assets/voiceovers/usman/last_2.mp3": "0236ed8af98daf02fb33a27f6dbab74f",
"assets/assets/voiceovers/usman/level_1_01.mp3": "1df13d6b6e8112126ff3b817098e441c",
"assets/assets/voiceovers/usman/level_1_03.mp3": "cb13ff85d5501c08c308bc0c94573687",
"assets/assets/voiceovers/usman/level_1_08.mp3": "1667899a6983633ccdd6210aa82142b7",
"assets/assets/voiceovers/usman/level_1_09.mp3": "1c1c2e7fd00b9077ff0402a54f71b28f",
"assets/assets/voiceovers/usman/level_1_10.mp3": "a8615b036701d439da1d73eaed8089b1",
"assets/assets/voiceovers/usman/level_1_12.mp3": "b3128d517f61116aeae570109809a040",
"assets/assets/voiceovers/usman/level_1_14.mp3": "a2576abc769ccb1a2ed767994f3b75c4",
"assets/assets/voiceovers/usman/level_1_16.mp3": "ec22c1840d9282c4787c7926856a0f01",
"assets/assets/voiceovers/usman/level_1_18.mp3": "d3dd9cc4d1d089324cb680ffb4b23973",
"assets/assets/voiceovers/usman/level_1_20.mp3": "56b280b50620e0ae3055e361cb7eb5ed",
"assets/assets/voiceovers/usman/level_1_22.mp3": "e74f830d6a0c5cb0812e135c90d47925",
"assets/assets/voiceovers/usman/level_1_24.mp3": "77b7e815b113ad53cf17abc5e754b974",
"assets/assets/voiceovers/usman/level_1_26.mp3": "de9127345825e7fae170e4e678b232d2",
"assets/assets/voiceovers/usman/level_1_28.mp3": "b70ef5758488113bf75031cb254ac0ae",
"assets/assets/voiceovers/usman/level_1_30.mp3": "178236f88f88b415ed239b712a6fff40",
"assets/assets/voiceovers/usman/level_1_31.mp3": "5b6b6eeb1c70a6ecbadaf081b13245ce",
"assets/assets/voiceovers/usman/level_1_34.mp3": "5f32a450d180962ba16498fb208c9320",
"assets/assets/voiceovers/usman/level_2_01.mp3": "b5e885c3444193a1f1d04bd47cd3fdc4",
"assets/assets/voiceovers/usman/level_2_05.mp3": "91d6d09d2e1873716427c6cc2f9de69a",
"assets/assets/voiceovers/usman/level_2_09.mp3": "ca7cf184e7a768ace88cc2c3fb1088da",
"assets/assets/voiceovers/usman/level_2_11.mp3": "71a1743bf1b2847a13f63d24863f8db0",
"assets/assets/voiceovers/usman/level_3_01.mp3": "2e5252db7ee46a887d8075bc120ef5a7",
"assets/assets/voiceovers/usman/level_3_04.mp3": "84e9c8ae71031e50ad17daa51dc23075",
"assets/assets/voiceovers/usman/level_3_06.mp3": "8cfd453be9cdb1504edde5dafc339ee4",
"assets/assets/voiceovers/usman/level_3_10.mp3": "51c047adf01479c26f90853701920a34",
"assets/assets/voiceovers/usman/level_3_11.mp3": "a0e83cb68e43fbfe834fabc3e39b5e3c",
"assets/assets/voiceovers/usman/level_3_12.mp3": "a02b694f85793c4ac9549cbccf1a5c67",
"assets/assets/voiceovers/usman/level_3_13.mp3": "ba77c054ea0e4172955f1a35b1d05d2a",
"assets/assets/voiceovers/usman/level_3_16.mp3": "1bb67f2a13c4724e9a28c2d3d479c625",
"assets/assets/voiceovers/usman/level_4_2.mp3": "6baf06f7efe935bc8d59fb7e41974bfc",
"assets/assets/voiceovers/usman/level_4_4.mp3": "34669a12389d054f685131ded85f7dd9",
"assets/assets/voiceovers/usman/level_4_6.mp3": "3060b51395d1392fb6fd31de01042988",
"assets/assets/voiceovers/usman/sitting_conversation_2.mp3": "7f7c85c9d31a50f0d33d94abc4153649",
"assets/assets/voiceovers/usman/sitting_conversation_7.mp3": "3efbcf299cad3cab201ba7fd454f4f8f",
"assets/assets/voiceovers/usman/story_1.mp3": "4e146c3f32f153724da0bb193177d6cf",
"assets/assets/voiceovers/waiting/waiting_1.mp3": "03e80044a29f000c22b8bc8817731848",
"assets/assets/voiceovers/waiting/waiting_2.mp3": "fcc2d449a4b10be302d78bb68d245201",
"assets/assets/voiceovers/wrong.mp3": "12329e7a4c23f55749ba051cb109b5a6",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "0735f4e565e1f24d17ad57aede465a95",
"assets/packages/flutter_sound_web/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "6bf84579813fd481ec5e24e73927500d",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter-app.html": "bfc8901fbf648abe6f0fc74ac6b68c6b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"imscp_rootv1p1p2.xsd": "6785ee6b3901b66436d4d95b84ce94cc",
"imsmanifest.xml": "c5fc57d2e1977019748758ede42216e7",
"imsmd_rootv1p2p1.xsd": "98856d1e9737351d168a74f21546f8c8",
"ims_xml.xsd": "5da03ec5b8c407d6623d27ca86b74cb6",
"index.html": "9acce7ff85aff6626c85501678acbf7d",
"/": "9acce7ff85aff6626c85501678acbf7d",
"main.dart.js": "3424b543fb5878babfedc54180220550",
"manifest.json": "15f73b7e8a8209c2206210b3ac8dea1b",
"metadata.xml": "5ba80d5c17b8475a375c9851f751b4be",
"scormAPI.js": "ca4f61f62e4c0daa5294946ea5e23500",
"version.json": "bd7fc070c6c90545549890ac9de934ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
