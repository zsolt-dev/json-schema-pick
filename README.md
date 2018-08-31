# json-schema-pick

[![Build Status](https://travis-ci.org/zsolt-dev/json-schema-pick.svg?branch=master)](https://travis-ci.org/zsolt-dev/json-schema-pick) [![dependencies Status](https://david-dm.org/zsolt-dev/json-schema-pick/status.svg)](https://david-dm.org/zsolt-dev/json-schema-pick) [![devDependencies Status](https://david-dm.org/zsolt-dev/json-schema-pick/dev-status.svg)](https://david-dm.org/zsolt-dev/json-schema-pick?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Pick only subset of properties from json schema. Inspired by lodash _.pick(), that does the same, but for the objects.** ✨


# Installation
```sh
npm -i json-schema-pick
```

# Usage
```js
import jsonSchemaPick from 'json-schema-pick';

const recipeSchema =
{
  $schema: 'http://json-schema.org/draft-06/schema#',
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 10, maxLength: 130 },
    description: { type: 'string', minLength: 300, maxLength: 10000 },
    instructions: { type: 'string', minLength: 50, maxLength: 10000 },
    calorie_count: { type: 'integer', minimum: 0, maximum: 1000 },
    carbohydrate_count: { type: 'integer', minimum: 0, maximum: 100 },
    fiber_count: { type: 'integer', minimum: 0, maximum: 100 },
    protein_count: { type: 'integer', minimum: 0, maximum: 100 },
    fat_count: { type: 'integer', minimum: 0, maximum: 100 },
    preparation_time: { type: 'integer', minimum: 1, maximum: 200 },
  },
  required: ['title', 'description', 'instructions', 'calorie_count', 'carbohydrate_count', 'fiber_count', 'protein_count', 'fat_count', 'preparation_time'],
};

const recipeSchemaWithoutNutritionalValues = jsonSchemaPick(recipeSchema, ['title', 'description', 'instructions', 'preparation_time']);

// recipeSchemaWithoutNutritionalValues object is now:
{
  $schema: 'http://json-schema.org/draft-06/schema#',
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 10, maxLength: 130 },
    description: { type: 'string', minLength: 300, maxLength: 10000 },
    instructions: { type: 'string', minLength: 50, maxLength: 10000 },
    preparation_time: { type: 'integer', minimum: 1, maximum: 200 },
  },
  required: ['title', 'description', 'instructions', 'preparation_time'],
};

```


# License

MIT
