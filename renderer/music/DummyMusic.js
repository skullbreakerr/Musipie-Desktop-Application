import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database"
import { title } from "process";

const firebaseConfig = {

    apiKey: "AIzaSyCGk9JnzA8f3QKdWOeKiLvTMr1tVnzxtO0",

    authDomain: "musipie-desktop-apk.firebaseapp.com",

    databaseURL: "https://musipie-desktop-apk-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "musipie-desktop-apk",

    storageBucket: "musipie-desktop-apk.appspot.com",

    messagingSenderId: "547681279917",

    appId: "1:547681279917:web:31da1ea57550b2f3df8b24"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export const DummyMusic = [
    {
        title: "Akatsuki",
        artists: "Ambassador",
        favourite:false,
        color:"purple-400",
        img: "https://www.shazam.com/mkimage/image/thumb/Music112/v4/33/30/98/33309806-edb4-d0b0-8d30-ff01f077a0ea/cover.jpg/255x255bb-60.webp",
        src: 'https://firebasestorage.googleapis.com/v0/b/musipie-desktop-apk.appspot.com/o/WhatsApp%20Audio%202024-03-24%20at%205.06.35%20PM.mp3?alt=media&token=dc1a81d2-a232-42c6-85fb-a104abe3da79'
    },
    {
        title: "Ordinary Person",
        artists: "Nikita gandhi",
        favourite:false,
        color:"purpe-400",
        img: "https://www.shazam.com/mkimage/image/thumb/Music116/v4/dd/48/45/dd4845e3-3add-7d7d-88e9-391eac68ef2a/196871570916.jpg/255x255bb-60.webp",
        src: 'https://firebasestorage.googleapis.com/v0/b/musipie-desktop-apk.appspot.com/o/WhatsApp%20Audio%202024-03-26%20at%202.14.58%20PM.mpga?alt=media&token=1ecd1b6b-0886-476e-8629-b2a2138f5b36'
    },
    {
        title: "I'm Monster",
        artists: "Lucha, Godemode",
        favourite:false,
        color:"green-500",
        img: "https://www.shazam.com/mkimage/image/thumb/Music114/v4/c2/46/d2/c246d2cd-5f94-0cc3-4a75-f329f5bf7d40/053000625926_cover.jpg/255x255bb-60.webp",
        src: 'https://firebasestorage.googleapis.com/v0/b/musipie-desktop-apk.appspot.com/o/WhatsApp%20Audio%202024-03-26%20at%203.12.16%20PM.mpga?alt=media&token=7ff37085-93c0-44f7-bc8f-a3da7f6fee0c'
    },
    {
        title: "Mirza",
        artists: "Lost Stories",
        favourite:false,
        color:"red-300",
        img: "https://www.shazam.com/mkimage/image/thumb/Music126/v4/63/c6/0e/63c60efd-728b-3c78-454e-251d7565d836/23UM1IM34281.rgb.jpg/255x255bb-60.webp",
        src: 'https://firebasestorage.googleapis.com/v0/b/musipie-desktop-apk.appspot.com/o/Lost%20Stories%2C%20%40JAIDHIR%20-%20Mirza%20%5BOfficial%20Music%20Video%5D.mp3?alt=media&token=579298b6-6875-488f-93c6-ef4f68de4431'
    },
    {
        title: "Pasoori(Coke studio)",
        artists: "Ali sethi, Shae gill",
        favourite:false,
        color:"yellow-300",
        img:"https://www.shazam.com/mkimage/image/thumb/Music116/v4/f3/f9/06/f3f906c3-79d5-ac9a-5fdd-262048f955f9/cover.jpg/255x255bb-60.webp",
        src:'https://firebasestorage.googleapis.com/v0/b/musipie-desktop-apk.appspot.com/o/Coke%20Studio%20Season%2014%20Pasoori%20Ali%20Sethi%20x%20Shae%20Gill.mp3?alt=media&token=1b0554d7-aee7-400d-b18d-2272d30bc6a7'
    },
    {
        title: "Mai Ni Meriye",
        artists: "Lost Stories, Jonita gandhi",
        favourite: false,
        color:null,
        img:"https://www.shazam.com/mkimage/image/thumb/Music113/v4/38/8c/51/388c51c4-842a-5b22-daa0-d38cb2d58b34/195081605111.jpg/255x255bb-60.webp",
        src: "https://firebasestorage.googleapis.com/v0/b/musipie-desktop-apk.appspot.com/o/Lost%20Stories%20-%20Mai%20Ni%20Meriye%20(feat.%20Jonita%20Gandhi%20%26%20Ashwin%20Adwani)%20%5BOfficial%20Visualizer%5D.mp3?alt=media&token=63589282-cb66-4d73-85a5-e751c11a1f8f",
    },
    {
        title: "Leja",
        artists: "Lost Stories, Jaidhir",
        favourite: false,
        color:null,
        img:"https://www.shazam.com/mkimage/image/thumb/Music126/v4/3b/41/31/3b413148-931f-0849-5c4d-b8ce8b903176/23UM1IM34277.rgb.jpg/255x255bb-60.webp",
        src: "https://firebasestorage.googleapis.com/v0/b/musipie-desktop-apk.appspot.com/o/Lost%20Stories%2C%20%40JAIDHIR%20-%20Leja%20%5BOfficial%20Lyric%20Video%5D%20Marigold%20Soundsystem.mp3?alt=media&token=ef81c060-1324-47ef-8f40-876453a3257e",
    },
    {
        title: "The Loneliest",
        artists: "Maneskin",
        favourite: false,
        color:null,
        img:"https://www.shazam.com/mkimage/image/thumb/Music126/v4/05/45/56/05455684-1284-f596-7ef1-29cb01f4b3a4/196871349536.jpg/255x255bb-60.webp",
        src: "https://firebasestorage.googleapis.com/v0/b/musipie-desktop-apk.appspot.com/o/M%C3%A5neskin%20-%20THE%20LONELIEST%20(Official%20Video).mp3?alt=media&token=bc1374f9-7e42-4221-b9bb-75854718d078",
    },
    {
        title: "Forever",
        artists: "ilyTOMMY",
        favourite: false,
        color:null,
        img:"https://www.shazam.com/mkimage/image/thumb/Music116/v4/c3/79/e5/c379e58f-5414-b2d4-9edf-0ccd23385982/0859731370858.jpg/255x255bb-60.webp",
        src: "https://firebasestorage.googleapis.com/v0/b/musipie-desktop-apk.appspot.com/o/ilyTOMMY%20-%20Forever%20(instagram%20%40loverboi).mp3?alt=media&token=0a948c1b-2409-48e8-a393-192dfd1b6125",
    },
    {
        title: "Taaj",
        artists: "Lost Stories Jaidhir",
        favourite: false,
        color:null,
        img:"https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/5d/6e/05/5d6e0545-1090-2a37-46ff-41c44e9d92ce/b9d78a90-57e6-4e3f-8a15-145f0ef7b1ef.png/400x400SC.DN01.webp",
        src: "https://firebasestorage.googleapis.com/v0/b/musipie-desktop-apk.appspot.com/o/Lost%20Stories%2C%20%40JAIDHIR%20-%20Taaj%20%5BOfficial%20Lyric%20Video%5D%20I%20Marigold%20Soundsystem.mp3?alt=media&token=9e9f0f1d-4411-4fca-b68b-2518433ed4f8",
    },
]

export default DummyMusic;