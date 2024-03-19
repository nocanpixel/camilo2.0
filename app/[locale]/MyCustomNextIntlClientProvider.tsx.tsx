'use client';

import { NextIntlClientProvider } from 'next-intl';

export default function MyCustomNextIntlClientProvider({
  locale,
  ...rest
}: any) {

  return (
    <NextIntlClientProvider
      // Define non-serializable props here
      // Make sure to forward these props to avoid markup mismatches
      locale={locale}
      {...rest}
    />
  );
}