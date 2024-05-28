
export default function Loading() {
  return (
    <div>

<div className="title text-2xl font-bold text-center">
    <h1>Products</h1>
</div>



<div className="px-2 md:px-4 py-8">
<div className="grid gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
{[...Array(6)].map((_, index) => (
<>

<div className="card flex flex-col bg-[#1e1c1c] rounded-md pb-3">
<div className="animate-pulse">
      <div className="imageSection py-2 flex items-center justify-center w-full aspect-square rounded-t-md">
        <div className="w-[90%] h-[90%] p-2 bg-gray-700 rounded-lg"></div>
      </div>
      <div className="contentSection text-white">
        <div className="title-brand p-2">
          <div className="title text-sm lg:text-md bg-gray-700 h-4 w-3/4 rounded"></div>
          <div className="brand text-xs my-1 bg-gray-700 h-3 w-1/2 rounded"></div>
        </div>
        <div className="priceSection px-2 py-1">
          <div className="price text-md font-bold bg-gray-700 h-4 w-1/3 rounded"></div>
        </div>
      </div>
    </div>
</div>
</>
))}
</div>
</div>

</div>
  )
}
