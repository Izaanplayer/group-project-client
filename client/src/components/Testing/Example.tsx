export default function Example() {
  return (
    <>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 text-center bg-slate-500 rounded">
        <div className="bg-white">
          1
        </div>
        <div className="col-start-3">
          2
        </div>
        <div>
          3
        </div>
        <div className="bg-white rounded-md">
          4
        </div>
        <div className="row-start-1 col-start-2 col-span-2">
          5
        </div>
      </div>
    </>
  )
}
