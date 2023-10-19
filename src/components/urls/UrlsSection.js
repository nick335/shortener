import UrlCard from './UrlCard'

export default function UrlsSection({ data }) {
  return (
    <section className={`pxt-[1.56rem] flex flex-col gap-y-[3.38rem] lg:gap-y-[1.88rem] grow overflow-y-scroll scrollbar-thin scrollbar-track-[#E1E1E1]/[70%] scrollbar-thumb-dart scrollbar-thumb-rounded-2xl scrollbar-track-rounded-2xl pb-8 xl:max-w-[80%]`}>
      {
        data && data.length ? (
          data.map(({ id, ...props}) => (
            <UrlCard key={id} {...props} />
          ))
        ) : 'Loading...'
      }
    </section>
  )
}
