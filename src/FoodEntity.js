let id_count = 0

export default function FoodEntity(name, price) {
    id_count++;

    console.log("Creating food entity with id: " + id_count
    )
    return {id_count, name, price}
}