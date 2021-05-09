import Link from 'next/link'
import { getTrimmedString } from '../../utils/helpers'
import Image from '../Image'

const DisplaySmall = ({ link, title, subtitle, imageSrc }) =>  (
  <div className="lg:w-flex-fourth
  px-6 pt-10 pb-2 lg:p-6 lg:pb-0
  lg:mb-0 mb-4">
    <Link href={link}>
      <a aria-label={title}>
        <div className="flex flex-column justify-center items-center h-44">
          <Image alt={title} src={imageSrc} className="w-full" />
        </div>
        <div className="">
          <p className="text-xl font-semibold mb-1 hover:underline">{title}</p>
          <p className="text-xs text-gray-700 mb-4">{subtitle}</p>
        </div>
      </a>
    </Link>
  </div>
)

export default DisplaySmall