import { cn } from '~/utils/misc';
import { Button } from './Button';
import { Container } from './Container';

export function Hero() {
  return (
    <Container className='pb-16 pt-20 text-center lg:pt-32'>
      <h1 className='mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl'>
        Flawless Car Care.{' '}
        <span className='relative whitespace-nowrap text-blue-600'>
          <svg
            aria-hidden='true'
            viewBox='0 0 418 42'
            className='absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70'
            preserveAspectRatio='none'
          >
            <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z' />
          </svg>
          <span className='relative'>Elegancia</span>
        </span>{' '}
        para tu auto.
      </h1>
      <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700'>
        Tu mejor opción para el lavado y cuidado de autos en México. Agenda tu
        cita ahora o descubre más sobre nuestros servicios.
      </p>
      <div className='mt-10 flex justify-center gap-x-6'>
        <Button>Agendar cita</Button>
        <Button variant='outline'>Conoce nuestros servicios</Button>
      </div>
      <div className='mt-36 lg:mt-44'>
        <p className='font-display text-base text-slate-900'>
          Marcas que utilizamos
        </p>
        <ul className='mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0'>
          {[
            [
              {
                name: 'Koch Chemie',
                logo: 'https://www.koch-chemie.com/typo3conf/ext/kochchemie_theme_compare/Resources/Public/Images/logo-single.svg'
              },
              {
                name: 'P&S Detail Products',
                logo: 'https://cdn.shopify.com/s/files/1/0317/0631/6932/files/Web_Photo_Editor_1_06770a42-1839-4349-b572-3dd446a6ed85.png?v=1631744907'
              },
              {
                name: 'The Rag Company',
                logo: 'data:image/jpeg;base64,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'
              }
            ],
            [
              {
                name: 'Microfiber Madness',
                logo: 'https://www.microfibermadness.de/sites/default/files/logo.png'
              },
              {
                name: 'Detail Factory',
                logo: 'https://detailfactory.net/wp-content/uploads/2022/02/Detail-Factory_TRANS_Logo_Web_White_BG.png'
              },
              {
                name: 'Geist Leather Care',
                logo: 'https://cdn.shopify.com/s/files/1/0598/3171/3932/files/Geist_Logo_Web_Header_Dark_d550f619-9440-449c-a070-d5bd87945217.png?height=628&pad_color=ffffff&v=1663162005&width=1200'
              }
            ]
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul className='flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0'>
                {group.map(company => (
                  <li key={company.name} className='flex'>
                    <img
                      src={company.logo}
                      alt={company.name}
                      className={cn(
                        company.name === 'Koch Chemie' ? 'h-8' : 'h-16'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
