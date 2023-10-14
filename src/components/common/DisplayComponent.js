export default function DisplayComponent({ name="", className="", children }) {
  return (
    <div className={`p-6 text-center max-w-full gap-y-4`}>
      <h3 className="text-4xl font-semibold mb-2">{ name }</h3>
      <section className={`flex flex-wrap items-center gap-2 ${className}`}>
        {children}
      </section>
    </div>
  )
}