

export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
  const {productId} = await params
  return (
    <div>ProductDetails - {productId}</div>
  )
}
