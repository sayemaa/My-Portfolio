import spareGear from '../../assets/projects/Spare Gear.png'
import fragrance from '../../assets/projects/Fragrance.png'
import inDent from '../../assets/projects/inDent.png'

const projects = [
    {
        id: '1',
        name: "Spare Gear",
        description: "Spare gear provides the best quality motorbike parts of your motorcycle.",
        point1: "• After a user logs in, they can update their profiles, order products, and add a review.",
        point2: "• After the admin logs in, they can update their profile, and make other users admin.",
        point3: "• Admins can also add and delete products, manage all orders and also ship pending payments.",
        frontEndTechnology: "HTML, Tailwind, daisyUI, JavaScript, React, React Router, Firebase.",
        backEndTechnology: "Node.js, Express.js, MongoDB, JWT.",
        img: spareGear,
        liveWebsite: "https://manufacturer-website-318ed.web.app/",
        clientLink: "https://github.com/sayemaa/Spare-Gear-Client",
        serverLink: "https://github.com/sayemaa/Spare-Gear-Server",
    },
    {
        id: '2',
        name: "Fragrance",
        description: "Fragrance is a perfume warehouse where you may find scents from various brands.",
        point1: "• Users can update any perfume after they log in.",
        point2: "• Perfumes can be restocked or delivered.",
        point3: "• Users can add or delete perfumes and also manage inventory after logging in.",
        frontEndTechnology: "HTML, CSS, JavaScript, React, React Bootstrap, React Router, Firebase.",
        backEndTechnology: "Node.js, Express.js, MongoDB, JWT.",
        img: fragrance,
        liveWebsite: "https://warehouse-management-web-79467.web.app/",
        clientLink: "https://github.com/sayemaa/Fragrance-Warehouse-Client",
        serverLink: "https://github.com/sayemaa/Fragrance-Warehouse-Server",
    },
    {
        id: '3',
        name: "inDent",
        description: "inDent is a website that offers dental services by a professional dentist.",
        point1: "• This website offers information on the services that are provided.",
        point2: "• Users can book an appointment after they log in or register.",
        point3: "• There are three services from which users can book.",
        frontEndTechnology: "HTML, CSS, Bootstrap, JavaScript, React, React Bootstrap, React Router, Firebase.",
        img: inDent,
        liveWebsite: "https://dental-service-f0546.web.app/",
        clientLink: "https://github.com/sayemaa/inDent",
    },
];

export default projects;