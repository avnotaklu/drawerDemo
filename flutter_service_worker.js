'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "5abdc2337721015c6b69051fc6c97d8e",
"assets/lib/assets/fonts/english/Hanuman-Light.ttf": "c40229474c002ec32540da57cbc8cd1b",
"assets/lib/assets/fonts/english/Poly-Regular.ttf": "a28e954c07d9c7318f9554fa25a8c086",
"assets/lib/assets/images/skanda.jfif": "e7b15e04653d381c4cac6be7d3bf626c",
"assets/lib/assets/images/katha1.png": "12afd12ed1316465beed0b07ec7aaa7c",
"assets/lib/assets/images/logo.png": "9b5e28fd28ac84b9b877dc6bd6a34430",
"assets/lib/assets/images/bookTemplate.png": "79b4dbc9761b9d4b66a86d6090b1840b",
"assets/lib/assets/images/kurma.jfif": "7550d1391201e8310afd9f372daccb6b",
"assets/lib/assets/images/41846633-lord-vishnu-a-hindu-god.webp": "a144c25c33d1516da2e221d43c99c761",
"assets/lib/assets/images/Gita1.jpg": "c6e9df54b7cfa78d0187b1223e47b6cc",
"assets/lib/assets/images/download.jfif": "d185bca6fb55ddf209655edc222adc8d",
"assets/lib/assets/images/Ramayaan1.jpg": "0dbf8caed30851b72b1246209affa5f7",
"assets/lib/assets/images/Bhagavata.jpg": "be80cfa9d2ebecf90aca722c15680f21",
"assets/lib/assets/images/vamana.jpg": "ae208eb48d2627dff63bdf2e79399da7",
"assets/lib/assets/images/Mahabharat1.jpg": "cd0f97afdcffff6efc37ab0327f3296f",
"assets/lib/assets/images/markandeya.jpg": "a1746bba82cb29eecf1eb5d1446b2b26",
"assets/lib/assets/images/ram1.jpg": "14bcfdc1dccc714ec768ce0ea8a5b058",
"assets/lib/assets/images/maha.jfif": "6ebf3cf7ce4d30ac65a1b5f714b084ab",
"assets/lib/assets/images/lord-brahma-vector-character.jpg": "a7daf9a6bb1605fb2eb8789d23c62541",
"assets/lib/assets/images/Mahadev.jpg": "779882d8a8b857ddd335c575945f35a9",
"assets/lib/assets/images/padmapuran.jpeg": "df27b54d064e70be82a6c913f3a05708",
"assets/lib/assets/images/lakmi.jfif": "776938b23bd9d245ff5056c1aaa21dec",
"assets/lib/assets/images/purana.jpg": "d70b78b18eb53f21025378613173df01",
"assets/lib/assets/images/agni.jfif": "009d61e00ea9bd05c22ded4cdecf9f89",
"assets/lib/assets/images/garuda.jpg": "1f1429894d6da0b9a9daee17d98235b7",
"assets/lib/assets/images/artis/img.png": "a48ea701c26cce85f6dfb044bfab17ae",
"assets/lib/assets/images/artis/horse.png": "7bb1013d927d4b9e653ef407342891ce",
"assets/lib/assets/images/artis/shiv.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/lib/assets/images/artis/cat.png": "de037ba647104ab27de665d37979cf98",
"assets/lib/assets/images/artis/ramayan__1_-removebg-preview.png": "ff2ccb2d9b1f587884f61d38a904386f",
"assets/lib/assets/images/artis/ganpati1.png": "410b049c9b3112f1cd7a2aa9d9e9ec09",
"assets/lib/assets/images/artis/parrot.png": "19f50eff9c17ae0e89e431e8b7531f06",
"assets/lib/assets/images/artis/mahabharata.png": "7a3c73cb6f5a588ca60c6a117bdeb3c3",
"assets/lib/assets/images/artis/rabbit.png": "0df473885bfe8166e28f4d682be123fd",
"assets/lib/assets/images/artis/Lucifer.jpeg": "2f6a3a8b1be2a479bfe6e5f22f471ef5",
"assets/lib/assets/images/artis/dog.png": "fa1e64cd80b270d2bfa497f6b3a746ee",
"assets/lib/assets/images/bhrama.jpg": "abdaeef0d2b00e99f19e82cf0b19da35",
"assets/lib/assets/images/place_holder/horse.png": "7bb1013d927d4b9e653ef407342891ce",
"assets/lib/assets/images/place_holder/ramayan__1_-removebg-preview.png~": "ff2ccb2d9b1f587884f61d38a904386f",
"assets/lib/assets/images/place_holder/cat.png": "de037ba647104ab27de665d37979cf98",
"assets/lib/assets/images/place_holder/ramayan__1_-removebg-preview.png": "e12083fbbbe9056185d6c1e576066e64",
"assets/lib/assets/images/place_holder/parrot.png": "19f50eff9c17ae0e89e431e8b7531f06",
"assets/lib/assets/images/place_holder/mahabharata.png": "896b7d9488d0ce35852f3bca1af849f5",
"assets/lib/assets/images/place_holder/mahabharata.png~": "7a3c73cb6f5a588ca60c6a117bdeb3c3",
"assets/lib/assets/images/place_holder/rabbit.png": "0df473885bfe8166e28f4d682be123fd",
"assets/lib/assets/images/place_holder/Lucifer.jpeg": "2f6a3a8b1be2a479bfe6e5f22f471ef5",
"assets/lib/assets/images/place_holder/dog.png": "fa1e64cd80b270d2bfa497f6b3a746ee",
"assets/lib/assets/images/linga.jfif": "aedcdb0a88eb5676b400130cbdbc2652",
"assets/lib/assets/images/bookTemplate350x500.png": "ef19d4cfdbf36cc8bc20cbc50f0efa69",
"assets/lib/assets/images/Varaha.jpg": "4e60528060098f8272d462b044c313dc",
"assets/lib/assets/images/kurma.png": "ead68e9d053203e81294060819db5525",
"assets/lib/assets/images/shiv.jpg": "b517670deb5875fb82ef4e4bbc415388",
"assets/lib/assets/images/matsiya.jpg": "3913ed9777167ab32a5dd00cd3f87938",
"assets/lib/assets/images/brahmavaivarta.jfif": "be05e950eac1d47ec8cf28c9d2b18721",
"assets/lib/assets/images/bhavishya.jfif": "d2d67aff78a328acd799771fa8428792",
"assets/lib/assets/epub/hindi/Vishnu-Purana.epub": "d6fa2465a477b427b371f7826c10afac",
"assets/lib/assets/epub/hindi/Brahma-Purana.epub": "e353221adb036687ea5fdba63daa08bd",
"assets/lib/assets/epub/hindi/Shiva-Maha-Purana.epub": "04525ce0e43018589729fc5a8dd8cff9",
"assets/lib/assets/epub/hindi/Garuda-Purana.epub": "715a1def1f282fcb9047a09adb1e52c4",
"assets/lib/assets/epub/english/Linga-Purana.epub": "c185cffb7eaf983ace5b566fd2cca2c4",
"assets/lib/assets/epub/english/Bhavishya-Purana.epub": "45cc2f04ea2378405b27a67de4ecf4af",
"assets/lib/assets/epub/english/Varaha-Purana.epub": "03838d8458e254bf6340d8972ec9d41f",
"assets/lib/assets/epub/english/Vishnu-Purana.epub": "d872f92ea38eb8d25180fb6dae7faab0",
"assets/lib/assets/epub/english/Agni-Purana.epub": "fea448b649d712bc939d025d4878ee0d",
"assets/lib/assets/epub/english/Padma-Purana.epub": "0becaf1e1bb5624bfdcf72025c85f052",
"assets/lib/assets/epub/english/Shrimad-Bhagavata-Purana.epub": "f4d5d5662cd626bffb8b94695adbda71",
"assets/lib/assets/epub/english/Markandeya-Purana.epub": "662252544c9460377058c6764bcb7273",
"assets/lib/assets/epub/english/Brahma-Vaivart-Purana.epub": "555743fd4925603e8792e35751c655e3",
"assets/lib/assets/epub/english/Matsya-Purana.epub": "416a34f17a967f97c0b90d6fec91a3f6",
"assets/lib/assets/epub/english/Brahmananda-Purana.epub": "1531789a058f00988e5ebdb54ffeb859",
"assets/lib/assets/epub/english/Brahma-Purana.epub": "c408aead8f4ef29e1fdfd42207061f04",
"assets/lib/assets/epub/english/Vamana-Purana.epub": "7ba8753e5cc79b6c33bac0d3b3caaaf8",
"assets/lib/assets/epub/english/Shiva-Maha-Purana.epub": "e90d6f44b25a04961512b6a87b829015",
"assets/lib/assets/epub/english/Skanda-Purana.epub": "afa5d4ca4f1f86b72f913a1eddb4cc94",
"assets/lib/assets/epub/english/Kurma-Purana.epub": "cc49634bec9f29c6df75dec2d31e5b21",
"assets/lib/assets/epub/english/Garuda-Purana.epub": "fd56f4f36ce76f208d737bfc6c46b839",
"assets/lib/assets/epub/english/Narad-Purana.epub": "0e89a2eda6cb68e6fd1e2d09b77f03e3",
"assets/lib/assets/assets_music_music1.mp3": "fca7ab15e388ddb2f4fb84faa8b0a774",
"assets/lib/assets/markdown/artis/ganesh_aarti.md": "e90545ecf4c8a86c003739593676cd4d",
"assets/lib/assets/markdown/artis/radha_aarti.md": "01397ac84a1e1f2f93eab191c6ef299e",
"assets/lib/assets/markdown/artis/gouri_aarti.md": "4c1cc2e3a7e73ffc3c7d44a83e36912c",
"assets/lib/assets/markdown/artis/ganga_aarti.md": "48af1cff01444d187b3f11d0570da827",
"assets/lib/assets/markdown/artis/vaishnu_aarti.md": "91807297e4245e66772874fb37feffc9",
"assets/lib/assets/markdown/artis/saraswati_aarti.md": "f178b3f6804a34ffb7f1ea9b7ee4537b",
"assets/lib/assets/markdown/artis/vishkarma_aarti.md": "cd46c5ec8d4410b9acdb9975f5145c2b",
"assets/lib/assets/markdown/artis/shitla_aarti.md": "a368c1354c5a4311e1809e45b65790df",
"assets/lib/assets/markdown/artis/jagdish_aarti.md": "5ba9d8f01b88ca013e03fe666fa31b65",
"assets/lib/assets/markdown/artis/hello.md": "cfec39a3b1231db91defcecd3f783bee",
"assets/lib/assets/markdown/artis/allmds/ganesh_aarti.md": "df9e712eecd440be7edac69c73b10bc4",
"assets/lib/assets/markdown/artis/allmds/radha_aarti.md": "20829df2e704f42b8666cb7daf58fd4e",
"assets/lib/assets/markdown/artis/allmds/gouri_aarti.md": "cd64021e4d44b53564d1107335abef3f",
"assets/lib/assets/markdown/artis/allmds/ganga_aarti.md": "300c97fa67e2c881e53587712988629b",
"assets/lib/assets/markdown/artis/allmds/vaishnu_aarti.md": "019fe5e0a2ce5cbdd7300a6e5cac21d4",
"assets/lib/assets/markdown/artis/allmds/saraswati_aarti.md": "1afec458ff1f3b0b5c479211ce0991fe",
"assets/lib/assets/markdown/artis/allmds/vishkarma_aarti.md": "a1c19258adfdbfd516ea5a5b49b925eb",
"assets/lib/assets/markdown/artis/allmds/shitla_aarti.md": "6fcb1892f6edc405922845c9b85079ba",
"assets/lib/assets/markdown/artis/allmds/jagdish_aarti.md": "b78eb1098e27428d69e6b0905b704667",
"assets/lib/assets/markdown/artis/allmds/hello.md": "ad148b4d6e58837e23968a6a30a404c1",
"assets/lib/assets/markdown/artis/allmds/sharda_aarti.md": "b90a7cae8a9122a593724d79098ee83c",
"assets/lib/assets/markdown/artis/allmds/paarvati_aarti.md": "3ddf51f8f95bee91e61e7b727f2b3057",
"assets/lib/assets/markdown/artis/allmds/satyanarayan_aarti.md": "4d8d2263fc192755c4f33b7fe221f337",
"assets/lib/assets/markdown/artis/allmds/gayatri_aarti.md": "a61dbb7817f7963e7faa66383feded4d",
"assets/lib/assets/markdown/artis/allmds/parshuram_aarti.md": "5ccb9b962a91cd59b58c39f97e4de082",
"assets/lib/assets/markdown/artis/allmds/santoshi_aarti.md": "ab69184080321915639e6aaf12c40b82",
"assets/lib/assets/markdown/artis/allmds/shanidev_aarti.md": "adffd3be01b569ea3e76e7f5bdc4f0b1",
"assets/lib/assets/markdown/artis/allmds/vishnu_aarti.md": "cbf4f81d3c84a44fe9962fd6b89c51dd",
"assets/lib/assets/markdown/artis/allmds/mahakali_aarti.md": "e568f676b834dba9badae77885ae36a1",
"assets/lib/assets/markdown/artis/allmds/bala_g_aarti.md": "52d2f08720a0dc0262a068599ab6dfd6",
"assets/lib/assets/markdown/artis/allmds/krishna_aarti.md": "bcae5a298fe7231e2205b5812e8971dd",
"assets/lib/assets/markdown/artis/allmds/mahadev_aarti.md": "b083a315d919b38699a858c212bc0d83",
"assets/lib/assets/markdown/artis/allmds/ram_aarti.md": "b34ebedac99f5ff187040d9b79c2e102",
"assets/lib/assets/markdown/artis/allmds/ganpati_aarti.md": "ed2757199b4deba45370f212b367cf7e",
"assets/lib/assets/markdown/artis/allmds/hanumaan_aarti.md": "634d7f4d862ff5e1cc0200b95b023f44",
"assets/lib/assets/markdown/artis/allmds/lakshmi_aarti.md": "787032a50e5beab604cd71d8dc524a5a",
"assets/lib/assets/markdown/artis/allmds/durga_aarti.md": "00fb835c2db680a1c8312008ebbbdf6a",
"assets/lib/assets/markdown/artis/allmds/bhrama_aarti.md": "259f74d3b5ef028bef6c75e599db9f61",
"assets/lib/assets/markdown/artis/allmds/ambe_aarti.md": "9b0aa936b577bb5ab4e84414646ea004",
"assets/lib/assets/markdown/artis/sharda_aarti.md": "105e1855396794205315431be2b02a06",
"assets/lib/assets/markdown/artis/paarvati_aarti.md": "670a888cd8314a6344ced9e07ab1c9c0",
"assets/lib/assets/markdown/artis/satyanarayan_aarti.md": "2ac1108d4948458d7d668d2025ee9fb8",
"assets/lib/assets/markdown/artis/gayatri_aarti.md": "950c65199f9e83c010720f65f0512e06",
"assets/lib/assets/markdown/artis/parshuram_aarti.md": "bc9c29a04c086b42b77a13a91b8060cd",
"assets/lib/assets/markdown/artis/santoshi_aarti.md": "85e729b5cba82febbbfafcb928c2b81d",
"assets/lib/assets/markdown/artis/shanidev_aarti.md": "124aa21565f0a57c6a0b0421a653b9d5",
"assets/lib/assets/markdown/artis/assets_music_music1.mp3": "fca7ab15e388ddb2f4fb84faa8b0a774",
"assets/lib/assets/markdown/artis/vishnu_aarti.md": "d978b25d3c83c1d298bc730778901d6e",
"assets/lib/assets/markdown/artis/mahakali_aarti.md": "3fdb74871b40988da9e19aa3827f1939",
"assets/lib/assets/markdown/artis/bala_g_aarti.md": "d4154627d669a0da661e75335e2babd5",
"assets/lib/assets/markdown/artis/krishna_aarti.md": "cef04748c1b8948dda4d9189e69da91d",
"assets/lib/assets/markdown/artis/mahadev_aarti.md": "edf2184a498adc24a768b0b7a64ad0a7",
"assets/lib/assets/markdown/artis/ram_aarti.md": "1fefb0b519f35f4927af3f01f2b384ed",
"assets/lib/assets/markdown/artis/ganpati_aarti.md": "5b83d6fc3fa6c18298b3c3c66c501257",
"assets/lib/assets/markdown/artis/hanumaan_aarti.md": "801a080095b9fecefd4ed6d5c3f83061",
"assets/lib/assets/markdown/artis/lakshmi_aarti.md": "0aca7c5dc1c43d425f4ba27739371886",
"assets/lib/assets/markdown/artis/durga_aarti.md": "d5a3abf51792ce4a77891ad3663b5c2b",
"assets/lib/assets/markdown/artis/bhrama_aarti.md": "2e48de6431ee1c318f06766227fc8481",
"assets/lib/assets/markdown/artis/ambe_aarti.md": "9907fb9b8c9290d23f21298cc113c1ae",
"assets/AssetManifest.json": "0f2cc9b7f4c3bcf1b03db036c8878326",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "0b58b539b95de9d213b5ea02a9e59ed3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/config": "ebefc2f5840a85b462671bd11b18cdb4",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/upstream/main": "09597a697a593300d6c1faa8d06a5f81",
".git/refs/heads/main": "09597a697a593300d6c1faa8d06a5f81",
".git/logs/refs/remotes/upstream/main": "fc71e80755f233c4cf4d926bc1247099",
".git/logs/refs/heads/main": "60c4d035d82e5bc34739b5f42f980923",
".git/logs/HEAD": "60c4d035d82e5bc34739b5f42f980923",
".git/COMMIT_EDITMSG": "08c911ea3311151fac4fef223e86cb16",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "4a43c8a321bdbe16df356679c8f2ecaa",
".git/objects/dd/b3e588e09e981dfb8a2797d6f5acd1fe988759": "5db0f7db9841f39bbc18269bc40f7780",
".git/objects/11/49fb14b93421eecd96bf478298c7b7e2368cbd": "8da7b3aaea36eb907a2eac4d32e519de",
".git/objects/72/a79571c12c90cb89e8e5007eb4bc8dd455b794": "9a852bef046b3a854a884a96f5840d0b",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/3f/a65596a2bcb67c651b1badce5b60d58518452b": "94d4f60fd096ae70d33709bc14c15657",
".git/objects/74/9fd4ed609f4d4d7aa394f2d737b3cbfe16ca87": "78517a13cb5174f9210c1b465ef5427d",
".git/objects/74/215a97370e00a80c108b428e66e169884abdfb": "0a19a585946a651082efb242f97256ca",
".git/objects/74/1515f926f0b0c3e8e4eb0065079d431feec7b1": "63fbe4bb68db8edff42ca441ba048510",
".git/objects/5a/f48ed46be1c4dbd9eada557a9b8b1baf59c9f8": "ade15c02e2057149d017d255a0df1f0d",
".git/objects/62/d744e41daf23493a48a38039be1e7bfc6826b5": "00f2ef759f1ee97566355b74b0d39291",
".git/objects/ec/a89d11d7400ba3e4f3536efa87b98d9fb3238e": "b84c14d82bea518e4f36080a50a5fddb",
".git/objects/40/aa366d3f54db4727f8f38c037f792541db00c5": "5c171534c8697005d05087af5617d121",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/0b/b4630d7c069cace7c8d3790f04721ad0596d46": "fd95aac2c251428fd07462691af7740d",
".git/objects/9b/b0f5f2ae98230cf395d68a3059894c67eb4d62": "dd01cd31c0a492ad253e37b16b50137e",
".git/objects/da/a7f8c913dd59b0882fcdf9bf29d6a1e674d553": "884a294306d9cb4935d8f8ee4a03bc38",
".git/objects/da/539df613f115886c3dcf10225bd3f3efab543a": "62481f946d7a4cd89ced6a2497a00507",
".git/objects/ae/b061fc0af1c92707ea30dd1eed4f7034d4e088": "250a5a3c883a8f3ec1590dd893d085f3",
".git/objects/ae/4e324542c4d9ac6970944ef4ecf05cb5546065": "ee84b0dab6102f75d14fdded71e51ae8",
".git/objects/83/b9d210689eaf08e0dfe7d037f0e4f9852370f4": "4e7aba4e431c2fdc42d437cde49c29b0",
".git/objects/cb/35774403535a7508f688821f68fd8d404b663a": "12f530f44596c5bb0cedfeaf7f530374",
".git/objects/cb/675ee4db6ff2c172349298c4a9313c5cd2035d": "f9fc1a3983316d7268bb7c833b4bf332",
".git/objects/9c/37e013e2bd52a3d4373a786da329bbc6c478a8": "06ca9c38aa7e88f0e70ce4abb1f72e2b",
".git/objects/9c/d78afa4a46034e0f6e6c3a518954a9129cad35": "257846dfba6c7b4919be9b0233e2fe26",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/c815de8d1ee8be1d8eecb3c7060fc425e7b30a": "f5b646b66e6dba2b2d4946897e46280d",
".git/objects/8c/ed98b4da89bd7d5fefba697dfc18674d1096ff": "5ebf4c955c6aef2a4e3e8c4c30c38a54",
".git/objects/8c/b9ad4b84de4d381604cc48c672a1c8a0532822": "c40fd5dc4b0c4b71264f0823fa070778",
".git/objects/ba/5c77dae78d8d158e0576b59eb380d66e56e248": "cd315043f2aa0127fe98822a8b9c2a02",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/77/e58760cbcba27e78c6739607c83aa56f55f9ed": "e3a854772bddd6793f54067b2b9bea5b",
".git/objects/ca/ba158db67e4db5b41ebd0bd01077b1f0d14978": "bc711ec5a6db5c5ca332069df9ad49c5",
".git/objects/cd/cbf555f1cccbff69545863851d313e9924131b": "97655de1f40845703945a53553900822",
".git/objects/37/6710ef169ea9cb23bcc97857ca9e3899e0a4f4": "4c49d2bbb42aa67aa217bdb4f7b4449d",
".git/objects/5e/a225faa35cd8f2d3027ac52ce72c08ef86616f": "b4ed2020a5b449d2b4552dda4ebd3e0c",
".git/objects/2d/1d8431d9e41784fb59dd2849f89b156675e6c9": "faa3548e745877e2121c5959929d091d",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2e/021d009a80eb247e9d5279f07768b0d1cd2102": "a4c5a24050243bf34f1152691b9e20cf",
".git/objects/2e/6cfce2861941f847f2797804a2f10da2da8027": "de91d0a38ff1fd70e85f798bcd5c644c",
".git/objects/61/25401ce154ceecb8f7bc3a9602c14f405a94fe": "2b8141025e72859d6f41b0cd5d0919c9",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/92/bbda3d4a5d78f8342f15c9ac6b4a21b4c76f2d": "8d0f18fa217c09dfbe6e708004cfa86a",
".git/objects/be/e35b020cbdf73311c8490a042323a822a17eab": "c9047c479d11c2dd3cd652fe590f17b8",
".git/objects/43/58acf1b4f6beb3c73aba21ecf2c36c434fc124": "f007903c8089803b5e99dadea0cc6b88",
".git/objects/1b/883be827bd9adffb9eb5b865fb99e390e9a233": "3b614fb5705beb69332be5219772700e",
".git/objects/9a/e748820e42a750e58dc6e5d360e9c24961fced": "e4e5a662db277f8c014ec19e515c1001",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/a2/408d5784368951f69a98079a0172fb8ffffe00": "2b02a2da7cc891ef66b0ee2fd49260f5",
".git/objects/b8/9b8001fcc17a8f3769fa36eff2540fc56364d6": "baa43b658134fc1ef74284a06db6ceab",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d6d49927f16d602129ded182a23f9bbfbb66a1": "7fa07d9e233df5a1c8a95974f4344243",
".git/objects/f9/acfb9add617e2d7a300a4bb9f1162f19fbe8db": "0146e01f93875c1ff3b92f71106cb50c",
".git/objects/f9/349cfd10d9a60c6bde047ba15cb7228fbbd800": "ba257fdf9542d7fd0489ff59f786a462",
".git/objects/21/00e9aee44add435c4468b3135cf37dcb05a283": "dc75b23acf4670ba406af62de156bb64",
".git/objects/80/9c9b2f07ade91fb7081f4b28058306d7ff8dbe": "5846d8e37d5315a3ec39a4ef1cb1c74a",
".git/objects/95/ef462e26084568e68afed4e591888472c4a04d": "33e230ff33abf789198cd27e5986afbd",
".git/objects/95/c7f3dc4c764b1760486a087ae6f85d5ac422a2": "3912a976e0da8ae73304483d23fe116d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/10/18fa91c2523f2832df7ee7dcda8f003ab53e8a": "097d5cf4fe845f9a2bf9b7afba444ff5",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/a9/8c19b62e005a06945ae11eeb0648ae55b61c34": "029b253c3033bd3d835e638b7460d8f5",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/96/56a3865c4963f2cfc2ff16f58b4885cd47ac10": "01295d8e7a5c37f8a733472c562a9051",
".git/objects/63/cda5c4f3ecd041b8854c9b95578444d1e9799a": "7bb0fe185932d51f13469c3881cf3ea2",
".git/objects/36/cb661e9e1dd51b67bcbcdd572ad48f6ac5644d": "22d4fd33001bba5dd222e8c81b06a412",
".git/objects/59/a1a732624fbe4fbc7fe5c2e5351afb45cfcfc0": "209e93f8310439aa4f66716ed7e4fb2a",
".git/objects/59/edaedcacc4672fe5908bd0c3ff8d4ce0ba1a7d": "38a20c9500f89c9481a8d9aa1b1fe600",
".git/objects/3a/5789ef215193cf462f8835193aa39c4d664451": "046c45ca4c889049c297e0d38e782764",
".git/objects/fa/aa12c7450b7bb790ba8e6b5b5eff0a45078e13": "bd8cfd85453d9b56e6d008d8977f1726",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/ce/b6a68bd3e78a53c53bd97243f370feebc15f7a": "e5970b60362128f6cbf9729aa6cc1a31",
".git/objects/a3/05c7b382032769af3691c471cc39d39b17bfb1": "cf29b111acc9a05d0e01fc2b4fa2b76c",
".git/objects/a3/26eb1e3696e9a8f0d54d382f5ed9ddd4f2e50a": "0e64f896f8e9c2162b351078e600d619",
".git/objects/a3/0e63c2690b2b6d5495a62cda78836eac7f2ad3": "521c9fffdd6d9941378c589019208258",
".git/objects/b6/80c5806d4de12e36475797cf9e823e95393cf9": "d4a994df1eba80e485a2ffff13eaad3d",
".git/objects/b6/aced099743707562018ad717c2376238cc4db0": "ae8a758ebbbdd8df750be79a087d2a70",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/71/361cf4f255a3024854f95d903661f448d961e7": "678b070046680d46f6c9defd31b9654a",
".git/objects/71/0d1693c3bb457b7377eeaec32880a1b007af9b": "91eb2972e1419a37ffa9c1a3d03226ff",
".git/objects/f8/3ae0eef3263f459cf7d860aafc8488efd4cde7": "a5e8a999c3c49060d34c5375df51145a",
".git/objects/f5/0858e264bb3f7786d85aa510d15a7a070e653f": "a98e01e356a7ec51127168af5e7799e1",
".git/objects/85/e5ae6bfd51d0c4d5da0c05a0e21bf70ce9b2f9": "507208ef3709d88879dd4e0be1ed93fd",
".git/objects/cc/edbc0b4910a72f89e8b404496af29c1dfb640d": "8a5b91134068e3991865691e71f349d7",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/35/e94d538970c7fc8a8f997c386caa4c05d39bab": "a7011a251ba56378fccfb3cf4b1a5fb3",
".git/objects/35/ee7e43c9176cabea73d90acdbcdb5d095a12a9": "ef5bee035e5400d1257c7a64121a4354",
".git/objects/27/0c76cb5f252f6ebf39b4149e5d26ef98998efc": "c63dcfed9cacc89adee7f36c68349bb1",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d1/8bbd0f5ace710b328857d200c1c7195c346e11": "e3aad752753d636457d414016cdaa471",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/1f/a38b7cccbe4524b315609a9dfe53c50dfda65a": "2423c6004eab320f45e6925d26cb0c86",
".git/objects/bf/7d9257a4e113ff824fc5eaea2cd64cfe48cab4": "73f565104845037c88c50641f7d96474",
".git/objects/bf/355551a6026b5bd77957f0aa1675f6b7a07c60": "8576b0781f26ac0af6682360168655ca",
".git/objects/bf/88fdc9514fd23fcc26b4f6cec5b5e2a9588518": "71655233f4822b6c9ffb1bbf50dbb1cd",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1c/6d9c9b62f1851ca6a454fc3455bb924b77b4be": "1c8843ec5841b577c0d6c088bbaa06ef",
".git/objects/e4/57fcd1f274f7dfa32eb60134a5ad6ece0b62b4": "dff8ce7fafc9de78b0f5161cfca49061",
".git/objects/e4/f1917cf88e321b56b0a525082521237c55482c": "1b70402470db0a4dd1af1cb477df2a98",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/69/d6e8eb0469d10e0531f7ed6d74a975ea87a046": "535561a53ffe2c413a5263db65051a30",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/fb/d9605d059f7f3929061b5fab0f22ff7f9f7c4c": "7d54d30041edc150495eaa070c46e49f",
".git/objects/a5/0b114755fd4892612c5941222dff70a0150e1f": "37ad3d1004986b67c6cd6790f103ac3b",
".git/objects/a5/7b2e999045a185f28ba211643f8d4535057e30": "018219273c065162f9d3d7b8d5dafdb2",
".git/objects/a5/0f63296359183a79aec747244fa1185c27b860": "a7456215e69f7f5f9349266360b2a3f8",
".git/objects/a5/b148ff3c258c60aa0fc598222421b16d7eac00": "5ca08ffbf43404204d03c4e76e3a4584",
".git/objects/f6/93233dc8d2f965baad504f4724bcdb8133f70e": "b36ed271fa1b0d155b5b0d1422a2f7a7",
".git/objects/f6/6323c3193786d895cd4f1d6c50af693284323a": "4e5547313f561acb8f8c3c3e3e89c1ec",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/60/6c443af6c3a3b1bcf96aa0b7fcb205b59001a0": "01dcbf3c6f83909153b1b853dccd9d99",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/42/196bd878e75315594e8603919c8c8bec6cc60b": "4c14ffc68225f2caf96c3656bfa6fc7d",
".git/objects/34/c27529c708bd9ce1aacd29913e3378af5a9d6e": "98f0a1951c32912cb740155e59299b0d",
".git/objects/b9/f96696d9407d8ec6106befbaff61fb1e280abf": "6759c28e6654569a6b0513eb0867e82f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/7d/7e02752aab078a05c08a42ba069fba38be8cd2": "99d6bc23b70ec4d1289030ae26cf8772",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/51/bfe65962e58c5dd51e7203c120e995be9c822e": "15439d0b52d27e6185d9a645dfbada53",
".git/objects/6e/12b1dc0296b100770f7df4a7148a35856f1b49": "7efff48f393095afd90fc027547ef5ae",
".git/objects/e1/0e9520dd7235d6e669d1a6a682f19f0611522f": "ad3679ff9bc721c8a31e59273bc67bb0",
".git/objects/0f/8b00595f80b7b08ecf73949d915d560de78584": "21083454ada72c5fdf5de9e9a3477c1a",
".git/objects/66/34f54348c595393e2defb0f2f8146073e77405": "441493a2c619b32a920c49bc9ee04770",
".git/objects/5c/fbae1e414394d37f4b9e665ffba2852e7ac138": "eff1a99b44cd3e31fba44b70349430d8",
".git/objects/aa/7cc029082ba129b8a7ecbac0e7d3a396466c51": "f03c79c10e0f4c2bf6eca1bb511eb632",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/aa/a792bb466eecc45815377efa841bd2d7675bde": "55bab6fcb23f63acdde5b8700545893f",
".git/objects/6a/e2ad342f63d21f1a97fae43bc6ca00fbe7b9c0": "3d6e2f3f5b452684821a6ec6ae22f5b9",
".git/objects/ac/7926fcc7e9fa2cba3a803404f28e05028bf90e": "1d4f0cbd5ced2834cb571d8a06f7938c",
".git/objects/06/c7ddeff68ba80cc98ad16dbaa186f4ceee81c3": "dc2972f18e6983b9c77259ec2f796e36",
".git/objects/06/b2fab8bd735b7b8b50705d02e242462fc9da76": "c288896c11d5232741d3c27c353e3f3c",
".git/objects/06/abb43d1f13a7258675ae1a66cc6526f9eefb64": "71f8cf6eaf5342b21f09380275f58828",
".git/objects/00/85c38856c483c90b4def916ece5d680dcdc151": "00965dec8821752f0aa89669217ebb62",
".git/objects/78/208e5581ebd82c7f2faaac67e19c856de29220": "1c43395f7ca7db5376c65c99945c27d4",
".git/objects/8b/ca1d2e0b2e7f2a210a3311915e1b6f9122ad03": "11e369cf72558718987c17f942bd9db5",
".git/objects/8b/dd229318ece301d419bb1266b56356a5e82895": "48dd9598446e68265fbc0c77c16ec31f",
".git/objects/ed/06f6f4156430af45177c471e0459a479639c73": "b34d040c5f3b903a89ee01b31c927268",
".git/objects/ed/dc687d8e336521bd097e55b9d48d265b25d00e": "cc16d90965300a85e6b06f8679da6905",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/a5ce00daa0b34e77d426bee15b760411a5b1c2": "5a98dc69d443aa0d6cf66fa6d668a67d",
".git/objects/b4/03291b7ac5d2b4be60b4774894bd113f199c40": "c1c3306980836992a3930af8fe044a40",
".git/objects/19/d950977045cdd2e9b1b6c72b58c03cd4cf8d63": "423b89e48df55ce727c4cbae90f634e9",
".git/objects/9d/cdf198ff3fdda4f9ed069978790cecee71ba3e": "de314cab56fe17171720930de59aec30",
".git/objects/a4/ce2bf8b7449abee5c20499551df5510aae06db": "210a1440da07d2ddf6242bde331af373",
".git/objects/a4/24c1ca1a69d4c5bad91b79e1052e98a9bbd476": "a8e098f4e4991b4a1078e5953042a301",
".git/objects/c6/0cb8a0df02eb928cb1d240a5cf76ac5f6e3684": "d7481e9378827cb1091d48196e1e4676",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/08/56be9a811c6f38ef888deb07648a8b2a1ecf58": "3d973b3f680e2883d072f8041d330495",
".git/objects/e7/28d82f2c4ff77ab33ac94b218b4c534fe51a7b": "e594811e9b0d548987912bf494b4705c",
".git/objects/9e/a214619de08937820619078c8f506267d96998": "7a254301d161fae293a67db18a09ed62",
".git/objects/2c/426a3a3be520e17399af60ab0940c25dd7dd3a": "dc5fa3f7ec54a832b9a9c95402574a3f",
".git/objects/4c/9e33fa43ef23988c4a28ffbae1ad32048e26ee": "0329516c6db0d41c178f0d2c91f6583c",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/6ff8ae9d8f31341cddb869b8ebc443075868b2": "07d581aaf8d89c9f6ea53512d86104f8",
".git/objects/1a/5e692258cbdd366c366783cd8075fd4df60317": "372880af2fa6a9b11a578d7a03075ec7",
".git/objects/1a/8fe6413935ea635921bc35151bd3ea69c22e88": "19e60f5bc6222b1b9323c8f1c22f3eab",
".git/objects/73/4fb989b8dd992da7d162029bd133d917bbca4f": "d7ed90cb1dd9773caf78e1fb18490fdb",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4d/8e17fe845070b2bfee3e9e63cd3dab78697054": "482d0a691e642e54716e8e3a97f73ccf",
".git/objects/46/020d87d154b8f201f45191656e1bada3e53d5d": "e4540577bb90abb191ac2424c76aea5e",
".git/objects/53/df13b84b7307a315af1365e5a1803ae124db5f": "2a5525f40fd94b7fd987df6083570991",
".git/objects/a0/3304fa8b5d68a2be2d811e9eeedd5b804cdb1d": "83390d598ff494756f3cfc7bcf14ef26",
".git/objects/6c/6b70c1c78ec55ccb3d874026242509afe5f1ab": "a33f83651f79da2a97e33e03e833425c",
".git/objects/6c/afeae0bad69872d3f4169455305ec44045e7d7": "83d792a234df34012917f53725343c2f",
".git/objects/70/6eeb41b2e3de302964e2592d47a158b3e011cc": "5ff704e15a18baeaa9f12f6bda3b59b9",
".git/objects/89/b9c012c43fa8f4e45ec794e2309d0b4dfd23cd": "abfa8fd71af3b697f9e51ac121dcc807",
".git/objects/89/f2e15215d5e480adaf8a823686c426bea7ced1": "928ed889f5b43c2ecd58369e77c7811b",
".git/objects/89/cbcbdf27dc644dc879658a8a245c4faffbd150": "4afbe145c0f65c08bb483669693f81ff",
".git/objects/50/a9823f83f8b54886036636210312a9e4c0d4a2": "1c379e4799e3a57986a5f74e2a2cd84a",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/28/525b93f1fef4df8c2dcce92db0f0cc5b5a0050": "ef1a950f3cb70f5b8d020a90962a6f0f",
".git/objects/d8/aeb2177b638c6a5297e75ae14a6a0b3aa39e99": "b24ca1ac45f0e98001bdb5b2b6963453",
".git/objects/d8/0f521dfe9ca96e4248f9d0ca964b32902407f0": "677f04593e5fc639932d6e5c30d130da",
".git/objects/d8/cbca278386abd452c1dc1f84cc2fbeef635564": "41f047c35dae2380f596fd2a1c8dbbe9",
".git/objects/e9/4acd5e6401733a9b3bfa62bdaf3013b854a4a4": "23f87728396f2f6d46958b6383f465a7",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/1172cd55eccefb8b64cc828ef12bc641ec51a5": "65de98961f56b0294f0d362fb8687511",
".git/objects/e9/5fca1e92501b58e3ba49d34ae6fa3282764781": "9e53551504e626bcd4c40fde2ebb2e7d",
".git/objects/13/74477aae1d19f178957b0082ba372c55e7932c": "35a8d97821653c88d16de3a68c1da2b8",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/9fbb1609d17f27ee9bcbb9ecb8b4e5d7e7b898": "e29e7d14ee393dd238ea22e2d7b81754",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/84/ae9db90f642f3d2222e60a9922608310420240": "2a08fdc54c161d6d0ad477fcd731f1ba",
".git/objects/2a/5d9acbba810cff195a3f2b0547ddd767e291ed": "40c6910b6a362f1cd21b4a621d97890a",
".git/objects/56/8d107e36fdac0609f0e7923b541671753c7f07": "31b5bbd2547a760442330c65008483b4",
".git/objects/d4/1437b99e62455d3c377a693c1eca5ba8505b7f": "9553e03344b770ad0280f1679afc6930",
".git/objects/8a/4790a12bc6dc04ab723d676936fc8e53715a14": "814cf8a478ec50489ddaf1a3774b7419",
".git/objects/8a/d3caa3b168061523b48d097888fa33b9403024": "3f14215aeff8ea449c83ee73afb8478e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/09/bb327c1b73c2c69ad6080593179597cb0daa06": "44360d2e3035909dc10ebda54a468160",
".git/objects/09/c95bbc19a8dfd51ff0982f0cd4833a496463e8": "60ec99b78ab26cffb4bb0331835dd3b7",
".git/objects/ad/26b487c1ac3312c773b5beef13146c714651b4": "9909f651396c03faac2db1162cb70974",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ea/dca524e9eb99b02469a53d80970cf225dc3d28": "a147c8766eff3be761b5b3c7fbdadf1f",
".git/objects/b0/ee8f03c1d6773f92d8574d7f4f28872276f05a": "faea7ae0adf8e2ae33197205e3f3bb7f",
".git/objects/25/2e69402b26c1a2474b7da6a0d6ddd5bba58bd6": "05c1e84d08712982a9ff153ac2d9eee4",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/f4/8fbb6fe23ea253f58a40cbecfc7fa6225e40a7": "144c3c2962f31255ffe4b04a9ebac176",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/f1/a154960d38d94296eab9041bf3fe174108f607": "d214cf38245e078ddcf0fa374498f9ca",
".git/objects/f1/0f811c96105bf9613ae5e0dce860a5b0d366c1": "3ed7febc23d087268d0f06b3ccf7b7f8",
".git/objects/b7/4a26748a8edf0acc574d325f71cc43f0124ffc": "533f22bb8825e975fd272ceb32d82531",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/31/e00beb68e68484ad42a4b94bef4292da56bb4d": "d4491ceb021316cf458276224b86099a",
".git/objects/7b/191e34a4130c04c6b55453634f18e687cfb741": "212bc8fd992389b1b1945abfbd546ba7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/3936bb2c1fa75a431f6a8845c43c58b853902c": "5c30b303c71394f1f9cfdc361012e452",
".git/objects/c2/95040370dfd25f63657116037980efb105fb4a": "a10a11a10e2352e5cc679415d3e51956",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/ef/b4c22d985a10180415fb664242c4c50a391ec6": "d1fc990e448c7180e186d4f552e9102d",
".git/objects/f7/86558313d83ff11f4505703699ae8d230e693e": "06c0f269cb8ba4ce084fc48d3c619005",
".git/objects/98/593c80cd98487513f41da9dd810521b9e4d16a": "bece56c12442da92bfbe87d7fc6e404d",
".git/objects/98/bccc2c9173ce8c082ed630cf6371d1d770162e": "ed8e06d4fb5d8ccec476825b577b5d47",
".git/objects/4f/6be150e00183b460980b65d924f24f49ab31fe": "a7aa1be2d5bf779c878371e70fe21c15",
".git/objects/33/786fc0b71f1c13d74d7dc70f5a2a4cfc526770": "3f09cb761579b770e6e337e4c06876c6",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/33/e3aee9577d0b315051637224495c97b023ef6e": "f0cf869435d84a36ac5af44ac956884a",
".git/objects/d2/e92a6818cd0b93caa07c6424e792cfae72b22f": "939d36282ddc3eb596d9ce71bb4591eb",
"version.json": "e65131d93f0aadd31b580071f7a3a26f",
"manifest.json": "efb7479bc4188eb94b28931e448e187d",
"main.dart.js": "390759d5c543f987f3fa3cac68cf2f9c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"splash/style.css": "fb03880b3b36c32c4165cafeca5fca0e",
"splash/img/dark-3x.png": "fd1d168c86f58cb986bfc1ab1416e1da",
"splash/img/light-2x.png": "215999dfadf3abe34358c88925806227",
"splash/img/light-3x.png": "fd1d168c86f58cb986bfc1ab1416e1da",
"splash/img/dark-4x.png": "b77b7778bf1f67e42bd1c8da00c0877f",
"splash/img/light-1x.png": "1ad8f9ab4fd45a7bd733f778119e8fbc",
"splash/img/light-4x.png": "b77b7778bf1f67e42bd1c8da00c0877f",
"splash/img/dark-1x.png": "1ad8f9ab4fd45a7bd733f778119e8fbc",
"splash/img/dark-2x.png": "215999dfadf3abe34358c88925806227",
"index.html": "1986587652e6474b2ee16e7da2f772c9",
"/": "1986587652e6474b2ee16e7da2f772c9"
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
