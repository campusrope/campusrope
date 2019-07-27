import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Helpline: {},
  Trending: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = {};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
