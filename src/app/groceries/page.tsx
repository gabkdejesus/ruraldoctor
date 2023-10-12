import { getNearbyGroceries } from "../../../lib/getNearbyGroceries";

export default async function Groceries() {
    const data = await getNearbyGroceries("38.887184443518535%2C -77.09676780149996", "150");
    console.log(data);

    return (
        <div className="dark:invert">
            <h1>Hi</h1>
        </div>
    );
}