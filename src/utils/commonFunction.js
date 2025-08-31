

// Get Order Data

const getOrder = async () => {
    const res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/orders.json');
    const data = await res.json();
    return data;
}

export getOrder;