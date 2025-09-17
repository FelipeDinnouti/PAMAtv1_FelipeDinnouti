let id_count = 0

export default function FoodStruct(name, price) {
    id_count++;    
    return {name: name, price: price}
}