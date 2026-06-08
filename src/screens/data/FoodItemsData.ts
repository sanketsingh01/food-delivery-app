import { ImageSourcePropType } from 'react-native';

export type foodData = {
    id: number,
    name: string,
    image: ImageSourcePropType,
    price: number,
};

export const foodItems: foodData[] = [
    {
        id: 1,
        name: 'Rosated Salmon',
        image: require('../../assets/food1.png'),
        price: 4.56,
    },
    {
        id: 2,
        name: 'Avacado Salad',
        image: require('../../assets/food2.png'),
        price: 6.77,
    },
    {
        id: 3,
        name: 'Green Salad',
        image: require('../../assets/food3.png'),
        price: 2.56,
    },
    {
        id: 4,
        name: 'Fruit Salad',
        image: require('../../assets/food4.png'),
        price: 5.00,
    },
]
