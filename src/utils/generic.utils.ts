export type ValueChecker = <T extends unknown>(value: T) => boolean;

const defaultChecker: ValueChecker = (value) => {
  return value !== undefined && value !== null && value !== '';
};

/**
 * Validate if value is defined. It will check if value is different than undefined, null or empty string.
 * @param value value to validate if is defined
 */
export function def<T extends unknown>(
  value: T,
  valueChecker: ValueChecker = defaultChecker,
): boolean {
  return valueChecker(value);
}

/**
 * Propagates a click on the children elements of an element recursively
 * @param parent the parent element
 */
export function clickOnChildren(parent: HTMLElement): void {
  if (parent.children.length > 0) {
    for (const child of parent.children) {
      clickOnChildren(child as HTMLElement);
    }
  }
  if (def(parent['click'])) {
    parent['click']();
  }
}

export function parseId<T extends { _id?: string }>(value: string | T): string {
  if (typeof value === 'object' && '_id' in value) {
    return value?._id;
  } else if (typeof value === 'string') {
    return value as string;
  }
  throw new Error('Invalid value to parse id');
}
