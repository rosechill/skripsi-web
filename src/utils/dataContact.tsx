import { DataContact } from "@/interfaces/contactInterface"; 
import { FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";

export const dataContact: DataContact[] = [
    {
        icon: FaPhoneAlt,
        caption: "+62 812-4960-5055",
        path:"https://api.whatsapp.com/send/?phone=6281249605055&text&type=phone_number&app_absent=0",
    },
    {
        icon: FaEnvelope,
        caption: "info@travelxism.com",
        path:"https://www.travelxism.com/",
    },
    {
        icon: FaHome,
        caption: "Genius Idea Coworking Space, Jl. Magelang No.32-34 lantai 2, Cokrodiningratan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233 ",
        path:"https://www.google.com/maps/place/Genius+Idea+Coworking+Space/@-7.7804301,110.3584654,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a5839513fb791:0x719c9a330d0c99b5!8m2!3d-7.7804301!4d110.3610403!16s%2Fg%2F11g8g4qtj6?entry=ttu",
    },
];
