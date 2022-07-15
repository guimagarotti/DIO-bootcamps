import { useEffect, useState } from "react";

const List = ({ getAPI }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAPI().then((result) => setItems(result))
    }, [getAPI])

    return (
        <>
            {items && items.map((item) => <p key={item.id}>{item?.title || item?.name}</p>)}
        </>
    )
}

export default List;