import { expect } from 'chai';
import jsonSchemaPick from '../src';

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

const recipeSchemaWithoutNutritionalValues =
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

describe('json-schema-pick test', () => {
  it('should pick only the subset of json schema', () => {
    expect(
      jsonSchemaPick(recipeSchema, ['title', 'description', 'instructions', 'preparation_time'])
    ).to.deep.equal(recipeSchemaWithoutNutritionalValues);
  });
});
