import imgTour from '@/assets/images/img-more.png'
import Button from '@/components/Common/Button'
import TourItem from '@/components/Common/TourItem'
import TourItemMobile from '@/components/Common/TourItemMobile'
import fetchData from '@/data/fetchData'
import { DATA_BEST_TOUR_HOME_PAGE_TEST } from '@/graphql/filter/queries'
import Image from 'next/image'
import Link from 'next/link'

export default async function BestSellerTour({ button, dictionary, lang }) {
  const bestTours = await fetchData(DATA_BEST_TOUR_HOME_PAGE_TEST, {
    language: lang?.toUpperCase(),
    bestSellerSlug: ['best-seller-tours']
  })

  let allTours = bestTours?.data?.allTours?.nodes || Array(8)
  const totalTour = bestTours?.data?.allTours?.pageInfo?.offsetPagination?.total

  return (
    <div className='best-tours pt-[8.13vw] relative'>
      <div className='absolute top-0 h-[50vw] w-full bg-white md:hidden'></div>

      <div
        className={`${
          allTours?.length === 0
            ? `w-full block md:mt-[1.88vw] mt-[7.73vw]`
            : 'grid grid-cols-4 relative gap-[2.5vw] md:mt-[1.88vw] mt-[7.73vw] max-md:grid-cols-1 w-[83.75%] ml-auto mr-auto max-md:w-full'
        }`}
      >
        <div className='md:hidden bg-tourMobile'></div>
        {allTours?.length !== 0 ? (
          allTours.map((tour, index) => (
            <div key={index}>
              <div className='max-md:hidden'>
                <TourItem
                  data={tour}
                  lang={lang}
                  loading={false}
                />
              </div>
              <div className='hidden max-md:block'>
                <TourItemMobile
                  data={tour}
                  lang={lang}
                  loading={false}
                />
              </div>
            </div>
          ))
        ) : (
          <div className='text-center text-[3.5vw] font-[600] w-full text-[#c23a3a] font-optima max-md:text-[5.67vw]'>
            {dictionary?.home?.not_found_tour}
          </div>
        )}
        {totalTour > 7 && (
          <div className='lg:h-[24.5vw] md:h-[28vw] h-[62.7vw] rounded-[1vw] relative hidden md:flex  justify-center items-center lastItem'>
            <Image
              src={imgTour}
              alt='img-tour'
              fill
              quality={85}
              className='object-cover h-full rounded-[1vw]'
            />
            <div className='absolute flex flex-col items-center justify-center'>
              <div className='inline-flex gap-[0.3125vw] justify-center items-center'>
                <span className='text-justify font-optima text-[2vw] font-normal leading-[130%] text-white'>+</span>
                <span className='text-white heading-1'>{totalTour - 7}</span>
              </div>
              <span className='text-white text-justify font-optima text-[1.5vw] block font-medium leading-[150%]'>
                {dictionary?.home?.other}
              </span>
              <div className='flex justify-center max-md:hidden mt-[1.25vw] max-md:mt-[8.53vw]'>
                <Link
                  href={`${lang !== 'en' ? `/${lang}` : ''}/search?seller=best-seller-tours`}
                  className='btn-secondary'
                  content={button?.buttonseemore}
                >
                  <span>{button?.buttonseemore}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='flex justify-center md:hidden mt-[8.53vw] mb-[7.93vw]'>
        <Link href={`${lang !== 'en' ? `/${lang}` : ''}/search?seller=best-seller-tours`}>
          <Button className='btn-secondary'>{button?.buttonseemore}</Button>
        </Link>
      </div>
    </div>
  )
}

