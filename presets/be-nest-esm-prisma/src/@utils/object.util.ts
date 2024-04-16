/**
 * Convert dot notation to object
 * @example 'foo.bar.baz' => { foo: { bar: { baz: value } } }
 */
export const dotToObject = (dotString: string, value: any) => {
  const keys = dotString.split('.');
  return keys.reduceRight(
    (acc, key, index) => {
      if (index === keys.length - 1) {
        return { [key]: value };
      } else {
        return { [key]: acc };
      }
    },
    {} as Record<string, any>,
  );
};
