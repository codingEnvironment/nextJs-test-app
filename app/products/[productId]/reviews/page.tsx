import React from 'react'

const reviews = async ({params}: { params: Promise<{ productId: string }> }) => {
    const {productId} = await params
    return (
        <>
        <div>reviews for product - {productId}</div>
            <div>review - 1</div>
            <div>review - 2</div>
            <div>review - 3</div>
        </>
    )
}

export default reviews