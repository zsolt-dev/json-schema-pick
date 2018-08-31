export default (schema, keys) => (
  {
    ...schema,
    properties: keys.reduce((accumulator, key) => {
      if (typeof schema.properties[key] === 'undefined') return accumulator;
      return {
        ...accumulator,
        [key]: schema.properties[key],
      };
    }, {}),
    required: schema.required.filter(req => keys.includes(req)),
  }
);
