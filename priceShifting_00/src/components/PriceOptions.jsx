import PriceOption from "../components/PricingOption.jsx"
const PriceOptions = () => {
    const gymPricingOptions = [
        {
            id: 1,
            type: "Basic Monthly",
            description: "Access to gym facilities during staffed hours",
            price: 30,
            duration: "1 month",
            features: [
                "Access to gym equipment",
                "Locker room access",
                "Free parking"
            ]
        },
        {
            id: 2,
            type: "Standard Monthly",
            description: "Includes access to all equipment and group classes",
            price: 50,
            duration: "1 month",
            features: [
                "Access to gym equipment",
                "Locker room access",
                "Free parking",
                "Group classes",
                "Access to fitness app"
            ]
        },
        {
            id: 3,
            type: "Premium Monthly",
            description: "Full access, group classes, and one personal training session per month",
            price: 70,
            duration: "1 month",
            features: [
                "Access to gym equipment",
                "Locker room access",
                "Free parking",
                "Group classes",
                "Access to fitness app",
                "1 personal training session"
            ]
        },
        {
            id: 4,
            type: "Standard Quarterly",
            description: "Access to all equipment and group classes for a full quarter",
            price: 135,
            duration: "3 months",
            features: [
                "Access to gym equipment",
                "Locker room access",
                "Free parking",
                "Group classes",
                "Access to fitness app"
            ]
        },
        {
            id: 5,
            type: "Premium Quarterly",
            description: "Full access, group classes, and monthly personal training sessions",
            price: 180,
            duration: "3 months",
            features: [
                "Access to gym equipment",
                "Locker room access",
                "Free parking",
                "Group classes",
                "Access to fitness app",
                "Monthly personal training sessions"
            ]
        },
        {
            id: 6,
            type: "Annual Basic",
            description: "Basic access to gym facilities during staffed hours",
            price: 300,
            duration: "1 year",
            features: [
                "Access to gym equipment",
                "Locker room access",
                "Free parking"
            ]
        },
        {
            id: 7,
            type: "Annual Standard",
            description: "Full access to all equipment and group classes",
            price: 500,
            duration: "1 year",
            features: [
                "Access to gym equipment",
                "Locker room access",
                "Free parking",
                "Group classes",
                "Access to fitness app"
            ]
        },
        {
            id: 8,
            type: "Annual Premium",
            description: "All-inclusive access, group classes, and monthly personal training sessions",
            price: 700,
            duration: "1 year",
            features: [
                "Access to gym equipment",
                "Locker room access",
                "Free parking",
                "Group classes",
                "Access to fitness app",
                "Monthly personal training sessions",
                "Free guest passes"
            ]
        }
    ];

    return (
        <div>
            {
                gymPricingOptions.map(option => <PriceOption key={option.id} price={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;