import { ImageSourcePropType } from 'react-native';

export type foodData = {
    id: number,
    name: string,
    description: string,
    image: ImageSourcePropType,
    price: number,
};

export const foodItems: foodData[] = [
    {
        id: 1,
        name: 'Rosated Salmon',
        description: 'Grilled salmon fillet',
        image: require('../../assets/food1.png'),
        price: 4.56,
    },
    {
        id: 2,
        name: 'Avacado Salad',
        description: 'Fresh avocado bowl',
        image: require('../../assets/food2.png'),
        price: 6.77,
    },
    {
        id: 3,
        name: 'Green Salad',
        description: 'Crisp garden greens',
        image: require('../../assets/food3.png'),
        price: 2.56,
    },
    {
        id: 4,
        name: 'Fruit Salad',
        description: 'Seasonal fresh fruits',
        image: require('../../assets/food4.png'),
        price: 5.00,
    },
]
