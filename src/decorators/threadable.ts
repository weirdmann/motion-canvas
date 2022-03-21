export function threadable(customName?: string): MethodDecorator {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.value.prototype.name = customName ?? propertyKey;
    descriptor.value.prototype.threadable = true;
  };
}
