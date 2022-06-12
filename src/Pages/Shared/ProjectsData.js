import spareGear1 from '../../assets/projects/Spare Gear-1.png'
import spareGear2 from '../../assets/projects/Spare Gear-2.png'
import spareGear3 from '../../assets/projects/Spare Gear-3.png'
import fragrance1 from '../../assets/projects/Fragrance-1.png'
import fragrance2 from '../../assets/projects/Fragrance-2.png'
import fragrance3 from '../../assets/projects/Fragrance-3.png'
import inDent1 from '../../assets/projects/inDen-1.png'
import inDent2 from '../../assets/projects/inDen-2.png'
import inDent3 from '../../assets/projects/inDen-3.png'

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
        img1: spareGear1,
        img2: spareGear2,
        img3: spareGear3,
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
        img1: fragrance1,
        img2: fragrance2,
        img3: fragrance3,
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
        img1: inDent1,
        img2: inDent2,
        img3: inDent3,
        liveWebsite: "https://dental-service-f0546.web.app/",
        clientLink: "https://github.com/sayemaa/inDent",
    },
];

export default projects;