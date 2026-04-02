
const page = async ({params}: { params: Promise<{ productId: string; reviewId: string }> }) => {
  const {productId, reviewId} = await params
  return (
    <div>page - {productId} - {reviewId}</div>
  )
}

export default page